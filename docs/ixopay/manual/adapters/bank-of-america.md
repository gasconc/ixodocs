---
title: Bank Of America
summary: The Bank of America Adapter in the IXOPAY platformhttps://www.ixopay.com
  differs in its behavior from an ordinary Adapter. It does not directly communicate
  with any Bank of America provided Endpoint to process transactions.
tags:
- pre-requisits-bank-america-ach-https-documentation-ixopay-com-manual-adapters-bank-america-pre-requisits-bank-america-ach-direct-link-pre-requisits-bank-america-ach
- connector-configuration-https-documentation-ixopay-com-manual-adapters-bank-america-connector-configuration-direct-link-connector-configuration
- transactions-https-documentation-ixopay-com-manual-adapters-bank-america-transactions-direct-link-transactions
- job-configuration-nacha-export-https-documentation-ixopay-com-manual-adapters-bank-america-job-configuration-nacha-export-direct-link-job-configuration-nacha-export
- provider-setup-https-documentation-ixopay-com-manual-adapters-bank-america-provider-setup-direct-link-provider-setup
- api
- ixopay
- refund
- hosted-payment-page
- ach
source_url: https://documentation.ixopay.com/manual/adapters/bank-of-america
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

# Bank Of America
## Pre-requisits Bank of America ACH[​](https://documentation.ixopay.com/manual/adapters/bank-of-america#pre-requisits-bank-of-america-ach "Direct link to Pre-requisits Bank of America ACH")
The Bank of America Adapter in the [IXOPAY platform](https://www.ixopay.com) differs in its behavior from an ordinary Adapter. It does not directly communicate with any Bank of America provided Endpoint to process transactions. It is solely responsible for Transaction creation (and validation) in the IXOPAY platform, to be processed later on with an so called IXOPAY platform **Provider** (for more information have a look in the [Post Processing section](https://documentation.ixopay.com/manual/docs/post-processing)).
The general idea of the Adapter is to represent an Endpoint that validates the required ACH Transaction Data, depending on the selected Standard Entry Class Code - SEC Code (CCD, IAT, PPD, …) which are required for a later NACHA Data Export via SFTP.
A single Adapter represents a Batch in a final NACHA File.
tip
Keep in mind, that for each Standard Entry Class Code (CCD, IAT, PPD, …) a new Connector needs to be configured.
## Connector Configuration[​](https://documentation.ixopay.com/manual/adapters/bank-of-america#connector-configuration "Direct link to Connector Configuration")
Configure the following parameters for the Connector (see Connector Config):
  1. Fill in the mandatory **Extra Data: standardEntryClassCode** :
    1. CCD, CTX, IAT, PPD, TEL, WEB — Identifies the specific record format used to carry payment and payment-related information.
  2. Fill in the mandatory **Extra Data: batchCompanyEntryDescription** :
    1. Max. 10 characters.
    2. Field 7 "Company Entry Description" in case of non-IAT Batch, Field 10 "Company Entry Description" in case of IAT Only Batch — as described in NACHA File Specification.
  3. Fill in the mandatory **Extra Data: batchOriginatingDfild** :
    1. Max. 8 digits.
    2. Field 12 "Originating DFI Identification" in case of non-IAT Batch, Field 16 "Originating DFI Identification" in case of IAT Only Batch — as described in NACHA File Specification
  4. Fill in the optional **Extra Data: batchCompanyDiscretioaryData** :
    1. max. 20 characters.
    2. Field 4 "Company Discretionary Data" in case of non-IAT Batch — as described in NACHA File Specification.
  5. Fill in the optional **Extra Data: batchIATOriginatorId** :
    1. max. 10 characters.
    2. Field 8 "Originator Identification" in case of IAT Only Batch — as described in NACHA File Specification.
  6. Fill in the conditional **Extra Data: batchIATOriginISOCurrency** (mandatory if standardEntryClassCode = IAT):
    1. max. 3 characters.
    2. Field 11 "ISO Originating Currency Code (Account Currency)" in case of IAT Only Batch — as described in NACHA File Specification.
  7. Fill in the conditional **Extra Data: batchIATDestinationISOCurrency** (mandatory if standardEntryClassCode = IAT):
    1. max. 3 characters.
    2. Field 12 "ISO Destination Currency Code (Payment Currency)" in case of IAT Only Batch — as described in NACHA File Specification.
  8. Fill in the conditional **Extra Data: batchIATDestinationISOCountryCode** (mandatory if standardEntryClassCode = IAT):
    1. max. 2 characters.
    2. Field 8 "ISO Destination Country Code" in case of IAT Only Batch — as described in NACHA File Specification.
  9. Fill in the optional **Extra Data:** : **batchServiceClassCode:**
    1. Mixed - 200, Credits Only - 220, Debits Only - 225;
    2. Depending on theIXOPAY platform Transaction Types that you would like to process over this Adapter, you will have to set this value correctly.
       * If you are going to process **debit** , **refund and payout** you will need to select "Mixed - 200".
       * If you are going to solely process **debit** you will need to select "Debits Only - 225".
       * If you are going to solely process **refund and payout** you will need to select "Credits Only - 220".

![Connector Config](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config.5dbd95b.1280.png)Connector Config
For further information have a look at the [NACHA File Specification](https://www.nacha.org/system/files/2022-01/Nacha_ISO20022_Guide_pain.001_credit.pdf)
## Transactions[​](https://documentation.ixopay.com/manual/adapters/bank-of-america#transactions "Direct link to Transactions")
All Transactions initiated via the Bank of America Adapter required three mandatory fields (either as part of the Transaction Extra Data Object (e.g. extraData.accountType), or collected via the Adapters Hosted Payment Page):
  * Account Type
  * Account Number
  * Routing Number

If any of those fields are missing in the initial request, a redirect to the adapters Hosted Payment Page will be returned by default.
If the **Standard Entry Class - IAT** is selected in the configuration, you will have to provide even further Payment Information in the Transaction Extra Data Object as described in the configuration.
All the mandatory & optional fields required on transaction level, depending on the selected **Standard Entry Class** , can be found in the [Transaction API Documentation.](https://documentation.ixopay.com/api/transaction/transaction-api)
## Job Configuration — NACHA Export[​](https://documentation.ixopay.com/manual/adapters/bank-of-america#job-configuration--nacha-export "Direct link to Job Configuration — NACHA Export")
For processing the transactions created by the Adapter a so called NACHA Export is needed. The NACHA Export needs to be configure as a specific Post Processing Job:
Follow these steps to set up a new Job Type:
  1. Navigate to the **System Setup** section > **Job Configuration**
  2. Click **+ New Job Type** in the Job Configuration Overview
  3. Enter a **Job Type Name** and click **+ Create**

After creating the Job Type you will be able to configure the Job Type steps.
  1. In the **Collecting** Step select the option **Collect All Transactions (in period)**
  2. n the Collect All Transactions (in period) option, filter the collecting step for **Transaction Types** "debit" and "refund" and **Transaction Status** **"pending"** (see Collecting Step).
  3. In the **Exporting** Step **first** add the option **Export Transactions as NACHA File**
  4. Configure the **Export Transactions as NACHA File** option. The option requires the following parameter to be configured for the NACHA File Header:
    1. **File Name** — file will be created in .txt format
    2. **Name of receiving Bank (Destination Bank)**
      1. max. 23 characters
      2. Required Field for the File Header Record. Field 11 "Destination" - as described in NACHA File Specification
      3. Note: According to the NACHA Specification, it is required to enter the name in CAPS only.
    3. **Immediate Destination ID (The Bank assigns this ID)**
      1. max. 10 digits
      2. Required Field for the File Header Record. Field 3 "Immediate Destination" - as described in NACHA File Specification
    4. **Name of Origin**
      1. max. 23 characters
      2. Required Field for the File Header Record. Field 11 "Origin or Company Name" - as described in NACHA File Specification
      3. Note: According to the NACHA Specification, it is required to enter the name in CAPS only.
    5. **Immediate Origin Id (The Bank assigns this ID)**
      1. max. 10 digits
      2. Required Field for the File Header Record. Field 4 "Immediate Origin" - as described in NACHA File Specification
    6. **Reference Code** — optional
      1. max. 8 characters
      2. Optional Field for the File Header Record. Field 13 "Reference Code"- as described in NACHA File Specification
  5. In the **Exporting** Step add the option **Upload document to SFTP server** (after **Export Transactions as NACHA File** step)**.**
  6. Configure **Upload document to SFTP server** option. The option requires the following parameter to be configured:
    1. **File name (regex pattern, start and end delimiter required)**
      1. valid regex pattern (e.g. /^.*.txt$/)
      2. the regex pattern is required for the SFTP upload to recognize the correct file to be used for the upload, since the Job could contain multiple files (NACHA, CSV, etc) generated in different file formats.
    2. **Host**
    3. **Port**
    4. **Username**
    5. **Password**
    6. **Root directory:** add the upload directory (e.g. /incoming/something)
    7. **SSH Private Key**
    8. **SSH Private Key Passphrase**

![Job Configuration Overview](https://documentation.ixopay.com/manual/assets/ideal-img/job-configuration-overview.b8dc57b.1280.png)Job Configuration Overview![Collecting Step](https://documentation.ixopay.com/manual/assets/ideal-img/collecting-step.0bbe5ec.1280.png)Collecting Step
tip
The order of the Exporting steps is important, so make sure it is configured according to the documentation.
![Add export steps](https://documentation.ixopay.com/manual/assets/ideal-img/image-5-add-export-steps.0c92c09.1280.png)Add export steps![Edit exporter](https://documentation.ixopay.com/manual/assets/ideal-img/image-6-edit-exporter.af479f4.1280.png)Edit exporter![Edit SFTP upload](https://documentation.ixopay.com/manual/assets/ideal-img/image-7-edit-sftp-upload.7037d37.1280.png)Edit SFTP upload
## Provider Setup[​](https://documentation.ixopay.com/manual/adapters/bank-of-america#provider-setup "Direct link to Provider Setup")
Lastly you need to set up a [Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider). This entity in the IXOPAY platform is needed for the actual NACHA Export (Job Configuration - NACHA Export) as well as the Data Fetching for the Reconciliation File (Result File).
After creation assign the Bank of America Connector to this Provider
  1. Click on **Connectors** in the Provider Overview Page
  2. Click on **+ Assign Connector** (see Provider Connector View)
  3. Select the Connector to be assigned to the Provider (see Connector Selection)

Create a [Schedule](https://documentation.ixopay.com/manual/docs/system-setup/global-job-schedules) for the Job Execution of the NACHA Export on Provider level
  1. Click on **Schedules** in the Provider Overview Page
  2. Click on **+ Create new schedule** in the Provider Schedule Overview
  3. Fill in the parameter needed for the schedule (see Schedule Details):
    1. **Job Type** — Select the previously configured Job Type
    2. **Schedule** - Select how the Job should be executed (e.g. automatically triggered daily )
    3. **Job Period** — Defines the Period for the Collecting Step in the Job Configuration (e.g. Interval=day, Count=1 (recommended), all Transactions of a single day will be considered)
  4. Click **+ Create** to save the schedule
  5. Click **+ Edit** on the created schedule to assign the Connectors to the created schedule (see Connector Assignment Schedule)
  6. **Enable** the Status of the Schedule (see Provider Schedule Overview)

Add a Reconciliation Data Fetcher on Provider level
  1. Click on **Edit** in the Provider Overview Page
  2. Add a **Reconciliation Data Fetcher** (see Edit Provider)
  3. Fill in the parameter needed and click **+ Add Data Fetcher** (see Data Fetcher)
    1. **Adapter**
    2. **Extra Data** - information needed to fetch the Reconciliation File

We recommend to keep the the Job Execution Schedule and Data Fetcher Int in sync to avoid data to be inaccurate.
![Provider Overview Page](https://documentation.ixopay.com/manual/assets/ideal-img/provider-overview-page.78920a8.1280.png)Provider Overview Page![Provider Connector View](https://documentation.ixopay.com/manual/assets/ideal-img/provider-connector-view.69c725e.1280.png)Provider Connector View![Connector Selection](https://documentation.ixopay.com/manual/assets/ideal-img/connector-selection.c10279b.820.png)Connector Selection![Provider Schedule Overview](https://documentation.ixopay.com/manual/assets/ideal-img/provider-schedule-overview.6b86ade.1280.png)Provider Schedule Overview![Schedule Details](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-details.a175353.818.png)Schedule Details![Connector Assignment Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/connector-assignment-schedule.263a31d.1280.png)Connector Assignment Schedule![Edit Provider](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider.199229e.1280.png)Edit Provider![Data Fetcher](https://documentation.ixopay.com/manual/assets/ideal-img/data-fetcher.6440611.597.png)Data Fetcher
tip
Assigning a Connector to a Provider can also be done in the Connector Details View, we do not recommend to add the Reconciliation Data Fetcher on Connector due to scalability and maintenance.
![Connector Details View](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-view.c57ea51.1280.png)Connector Details View