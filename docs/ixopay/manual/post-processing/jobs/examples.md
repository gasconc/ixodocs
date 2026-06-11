---
title: Step-by-Step Guides
summary: ' Post Processing Jobshttps://documentation.ixopay.com/manual/docs/post-processing/jobs  Step-by-Step
  Guides'
tags:
- periodical-transaction-report-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-periodical-transaction-report-direct-link-periodical-transaction-report
- configure-job-type-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-configure-job-type-direct-link-configure-job-type
- schedule-job-periodically-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-schedule-job-periodically-direct-link-schedule-job-periodically
- provider-settlement-consolidation-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-provider-settlement-consolidation-direct-link-provider-settlement-consolidation
- provider-settlement-data-fetchers-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-provider-settlement-data-fetchers-direct-link-provider-settlement-data-fetchers
- map-reported-fees-fee-entities-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-map-reported-fees-fee-entities-direct-link-map-reported-fees-fee-entities
- schedule-job-provider-settlement-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-schedule-job-provider-settlement-direct-link-schedule-job-provider-settlement
- mark-fraudulent-transactions-report-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-mark-fraudulent-transactions-report-direct-link-mark-fraudulent-transactions-report
- configure-job-type-collect-transaction-uploaded-csv-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-configure-job-type-collect-transaction-uploaded-csv-direct-link-configure-job-type-collect-transaction-uploaded-csv
- schedule-job-https-documentation-ixopay-com-manual-docs-post-processing-jobs-examples-schedule-job-direct-link-schedule-job
source_url: https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples
portal: ixopay-manual
updated: '2026-06-11'
related: []
---

* [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing)
  * [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs)
  * Step-by-Step Guides

# Step-by-Step Guides
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
In this section we provide you with Step-by-Step Guides on how to create Post Processing Jobs for:
  * [Periodical Transaction Report](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#periodical-transaction-report)
    * Configure to collect all transactions in the job period, to generate a file in the desired format and to sent it to your backend systems (SFTP, HTTP, etc.)
    * Schedule a periodical PP Job (e.g. daily, weekly) on the desired entity
  * [Provider Settlement Consolidation](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#provider-settlement-consolidation)
    * Configure Provider Settlements Data Fetchers
    * Map reported Fees to the various Fee Entities
    * Configure to generate a file in desired format and to send it to your backend systems (SFTP, HTTP, etc.)
    * Schedule PP Job with “On Provider Settlement Schedule”
  * [Mark fraudulent Transactions from Report](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#mark-fraudulent-transactions-from-report)
    * Configure Job Type to collect all transaction from uploaded CSV

note
The IXOPAY platform's Post Processing Engine is a powerful tool to support you aggregate and standardize your reports and processes. These examples can be adopted and customized according to your needs. Please contact your Customer Success manager or contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) in case you have further questions.
## Periodical Transaction Report[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#periodical-transaction-report "Direct link to Periodical Transaction Report")
Periodically collect all transactions of the desired entity ((Sub-)Tenant, Merchant, Provider) and report them in a standardized format to your backend systems.
  * Configure to collect all transactions in the job period, to generate a file in the desired format and to sent it to your backend systems (SFTP, HTTP, etc.)
  * Schedule a periodical PP Job (e.g. daily, weekly) on the desired entity

### Configure Job Type[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#configure-job-type "Direct link to Configure Job Type")
Configure a Job Type on Tenant Level to generate a file in a **unified format** of all Transaction of a Merchant and send it to your backend system:
  1. Navigate to the **System Setup** section, sub-section **Job Configuration**
  2. Click **+ New Job Type** (see [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs)) and configure the following steps:
    1. Collecting: Add **Collect All Transactions (in period)** and configure the step (see Periodic Transaction Export - Collecting):
      1. **Reference Date** : Select **Transaction Date** to include all Transactions for which the Transaction Date is in the Job Period (see Schedule Job periodically)
    2. Skip Processing
    3. Exporting: Add **Export Transactions to CSV** and configure the step (see Periodic Transaction Export - Exporting I)
      1. **New Dynamic File Name** : Fill in the different parameters to generate a dynamic file name, in our example the file name would look like: `Transactions_20230109000000_20230115235959_ACME Italy.csv`
      2. Optional: Enable the option to mark the created CSV file **Visible to Merchant**
      3. **Columns:** Select all Transaction Data Fields you want to have included in the CSV file and add a **Caption**
    4. Exporting: Add **Send Email** and configure the step (see Periodic Transaction Export - Exporting II)
      1. Optional: Enable **Retry** and configure the **Retry Counter** and **Retry Minutes**
      2. **Recipients:** Add Recipients, in our example we added the custom email _reporting@acme.com_.
      3. **Subject:** Fill in the different parameters to generate a dynamic email subject, in our example the subject would look like: `ACME Italy_Periodic_Transactions_Report_20230109000000_20230115235959`
      4. **Attachments:** Fill in the **File name pattern.** In our example to include CSV and XLSX files use the expression /\\.(csv|xlsx)$/

![Periodic Transaction Export - Collecting](https://documentation.ixopay.com/manual/assets/ideal-img/periodic-transaction-export-collecting.cdd54f8.1280.png)Periodic Transaction Export - Collecting![Periodic Transaction Export - Exporting I](https://documentation.ixopay.com/manual/assets/ideal-img/periodic-transaction-export-exporting-i.974d60e.1600.png)Periodic Transaction Export - Exporting I![Periodic Transaction Export - Exporting II](https://documentation.ixopay.com/manual/assets/ideal-img/periodic-transaction-export-exporting-ii.8f5e3e9.1280.png)Periodic Transaction Export - Exporting II
### Schedule Job periodically[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#schedule-job-periodically "Direct link to Schedule Job periodically")
  1. Navigate to the **Merchant Overview** , select **Job** **Schedules** from the **More** drop-down of the desired Merchant
  2. Click **+ Create new schedule** and configure the schedule (see Merchant Schedule)
    1. **Job Type** : Select the configured Job Type, _Periodic Transaction Export_ in our example
    2. **Schedule:** Select **Scheduled** and configure the schedule using a Cron Expression (similar to Unix CronJobs, in UTC). The Cron Expression can be generated using the build-in wizard. In our example the job will be triggered every week on mondays at 00:00 UTC.
    3. **Job Period** : Select the Job Period, in our example 1 week which means all Transactions with Transaction Dates from Monday 00:00 UTC to Sunday 23:59 UTC will be considered in the Post Processing Job.
    4. Click **+ Create**
  3. **Edit** the Schedule to **assign** the related Connectors to the schedule and click **Save** (see Assign Connectors)
  4. **Enable** the Schedule (see Enable Schedule)

![Merchant Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-schedule.d8d47f8.930.png)Merchant Schedule![Assign Connectors](https://documentation.ixopay.com/manual/assets/ideal-img/assign-connectors.676728a.1280.png)Assign Connectors![Enable Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/enable-schedule.234f1ba.1280.png)Enable Schedule
## Provider Settlement Consolidation[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#provider-settlement-consolidation "Direct link to Provider Settlement Consolidation")
Retrieve Settlements from multiple providers and report them in a **unified format** to your backend systems.
### Provider Settlement Data Fetchers[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#provider-settlement-data-fetchers "Direct link to Provider Settlement Data Fetchers")
For each Provider, whose settlement reports you want to consolidate, configure a Provider Settlement Data Fetcher (see Provider Data Fetcher):
  1. Navigate to the **Post Processing** section, sub-section **Provider**
  2. For each Provider, whose settlement reports you want to consolidate, click **+ New Provider** and configure the relevant data (see [Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider)).
  3. Click **Edit** for each Provider and configure a Provider Settlement Data Fetcher according to the [adapter-specific documentation](https://documentation.ixopay.com/manual/adapters/simulator)

![Provider Data Fetcher](https://documentation.ixopay.com/manual/assets/ideal-img/provider-data-fetcher.e19f905.1280.png)Provider Data Fetcher
### Map reported Fees to Fee Entities[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#map-reported-fees-to-fee-entities "Direct link to Map reported Fees to Fee Entities")
Depending on your contract, create Fee Entities in the IXOPAY platform and map them to the Provider reported standard categories of fees (see Fee Mapping):
  1. Navigate to the **System Setup** section, sub-section **Fee Entities**
  2. For each Provider Fee, click **+ New Fee Entity** and configure the relevant data (see [Fee Entities](https://documentation.ixopay.com/manual/docs/connector/fee-management/fee-entities))
  3. For each Provider Fee, click **Set Mapping** and select the applicable Provider Fee Mapping (see [Fee Entity](https://documentation.ixopay.com/manual/docs/connector/fee-management/fee-entities))

![Fee Mapping](https://documentation.ixopay.com/manual/assets/ideal-img/fee-mapping.28215b1.1280.png)Fee Mapping
### Configure Job Type[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#configure-job-type-1 "Direct link to Configure Job Type")
Configure a Job Type on Tenant Level to generate a settlement file in a **unified format** and send it to your backend system:
  1. Navigate to the **System Setup** section, sub-section **Job Configuration**
  2. Click **+ New Job Type** (see [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs)) and configure the following steps:
    1. Collecting: Add **Collect Transactions from related batch** and configure the step (see Aggregated Settlement - Collecting):
      1. Optional: In our example we **Filter** the Transactions to be collected according to Transaction Types debit, capture, refund, chargeback, chargeback-reversal and payout
      2. **Set Job Period from Transaction Dates:** Select **By Processing Date+Time** to sets the job period automatically based on the included settled Transactions
    2. Processing: Add **Aggregate Transaction Values To Job Line Items** and configure the step (see Aggregated Settlement - Processing I):
      1. Optional: Add a **Descriptive name** , e.g. Gross Payment
      2. Option: In our example we **Filter** the Transactions to be processed only in case the Transaction Status is success. Filtering according to Types debit, capture, refund, chargeback, chargeback-reversal and payout is redundant in this example
      3. **Transaction Value To Use:** Select **Total Settled amount (in settlement currency)** as Transaction Value to be used for the Aggregation
      4. **Value Manipulation:** Select **Refunds and CBs as negative** to aggregate Transaction Values for these Transaction Types as negative
      5. **Aggregation:** Select **Sum values**
      6. **Item Type:** Fill in _gross-payment_ for the calculated Line Item
    3. Processing: Add **Copy Line Items from related batch** and configure the step (Aggregated Settlement - Processing II):
      1. Optional: Add a **Descriptive name** , e.g. Copy Line Items
      2. **Line Items to copy:** Add the triplet of Source Name, Target Name, Value Manipulation. In our example the Source name for the Provider Settlement Line Item is _service-fee_ that will be copied to the Target name for the Job Line Item _service-fee_ without any Value Manipulation. The same we configure for the Provider Settlement Line Item _transaction-fee._
      3. Enable the option to **Copy Line Item attributes**
    4. Processing: Add **Aggregate Transaction Fees To Job Line Items** and configure the step (Aggregated Settlement - Processing III):
      1. Optional: Add a **Descriptive name** , e.g. Transaction Fee Sum
      2. **Filter** the Transactions to be processed only in case Line Items can be mapped to the Line Item Entities _Provider Markup_ and _Provider Scheme Fee._ Filtering according to Types debit, capture, refund, chargeback, chargeback-reversal and payout is redundant in this example
      3. **Transaction Value To Use:** Select **Fee Amount** as Transaction Value to be used for the Aggregation
      4. **Aggregation:** Select **Sum values**
      5. **Item Type:** Fill in _feeSum_ for the calculated Line Item
    5. Processing: Add **Line Item Calculation** and configure the step (see Aggregated Settlement - Processing IV)
      1. Optional: Add a **Descriptive name** , e.g. Subtract Tx Fees
      2. **Operation:** Select **Sum Line Items (1 or 2 operands)** to subtract the Fee Sum. In our example Fee Values are reported negative, therefore we chose the option **Sum Line Items**
      3. **First Operand - Line Item Type:** Fill in the Line Item _gross-payment_ (as processed in 2.b)
      4. **First Operand - Grouping algorithm** : Select **Sum of values**
      5. **Second Operand** - Line Item Type: Fill in the Line Item _feeSum_ (as processed in 2.d)
      6. **Second Operand** - Grouping algorithm: Select **Sum of values**
      7. **Target - New Line Item Type:** Fill in _gross-minus-txfees_ for the calculated Line Item
    6. Processing: Add **Line Item Calculation** and configure the step (see Aggregated Settlement - Processing V)
      1. Optional: Add a **Descriptive name** , e.g. Subtract Service Fee
      2. **Operation:** Select **Sum Line Items (1 or 2 operands)** to subtract the Service Fees. In our example Fee Values are reported negative, therefore we chose the option **Sum Line Items**
      3. **First Operand - Line Item Type:** Fill in the Line Item _gross-minus-txfees_ (as processed in 2.e)
      4. **First Operand - Grouping algorithm** : Select **Sum of values**
      5. **Second Operand** - Line Item Type: Fill in the Line Item _service-fee_ (as processed in 2.c)
      6. **Second Operand** - Grouping algorithm: Select **Sum of values**
      7. **Target - New Line Item Type:** Fill in _gross-minus-txfees-service_ for the calculated Line Item
    7. Processing: Add **Line Item Calculation** and configure the step (see Aggregated Settlement - Processing VI)
      1. Optional: Add a **Descriptive name** , e.g. Subtract bottom line fee
      2. **Operation:** Select **Sum Line Items (1 or 2 operands)** to subtract the Tx Fees. In our example Fee Values are reported negative, therefore we chose the option **Sum Line Items**
      3. **First Operand - Line Item Type:** Fill in the Line Item _gross-minus-txfees-service_ (as processed in 2.f)
      4. **First Operand - Grouping algorithm** : Select **Sum of values**
      5. **Second Operand** - Line Item Type: Fill in the Line Item _transaction-fee_ (as processed in 2.c)
      6. **Second Operand** - Grouping algorithm: Select **Sum of values**
      7. **Target - New Line Item Type:** Fill in _net-payment_ for the calculated Line Item
    8. Exporting: Add **Write customized Settlement CSV** and configure the step (see Aggregated Settlement - Exporting I)
      1. **Aggregation Data Style** : Select **Combined (on Top)** to have the aggregated data shown on top. Configuring the **File Name - Aggregated File (only if separate)** can be skipped
      2. **Transaction Columns:** Select all Transaction Data Fields you want to have included in the customized settlement file (see Aggregated Settlement - Exporting II for example fields)
      3. **Aggregated Columns:** Select the Transaction Data Fields to be aggregated on top (as defined in 2.h.i.)
      4. **Aggregated File - Line Item Keys:** Add the **Line Item Keys** from previous Processing Steps and **Output Name** to be included in the customized settlement file. In our example the Line Items _net-payment_ (as processed in 2.g)_, service-fee_ (as processed in 2.c)_, transaction-fee_ (as processed in 2.c)
      5. Optional: Fill in the **Limit decimal places in numbers to**
      6. Optional: Enable the option to mark the customized settlement file **Visible to Merchant (in Job)**
    9. Optional Exporting: Add **PGP encrypt files** and configure the step (see Aggregated Settlement - Exporting IV)
      1. Fill in the **PGP public kex**
      2. Fill in the **File name pattern.** In our example to include CSV and XLSX files use the expression /\\.(csv|xlsx)$/
    10. Exporting: Add **Upload document to SFTP server** see Aggregated Settlement - Exporting V)
    11. Optional: Enable **Retry** and configure the **Retry Counter** and **Retry Minutes** in case the SFTP server is not reachable
    12. Fill in the **File name (regex pattern, start and end delimiter required)**. In our example, due to the encryption, this would be /\\.pgp$/
    13. Fill in the SFTP server **Host, Port, Username, Password** and **Root directory.** As well as the **SSH Private Key** and **SSH Private Key Passphrase.**

![Aggregated Settlement - Collecting](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-collecting.685a37c.1280.png)Aggregated Settlement - Collecting![Aggregated Settlement - Processing I](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-i.b7978e8.1260.png)Aggregated Settlement - Processing I![Aggregated Settlement - Processing II](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-ii.b1b7eeb.1280.png)Aggregated Settlement - Processing II![Aggregated Settlement - Processing III](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-iii.f941534.776.png)Aggregated Settlement - Processing III![Aggregated Settlement - Processing IV](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-iv.d35d571.1280.png)Aggregated Settlement - Processing IV![Aggregated Settlement - Processing V](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-v.b3ad923.1280.png)Aggregated Settlement - Processing V![Aggregated Settlement - Processing VI](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-processing-vi.42ec073.1280.png)Aggregated Settlement - Processing VI![Aggregated Settlement - Exporting I](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-exporting-i.7aeb1ea.1280.png)Aggregated Settlement - Exporting I![Aggregated Settlement - Exporting II](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-exporting-ii.264dbf0.1280.png)Aggregated Settlement - Exporting II![Aggregated Settlement - Exporting III](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-exporting-iii.2280e3e.1280.png)Aggregated Settlement - Exporting III![Aggregated Settlement - Exporting IV](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-exporting-iv.64f009e.1280.png)Aggregated Settlement - Exporting IV![Aggregated Settlement - Exporting V](https://documentation.ixopay.com/manual/assets/ideal-img/aggregated-settlement-exporting-v.247c301.1280.png)Aggregated Settlement - Exporting V
### Schedule Job “On Provider Settlement"[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#schedule-job-on-provider-settlement "Direct link to Schedule Job “On Provider Settlement"")
Schedule the configured Job Type on the desired entity to be started "On Provider Settlement". In our example the Job should be executed per Provider
  1. Navigate to the **Post Processing** section, sub-section **Provider**
  2. For each Provider, whose settlement reports you want to consolidate, click **Schedules**
  3. Click **+ Create new schedule** and configure the schedule (see Provider Schedule)
    1. **Job Type** : Select the configured Job Type, _Aggregated Settlement_ in our example
    2. **Schedule:** Select **On Provider Settlement** to initiate the Post Processing Job once the Settlement is completely processed and has no conflicts
    3. **Job Period** : Select any Job Period. The Job Period will be set according to the **Processing Date+Time** based on the included settled Transactions of the Provider Settlement as defined in 2.a.ii
    4. Click **+ Create**
  4. **Edit** the Schedule to **assign** the related Connectors to the schedule and click **Save** (see Assign Connectors)
  5. **Enable** the Schedule (see Enable Schedule)

![Provider Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/provider-schedule.c187af2.926.png)Provider Schedule![Assign Connectors](https://documentation.ixopay.com/manual/assets/ideal-img/assign-connectors.676728a.1280.png)Assign Connectors![Enable Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/enable-schedule.234f1ba.1280.png)Enable Schedule
## Mark fraudulent Transactions from Report[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#mark-fraudulent-transactions-from-report "Direct link to Mark fraudulent Transactions from Report")
### Configure Job Type to collect all transaction from uploaded CSV[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#configure-job-type-to-collect-all-transaction-from-uploaded-csv "Direct link to Configure Job Type to collect all transaction from uploaded CSV")
Configure a Job Type to collect and mark all fraudulent transaction from a CSV file:
  1. Navigate to the **System Setup** section, sub-section **Job Configuration**
  2. Click **+ New Job Type** (see [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs)) and configure the following steps:
    1. Collecting: Add **Pause Execution** and configure the step (see Pause Step):
      1. Optional: Add a **Descriptive name** , e.g. Manual report Upload
      2. **Pause Until:** Select **Manual Continue** to pause the job until manual user interaction
    2. Collecting: Add **Collect Transactions by Uploaded CSV File** and configure the step (see Collecting Step):
      1. Optional: Add a **Descriptive name** , e.g. Collect from Fraud Report
      2. Optional: Enable option **Include Sub-Tenant** in case also Transactions of Sub-tenants should be collected (see Collecting Step)
      3. Optional: Enable option **Cascading ID mapping** to try to map fields according to defined order. As soon as a mapping is found the query stops. If disabled all fields are mapped. In case more then one column of the uploaded CSV is mapped to the same field an error occurs.
      4. Configure the **Map Fields** pairs to be used for mapping
        1. Fill in the **Map from field (CSV header column)** from the report that is uploaded
        2. Select the **Map to field** from the drop down of transaction data to map the data from the report to
    3. Processing: Add **Transaction Tag** and configure the step (see Processing Step):
      1. Optional: Add a **Descriptive name** , e.g. Add fraud tag to transaction
      2. **Add Tag to Transaction:** fraud (see also [Transaction Tags](https://documentation.ixopay.com/manual/docs/transactions/details/transaction-tags))
      3. Enable the **Add Tag to Parent Transaction** in case the tag should also be added to the parent transaction for followup transactions.
    4. Processing: Add **Add Comment To Transaction** and configure the step (see Processing Step II):
      1. Optional: Add a **Descriptive name** , e.g. Fraud Report
      2. Either
        1. Define a **New Dynamic Comment Format** or
        2. Define a **Static Comment to Add (optional)**
      3. Optional: Enable to **Add Comment to Parent Transaction** in case the comment should also be added to the parent transaction for followup transactions.

![Pause Step](https://documentation.ixopay.com/manual/assets/ideal-img/pause-step.376daef.1280.png)Pause Step![Collecting Step](https://documentation.ixopay.com/manual/assets/ideal-img/collecting-step.f961f5d.1280.png)Collecting Step![Processing Step](https://documentation.ixopay.com/manual/assets/ideal-img/processing-step.2c944a1.1280.png)Processing Step![Processing Step II](https://documentation.ixopay.com/manual/assets/ideal-img/processing-step-ii.968c6f7.1280.png)Processing Step II
### Schedule Job[​](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples#schedule-job "Direct link to Schedule Job")
Schedule the configured Job Type on the desired entity to be started when manually triggered (see Schedule manually triggered).
![Schedule manually triggered](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-manually-triggered.901fe1a.834.png)Schedule manually triggered