---
title: Sofort
summary: This page provides an overview of the payments methods provided by the Sofort
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Sofort within your payments landscape,
  as well as an overview of the parameters required when subm
tags:
- payment-methods-https-documentation-ixopay-com-adapters-sofort-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-sofort-additional-parameters-direct-link-additional-parameters
- ideal-debit-https-documentation-ixopay-com-adapters-sofort-ideal-debit-direct-link-ideal-debit
- ideal-refund-https-documentation-ixopay-com-adapters-sofort-ideal-refund-direct-link-ideal-refund
- api
- ixopay
- refund
- transaction
source_url: https://documentation.ixopay.com/adapters/sofort
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* Sofort

# Sofort
This page provides an overview of the payments methods provided by the Sofort adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Sofort within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/sofort#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Sofortüberweisung  | Full-Page Redirect  | Debit only  |  
| iDeal  | Full-Page Redirect  | Debit, Refund*  |  
*Refund is only available in BE, NL
## Additional Parameters[​](https://documentation.ixopay.com/adapters/sofort#additional-parameters "Direct link to Additional Parameters")
### iDeal debit[​](https://documentation.ixopay.com/adapters/sofort#ideal-debit "Direct link to iDeal debit")  
| Parameter  | Required  | Description  |  
| --- | --- | --- |  
| customer.bic  | **true**  | Bankcode of customer*  |  
| customer.billingCountry  | **true**  | Customer country  |  
| description  | **conditional**  | Required if `reason1` is not given, max. 27 characters  |  
| extraData.reason1  | **conditional**  | Required if `description` is not given, max. 27 characters  |  
| extraData.reason2  | false  | Can be given additional to `reason1`, max. 27 characters. If both reasons are given, their total number of characters must not exceed 31 characters  |  
*For the BIC you may do an [Options Request](https://documentation.ixopay.com/api/transaction/options-list) using the identifier `iDealBankList`. It will return a list of available banks for iDeal which you should render to let the customer pick a bank. You should then pass the selected bank code as `bic` element inside [IbanCustomer](https://documentation.ixopay.com/api/transaction/debit).
### iDeal refund[​](https://documentation.ixopay.com/adapters/sofort#ideal-refund "Direct link to iDeal refund")  
| Parameter  | Required  | Description  |  
| --- | --- | --- |  
| extraData.reason1  | false  | max. 27 characters, if none given it uses the description of the initial transaction  |  
| extraData.reason2  | **conditional**  | Can be given additional to `reason1`, max. 27 characters. If both reasons are given, their total number of characters must not exceed 31 characters  |