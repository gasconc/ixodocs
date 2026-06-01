---
title: Version 2 Challenge
summary: ' 3-D Secure Authentication  3DS Test Caseshttps://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases  Version
  2 Challenge'
tags:
- device-channel-browser-https-documentation-ixopay-com-modules-docs-tokenex-version-challenge-test-cases-device-channel-browser-direct-link-device-channel-browser
- device-channel-https-documentation-ixopay-com-modules-docs-tokenex-version-challenge-test-cases-device-channel-direct-link-device-channel
- 3ds
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-challenge-test-cases
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* 3-D Secure Authentication
  * [3DS Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases)
  * Version 2 Challenge

# Version 2 Challenge
3DS 2.2.0 Challenge Testing Scenarios
## Device Channel: Browser[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-challenge-test-cases#device-channel-browser "Direct link to Device Channel: Browser")  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 28  | Payment Authentication request that results in a fully authenticated challenged authentication  | PA  | Y  | 2303779951000446  |  
| 29  | Non-Payment Authentication request that results in a fully authenticated challenged authentication.  | NPA  | Y  | 2303779951000297  |  
| 30  | Payment Authentication request that results in a not-authenticated challenged authentication  | PA  | N  | 2303779951000453  |  
| 31  | Payment Authentication request that results in a not-authenticated challenged authentication  | PA  | U  | 2303779951000420  |  
| 32  | Non-Payment Authentication request that results in a Not Authenticated challenged authentication.  | NPA  | U  | 2303779951000289  |  
| 35  | Whitelisting. Non-Payment Authentication request that results in a fully authenticated challenged authentication with a successful whitelist response.  | NPA  | Y  | 2303779951000305  |  
## Device Channel: 3RI[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-challenge-test-cases#device-channel-3ri "Direct link to Device Channel: 3RI")
PLEASE NOTE
A challenge will not be mandated for a 3RI 3DS request unless explicitly requested via the optional DecoupledAuthenticationDetails object in the authentication request.
The below scenarios are only valid when the desired transStatus is obtained by calling the ChallengeResults method. The Authentication response will indicate a challenge when Decoupled Authentication is requested via the Authentication request by providing the optional DecoupledAuthenticationDetails object and setting the value of the DecoupledAuthenticationDetails.DecoupledIndicator to true.  
| Scenario #  | Description  | Message Category  | transStatus  | Card Number  |  
| --- | --- | --- | --- | --- |  
| 59  | Payment Authentication request that results in a fully authenticated decoupled authentication  | PA  | Y  | 2303779951000537  |  
| 61  | Payment Authentication request that results in a not-authenticated decoupled authentication  | PA  | N  | 2303779951000511  |  
| 60  | Non-Payment Authentication request that results in a fully authenticated decoupled authentication  | NPA  | Y  | 2303779951000495  |  
| 62  | Non-Payment Authentication request that results in a not-authenticated decoupled authentication  | NPA  | N  | 2303779951000479  |