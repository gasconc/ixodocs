# ixodocs — Ixopay, TokenEx & Congrify Documentation Knowledge Base

## Search strategy
1. Grep `index.md` for your topic (do NOT read the full file — it's 34k tokens)
2. Grep `docs/` for keywords in content and YAML frontmatter
3. Read the most relevant files — each covers one topic in 500-1500 words
4. Check `related` field in frontmatter for connected topics

## Documentation structure
- `docs/ixopay/` — Developer Hub: API reference, guides, adapters, recipes (191 pages)
- `docs/ixopay/manual/` — User Manual: admin operations, merchant config (136 pages)
- `docs/ixopay/modules/` — Modules: TokenEx vault integration (190 pages)
- `docs/tokenex/` — TokenEx: tokenization, iFrame, 3DS, P2PE, encryption (159 pages)
- `docs/congrify/` — Congrify: payments observability, intelligence, data pipelines, integrations (31 pages)
- `index.md` — Master navigation index (707 entries with descriptions)

## File format
Every doc has YAML frontmatter: title, summary, tags, source_url, portal, updated, related.

## Scripts
- `scripts/scrape.py` — Crawl4AI scraper (`--target all|ixopay-dev|ixopay-manual|ixopay-modules|tokenex|congrify`)
- `scripts/scrape_congrify.py` — Dedicated Congrify scraper (Docsify hash-routed SPA)
- `scripts/clean.py` — Markdown cleaner + frontmatter generator (`--input-dir docs/`)
- `scripts/build_index.py` — Auto-generates index.md from frontmatter

## For LLMs
- `llms.txt` — Curated summary with key links
- `llms-full.txt` — Complete 707-entry documentation map
