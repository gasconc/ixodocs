---
title: JWE Key Wrapper
summary: ' JWE Key Wrapper'
tags:
- tokenex
source_url: https://documentation.ixopay.com/modules/docs/tokenex/appendix/jwe-key-wrapper
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* Appendix
  * JWE Key Wrapper

# JWE Key Wrapper
Use this tool to encrypt key material before importing it into the TokenEx Key Management Service. Paste the platform RSA public key from the Key Management page, provide your key material (PEM text, raw AES bytes, or a binary PFX/CRT file), and click **Wrap as JWE**. The resulting JWE compact serialization can be pasted directly into the Import Key dialog.