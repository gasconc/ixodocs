---
title: Account Updater
summary: ' Account Updater'
tags:
- account-updater-permissions-https-documentation-ixopay-com-manual-docs-tokenization-account-updater-ixopay-account-updater-permissions-direct-link-account-updater-permissions
- configuring-account-updater-per-merchant-https-documentation-ixopay-com-manual-docs-tokenization-account-updater-merchant-configuration-direct-link-configuring-account-updater-per-merchant
- excluding-connector-account-updater-https-documentation-ixopay-com-manual-docs-tokenization-account-updater-connector-configuration-direct-link-excluding-connector-account-updater
- account-updater-reports-update-details-https-documentation-ixopay-com-manual-docs-tokenization-account-updater-reporting-direct-link-account-updater-reports-update-details
- post-processing-update-fee-count-calculation-https-documentation-ixopay-com-manual-docs-tokenization-account-updater-post-processing-update-fee-count-calculation-direct-link-post-processing-update-fee-count-calculation
- api
- tokenization
- ixopay
- acquirer
- settlement
source_url: https://documentation.ixopay.com/manual/docs/tokenization/account-updater
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* [Tokenization](https://documentation.ixopay.com/manual/docs/tokenization)
  * Account Updater

# Account Updater
Full version: add-on
If you want to get access to this [IXOPAY platform](https://www.ixopay.com) feature you need an add-on to your plan. Please contact our sales team or your Customer Success Manager for more information.
By using the [IXOPAY](https://www.ixopay.com) Account Updater, businesses are able to maintain accurate account information, and reduce the fees associated with transactions that are declined for the below reasons:
  * Card expired
  * New account number
  * Re-issued card

This is done via automatic updates of the cards stored in the IXOPAY platform Vault. The IXOPAY Account Updater can be used for MasterCard, Visa, and Discover cardholder accounts and includes updates due to changes to card account numbers and expiration dates or re-issued cards, mergers, portfolio flips, and upgrades. The IXOPAY Account Updater does not support change of address or AVS.
Users will be able to see how many cards have been updated in the [Dashboard](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets) as well as detailed overview in the Account Updater List.
note
The Account Updater is only available in the Production environment.
## Account Updater Permissions[​](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#ixopay-account-updater-permissions "Direct link to Account Updater Permissions")
To be able to setup the feature, the permission must be enabled for your tenant and activated for your [Admin User Role](https://documentation.ixopay.com/manual/docs/system-setup/roles). This will be done by you Customer Success Manager for you.
![Permission Admin User](https://documentation.ixopay.com/manual/assets/ideal-img/permission-admin-user.857c169.1280.png)Permission Admin User
## Configuring the Account Updater per Merchant[​](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#merchant-configuration "Direct link to Configuring the Account Updater per Merchant")
Once activated for the admin user role, the IXOPAY Account Updater can be configured per merchant. The following parameters have to be configured:
  1. In the Merchant Overview click on **Edit** for the Merchant you want to configure the IXOPAY Account Updater for
  2. Enable the **IXOPAY Account Updater** (see Image Merchant Details)

For an overview of all enrolled Merchants for the IXOPAY Account Updater, navigate to the section **Tokenization** sub-section **Account Updater** (see Overview enrolled Merchants). You can either use the **Tenant Filter** or **Filter** to narrow down your search. Select **Details** to find the [Account Update List](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#reporting).
The following information updates are included for register, debit + register and preauth + register transactions (also prior to activation) of all Creditcard Connectors of this Merchant:
  * **Account Number updated** - The account number was changed
  * **Account closed** - The account was closed; Card needs to be deregistered by merchant!
  * **Expiry Date updated** - The expiration date was changed
  * **Contact cardholder for update** - The cardholder needs to be contacted for updated information by merchant!

Only for cards where one of the above events is true, updates will included in the Account updater list Additional configuration on (Creditcard) connector level can be done in order to exclude Connectors from the Account updater.
![Merchant Overview](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-overview.1ad3f09.1280.png)Merchant Overview![Merchant Details](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-details.ae3c387.1280.png)Merchant Details![Overview enrolled Merchants](https://documentation.ixopay.com/manual/assets/ideal-img/overview-enrolled-merchants.4d43859.1280.png)Overview enrolled Merchants
note
Disabled and archived Connectors are included in the IXOPAY account updater. Make sure to exclude these connectors individually if no updates are desired for these Connectors.
Connectors which have Test Mode enabled and Adapter Simulator are NOT included at all in the IXOPAY account updater.
## Excluding a Connector from the Account Updater[​](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#connector-configuration "Direct link to Excluding a Connector from the Account Updater")
Want to exclude the IXOPAY Account Updater for several connectors? Use our Global connector settings feature as described [here](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings).
To exclude the **IXOPAY Account Updater** for a connector, follow this steps:
  1. Go to the Connectors Overview on the configured merchant and click **Edit**
  2. In the section **Settings** click on **Edit** (see Connector Details View)
  3. Search for the **Account Updater: Exclude connector from Updates** and click **+Add** (see Image Select Setting)
  4. Set the value to **1** (see Image Setting configured) and click **Save**

After configuration all cards from register, debit+register and preauth+register transactions (also prior to activation) will not be included in the monthly update runs in order to be compared to the scheme information.
![Connector overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-overview.78ba70a.1280.png)Connector overview![Connector Detail View](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-view.d21f231.1280.png)Connector Detail View![Setting configured](https://documentation.ixopay.com/manual/assets/ideal-img/setting-configured.8939168.1148.png)Setting configured
note
Keep in mind that the IXOPAY Account Updater can only update cards where the Acquirer is providing the update information to the scheme network. Furthermore update information can take up to 5 days.
## Account Updater Reports and Update Details[​](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#reporting "Direct link to Account Updater Reports and Update Details")
We have created a widget, providing a complete overview of the cards that have been updated. You can update your Dashboard with the widget **Updated Cards** as described [here](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets/edit-mode) (see Dashboard Widget).
![Dashboard Widget](https://documentation.ixopay.com/manual/assets/ideal-img/dashboard-widget.1f75f03.1280.png)Dashboard Widget
For each send batch the current **Status** can be seen in the overview. Clicking on **Details** (see Update Details) shows a list of all updated information
  * **Account Number updated** - The account number was changed
  * **Account closed** - The account was closed; Card needs to be deregistered by merchant!
  * **Expiry Date updated** - The expiration date was changed
  * **Contact cardholder for update** - The cardholder needs to be contacted for updated information by merchant!

in this batch as well as the related Register Transaction UUID. Additionally, for the updates a postback notification will be sent. For further details have a look in the
[API Documentation](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification)
![Overview enrolled Merchants](https://documentation.ixopay.com/manual/assets/ideal-img/overview-enrolled-merchants.4d43859.1280.png)Overview enrolled Merchants![Account Update List](https://documentation.ixopay.com/manual/assets/ideal-img/account-update-list.2ce131d.1280.png)Account Update List![Update Details](https://documentation.ixopay.com/manual/assets/ideal-img/update-details.a2ece55.1280.png)Update Details
note
Keep in mind, that if no update is available, the card respective related Register Transaction will not show up in the Details View.
Full version: not available for Starter and Growth clients
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
## Post Processing — Update Fee and Count Calculation[​](https://documentation.ixopay.com/manual/docs/tokenization/account-updater#post-processing--update-fee-and-count-calculation "Direct link to Post Processing — Update Fee and Count Calculation")
The IXOPAY Post Processing Engine enables Update Fee and Count Calculation. The following parameters have to be configured:
  1. Set up a [Fee Entity](https://documentation.ixopay.com/manual/docs/system-setup/fee-entities) for Update Fees
  2. Create a [Merchant Line Item](https://documentation.ixopay.com/manual/docs/merchant/profiles/line-items), configured with the created **Fee Entity** from 1. and **Amount**
  3. Create a new [Job Type](https://documentation.ixopay.com/manual/docs/system-setup/job-configuration) including
    1. the Processing Step **Calculate Account Updater Count and Fees** , configured with the created **Fee Entity** from 1. and including the **Line Item Type**
    2. the Exporting Step **Write customized Settlement CSV,** configured with the **Aggregated Columns** — **accountUpdaterCount** and **Line Item** from 3.a.
  4. Create a new [Job Schedule](https://documentation.ixopay.com/manual/docs/system-setup/job-configuration) with Schedule **On Account Update**

![Merchant Line Item](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-line-item.193bec8.1280.png)Merchant Line Item![Processing Step - Calculate Account Updater Count and Fees](https://documentation.ixopay.com/manual/assets/ideal-img/processing-step-calculate-account-updater-count-and-fees.197d4aa.1280.png)Processing Step - Calculate Account Updater Count and Fees![Exporting Step - Write customized Settlement CSV](https://documentation.ixopay.com/manual/assets/ideal-img/exporting-step-write-customized-settlement-csv.21692dd.1280.png)Exporting Step - Write customized Settlement CSV![Create Schedule On Account Update](https://documentation.ixopay.com/manual/assets/ideal-img/create-schedule-on-account-update.bfe502f.986.png)Create Schedule On Account Update