---
title: Convert Register to Debit Transaction
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Convert
  Register to Debit Transaction'
tags:
- ixopay
- transaction
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/convert-register-to-debit-transaction
portal: ixopay-manual
updated: '2026-06-11'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Convert Register to Debit Transaction

# Convert Register to Debit Transaction
With the Connector Setting **Convert Register to Debit Transaction** register transaction will automatically converted to either a debit or preauthorize transaction with the pre-configured amount and currency in case a payment method does not support the transaction type register. The setting is configured per Connector, but can also be configured as a Global Settings.
To configure the connector setting follow this steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Convert Register to Debit Transaction** and click Add (see Connector Settings)
  4. Check the mandatory **Enable** checkbox
  5. Select the mandatory **Conversion Type** (see Conversion Type Options) for register transactions. Options are either **Preauthorize** or **Debit**.
  6. Insert the mandatory **Amount** to replace the original transaction amount
  7. Select the mandatory **Currency** to replace the original transaction amount and click **Save**

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-convert-register-debit.7a85116.1280.png)Connector Detail Overview![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-convert-register-debit.e6ecc4a.1280.png)Connector Settings![Conversion Type Options](https://documentation.ixopay.com/manual/assets/ideal-img/conversion-type-options.53e1c16.752.png)Conversion Type Options