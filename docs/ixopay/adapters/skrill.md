---
title: Skrill
summary: This page provides an overview of the payments methods provided by the Skrill
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Skrill within your payments landscape,
  as well as an overview of the parameters required when subm
tags:
- payment-methods-https-documentation-ixopay-com-adapters-skrill-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-skrill-additional-parameters-direct-link-additional-parameters
- customer-details-verification-https-documentation-ixopay-com-adapters-skrill-customer-details-verification-direct-link-customer-details-verification
- parameters-customer-details-verification-https-documentation-ixopay-com-adapters-skrill-parameters-customer-details-verification-direct-link-parameters-customer-details-verification
- api
- ixopay
- refund
- transaction
source_url: https://documentation.ixopay.com/adapters/skrill
portal: ixopay-dev
updated: '2026-05-25'
related: []
---

* Skrill

# Skrill
This page provides an overview of the payments methods provided by the Skrill adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Skrill within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/skrill#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Skrill  | Full-Page Redirect  | Debit, Refund, Payout  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/skrill#additional-parameters "Direct link to Additional Parameters")  
| Key  | Values  | Description  |  
| --- | --- | --- |  
| extraData.companyName  | string  | Display name on the payment page  |  
| extraData.subject  | string  | for Payouts: Subject of the notification email (250 1-byte characters)  |  
| extraData.note  | string  | for Payouts: Comment to be included in the notification email (max 2000 1-byte characters)  |  
## Customer details verification[​](https://documentation.ixopay.com/adapters/skrill#customer-details-verification "Direct link to Customer details verification")
The customer verification service is used to check if a customer, identified by an email address, is registered with Skrill.
## Parameters for Customer details verification[​](https://documentation.ixopay.com/adapters/skrill#parameters-for-customer-details-verification "Direct link to Parameters for Customer details verification")  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| email  | string  | **true**  | The customers email  |  
| firstName  | string  | false  | The customers first name  |  
| lastName  | String  | false  | The customers last name  |  
| dateOfBirth  | string  | false  | The customers date of birth  |  
| postCode  | string  | false  | The customers postal code or zip code  |  
| country  | string  | false  | The customers 2-code country of residence.  |