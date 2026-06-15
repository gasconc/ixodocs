---
title: Scalapay
summary: 'This page provides an overview of the payments methods provided by the Scalapay
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Scalapay within your payments landscape,
  as well as an overview of the parameters required when '
tags:
- payment-methods-https-documentation-ixopay-com-adapters-scalapay-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-scalapay-additional-parameters-direct-link-additional-parameters
- additional-information-https-documentation-ixopay-com-adapters-scalapay-additional-information-direct-link-additional-information
- api
- ixopay
- refund
- capture
- void
- credit-card
- transaction
source_url: https://documentation.ixopay.com/adapters/scalapay
portal: ixopay-dev
updated: '2026-06-15'
related: []
---

* Scalapay

# Scalapay
This page provides an overview of the payments methods provided by the Scalapay adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Scalapay within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/scalapay#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Creditcard  | Full Page Redirect  | Debit, Preauthorize, Capture, Void, Refund  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/scalapay#additional-parameters "Direct link to Additional Parameters")  
| Key  | Value  | Required  | Flow  | Description  |  
| --- | --- | --- | --- | --- |  
| extraData.`product`  |  `pay-in-3` (default)  
`pay-in-4`  
`later`  |  **true** (if not filled,the default value will be `pay-in-3`)  | Debit, Preauthorize  |  `pay-in-3`: to split the amount into 3 installments  
`pay-in-4`: to split the amount into 4 installments  
`later`: the whole amount will be booked after 14 days  |  
| extraData.`delay`  | `true`  | false  | Preauthorize  | to delay the capture, (entered when creating `Preauthorize`)  |  
| extraData.`period`  | numerical between [60000] and [2160000000] milliseconds  |  **true** (if `delay` is `true`)  | Preauthorize  | the period of that's wished to extend the capture expiry time (when creating a `Preauthorize`)  |  
## Additional Information[​](https://documentation.ixopay.com/adapters/scalapay#additional-information "Direct link to Additional Information")
It's mandatory to add items to the Debit and Preauthorize transactions where `Item Description` represents the "category", and the `Item Identification` represents the "sku" of the item.