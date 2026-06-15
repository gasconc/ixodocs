---
title: Co-Branded Frictionless
summary: ' 3-D Secure Authentication  3DS Test Caseshttps://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases  Co-Branded
  Frictionless'
tags:
- device-channel-browser-https-documentation-ixopay-com-modules-docs-tokenex-branded-frictionless-device-channel-browser-direct-link-device-channel-browser
- 3ds
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/co-branded-frictionless
portal: tokenex
updated: '2026-06-15'
related: []
---

* 3-D Secure Authentication
  * [3DS Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases)
  * Co-Branded Frictionless

# Co-Branded Frictionless
3DS Co-Branded Frictionless Testing Scenarios.
Heads Up!
Co-branded test cards are not luhn compliant. To test these using the iframe, you will need to supply the `enforceLuhnCompliance:false` parameter in the configuration object. In production, cards should be luhn compliant, so this parameter would no longer be needed.
## Device Channel: Browser[​](https://documentation.ixopay.com/modules/docs/tokenex/co-branded-frictionless#device-channel-browser "Direct link to Device Channel: Browser")
Send requests formatted for 2.1.0 and use DirectoryServerIdentifier SANDBOX_DS.  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 2  | Payment Authentication request for a co-branded card which results in a fully-authenticated frictionless authentication  | PA  | Y  | 2303779999999990  |  
| 3  | Payment Authentication request for a co-branded card which results in a not-authenticated frictionless authentication  | PA  | N  | 2303779999999991  |