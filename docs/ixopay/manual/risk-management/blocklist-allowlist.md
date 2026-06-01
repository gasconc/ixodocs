---
title: Block- & Allowlist
summary: ' Risk Managementhttps://documentation.ixopay.com/manual/docs/risk-management  Block-
  & Allowlist'
tags:
- importing-data-https-documentation-ixopay-com-manual-docs-risk-management-blocklist-allowlist-importing-data-direct-link-importing-data
- blocklist-rules-https-documentation-ixopay-com-manual-docs-risk-management-blocklist-allowlist-blocklist-rules-direct-link-blocklist-rules
- log-export-https-documentation-ixopay-com-manual-docs-risk-management-blocklist-allowlist-log-export-direct-link-log-export
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist
portal: ixopay-manual
updated: '2026-06-01'
related: []
---

* [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * Block- & Allowlist

# Block- & Allowlist
You can easily set up blocklists and allowlists in the [IXOPAY platform](https://www.ixopay.com), providing greater control over suspicious transactions that could affect your business or to allow certain transactions to be approved without restraints due to positive results in the past.
To manage the blocklist and allowlist:
  1. Open the **Risk Management** section in the navigation menu and select either **Allowlist** or **Blocklist**.
  2. You can define blocklists and allowlists at the merchant level or for a (sub-)tenant. Lists defined for a (sub-)tenant are applied to all (new and existing) merchants associated with that (sub-)tenant.
    1. Switch to the **Tenant Blocklist/Allowlist** tab to define a list at the tenant level.
    2. Switch to the **Merchant Blocklist/Allowlist** tab and select a merchant (see Merchant Selection) to define a list at the merchant level.
  3. Click on **+ New** and select **+ New Blocklist Item / + New Allowlist Item**.
  4. Select a **Key** to determine what type of information should be added to the list (see Add entry screenshot). You can select from the following: **BIC, BIN Range, Billing Country, CC Fingerprint, Customer Identification, Email, First Name, IBAN, IP Country, IPv4 Address, Last Name, Shipping Country, Billing Phone Number** and **Shipping Phone Number**.
  5. Enter a **Value** for the key.
  6. You can also enter an optional **Comment**.
  7. Click **Save**.
  8. Assign your new blocklist or allowlist to a risk profile as a risk rule (see Assign Blocklist to Risk Profile screenshot). For more details, refer to [Risk Profile](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create-risk-rules) and [Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules).

![Merchant Selection](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-selection.918e901.1280.png)Merchant Selection![New Blocklist Item](https://documentation.ixopay.com/manual/assets/ideal-img/new-blocklist-item.4aa2696.1280.png)New Blocklist Item![Add entry](https://documentation.ixopay.com/manual/assets/ideal-img/add-entry.e463d77.982.png)Add entry![Assign Blocklist to Risk Profile](https://documentation.ixopay.com/manual/assets/ideal-img/assign-blocklist-to-risk-profile.7855961.1280.png)Assign Blocklist to Risk Profile
note
Blocklist/allowlist entries are only applied to transactions when assigned to the corresponding rule (**Blocklist/Allowlist**) in a risk profile.
![Assign Blocklist to Risk Profile](https://documentation.ixopay.com/manual/assets/ideal-img/assign-blocklist-to-risk-profile.7855961.1280.png)Assign Blocklist to Risk Profile
## Importing data[​](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#importing-data "Direct link to Importing data")
You can also import data for the allowlist/blocklist by uploading a file, rather than defining the rules manually in the IXOPAY platform.
This file should be a simple text file with each line representing a value to import for the specified key. For example, to import a list of email addresses to block, the file could contain following content:
```

test@example.com  

user@example.com  

block@example.com  

```To import data for your blocklist or allowlist:
  1. Click on **Import data** at the top right.
  2. Select the **File** to import.
  3. Chose the **Key** you want to import data for (as values).
  4. Chose the type of blocklist/allowlist the values should be imported to (merchant, tenant or global).

![Import File](https://documentation.ixopay.com/manual/assets/ideal-img/import-file.7285404.1280.png)Import File
Transaction details from transactions processed in the IXOPAY platform can also be added to the blocklist, see Blocklist Customer Data from Transaction list.
## Blocklist Rules[​](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#blocklist-rules "Direct link to Blocklist Rules")
Items can also be added to the blocklist based on rules. If a rule matches, the values in the specified fields are added to the blocklist.
To create a new rule:
  1. Click on **+ New** and select **+ New Blocklist Rule**.
  2. Choose the rule category you want to use. **Error Code, Parsed Merchant Advice Code**
  3. Select an **Adapter** if you want to add entries to the blocklist based on the error code / merchant advice code received from an adapter. Leave this blank if you want to use the IXOPAY platform error codes.
  4. Enter the **Error Code / Merchant Advice Code** that should cause an entry to be added to the blocklist (see Add Rule Error Code and Add Rule Merchant Advice Code).
  5. Select the **Fields to block on hit** to determine what keys and values should be added to the blocklist. (Note: CC Fingerprint applies to both, Global and Merchant CC Fingerprint, and will put 2 entries on the related Blocklist)
  6. Click **Save**.

The new Blocklist rule is displayed on the **Blocklist Rule List** tab (see Blocklist Rule List).
Assign the blocklist to a risk profile as described above.
![Blocklist Rule Categories](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist-rule-categories.4b43e46.1006.png)Blocklist Rule Categories![Add rule Error Code](https://documentation.ixopay.com/manual/assets/ideal-img/add-rule-error-code.2c460a8.1280.png)Add rule Error Code![Add rule Merchant Advice Code](https://documentation.ixopay.com/manual/assets/ideal-img/add-rule-merchant-advice-code.0c56808.992.png)Add rule Merchant Advice Code![Blocklist Rules](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist-rules.0c0bb9d.1280.png)Blocklist Rules
note
Blocklist/allowlist entries are only applied to transactions when assigned to the corresponding rule (**Blocklist/Allowlist**) in a risk profile.
![Assign Blocklist to Risk Profile](https://documentation.ixopay.com/manual/assets/ideal-img/assign-blocklist-to-risk-profile.7855961.1280.png)Assign Blocklist to Risk Profile
## Log Export[​](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#log-export "Direct link to Log Export")
  1. Navigate to the **Blocklist / Allowlist** you want to export the log data for.
  2. Click on **Log** to display the logs.
  3. Click on **Data Export**. You will be redirected to the **Data Export** page for blocklist / allowlist logs.
  4. Click on **+ New Blocklist / Allowlist Export**.
  5. Select the **File type** (csv, xlsx).
  6. Select the **Date Range** you want to export the logs for.
  7. Click on **Generate**. The status of the export is set to "Waiting". Depending on the amount of data that needs to be collected, the export can take some time (up to 10 minutes).

You can refresh the page during this process to see the current progress (as a percentage and the number of processed rows). You can cancel the export at any time before it is completed.
Once the export has completed, it is displayed in the Data Export overview with the status "Done". You can **Download** the log file or **Delete** it from here.
![Blocklist](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist.8b142b6.1280.png)Blocklist![Data Export](https://documentation.ixopay.com/manual/assets/ideal-img/data-export.44e9991.1280.png)Data Export![New Blocklist Export](https://documentation.ixopay.com/manual/assets/ideal-img/new-blocklist-export.a33c433.1280.png)New Blocklist Export![Data Export: Download/Delete](https://documentation.ixopay.com/manual/assets/ideal-img/data-export-download-delete.dd44609.1280.png)Data Export: Download/Delete
File retention
Files are retained for 12 months and permanently deleted thereafter.
```

test@example.com  

user@example.com  

block@example.com  

```
```

test@example.com  

user@example.com  

block@example.com  

```You can refresh the page during this process to see the current progress (as a percentage and the number of processed rows). You can cancel the export at any time before it is completed.
Once the export has completed, it is displayed in the Data Export overview with the status "Done". You can **Download** the log file or **Delete** it from here.
![Blocklist](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist.8b142b6.1280.png)Blocklist![Data Export](https://documentation.ixopay.com/manual/assets/ideal-img/data-export.44e9991.1280.png)Data Export![New Blocklist Export](https://documentation.ixopay.com/manual/assets/ideal-img/new-blocklist-export.a33c433.1280.png)New Blocklist Export![Data Export: Download/Delete](https://documentation.ixopay.com/manual/assets/ideal-img/data-export-download-delete.dd44609.1280.png)Data Export: Download/Delete
File retention
Files are retained for 12 months and permanently deleted thereafter.
  * [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * Block- & Allowlist
```

test@example.com  

user@example.com  

block@example.com  

```You can refresh the page during this process to see the current progress (as a percentage and the number of processed rows). You can cancel the export at any time before it is completed.
Once the export has completed, it is displayed in the Data Export overview with the status "Done". You can **Download** the log file or **Delete** it from here.
![Blocklist](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist.8b142b6.1280.png)Blocklist![Data Export](https://documentation.ixopay.com/manual/assets/ideal-img/data-export.44e9991.1280.png)Data Export![New Blocklist Export](https://documentation.ixopay.com/manual/assets/ideal-img/new-blocklist-export.a33c433.1280.png)New Blocklist Export![Data Export: Download/Delete](https://documentation.ixopay.com/manual/assets/ideal-img/data-export-download-delete.dd44609.1280.png)Data Export: Download/Delete
File retention
Files are retained for 12 months and permanently deleted thereafter.
  * [Importing data](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#importing-data)
  * [Blocklist Rules](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#blocklist-rules)
  * [Log Export](https://documentation.ixopay.com/manual/docs/risk-management/blocklist-allowlist#log-export)
```

test@example.com  

user@example.com  

block@example.com  

```
```

test@example.com  

user@example.com  

block@example.com  

```You can refresh the page during this process to see the current progress (as a percentage and the number of processed rows). You can cancel the export at any time before it is completed.
Once the export has completed, it is displayed in the Data Export overview with the status "Done". You can **Download** the log file or **Delete** it from here.
![Blocklist](https://documentation.ixopay.com/manual/assets/ideal-img/blocklist.8b142b6.1280.png)Blocklist![Data Export](https://documentation.ixopay.com/manual/assets/ideal-img/data-export.44e9991.1280.png)Data Export![New Blocklist Export](https://documentation.ixopay.com/manual/assets/ideal-img/new-blocklist-export.a33c433.1280.png)New Blocklist Export![Data Export: Download/Delete](https://documentation.ixopay.com/manual/assets/ideal-img/data-export-download-delete.dd44609.1280.png)Data Export: Download/Delete
File retention
Files are retained for 12 months and permanently deleted thereafter.