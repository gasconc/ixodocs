---
title: Scalapay
summary: 'Configure the following parameters for the Connector see Connector Config
  - Scalapay: 1. Fill in the mandatory Bearer Token provided by Scalapay'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-scalapay-creditcard-direct-link-creditcard
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-scalapay-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-scalapay-provider-settlement-direct-link-provider-settlement
- reconciliation-https-documentation-ixopay-com-manual-adapters-scalapay-reconciliation-direct-link-reconciliation
- api
- json
- ixopay
- settlement
- credit-card
- reconciliation
source_url: https://documentation.ixopay.com/manual/adapters/scalapay
portal: ixopay-manual
updated: '2026-06-22'
related: []
---

* Scalapay

# Scalapay
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/scalapay#creditcard "Direct link to Creditcard")
Configure the following parameters for the Connector (see Connector Config - Scalapay):
  1. Fill in the mandatory **Bearer Token** (provided by Scalapay)

Additional information (e.g. regarding payment in installments) can be found in the Adapter-specific API Documentation
![Connector Config - Scalapay](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-scalapay.dd2a157.1280.png)Connector Config - Scalapay
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/scalapay#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
![Edit Provider](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider.b8eaea5.1280.png)Edit Provider![Connector Post Processing](https://documentation.ixopay.com/manual/assets/ideal-img/connector-post-processing.a2abfed.1280.png)Connector Post Processing
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/scalapay#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (json format) via an API (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  2. Select the **Adapter Scalapay**
  3. Enable **Testmode** to test fetching of Provider Settlements from the Scalapay Sandbox (URL used ), disabled the Scalapay Production (URL used ) environment is used
  4. Fill in the mandatory **Extra Data: API Key/ SecretKey** — Same value as Bearer Token / API Secret for the Connector Configuration, necessary for the Bearer Authentication

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.48b8651.1280.png)Edit Provider Settlement Data Fetcher Provider Level
For testing purposes also refer to .
### Reconciliation[​](https://documentation.ixopay.com/manual/adapters/scalapay#reconciliation "Direct link to Reconciliation")
Configure the following Parameters for the Reconciliation Data Fetcher to fetch Reconciliation (json Format) via an API (see Reconciliation Data Fetcher Provider Level):
  1. Fill in the expected **Interval** in which the Reconciliation File should be fetched - days, hours
  2. Select the **Adapter Scalapay**
  3. Enable **Testmode** to test fetching of Reconciliation files from the Scalapay Sandbox (URL used ), disabled the Scalapay Production (URL used ) environment is used
  4. Fill in the mandatory **Extra Data: API Key/ SecretKey** — Same value as Bearer Token / API Secret for the Connector Configuration, necessary for the Bearer Authentication

For testing purposes also refer to .
![Reconciliation Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation-data-fetcher-provider-level.3a4b049.1280.png)Reconciliation Data Fetcher Provider Level![Reconciliation Data Fetcher Connector Level](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation-data-fetcher-connector-level.fa5f819.1002.png)Reconciliation Data Fetcher Connector Level