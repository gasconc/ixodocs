---
title: Mercado Pago
summary: ' Mercado Pago'
tags:
- mercado-pago-creditcard-https-documentation-ixopay-com-manual-adapters-mercadopago-mercado-pago-creditcard-direct-link-mercado-pago-creditcard
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-mercadopago-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-mercadopago-provider-settlement-direct-link-provider-settlement
- api
- json
- ixopay
- settlement
- credit-card
- reconciliation
source_url: https://documentation.ixopay.com/manual/adapters/mercadopago
portal: ixopay-manual
updated: '2026-06-22'
related: []
---

* Mercado Pago

# Mercado Pago
## Mercado Pago Creditcard[​](https://documentation.ixopay.com/manual/adapters/mercadopago#mercado-pago-creditcard "Direct link to Mercado Pago Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - Mercado Pago - Vault Configuration):
  1. Fill in the mandatory **Access Token**
  2. Fill in the mandatory **Public Key**
  3. Select the mandatory **Environment** : Live, Sandbox

![Connector Detail Overview - Mercado Pago - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-mercado-pago-vault-configuration.e7f3c2d.1280.png)Connector Detail Overview - Mercado Pago - Vault Configuration
For more information have a look at the adapter-specific API documentation
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/mercadopago#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider (see Edit Provider).
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/mercadopago#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (json format) via an API (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  2. Select the **Adapter** MercadoPago
  3. There is no test environment available for this adapter, so the **Testmode** setting does not have any effect.
  4. Fill in the mandatory **Extra Data** : **accessToken** provided by MercadoPago

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.912d177.984.png)Edit Provider Settlement Data Fetcher Provider Level
The automatic generation of reports has to be set up on Mercado Pago. See