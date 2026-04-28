---
title: Shimotomo
summary: This page provides an overview of the payments methods provided by the Shimotomo
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Shimotomo within your payments landscape,
  as well as an overview of the parameters required whe
tags:
- payment-methods-https-documentation-ixopay-com-adapters-shimotomo-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-shimotomo-additional-parameters-direct-link-additional-parameters
- api
- 3d-secure
- ixopay
- refund
- capture
- void
- iframe
- credit-card
source_url: https://documentation.ixopay.com/adapters/shimotomo
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* Shimotomo

# Shimotomo
This page provides an overview of the payments methods provided by the Shimotomo adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Shimotomo within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/shimotomo#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Creditcard  | iFrame Form & payment.js Integration  | Debit, Register, Preauthorize, Capture, Void, Refund, Deregister  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/shimotomo#additional-parameters "Direct link to Additional Parameters")  
| Parameter  | Required  |  
| --- | --- |  
| customer.identification  | **true**  |  
| customer.firstName  | **true**  |  
| customer.lastName  | **true**  |  
| customer.billingAddress1  | **true**  |  
| customer.billingCity  | **true**  |  
| customer.billingPostcode  | **true**  |  
| customer.billingState  | **true**  |  
| customer.billingCountry  | **true**  |  
| customer.billingPhone  | **true**  |  
| customer.email  | **true**  |  
| customer.ipAddress  | **true**  |  
**Creditcard**
  * [3D-Secure Verification](https://documentation.ixopay.com/docs/reference/features/3d-secure) Parameters

_Depending on your merchant account, additional parameters might be mandatory._