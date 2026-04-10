# ixodocs

Curated, LLM-optimized knowledge base of **Ixopay**, **TokenEx** & **Congrify** payment platform documentation.

![Docs](https://img.shields.io/badge/docs-707_pages-blue)
![Portals](https://img.shields.io/badge/portals-5-green)
![Sync](https://img.shields.io/badge/sync-weekly-orange)

## What is this?

A searchable documentation repository containing 707 markdown files scraped from `documentation.ixopay.com`, `docs.tokenex.com`, and `docs.congrify.com`, cleaned and indexed for use with Claude Code and other LLM tools. Congrify is a payments observability and intelligence platform acquired by IXOPAY. Every file is structured with YAML frontmatter (title, summary, tags, source URL, related topics) so agents can navigate and retrieve context without loading the full corpus.

## Coverage

| Portal | Pages | Content | Source |
|---|---|---|---|
| Developer Hub | 191 | API reference, guides, adapters, recipes | documentation.ixopay.com/ |
| User Manual | 136 | Admin operations, merchant config, connectors | documentation.ixopay.com/manual/ |
| Modules | 190 | TokenEx vault integration, module APIs | documentation.ixopay.com/modules/ |
| TokenEx | 159 | Tokenization, iFrame, 3DS, P2PE, encryption | docs.tokenex.com |
| Congrify | 31 | Payments observability, intelligence, data pipelines | `docs.congrify.com` |

## Quick Start

### With Claude Code

```bash
git clone <repo-url> ixodocs
cd ixodocs
claude
```

Then ask questions like:
- "How do I implement 3DS2 with the Ixopay API?"
- "What TokenEx iFrame events are available?"
- "Show me the webhook payload format for a CAPTURE transaction."

### With the search agent

The `ixopay-docs-search` agent is installed in `~/.claude/agents/`. Claude Code will invoke it automatically when you ask documentation questions. It uses a grep-based strategy against `index.md` and `docs/` — no embeddings, no vector DB, no setup required.

### With MCP servers

`.mcp.json` is pre-configured with two MCP servers:

| Server | Purpose |
|---|---|
| `fetch` | Retrieve live pages from documentation portals |
| `local-rag` | Full-text search over the local `docs/` corpus |

Claude Code picks these up automatically when you open the project.

## Directory Structure

```
ixodocs/
├── docs/
│   ├── ixopay/              # Developer Hub (191 pages)
│   │   ├── api/             # REST API reference
│   │   ├── adapters/        # Payment adapter guides
│   │   ├── guides/          # Integration guides & recipes
│   │   ├── manual/          # User Manual (136 pages)
│   │   └── modules/         # Modules / TokenEx vault (190 pages)
│   ├── tokenex/             # TokenEx portal (159 pages)
│   └── congrify/            # Congrify portal (31 pages)
├── scripts/
│   ├── scrape.py            # Crawl4AI scraper
│   ├── scrape_congrify.py   # Dedicated Congrify scraper (Docsify SPA)
│   ├── clean.py             # Markdown cleaner + frontmatter
│   └── build_index.py       # Index generator
├── index.md                 # Master navigation index (707 entries)
├── llms.txt                 # Curated summary for LLMs
├── llms-full.txt            # Complete 707-entry documentation map
├── .mcp.json                # MCP server config (fetch + local-rag)
└── CLAUDE.md                # Instructions for Claude Code agents
```

## How It Works

### Search strategy

Agents search this repo using plain grep — no embeddings, no vector database, no indexing step. The workflow:

1. Grep `index.md` for the topic (it has a one-line description for every page).
2. Grep `docs/` for keywords in content or YAML frontmatter.
3. Read the most relevant files (each covers one topic, 500-1500 words).
4. Follow `related` frontmatter links for connected topics.

### File format

Every markdown file starts with YAML frontmatter:

```yaml
---
title: "Capture Transaction"
summary: "How to capture a previously authorized payment via the Ixopay REST API."
tags: [capture, transaction, api, rest]
source_url: "https://documentation.ixopay.com/api/capture"
portal: ixopay-dev
updated: "2025-01"
related:
  - docs/ixopay/api/authorize.md
  - docs/ixopay/api/void.md
---
```

## Scripts

| Script | Purpose | Usage |
|---|---|---|
| `scripts/scrape.py` | Crawl4AI scraper for Docusaurus portals | `python scripts/scrape.py --target all` |
| `scripts/scrape_congrify.py` | Dedicated Congrify scraper for Docsify hash-routed SPA | `python scripts/scrape_congrify.py` |
| `scripts/clean.py` | Cleans raw markdown and generates YAML frontmatter | `python scripts/clean.py --input-dir docs/` |
| `scripts/build_index.py` | Reads all frontmatter and regenerates `index.md` | `python scripts/build_index.py` |

### Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt
playwright install chromium
```

`--target` options for `scrape.py`: `all`, `ixopay-dev`, `ixopay-manual`, `ixopay-modules`, `tokenex`, `congrify`.

## Automation

| Job | Schedule | Trigger |
|---|---|---|
| Weekly sync | Every Monday 06:00 UTC | Re-scrapes changed pages, runs `clean.py` and `build_index.py` |
| Monthly full crawl | 1st of each month | Full re-scrape of all 5 portals from scratch |

## For LLMs

Two pre-built context files are included for tools that consume a documentation manifest:

- `llms.txt` — Curated summary with key links, suitable for system prompts.
- `llms-full.txt` — Complete 707-entry documentation map with descriptions.

## Contributing

Documentation is auto-scraped; do not edit files under `docs/` by hand — changes will be overwritten on the next sync. To fix content, update `clean.py` processing rules or open an issue against the upstream documentation portal.
