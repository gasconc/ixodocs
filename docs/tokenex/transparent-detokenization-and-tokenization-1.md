---
title: Transparent Detokenization and Tokenization
summary: ' Transparent Gateway API v2  Transparent Detokenization and Tokenization'
tags:
- api
- json
- xml
- tokenization
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-and-tokenization-1
portal: tokenex
updated: '2026-06-01'
related: []
---

* Transparent Gateway API v2
  * Transparent Detokenization and Tokenization

# Transparent Detokenization and Tokenization
Transparent Detokenization will replace tokens in an outbound, client-initiated HTTP request with the detokenized data, and then forward the request on to a specified URL. By supplying additional transparent tokenization headers, the TGAPI will also tokenize data elements in the HTTP response. The response containing tokens will be supplied back to the client system that initiated the request.
info
If one or more headers are expected from the endpoint, you can request they be included in the response by providing the header names as a comma-separated list within the optional TX-Headers header.
This feature supports the following HTTP verbs: GET, POST, PUT. It also supports any data format (JSON, XML, Form URL, etc.)