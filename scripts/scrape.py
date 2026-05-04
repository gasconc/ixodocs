"""
Docusaurus SPA scraper using Crawl4AI.

Usage:
    python scripts/scrape.py --target ixopay-dev
    python scripts/scrape.py --target all
    python scripts/scrape.py --target ixopay-dev --max-pages 10
    python scripts/scrape.py --target all --output-dir docs/
"""

import argparse
import asyncio
import hashlib
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
from crawl4ai.cache_context import CacheMode
from crawl4ai.deep_crawling import BFSDeepCrawlStrategy
from crawl4ai.deep_crawling.filters import DomainFilter, FilterChain, URLPatternFilter

# ---------------------------------------------------------------------------
# Target definitions
# ---------------------------------------------------------------------------

TARGETS = {
    "ixopay-dev": {
        "base_url": "https://documentation.ixopay.com/",
        "output_dir": "docs/ixopay",
        "exclude_patterns": ["/manual/", "/modules/"],
        "description": "Ixopay Developer Hub",
    },
    "ixopay-manual": {
        "base_url": "https://documentation.ixopay.com/manual/",
        "output_dir": "docs/ixopay/manual",
        "exclude_patterns": [],
        "description": "Ixopay User Manual",
    },
    "ixopay-modules": {
        "base_url": "https://documentation.ixopay.com/modules/",
        "output_dir": "docs/ixopay/modules",
        "exclude_patterns": [],
        "description": "Ixopay Modules (TokenEx integration)",
    },
    "tokenex": {
        "base_url": "https://documentation.ixopay.com/modules/docs/tokenex/",
        "start_url": "https://documentation.ixopay.com/modules/docs/tokenex/welcome",
        "output_dir": "docs/tokenex",
        "exclude_patterns": [],
        "description": "TokenEx Documentation (hosted under Ixopay Modules)",
    },
    "congrify": {
        "base_url": "https://docs.congrify.com/",
        "output_dir": "docs/congrify",
        "exclude_patterns": [],
        "description": "Congrify Payment Intelligence",
    },
    "ixopay-legal": {
        "base_url": "https://www.ixopay.com/legal/",
        "output_dir": "docs/ixopay/legal",
        "exclude_patterns": [],
        # The corporate site is not Docusaurus; its content container is
        # `.page-content`, not `article`/`main`/`.markdown`.
        "css_selector": ".page-content",
        "seed_urls": [
            "https://www.ixopay.com/legal/subprocessors",
            "https://www.ixopay.com/legal/dpa",
            "https://www.ixopay.com/legal/msa",
            "https://www.ixopay.com/legal/sla",
            "https://www.ixopay.com/legal/security-trust",
            "https://www.ixopay.com/legal/privacy-notice",
            "https://www.ixopay.com/legal/social-media-privacy-notice",
            "https://www.ixopay.com/legal/tokenex-legacy",
        ],
        "description": "Ixopay Legal & Compliance (subprocessors, DPA, privacy, terms)",
    },
}

# ---------------------------------------------------------------------------
# URL → filepath helpers
# ---------------------------------------------------------------------------

# Extensions and path segments that are never content pages
_SKIP_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico", ".webp",
    ".pdf", ".zip", ".tar", ".gz",
    ".css", ".js", ".woff", ".woff2", ".ttf", ".eot",
    ".mp4", ".mp3", ".webm",
}

_SKIP_PATTERNS = re.compile(
    r"(#|/assets/|/static/|/img/|/images/|/__docusaurus|/search\b)"
)


def _should_skip_url(url: str) -> bool:
    parsed = urlparse(url)
    # Skip anchors-only (same-page links)
    if parsed.fragment and not parsed.path:
        return True
    path = parsed.path.lower()
    ext = os.path.splitext(path)[1]
    if ext in _SKIP_EXTENSIONS:
        return True
    if _SKIP_PATTERNS.search(url):
        return True
    return False


def _url_to_filepath(url: str, base_url: str, output_dir: str) -> Path:
    """
    Derive a local .md file path from a URL.

    Examples:
      https://documentation.ixopay.com/docs/guides/accept-payments
        → docs/ixopay/guides/accept-payments.md
      https://docs.tokenex.com/docs/getting-started
        → docs/tokenex/guides/getting-started.md
    """
    parsed = urlparse(url)
    base_parsed = urlparse(base_url)

    # Strip the base path prefix to get a relative path
    path = parsed.path
    base_path = base_parsed.path.rstrip("/")
    if path.startswith(base_path):
        path = path[len(base_path):]

    # Clean leading/trailing slashes
    path = path.strip("/")

    # Remove common redundant path prefixes ("docs", "documentation")
    # to keep file structure tidy — only at the very start
    for prefix in ("docs/", "documentation/"):
        if path.startswith(prefix):
            path = path[len(prefix):]
            break

    # Fallback for empty path (root page)
    if not path:
        path = "index"

    # Sanitise each segment: replace non-alphanumeric chars with hyphens
    segments = path.split("/")
    clean_segments = []
    for seg in segments:
        seg = re.sub(r"[^a-zA-Z0-9._-]", "-", seg)
        seg = re.sub(r"-{2,}", "-", seg).strip("-")
        if seg:
            clean_segments.append(seg)

    if not clean_segments:
        clean_segments = ["index"]

    # Ensure last segment has .md extension (drop existing html extension if any)
    last = clean_segments[-1]
    if last.endswith(".html"):
        last = last[:-5]
    if not last.endswith(".md"):
        last = last + ".md"
    clean_segments[-1] = last

    return Path(output_dir) / Path(*clean_segments)


# ---------------------------------------------------------------------------
# Manifest helpers
# ---------------------------------------------------------------------------

MANIFEST_PATH = Path("docs_manifest.json")


def _load_manifest() -> dict:
    if MANIFEST_PATH.exists():
        try:
            return json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            pass
    return {"last_updated": "", "pages": {}}


def _save_manifest(manifest: dict) -> None:
    manifest["last_updated"] = datetime.now(timezone.utc).isoformat()
    MANIFEST_PATH.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8"
    )


# ---------------------------------------------------------------------------
# Core scraping logic
# ---------------------------------------------------------------------------


def _build_url_filter(target_cfg: dict) -> FilterChain:
    """
    Build a FilterChain that:
    1. Restricts crawling to the same domain.
    2. Optionally excludes specified path patterns.
    """
    base_url = target_cfg["base_url"]
    parsed = urlparse(base_url)
    domain = parsed.netloc  # e.g. "documentation.ixopay.com"

    filters: list = [DomainFilter(allowed_domains=[domain])]

    base_path = parsed.path.rstrip("/")
    if base_path:
        # Only follow URLs under the base path
        filters.append(
            URLPatternFilter(patterns=[f"{base_path}/*"], use_glob=True, reverse=False)
        )

    for excl in target_cfg.get("exclude_patterns", []):
        filters.append(
            URLPatternFilter(patterns=[f"*{excl}*"], use_glob=True, reverse=True)
        )

    return FilterChain(filters=filters)


def _extract_title(markdown_text: str, url: str) -> str:
    """Extract the first H1 heading from markdown, or fall back to URL path."""
    for line in markdown_text.splitlines():
        line = line.strip()
        if line.startswith("# "):
            return line[2:].strip()
    # Fallback: last segment of URL path
    return urlparse(url).path.rstrip("/").rsplit("/", 1)[-1].replace("-", " ").title()


async def scrape_target(
    target_name: str,
    target_cfg: dict,
    output_dir_override: str | None,
    max_pages: int | None,
    manifest: dict,
) -> int:
    """Scrape a single target. Returns the number of pages saved."""
    output_dir = output_dir_override if output_dir_override else target_cfg["output_dir"]
    base_url = target_cfg["base_url"]
    start_url = target_cfg.get("start_url", base_url)
    description = target_cfg["description"]

    print(f"\n{'='*60}")
    print(f"Target : {target_name} — {description}")
    print(f"Base URL: {base_url}")
    print(f"Output  : {output_dir}")
    print(f"{'='*60}")

    filter_chain = _build_url_filter(target_cfg)

    deep_crawl_cfg = BFSDeepCrawlStrategy(
        max_depth=10,
        filter_chain=filter_chain,
        include_external=False,
        max_pages=max_pages if max_pages else float("inf"),
    )

    browser_cfg = BrowserConfig(
        browser_type="chromium",
        headless=True,
        java_script_enabled=True,
        verbose=False,
    )

    # CSS selectors tried in priority order for content extraction.
    # Targets can override via `css_selector` when their site uses a
    # different content container (e.g. the Ixopay corporate site).
    css_selector = target_cfg.get("css_selector", "article, .markdown, main")

    run_cfg = CrawlerRunConfig(
        css_selector=css_selector,
        word_count_threshold=50,   # skip pages with fewer than 50 words
        cache_mode=CacheMode.BYPASS,
        wait_until="networkidle",
        page_timeout=30_000,
        deep_crawl_strategy=deep_crawl_cfg,
        mean_delay=1.5,   # ~1.5 s average between requests
        max_range=1.0,    # ±1 s jitter → actual range 0.5–2.5 s
        verbose=False,
        exclude_external_links=True,
    )

    saved = 0
    failed: list[str] = []
    seen_urls: set[str] = set()
    page_num = 0

    # Seeds: the primary start_url plus any explicit extras from target config.
    # Extras cover sites where BFS from base_url fails to surface pages (e.g. an
    # index page with no in-site links, or URLs absent from the sitemap).
    seeds: list[str] = [start_url]
    for extra in target_cfg.get("seed_urls", []):
        if extra not in seeds:
            seeds.append(extra)

    async with AsyncWebCrawler(config=browser_cfg) as crawler:

        async def _process(result):
            nonlocal saved, page_num

            url = result.url
            if url in seen_urls:
                return
            seen_urls.add(url)
            page_num += 1

            if _should_skip_url(url):
                return

            print(f"  [{page_num}] {url}")

            if not result.success:
                print(f"    ERROR: {result.error_message}")
                failed.append(url)
                return

            # Get markdown content
            md_obj = result.markdown
            if md_obj is None:
                print(f"    SKIP: no markdown content")
                return

            raw_md = str(md_obj)  # MarkdownGenerationResult.__str__ → raw_markdown
            if not raw_md.strip():
                print(f"    SKIP: empty content")
                return

            # Ensure the body starts with an H1 so downstream validation
            # (clean.py requires at least one heading) never rejects pages
            # whose content is a pure table or paragraph block.
            title = _extract_title(raw_md, url)
            if not re.search(r"^\s*#\s+", raw_md, re.MULTILINE):
                raw_md = f"# {title}\n\n{raw_md}"

            # Prepend a minimal frontmatter with source_url so citations
            # always work. clean.py preserves existing frontmatter keys.
            frontmatter_block = f"---\nsource_url: {url}\n---\n\n"
            raw_md = frontmatter_block + raw_md

            # Derive output path
            filepath = _url_to_filepath(url, base_url, output_dir)
            filepath.parent.mkdir(parents=True, exist_ok=True)
            filepath.write_text(raw_md, encoding="utf-8")

            # Update manifest
            sha = hashlib.sha256(raw_md.encode("utf-8")).hexdigest()
            manifest["pages"][url] = {
                "local_path": str(filepath),
                "sha256": sha,
                "scraped_at": datetime.now(timezone.utc).isoformat(),
                "title": title,
            }

            saved += 1
            print(f"    SAVED → {filepath}  (title: {title!r})")

        for seed in seeds:
            result_iter = await crawler.arun(url=seed, config=run_cfg)
            if hasattr(result_iter, "__aiter__"):
                async for result in result_iter:
                    await _process(result)
            else:
                iter_results = result_iter if isinstance(result_iter, list) else [result_iter]
                for result in iter_results:
                    await _process(result)

    if failed:
        print(f"\n  Failed URLs ({len(failed)}):")
        for u in failed:
            print(f"    - {u}")

    print(f"\n  Done: {saved} pages saved for {target_name}")
    return saved


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------


def parse_args(argv=None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Scrape Docusaurus documentation sites to markdown files."
    )
    parser.add_argument(
        "--target",
        required=True,
        choices=list(TARGETS.keys()) + ["all"],
        help="Which target to scrape, or 'all' for every target.",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=None,
        metavar="N",
        help="Maximum number of pages to scrape per target (useful for testing).",
    )
    parser.add_argument(
        "--output-dir",
        default=None,
        metavar="DIR",
        help="Override the output directory for all targets.",
    )
    return parser.parse_args(argv)


async def main(argv=None) -> None:
    args = parse_args(argv)

    target_names = list(TARGETS.keys()) if args.target == "all" else [args.target]

    manifest = _load_manifest()
    total_saved = 0

    for name in target_names:
        cfg = TARGETS[name]
        saved = await scrape_target(
            target_name=name,
            target_cfg=cfg,
            output_dir_override=args.output_dir,
            max_pages=args.max_pages,
            manifest=manifest,
        )
        total_saved += saved
        # Persist manifest after each target so partial runs are not lost
        _save_manifest(manifest)
        print(f"Manifest saved to {MANIFEST_PATH} ({len(manifest['pages'])} total pages)")

    print(f"\nAll done. {total_saved} pages saved across {len(target_names)} target(s).")


if __name__ == "__main__":
    asyncio.run(main())
