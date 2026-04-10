---
title: 8-Digit BINs
summary: ' 8-Digit BINs'
tags:
- background-https-documentation-ixopay-com-modules-docs-tokenex-digit-bins-background-direct-link-background
- impact-https-documentation-ixopay-com-modules-docs-tokenex-digit-bins-impact-direct-link-impact
- digit-bins-pci-scope-https-documentation-ixopay-com-modules-docs-tokenex-digit-bins-digit-bins-pci-scope-direct-link-digit-bins-pci-scope
- tokenex-support-digit-bins-https-documentation-ixopay-com-modules-docs-tokenex-digit-bins-tokenex-support-digit-bins-direct-link-tokenex-support-digit-bins
- network-tokens-bins-https-documentation-ixopay-com-modules-docs-tokenex-digit-bins-network-tokens-bins-direct-link-network-tokens-bins
- api
- pci
- pci-dss
- tokenex
- ixopay
source_url: ''
portal: tokenex
updated: '2026-04-10'
related: []
---

* Appendix
  * 8-Digit BINs

# 8-Digit BINs
Effective April 2022, the payments ecosystem will begin supporting 8-digit BINs.
## Background[​](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#background "Direct link to Background")
Bank Identification Numbers (BINs) are used throughout the payments ecosystem to identify card networks, issuers and provide information for smooth payment transactions. As the payments ecosystem has expanded, the number of available BINs has rapidly dwindled.
In order to avoid an interruption in the payments flow and to meet industry growth, the International Organization of Standards (ISO) announced an expansion of the BIN length from 6 to 8 digits, which will take effect in April 2022. Personal Account Number (PAN) lengths remain unchanged by the updated ISO standard.
![Increase in BIN length](https://documentation.ixopay.com/modules/assets/images/increase-in-BIN-length-1e0804f50a61a1f87f4daeb5d9740ac3.png)
## Impact[​](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#impact "Direct link to Impact")
Many entities do not use BINs to support their business processes and will not need to make any changes to account for the migration to 8-digit BINs.
If you are using 6-digit BINs for one or more of the following activities, BIN expansion will likely impact your systems:
  * Identification of prepaid cards, fleet cards, corporate cards, benefits cards, etc.
  * Issuer identification
  * Fraud and/or chargeback analytics
  * Routing
  * Cash-back qualification
  * Optimization of approval rates or authorization analysis

## 8-Digit BINs and PCI Scope[​](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#8-digit-bins-and-pci-scope "Direct link to 8-Digit BINs and PCI Scope")
Although 8-digit BINs will be introduced in April 2022, displaying and storing only the first 6-digits and last 4-digits remains the most effective way to protect the primary account number (PAN).
Payment Brand Requirements
"Because each payment brand has different PAN/BIN lengths and different requirements, questions on payment brand truncation requirements, including how to determine whether a PAN has a 6- or 8-digit BIN, should be directed to the applicable acquirer or payment brand."
For more information, see the PCI Security Standards Council blog post - [8-digit BINs and PCI DSS: What You Need to Know](https://blog.pcisecuritystandards.org/8-digit-bins-and-pci-dss-what-you-need-to-know)
## TokenEx Support for 8-Digit BINs[​](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#tokenex-support-for-8-digit-bins "Direct link to TokenEx Support for 8-Digit BINs")
TokenEx recognizes there are instances when our clients will have a business need to display or store the first 8-digits of a PAN as a result of the move to 8-digit BINs. Consequently, we are providing two mechanisms for clients to retrieve the first 8-digits of a tokenized card number **_beginning in April 2022_**.
  * The `GetBINAndLastFour` function of the [PCI Token Services API](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour) will support an optional `useExtendedBIN` parameter that when set to `true` will return the first 8-digits of the supplied token.
  * The PCI modes of the [TokenEx iFrame](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object) will support an optional `useExtendedBIN` configuration parameter that when set to `true` will return a `firstEight` name-value pair in response to the Tokenize event.

warning
The functionality described above does not perform a BIN lookup. For any PAN greater than 16-digits in length. first 8-digits are returned for both 6- and 8-digit BINs. For 15byui-digit PANs, setting the `useExtendedBIN` parameter to `true` will only return the first 6-digits.
For more information regarding the maximum number of PAN digits that can be stored while still remaining PCI compliant, see PCI Security Standards Council FAQ 1091 - [What are acceptable formats for truncation of primary account numbers?](https://pcissc.secure.force.com/faq/articles/Frequently_Asked_Question/What-are-acceptable-formats-for-truncation-of-primary-account-numbers)
## Network Tokens and BINs[​](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#network-tokens-and-bins "Direct link to Network Tokens and BINs")
When provisioning a network token for a PAN, details regarding the issuer as well as the card account are returned in a successful response, including the BIN.
Network Token Provisioning Example
```
{  
  {  
    "type": "TOKEN",  
    "value": "4014000000006820"  
  },  
  {  
    "type": "TOKEN_EXP",  
    "value": "2401"  
  }  
  "cardMetaData": {  
    "cardForegroundColor": "#0D2F4C",  
    "labelColor": "#E0DEDC",  
    "shortDescription": "USAA  Visa Credit Card",  
    "issuerData": {  
      "issuerName": "USAA Savings Bank",  
      "issuerWebsite": "https://www.usaa.com",  
      "customerServiceTelephone": "1-800-531-8722"  
    },  
   ...  
  "paymentInstrument": {  
    "panSuffix": "2560",  
    "cardScheme": "VISA",  
    "cardAlias": "VISA",  
    "bankIdentificationNumber": "489537"  
  },  
}  

```

  * [Background](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#background)
  * [Impact](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#impact)
  * [8-Digit BINs and PCI Scope](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#8-digit-bins-and-pci-scope)
  * [TokenEx Support for 8-Digit BINs](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#tokenex-support-for-8-digit-bins)
  * [Network Tokens and BINs](https://documentation.ixopay.com/modules/docs/tokenex/8-digit-bins#network-tokens-and-bins)