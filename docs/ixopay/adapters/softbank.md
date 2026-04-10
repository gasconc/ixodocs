---
title: SoftBank
summary: 'This page provides an overview of the payments methods provided by the SoftBank
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating SoftBank within your payments landscape,
  as well as an overview of the parameters required when '
tags:
- payment-methods-https-documentation-ixopay-com-adapters-softbank-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-softbank-additional-parameters-direct-link-additional-parameters
- additional-mandatory-parameters-https-documentation-ixopay-com-adapters-softbank-additional-mandatory-parameters-direct-link-additional-mandatory-parameters
- api
- ixopay
- refund
- capture
- void
- transaction
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* SoftBank

# SoftBank
This page provides an overview of the payments methods provided by the SoftBank adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating SoftBank within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
The required currency is **JPY (Japanese Yen)**.
## Payment Methods[​](https://documentation.ixopay.com/adapters/softbank#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| AuPay  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
| Docomo  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
| LinePay  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
| PayPay  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
| RakutenPay  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
| SoftBank  | Full-Page Redirect  | Preauthorize, Capture, Void, Refund  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/softbank#additional-parameters "Direct link to Additional Parameters")
The SoftBank adapter supports the definition of items. Three details fields are available for the items. Description by SoftBank for the details fields: "This field will not be stored in our payment system. If you wish to use this, please confirm with our sales representative."  
| Name  | Type  | Required  |  
| --- | --- | --- |  
| details1 (Item)  | string  | false  |  
| details2 (Item)  | string  | false  |  
| details3 (Item)  | string  | false  |  
## Additional mandatory parameters[​](https://documentation.ixopay.com/adapters/softbank#additional-mandatory-parameters "Direct link to Additional mandatory parameters")
The transaction data also requires two additional mandatory fields that are mapped to required request fields.  
| Name  | Type  | Mapped to  |  
| --- | --- | --- |  
| additionalId1  | string  | cust_code  |  
| additionalId2  | string  | item_id  |