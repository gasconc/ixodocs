---
name: ixopay-docs
description: "Ixopay and TokenEx payment gateway documentation - API reference, transaction types, adapters, tokenization, 3D Secure, recurring payments, hosted payment pages, error codes"
user-invocable: false
paths:
  - "docs/**"
---

# Ixopay & TokenEx Documentation

This project contains scraped and indexed documentation from:
- Ixopay Developer Hub (documentation.ixopay.com) - API reference, guides, adapters
- Ixopay User Manual (documentation.ixopay.com/manual/) - Admin and merchant operations
- Ixopay Modules (documentation.ixopay.com/modules/) - TokenEx vault integration
- TokenEx (docs.tokenex.com) - Tokenization platform documentation

## Search Strategy
1. Read `index.md` at project root for a complete map of all documentation
2. Use grep with keywords to find relevant files in `docs/`
3. Each file has YAML frontmatter with title, summary, and tags for discovery
4. Check `related` field in frontmatter for connected topics
