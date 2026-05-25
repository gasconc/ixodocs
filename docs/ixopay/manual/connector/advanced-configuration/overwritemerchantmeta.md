---
title: Overwrite Merchant Metadata
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Overwrite
  Merchant Metadata'
tags:
- ixopay
- hosted-payment-page
- hpp
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/overwritemerchantmeta
portal: ixopay-manual
updated: '2026-05-25'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Overwrite Merchant Metadata

# Overwrite Merchant Metadata
With the Connector Setting **Allow merchant metadata overriding** the customer can overwrite existing merchant meta data by entering data in the Hosted Payment Page (HPP)
The setting is configured per Connector, but can also be configured as a Global Settings and needs to be added in the HPP
To configure the connector setting follow these steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Allow merchant metadata overriding** and click Add (see Connector Settings)
  4. Activate the Connector Setting with **1** and click **Save**

To configure the Hosted Payment Page follow these steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Payment Templates** section
  3. Click **Edit** for the template that should include the Overwriting Code (needs to be done for all templates individually)
  4. In the **Placeholder** Section (see Editor View) navigate to **fields** , submenu **merchantmetadata**
  5. Include the placeholders **name, value, label** in the HPP as hidden inputs

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-overwrite-merchant.7a85116.1280.png)Connector Detail Overview![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-overwrite-merchant.774eb97.1110.png)Connector Settings![Editor View](https://documentation.ixopay.com/manual/assets/ideal-img/editor-view.0c9575b.1280.png)Editor View![Placeholders](https://documentation.ixopay.com/manual/assets/ideal-img/placeholders.e60c13c.260.png)Placeholders
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```note
Keep in mind, that changes on templates need to be published before they can be used. This needs to be done in Publish Section of the Fast Editor (see [Fast Editor Publish](https://documentation.ixopay.com/manual/docs/fast))
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```note
Keep in mind, that changes on templates need to be published before they can be used. This needs to be done in Publish Section of the Fast Editor (see [Fast Editor Publish](https://documentation.ixopay.com/manual/docs/fast))
  * [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Overwrite Merchant Metadata
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```
```

<input  

  type="hidden"  

  name="{{ fields.merchantMetaData.name }}"  

  id="{{ fields.merchantmetadata.id }}"  

  value="{{ fields.merchantmetadata.value }}"  

/>  

```note
Keep in mind, that changes on templates need to be published before they can be used. This needs to be done in Publish Section of the Fast Editor (see [Fast Editor Publish](https://documentation.ixopay.com/manual/docs/fast))