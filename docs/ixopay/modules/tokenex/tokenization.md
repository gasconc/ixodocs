---
title: Tokenization
summary: ' Transparent Gateway API v1'
tags:
- api
- tokenization
- tokenex
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenization
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Transparent Gateway API v1
  * Tokenization

# Tokenization
Transparent Tokenization is useful if you retrieve sensitive data from 3rd-party APIs (booking engines, partners, etc.). In this model, your application would construct the same HTTPS POST (or GET) that it does today, with a few minor changes used to authenticate your request and locate the sensitive data in the 3rd party's response. TokenEx would then issue the request to the 3rd-party API and tokenize the sensitive data in the response. Your application would receive the same response that it currently does, albeit containing tokens in place of the sensitive data.
info
If one or more headers are expected from the endpoint, you can request they be included in the response by providing the header names as a comma-separated list within the optional TX_Headers header.
Tokenize supports the following HTTP verbs: GET, POST