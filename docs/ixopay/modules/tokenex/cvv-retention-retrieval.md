---
title: CVV Retention and Retrieval
summary: ' CVV Retention and Retrieval'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-cvv-retention-retrieval-overview-direct-link-overview
- pci-token-services-https-documentation-ixopay-com-modules-docs-tokenex-cvv-retention-retrieval-pci-token-services-direct-link-pci-token-services
- transparent-gateway-https-documentation-ixopay-com-modules-docs-tokenex-cvv-retention-retrieval-transparent-gateway-direct-link-transparent-gateway
- payment-services-https-documentation-ixopay-com-modules-docs-tokenex-cvv-retention-retrieval-payment-services-direct-link-payment-services
- api
- pci
- tokenex
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* Appendix
  * CVV Retention and Retrieval

# CVV Retention and Retrieval
Card Verification Value retention policies across the TokenEx platform
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval#overview "Direct link to Overview")
When a CVV is associated with a TokenEx token, that CVV is available to use for 7 days. The CVV is deleted from TokenEx systems after 7 days of non-use. See the below guidance for utilizing a CVV within this 7 day window. The following guidance applies to the TokenEx PCI Token Services, Transparent Gateway, and Payment Services APIs.
## PCI Token Services[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval#pci-token-services "Direct link to PCI Token Services")
The [/DetokenizeWithCvv ](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-detokenizewithcvv) action has an optional parameter called `cacheCVV` which defaults to false.  
| `cacheCVV`  | Outcome  |  
| --- | --- |  
|  **false** or **omitted**  | The CVV is immediately deleted upon retrieval.  |  
| **true**  | Initial request - updates the purge date to 5 minutes from the first request. Subsequent attempts to cache the CVV will not extend the timer.  |  
## Transparent Gateway[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval#transparent-gateway "Direct link to Transparent Gateway")
The below request headers apply to processing of the [CVV Function](https://documentation.ixopay.com/modules/docs/tokenex/cvv-function). When `tx-retain-cvv` is true, `tx-cachecvv` is ignored.  
| `tx-retain-cvv`  | `tx-cachecvv`  | Outcome  |  
| --- | --- | --- |  
|  **false** or **omitted**  |  **false** or **omitted**  | TGAPI v2: the CVV is immediately deleted upon retrieval.   
PS v2: the CVV is deleted when the transaction response indicates `approved`.  |  
|  **false** or **omitted**  | **true**  | Initial request - updates the purge date to 5 minutes from the first request including the `tx-cachecvv:true`. Subsequent attempts to cache the CVV will not extend the timer.  |  
| **true**  |  **false** or **omitted**  | Skips updating the CVV's purge date. 7 days from initial add is still in effect.  |  
| **true**  | **true**  | Skips updating the CVV's purge date. 7 days from initial add is still in effect.  |  
## Payment Services[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval#payment-services "Direct link to Payment Services")
The below request header applies to s[requests containing the `CreditCard.Cvv`](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) request parameter.  
| `tx-cachecvv`  | Outcome  |  
| --- | --- |  
|  **false** or **omitted**  | The CVV is deleted when the transaction response indicates `approved`.  |  
| **true**  | Initial request - updates the purge date to 5 minutes from the first request's `true`. Subsequent attempts to cache the CVV will not extend the timer.  |