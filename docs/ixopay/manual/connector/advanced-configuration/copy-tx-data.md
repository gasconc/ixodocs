---
title: Copy TX Data
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Copy
  TX Data'
tags:
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/copy-tx-data
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Copy TX Data

# Copy TX Data
With the Connector Setting **Copy TX Data: Field to Field** you can automatically copy specific transaction data fields to another transaction data field custom. The setting is configured per Connector, but can also be configured as a Global Settings.
To configure the connector setting follow this steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Copy TX Data: Field to Field** and click Add (see Connector Settings)
  4. Click Add to create a parameter pairs (Field From, Field To). You can add as many parameter pairs as you want.
  5. Select **Parameter Field From** , select **Parameter Field To** and click Save (see Parameter available Field From/To)

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-copy-tx-data.7a85116.1280.png)Connector Detail Overview![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-copy-tx-data.1f57047.762.png)Connector Settings![Add parameter pairs](https://documentation.ixopay.com/manual/assets/ideal-img/add-parameter-pairs.fca5be6.766.png)Add parameter pairs  
| Field From/To  | Description  |  
| --- | --- |  
| uuid  | Transactions UUID  |  
| merchantTxId  | Merchant Transaction ID (added to the transaction by the Merchant) to be copied  |  
| description  | Transaction description  |  
| descriptor  | Transaction descriptor  |