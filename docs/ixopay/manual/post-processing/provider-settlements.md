---
title: Provider Settlements
summary: ' Provider Settlements'
tags:
- settlement-details-https-documentation-ixopay-com-manual-docs-post-processing-provider-settlements-settlement-details-direct-link-settlement-details
- conflicts-https-documentation-ixopay-com-manual-docs-post-processing-provider-settlements-conflicts-direct-link-conflicts
- manual-settlement-https-documentation-ixopay-com-manual-docs-post-processing-provider-settlements-manual-settlement-direct-link-manual-settlement
- test-provider-settlements-https-documentation-ixopay-com-manual-docs-post-processing-provider-settlements-test-provider-settlements-direct-link-test-provider-settlements
- api
- json
- xml
- ixopay
- psp
- settlement
source_url: https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements
portal: ixopay-manual
updated: '2026-05-18'
related: []
---

* [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing)
  * Provider Settlements

# Provider Settlements
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
The settlement of transactions with the processing providers presents a number of challenges to eCommerce enterprises. Different providers handle this process in different ways. For example, one service provider may provide settlement data within hours to be collected via an API, whereas it may take several days for another service provider to provide the data as a file. The format (JSON, XML, CSV, Fixed-width file, EPPRC, GRRCN, CAMT.054), semantics and granularity of the data often differ, generally as a result of the underlying payment method.
The [IXOPAY](https://www.ixopay.com) Post-Processing Engine standardizes the settlement process across all providers and payment methods. All identified conflicts can easily be resolved within the IXOPAY platform, thereby drastically simplifying this task for your employees.
Before you ca manage provider settlements, settlements need to be enabled for your connectors as covered in the adapter-specific documentation. You may need to configure provider settlement data fetchers and settlement settings.
If you want to create settlements manually, refer to [Manual Settlement](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#manual-settlement) below.
To view and manage provider settlements:
  1. Navigate to the **Post Processing** section, sub-section **Provider Settlements**. Any settlements retrieved from your providers are listed here.
  2. The **Provider Settlements** section contains two tabs (see Provider Settlement screenshot):
    1. **All settlements** (filter options available)
    2. **Recent Settlements**
    3. New Settlements can be created for the selected Tenant by selecting the option **+ New** (see [Manual Settlement](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#manual-settlement) below).

Each provider settlement is a batch including all transactions since the last retrieved provider settlement and includes the following information:
  * **Provider**
  * **Created At**
  * **Status** :
    * **New** : This batch is currently in creation
    * **Importing** : This batch is importing transactions automatically based on settlement files
    * **Cancelled** : The creation of the settlement was cancelled (see [Manual Settlement](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#manual-settlement) below)
    * **Processing** : The transactions in this batch are currently being processed
    * **Done** : The settlement is fully processed and completed
    * **Conflicted** : There is at least one transaction where the settlement amount/currency, fees or conversion rate does not match the expected values
  * **Settlement Number** : The ID of the settlement batch from the PSP; or alternatively the day of the bank statement — needed for some adapters in order to correctly configure data fetchers in case you have processed transactions via a different platform in the past. The IXOPAY platform only processes settlements starting with a certain ID.
  * **# Transactions:** Number of transactions in the provider settlement batch
  * **Settlement Date:** Needed for some adapters in order to correctly configure data fetchers in case you have processed transactions via a different platform in the past
  * **Funds received** : Whether the funds were already transferred
  * **Menu:** The available options here depend on the status:
    * Click **Open** to access the [Settlement Details](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#settlement-details).
    * Click **Delete** to delete the provider settlement (only possible settlements with the status **New**).

![Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/new-provider-settlement.d3969e2.1280.png)Provider Settlement![Settlement Details](https://documentation.ixopay.com/manual/assets/ideal-img/settlement-details.0795432.1280.png)Settlement Details
## Settlement Details[​](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#settlement-details "Direct link to Settlement Details")
The settlement details include further information about the provider settlement in various tabs:
  * **Settlement Data:** Includes additional information about the provider settlement
    * **Payment Reference** : The reference number for the wire transfer
    * **Jobs** : Post processing jobs triggered by the provider settlement
  * **Summary:** Overview of the number of transactions, transaction amount, settlement amount, fees and other line items
  * **Transactions in Batch:** Overview of all transactions included in the provider settlement batch (filter options are available). A transaction might be included in multiple settlements. For each settlement, the IXOPAY platform stores the individual amount, the cumulative amounts are the total settlement amount.
  * **Line Items:** Overview of created custom/non-transaction related line items (e.g. rolling reserve/reimbursement, adjustments, fines, informational items like gross settlement, net settlement) with options to **edit, delete existing Line Items** and/or **create new custom Line Items** (see Line Items screenshot).
  * **Conflicted Transactions:** Overview of all transactions with conflicts (see [Conflicts](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#conflicts) section)
  * **Documents:** Provider settlement documents overview (retrieved by the IXOPAY platform from the provider) with the option to manually upload and download documents (see Documents screenshot)
  * **Logs:** Provider settlement logs contain information about items in the settlement statement/file that could not be processed (e.g. transactions that could not be resolved, see Logs screenshot)

![Settlement Details](https://documentation.ixopay.com/manual/assets/ideal-img/settlement-details-annotated.169f16d.1280.png)Settlement Details![Transactions in Batch](https://documentation.ixopay.com/manual/assets/ideal-img/transactions-in-batch.175eaa6.1280.png)Transactions in Batch![Line Items](https://documentation.ixopay.com/manual/assets/ideal-img/line-items.7a8a54c.1280.png)Line Items![Documents](https://documentation.ixopay.com/manual/assets/ideal-img/documents.3ff7d28.1280.png)Documents![Logs](https://documentation.ixopay.com/manual/assets/ideal-img/logs.99f7e0b.1280.png)Logs
File retention
Files are retained for 12 months and permanently deleted thereafter.
Depending on the provider settlement status, you may need to take action to complete the settlement processing.
info
You can configure [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs) triggered by provider settlements (see also [Testing Provider Settlements](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#test-provider-settlements)). Once a settlement is finished, it automatically collects all settlement data, provider fees and rolling reserve. This data can be exported, e.g. to Navision.
## Conflicts[​](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#conflicts "Direct link to Conflicts")
The **Conflicted Transactions** tab displays all transactions where the data in the IXOPAY platform and the PSP's settlement data do not match. Transaction data that can cause a conflict are:
  * **Fees** : The configured fees and the actual reported fees do not match
  * **Conversion Rate** : The configured conversion rate does not match the actual conversion rate
  * **Amount** : The settled amount does not match the (calculated) settlement amount (based on conversion rates)

For each conflict you have two options:
  * **Accept** : Accepts the conflict without any action
  * **Manual Correction** : Update the settled amount manually for the transaction

![Conflicted Transactions](https://documentation.ixopay.com/manual/assets/ideal-img/conflicted-transactions.2432784.1280.png)Conflicted Transactions![Manual Correction](https://documentation.ixopay.com/manual/assets/ideal-img/manual-correction.fbb7c49.918.png)Manual Correction
## Manual Settlement[​](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#manual-settlement "Direct link to Manual Settlement")
There are two options for creating provider settlements manually (see Create Provider Settlement):
  * **+ New Settlement** and add the transactions
  * **Upload Settlement** to upload a settlement files

To create a new settlement:
  1. Navigate to the **Post Processing** section, sub-section **Provider Settlements**
  2. Select **+ New** and choose **+ New Settlement** from the dropdown
  3. Enter the following information in **New Settlement** modal:
    1. **Provider** : Select he provider the settlement is for
    2. **Settlement Date**
    3. **Settlement Number**
  4. Enable **Funds received**.
  5. Select **+ Create**. The manual settlement is added to the provider settlement overview with the status **New**.
  6. Switch to the **Add Transactions** tab to add transactions to the settlement. Use the filters to search for the transactions you want to add to the batch. Click on **Preview** to view all matching transactions.
  7. Click on **+ Add to Batch** to add the transactions to the settlement. You can add transactions incrementally using different filter and search criteria.
  8. Once you have added all transactions, click on **Process Settlement** to start processing the settlement (see Add Transactions screenshot). When creating manual settlements, all transactions are settled using the amounts and currency entered in the settlement.

You can cancel the settlement at any time by clicking **Cancel Settlement** (see Add Transactions).
![Create Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/new-provider-settlement.d3969e2.1280.png)Create Provider Settlement![Create Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/create-provider-settlement.7a0137b.1112.png)Create Provider Settlement![Add Transactions](https://documentation.ixopay.com/manual/assets/ideal-img/add-transactions.43fbd26.1280.png)Add Transactions
tip
Preview your filter and search results before adding the transactions to the settlement!
To upload a settlement file:
  1. Navigate to the **Post Processing** section, sub-section **Provider Settlements**
  2. Select **+ New** and choose **Upload Settlement** from the dropdown
  3. In the **Upload Settlement File** modal:
    1. Select the **Provider**.
    2. Select the **Data Fetcher** you want to upload the settlement file for.
    3. Select **Choose File** to select the **Settlement File**.
  4. Select **Upload**.

The file format and size depends on the provider. The provider settlement file is processed in the same way as settlement files received via the provider settlement data fetcher.
![Upload Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/upload-provider-settlement.10b57a4.1104.png)Upload Provider Settlement
File retention
The file format and size depends on the provider. Files are retained for 12 months and permanently deleted thereafter.
## Test Provider Settlements[​](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements#test-provider-settlements "Direct link to Test Provider Settlements")
In order to to test Post Processing Jobs triggered by Provider Settlements you create a test provider settlement using a SimulatorPci adapter.
To create a Test Provider Settlement:
  1. Navigate to the **Post Processing** section, sub-section **Provider Settlements** (see Create Provider Settlement)
  2. Select **+ New** and choose **+ Test Settlement** from the dropdown
  3. In the **Test Settlement** modal:
    1. Select the **Provider**.
    2. Select the **Data Fetcher**
    3. **Settlement Number**
  4. Select **+ Create**.

A Provider Settlement including 10 Transactions of different types and a output Settlement file is created in the Provider Settlements Overview.
![Create Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/new-provider-settlement.d3969e2.1280.png)Create Provider Settlement![Test Provider Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/test-provider-settlement.b7b6310.1112.png)Test Provider Settlement