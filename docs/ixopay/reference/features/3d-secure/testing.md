---
title: Testing 3-D Secure authentication
summary: ' 3-D Securehttps://documentation.ixopay.com/docs/reference/features/3d-secure  Testing
  3-D Secure authentication'
tags:
- hosted-secure-https-documentation-ixopay-com-docs-reference-features-secure-testing-hosted-secure-direct-link-hosted-secure
- simple-simulation-https-documentation-ixopay-com-docs-reference-features-secure-testing-simple-simulation-direct-link-simple-simulation
- extended-simulation-https-documentation-ixopay-com-docs-reference-features-secure-testing-extended-simulation-direct-link-extended-simulation
- provider-secure-https-documentation-ixopay-com-docs-reference-features-secure-testing-provider-secure-direct-link-provider-secure
- versioning-result-https-documentation-ixopay-com-docs-reference-features-secure-testing-versioning-result-direct-link-versioning-result
- authentication-result-https-documentation-ixopay-com-docs-reference-features-secure-testing-authentication-result-direct-link-authentication-result
- 3ds
- 3d-secure
- ixopay
- acquirer
source_url: https://documentation.ixopay.com/docs/reference/features/3d-secure/testing
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * Testing 3-D Secure authentication

# Testing 3-D Secure authentication
With the [IXOPAY platform](https://www.ixopay.com), merchants have the ability to test their hosted 3-D Secure configuration either with the [SimulatorPCI](https://documentation.ixopay.com/adapters/simulator) adapter or in conjunction with the PSP's/Acquirer's test environment.
## Hosted 3-D Secure[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#hosted-3-d-secure "Direct link to Hosted 3-D Secure")
### Simple 3DS simulation[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#simple-3ds-simulation "Direct link to Simple 3DS simulation")
Simple 3DS simulation can be enabled by activating the checkbox _Enable Simple 3DS Simulation_ for the Simulator Adapter in the Vault Setup Settings. When this option is selected, both the IXOPAY platform-hosted 3-D Secure configuration and IXOPAY platform-hosted 3-D Secure 2.x configuration are disabled. The outcome of this simple 3-D Secure simulation is determined by the [test cards](https://documentation.ixopay.com/adapters/simulator#credit-cards).
If enabled, an additional 3-D Secure verification screen will be displayed during the payment process, allowing you to choose the verification result from a dropdown field. The transaction status will then be set accordingly based on the selected [test card](https://documentation.ixopay.com/adapters/simulator#credit-cards).
### Extended 3DS simulation[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#extended-3ds-simulation "Direct link to Extended 3DS simulation")
Extended 3DS simulation can be enabled by activating the checkbox _Enable Extended 3DS Simulation_ for the Simulator Adapter in the Vault Setup settings. In this case, the checkbox for the IXOPAY platform-hosted 3-D Secure configuration or IXOPAY platform-hosted 3-D Secure 2.x configuration must be enabled (other configuration fields can remain empty). The outcome of this extended 3-D Secure simulation is controlled by the [test cards](https://documentation.ixopay.com/adapters/simulator#extended-3d-secure-testing) used.
If activated, customers will be redirected to perform methods such as fingerprinting, frictionless, or challenge, depending on the selected test card.
## Provider 3-D Secure[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#provider-3-d-secure "Direct link to Provider 3-D Secure")
To test the IXOPAY platform-hosted 3-D Secure configuration with the PSP's/Acquirer's test environment, you can enable the connector setting _Mock 3D-Secure Flow for Testing_ in the IXOPAY platform 3-D Secure 2.x configuration.
info
The Connector setting _Mock 3D-Secure Flow for Testing_ is not activated by default for all Adapters.
If you do not see the Setting in the 3D-Secure Configuration, please get in contact with our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support). Keep in mind that activation is dependent on the release cycles and takes minimum of 4 weeks.
When this setting is enabled, you can use the test cards provided by the PSP to perform tests. The outcome of the 3DS authentication is controlled through the cardholder's name.
For example, if the cardholder's name is `ENROLLED CHALLENGE`, you will enter the challenge flow. The outcome of the challenge can then be chosen on the challenge screen itself.
The cardholder's name consists of two inputs: Firstname and Lastname. The Firstname determines the versioning result, while the Lastname determines the authentication result.
### Versioning result[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#versioning-result "Direct link to Versioning result")  
| Cardholder firstname  | Versioning control  |  
| --- | --- |  
|  `NOT_ENROLLED` …  | Card not enrolled  |  
|  `ENROLLED` …  | Card enrolled, no method fingerprinting  |  
|  `METHOD` …  | Card enrolled, with method fingerprinting  |  
|  `TIMEOUT` …  | Timeout error  |  
|  `INVALID` …  | Invalid card error  |  
|  `NETWORK_ERROR` …  | Network error  |  
### Authentication result[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing#authentication-result "Direct link to Authentication result")  
| Cardholder lastname  | Authentication control  |  
| --- | --- |  
| … `FRICTIONLESS`  | Frictionless - fully authenticated  |  
| … `ATTEMPTED`  | Frictionless - attempted  |  
| … `CHALLENGE`  | Challenge  |  
| … `UNAUTHENTICATED`  | Not authenticated  |  
| … `REJECTED`  | Rejected  |  
| … `ACCESS_DENIED`  | Error: Access denied  |  
| … `SYSTEM_ERROR`  | Error: Transient system error  |  
| … `FORMAT_ERROR`  | Error: Invalid format  |  
| … `TIMEOUT`  | Error: Network timeout  |  
| … `NETWORK_ERROR`  | Error: Network error  |