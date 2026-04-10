"""
Index generator for Ixopay & TokenEx documentation knowledge base.

Scans docs/ recursively, reads YAML frontmatter from each .md file,
and generates index.md at the project root.

Usage:
    python scripts/build_index.py
    python scripts/build_index.py --docs-dir docs/
    python scripts/build_index.py --output index.md
    python scripts/build_index.py --stats
"""

import argparse
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

TODAY = date.today().isoformat()

# Portal display names and their sort order
PORTAL_ORDER = [
    "ixopay-dev",
    "ixopay-manual",
    "ixopay-modules",
    "tokenex",
    "congrify",
]

PORTAL_LABELS = {
    "ixopay-dev": "Ixopay Developer Hub",
    "ixopay-manual": "Ixopay User Manual",
    "ixopay-modules": "Ixopay Modules",
    "tokenex": "TokenEx Documentation",
    "congrify": "Congrify Payment Intelligence",
}

STATS_LABELS = {
    "ixopay-dev": "Ixopay Dev Hub",
    "ixopay-manual": "Ixopay Manual",
    "ixopay-modules": "Ixopay Modules",
    "tokenex": "TokenEx",
    "congrify": "Congrify",
}

# ---------------------------------------------------------------------------
# Frontmatter parsing (mirrors clean.py)
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


# ---------------------------------------------------------------------------
# Portal detection (mirrors clean.py)
# ---------------------------------------------------------------------------


def detect_portal(filepath: Path) -> str:
    path_str = str(filepath).replace("\\", "/")
    if "docs/tokenex" in path_str:
        return "tokenex"
    elif "docs/ixopay/manual" in path_str:
        return "ixopay-manual"
    elif "docs/ixopay/modules" in path_str:
        return "ixopay-modules"
    elif "docs/congrify" in path_str:
        return "congrify"
    else:
        return "ixopay-dev"


# ---------------------------------------------------------------------------
# Description extraction
# ---------------------------------------------------------------------------


def _extract_first_paragraph(body: str) -> str:
    """Extract the first substantive paragraph after the H1."""
    lines = body.splitlines()
    past_h1 = False
    paragraph_lines: list[str] = []

    for line in lines:
        stripped = line.strip()
        if not past_h1:
            if re.match(r"^# ", stripped):
                past_h1 = True
            continue
        if not stripped:
            if paragraph_lines:
                break
            continue
        if stripped.startswith("#"):
            if paragraph_lines:
                break
            continue
        if stripped.startswith("```"):
            break
        paragraph_lines.append(stripped)

    if not paragraph_lines:
        return ""

    paragraph = " ".join(paragraph_lines)
    sentences = re.split(r"(?<=[.!?])\s+", paragraph)
    summary = " ".join(sentences[:2]).strip()
    summary = re.sub(r"[*_`\[\]()]", "", summary)
    return summary[:150]


def _title_from_path(filepath: Path) -> str:
    """Derive a human-readable title from the filename."""
    return filepath.stem.replace("-", " ").replace("_", " ").title()


# ---------------------------------------------------------------------------
# File scanning
# ---------------------------------------------------------------------------


class DocEntry:
    __slots__ = ("filepath", "rel_path", "title", "description", "portal", "directory", "has_frontmatter")

    def __init__(
        self,
        filepath: Path,
        rel_path: str,
        title: str,
        description: str,
        portal: str,
        directory: str,
        has_frontmatter: bool,
    ) -> None:
        self.filepath = filepath
        self.rel_path = rel_path
        self.title = title
        self.description = description
        self.portal = portal
        self.directory = directory
        self.has_frontmatter = has_frontmatter


def _directory_label(rel_path: str) -> str:
    """
    Convert a relative docs path to a human-readable section label.
    e.g. "docs/ixopay/getting-started/foo.md" → "Getting Started"
         "docs/tokenex/api/bar.md"             → "API"
    """
    parts = Path(rel_path).parts  # e.g. ("docs", "ixopay", "guides", "foo.md")
    # parts[0] == "docs", parts[1] == portal dir, parts[2] == section dir (if exists)
    if len(parts) >= 4:
        raw = parts[2]
    elif len(parts) == 3:
        # File sits directly under docs/<portal>/
        raw = ""
    else:
        raw = ""

    if not raw:
        return "General"
    return raw.replace("-", " ").replace("_", " ").title()


def scan_docs(docs_dir: Path) -> tuple[list[DocEntry], list[Path]]:
    """
    Walk docs_dir, parse each .md file, return (entries, files_without_frontmatter).
    """
    entries: list[DocEntry] = []
    no_frontmatter: list[Path] = []

    md_files = sorted(docs_dir.rglob("*.md"))

    for filepath in md_files:
        raw = filepath.read_text(encoding="utf-8")
        fm, body = _parse_frontmatter(raw)
        has_frontmatter = bool(fm)

        # Relative path from docs_dir's parent (project root), e.g. "docs/ixopay/..."
        try:
            rel_path = str(filepath.relative_to(docs_dir.parent))
        except ValueError:
            rel_path = str(filepath)

        # Title
        title = (fm.get("title") or "").strip()
        if not title:
            title = _title_from_path(filepath)

        # Description: prefer frontmatter summary, else derive from body
        description = (fm.get("summary") or "").strip()
        if not description:
            description = _extract_first_paragraph(body)
        if not description:
            description = "(no description)"
        # Truncate to 150 chars
        if len(description) > 150:
            description = description[:147].rstrip() + "..."

        # Portal
        portal = (fm.get("portal") or "").strip()
        if not portal:
            portal = detect_portal(filepath)

        # Directory label
        directory = _directory_label(rel_path)

        if not has_frontmatter:
            no_frontmatter.append(filepath)

        entries.append(
            DocEntry(
                filepath=filepath,
                rel_path=rel_path,
                title=title,
                description=description,
                portal=portal,
                directory=directory,
                has_frontmatter=has_frontmatter,
            )
        )

    return entries, no_frontmatter


# ---------------------------------------------------------------------------
# Index generation
# ---------------------------------------------------------------------------


def build_index(entries: list[DocEntry], docs_dir: Path) -> str:
    """Render the full index.md content."""
    if not entries:
        return (
            "# Ixopay & TokenEx Documentation Index\n\n"
            "> No documentation files found yet. "
            f"Run `python scripts/scrape.py --target all` to populate `{docs_dir}/`.\n"
        )

    total = len(entries)
    lines: list[str] = []

    lines.append("# Ixopay & TokenEx Documentation Index")
    lines.append("")
    lines.append(f"> Last updated: {TODAY} | Total pages: {total}")
    lines.append("")

    # Group: portal → directory → entries
    # Use defaultdict to preserve insertion ordering per portal
    portal_dirs: dict[str, dict[str, list[DocEntry]]] = {p: defaultdict(list) for p in PORTAL_ORDER}
    other_dirs: dict[str, list[DocEntry]] = defaultdict(list)

    for entry in entries:
        if entry.portal in portal_dirs:
            portal_dirs[entry.portal][entry.directory].append(entry)
        else:
            other_dirs[entry.directory].append(entry)

    def _render_portal(portal_key: str, dir_map: dict[str, list[DocEntry]]) -> None:
        if not dir_map:
            return
        count = sum(len(v) for v in dir_map.values())
        label = PORTAL_LABELS.get(portal_key, portal_key)
        lines.append(f"## {label} ({count} pages)")
        lines.append("")
        for dir_name in sorted(dir_map.keys()):
            dir_entries = sorted(dir_map[dir_name], key=lambda e: e.rel_path)
            lines.append(f"### {dir_name}")
            for entry in dir_entries:
                lines.append(f"- [{entry.title}]({entry.rel_path}) — {entry.description}")
            lines.append("")

    for portal_key in PORTAL_ORDER:
        _render_portal(portal_key, portal_dirs[portal_key])

    # Any files with unrecognised portals go into "Other"
    if other_dirs:
        count = sum(len(v) for v in other_dirs.values())
        lines.append(f"## Other ({count} pages)")
        lines.append("")
        for dir_name in sorted(other_dirs.keys()):
            dir_entries = sorted(other_dirs[dir_name], key=lambda e: e.rel_path)
            lines.append(f"### {dir_name}")
            for entry in dir_entries:
                lines.append(f"- [{entry.title}]({entry.rel_path}) — {entry.description}")
            lines.append("")

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Stats output
# ---------------------------------------------------------------------------


def print_stats(
    entries: list[DocEntry],
    no_frontmatter: list[Path],
    output_path: Path | None,
    *,
    stats_only: bool,
) -> None:
    portal_counts: dict[str, int] = defaultdict(int)
    for entry in entries:
        portal_counts[entry.portal] += 1

    if not stats_only and output_path:
        print(f"Index generated: {output_path}", file=sys.stderr)
    elif stats_only:
        print("Stats (no file generated):", file=sys.stderr)

    for portal_key in PORTAL_ORDER:
        count = portal_counts.get(portal_key, 0)
        if count:
            label = STATS_LABELS.get(portal_key, portal_key)
            print(f"  {label}: {count} pages", file=sys.stderr)

    other_count = sum(v for k, v in portal_counts.items() if k not in PORTAL_ORDER)
    if other_count:
        print(f"  Other: {other_count} pages", file=sys.stderr)

    total = len(entries)
    print(f"  Total: {total} pages", file=sys.stderr)

    if no_frontmatter:
        print(f"  Files without frontmatter: {len(no_frontmatter)} (listed)", file=sys.stderr)
        for p in no_frontmatter:
            print(f"    - {p}", file=sys.stderr)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def parse_args(argv=None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate index.md from docs/ YAML frontmatter."
    )
    parser.add_argument(
        "--docs-dir",
        default="docs",
        metavar="DIR",
        help="Directory containing markdown documentation (default: docs/).",
    )
    parser.add_argument(
        "--output",
        default="index.md",
        metavar="FILE",
        help="Output path for the generated index (default: index.md).",
    )
    parser.add_argument(
        "--stats",
        action="store_true",
        help="Print statistics to stderr without generating index.md.",
    )
    return parser.parse_args(argv)


def main(argv=None) -> None:
    args = parse_args(argv)

    docs_dir = Path(args.docs_dir)
    output_path = Path(args.output)

    if not docs_dir.exists():
        print(f"ERROR: docs directory not found: {docs_dir}", file=sys.stderr)
        sys.exit(1)

    entries, no_frontmatter = scan_docs(docs_dir)

    if args.stats:
        print_stats(entries, no_frontmatter, output_path=None, stats_only=True)
        return

    content = build_index(entries, docs_dir)
    output_path.write_text(content, encoding="utf-8")
    print_stats(entries, no_frontmatter, output_path=output_path, stats_only=False)


if __name__ == "__main__":
    main()
