---
title: User Management and Notifications
summary: ' User Management and Notifications'
tags:
- user-notification-management-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-user-management-notifications-user-notification-management-direct-link-user-notification-management
- role-types-summary-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-user-management-notifications-role-types-summary-direct-link-role-types-summary
- account-settings-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-user-management-notifications-account-settings-direct-link-account-settings
- ixopay
- psp
- merchant
- congrify
- dashboard
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications
portal: ixopay-modules
updated: '2026-11-23'
related: []
---

* Platform
  * User Management and Notifications

# User Management and Notifications
In the IXOPAY Payments Intelligence (formerly Congrify) app, you can not only personalize your views and dashboards but also self-manage your user profile, security settings, and account access.
  * Personalize your User profile and manage access through passwords and 2-Factor Authentication (refer to the detailed setup guide for 2FA in the [Security](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/security) document)
  * Set preferences for timezone, currency, change comparison and choose between the common understanding of terms (for e.g. tracking gross sales vs. net-sales) to customize the analytics and deliver the most meaningful insights by default.
  * Notifications and alerts are available on the dashboard which inform the managed Users of scheduled platform maintenance, scheduled custom alerts and other analytical updates on your payments data so that your team can be updated with the latest insights on the IXOPAY Payments Intelligence platform.

## User and Notification management[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#user-and-notification-management "Direct link to User and Notification management")
  1. Navigate to the 'Users and Notifications' tab under your User profile as an Administrator
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_1.4e38863.1600.png)
  2. Add new users to your account by clicking on ‘+ Invite New User’ button, and inserting their email address and assigning a role based access as 'Merchant User' (i.e. providing read and limited write access to the IXOPAY Payments Intelligence analytics platform) and/ or as an 'Administrator' (i.e. extended account, connection and credentials management). The new Users are notified over email and can then access their User profile on IXOPAY Payments Intelligence to further personalize their User profile with their name, profile photo, and employee designation.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_2.54fb3fe.1600.png)
  3. As a privileged Administrator in the Users tab, you can search and view the current details, access rights (including toggling temporary access as an 'active’ user), user status (including MFA onboarding) and activity details of your onboarded team, and further manage their role-based access rights through the User Management page.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_3.8be598d.1513.png)
  4. Under the Notifications tab, you can also individually control the notifications, alerts and updates pushed to each User in the IXOPAY Payments Intelligence app and external 3rd party (such as Slack) channels.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_4.bba5c45.1600.png)

## Role Types Summary[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#role-types-summary "Direct link to Role Types Summary")  
| Role Type  | Role Permissions  |  
| --- | --- |  
| Owner  | Is the owner of the account. When registering an account with IXOPAY Payments Intelligence, the first user is automatically assigned as an Owner. The Owner can see all functionalities and settings in IXOPAY Payments Intelligence and is the only user that cannot be deleted. If you need to delete yourself as an owner, please contact the support team.  |  
| Admin  | Has all the accesses in the platform to access user ('Merchant Users') management including access rights, manage connection credentials, set merchant settings, etc.  |  
| Merchant User  | Is the user profile who has access to the reporting, visualization and analytical data features of the IXOPAY Payments Intelligence platform, with limited personal management of user profile, settings, etc.  |  
## Account Settings[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#account-settings "Direct link to Account Settings")
  1. Customize your preferences for timezone, currency, decimal precision, default common terminology, change comparison, PSP groupings, analytics value mappings and default theme directly through your 'Account Settings' under your User tab.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_5.9a8121c.1600.png)
  2. As part of the account settings changes, you can also set the default rate calculations for Fees and other relevant KPIs basis ‘Sales' or ‘Net Sales’ (as denominators). Further, you can also toggle the rate calculations directly on the 'Analytics’-> Fees page to re-compute and compare such rates in real-time.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_6.8a5d3f2.1600.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_7.b6bc8ca.1600.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_8.e634345.1600.png)
  3. You can also toggle visibility of changes in aggregated data on the dashboard and analytics pages. By default, the changes are computed on the same time-period directly preceding the selected time (i.e. 'Previous Period'), however, as a User, you can select custom change time-periods directly on each dashboard or analysis page to compare your payments data aggregated over different selected time periods vs change period through the UI (i.e. 'Custom Range').
    1. First, toggle change computation through the User tab → Account Settings, selecting ‘Show Changes’ under 'Change Comparison'.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_9.2ba63d7.1600.png)
    2. On the dashboard, the percentage increase or decrease of the data point (i.e. 'change’) should now be visible.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_10.fc3cd6a.1600.png)
    3. You can further configure the comparison periods for the 'change' computation by selecting the time window for previous period or custom range, directly on the dashboard.
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_11.2f49d1f.1600.png)
  4. You can select the default value mappings when analyzing relevant KPIs and dimensions (such as Card Types, Payment Methods, reason codes, etc.) in the Analytics section, by selecting 'Original' (i.e. value provided originally by the PSP), 'Mapped' (i.e. value unified in post-processing by [IXOPAY](https://www.ixopay.com)), and 'IXOPAY' (i.e. enriched values mapped by IXOPAY).
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_12.da8c5f8.1600.png)
In addition to the default settings, these mapping views can also be directly updated in the Analytics section while selecting the relevant group-by dimensions (for e.g. Card Type in the example screenshot).
![](https://documentation.ixopay.com/modules/assets/ideal-img/UserMN_13.e9f03e7.1600.png)

  * [User and Notification management](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#user-and-notification-management)
  * [Role Types Summary](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#role-types-summary)
  * [Account Settings](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/user-management-notifications#account-settings)