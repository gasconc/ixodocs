---
title: Collecting and Exchanging Payment Information
summary: ' Getting started  Collecting and Exchanging Payment Information'
tags:
- online-payment-transaction-work-ixopay-https-documentation-ixopay-com-modules-docs-tokenex-collecting-exchanging-payment-information-online-payment-transaction-direct-link-online-payment-transaction-work-ixopay
- online-payment-transaction-additional-fraud-protection-work-https-documentation-ixopay-com-modules-docs-tokenex-collecting-exchanging-payment-information-online-payment-transaction-additional-fraud-protection-direct-link-online-payment-transaction-additional-fraud-protection-work
- api
- pci
- tokenization
- tokenex
- ixopay
- psp
- capture
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/collecting-and-exchanging-payment-information
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* Getting started
  * Collecting and Exchanging Payment Information

# Collecting and Exchanging Payment Information
info
Collecting and exchanging payment information is a common reason to tokenize data. Here are some of the most popular scenarios for using TokenEx to protect sensitive payment data.
## How does an online payment transaction work with IXOPAY?[​](https://documentation.ixopay.com/modules/docs/tokenex/collecting-and-exchanging-payment-information#online-payment-transaction "Direct link to How does an online payment transaction work with IXOPAY?")
_(TokenEx Solutions: Hosted iFrame, Vaultless Tokenization, Transparent Gateway)_
![TokenEx Solutions: Hosted iFrame, Vaultless Tokenization, Transparent Gateway](https://documentation.ixopay.com/modules/assets/images/api-platform-2-2360a3573aa50375fef51f6b9b167bfe.png)
In this instance, a company is collecting payment data on its website that needs to be sent to its payment services provider (PSP). The website uses a TokenEx **Hosted iFrame** to capture the sensitive credit card information. The iFrame allows the payment data to go directly to TokenEx so the sensitive info never goes through the company's systems. This minimizes its exposure to Payment Card Industry (PCI) scope and its compliance requirements. TokenEx returns the tokenized version of this data to the parent page for storage and future use. Finally, it detokenizes the payment information using the **Transparent Gateway** and sends it to the PSP.
* * *
## How does an online payment transaction with additional fraud protection work?[​](https://documentation.ixopay.com/modules/docs/tokenex/collecting-and-exchanging-payment-information#online-payment-transaction-with-additional-fraud-protection "Direct link to How does an online payment transaction with additional fraud protection work?")
_(TokenEx Solutions: Hosted iFrame, Vaultless Tokenization, Fraud Services, Transparent Gateway)_
![TokenEx Solutions: Hosted iFrame, Vaultless Tokenization, Fraud Services, Transparent Gateway](https://documentation.ixopay.com/modules/assets/images/api-platform-3-faec8053ab87c3583b446512c48a00a2.png)
Here, a company wants to do an additional fraud check on the transaction to minimize the potential for false declines and chargebacks. Payment data is collected on the website with the TokenEx **Hosted iFrame**. This payment information is sent to a **fraud services** provider to determine risk. If the transaction is evaluated as high-risk (according to the logic you've set up with your fraud provider), it will be declined. Otherwise, TokenEx will pass on the payment information to the PSP to complete the transaction via the **Transparent Gateway**.
Please [contact us](https://www.tokenex.com/contact-us/) if you have additional questions on how the TokenEx platform can help you accept, secure, and transact payment data.