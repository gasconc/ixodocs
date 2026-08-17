---
title: Alerts
summary: The IXOPAY Payments Intelligence formerly Congrify platform enhances your
  payments awareness and decision-making through customizable real-time alerts, which
  can be configured and viewed on the IXOPAY Payments Intelligence platform in the
  'Alerts' tab. These Alerts can also integrated to your prefer
tags:
- creating-alerts-rules-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-alerts-creating-alerts-rules-direct-link-creating-alerts-rules
- creating-alerts-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-alerts-creating-alerts-direct-link-creating-alerts
- editing-alerts-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-alerts-editing-alerts-direct-link-editing-alerts
- 3ds
- ixopay
- chargeback
- merchant
- congrify
- observability
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/alerts
portal: ixopay-modules
updated: '2026-08-17'
related: []
---

* Observability
  * Alerts

# Alerts
The IXOPAY Payments Intelligence (formerly Congrify) platform enhances your payments awareness and decision-making through customizable real-time alerts, which can be configured and viewed on the IXOPAY Payments Intelligence platform (in the 'Alerts' tab). These Alerts can also integrated to your preferred communication channels such as Slack or e-mail (sent to authorized Users or mailing lists), so that you and your team are notified in real-time of every critical update, alert or payment insights.
You can navigate to your Alerts either through the 'Alerts' icon at the top right, which provides a snapshot of unread alerts and pre-chargeback actions pending your attention, or by clicking on the Alerts → Custom tab on the sidebar.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_1.0d4e8dd.1600.png)
In this Alerts tab, you can click on each individual alert for additional details as per the configured Alert rules (refer next sub-heading for creating Alerts), which can then be marked as read to keep only the most current and relevant Alerts in your view.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_2.2af7ff4.1600.png)
## Creating your Alerts through Rules[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/alerts#creating-your-alerts-through-rules "Direct link to Creating your Alerts through Rules")
To create Alerts, navigate to the Rules section of the Alerts tab
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_3.aeff237.1600.png)
On this page, you can view your created Custom Alerts, and recommended Alerts pre-configured by IXOPAY Payments Intelligence which can be toggled on/ off and further personalized - for your monitored area/ data fields, metric thresholds for triggering alerts, notification channel integrations, etc.
### 1. Creating new Alerts[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/alerts#1-creating-new-alerts "Direct link to 1. Creating new Alerts")
To create a new custom Alert, click on the ‘Create new alert rule’ button on the Alert → Rules page.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_4.f1514e1.1600.png)
  1. In the first section ‘Define your Alert', you can add the title and description of your Custom Alert for context, along with the slack channel where the Alert will be posted (should be an existing '#slackchannel’, otherwise leave blank to post to the default Alerts slack channel set in the User Settings by Owner/ Admin). For guidance on setting up Slack integration, including email notifications, refer to [Merchant Settings](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#integrating-slack-as-a-notification-channel).
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_5.5676aeb.1600.png)
  2. In the second section ‘Define your alert rules’, you can select an ‘area’ to monitor, for e.g. Fees in the example below (or select authorizations, chargebacks, declines, VAMP, Sales and refunds, 3DS authentications, etc.) and corresponding metric for e.g. Count of Fees or Fee Rates can be selected for Fee area, but each area has their own relevant metrics to monitor. Please note you can only select a single area and metric combination in a single alert.
Further, you can choose to aggregate your Alert trigger basis aggregation fields for e.g. Merchant Account and Merchant region in the example below. You can choose 0 or multiple aggregation fields basis your alert monitoring requirements. In addition to the aggregation fields, you can also specify 1 or more of your merchant accounts for additional granularity to monitoring and notification of the Alert to relevant User groups within your company (for e.g. to ensure that alert metrics for only specific merchant account in US is monitored and notification sent to the relevant slack channel for the US payments).
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_6.f853273.1600.png)
  3. In the third section, you can configure the sensitivity thresholds for triggering the alert on the selected metric, for e.g. in the example below, where the fee increases by 5% over the previous 7 day period, the alert would be triggered. In addition to the sensitivity threshold, you can apply additional filters to your data (such as fee type in the example below, or other data fields applicable). In this section, you can also configure the timeframes to be monitored (last day, week or month), and event counts to trigger the alert.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_7.cf8b752.1600.png)

After reviewing the Alert rules and ensuring the mandatory fields (marked with *asterisk) are filled, click on 'Save' to create and enable your Custom Alert which would be immediately visible on the Alert → Rules page.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_8.0027c22.1600.png)
### 2. Editing your Alerts[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/alerts#2-editing-your-alerts "Direct link to 2. Editing your Alerts")
You can edit your custom alerts by clicking on the ‘Edit’ button on the Alert you want to edit.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_9.55173da.1600.png)
At the ‘Edit alert rule' pop-up tab, you can edit all the parameters of your Custom Alert, similar to creating an alert except the 'area’ and 'metrics' (for e.g. the Fee and Fee Count in the example) which can be saved for future Alert executions.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_10.bf6bf1e.1600.png)
**Enabling notifications for each User** - Refer to [User Management and Notifications](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#user-and-notification-management) where the Owner/Merchant Admin can individually toggle the Custom Alerts for each Merchant User.
**Slack notifications** - In the slack channel as configured while creating your Alert, the IXOPAY Payments Intelligence Business Alert app creates a timely alert visible to all channel members (for e.g. VAMP volume by merchant account in the example below)
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_11.c21faf2.1552.png)
**E-mail notifications** - In addition to the slack channel notifications, you can also configure email Alerts for Merchant Users (for e.g. the email Alert created for the fee spike below)
![](https://documentation.ixopay.com/modules/assets/ideal-img/Alerts_12.f520fdf.958.png)