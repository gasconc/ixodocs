---
title: Dashboard Widgets
summary: ' Administrative Toolshttps://documentation.ixopay.com/manual/docs/administrative-tools  Dashboard
  Widgetshttps://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets  Dashboard
  Widgets'
tags:
- video-create-edit-dashboard-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-video-create-edit-dashboard-direct-link-video-create-edit-dashboard
- view-dashboard-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-view-dashboard-direct-link-view-dashboard
- global-filters-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-global-filters-direct-link-global-filters
- change-dashboard-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-change-dashboard-direct-link-change-dashboard
- refresh-emphasize-data-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-refreshemphasize-data-direct-link-refresh-emphasize-data
- fullscreen-mode-https-documentation-ixopay-com-manual-docs-administrative-tools-dashboard-widgets-dashboard-widgets-fullscreen-mode-direct-link-fullscreen-mode
- 3ds
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Administrative Tools](https://documentation.ixopay.com/manual/docs/administrative-tools)
  * [Dashboard Widgets](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets)
  * Dashboard Widgets

# Dashboard Widgets
The dashboard provides an overview of your processed transactions. It offers various filters and widgets, allowing you to customize the overview and monitor your transactions in near realtime.
note
Please note that data in the dashboard is refreshed periodically and **not in realtime,** as opposed to other views in the [IXOPAY platform](https://www.ixopay.com) (e.g. Transaction List).
For example, a transaction may still appear in the state pending (3DS redirect), although the transaction has already been completed successfully.
## Video: Create and Edit a Dashboard[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#video-create-and-edit-a-dashboard "Direct link to Video: Create and Edit a Dashboard")
How to create and edit Dashboards and Widgets
## View Dashboard[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#view-dashboard "Direct link to View Dashboard")
User can view the predefined dashboard data, but still have some options to customize the data displayed in the dashboard without editing the dashboard itself. These customizations and filters are generally not saved when reloading the page.
The following options are available to customize the dashboard view:
  * [Global Filters](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#global-filters)
  * [Change Dashboard](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#change-dashboard)
  * [Refresh/Emphasize Data](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#refreshemphasize-data)
  * [Fullscreen Mode](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#fullscreen-mode)

![Adopt Dashboard](https://documentation.ixopay.com/manual/assets/ideal-img/adopt-dashboard.ecb743f.1280.png)Adopt Dashboard![Change Dashboard](https://documentation.ixopay.com/manual/assets/ideal-img/change-dashboard.3bce913.1280.png)Change Dashboard
## Global Filters[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#global-filters "Direct link to Global Filters")
Global filters allow you to define what data should be aggregated and displayed in all dashboard widgets. Filtering can be applied to:
  * **Time ranges** - either by defining a custom range or using **Quick Ranges.** This filter is mandatory.
  * **Tenants, merchants** - you can **Include Sub-Tenants** as well in your filter.
  * **Connectors, adapters** - pre-select a merchant to narrow down connectors.
  * **Methods, types**
  * **Status, testmode**

Using these filter options, you can choose to only display data for a single merchant or a group of merchants, or restrict the data to just a single transaction type (e.g. chargebacks and refunds).
Changes to the global filters are discarded if not saved explicitly. You can restore global filters to the last saved state and remove any optional filters.
![Time Range Filter](https://documentation.ixopay.com/manual/assets/ideal-img/time-range-filter.b04fe0d.934.png)Time Range Filter![Tenant Filter](https://documentation.ixopay.com/manual/assets/ideal-img/tenant-filter.9248e09.966.png)Tenant Filter![Connector Filter](https://documentation.ixopay.com/manual/assets/ideal-img/connector-filter.d3d2a96.1150.png)Connector Filter![Save changes](https://documentation.ixopay.com/manual/assets/ideal-img/save-changes.0ab4759.1280.png)Save changes
## Change Dashboard[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#change-dashboard "Direct link to Change Dashboard")
Switch to a different dashboard by selecting the desired dashboard from the dropdown list at the top of the page. You also have the option to [**Add new Dashboard**](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/edit-mode)**.**
Depending on your permissions, the **Edit Default for Tenant** or **Edit Default for Merchant** options may also be available.
![Change Dashboard](https://documentation.ixopay.com/manual/assets/ideal-img/change-dashboard.3bce913.1280.png)Change Dashboard
## Refresh/Emphasize Data[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#refreshemphasize-data "Direct link to Refresh/Emphasize Data")
By default, the dashboard data is not refreshed, except when applying filters or refreshing manually. Click **Refresh** to get the latest data. You can also select a time interval to auto-refresh the dashboard from the drop-down (see Refresh).
You may also emphasize data for line and pie chart widgets. Hover your cursor over the legend to emphasize the selected data. Select/unselect categories in the legend to display/hide the relevant data.
![Refresh](https://documentation.ixopay.com/manual/assets/ideal-img/refresh.abbde9d.306.png)Refresh![Emphasize](https://documentation.ixopay.com/manual/assets/ideal-img/emphasize.ed6d485.1280.png)Emphasize
## Fullscreen Mode[​](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/dashboard-widgets#fullscreen-mode "Direct link to Fullscreen Mode")
In fullscreen mode, all widgets are expanded to fill the entire screen. You can enter fullscreen in either **Light Mode** or **Dark Mode**
We recommend selecting an auto-refresh interval before switching to fullscreen mode, as otherwise the dashboard will display static data. Usually, fullscreen mode can be exited by pressing **Esc** , but this depends on your browser.
![Fullscreen](https://documentation.ixopay.com/manual/assets/ideal-img/fullscreen.db74cac.1280.png)Fullscreen