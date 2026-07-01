---
title: SIX ELink
summary: ' SIX ELink'
tags:
- payment-methods-https-documentation-ixopay-com-adapters-sixelink-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-sixelink-additional-parameters-direct-link-additional-parameters
- api
- ixopay
- capture
- iframe
- credit-card
- transaction
source_url: https://documentation.ixopay.com/adapters/sixelink
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* SIX ELink

# SIX ELink
This page provides an overview of the payments methods provided by the SIX ELink adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating SIX ELink within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/sixelink#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Creditcard  | iFrame Form & payment.js Integration  | All  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/sixelink#additional-parameters "Direct link to Additional Parameters")  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `extraData.captureType`  | String  | Capture type. Possible values: `full`, `partial`, `final`  |  
| `extraData.descriptor`  | String  | If the dynamic descriptor is enabled, use this parameter to set the descriptor  |  
| `extraData.avsCheck`  | String  | To enable the AVS check please set it to `true`  |