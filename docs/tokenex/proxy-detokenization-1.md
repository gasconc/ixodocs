---
title: Proxy Detokenization (Inbound)
summary: ' Transparent Gateway API v2  Proxy Detokenization Inbound'
tags:
- api
- tokenization
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/proxy-detokenization-1
portal: tokenex
updated: '2026-06-15'
related: []
---

* Transparent Gateway API v2
  * Proxy Detokenization (Inbound)

# Proxy Detokenization (Inbound)
In the outbound response to a third-party initiated inbound request, the client can provide tokens to be detokenized by the proxy endpoint. Simply insert the tokens in the response body using token notation. Regardless of the presence of data to be tokenized in the inbound request, a Proxy Tokenization profile will need to be utilized for the inbound request.