---
title: 3DS Test Cases
summary: ' 3-D Secure Authentication  3DS Test Cases'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-test-cases-overview-direct-link-overview
- test-cards-https-documentation-ixopay-com-modules-docs-tokenex-test-cases-test-cards-direct-link-test-cards
- card-brands-https-documentation-ixopay-com-modules-docs-tokenex-test-cases-card-brands-direct-link-card-brands
- luhn-compliance-https-documentation-ixopay-com-modules-docs-tokenex-test-cases-luhn-compliance-direct-link-luhn-compliance
- verification-https-documentation-ixopay-com-modules-docs-tokenex-test-cases-verification-direct-link-verification
- 3ds
- pci
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* 3-D Secure Authentication
  * 3DS Test Cases

# 3DS Test Cases
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#overview "Direct link to Overview")
Once you have been provisioned for 3DS in the TokenEx Test environment, the following scenarios can be used to [verify your implementation](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#verification) prior to being provisioned for 3DS in the TokenEx Production environment.
Device fingerprinting via the iFrame is optional.
  * [Version 1 Frictionless](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-1-frictionless-test-cases)
  * [Version 1 Challenge](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-1-challenge-test-cases)
  * [Version 2 Frictionless](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-frictionless-test-cases)
  * [Version 2 Challenge](https://documentation.ixopay.com/modules/docs/tokenex/3ds-version-2-challenge-test-cases)
  * [Co-Branded Frictionless](https://documentation.ixopay.com/modules/docs/tokenex/co-branded-frictionless)
  * [Co-Branded Challenge](https://documentation.ixopay.com/modules/docs/tokenex/co-branded-challenge)

## Test Cards[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#test-cards "Direct link to Test Cards")
Each test scenario is tightly coupled to a test card number. The card number for each scenario _must_ be used to achieve the specified outcome. The scenario is met when the specified card number returns the specified `transStatus`.
### Card Brands[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#card-brands "Direct link to Card Brands")
All test cards match Mastercard BINs and no other brands are available within the testing environment. Card brands supported in Production are Visa, Mastercard, Discover, Amex, JCB, and Cartes Bancaires.
### Luhn Compliance[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#luhn-compliance "Direct link to Luhn Compliance")
All test cards except for the co-branded card numbers are Luhn compliant. When testing co-branded scenarios, please choose a TokenEx [token scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) that does not perform a Luhn check.
In order to tokenize a non-Luhn compliant card number using the TokenEx iFrame, add the following parameter to the [configuration object](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object) when testing with the PCI or PCI w/CVV modes of the iFrame:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| enforceLuhnCompliance  | Boolean  | True or False. If omitted, defaults to true. Set to False to bypass luhn checks in PCI or PCI w/ CVV modes.  |  
## Verification[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases#verification "Direct link to Verification")
Your 3DS implementation in the TokenEx Test environment can be verified by requesting that TokenEx Technical Support enable debug logging on the applicable TokenEx ID(s). Once the additional logging is enabled by Technical Support, complete a full run of applicable 3DS test cases and document the corresponding reference numbers for each test scenario response. Provide the reference numbers to Technical Support for verification.
End to End testing of 3DS
There are a few different approaches to ensuring your implementation works as expected. Please see the [Testing section](https://documentation.ixopay.com/modules/docs/tokenex/3ds-faqs#testing) of the [3DS FAQ](https://documentation.ixopay.com/modules/docs/tokenex/3ds-faqs).