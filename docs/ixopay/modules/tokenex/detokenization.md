---
title: Detokenization
summary: ' Transparent Gateway API v1'
tags:
- api
- tokenex
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/detokenization
portal: ixopay-modules
updated: '2026-05-04'
related: []
---

* Transparent Gateway API v1
  * Detokenization

# Detokenization
Transparent Detokenization is useful if you send sensitive data to third-party APIs (payment gateways, order fulfillment, etc.). In this model, your application would construct the same HTTPS payload that it does today, with a few minor changes used to authenticate your request and locate the token therein. That payload would then be sent to TokenEx via either HTTPS POST or HTTPS PUT, and TokenEx will replace the token with its corresponding sensitive data before forwarding to the third party. The unaltered response from the third party would then be sent back to your application.
warning
If one or more headers are expected from the endpoint, you can request they be included in the response by providing the header names as a comma-separated list within the optional TX_Headers header.
Detokenize supports the following HTTP verbs: PUT, POST