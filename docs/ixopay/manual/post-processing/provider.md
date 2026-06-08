---
title: Provider
summary: 'Full version: not available for Starter and Growth clients If you want to
  get access to all IXOPAY platformhttps://www.ixopay.com features you need to upgrade
  your plan. Please contact our Support Team in the IXOPAY Customer Experience Portalhttps://ixopay.my.site.com/support
  for more information.'
tags:
- create-provider-https-documentation-ixopay-com-manual-docs-post-processing-provider-create-provider-direct-link-create-provider
- edit-provider-https-documentation-ixopay-com-manual-docs-post-processing-provider-edit-provider-direct-link-edit-provider
- assign-connectors-https-documentation-ixopay-com-manual-docs-post-processing-provider-assign-connectors-direct-link-assign-connectors
- schedule-job-https-documentation-ixopay-com-manual-docs-post-processing-provider-schedule-job-direct-link-schedule-job
- settings-https-documentation-ixopay-com-manual-docs-post-processing-provider-settings-direct-link-settings
- ixopay
- capture
- settlement
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/post-processing/provider
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing)
  * Provider

# Provider
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
So called **Provider** are an entity created in the IXOPAY platform (usually representing a Payment Service Provider) to perform **accumulated** Post Processing actions, calculations and data exchange like Provider Reconciliation and Provider Settlements across Sub-Tenants and Merchants. Providers are therefore created on (Sub-)Tenant level. We recommend to create a separate Provider for each contractual relationship.
## Create a new Provider[​](https://documentation.ixopay.com/manual/docs/post-processing/provider#create-a-new-provider "Direct link to Create a new Provider")
Create a new Provider for your setup:
  1. Navigate to the **Post Processing** section, sub-section **Providers**
  2. In the Provider Overview **select** the (Sub-Tenant) and click **+ New Provider**
  3. Fill in the **Provider Base Data** (see Create Provider)
    1. Fill in the mandatory **Name**
    2. Select the mandatory **(Sub-)Tenant** for the Provider
    3. Select the optional **Adapter** (see also [Edit Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider#edit-a-provider) section)
    4. Fill in the optional **External ID**
    5. Select the optional **Set Pending Outgoing Settlement To -** Notice Received, Funds Received
    6. Select the mandatory **Timezone**
    7. Select the mandatory **Country**
    8. Add optional **External Account Numbers (Currency and Number** pair) with **+ Add**
  4. Add optional [**Rolling Reserve**](https://documentation.ixopay.com/manual/docs/post-processing/rolling-reserve) **(Method, Percentage, Days)** triplets with **+ Add**
  5. Create the new Provider with **+ Create Provider**

The new Provider will appear in the Provider Overview for the selected (Sub-)Tenant with options to show the Provider Details Overview (click **Overview**), [edit the Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider#edit-a-provider), [assign Connectors](https://documentation.ixopay.com/manual/docs/post-processing/provider#assign-connectors) or [Schedule Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/provider#schedule-a-job).
![Provider Overview](https://documentation.ixopay.com/manual/assets/ideal-img/provider-overview.8257e77.1280.png)Provider Overview![Create Provider](https://documentation.ixopay.com/manual/assets/ideal-img/create-provider.55239e1.1280.png)Create Provider![Provider Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/provider-details-overview.86361ea.1280.png)Provider Details Overview
info
[Rolling Reserve](https://documentation.ixopay.com/manual/docs/post-processing/rolling-reserve) is the process of securing a certain percentage of the processed Transaction volume for a defined time period to cover potential risks due to chargebacks. On Provider level the Rolling Reserve parameter can be added but is not used for further calculations.
## Edit a Provider[​](https://documentation.ixopay.com/manual/docs/post-processing/provider#edit-a-provider "Direct link to Edit a Provider")
To edit an existing Provider:
  1. Navigate to the **Provider Overview**.
  2. Select **Edit** for the Provider you want to make changes.
  3. Change the **Provider Base Data** or **Rolling Reserve** (see [Create Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider#create-a-new-provider)).
  4. Click **+ Add** in the Reconciliation Data Fetcher section (see also [Post Processing - Reconciliation / Settlement on the Connector Level](https://documentation.ixopay.com/manual/docs/connector/post-processing)).
    1. Configure the Reconciliation Data Fetcher according to the [adapter-specific documentation](https://documentation.ixopay.com/manual/adapters/simulator).
  5. Click **+ Add** in the Provider Settlement Data Fetcher section (see also [Post Processing - Reconciliation / Settlement on the Connector Level](https://documentation.ixopay.com/manual/docs/connector/post-processing)).
    1. Configure the Provider Settlement Data Fetcher according to the [adapter-specific documentation](https://documentation.ixopay.com/manual/adapters/simulator).
  6. Additionally, you can configure Reconciliation and Provider Settlement [Settings](https://documentation.ixopay.com/manual/docs/post-processing/provider#settings):
    1. Select a **Setting** and click **+ Add.**
    2. Activate the Setting with **1**.
  7. Click **Save Provider**.

![Edit Provider](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider.2ca3040.1280.png)Edit Provider
tip
Data Fetchers have implemented an input validation and Data Fetchers with an invalid configuration are automatically disabled. Nevertheless, manual upload of Settlement files is also possible for disabled Data Fetchers
## Assign Connectors[​](https://documentation.ixopay.com/manual/docs/post-processing/provider#assign-connectors "Direct link to Assign Connectors")
Follow these steps to assign Connectors to Providers:
  1. Navigate to the **Provider Overview**
  2. Click **Connectors** to get to the Overview of assigned Connectors
  3. Click **+ Assign Connectors**
  4. Select the **Merchant** and/or **Connector** and click **+ Assign Connector**

Alternatively, you can also Connectors to Providers in the [Connector Base Data](https://documentation.ixopay.com/manual/docs/connector/create). The assigned Connector will appear in the Overview of assigned Connectors and in the Provider Details Overview. You can **detach** the Connector at any time.
![Assigned Connectors](https://documentation.ixopay.com/manual/assets/ideal-img/assigned-connectors.a07ef79.1280.png)Assigned Connectors![Assign new Connector](https://documentation.ixopay.com/manual/assets/ideal-img/assign-new-connector.a7f48af.922.png)Assign new Connector
note
In order to avoid reconciliation and settlement conflicts, make sure to assign the Connectors before retrieving reconciliation and settlement data.
## Schedule a Job[​](https://documentation.ixopay.com/manual/docs/post-processing/provider#schedule-a-job "Direct link to Schedule a Job")
Lastly, you can also schedule [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs) on Providers.
  1. Navigate to the **Provider Overview**.
  2. Click **Schedules** for the Provider you want to schedule a Post Processing Job for.
  3. Click **+ Create New Schedule** in the Provider Schedule.
  4. Fill in the necessary information for the new Schedule (see New Schedule).
  5. Click **+ Create**.
  6. **Enable** the Schedule (new schedules are deactivated by default).

You can **edit** and **delete** Schedules on the Provider level at any time.
![Provider Schedules](https://documentation.ixopay.com/manual/assets/ideal-img/provider-schedules.827af84.1280.png)Provider Schedules![New Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/new-schedule.5cd147a.926.png)New Schedule
## Settings[​](https://documentation.ixopay.com/manual/docs/post-processing/provider#settings "Direct link to Settings")  
| Setting name  | Description  | Value  |  
| --- | --- | --- |  
| Provider Settlement: Do not trigger Jobs automatically  | Setting to prevent Post Processing Jobs from being triggered (e.g. if scheduled "On Provider Settlement") after successful processing of a Provider Settlement  | 1  |  
| Provider Settlement: Do not create a Provider Settlement if a finished duplicate already exists  | Setting to check for previous Provider Settlements with the same Batch ID / Settlement ID. A Provider Settlement is only created in case no successful Provider Settlement exists in the IXOPAY platform.  | 1  |  
| Provider Settlement: Do not send a postback if the status of a transaction is changed to success after it is settled  | In case a debit or capture transaction is included in a Provider Settlement the transaction status (e.g. pending, error) is set to success and a postback notification is sent to the Merchant by default. This setting prevents the sending of a postback notification.  | 1  |  
| Reconciliation: Create Provider Settlement with Recon File  | Setting to create a Provider Settlement from a Reconciliation file (e.g. for payment methods for which Reconciliation equals Settlement)  | 1  |  
| Reconciliation: Create Unknown Transactions on Connector with this GUID  | In case of unknown Transactions specify the Connector GUID for which Transaction should be created  | Connector GUID  |  
| Reconciliation: Create Provider Settlement with Conflict Log  | In case of unknown Transactions in settlements provided via reconciliation (e.g. PayPal) a new conflicted Provider Settlement is created  | 1  |