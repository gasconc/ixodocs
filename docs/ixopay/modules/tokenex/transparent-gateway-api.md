---
title: TGAPI v1 - The Basics
summary: ' Transparent Gateway API v1  TGAPI v1 - The Basics'
tags:
- api
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/transparent-gateway-api
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* Transparent Gateway API v1
  * TGAPI v1 - The Basics

# TGAPI v1 - The Basics
warning
**TGAPI V1** has been deprecated and is now in break/fix mode. All new enhancements are being added to [TGAPI v2](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics).
The Transparent Gateway API allows clients to interact with third-party APIs without handling sensitive data directly. In effect, this is Transparent Tokenization and/or Transparent Detokenization.
This service operates like a forward proxy acting as an HTTPS relay. Rather than interacting directly with a third party's API, HTTPS traffic is routed through TokenEx with the addition of a few TokenEx specific HTTP headers. TokenEx inspects the request or response body and either tokenizes or detokenizes based on the endpoint to which the client POST and other request data.
The client constructs the HTTPS payload per the third-party API specification. Additionally, the client adjusts the payload with a few minor changes, which allow the request and response to pass through the Transparent Gateway API proxy, protecting any sensitive data. Upon receiving the request, TokenEx will perform the necessary operations on the request, remove the TokenEx headers and curly braces, and forward the request to the provided URL. The unaltered response from the third party is returned to the client’s application. If one or more headers are expected in the response from the third-party API, they can be included in the response by providing the header names as a comma-separated list within the optional “TX_Headers” header.
![](https://documentation.ixopay.com/modules/assets/images/TGAPI_v1_2-b4bd3dc065d7586658d85c54c0188249.png)