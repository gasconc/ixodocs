---
title: Dashboards
summary: IXOPAY Payments Intelligence formerly Congrify empowers businesses with complete
  visibility into their payment ecosystems. By leveraging no-code integrations and
  advanced monitoring tools, companies can track transaction flows, identify bottlenecks,
  and uncover anomalies in real time.
tags:
- dashboards-structure-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-dashboards-structure-direct-link-dashboards-structure
- headers-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-headers-direct-link-headers
- time-selection-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-time-selection-direct-link-time-selection
- filters-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-filters-direct-link-filters
- view-customization-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-view-customization-direct-link-view-customization
- timeseries-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-timeseries-direct-link-timeseries
- charts-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-charts-direct-link-charts
- table-views-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-dashboards-table-views-direct-link-table-views
- 3ds
- 3d-secure
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Observability
  * Dashboards

# Dashboards
IXOPAY Payments Intelligence (formerly Congrify) empowers businesses with complete visibility into their payment ecosystems. By leveraging no-code integrations and advanced monitoring tools, companies can track transaction flows, identify bottlenecks, and uncover anomalies in real time. This ensures optimized performance, reduced downtime, and data-driven insights to stay ahead in the dynamic payments landscape.
The following structure is applied for the out-of-the-box KPI configurations:
## Dashboards structure[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#dashboards-structure "Direct link to Dashboards structure")  
| Tab  | Description  |  
| --- | --- |  
| Main Dashboard  | The main summary dashboard provides a quick snapshot of overall performance with key KPIs displayed prominently after logging in. This offers an at-a-glance view of your payment ecosystem.  |  
| Events  | Comprehensive KPIs across all ingested event types for a holistic view of transaction data. Events here will include extra operations such as Tokenization, cancellations, redirects and payment method specific operations.  |  
| Authorizations  | KPIs organized and filtered by authorization transaction types, allowing for in-depth analysis of conversion rates and authorization performance metrics to drive data-driven decisions.  |  
| Decline Analysis  | Focused insights into declined transactions, enabling users to filter and analyze declines effectively. Gain a deeper understanding of the reasons behind failed transactions to mitigate declines and improve customer experience.  |  
| Sales & Refunds  | Display all your KPIs derived from sales and refund events, providing clear visibility into revenue performance, refund trends, and their impact on overall financial health.  |  
| Chargebacks  | Specialized analysis of disputes by chargeback lifecycle, status, payment method, reason codes countries and much more to uncover patterns and reduce risk.  |  
| Fees  | Analyze the impact of costs on your overall payment setup, including detailed cost allocation at the transactional level. Gain insights into blended vs. interchange++ pricing models to optimize your cost structure and maximize profitability.  |  
| 3D Secure  | Monitoring of 3DS (3D Secure) authentication rates, SCA Challenge Rates, Exceptions and much more.  |  
| VAMP  | Dedicated monitoring for the Visa Acquiring Monitoring Program to track compliance and merchant performance metrics.  |  
## Headers[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#headers "Direct link to Headers")
Dashboards are designed to provide a clear and intuitive overview of key performance metrics.
At the top of each dashboard, you'll find header boxes that display the main KPIs for the selected time period. These KPI values serve as a snapshot of performance, allowing users to quickly gauge important metrics.
What's unique about IXOPAY Payments Intelligence's structure is that these header boxes are dynamic, they automatically update based on the section selected, ensuring that the data aligns with the focus of the dashboard at that moment. This makes it easier for users to drill down into specific areas while maintaining visibility on the most relevant performance indicators.
Right on top of the dashboard, you’ll find “Ask AI Co-pilot” to access the the AI Co-pilot chat and access its capabilities.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_1.eb31612.1600.png)
## Time selection[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#time-selection "Direct link to Time selection")
The time selector in the dashboards provides users with the flexibility to adjust the timeframe for their data analysis. IXOPAY Payments Intelligence considers two key date points to ensure accuracy: the creation date of an event, which marks when the event itself occurred, and the booking date, which reflects when the financial impact was realized. This dual approach allows for a more precise understanding of the data.
By default, all data is normalized and harmonized to UTC to maintain consistency across regions. IXOPAY Payments Intelligence also offers users the ability to select their preferred timezone, ensuring data is viewed in a context that makes the most sense for their location and needs. This customization ensures a more personalized and relevant experience for each user.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_2.80d68a6.1600.png)
## Filters[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#filters "Direct link to Filters")
Dashboards provide the ability to apply filters across all dimensions displayed, offering users a powerful way to narrow down and analyze specific patterns within the data. These filters can be used to focus on particular subsets of information, making it easier to spot trends, compare performance, or drill down into specific metrics.
Users can apply overarching filters that affect the entire dashboard, adjusting the displayed data based on broader criteria. Alternatively, for more detailed analysis, users can apply filters directly within dedicated table views. This flexibility allows for both high-level and granular data exploration, catering to a variety of analytical needs.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_3.b599464.1440.png)
## View customization[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#view-customization "Direct link to View customization")
Dashboards offer a high level of customization, allowing users to tailor the KPIs displayed based on their specific needs. By turning on or off individual KPI dimensions, users have the flexibility to choose which key performance indicators they want to focus on.
This customization ensures that the dashboard presents only the most relevant data for each user, helping them stay focused on the metrics that matter most to their analysis or decision-making. Whether you're monitoring a broad set of KPIs or zooming in on a few specific ones, the ability to adjust the display helps to optimize the dashboard experience.
To create a custom view:
  1. Click on “Default” view button, and then on “create a new view”
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_4.33777d2.1600.png)
  2. Add the name and description, and click on “submit”
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_5.3c55deb.1600.png)
  3. You can now begin customizing your view, enable/disable specific data dimensions, move the orders, order alphabetically, and select or deselect all.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_6.099f44f.1440.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_7.431a209.582.png)

## Timeseries[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#timeseries "Direct link to Timeseries")
Each dashboard includes a timeline series chart that enables users to compare multiple KPIs across different timescales. In each time series you can select multiple KPIs and hide a KPI by clicking on the legend. This feature allows for a dynamic analysis of performance trends over time, with options to view the data on a daily, weekly, or monthly basis.
By adjusting the timescale, users can gain deeper insights into short-term fluctuations, medium-term trends, or long-term patterns, making it easier to identify key shifts or anomalies in the data. This flexibility enhances the ability to perform detailed time-based comparisons, helping users make more informed decisions.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_8.bcf5765.1600.png)
## Charts[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#charts "Direct link to Charts")
A variety of chart types to visualize data effectively are offered. By default, dimensions are displayed using histogram charts, which provide a clear view of data distributions and comparisons across categories.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_9.40a17e6.1600.png)
However, users have the flexibility to switch these histograms into time series charts, allowing for a time-based analysis of trends and performance over time. This ability to toggle between chart types ensures that users can choose the most suitable visualization for their specific analysis, enhancing both clarity and depth of insights.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_10.e51d50c.1540.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_11.242f16d.1538.png)
## Table Views[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/dashboards#table-views "Direct link to Table Views")
To enable a deeper dive into the data, IXOPAY Payments Intelligence offers detailed table views. These views allow users to explore the data in more granular detail, whether in an aggregated table format or a timeline view.
The table view presents data in a structured layout, helping users quickly compare values across different dimensions or time periods.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_12.2146ad8.1600.png)
For a clearer understanding of trends and comparisons over time, users can switch to the timeline view, which visualizes the data chronologically. This combination of table and timeline views enhances the ability to analyze patterns, uncover insights, and make data-driven decisions with a comprehensive perspective.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_13.3931d68.1600.png)
You can also see the timeline view as a chart.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_14.ab7ce8d.1596.png)
If you want to add or remove dimensions, click on the edit icon, then apply the changes.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_15.524c1f6.674.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_16.f801477.1600.png)
For a full screen view, click on the Maximize button.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_17.9743583.1004.png)
Click on the three dots button if you want to see related transactions, export the table, or share the link.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Dashboards_18.35ac45a.1024.png)