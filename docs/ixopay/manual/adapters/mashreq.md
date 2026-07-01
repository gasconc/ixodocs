---
title: Mashreq
summary: 'Configure the following parameters for the Connector see Connector Detail
  Overview - Mashreq Creditcard - Vault Configuration: 1. Enable Testmode 2.'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-mashreq-creditcard-direct-link-creditcard
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-mashreq-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-mashreq-provider-settlement-direct-link-provider-settlement
- json
- 3ds
- ixopay
- settlement
- credit-card
- merchant
- reconciliation
source_url: https://documentation.ixopay.com/manual/adapters/mashreq
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* Mashreq

# Mashreq
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/mashreq#creditcard "Direct link to Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - Mashreq Creditcard - Vault Configuration):
  1. Enable **Testmode**
  2. Fill in the mandatory **Your 3ds merchant ID**
  3. Fill in the mandatory **3ds Access code**
  4. Fill in the mandatory **3ds Encryption Key**
  5. Fill in the mandatory **Your non 3ds merchant ID**
  6. Fill in the mandatory **Non 3ds Access code**
  7. Fill in the mandatory **Non 3ds Encryption Key**
  8. Fill in the mandatory **Amount for Card Verification**

![Connector Detail Overview - Mashreq Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-mashreq-creditcard-vault-configuration.7671117.1280.png)Connector Detail Overview - Mashreq Creditcard - Vault Configuration
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/mashreq#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider (see Edit Provider).
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/mashreq#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to [upload settlement files manually](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements) (json format) (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the optional **Name** for the Data Fetcher
  2. Fill in the any **Interval** - setting is irrelevant for this adapter
  3. Select the Adapter **MashreqCCAvenuePci**
  4. Enable **Testmode** is irrelevant for this adapter

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.c46669f.1102.png)Edit Provider Settlement Data Fetcher Provider Level