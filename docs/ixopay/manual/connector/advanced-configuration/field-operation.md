---
title: Field Operation
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Field
  Operation'
tags:
- operations-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-field-operation-operations-direct-link-operations
- truncate-after-characters-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-field-operation-truncate-after-characters-direct-link-truncate-after-characters
- ixopay
- psp
- transaction
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/field-operation
portal: ixopay-manual
updated: '2026-06-01'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Field Operation

# Field Operation
With the Connector Setting **Manipulation: Field Operation** you can perform manipulation operations to different transaction data fields. The setting is configured per Connector, but can also be configured as a Global Settings.
To configure the connector setting follow these steps:
  * Navigate to the **Connector Detail Overview** of the desired Connector.
  * Select **Edit** on the Settings section (see _Connector Detail Overview_).
  * Select the Connector Setting _**Manipulation: Field Operation**_ and click **+ Add**.
  * Select **+ Add** to create a parameter triple (Operation, Target Field, Operation Parameter). You can add as many parameter triples as you want. (see _Connector Setting Detail_).
  * Select an **Operation** to configure it.

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-field-operation.ffb742b.1280.png)Connector Detail Overview![Connector Setting Detail](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-detail-field-operation.39bb1b9.1102.png)Connector Setting Detail
## Operations[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/field-operation#operations "Direct link to Operations")
### Truncate after N characters[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/field-operation#truncate-after-n-characters "Direct link to Truncate after N characters")
This operation removes all characters exceeding the specified limit.
_**Note:**_ The original value remains unaffected; only the modified value is sent to the PSP.  
| Field  | Description  |  
| --- | --- |  
| Target Field  | Select the field from the dropdown where the characters will be truncated.  |  
| Operation Parameter  | Define the maximum number of characters to keep. Any characters beyond this limit will be removed.  |