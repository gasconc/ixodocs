---
title: Tenants
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup'
tags:
- sub-tenant-configuration-https-documentation-ixopay-com-manual-docs-system-setup-tenants-sub-tenant-configuration-direct-link-sub-tenant-configuration
- adding-sub-tenant-https-documentation-ixopay-com-manual-docs-system-setup-tenants-adding-sub-tenant-direct-link-adding-sub-tenant
- editing-sub-tenant-https-documentation-ixopay-com-manual-docs-system-setup-tenants-editing-sub-tenant-direct-link-editing-sub-tenant
- ixopay
- merchant
source_url: https://documentation.ixopay.com/manual/docs/system-setup/tenants
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * Tenants

# Tenants
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
## Sub-Tenant Configuration[​](https://documentation.ixopay.com/manual/docs/system-setup/tenants#sub-tenant-configuration "Direct link to Sub-Tenant Configuration")
Your company or organization is represented using tenants in the IXOPAY platform. You can structure your organization hierarchically using sub-tenants.
tip
Please note that unlike other entities in the IXOPAY platform, (sub-)tenants cannot be archived.
## Adding a New Sub-Tenant[​](https://documentation.ixopay.com/manual/docs/system-setup/tenants#adding-a-new-sub-tenant "Direct link to Adding a New Sub-Tenant")
To add a new sub-tenant to your setup:
  1. Click **+ New Tenant** in the tenants overview.
  2. Enter the sub-tenant's **name, parent tenant, default currency** and **user password validity**.
  3. Click **Create Tenant**.

The newly created sub-tenant is displayed in the tenants overview where it can be edited further.
![Tenants overview](https://documentation.ixopay.com/manual/assets/ideal-img/tenants-overview.3eb558f.1280.png)Tenants overview![Creating a sub-tenant](https://documentation.ixopay.com/manual/assets/ideal-img/creating-a-sub-tenant.442610a.782.png)Creating a sub-tenant
## Editing a Sub-Tenant[​](https://documentation.ixopay.com/manual/docs/system-setup/tenants#editing-a-sub-tenant "Direct link to Editing a Sub-Tenant")
To edit a sub-tenant in your setup:
  1. Click **Edit** in the tenants overview for the sub-tenant you want to edit.
  2. Make the desired changes in the tenant settings and click **Save Tenant**.

Available sections are
**Tenant Data** :
  * **Tenant name**
  * **Parent tenant**
  * **Default Currency**
  * **Login Disabled**

**Settings** :
  * **User password validity (months)**
  * **Redirect From Merchant Login to Admin Login** (toggle on/off)
  * **Mandatory merchant fields**
  * **Default Layout (**[**Pay-By-Link**](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink)**)**
  * **Send Confirmation Mail to Customer (Pay-By-Link)** (toggle on/off)

[**Mail Settings**](https://documentation.ixopay.com/manual/docs/system-setup/tenants/mail-settings)
![Tenant settings](https://documentation.ixopay.com/manual/assets/ideal-img/tenant-settings.aa29669.1280.png)Tenant settings
note
If you enable the **Login Disabled** option, all users are prevented from accessing the tenant and any merchants under this tenant. It does not prevent transactions from taking place.
Additional Tenant Editing Options
  * [Roles](https://documentation.ixopay.com/manual/docs/system-setup/roles)
  * [Users](https://documentation.ixopay.com/manual/docs/system-setup/user)
  * [Job Schedule](https://documentation.ixopay.com/manual/docs/post-processing/jobs)
  * [Contacts](https://documentation.ixopay.com/manual/docs/system-setup/service-contacts)

note
Keep in mind that settings (e.g. **Mail Settings**) are inherited from the parent entity, unless they are overridden.