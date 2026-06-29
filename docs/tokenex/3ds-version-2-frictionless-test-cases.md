---
title: Version 2 Frictionless
summary: ' 3-D Secure Authentication  3DS Test Caseshttps://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases  Version
  2 Frictionless'
tags:
- device-channel-browser-https-documentation-ixopay-com-modules-docs-tokenex-version-frictionless-test-cases-device-channel-browser-direct-link-device-channel-browser
- device-channel-https-documentation-ixopay-com-modules-docs-tokenex-version-frictionless-test-cases-device-channel-direct-link-device-channel
- 3ds
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-frictionless-test-cases
portal: tokenex
updated: '2026-06-29'
related: []
---

* 3-D Secure Authentication
  * [3DS Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases)
  * Version 2 Frictionless

# Version 2 Frictionless
3DS 2.2.0 Frictionless Testing Scenarios
## Device Channel: Browser[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-frictionless-test-cases#device-channel-browser "Direct link to Device Channel: Browser")  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 1  | Payment Authentication request that results in a fully authenticated frictionless authentication  | PA  | Y  | 2303779951000396  |  
| 3  | Payment Authentication request that results in a not-authenticated frictionless authentication  | PA  | N  | 2303779951000347  |  
| 5  | Payment Authentication request that results in a not-authenticated frictionless authentication  | PA  | U  | 2303779951000370  |  
| 2  | Non-Payment authentication request that results in a fully authenticated frictionless authentication  | NPA  | Y  | 2303779951000263  |  
| 4  | Non-Payment authentication request that results in a not-authenticated frictionless authentication  | NPA  | N  | 2303779951000545  |  
| 6  | Non-Payment authentication request that results in a not-authenticated frictionless authentication  | NPA  | U  | 2303779951000255  |  
## Device Channel: 3RI[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-frictionless-test-cases#device-channel-3ri "Direct link to Device Channel: 3RI")  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 26  | Payment-Authentication request with a whitelist that results in a fully authenticated frictionless authentication with the whitelist result  | PA  | Y  | 2303779951000529  |  
| 27  | Payment-Authentication request with a whitelist that results in a not-authenticated frictionless authentication with the whitelist result  | PA  | N  | 2303779951000503  |  
| 25  | Non-Payment authentication request that results in a fully authenticated frictionless authentication  | NPA  | Y  | 2303779951000487  |