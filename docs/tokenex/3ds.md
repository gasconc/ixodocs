---
title: 3DS Overview
summary: ' 3-D Secure Authentication  3DS Overview'
tags:
- https-documentation-ixopay-com-modules-docs-tokenex-direct-link
- work-https-documentation-ixopay-com-modules-docs-tokenex-work-direct-link-work
- implementation-look-like-https-documentation-ixopay-com-modules-docs-tokenex-implementation-look-like-direct-link-implementation-look-like
- information-https-documentation-ixopay-com-modules-docs-tokenex-information-direct-link-information
- api
- 3ds
- 3d-secure
- pci
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3ds
portal: tokenex
updated: '2026-05-11'
related: []
---

* 3-D Secure Authentication
  * 3DS Overview

# 3DS Overview
## What is it?[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds#what-is-it "Direct link to What is it?")
EMVCo
's 3-D Secure 2 is the second generation of the 3DS protocol. The 3DS protocol aims to reduce unauthorized transactions through risk-based cardholder authentication for card-not-present transactions. Authentication is performed by sending information about the presumed cardholder (client) and transaction to the card issuer ( ACS) and the ACS assesses the risk. Low-to-moderate risk transactions pass through a 'frictionless' authentication flow and high-risk transactions are challenged. The frictionless flow does not require any manual input from the client, whereas high-risk transactions require a one-time-passcode (OTP) or other interaction. Merchants can utilize 3-D Secure 2 (hereafter as '3DS') within their platform to decrease cart abandonment rates and fraud, add digital wallet integration, and improve their customers' checkout experience by only requiring interaction for potentially fraudulent transactions.
## How does it work?[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds#how-does-it-work "Direct link to How does it work?")
The starting point for every 3DS transaction should be checking which version(s) of 3DS the card number (PAN) supports. his check generates a transaction ID on the 3DS server for association of information and tracking the status of a transaction through the authentication process. A PAN can support more than one version and the version chosen determines what information is necessary to send to the ACS. The transaction ID is sent with the client and transaction data (browser attributes can also be associated with a transaction through a process called 'device fingerprinting') to the ACS for authentication and a risk assessment is performed. If the risk is low, the ACS returns a transaction status of 'Y' and the transaction ID can be sent to the payment processor with an authorization or purchase transaction. When the risk is high, the ACS will return a transaction status of 'C' and information necessary to retrieve and [present a challenge](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge) to the client. If a merchant does not present a challenge to the client, the authentication attempt should be abandoned. The authentication challenge must be abandoned by the merchant, cancelled by the cardholder, or completed by the cardholder prior to sending the transaction request to the payment processor.
## What does an implementation look like?[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds#what-does-an-implementation-look-like "Direct link to What does an implementation look like?")
TokenEx supports 3DS versions 2.1.0 and 2.2.0 within the Iframe V3, API V2, and PaymentServices V2 products.
The TokenEx Iframe can initiate the 3DS flow by performing [device fingerprinting](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting) on the client's browser. When 3DS is enabled for PCI or PCI w/ CVV modes and a notification url provided, the tokenize response will contain information about which 3DS version(s) the PAN supports. If a PAN supports device fingerprinting, a hidden iframe is rendered in the same container as the PAN iframe and a script will record and post the browser attributes to the card issuer and associate those attributes with the 3DS transaction ID. Once the ACS receives the browser attributes, a notification is posted to the merchant's provided notification url. Within a payment authentication flow, receipt of that notification can be the trigger to send the authentication request to the card issuer via the TokenEx API.
The authentication request, challenge status, and 3DS version retrieval is managed by the TokenEx API.
  * [Supported Versions](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions) takes a PAN and returns the versions of 3DS supported by the 3DS Server, the Issuer ACS, and the Directory Server (DS), which 3DS features are supported by the ACS, and the appropriate ACS endpoint for receipt of client browser attributes.
  * [Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) takes client/transaction data and returns whether or not a transaction could be authenticated, if a challenge is required, and a challenge request (creq) that the merchant can post to the ACS endpoint and subsequently receive a challenge to present to the client.
  * [ChallengeResults](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results) takes a transaction ID and returns the status of a challenge or authentication result. Following challenge completion, a summary notification is sent to the merchant (notification endpoint provided through Authentications) and this endpoint can be called to obtain a full authentication result.
  * [AbandonedChallenges](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment) closes the authentication process for a challenged transaction when the merchant opted not to present a challenge to the client.

TokenEx's [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) has several gateways that accept 3DS data. At this point, a merchant can utilize their 3DS authentication result within an Authorization or Purchase request and the gateway will forward that information to the card issuer, indicating that the transaction has been vetted through the 3DS authentication process.
Testing an Implementation: [3-D Secure Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/3ds-test-cases)
Enrolling in 3DS
Prior to sending Authentication requests in Production, a merchant must reach out to their acquirer and/or Payment Service Provider and request enrollment with the card brands they plan to process through 3DS. Request the following information, as these elements will be needed to be provided in 3DS authentication calls:
  * Acquirer BINs for Visa, MasterCard, and/or American Express
  * Merchant Category Code (MCC)
  * Merchant Name assigned by the Acquiring Bank
  * Merchant ID

TokenEx is able to enroll merchants with MasterCard.
### More information on 3DS[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds#more-information-on-3ds "Direct link to More information on 3DS")
[What is 3-D Secure Authentication, and Why Do I Need It?](https://www.ixopay.com/en/news/what-is-3-d-secure-authentication-and-why-do-i-need-it)  
[3D Secure: What is it and how does it work?](https://3dsecure2.com/)  
[EMVCO 3-D Secure Documents](https://www.emvco.com/emv-technologies/3d-secure/)  
[EMVCO 3-D Secure 2.2.0 Specification](https://www.emvco.com/specifications/emv-3-d-secure-protocol-and-core-functions-specification-2/) (pdf)