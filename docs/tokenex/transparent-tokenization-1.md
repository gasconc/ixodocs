---
title: Transparent Tokenization
summary: ' Transparent Gateway API v2  Transparent Tokenization'
tags:
- api
- json
- xml
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/transparent-tokenization-1
portal: tokenex
updated: '2026-06-15'
related: []
---

* Transparent Gateway API v2
  * Transparent Tokenization

# Transparent Tokenization
Transparent Tokenization will transparently proxy an outbound, client-initiated request to a specified endpoint, and then tokenize data elements in the HTTP response using the tx-response-regex and [tx-token-scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) headers. The response containing tokens will be supplied back to the client system that initiated the request.
Note
If one or more headers are expected from the endpoint, you can request they be included in the response by providing the header names as a comma-separated list within the optional TX-Headers header.
Tokenize supports the following HTTP verbs: GET, POST, PUT. It also supports any data format (JSON, XML, Form URL, etc.)