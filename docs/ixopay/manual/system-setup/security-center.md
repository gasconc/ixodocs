---
title: Security Center
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup  Security
  Center'
tags:
- security-settings-https-documentation-ixopay-com-manual-docs-system-setup-security-center-security-settings-direct-link-security-settings
- country-restrictions-https-documentation-ixopay-com-manual-docs-system-setup-security-center-country-restrictions-direct-link-country-restrictions
- audit-log-export-https-documentation-ixopay-com-manual-docs-system-setup-security-center-audit-log-export-direct-link-audit-log-export
- api
- ixopay
- merchant
source_url: https://documentation.ixopay.com/manual/docs/system-setup/security-center
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * Security Center

# Security Center
warning
Changes to these settings are applied immediately!
Use this section to configure **Security Settings** , as well as create **Audit Log Exports** for your tenant (incl. sub-tenants).
![Security Center](https://documentation.ixopay.com/manual/assets/ideal-img/security-center.d28a759.1280.png)Security Center
## Security Settings[​](https://documentation.ixopay.com/manual/docs/system-setup/security-center#security-settings "Direct link to Security Settings")
Use the **Security Settings** tab to configure **Country Restrictions** and **IP Restrictions** , **Enforce Two Factor Authentication** or define session timeouts.
### Country and IP Restrictions[​](https://documentation.ixopay.com/manual/docs/system-setup/security-center#country-and-ip-restrictions "Direct link to Country and IP Restrictions")
Use the **Country Restrictions** option to either allow or deny access to your [IXOPAY platform](https://www.ixopay.com) tenant from specific countries.
You can also block specific regions under **Additionally always block these regions**. Selected regions are always blocked regardless of the settings under **Country Restrictions**.
![Country Restrictions option](https://documentation.ixopay.com/manual/assets/ideal-img/country-restrictions-option.35eb0fa.520.png)Country Restrictions option
Depending on the selected **IP Restrictions** option, you can either allow or deny access to your IXOPAY platform tenant from specific IP ranges for IP V4 and IP V6.
![IP Restrictions option](https://documentation.ixopay.com/manual/assets/ideal-img/ip-restrictions-option.6f2e76b.610.png)IP Restrictions option
### Other security settings[​](https://documentation.ixopay.com/manual/docs/system-setup/security-center#other-security-settings "Direct link to Other security settings")
Enforce [**2 Factor Authentication**](https://documentation.ixopay.com/manual/docs/administrative-tools/account-settings/two-factor-setup) (2FA) for users accessing the platform by checking the **Enforce Two Factor Authentication (2FA)** checkbox.
You can also set session timeouts (in minutes) for [Admin](https://documentation.ixopay.com/manual/docs/system-setup/user) (**Session Timeout for Admin Interface (in minutes)**) and [Merchant](https://documentation.ixopay.com/manual/docs/connector/users/web) (**Session Timeout for Merchant Interface (in minutes)**) interface users.
The **Auto-deactivation of users who are inactive** setting automatically disables accounts for users who have not logged in within the specified number of days. The allowed range is 30 to 720 days. Inactive users are disabled in the background at regular intervals, not immediately after saving the setting.
![Other security settings](https://documentation.ixopay.com/manual/assets/ideal-img/other-security-settings.7eb4f09.603.png)Other security settings
info
The **Enforce 2 Factor Authentication** , **Session Timeout** and **Auto-deactivation of users who are inactive** options do not apply to [API Users](https://documentation.ixopay.com/manual/docs/connector/users/api).
## Audit Log Export[​](https://documentation.ixopay.com/manual/docs/system-setup/security-center#audit-log-export "Direct link to Audit Log Export")
Switch to the **Audit Log Export** tab to create, download and delete user management audit logs (see Audit Log Export overview screenshot).
To create a new audit log export:
  1. Click on **New Audit Log Export** and select **+ User Management**.
  2. Define filters to restrict the data that is exported (see Export Filters screenshot):
    1. **Tenant:** If no tenant is selected, the current tenant including all sub-tenants is included in the report.
    2. **Merchant:** If no merchant is selected, all merchants assigned to the selected tenant are included in the report. Multi-merchant access: Only users created for the selected merchant are included in the report.
    3. **User type: All, Admin, Merchant (API), Merchant (Web)**.
    4. **Date Rang:** Select the date range to export. **Audit logs are archived after 2 years; the range should not be further than 2 years in the past.**
  3. Click on **Generate** to create the report.

The report is created and displayed on the Audit Log Export tab. You can **Download** or **Delete** the audit log from here.
![Audit Log Export overview](https://documentation.ixopay.com/manual/assets/ideal-img/audit-log-export-overview.f471e85.1280.png)Audit Log Export overview![Export Filters](https://documentation.ixopay.com/manual/assets/ideal-img/export-filters.399195f.1280.png)Export Filters
File retention
Files are retained for 12 months and permanently deleted thereafter.