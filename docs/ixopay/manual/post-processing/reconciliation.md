---
title: Reconciliation
summary: 'Full version: not available for Starter and Growth clients If you want to
  get access to all IXOPAY platformhttps://www.ixopay.com features you need to upgrade
  your plan. Please contact our Support Team in the IXOPAY Customer Experience Portalhttps://ixopay.my.site.com/support
  for more information.'
tags:
- conflicts-https-documentation-ixopay-com-manual-docs-post-processing-reconciliation-conflicts-direct-link-conflicts
- unknown-transactions-https-documentation-ixopay-com-manual-docs-post-processing-reconciliation-unknown-transactions-direct-link-unknown-transactions
- missing-reconciliations-https-documentation-ixopay-com-manual-docs-post-processing-reconciliation-missing-reconciliations-direct-link-missing-reconciliations
- manual-reconciliation-https-documentation-ixopay-com-manual-docs-post-processing-reconciliation-manual-reconciliation-direct-link-manual-reconciliation
- api
- json
- xml
- ixopay
- psp
- transaction
source_url: https://documentation.ixopay.com/manual/docs/post-processing/reconciliation
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing)
  * Reconciliation

# Reconciliation
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
The reconciliation of transactions with the processing providers presents a number of challenges to eCommerce enterprises. Different providers handle this process in different ways. For example, one service provider may provide reconciliation data within seconds to be collected via an API, whereas it may take several hours for another service provider to provide the data as a file. The format (JSON, XML, CSV, fixed-width file), semantics and granularity of the data often differ, generally as a result of the underlying payment method.
The [IXOPAY](https://www.ixopay.com) Post-Processing Engine standardizes the reconciliation process across all PSPs and payment methods. Any resulting conflicts, such as incorrectly calculated fees, missing reconciliation data and unknown transactions are handled in the same manner for all providers. All identified conflicts can easily be resolved within the IXOPAY platform, thereby drastically simplifying this task for your employees.
File retention
Files are retained for 12 months and permanently deleted thereafter.
To view and manage reconciliation conflicts:
  1. Navigate to the **Post Processing** section, sub-section **Reconciliation**.
  2. The **Reconciliation** section contains three tabs (see Reconciliation screenshot):
    1. **Conflicts** : A conflict occurs when the records for a transaction differ in the IXOPAY platform and the PSP's system. In the screenshot, the IXOPAY platform recorded a transaction amount of € 9.99 and the provider recorded an amount of only € 8.99.
    2. **Unknown Transactions** : These are transactions present in the reconciliation file, but not stored in the IXOPAY platform. This usually occurs if the IXOPAY platform is bypassed when processing the transaction, or with refunds initiated directly with the PSP.
    3. **Missing Reconciliations** : These are transactions that are present in the IXOPAY platform but missing from the provider's reconciliation data.

Various options for dealing with these conflicts are available in each tab.
## Conflicts[​](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation#conflicts "Direct link to Conflicts")
You have the following options for dealing with conflicts, i.e. transactions with mismatched data in the IXOPAY platform and at the provider (see Reconciliation screenshot):
  * **Mark as solved** : Dismisses the conflict without any action.
  * **Accept & Change Status**: Updates the outlined changes in the transaction.

![Reconciliation](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation.55a6831.1280.png)Reconciliation
note
If this leads to a status change, the merchant's system is automatically notified with a new status notification using the defined [Callback URL](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Unknown Transactions[​](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation#unknown-transactions "Direct link to Unknown Transactions")
You have the following options for dealing with unknown, i.e transactions recorded on the payment provider side, but missing in the IXOPAY platform (see Unknown Transactions screenshot):
  * **Dismiss** : Dismiss the conflicts without any action.
  * **Create** : A new transaction is created in the IXOPAY platform using the data received from the provider.

![Unknown Transactions](https://documentation.ixopay.com/manual/assets/ideal-img/unknown-transactions.cec4c20.1280.png)Unknown Transactions
note
A notification is only sent to the merchant if the merchant’s notification URL has been configured in the [Connector's Post-Processing Tab](https://documentation.ixopay.com/manual/docs/connector/post-processing).
## Missing Reconciliations[​](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation#missing-reconciliations "Direct link to Missing Reconciliations")
All transactions that are not present in any reconciliation files (after the configured time period has expired) have to be reconciled manually:
  * **Mark as reconciled** : The transaction is marked as reconciled without any action.

tip
Missing Reconciliations view is loaded in Mode: BI-Data, using the BI Data Source technology also available to clients.
## Manual Reconciliation[​](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation#manual-reconciliation "Direct link to Manual Reconciliation")
To upload a reconciliation file:
  1. Navigate to the **Post Processing** section, sub-section **Reconciliation**.
  2. Select **+ New** and choose **Upload Reconciliation** from the dropdown.
  3. In the **Upload Reconciliation File** modal:
    1. Select the **Provider**.
    2. Select the **Data Fetcher** you want to upload the reconciliation file for.
    3. Select **Choose File** to select the **Reconciliation File**.
  4. Select **Upload**.

The file format and size depends on the provider. The reconciliation file is processed in the same way as reconciliation files received via the data fetcher.
![New Reconciliation](https://documentation.ixopay.com/manual/assets/ideal-img/new-reconciliation.60c5ab0.1600.png)New Reconciliation![Upload Reconciliation File](https://documentation.ixopay.com/manual/assets/ideal-img/upload-reconciliation-file.3cf71c7.1258.png)Upload Reconciliation File
File retention
The file format and size depends on the provider. Files are retained for 12 months and permanently deleted thereafter.
Permission
This feature requires the `postProcessing.reconciliations.create` permission.