---
title: Global Settings
summary: ' Edit Connectorshttps://documentation.ixopay.com/manual/docs/connector/edit  Global
  Settings'
tags:
- global-settings-permissions-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-global-settings-permissions-direct-link-global-settings-permissions
- global-connector-settings-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-global-connector-settings-direct-link-global-connector-settings
- global-routing-profiles-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-global-routing-profiles-direct-link-global-routing-profiles
- manage-connector-aliases-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-manage-connector-aliases-direct-link-manage-connector-aliases
- global-routing-profile-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-global-routing-profile-direct-link-global-routing-profile
- user-roles-https-documentation-ixopay-com-manual-docs-connector-edit-global-connector-settings-user-roles-direct-link-user-roles
- tokenization
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Edit Connectors](https://documentation.ixopay.com/manual/docs/connector/edit)
  * Global Settings

# Global Settings
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
## Global Settings Permissions[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#global-settings-permissions "Direct link to Global Settings Permissions")
Depending on your setup it can make sense to define some settings and conditions globally on tenant level for all your merchants and connectors. At the moment [IXOPAY](https://www.ixopay.com) supports the following global settings:
  * Global Connector Settings
  * Global Routing Profiles
  * (Merchant) User Roles

To be able to setup the feature, the permissions "tenant.globalConnectorSettings", "tenant.globalRoutingProfile" and "merchant.user.roles" must be enabled for your tenant and activated for your Admin User Role (see Permissions Admin User).
![Permissions Admin User](https://documentation.ixopay.com/manual/assets/ideal-img/permissions-admin-user.09def09.1280.png)Permissions Admin User
## Global Connector Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#global-connector-settings "Direct link to Global Connector Settings")
note
Please note that once configured, Global Connector Settings are automatically applied to all existing connectors for this tenant. If you do not want the Global Connector Settings to be applied to certain existing connectors, enable the option **Ignore Global Connector Settings** at the connector level (see the Global settings in connector configuration screenshot) **before** configuring any Global Connector Settings.
Once the permissions are set for your tenant and user, the **Global Connector Settings** section is displayed in the **Merchant Configuration** section (see the Global connector settings screenshot). In the top right corner, choose the tenant for which the global connector settings should be defined. The settings you can define globally are:
  * **Connector Settings** (see also [here](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings))
  * **Risk Profiles** and **Customer Profile Container** - [pre-configured risk profiles](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create) can be selected for connectors, meta-connectors and use in virtual terminal, as well as a [pre-defined customer profile container](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles)
  * **Allowed Transaction Types** - all transaction types are enabled by default
  * **Constraints** - Mandatory Fields and Currencies can be selected

On connector level these settings are shown in the tenant tab and can be ignored for a specific connector by enabling the option **Ignore Global Connector Settings** (see Image Global settings in connector configuration).
![Global connector settings](https://documentation.ixopay.com/manual/assets/ideal-img/global-connector-settings.3872c3c.1280.png)Global connector settings![Global settings in connector configuration](https://documentation.ixopay.com/manual/assets/ideal-img/global-settings-in-connector-configuration.3242923.1280.png)Global settings in connector configuration
note
Keep in mind that the global settings for _allowed transaction types, connector settings and constraints_ **can only be overruled** at the connector level if you enable the option **Ignore Global Connector Settings**. To enhance the global settings per connector simply add the desired _constraints, connector setting_ or _disabled transaction type_ on connector level since the application aggregates the settings from tenant and connector level.
Global settings **can be overruled** for _risk profiles and customer profile container_. If risk profiles are configured at the merchant level, he setting overrules any risk profile at the tenant level for a connector of this merchant. If risk profiles and/or customer profile container are configured at the connector level, the setting overrules any risk profile and/or customer profile container at the tenant level respective merchant level.
note
Risk profiles must be created at the the correct (sub-)tenant level for you to be able to select them as a global setting. Customer profile containers can be shared with sub-tenants to make them available.
## Global Routing Profiles[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#global-routing-profiles "Direct link to Global Routing Profiles")
Once the permissions are set for your tenant and user, the **Global Routing Profile** section is displayed under the **Merchant Configuration** section (see Image Global routing settings). On the upper right choose the tenant for which global routing profiles should be defined. The settings you need to define on a global level are:
  * **Manage Connector Aliases**
  * **New Global Routing Profile**

Since every merchant will probably have a slightly different connector setup, IXOPAY uses aliases to achieve a layer of abstraction. These aliases are used to define global routing profiles to suffice any connector setup you may have. Therefore aliases will be mapped to connectors at the merchant level.
![Global routing settings](https://documentation.ixopay.com/manual/assets/ideal-img/global-routing-settings.f815b98.1280.png)Global routing settings
## Manage Connector Aliases[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#manage-connector-aliases "Direct link to Manage Connector Aliases")
Start by managing connector aliases:
  1. Click on **Manage Connector Aliases**
  2. Click on **+ New Alias** (see Image Adding alias)
  3. Enter an alias name and click **+Create** (see Image Create alias) - Restriction: No blank spaces allowed?

After creation, aliases can be renamed or deleted (see Image Editing aliases). Aliases that are already used in a global routing profile cannot be deleted. If you attempt this, IXOPAY will list the profiles that use it.
![Adding alias](https://documentation.ixopay.com/manual/assets/ideal-img/adding-alias.23df796.1280.png)Adding alias![Create alias](https://documentation.ixopay.com/manual/assets/ideal-img/create-alias.6a034dc.836.png)Create alias![Editing aliases](https://documentation.ixopay.com/manual/assets/ideal-img/editing-aliases.6d0922a.1280.png)Editing aliases
note
Characters that can be used for creating Aliases are:
Uppercase (`A`-`Z`); Lowercase (`a`-`z`); Numerical values (`0`-`9`); and the following special characters: `_`, , `(,` `)`, `[`, `]`, blank space (` `)
After creation, an alias can either be added to an existing connector or selected when creating new connectors.
![Adding alias to existing connector](https://documentation.ixopay.com/manual/assets/ideal-img/adding-alias-to-existing-connector.0e65438.1280.png)Adding alias to existing connector![Selecting alias for new connector](https://documentation.ixopay.com/manual/assets/ideal-img/selecting-alias-for-new-connector.207fbf1.1280.png)Selecting alias for new connector
## New Global Routing Profile[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#new-global-routing-profile "Direct link to New Global Routing Profile")
Start by creating a new Global Routing Profile:
  1. Click on **+ New Global Routing Profile** (see Image Global routing settings).
  2. Enter a Profile Name and click **Save.**
  3. Click on **Configure Rules** (see Image Meta Connector overview).
  4. Configure the Global Routing Profile as needed. The available Routing Conditions are described [here](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback), but instead of routing to a specific connector as an action, **Route To Alias** is also available (see Image Routing configuration). All created aliases are available from the drop down menu.
  5. Click **Save** to return to the Global Routing Profile overview.

After creation, Global Routing Profiles can be renamed or deleted (see Image Global Routing Profil Overview). Keep in mind that deleting profiles might have impact on your connectors.
You can create as many global routing profiles as you like.
![Global routing setting](https://documentation.ixopay.com/manual/assets/ideal-img/new-global-routing-settings.de03a75.1280.png)Global routing setting![Create global routing profile](https://documentation.ixopay.com/manual/assets/ideal-img/create-global-routing-profile.1b10a13.834.png)Create global routing profile![Global Routing Profile Overview](https://documentation.ixopay.com/manual/assets/ideal-img/global-routing-profile-overview.69b43f5.1280.png)Global Routing Profile Overview![Routing configuration](https://documentation.ixopay.com/manual/assets/ideal-img/routing-configuration.bfd1d95.1280.png)Routing configuration
After creation, a Global Routing Profile can either be added to an existing Meta Connector or selected when creating new Meta Connectors. For Multi-Method Meta Connectors a Global Routing Profile can be selected per payment method.
![Adding Global Routing Profile to Meta Connector](https://documentation.ixopay.com/manual/assets/ideal-img/adding-global-routing-profile-to-meta-connector.25bac97.1280.png)Adding Global Routing Profile to Meta Connector![Selecting Global Routing Profile for new Meta Connector](https://documentation.ixopay.com/manual/assets/ideal-img/selecting-global-routing-profile-for-new-meta-connector.d3e901d.1280.png)Selecting Global Routing Profile for new Meta Connector![Adding Global Routing Profile for existing Multi-Method Connector](https://documentation.ixopay.com/manual/assets/ideal-img/adding-global-routing-profile-for-existing-multi-method-connector.dd0dd69.1280.png)Adding Global Routing Profile for existing Multi-Method Connector
## User Roles[​](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings#user-roles "Direct link to User Roles")
Once the permissions are set for your tenant and user the section **User Roles** will appear under the **Merchant Configuration** section (see Image User Roles). In the upper right portion of the screen choose the tenant for which user roles should be created. To create user roles follow these steps:
  1. Click on **New User Role**.
  2. Enter a name and choose the role specific permission (see Image User role details).

Permissions can be granted as described in the [here](https://documentation.ixopay.com/manual/docs/connector/users/web).
![User Roles](https://documentation.ixopay.com/manual/assets/ideal-img/user-roles.62bab23.1280.png)User Roles![User role details](https://documentation.ixopay.com/manual/assets/ideal-img/user-role-details.5a39a7b.1280.png)User role details