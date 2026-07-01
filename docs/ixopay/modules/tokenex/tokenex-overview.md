---
title: TokenEx Platform Overview
summary: ' Getting started  TokenEx Platform Overview'
tags:
- ixopay-tokenex-platform-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-overview-introduction-direct-link-ixopay-tokenex-platform
- ixopay-accept-sensitive-data-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-overview-accept-direct-link-ixopay-accept-sensitive-data
- ixopay-secure-tokenized-data-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-overview-secure-direct-link-ixopay-secure-tokenized-data
- ixopay-transact-payment-networks-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-overview-transact-direct-link-ixopay-transact-payment-networks
- additional-payment-products-ixopay-offer-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-overview-additional-payment-offerings-direct-link-additional-payment-products-ixopay-offer
- api
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Getting started
  * TokenEx Platform Overview

# TokenEx Platform Overview
## What is the IXOPAY TokenEx platform?[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview#introduction "Direct link to What is the IXOPAY TokenEx platform?")
info
TokenEx's cloud tokenization platform helps you **accept, secure, and transact** sensitive data.
TokenEx works by gathering sensitive data through either batch or API processes. Once the data is gathered, we accept and secure it, returning a token to you for internal use. When you need to transact with a third party, just send us the token and its destination so we can forward the related data on your behalf.
![The  Platform](https://documentation.ixopay.com/modules/assets/images/api-platform-1-dcdbf9279363f4738e0086526e719620.png)
* * *
## How does IXOPAY accept sensitive data?[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview#accept "Direct link to How does IXOPAY accept sensitive data?")
info
Gathering sensitive information (e.g., credit card numbers, SSNs, health information) from customers presents security and compliance challenges. TokenEx has multiple solutions to help customers capture this data.  
| How is the data collected?  |  TokenEx Solution  | Description  |  
| --- | --- | --- |  
| Web form  | Hosted iFrame  | Allows a company to capture sensitive information on a web form, sending it directly to TokenEx and receiving a non-sensitive token in return. Easily integrates with web applications and web forms, maintaining existing style. This a data element iFrame and not an iFrame for an entire payment form.  |  
| Web form  | Browser-Based Encryption  | Allows a company to encrypt sensitive data upon collection for secure transmission to TokenEx, if they are unable to use the TokenEx iFrame.  |  
| Mobile app  | Mobile API  | Allows a company to capture sensitive information from within a native mobile application (iOS or Android), sending it directly to TokenEx and receiving a non-sensitive token in return.  |  
| File  | Batch  | Tokenize large amounts of sensitive data from a structured file before it enters your system. Frequently used for scheduled recurring processes, large-scale data transfers, and data migrations.  |  
| Contact center  | Contact Center API  | Securely collect sensitive data via phone and call center technologies (IVR/DTMF/PIN pad systems).  |  
| In-person/Point-of-sale (POS) system  | Point to Point Encryption (P2PE)  | Tokenize sensitive data collected from PIN pads and other point-of-sale devices from brick-and-mortar locations.  |  
| Already exists in system  | Token Services API  | Tokenize sensitive data so that you can store a non-sensitive replacement internally that is secured and protected against bad actors.  |  
| Third-party  | Transparent Gateway API (Proxy Tokenization)  | Tokenize sensitive data from a third party before it ever hits your environment, which reduces scope and increases security.  |  
* * *
## How does IXOPAY secure tokenized data?[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview#secure "Direct link to How does IXOPAY secure tokenized data?")
info
TokenEx ensures that you can easily access sensitive information that you've tokenized, while reducing your PCI scope. You can opt for either Vaultless or Vaulted token storage.  
| Vaulted Tokens  | Vaultless Tokens  |  
| --- | --- |  
|  TokenEx stores the relationship between the sensitive data and the token in a client specific database or "token vault."  |  TokenEx doesn't store the relationship between sensitive data and token, but the data can still be detokenized when needed. Eliminates the need to have sensitive data stored in a specific location to meet data compliance regulations.  |  
| Helps companies ensure there is a record of their sensitive data stored by TokenEx.  | Faster processing time for tokenizing/detokenizing large amounts of information at once.  |  
| Provides additional flexibility in [token schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless).  | 1:1 token mapping and 4 token schemes to address the majority of use cases.  |  
* * *
## How does IXOPAY transact with payment networks?[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview#transact "Direct link to How does IXOPAY transact with payment networks?")
info
TokenEx has several options to help companies securely transfer sensitive data from TokenEx to other systems that need it.
The most common ways to exchange sensitive data are with the Transparent Gateway API and the Payment Services API. Here are the differences between the two offerings:  
| Transparent Gateway API  | Payment Services API  |  
| --- | --- |  
| Works with any API endpoint or payment gateway without handling sensitive data internally.  | Pre-coded to popular payment gateways.  |  
| Minimal code and setup changes.  | Connect to your desired combination of payment service providers via a single point of integration.  |  
| Can also be set up to tokenize sensitive data from inbound requests.  | Unified API allows for faster speed to market when leveraging multiple PSPs integrated with Payment Services.  |  
If you need help determining whether to use the Transparent Gateway or Payment Services, please [contact us](https://www.ixopay.com/en/contact).
* * *
## What additional payment products does IXOPAY offer?[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-overview#additional-payment-offerings "Direct link to What additional payment products does IXOPAY offer?")
info
For companies collecting payment information, TokenEx has several products to improve business outcomes.  
|  TokenEx Offering  | Benefits  |  
| --- | --- |  
| **Account Updater**  | Retrieve up-to-date information for your stored credit cards, including changes to credit card numbers, expiration dates, and account closures.   
  
Stop false declines due to expired card information.   
  
Prevent unintended service interruptions to ensure your customers continue to receive the products or subscriptions they expect.  |  
| **3-D Secure**  | EMVCo 3-D Secure can help authenticate card-not-present transactions with minimal friction and reduce fraud with risk assessments.   
  
Help organizations comply with Payment Services Directive 2 (PSD2).   
  
Shift the liability for chargebacks to issuers.  |  
| **Fraud Prevention Services**  | Integrate with your preferred fraud provider to protect your customers and prevent fraudulent transactions.   
  
Add fraud prevention to your security stack for a layered approach that can increase the profitability of your payment processing.  |  
| **Network Tokenization**  | Transactions powered by network tokens can qualify for lower interchange fees and are more likely to be approved.   
  
Network tokens are automatically updated when new card information is issued, and they contain additional details such as issuer data and card art.  |  
**Do you have additional questions about the TokenEx platform?** Feel free to [contact us](https://www.ixopay.com/en/contact).