---
title: Transparent Detokenization
summary: ' Transparent Gateway API v2  Transparent Detokenization'
tags:
- api
- json
- xml
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-1
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* Transparent Gateway API v2
  * Transparent Detokenization

# Transparent Detokenization
Transparent Detokenization will replace tokens in an outbound, client-initiated HTTP request with the detokenized data, and then forward the request on to a specified URL. The unaltered response from the recipient endpoint would then be sent back to your application.
warning
If one or more headers are expected from the endpoint, you can request they be included in the response by providing the header names as a comma-separated list within the optional TX-Headers header.
Detokenize supports the following HTTP verbs: GET, POST, PUT. It also supports any data format (JSON, XML, Form URL, etc.)