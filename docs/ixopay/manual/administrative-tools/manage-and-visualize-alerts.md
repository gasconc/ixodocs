---
title: Manage and Visualize Alerts
summary: ' Administrative Toolshttps://documentation.ixopay.com/manual/docs/administrative-tools  Manage
  and Visualize Alerts'
tags:
- ixopay
- chargeback
- transaction
- merchant
- reconciliation
- dashboard
source_url: https://documentation.ixopay.com/manual/docs/administrative-tools/manage-and-visualize-alerts
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Administrative Tools](https://documentation.ixopay.com/manual/docs/administrative-tools)
  * Manage and Visualize Alerts

# Manage and Visualize Alerts
The [IXOPAY platform](https://www.ixopay.com) notifies Admin users when their attention is required. **Alerts** and **notifications** show up directly on the Dashboard or can be sent via email.
In the **Alert settings** section you can enable notifications for your user and decide how you would prefer to be informed (e.g. directly on the Dashboard and/ or via email - bundled emails). The IXOPAY platform differentiates between different notification categories: **General, Conflicts, Risk Management, Reconciliation, Scheduler, Chargeback & Chargeback Reversal, Job Conflict and Failed Postback**. Setting for each category can be configured individually. To change your alert settings:
  1. Click the **Bell** icon in the top bar (see Alert Settings) to open the drop-down
  2. Click the **Gear** icon to navigate to the **Alert Settings** (Notification Categories)
  3. Edit the individual categories by:
    1. **Enable** **notification:** Enable to get notifications directly in your Dashboard
    2. **Enable Email:** Enable to get notifications via email
    3. **Collect Email for** : Enable bundled emails for the selected time in minutes
    4. **For Sub-Tenants too** : Enable your Sub-Tenant to receive notifications
    5. **Merchant Filter** : Refine your settings by subscribing to selected Merchant alerts. Options to choose from:
      1. **Subscribe to all Merchants**
      2. **Subscribe to specific Merchants only** : Click **Edit Allowlist** and select one or more Merchants. (see Subscribe to specific Merchants only and Modify Allowlist / Blocklist)
      3. **Subscribe to all except specific Merchants:** Click **Edit Blocklist** to exclude specific Merchants (see Subscribe to all except specific Merchants)
  4. Click **Save all changes**

![Alert Settings](https://documentation.ixopay.com/manual/assets/ideal-img/alert-settings.93fefa7.280.png)Alert Settings![Notification Categories](https://documentation.ixopay.com/manual/assets/ideal-img/notification-categories.0821a13.1280.png)Notification Categories![Subscribe to specific Merchants only](https://documentation.ixopay.com/manual/assets/ideal-img/subscribe-to-specific-merchants-only.69f1acb.1280.png)Subscribe to specific Merchants only![Modify Allowlist / Blocklist](https://documentation.ixopay.com/manual/assets/ideal-img/modify-allowlist-blocklist.43b4cf0.848.png)Modify Allowlist / Blocklist![Subscribe to all except specific Merchants](https://documentation.ixopay.com/manual/assets/ideal-img/subscribe-to-all-except-specific-merchants.66552b2.1280.png)Subscribe to all except specific Merchants
To visualize and analyze the notifications/ conflicts select **Show all** from the drop-down under the bell icon**.** You’ll be redirected to the **Alert Overview**. This list includes all alerts that need your particular attention.
  1. **Date/ Time** : Transaction time
  2. **Type** : Alert category (e.g. Risk Management)
  3. **Merchant** : The merchant who initiated the transaction
  4. **Connector** : The connector used to process the transaction
  5. **Transaction** : UUID and Transaction type
  6. **Amount** : The transaction amount
  7. **Message** : Reason why the alert was sent (e.g. due to various Risk checks)
  8. **Menu** : Enable to **Pin** an alert, or mark a transaction as **dismiss** , **ignore** or **resolve**

![Manage and visualize alerts](https://documentation.ixopay.com/manual/assets/ideal-img/manage-and-visualize-alerts-4.ee162ae.1280.png)Manage and visualize alerts