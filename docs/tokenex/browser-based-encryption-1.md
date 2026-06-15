---
title: Overview of BBE
summary: ' Browser based encryption BBE  Overview of BBE'
tags:
- api
- pci
- tokenex
- ixopay
- payment-gateway
- iframe
- merchant
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/browser-based-encryption-1
portal: tokenex
updated: '2026-06-15'
related: []
---

* Browser based encryption (BBE)
  * Overview of BBE

# Overview of BBE
There may be situations when an organization needs to tokenize sensitive data in a web form but an iFrame is not the preferred solution. In this scenario, TokenEx provides a JavaScript library that utilizes a TokenEx [RSA public encryption key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys) to encrypt sensitive information within the web form. When the form is submitted, the encrypted data will posted to the hosting web server. Because only TokenEx can decrypt the ciphertext, there is less risk of a sensitive data breach in the event the web server is compromised.
Once the ciphertext has been sent to the web server, the encrypted value(s) can be passed to TokenEx via a Web API to be tokenized.
info
While use of the [TokenEx iFrame](https://documentation.ixopay.com/modules/docs/tokenex/iframe-new) may qualify an e-commerce merchant accepting only card-not-present transactions to complete a Self-Assessment Questionnaire (SAQ) A, use of Browser Based Encryption (BBE) typically requires completion of an SAQ A-EP.
For more information on the PCI requirements related to e-commerce solutions, see the PCI Security Standards Council "[Best Practices for Securing E-commerce](https://www.pcisecuritystandards.org/pdfs/best_practices_securing_ecommerce.pdf)" Information Supplement.
![](https://documentation.ixopay.com/modules/assets/images/BBE-b2c6017d0558f16bc5edd94710de739e.png)  
| Step |  
| --- |  
| 1. Sensitive data is encrypted in the customer's web browser using the TokenEx BBE JavaScript library and [RSA public encryption key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys). |  
| 2. The non-sensitive and encrypted sensitive data (ciphertext) is submitted to the TokenEx client's web server. |  
| 3. The TokenEx client makes a [Web API call](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted) to TokenEx with the encrypted value(s). TokenEx decrypts and tokenizes the sensitive data. |  
| 4. TokenEx returns the token to the client's server. The TokenEx client can then send the tokenized data to a third-party such as a payment gateway, using the [Payment Services API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) or [Transparent Gateway API](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics). |  
| 5. TokenEx replaces the tokens in the client's API call to a third-party with the corresponding sensitive data. |