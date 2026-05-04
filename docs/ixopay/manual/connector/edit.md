---
title: Edit Connectors
summary: ' Edit Connectors'
tags:
- edit-connectors-https-documentation-ixopay-com-manual-docs-connector-edit-edit-connectors-direct-link-edit-connectors
- edit-connector-configuration-parameters-https-documentation-ixopay-com-manual-docs-connector-edit-edit-connector-configuration-parameters-direct-link-edit-connector-configuration-parameters
- enable-disable-archive-connectors-https-documentation-ixopay-com-manual-docs-connector-edit-enabledisable-archive-connectors-direct-link-enable-disable-archive-connectors
- enable-disable-connectors-https-documentation-ixopay-com-manual-docs-connector-edit-enabledisable-connectors-direct-link-enable-disable-connectors
- archive-connectors-https-documentation-ixopay-com-manual-docs-connector-edit-archive-connectors-direct-link-archive-connectors
- ixopay
- acquirer
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/edit
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * Edit Connectors

# Edit Connectors
## Edit Connectors[​](https://documentation.ixopay.com/manual/docs/connector/edit#edit-connectors-1 "Direct link to Edit Connectors")
Once created you have the option to edit and update your Connectors by navigating to the Connectors Overview. For each Connector in this view you can:
  * Edit the Connector Configuration Parameters
  * Enable/Disable the Connector
  * Archive the Connector

![Connectors Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-overview.067eb21.1280.png)Connectors Overview
## Edit Connector Configuration Parameters[​](https://documentation.ixopay.com/manual/docs/connector/edit#edit-connector-configuration-parameters "Direct link to Edit Connector Configuration Parameters")
Go to the Connector Detail Overview by clicking **Edit** in the Connector Overview for the desired Connector. In this view you see the different Connector Configuration Parameters that you can change by clicking **Edit** :
  * **Status** : Switch to Enable/Disable the Connector and Switch to Archive/Un-Archive the Connector (see also Section Enable/Disable and Archive Connectors)
  * **Base Data** : Different mandatory and optional Parameters to be edited and updated as described in the [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create)
  * **Transaction Types** : Transfer Lists for Enabled and Disabled Transaction Types for this Connector
  * **Connector Config and Vault Setup** : Different mandatory and optional Parameters to be edited and updated as described in the [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create)
  * **Payment Templates** : Edit and view [payment templates for the Connector and Payment Methods](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates)
  * **Settings** : Different [Connector-specific Settings](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings) that can be assigned and updated on Connector level
  * **Constraints** : Transfer Lists for Mandatory Fields as well as Currencies for this Connector

Click **Save** or **Cancel** to get back to the Connector Detail Overview.
![Refresh](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview.9922074.1280.png)Refresh
note
Some Connector Configuration Parameters can be set as [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings) on Merchant level for all Connectors under this Merchant.
tip
In the Connector Detail Overview you may see additional tabs such as [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing) and [Pay-By-Link](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink) that will be further explained in the linked sections.
## Enable/Disable and Archive Connectors[​](https://documentation.ixopay.com/manual/docs/connector/edit#enabledisable-and-archive-connectors "Direct link to Enable/Disable and Archive Connectors")
### Enable/Disable Connectors[​](https://documentation.ixopay.com/manual/docs/connector/edit#enabledisable-connectors "Direct link to Enable/Disable Connectors")
In case you want to immediately prevent transaction processing by a PSPs/Acquirer via a configured Connector, you can **Disable** the Connector. This can either be done in the Connector Overview itself by **switching** **off the Status Switch** or in the Connector Detail Overview in the Status section by **switching off the Enabled Switch**.
You can enable the Connector any time be enabling any of the above described Switches.
![Enable/Disable and Archive Connectors](https://documentation.ixopay.com/manual/assets/ideal-img/enable-disable-and-archive-connectors.679f049.1280.png)Enable/Disable and Archive Connectors
note
Keep in mind that Connectors might be in use for [Transaction Routing](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback). We recommend to use a Fallback Connector to ensure Transaction Processing.
### Archive Connectors[​](https://documentation.ixopay.com/manual/docs/connector/edit#archive-connectors "Direct link to Archive Connectors")
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
To keep the Connector Overview clean and tidy, you have the option to archive Connectors. This can be done in the Connector Detail Overview in the Status section by switching on the **Archived Switch**.
The archived Connectors are shown in the Archived Connectors tab and can be un-archived by disabling the **Archived Switch** in the Connector Detail Overview, Status section. The Status of the Connector (Enabled/Disabled) will be as before archiving.
![Archived Connectors Tab](https://documentation.ixopay.com/manual/assets/ideal-img/archived-connectors-tab.169ed8c.1280.png)Archived Connectors Tab![Un-Archive Connector](https://documentation.ixopay.com/manual/assets/ideal-img/un-archive-connector.bf56018.1280.png)Un-Archive Connector
note
Archived Connectors are **disabled** by default.