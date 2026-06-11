---
title: Finrax
summary: This page provides an overview of the payments methods provided by the Finrax
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating Finrax within your payments landscape,
  as well as an overview of the parameters required when subm
tags:
- payment-methods-https-documentation-ixopay-com-adapters-finrax-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-finrax-additional-parameters-direct-link-additional-parameters
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/adapters/finrax
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* Finrax

# Finrax
This page provides an overview of the payments methods provided by the Finrax adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Finrax within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/finrax#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| BitCoin  | Full-Page Redirect  | Debit, Payout  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/finrax#additional-parameters "Direct link to Additional Parameters")
You can use the following `extraData` keys, which will be passed in the corresponding fields to Finrax:  
| Key  | Values  | Description  |  
| --- | --- | --- |  
| withdrawCurrency  | BTC,ETH,XRP..  | Cryptocurrency abbreviation that should be withdrawn  |  
| targetAmountPolicy  | fiat, crypto  | Specifies if the targetAmount will be requested in fiat or crypto  |