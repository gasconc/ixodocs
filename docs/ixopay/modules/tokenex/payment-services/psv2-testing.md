---
title: Payment Services Testing
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Payment Services Testing'
tags:
- test-environment-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-testing-test-environment-direct-link-test-environment
- production-environment-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-testing-production-environment-direct-link-production-environment
- api
- sdk
- json
- xml
- tokenex
- ixopay
- payment-gateway
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-testing
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * Payment Services Testing

# Payment Services Testing
Validating your integration with a TokenEx Gateway.
Since Payment Services is an alternative way to interact with a payment gateway's API rather than integrating directly, the test cards and other testing methods made available by the 3rd-Party Gateway is recommended to validate your application's integration to that gateway through Payment Services.
## Test Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-testing#test-environment "Direct link to Test Environment")
Within the Test environment, all transactions are routed to the applicable payment gateway's sandbox.
To see exactly how the TokenEx request parameters are mapped to each non-SDK third-party gateway API, include the request parameter `"showForwardedRequest":true` in any request. When true, the `gatewayResponse` will contain a `forwardedRequest`object - detailed below. Raw PANs are the only filtered parameters within the `forwardedRequest`. This feature is specific to the TokenEx Test environment. Including `showForwardedRequest` in the TokenEx Production environment will not have an impact on the response.
To determine if the gateway you're integrating with was built on top of an SDK, see the [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters) page.  
| forwardedRequest  | Type  | Description  |  
| --- | --- | --- |  
| parameterForwards  | object  | Report on the merge of merchant-specified parameters into the 3rd-Party API request. See [Parameter Forwarding.](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding)  |  
| method  | string  | HTTP method used for the request.  |  
| uri  | string  | Fully qualified URL where the request was sent.  |  
| headers  | escaped string  | When parsed to JSON, the headers object is a collection of key-value pairs, where each key (header name) is associated with a list of values (header values).  |  
| body  | escaped string  | This parameter's structure is specific to the gateway being tested. Most gateways use JSON, though some are built around XML (e.g., Elavon) or URL-encoded key-value pairs (e.g., BluePay).  |  
## Production Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-testing#production-environment "Direct link to Production Environment")
Within the Production environment, there is support for routing transactions to a payment gateway's sandbox environment by including the parameter `"testMode": true`. If `testMode` is false or omitted, then the transaction is routed to the payment gateway's live environment.