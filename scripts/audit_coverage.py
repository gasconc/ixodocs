#!/usr/bin/env python3
"""
Coverage auditor.

Reads scripts/coverage_sources.yml, fetches each source's sitemap (and any
nested sitemap indices) plus explicit extra_urls, then diffs the resulting
set of "published" URLs against docs_manifest.json.

Output: a markdown report listing, per source:
  - missing URLs (published but not in the manifest — a scraping gap)
  - stale URLs (in the manifest but no longer published — a candidate for removal)

Usage:
    python scripts/audit_coverage.py
    python scripts/audit_coverage.py --output coverage-report.md
    python scripts/audit_coverage.py --strict   # exit 1 if any missing URLs
"""

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree as ET

import requests
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
SOURCES_YAML = REPO_ROOT / "scripts" / "coverage_sources.yml"
MANIFEST_PATH = REPO_ROOT / "docs_manifest.json"
DEFAULT_OUTPUT = REPO_ROOT / "coverage-report.md"

SITEMAP_NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
HTTP_TIMEOUT = 30


def _normalize(url: str) -> str:
    """Strip fragment and trailing slash (except for root '/') for comparison."""
    if not url:
        return url
    u = url.split("#", 1)[0].strip()
    parsed = urlparse(u)
    if parsed.path.endswith("/") and parsed.path != "/":
        u = u[:-1]
    return u


def _fetch_sitemap(sitemap_url: str, _seen: set[str] | None = None) -> list[str]:
    """
    Fetch a sitemap (or sitemap index) and return all <loc> URLs.
    Recursively follows sitemap index entries.
    """
    if _seen is None:
        _seen = set()
    if sitemap_url in _seen:
        return []
    _seen.add(sitemap_url)

    urls: list[str] = []
    try:
        resp = requests.get(sitemap_url, timeout=HTTP_TIMEOUT)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  WARN: failed to fetch {sitemap_url}: {e}", file=sys.stderr)
        return urls

    try:
        root = ET.fromstring(resp.content)
    except ET.ParseError as e:
        print(f"  WARN: malformed XML at {sitemap_url}: {e}", file=sys.stderr)
        return urls

    # Sitemap index: recurse into each nested <sitemap><loc>…</loc></sitemap>
    for loc in root.findall(f"{SITEMAP_NS}sitemap/{SITEMAP_NS}loc"):
        if loc.text:
            urls.extend(_fetch_sitemap(loc.text.strip(), _seen))

    # Regular sitemap: collect each <url><loc>…</loc></url>
    for loc in root.findall(f"{SITEMAP_NS}url/{SITEMAP_NS}loc"):
        if loc.text:
            urls.append(loc.text.strip())

    return urls


def _matches_include_paths(url: str, include_paths: list[str]) -> bool:
    if not include_paths:
        return True
    path = urlparse(url).path
    return any(p in path for p in include_paths)


def _matches_exclude_paths(url: str, exclude_paths: list[str]) -> bool:
    if not exclude_paths:
        return False
    path = urlparse(url).path
    return any(p in path for p in exclude_paths)


def _host_of(url: str) -> str:
    return urlparse(url).netloc


def _load_sources() -> list[dict]:
    data = yaml.safe_load(SOURCES_YAML.read_text(encoding="utf-8")) or {}
    return data.get("sources", [])


def _load_manifest_urls() -> set[str]:
    if not MANIFEST_PATH.exists():
        return set()
    data = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    return {_normalize(u) for u in data.get("pages", {}).keys()}


def audit_source(source: dict, manifest_urls: set[str]) -> dict:
    name = source["name"]
    include_paths: list[str] = source.get("include_paths") or []
    exclude_paths: list[str] = source.get("exclude_paths") or []
    sitemap_url: str | None = source.get("sitemap_url")
    extra_urls: list[str] = source.get("extra_urls") or []

    published: set[str] = set()
    hosts: set[str] = set()

    def _keep(u: str) -> bool:
        return _matches_include_paths(u, include_paths) and not _matches_exclude_paths(u, exclude_paths)

    if sitemap_url:
        for url in _fetch_sitemap(sitemap_url):
            n = _normalize(url)
            if not _keep(n):
                continue
            published.add(n)
            hosts.add(_host_of(n))

    for extra in extra_urls:
        n = _normalize(extra)
        published.add(n)
        hosts.add(_host_of(n))

    # Missing: in published set but not in our manifest.
    missing = sorted(published - manifest_urls)

    # Stale: in manifest AND on the same hosts AND within include/exclude
    # scope, but no longer announced as published. Scoped to avoid flagging
    # docs that belong to a different source.
    if hosts:
        relevant = {u for u in manifest_urls if _host_of(u) in hosts and _keep(u)}
        stale = sorted(relevant - published)
    else:
        stale = []

    return {
        "name": name,
        "description": source.get("description", ""),
        "published_count": len(published),
        "indexed_count": len(published & manifest_urls),
        "missing": missing,
        "stale": stale,
    }


def render_report(results: list[dict]) -> str:
    total_missing = sum(len(r["missing"]) for r in results)
    total_stale = sum(len(r["stale"]) for r in results)
    now = datetime.now(timezone.utc).isoformat(timespec="seconds")

    lines = [
        "# Coverage Audit Report",
        "",
        f"_Generated at {now}_",
        "",
        f"**{total_missing} missing** · **{total_stale} stale** across "
        f"{len(results)} source(s).",
        "",
        "Legend:",
        "- **Missing**: URL is published upstream but absent from `docs_manifest.json` (scraping gap).",
        "- **Stale**: URL is in the manifest but no longer announced upstream (candidate for removal).",
        "",
    ]

    for r in results:
        lines.append(f"## {r['name']}")
        if r.get("description"):
            lines.append(f"_{r['description']}_")
        lines.append("")
        lines.append(
            f"- Published: **{r['published_count']}** "
            f"· Indexed: **{r['indexed_count']}** "
            f"· Missing: **{len(r['missing'])}** "
            f"· Stale: **{len(r['stale'])}**"
        )
        lines.append("")

        if r["missing"]:
            lines.append("### Missing (published but not indexed)")
            lines.append("")
            for u in r["missing"]:
                lines.append(f"- {u}")
            lines.append("")

        if r["stale"]:
            lines.append("### Stale (indexed but no longer published)")
            lines.append("")
            for u in r["stale"]:
                lines.append(f"- {u}")
            lines.append("")

    return "\n".join(lines) + "\n"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.strip().splitlines()[0])
    parser.add_argument(
        "--output",
        default=str(DEFAULT_OUTPUT),
        metavar="FILE",
        help=f"Output markdown path (default: {DEFAULT_OUTPUT.relative_to(REPO_ROOT)})",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit with code 1 if any source has missing URLs.",
    )
    args = parser.parse_args(argv)

    sources = _load_sources()
    manifest_urls = _load_manifest_urls()

    print(f"Loaded {len(manifest_urls)} manifest URLs and {len(sources)} source(s).")
    print()

    results: list[dict] = []
    for source in sources:
        print(f"Auditing {source['name']}…")
        results.append(audit_source(source, manifest_urls))

    report = render_report(results)
    Path(args.output).write_text(report, encoding="utf-8")
    print(f"\nReport written to {args.output}")

    total_missing = sum(len(r["missing"]) for r in results)
    total_stale = sum(len(r["stale"]) for r in results)
    print(f"Summary: {total_missing} missing, {total_stale} stale")

    if args.strict and total_missing > 0:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
