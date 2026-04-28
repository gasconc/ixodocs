---
title: SIA
summary: 'Configure the following parameters for the Connector see Connector Detail
  Overview - SIA Creditcard - Vault Configuration: 1. Select the mandatory Environment:
  prod, test - for SIA production or test environment 2.'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-sia-creditcard-direct-link-creditcard
- terminal-configuration-https-documentation-ixopay-com-manual-adapters-sia-terminal-configuration-direct-link-terminal-configuration
- 3d-secure
- ixopay
- mpi
- credit-card
- transaction
source_url: https://documentation.ixopay.com/manual/adapters/sia
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* SIA

# SIA
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/sia#creditcard "Direct link to Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - SIA Creditcard - Vault Configuration):
  1. Select the mandatory **Environment:** prod, test - for SIA production or test environment
  2. Fill in the mandatory **Shop ID** — provided by provider
  3. Fill in the mandatory **Operator ID** — 8 character value to identify the creator of the request to SIA (e.g OP123456)
  4. Fill in the mandatory **Secret Key** — provided by provider
  5. Enable/Disable to **Use SIA MPI for 3D-Secure** — Check to use SIA 3D-Secure Provider or check [](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration)[IXOPAY](https://www.ixopay.com)-hosted 3D-Secure
  6. Fill in the mandatory **Verify amount** — Amount to be used to create register Transactions (e.g 0.1)
  7. Fill in the mandatory **Verify currency** — Currency to be used to create register Transactions (e.g EUR)

![Connector Detail Overview - SIA Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-sia-creditcard-vault-configuration.f159ea2.1280.png)Connector Detail Overview - SIA Creditcard - Vault Configuration
## Terminal Configuration[​](https://documentation.ixopay.com/manual/adapters/sia#terminal-configuration "Direct link to Terminal Configuration")
The SIA Adapter requires **unique identifier** for each ShopID and each request to be sent. This is achieved by a terminal configuration for the connector.
The configuration depends on your setup.
If you have multiple connectors using the same ShopID, follow these steps:
  1. For the first connector: Go to the Tab **Terminals** in the Connector Details Overview (see Connector Detail Overview - SIA)
  2. Click **+ Terminal** to add a terminal (see Terminal Tab)
  3. Fill in the **Terminal ID "**000"
  4. Check **Enable** and click **+ Create** (see Terminal Configuration)
  5. For every additional connector using the same ShopID: Go to the Tab **Terminals**
  6. Click **+ Terminal** to add a terminal
  7. Fill in the **Terminal ID** "001" for the first additional connector, "002" for the second additional connector and so on.
  8. Check **Enable** and click **+ Create** (see Terminal Configuration)

If you want to set up just one connector with the ShopId, follow steps 1.-4.
![Connector Detail Overview - SIA](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-sia.b7ede1b.1280.png)Connector Detail Overview - SIA![Terminal Tab](https://documentation.ixopay.com/manual/assets/ideal-img/terminal-tab.799644c.1280.png)Terminal Tab![Terminal Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/terminal-configuration.e8d6c8b.994.png)Terminal Configuration
note
It is crucial for the setup of multiple connectors using the same ShopID to set each Terminal ID following the description above since otherwise Transaction might be declined.