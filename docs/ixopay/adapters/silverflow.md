---
title: Silverflow
summary: This page provides an overview of the payments methods provided by the Silverflow
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Silverflow within your payments landscape,
  as well as an overview of the parameters required w
tags:
- payment-methods-https-documentation-ixopay-com-adapters-silverflow-payment-methods-direct-link-payment-methods
- credit-card-https-documentation-ixopay-com-adapters-silverflow-credit-card-direct-link-credit-card
- api
- ixopay
- recurring
- refund
- capture
- void
- iframe
- credit-card
source_url: https://documentation.ixopay.com/adapters/silverflow
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* Silverflow

# Silverflow
This page provides an overview of the payments methods provided by the Silverflow adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Silverflow within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/silverflow#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Creditcard  | iFrame Form & payment.js Integration  | Debit, Preauthorize, Capture, Partial Capture, Refund, Void, Payout, Register, Recurring  |  
## Credit Card[​](https://documentation.ixopay.com/adapters/silverflow#credit-card "Direct link to Credit Card")
If any of the stated billing address information is given then the others are mandatory if marked as `conditional` in the mandatory column. If no billing address information is given, none are mandatory.  
| Parameter  | Required  |  
| --- | --- |  
| customer.billingAddress1  | **conditional**  |  
| customer.billingCity  | **conditional**  |  
| customer.billingPostcode  | **conditional**  |  
| customer.billingCountry  | **conditional**  |  
| customer.billingState  | false  |  
| customer.billingAddress2  | false  |  
If any of the stated shipping address information is given then the others are mandatory if marked as `conditional` in the mandatory column. If no shipping address information is given, none are mandatory.  
| Parameter  | Required  |  
| --- | --- |  
| customer.shippingAddress1  | **conditional**  |  
| customer.shippingCity  | **conditional**  |  
| customer.shippingPostcode  | **conditional**  |  
| customer.shippingCountry  | **conditional**  |  
| customer.shippingState  | false  |  
| customer.shippingAddress2  | false  |  
Optional `extraData` parameters.  
| Parameter  | Required  | Description  |  
| --- | --- | --- |  
| `extradata.isFinalCapture`  | **false**  | Boolean parameter that can be sent with the `Capture' API request to indicate if it should be a final capture  |