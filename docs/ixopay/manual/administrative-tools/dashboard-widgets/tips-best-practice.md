---
title: Dashboard Tips & Best Practice
summary: ' Administrative Toolshttps://documentation.ixopay.com/manual/docs/administrative-tools  Dashboard
  Widgetshttps://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets  Dashboard
  Tips & Best Practice'
tags:
- create-multiple-dashboards-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-create-multiple-dashboards-direct-link-create-multiple-dashboards
- override-global-filters-carefully-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-override-global-filters-carefully-direct-link-override-global-filters-carefully
- change-widget-titles-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-change-widget-titles-direct-link-change-widget-titles
- share-dashboards-templates-team-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-share-dashboards-templates-team-direct-link-share-dashboards-templates-team
- calculation-algorithms-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-calculation-algorithms-direct-link-calculation-algorithms
- trends-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-trends-direct-link-trends
- pie-chart-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-pie-chart-direct-link-pie-chart
- table-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-table-direct-link-table
- world-map-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-tips-best-practice-world-map-direct-link-world-map
- ixopay
source_url: https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* [Administrative Tools](https://documentation.ixopay.com/manual/docs/administrative-tools)
  * [Dashboard Widgets](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets)
  * Dashboard Tips & Best Practice

# Dashboard Tips & Best Practice
In general, there are no rules on how to structure or use dashboards. However, the following sections covers some best practices and ways of avoiding common pitfalls.
## Create Multiple Dashboards[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#create-multiple-dashboards "Direct link to Create Multiple Dashboards")
The [IXOPAY platform](https://www.ixopay.com) supports multiple dashboards. This allows you to create dashboards for different purposes by leveraging global filters.
For example, you can set up one dashboard for monitoring your overall sales statistics (successful transactions of the type authorize and debit), another fraud related dashboard for monitoring the chargeback rate of credit cards, another dashboard for monitoring transactions for one of your key customers, etc.
Try to avoid creating giant dashboards with dozens of widgets, covering all aspects of your company. Important KPIs may get lost in the clutter and performance may suffer due to the number of widgets.
## Override Global Filters Carefully[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#override-global-filters-carefully "Direct link to Override Global Filters Carefully")
One common mistake is overriding global filters extensively. While there are valid reasons for doing so, overriding global filters can come with a range of disadvantages.
  * The data in individual widgets will no longer allow for meaningful comparisons if each widget it displaying data over different time ranges, methods and transaction types.
  * Editing the global filter once and seeing the changes reflect by the entire dashboard is more convenient than editing each widget individually.

Instead of overriding global filters, try to group widgets with common filters in their own dashboard.
## Change Widget Titles[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#change-widget-titles "Direct link to Change Widget Titles")
When adding a widget, we recommend renaming the widget to something meaningful. This clearly communicates what the widget is visualizing. Short names are sufficient ("Top Merchants", "Top Methods", "Total Tx Today"), but adding information about any applied filters too ("Success Tx Count 30 Days", "Chargeback Rate - Current Week", "Failed Tx Today") may be helpful. Users should not need to guess what a widget is displaying - meaningful names will save them from having to investigate the applied filters.
## Share Dashboards Templates with your Team[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#share-dashboards-templates-with-your-team "Direct link to Share Dashboards Templates with your Team")
Multiple users are often interested in the same report (sales, chargeback rate, decline rate etc.) Rather than have each user set up their own dashboards, which is cumbersome and error-prone, define common enterprise-wide dashboards and make them accessible to your colleagues. These dashboards can be altered anytime (if the user has the necessary permissions) and any changes are visible to all users. Users can also clone shared dashboards and modify them for their own purposes.
## Calculation Algorithms[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#calculation-algorithms "Direct link to Calculation Algorithms")
### Trends[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#trends "Direct link to Trends")
Trend Widgets indicate the **development of a rate, count or amount** of transactions of specific type or state in the configured period. The rate/amount is calculated therefore using the count/total amount of transactions of the specified type or state divided by the count of captured transactions (debit/capture). Count simply counts the transaction of a specific type or state.
Take for example the Compare Chargeback Rate:
The arrow indicates the Trend of the rate in the configured period and compares it to the previous configured period (e.g. if you view the dashboard for the last month, it compares the same figure with the previous month). If the chargeback rate is higher than in the previous period, the arrow will become red, if it decreases, it will become green to indicate negative respective positive development. The rate is calculated by dividing the count of chargebacks by the count of debit/capture transactions (captured transactions).
tip
The color coding of arrows can be configured in the dashboard widget **(Lower value is better)**
![](https://documentation.ixopay.com/manual/assets/images/lower-value-is-better-97add16d773bc8a588dd638a4ed888be.png)
#### Line Charts and Single Numbers[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#line-charts-and-single-numbers "Direct link to Line Charts and Single Numbers")
Depending on the chosen Single Number or Line Chart you have different options to customize the Dashboard Widget to optimize the information.
  * **Show Totals** to include the total number in the Widgets legend
  * **Calculate Net Volume** and **Convert foreign currencies**
  * **Accumulation Interval** and **Adjust previous period to match same weekday/hour**

![Line Chart Widgets](https://documentation.ixopay.com/manual/assets/ideal-img/line-chart-widgets.0151259.1280.png)Line Chart Widgets![Single Number Widgets](https://documentation.ixopay.com/manual/assets/ideal-img/single-number-widgets.757f0b6.1280.png)Single Number Widgets![Line Chart: Transaction Count by Status](https://documentation.ixopay.com/manual/assets/ideal-img/line-chart-transaction-count-by-status.3fc1bd1.924.png)Line Chart: Transaction Count by Status![Line Chart: Total Transaction Amount](https://documentation.ixopay.com/manual/assets/ideal-img/line-chart-total-transaction-amount.8909b69.922.png)Line Chart: Total Transaction Amount![Line Chart: Transaction Count by Status](https://documentation.ixopay.com/manual/assets/ideal-img/line-chart-cumulative-transaction-count-comparison.6fcd948.924.png)Line Chart: Transaction Count by Status
### Pie Chart[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#pie-chart "Direct link to Pie Chart")
For Pie Chart you have different options to customize the Dashboard Widget to optimize the information.
  * **Count *** (to limit the number of segments) and **Show Other**

![Pie Chart Widgets](https://documentation.ixopay.com/manual/assets/ideal-img/pie-chart-widgets.658f1d1.1280.png)Pie Chart Widgets![Pie Chart: Transactions by Tenant](https://documentation.ixopay.com/manual/assets/ideal-img/pie-chart-transactions-by-tenant.54ad270.946.png)Pie Chart: Transactions by Tenant
### Table[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#table "Direct link to Table")
For Table Charts you have different options to customize the Dashboard Widget to optimize the information.
  * **Top (x) Merchants**
  * **Visible Data -** Count&Volume, Only Count, Only Volume
  * **Show Other** and **Show Sum**
  * **Order by** - Count, Volume
  * **Calculate Net Volume** and **Convert foreign currencies**

![Table Widgets](https://documentation.ixopay.com/manual/assets/ideal-img/table-widgets.b9a7630.1280.png)Table Widgets![Table Widgets: Transactions by Tenant](https://documentation.ixopay.com/manual/assets/ideal-img/table-transactions-by-tenant.eae6651.936.png)Table Widgets: Transactions by Tenant
### World Map[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/tips-best-practice#world-map "Direct link to World Map")
For World Map you have the option to customize the Dashboard Widget to optimize the information by selecting **which country** should be displayed - Billing country or card country.
![World Map Widget](https://documentation.ixopay.com/manual/assets/ideal-img/world-map-widget.5528baf.1280.png)World Map Widget