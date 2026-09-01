---
title: Data Explorer
summary: ' Data Explorer'
tags:
- aggregated-data-exploration-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-data-explorer-aggregated-data-exploration-direct-link-aggregated-data-exploration
- visualize-data-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-data-explorer-visualize-data-direct-link-visualize-data
- saving-custom-tables-charts-widgets-custom-board-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-data-explorer-saving-custom-tables-charts-widgets-custom-board-direct-link-saving-custom-tables-charts-widgets-custom-board
- raw-data-table-exploration-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-data-explorer-raw-data-table-exploration-direct-link-raw-data-table-exploration
- ixopay
- transaction
- merchant
- congrify
- observability
- dashboard
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/data-explorer
portal: ixopay-modules
updated: '2026-09-01'
related: []
---

* Observability
  * Data Explorer

# Data Explorer
The Data Explorer is IXOPAY Payments Intelligence (formerly Congrify)’s powerful, no-code engine for complex data analysis. It empowers you to perform deep-dive SQL-like exploration of your payment data without writing a single line of SQL code. By transforming complex database schemas into an intuitive table and visual interface, you can move from raw data to aggregations to actionable insights in seconds.
To start, navigate to the 'Data Explorer' tab on the left sidebar of the IXOPAY Payments Intelligence platform.
![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_1.fc42330.1600.png)
## 1. Aggregated Data Exploration[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/data-explorer#1-aggregated-data-exploration "Direct link to 1. Aggregated Data Exploration")
The Aggregation mode allows you to distill millions of transaction events into meaningful summaries. You can configure complex queries through a simple step-by-step parameter panel:
  * **Selecting Data Tables:** Begin by choosing your foundational data source, such as transaction events, fees, or chargebacks.
  * **Aggregations on Attributes:** Define your metrics by selecting numerical fields (e.g. payment amounts) and applying functions like Sum, Count, Avg, Min, Max, or relative percentages. You can stack multiple aggregations to view various KPIs simultaneously.
  * **Group By:** Organize your results by specific dimensions. For example, grouping by 'payment methods' allows you to see the performance of PayPal vs. ApplePay vs. Card Payments at a glance.
  * **Filter Results:** Refine your data set using advanced logical operators (AND/OR). You can filter by specific merchant accounts, card products, or status codes using intuitive conditions like "Is," "Is not," "Exists," or "Not exists."
  * **Creating Tables by Time-Frame:** Use the global date picker to define specific ranges (e.g., Mar 10 – Apr 9, 2026) and select the specific UTC date field (for e.g. ingested on, processed on) for your analysis window.
  * **Other Settings:** Customize the final output by setting default sort orders (Ascending/Descending) based on your chosen fields and setting limits to viewed data in tables.

![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_2.612a424.1600.png)
### Visualize your data[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/data-explorer#visualize-your-data "Direct link to Visualize your data")
With a single click, toggle between Table and Chart views. The platform instantly converts your aggregated data into visual representations, such as bar charts, to help identify trends and outliers more effectively.
![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_3.f6d2b53.1600.png)
### Saving custom tables/ charts as Widgets on your Custom Board[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/data-explorer#saving-custom-tables-charts-as-widgets-on-your-custom-board "Direct link to Saving custom tables/ charts as Widgets on your Custom Board")
With the 'Save as New Widget' button, you can transform any custom table or chart into a permanent fixture on your personal dashboard. By saving your configurations as widgets to 'My Boards,' you eliminate the need to manually rebuild complex queries. Whether it’s a high-level trend chart or a granular data table, your most vital metrics are preserved and updated in real-time, providing a powerful at-a-glance overview of your payment operations.
![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_4.e166ccc.1600.png)
When saving the widget, you can select a name, description and target Board where it will be accessible in the future.
![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_5.c6c00b7.1600.png)
Now, your custom data-table or visualization of your payments data/ KPIs can be accessed at any time through the Boards section on the IXOPAY Payments Intelligence platform. The widget will be automatically updated for the time-frame selected in the top-right corner of your Board (applicable on the entire Board unless exception is configured on the widget).
![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_6.7396e09.1600.png)
## 2. Raw Data Table Exploration[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/data-explorer#2-raw-data-table-exploration "Direct link to 2. Raw Data Table Exploration")
For granular forensic analysis, the Raw Table mode provides an un-aggregated view of every individual transaction record.
  * **Parameter Configuration:** Instead of metrics and groupings, the Raw Table interface allows you to select all or specific Fields (columns) you wish to display.
  * **Search & Forensic Drill-Down:** Use the integrated search bar to find specific records by card products, BIN, Merchant Account, or transaction ID.
  * **Global Filters:** Even in raw mode, you can apply the same sophisticated filtering logic and time-frame constraints used in the aggregation engine to isolate specific transaction behaviors or technical anomalies across your entire payment ecosystem.

![](https://documentation.ixopay.com/modules/assets/ideal-img/DataExplorer_7.fc179a7.1600.png)