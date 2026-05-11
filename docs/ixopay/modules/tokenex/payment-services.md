---
title: Payment Services
summary: ' Payment Services'
tags:
- payment-services-work-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-work-direct-link-payment-services-work
- choosing-api-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-choosing-api-direct-link-choosing-api
- processtransaction-api-recommended-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-processtransaction-api-recommended-direct-link-processtransaction-api-recommended
- card-check-wallet-api-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-cardcheckwallet-api-direct-link-card-check-wallet-api
- feature-comparison-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-feature-comparison-direct-link-feature-comparison
- prerequisites-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-prerequisites-direct-link-prerequisites
- quick-links-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-quick-links-direct-link-quick-links
- processtransaction-api-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-processtransaction-api-direct-link-processtransaction-api
- api
- sdk
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* Payment Services

# Payment Services
Payment Services is TokenEx's standardized integration layer for payment processing. Instead of building direct integrations with each payment processor, you integrate once with Payment Services and gain access to a wide range of gateways through a consistent API. Switch processors or add new ones without changing your integration code—just update the gateway configuration in your requests.
Key benefits:
  * **Gateway flexibility** — Connect to multiple processors through a single integration
  * **Token portability** — Use the same TokenEx tokens across any supported gateway
  * **Reduced PCI scope** — Keep PANs out of your environment by transacting with tokens
  * **Combined operations** — Tokenize and transact in a single API call when needed
  * **CVV injection** — Include separately collected CVV values without handling them directly

## How Does Payment Services Work?[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#how-does-payment-services-work "Direct link to How Does Payment Services Work?")
Payment Services processes transactions through the following flow:
  1. **Collect payment data** — Use TokenEx iFrame, mobile SDK, or your existing collection method to capture card details
  2. **Send the transaction** — Call Payment Services with your token, encrypted or plaintext PAN, and the transaction request fields.
  3. **Receive the response** — Payment Services returns the transaction result with parsed fields from the PSP

## Choosing Your API[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#choosing-your-api "Direct link to Choosing Your API")
Payment Services offers two APIs. For most integrations, we recommend the ProcessTransaction API.
### ProcessTransaction API (Recommended)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#processtransaction-api-recommended "Direct link to ProcessTransaction API \(Recommended\)")
The ProcessTransaction API provides the broadest gateway support and a normalized response format that simplifies your integration logic.
**Key advantages:**
  * **Extensive gateway coverage** — Connect to a wide range of payment processors
  * **Normalized responses** — Consistent response structure with pre-parsed AVS and CVV results
  * **Flexible tokenization** — Use existing tokens or tokenize during the transaction
  * **CVV injection** — Include previously collected CVV values
  * **Two endpoints** for different workflows:
    * `ProcessTransaction` — Use your existing TokenEx tokens
    * `ProcessTransactionAndTokenize` — Accept PANs or encrypted PANs and tokenize during the transaction

:::tip When to use ProcessTransaction API Choose this API when you need broad gateway coverage, want consistent response handling across processors, and don't require access to the PSP's raw response. :::
### Card/Check/Wallet API[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#cardcheckwallet-api "Direct link to Card/Check/Wallet API")
The Card/Check/Wallet API returns complete, unmodified gateway responses for integrations that need access to every field the processor returns.
**Key advantages:**
  * **Raw gateway responses** — Access the complete, unmodified response from the processor
  * **REST-style endpoints** — Resource-oriented paths like `/card/authorize` and `/check/purchase`
  * **Response extraction** — Use regex patterns to extract specific fields from the raw PSP response into standardized response parameters.
  * **Parameter forwarding** — send unmapped parameters to PSPs that accept JSON request bodies

:::note When to use Card/Check/Wallet API Choose this API when you need access to the complete gateway response, require specific response fields that aren't included in normalized responses, or have existing logic built around raw gateway data. :::
## Feature Comparison[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#feature-comparison "Direct link to Feature Comparison")  
| Feature  | ProcessTransaction API  | Card/Check/Wallet API  |  
| --- | --- | --- |  
| **Gateway Coverage**  | Broad gateway support  | Selected gateway support  |  
| **Endpoint Style**  | Action-based (`ProcessTransaction`, `ProcessTransactionAndTokenize`)  | Resource-oriented (`/card/authorize`, `/check/purchase`)  |  
| **Authentication**  | Request body credentials (`APIKey`, `TokenExID`)  | HTTP headers  |  
| **Response Format**  | Normalized with parsed AVS/CVV  | Raw gateway response  |  
| **Transaction Types**  | Authorize, Capture, Purchase, Refund, Void, Reverse  | Authorize, Capture, Purchase, Refund, Void  |  
| **Encrypted PAN Input**  | Supported via `ProcessTransactionAndTokenize`  | Not supported  |  
| **CVV Injection**  | Supported  | Supported  |  
| **Custom Parameter Forwarding**  | Not Supported  | Selected PSP integrations not built on SDKs and accept JSON requests  |  
| **Response Extraction (Regex)**  | Not Applicable  | Supported  |  
## Prerequisites[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#prerequisites "Direct link to Prerequisites")
Before integrating Payment Services, ensure you have:
  1. **TokenEx account** — Contact IXOPAY to set up your account
  2. **API credentials** — Your `TokenExID` and `APIKey` for authentication
  3. **Gateway credentials** — Merchant credentials for your chosen payment processors

:::info Getting started If you don't have TokenEx Vault credentials, visit the [Client Portal](https://documentation.ixopay.com/modules/docs/tokenex/welcome#client-portal) or contact your IXOPAY representative. :::
## Quick Links[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#quick-links "Direct link to Quick Links")
### ProcessTransaction API[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#processtransaction-api "Direct link to ProcessTransaction API")
  * [The Basics](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics) — Endpoints, transaction types, and request/response structure
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters) — Configuration for each supported gateway

### Card/Check/Wallet API[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#cardcheckwallet-api-1 "Direct link to Card/Check/Wallet API")
  * [The Basics](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) — REST endpoints and request formats
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters) — Configuration for each supported gateway

  * [How Does Payment Services Work?](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#how-does-payment-services-work)
  * [Choosing Your API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#choosing-your-api)
    * [ProcessTransaction API (Recommended)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#processtransaction-api-recommended)
    * [Card/Check/Wallet API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#cardcheckwallet-api)
  * [Feature Comparison](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#feature-comparison)
  * [Prerequisites](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#prerequisites)
  * [Quick Links](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#quick-links)
    * [ProcessTransaction API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#processtransaction-api)
    * [Card/Check/Wallet API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services#cardcheckwallet-api-1)