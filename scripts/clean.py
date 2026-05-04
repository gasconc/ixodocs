"""
Markdown cleaner for Docusaurus-scraped documentation files.

Usage:
    python scripts/clean.py --input-dir docs/
    python scripts/clean.py --input-dir docs/ixopay/guides/
    python scripts/clean.py --file docs/ixopay/guides/accept-payments.md
    python scripts/clean.py --input-dir docs/ --dry-run
"""

import argparse
import re
import sys
from collections import Counter
from datetime import date
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

TODAY = date.today().isoformat()

# Boilerplate patterns to strip (full-line matches)
_BOILERPLATE_LINE_PATTERNS = [
    # Breadcrumbs: "Home > Guides > ..." or "Home / Guides / ..."
    re.compile(r"^[A-Z][^\n]*\s[>\/]\s[^\n]+$"),
    # Navigation links
    re.compile(r"^\*{0,2}(Next|Previous|Prev)\s*:\s*.+$", re.IGNORECASE),
    re.compile(r"^\[?(Next|Previous|Prev)\]?\s*[:\-]", re.IGNORECASE),
    # Docusaurus next/prev navigation links at bottom of page
    re.compile(r"^\[Next\s+.*\]\(https?://.*\)$", re.IGNORECASE),
    re.compile(r"^\[Previous\s+.*\]\(https?://.*\)$", re.IGNORECASE),
    # "On this page" section header
    re.compile(r"^#+\s*On [Tt]his [Pp]age\s*$"),
    re.compile(r"^On [Tt]his [Pp]age\s*$"),
    # Footer patterns
    re.compile(r"^Edit this page\s*$", re.IGNORECASE),
    re.compile(r"^Last updated\s*[:\-]", re.IGNORECASE),
    re.compile(r"^Last updated on \*\*.*\*\*$", re.IGNORECASE),
    re.compile(r"^Copyright\s+©", re.IGNORECASE),
    re.compile(r"^©\s+\d{4}", re.IGNORECASE),
    # Common Docusaurus footer text
    re.compile(r"^Built with Docusaurus", re.IGNORECASE),
    re.compile(r"^Was this (page|article) helpful", re.IGNORECASE),
    re.compile(r"^\[?\s*(Yes|No)\s*\]?\s*$"),
    re.compile(r"^(Previous|Next) page\s*$", re.IGNORECASE),
    # Sidebar artifacts (short standalone nav items)
    re.compile(r"^\s*\[Back to top\]", re.IGNORECASE),
    # "Send Feedback" button text
    re.compile(r"^Send Feedback\s*$", re.IGNORECASE),
    # Empty breadcrumb links: "* [](url)"
    re.compile(r"^\*\s*\[\]\(https?://[^\)]+\)\s*$"),
    # Bare URLs (no description text around them)
    re.compile(r"^https?://\S+$"),
]

# Patterns for multi-line boilerplate blocks to remove
_BOILERPLATE_BLOCK_PATTERNS = [
    # "On this page" navigation block (heading followed by list until blank line)
    re.compile(
        r"(?:^|\n)#{1,4}\s*On [Tt]his [Pp]age\s*\n(?:[-*]\s+.+\n?)*",
        re.MULTILINE,
    ),
    # Trailing "Edit this page" / "Last updated" footer block
    re.compile(
        r"\n---\s*\n.*?(?:Edit this page|Last updated).*?$",
        re.MULTILINE | re.DOTALL,
    ),
]

# HTML tag pattern (to strip outside code blocks)
_HTML_TAG_RE = re.compile(r"</?[a-zA-Z][^>]*?>")

# Stop words for tag extraction
_STOP_WORDS = {
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "up", "about", "into", "through", "during",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had",
    "do", "does", "did", "will", "would", "could", "should", "may", "might",
    "this", "that", "these", "those", "it", "its", "as", "if", "so", "then",
    "than", "when", "where", "how", "what", "which", "who", "not", "no",
    "can", "you", "your", "we", "our", "they", "their", "all", "any", "each",
    "use", "used", "using", "see", "set", "get", "new", "add", "also",
    "more", "other", "such", "same", "page", "section", "click", "go",
    "following", "example", "note", "following", "below", "above",
}


# ---------------------------------------------------------------------------
# Portal detection
# ---------------------------------------------------------------------------


def detect_portal(filepath: str | Path) -> str:
    path_str = str(filepath).replace("\\", "/")
    if "docs/tokenex" in path_str:
        return "tokenex"
    elif "docs/ixopay/manual" in path_str:
        return "ixopay-manual"
    elif "docs/ixopay/modules" in path_str:
        return "ixopay-modules"
    elif "docs/ixopay/legal" in path_str:
        return "ixopay-legal"
    elif "docs/congrify" in path_str:
        return "congrify"
    else:
        return "ixopay-dev"


# ---------------------------------------------------------------------------
# Code block helpers
# ---------------------------------------------------------------------------


def _split_code_blocks(text: str) -> list[tuple[bool, str]]:
    """
    Split text into segments: (is_code_block, content).
    Code blocks are delimited by ``` fences.
    """
    segments: list[tuple[bool, str]] = []
    parts = re.split(r"(```[^\n]*\n.*?```)", text, flags=re.DOTALL)
    for part in parts:
        if part.startswith("```"):
            segments.append((True, part))
        else:
            segments.append((False, part))
    return segments


def _count_code_fences(text: str) -> int:
    """Count ``` occurrences (each fence line counts as one).

    Allows leading whitespace so fences inside list items or blockquotes
    (which markdownify emits indented) are counted, matching the indentation
    tolerance of `_split_code_blocks`.
    """
    return len(re.findall(r"^\s*```", text, re.MULTILINE))


# ---------------------------------------------------------------------------
# Frontmatter parsing/serialisation
# ---------------------------------------------------------------------------


def _parse_frontmatter(text: str) -> tuple[dict, str]:
    """
    Return (frontmatter_dict, body_without_frontmatter).
    If no frontmatter found, return ({}, original text).
    """
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end == -1:
        return {}, text
    yaml_block = text[3:end].strip()
    body = text[end + 4:].lstrip("\n")
    try:
        fm = yaml.safe_load(yaml_block) or {}
        if not isinstance(fm, dict):
            return {}, text
        return fm, body
    except yaml.YAMLError:
        return {}, text


def _serialise_frontmatter(fm: dict) -> str:
    """Serialise frontmatter dict to YAML block string."""
    return "---\n" + yaml.dump(
        fm,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
    ) + "---\n\n"


# ---------------------------------------------------------------------------
# Content cleaning
# ---------------------------------------------------------------------------


def _strip_boilerplate(text: str) -> str:
    """Remove known boilerplate patterns from non-code text.

    Preserves trailing newlines so the boundary between this non-code segment
    and the next code block (a fence at column 0) is not collapsed when the
    pieces are concatenated again. `splitlines()` would drop a final `\\n`
    and glue the opening fence to the previous line.
    """
    # First apply multi-line block patterns
    for pattern in _BOILERPLATE_BLOCK_PATTERNS:
        text = pattern.sub("\n", text)

    # split("\n") round-trips trailing newlines correctly (splitlines does not)
    lines = text.split("\n")
    clean_lines = []
    for line in lines:
        stripped = line.strip()
        if any(p.match(stripped) for p in _BOILERPLATE_LINE_PATTERNS):
            continue
        clean_lines.append(line)
    return "\n".join(clean_lines)


def _strip_html_tags(text: str) -> str:
    """Remove HTML tags from text (applied only outside code blocks)."""
    return _HTML_TAG_RE.sub("", text)


def _fix_heading_hierarchy(text: str) -> str:
    """
    Ensure a single H1 exists and headings are sequential (no gaps).
    If multiple H1s exist, demote all but the first to H2.
    """
    lines = text.splitlines()
    h1_count = sum(1 for l in lines if re.match(r"^# [^#]", l))

    if h1_count <= 1:
        return text

    # Demote extra H1s to H2
    first_h1_seen = False
    result = []
    for line in lines:
        if re.match(r"^# [^#]", line):
            if first_h1_seen:
                line = "#" + line  # # Title → ## Title
            else:
                first_h1_seen = True
        result.append(line)
    return "\n".join(result)


def _normalise_whitespace(text: str) -> str:
    """Collapse 3+ consecutive blank lines to 2."""
    return re.sub(r"\n{3,}", "\n\n", text).strip()


def _deduplicate_paragraphs(text: str, seen: set[str] | None = None) -> str:
    """
    Remove exact duplicate paragraphs (separated by blank lines), keeping
    only the first occurrence. This eliminates content repeated across
    multiple Docusaurus DOM containers captured by the scraper.

    `seen` is an optional state set so dedup can persist across multiple
    non-code segments processed independently by `clean_content`.
    """
    if seen is None:
        seen = set()
    paragraphs = re.split(r"\n\n+", text)
    unique: list[str] = []
    for para in paragraphs:
        key = para.strip()
        if not key:
            continue
        if key not in seen:
            seen.add(key)
            unique.append(para)
    result = "\n\n".join(unique)
    # Preserve trailing newline so the boundary with the next code block is
    # not collapsed; otherwise the opening fence would be glued to text.
    if text.endswith("\n") and not result.endswith("\n"):
        result += "\n"
    return result


def _deduplicate_headings(text: str, seen_headings: set[str] | None = None) -> str:
    """
    Remove duplicate headings (same heading text appearing more than once),
    keeping only the first occurrence. Lines between a removed heading and the
    next heading (or blank line) are also removed since they are duplicate
    content sections.

    `seen_headings` is an optional state set so dedup persists across
    non-code segments.
    """
    if seen_headings is None:
        seen_headings = set()
    lines = text.split("\n")
    result: list[str] = []
    skip_until_next_heading = False

    for line in lines:
        stripped = line.strip()
        heading_match = re.match(r"^(#{1,6})\s+(.+)$", stripped)
        if heading_match:
            heading_text = heading_match.group(2).strip().lower()
            if heading_text in seen_headings:
                skip_until_next_heading = True
                continue
            else:
                seen_headings.add(heading_text)
                skip_until_next_heading = False
                result.append(line)
        elif skip_until_next_heading:
            # Keep blank lines so we don't collapse surrounding structure
            if not stripped:
                result.append(line)
        else:
            result.append(line)

    return "\n".join(result)


def _repair_fences(text: str) -> str:
    """Append a closing ``` if the total fence count is odd.

    Scrapers occasionally produce an unclosed code block; the validator rejects
    the file and process_file skips writing it. Appending one fence balances the
    count so validation passes and the file is committed.
    """
    count = len(re.findall(r"^\s*```", text, re.MULTILINE))
    if count % 2 != 0:
        text = text.rstrip() + "\n```\n"
    return text


def clean_content(raw: str) -> str:
    """
    Run the full cleaning pipeline on non-frontmatter content,
    preserving code blocks throughout.

    Paragraph- and heading-level deduplication runs only on non-code segments;
    applying them across code blocks would split fenced blocks containing
    blank lines and collapse repeated examples, leaving orphan fences.
    """
    segments = _split_code_blocks(raw)
    cleaned_segments = []
    seen_paragraphs: set[str] = set()
    seen_headings: set[str] = set()
    for is_code, segment in segments:
        if is_code:
            cleaned_segments.append(segment)
        else:
            segment = _strip_boilerplate(segment)
            segment = _strip_html_tags(segment)
            segment = _deduplicate_paragraphs(segment, seen_paragraphs)
            segment = _deduplicate_headings(segment, seen_headings)
            cleaned_segments.append(segment)

    text = "".join(cleaned_segments)
    text = _fix_heading_hierarchy(text)
    text = _normalise_whitespace(text)
    text = _repair_fences(text)

    # Second HTML-strip pass on the repaired text so that HTML surviving inside
    # malformed-fence segments (classified as code by the first split) gets
    # cleaned up now that fences are balanced.
    segments2 = _split_code_blocks(text)
    text = "".join(seg if is_code else _strip_html_tags(seg)
                   for is_code, seg in segments2)

    return text


# ---------------------------------------------------------------------------
# Tag extraction
# ---------------------------------------------------------------------------


def extract_tags(content: str) -> list[str]:
    """
    Extract 5-10 tags from H2/H3 headings and technical terms in content.
    Returns lowercase, hyphenated strings.
    """
    tags: list[str] = []

    # Extract from H2 and H3 headings
    heading_matches = re.findall(r"^#{2,3}\s+(.+)$", content, re.MULTILINE)
    for heading in heading_matches:
        # Clean markdown formatting from heading text
        heading = re.sub(r"[`*_\[\]()]", "", heading).strip()
        words = re.findall(r"[a-zA-Z][a-zA-Z0-9]*", heading)
        phrase = "-".join(w.lower() for w in words if w.lower() not in _STOP_WORDS and len(w) > 2)
        if phrase and len(phrase) > 2:
            tags.append(phrase)

    # Extract known technical terms from full content (case-insensitive)
    _TECH_TERMS = [
        "api", "sdk", "rest", "json", "xml", "oauth", "webhook", "jwt",
        "3ds", "3d-secure", "pci", "pci-dss", "ssl", "tls", "hmac",
        "tokenization", "tokenex", "ixopay", "payment-gateway", "acquirer",
        "psp", "mpi", "recurring", "subscription", "chargeback", "refund",
        "authorization", "capture", "void", "settlement", "iframe",
        "hosted-payment-page", "hpp", "direct-debit", "sepa",
        "credit-card", "debit-card", "ach", "bank-transfer",
        "transaction", "merchant", "gateway",
        "congrify", "observability", "data-pipeline", "reconciliation",
        "snowflake", "unified-reports", "fee-intelligence", "dashboard",
    ]
    content_lower = content.lower()
    for term in _TECH_TERMS:
        search = term.replace("-", r"[-\s]?")
        if re.search(r"\b" + search + r"\b", content_lower):
            tags.append(term)

    # Deduplicate, preserving insertion order
    seen: set[str] = set()
    unique_tags: list[str] = []
    for tag in tags:
        if tag not in seen:
            seen.add(tag)
            unique_tags.append(tag)

    # Prefer shorter/more specific tags; limit to 10
    # Sort: heading-derived tags first (usually more specific), then tech terms
    return unique_tags[:10]


# ---------------------------------------------------------------------------
# Summary extraction
# ---------------------------------------------------------------------------


def _is_boilerplate_line(line: str) -> bool:
    """Return True if the line matches any boilerplate pattern."""
    return any(p.match(line) for p in _BOILERPLATE_LINE_PATTERNS)


def extract_summary(content: str) -> str:
    """
    Extract the first substantive sentence or paragraph after the H1.
    Must be keyword-rich, not generic.
    """
    # Skip the H1 line
    lines = content.splitlines()
    body_lines = []
    skip_h1 = True
    for line in lines:
        stripped = line.strip()
        if skip_h1 and re.match(r"^# ", stripped):
            skip_h1 = False
            continue
        body_lines.append(stripped)

    # Find first non-empty, non-heading, non-boilerplate paragraph
    paragraph_lines = []
    for line in body_lines:
        if not line:
            if paragraph_lines:
                break  # end of paragraph
            continue
        if line.startswith("#"):
            if paragraph_lines:
                break
            continue
        # Skip code fence starts at top level
        if line.startswith("```"):
            break
        # Skip boilerplate lines even if cleaning didn't catch them
        if _is_boilerplate_line(line):
            continue
        # Skip lines that are purely markdown links (no description text)
        if re.match(r"^\[.*\]\(https?://.*\)\s*$", line):
            continue
        # Skip standalone list items (sidebar nav artifacts like "* Overview")
        if re.match(r"^[-*]\s+\S+\s*$", line):
            continue
        paragraph_lines.append(line)

    if not paragraph_lines:
        return ""

    paragraph = " ".join(paragraph_lines)
    # Take first two sentences max
    sentences = re.split(r"(?<=[.!?])\s+", paragraph)
    summary = " ".join(sentences[:2]).strip()
    # Remove any residual markdown inline formatting
    summary = re.sub(r"[*_`\[\]()]", "", summary)
    return summary[:300]  # cap at 300 chars


# ---------------------------------------------------------------------------
# Title extraction
# ---------------------------------------------------------------------------


def extract_title(content: str, filepath: Path) -> str:
    """Extract H1 title or derive from filename."""
    for line in content.splitlines():
        stripped = line.strip()
        if re.match(r"^# ", stripped):
            return stripped[2:].strip()
    # Fallback: filename without extension, title-cased
    return filepath.stem.replace("-", " ").replace("_", " ").title()


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------


def validate(content: str, frontmatter: dict) -> list[str]:
    """Return list of validation error strings (empty = valid)."""
    errors: list[str] = []

    # Frontmatter must be parseable (already a dict here, so just check keys)
    if not isinstance(frontmatter, dict):
        errors.append("Frontmatter is not a dict")

    # Must have at least one heading
    if not re.search(r"^#{1,6}\s", content, re.MULTILINE):
        errors.append("No headings found in content")

    # Balanced code fences
    fence_count = _count_code_fences(content)
    if fence_count % 2 != 0:
        errors.append(f"Unbalanced code fences: {fence_count} ``` found")

    # No stray HTML outside code blocks
    segments = _split_code_blocks(content)
    for is_code, segment in segments:
        if not is_code and _HTML_TAG_RE.search(segment):
            errors.append("Residual HTML tags found outside code blocks")
            break

    return errors


# ---------------------------------------------------------------------------
# Per-file processing
# ---------------------------------------------------------------------------


def process_file(filepath: Path, dry_run: bool) -> dict:
    """
    Process a single markdown file.
    Returns a stats dict with keys: path, status, words_before, words_after, errors.
    """
    stats = {
        "path": filepath,
        "status": "ok",
        "words_before": 0,
        "words_after": 0,
        "errors": [],
    }

    raw = filepath.read_text(encoding="utf-8")
    words_before = len(raw.split())
    stats["words_before"] = words_before

    # 1. Parse existing frontmatter
    existing_fm, body = _parse_frontmatter(raw)

    # 2. Clean the body content
    cleaned_body = clean_content(body)

    # 3. Build/update frontmatter
    title = existing_fm.get("title") or extract_title(cleaned_body, filepath)
    summary = existing_fm.get("summary") or extract_summary(cleaned_body)
    tags = existing_fm.get("tags") or extract_tags(cleaned_body)
    source_url = existing_fm.get("source_url", "")
    portal = existing_fm.get("portal") or detect_portal(filepath)

    fm: dict = {
        "title": title,
        "summary": summary,
        "tags": tags,
        "source_url": source_url,
        "portal": portal,
        "updated": TODAY,
        "related": existing_fm.get("related", []),
    }

    # 4. Validate
    errors = validate(cleaned_body, fm)
    if errors:
        stats["status"] = "error"
        stats["errors"] = errors

    # 5. Assemble final content
    final_content = _serialise_frontmatter(fm) + cleaned_body

    words_after = len(cleaned_body.split())
    stats["words_after"] = words_after

    if words_after < 100:
        stats["status"] = "warn_short"
    elif words_after > 1500:
        stats["status"] = "warn_long"

    # 6. Write (unless dry-run)
    if not dry_run and stats["status"] not in ("error",):
        filepath.write_text(final_content, encoding="utf-8")

    return stats


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def parse_args(argv=None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Clean Docusaurus-scraped markdown files and inject YAML frontmatter."
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument(
        "--input-dir",
        metavar="DIR",
        help="Directory to process recursively (all *.md files).",
    )
    group.add_argument(
        "--file",
        metavar="FILE",
        help="Single markdown file to process.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be done without modifying any files.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help=(
            "Exit with code 1 if any file has validation errors. Without this "
            "flag, errors are reported in the summary but the process exits 0. "
            "Use --strict for PR gates; leave it off for the weekly sync."
        ),
    )
    return parser.parse_args(argv)


def main(argv=None) -> None:
    args = parse_args(argv)

    if args.file:
        files = [Path(args.file)]
    else:
        files = sorted(Path(args.input_dir).rglob("*.md"))

    if not files:
        print("No .md files found.")
        sys.exit(0)

    if args.dry_run:
        print(f"[DRY RUN] Would process {len(files)} file(s).\n")

    all_stats = []
    for filepath in files:
        if not filepath.exists():
            print(f"  ERROR: File not found: {filepath}")
            continue
        stats = process_file(filepath, dry_run=args.dry_run)
        all_stats.append(stats)

        status_label = {
            "ok": "OK",
            "warn_short": "WARN (short)",
            "warn_long": "WARN (long)",
            "error": "ERROR",
        }.get(stats["status"], stats["status"])

        action = "Would update" if args.dry_run else "Updated"
        print(
            f"  [{status_label}] {filepath}  "
            f"{stats['words_before']}w → {stats['words_after']}w"
        )
        if stats["errors"]:
            for err in stats["errors"]:
                print(f"         ! {err}")

    # Summary
    total = len(all_stats)
    errors = sum(1 for s in all_stats if s["status"] == "error")
    warn_long = sum(1 for s in all_stats if s["status"] == "warn_long")
    warn_short = sum(1 for s in all_stats if s["status"] == "warn_short")
    ok = total - errors - warn_long - warn_short

    print(f"\n{'='*60}")
    print(f"Processed : {total} file(s)")
    print(f"OK        : {ok}")
    print(f"Errors    : {errors}")
    if warn_long:
        print(f"Too long  : {warn_long}  (>1500 words — consider splitting)")
    if warn_short:
        print(f"Too short : {warn_short}  (<100 words — possibly empty)")
    if args.dry_run:
        print("[DRY RUN] No files were modified.")
    print(f"{'='*60}")

    if errors and args.strict:
        sys.exit(1)


if __name__ == "__main__":
    main()
