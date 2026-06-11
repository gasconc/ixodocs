---
title: Retries and 3rd-Party APIs
summary: ' Retries and 3rd-Party APIs'
tags:
- ixopay-handle-retries-third-party-api-connections-https-documentation-ixopay-com-modules-docs-tokenex-retries-party-apis-overview-direct-link-ixopay-handle-retries-third-party-api-connections
- manage-retry-behavior-https-documentation-ixopay-com-modules-docs-tokenex-retries-party-apis-managing-retries-direct-link-manage-retry-behavior
- ixopay-products-support-retry-handling-https-documentation-ixopay-com-modules-docs-tokenex-retries-party-apis-supported-products-direct-link-ixopay-products-support-retry-handling
- api
- ssl
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* Appendix
  * Retries and 3rd-Party APIs

# Retries and 3rd-Party APIs
Handling timeouts and network protocol failures when connecting to a third party through TokenEx.
## How does IXOPAY handle retries for third-party API connections?[​](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#overview "Direct link to How does IXOPAY handle retries for third-party API connections?")
Some of our products reach out to third party APIs such as [gateways in Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gateway-implementations) and endpoints specified in the Transparent Gateway API's [`tx-url` header](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#supply-tokenex-request-headers) or a [Proxy profile](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1#proxy-profiles). Sometimes connecting to these third parties presents temporary hiccups and the request needs to be retried to process successfully. TokenEx automatically attempts retries for common network protocol failures when connecting to third parties. To specify that a request should not be retried or that a request should be retried when a timeout occurs, utilize the `tx-retry` header.
## How do I manage retry behavior?[​](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#managing-retries "Direct link to How do I manage retry behavior?")
The `tx-retry` header can be used to specify a retry handling preference.  
|  `Tx-Retry` Header value  | Action  |  
| --- | --- |  
| null or header omitted  | Common network protocol failures are automatically retried by TokenEx. For example, an SSL connection failing to establish or other issues that occur prior to the transmission of any payload data to the third party. Timeouts are never automatically retried.  |  
| false  | Do not attempt a retry for any reason.  |  
| true  | Connection timeouts are retried. **See warning below**  |  
| Values that can't be parsed to true or false  | See `null or header omitted`.  |  
️Retrying 3rd-Party API Timeouts
When sending data, use any available idempotency options provided by the third party to prevent that data from being re-processed and avoid issues like a payment being processed twice.
To increase the amount of time TokenEx waits for a response from a third party's API before timing out, use the `tx-http-timeout` header with the time to wait specified in seconds. For example, `tx-http-timeout:70` to wait up to 70 seconds for a response before a timeout error is returned.
## Which IXOPAY products support retry handling?[​](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#supported-products "Direct link to Which IXOPAY products support retry handling?")
  * [Transparent Gateway API v2](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics)
    * Tokenize
    * Detokenize
    * Proxy
  * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics)
    * All gateway integrations support retries except: [Adyen Classic](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen), [Braintree](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree), [Cybersource](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource), and [Stripe](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe).

  * [How does IXOPAY handle retries for third-party API connections?](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#overview)
  * [How do I manage retry behavior?](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#managing-retries)
  * [Which IXOPAY products support retry handling?](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis#supported-products)