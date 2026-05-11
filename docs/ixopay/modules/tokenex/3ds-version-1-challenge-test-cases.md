---
title: Version 1 Challenge
summary: ' 3-D Secure Authentication  3DS Test Caseshttps://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases  Version
  1 Challenge'
tags:
- device-channel-browser-https-documentation-ixopay-com-modules-docs-tokenex-version-challenge-test-cases-device-channel-browser-direct-link-device-channel-browser
- device-channel-https-documentation-ixopay-com-modules-docs-tokenex-version-challenge-test-cases-device-channel-direct-link-device-channel
- 3ds
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-1-challenge-test-cases
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* 3-D Secure Authentication
  * [3DS Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases)
  * Version 1 Challenge

# Version 1 Challenge
3DS 2.1.0 Challenge Testing Scenarios
## Device Channel: Browser[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-1-challenge-test-cases#device-channel-browser "Direct link to Device Channel: Browser")  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 17  | Payment Authentication request that results in a fully-authenticated challenged authentication  | PA  | Y  | 2303779999000408  |  
| 18  | Non-Payment Authentication request that results in a fully authenticated challenged authentication.  | NPA  | Y  | 2303779999000416   
2303779999001042  |  
| 19  | Payment Authentication request that results in a not-authenticated challenged authentication  | PA  | N  | 2303779999000424  |  
| 20  | Payment authentication request that results in a not-authenticated challenged authentication  | PA  | U  | 2303779999000432  |  
| 21  | Non-Payment Authentication request that results in a Not Authenticated challenged authentication  | NPA  | U  | 2303779999000440  |  
| 22  | Non-Payment Authentication request that results in a Not Authenticated challenged authentication  | NPA  | N  | 2303779999001067   
2303779999002008  |  
## Device Channel: 3RI[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-1-challenge-test-cases#device-channel-3ri "Direct link to Device Channel: 3RI")
No validation scenarios at this time.