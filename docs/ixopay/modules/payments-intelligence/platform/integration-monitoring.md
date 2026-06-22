---
title: Integration Monitoring
summary: ' Integration Monitoring'
tags:
- 3ds
- ixopay
- psp
- settlement
- transaction
- merchant
- congrify
- reconciliation
- snowflake
- dashboard
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/integration-monitoring
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Platform
  * Integration Monitoring

# Integration Monitoring
IXOPAY Payments Intelligence's (formerly Congrify) Integration Monitoring suite provides you with a transparent, real-time window into the data ingestion lifecycle. It ensures data integrity monitoring every transaction, fee, dispute, settlement and other payments data related file from your PSPs are successfully captured, processed, and ready for analysis on the IXOPAY Payments Intelligence platform.
To monitor the ingestion of your payments files, navigate to the ingestion pipelines under ‘Integration Monitoring’ on the sidebar of the IXOPAY Payments Intelligence platform.
  1. At the top of the monitoring dashboard, you get immediate visibility of the key ingestion indicators:
     * **Events Count:** The total volume of individual data points (e.g., 4,343,220 events in the example screenshot) successfully processed.
     * **CSV Uploads:** The total number of physical files (e.g., 952 uploads in the example screenshot) ingested into the platform.
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_1.ac4de6b.1600.png)
  2. Customize the ingestion view through flexible reporting parameters:
     * **Metric Toggle:** Switch your view between CSV Row Count (the number of lines within files) and the Number of Files to identify volume spikes or missing batches.
     * **Daily/ Monthly report view:** Generate and view ingestion reports on a Daily or Monthly basis to match your reconciliation cycles.
     * **Advanced Sorting:** Filter by Oldest/ Newest First, and choose to view data based on File Date or the actual Processing Date.
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_2.f9d6a66.1600.png)
The platform offers two distinct ways to audit your data flow:
     * **Timeline View:** A horizontal overview of data health, organized by PSP (e.g., Adyen, Chase) and File Type (e.g., Exchange Rate, Dispute, Settlement Detail). This view allows you to track consistency over a specific date range.
     * **Table View:** A granular, forensic list of every ingested file. This includes the specific File Name, the associated Merchant Account, and precise Ingested on UTC timestamps to ensure complete auditability.
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_3.68195e6.1600.png)
  3. IXOPAY Payments Intelligence provides you a monitoring and visibility of hybrid infrastructure where your data resides:
     * **IXOPAY Payments Intelligence Ingestion:** Monitor files being directly processed and stored within the IXOPAY Payments Intelligence native environment.
     * **Snowflake Ingestion:** Track the flow of high-volume event data directly into your Snowflake data warehouse, ensuring your external BI tools are perfectly synced with your PSP reports.
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_4.979671d.1600.png)
  4. **Ingestion Logs: Matched vs. Missed**
The Ingestion Logs are your tool for data reliability. By comparing expected data against actual arrivals, IXOPAY Payments Intelligence helps you spot gaps before they impact your financial reporting.
The logs provide a detailed reconciliation table featuring:
     * **Status Toggles:** Quickly filter between Matched (successful) and Missing (failed or delayed) reports.
     * **Baseline vs. Ingested:** The system compares the Baseline (the number of files expected from a PSP on a given date) against the Ingested count. If a baseline shows "2" but ingestion shows "0," you have immediate evidence of a PSP reporting failure.
     * **Comprehensive Metadata:** Every log entry identifies the Processed Date, PSP, File Type (e.g., 3DS Authentication, Dispute), and the specific File Name for easy troubleshooting.
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_5.82ca554.1600.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/IntMon_6.4548ead.1600.png)