# ixodocs — Ixopay, TokenEx & Congrify Documentation Knowledge Base

## Golden Rules

These three rules are non-negotiable and apply to every answer produced from this repo.

1. **Authoritative live sources by topic:**
   - **Payment methods, PSPs and adapter availability** → https://adapters.ixopay.com/ (local `docs/ixopay/adapters/` is a weekly snapshot).
   - **Legal & compliance** (subprocessors, DPA, privacy, terms) → https://www.ixopay.com/legal/ (local `docs/ixopay/legal/` is a weekly snapshot).
   Never answer from the local snapshot without pointing the user to the live page.
2. **Never invent, assume, or extrapolate.** If something is not explicitly in the docs, say "not documented" rather than inferring from general industry knowledge.
3. **Always cite the source.** Every factual claim must reference the local file path and, when available, the `source_url` from its frontmatter. End responses with a **Sources** section.

## Search strategy
1. Grep `index.md` for your topic (do NOT read the full file — it's 34k tokens)
2. Grep `docs/` for keywords in content and YAML frontmatter
3. Read the most relevant files — each covers one topic in 500-1500 words
4. Check `related` field in frontmatter for connected topics

## Documentation structure
- `docs/ixopay/` — Developer Hub: API reference, guides, adapters, recipes (191 pages)
- `docs/ixopay/manual/` — User Manual: admin operations, merchant config (136 pages)
- `docs/ixopay/modules/` — Modules: TokenEx vault integration (190 pages)
- `docs/ixopay/legal/` — Legal & Compliance: subprocessors, DPA, privacy, terms (source: https://www.ixopay.com/legal/)
- `docs/tokenex/` — TokenEx: tokenization, iFrame, 3DS, P2PE, encryption (159 pages)
- `docs/congrify/` — Congrify: payments observability, intelligence, data pipelines, integrations (31 pages)
- `index.md` — Master navigation index (707 entries with descriptions)

## File format
Every doc has YAML frontmatter: title, summary, tags, source_url, portal, updated, related.

## Scripts
- `scripts/scrape.py` — Crawl4AI scraper (`--target all|ixopay-dev|ixopay-manual|ixopay-modules|ixopay-legal|tokenex|congrify`)
- `scripts/scrape_congrify.py` — Dedicated Congrify scraper (Docsify hash-routed SPA)
- `scripts/clean.py` — Markdown cleaner + frontmatter generator (`--input-dir docs/`)
- `scripts/build_index.py` — Auto-generates index.md from frontmatter
- `scripts/audit_coverage.py` — Diffs upstream sitemaps + known URLs (`scripts/coverage_sources.yml`) against `docs_manifest.json`. Writes `coverage-report.md`. Use `--strict` for a gating exit code.

## For LLMs
- `llms.txt` — Curated summary with key links
- `llms-full.txt` — Complete 707-entry documentation map

## MCP Server
- `mcp/` — TypeScript MCP server exposing docs as tools and resources
- Build: `cd mcp && npm install && npm run build`
- Dev: `cd mcp && npm run dev`
- Test: `cd mcp && npm test`
- Tools: search_docs, read_doc, list_api_endpoints, find_related, ixopay_call, tokenex_tokenize, etc.
