---
title: TGAPI v2 - The Basics
summary: ' Transparent Gateway API v2  TGAPI v2 - The Basics'
tags:
- ixopay-transparent-gateway-https-documentation-ixopay-com-modules-docs-tokenex-tgapi-basics-ixopay-transparent-gateway-direct-link-ixopay-transparent-gateway
- api
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* Transparent Gateway API v2
  * TGAPI v2 - The Basics

# TGAPI v2 - The Basics
The Transparent Gateway API (TGAPI) is a proxy that enables TokenEx clients to send and receive HTTP payloads while invoking the TGAPI to perform processing on the payload as a transparent intermediary. The TGAPI sits between our client and a 3rd party endpoint and can handle inbound and outbound HTTP payloads that are initiated by our client or the third-party endpoint. There are four basic data flows currently supported:  
| Data Flow  | Request Origin  | Description  |  
| --- | --- | --- |  
| Transparent Detokenization  | TokenEx Client  | Detokenization of an outbound API request.  |  
| Transparent Tokenization  | TokenEx Client  | Tokenization of sensitive data in the response to an outbound API request.  |  
![](https://documentation.ixopay.com/modules/assets/images/TGAPI_T_3-a69b78704200287c559c8f388b7b3e3c.png)  
| Data Flow  | Request Origin  | Description  |  
| --- | --- | --- |  
| Proxy Tokenization  | Third Party  | Tokenization of the inbound request  |  
| Proxy Detokenization  | Third Party  | Detokenization of the response to the inbound request  |  
![](https://documentation.ixopay.com/modules/assets/images/TGAPI_P_3-8b82b86731f8053d5fec379938ae9499.png)
In addition to tokenization and detokenization, the TGAPI has other processing capabilities such as hashing, encryption, decryption, and encoding which are described [here](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1).
## What is the IXOPAY Transparent Gateway?[​](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics#what-is-the-ixopay-transparent-gateway "Direct link to What is the IXOPAY Transparent Gateway?")
The IXOPAY Transparent Gateway (TGAPI) is a proxy service that sits between your systems and a third-party API endpoint, transparently detokenizing or tokenizing sensitive data in HTTP payloads without requiring changes to your existing API calls. It supports outbound flows where your system initiates requests, as well as inbound flows where a third party sends data to IXOPAY for tokenization before forwarding to your systems. This allows merchants to transmit card data to payment processors and other partners without ever handling the raw sensitive values directly.