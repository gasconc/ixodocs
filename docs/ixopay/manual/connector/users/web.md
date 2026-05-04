---
title: Web User
summary: ' Create Users Web & APIhttps://documentation.ixopay.com/manual/docs/connector/users  Web
  User'
tags:
- video-web-user-https-documentation-ixopay-com-manual-docs-connector-users-web-video-web-user-direct-link-video-web-user
- users-https-documentation-ixopay-com-manual-docs-connector-users-web-users-direct-link-users
- edit-web-users-https-documentation-ixopay-com-manual-docs-connector-users-web-edit-web-users-direct-link-edit-web-users
- permissions-https-documentation-ixopay-com-manual-docs-connector-users-web-permissions-direct-link-permissions
- merchant-user-access-https-documentation-ixopay-com-manual-docs-connector-users-web-merchant-user-access-direct-link-merchant-user-access
- multi-merchant-access-https-documentation-ixopay-com-manual-docs-connector-users-web-multi-merchant-access-direct-link-multi-merchant-access
- api
- tokenization
- ixopay
- recurring
source_url: https://documentation.ixopay.com/manual/docs/connector/users/web
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Create Users (Web & API)](https://documentation.ixopay.com/manual/docs/connector/users)
  * Web User

# Web User
## Video: Web User[​](https://documentation.ixopay.com/manual/docs/connector/users/web#video-web-user "Direct link to Video: Web User")
![](https://documentation.ixopay.com/manual/assets/ideal-img/preview-vimeo-web-user.68a3809.1300.png)
Create a new Web User.
tip
User access is possible from all common web browsers (incl. mobile devices). Mobile device support however is limited regarding performing administrative functions (e.g. Post-Processing, Fast Editor).
Grant your Merchant User access to the payment platform and enable them to visualize their Transactions directly and easily.
There are different options to navigate to the (Merchant) User Overview:
  1. Select **Users** in the drop down menu of the breadcrumb path for the selected Merchant (available in different views of this Merchant)
  2. Open the drop down menu by clicking **More** for the desired Merchant and select **Users** (Global Merchant Overview)

In the (Merchant) User Overview you can add and edit Users with access to the related Merchant Profile.
![Merchant Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-details-overview.394a300.1280.png)Merchant Details Overview![Global Merchant Overview](https://documentation.ixopay.com/manual/assets/ideal-img/global-merchant-overview.d4c36fb.1280.png)Global Merchant Overview
## Add New Users[​](https://documentation.ixopay.com/manual/docs/connector/users/web#add-new-users "Direct link to Add New Users")
  1. Click **+ New User** in the (Merchant) User Overview.
  2. Enter required and optional **Base Data** for the User (see Create User):
    1. **username** ,
    2. **first name -** optional, recommended for Web Users
    3. **last name -** optional, recommended for Web Users
    4. **email address**
  3. Select the **User Type** - Web to enable Web Interface, see section [API User](https://documentation.ixopay.com/manual/docs/connector/users/api) for User Type API.
  4. Either type in a **Password** or click **Generate** for [IXOPAY](https://www.ixopay.com) to create a random one.
    1. For Web User you can as well select **Send e-mail with link to reset the password** for the User to receive a mail to reset the password (reset password link validity is 24 hours with exception of the setup link for a newly created user which is valid for 7 days).
  5. Select the **User Role** or [**Permissions**](https://documentation.ixopay.com/manual/docs/connector/users/web#permissions) you would like to assign to this User. For instance you can allow the User to enter entries on the Blocklist or Allowlist, to see Transactions, modify payment templates, etc…)
  6. Valid your entries and confirm the User creation with **+ Create User** (Create User).

Depending on the selected User Type different configuration options are available when editing the User.
![\(Merchant\) User Overview](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-user-overview.429adc7.1280.png)(Merchant) User Overview![Create User](https://documentation.ixopay.com/manual/assets/ideal-img/create-user.a9c7cc2.1280.png)Create User
info
The following password criteria must be fulfilled:
  * At least 12 characters required
  * Includes a lower case character
  * Includes a upper case character
  * Includes a number
  * Includes a special character

In case you want to assign a [User Role](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings) to your User, make sure to create the Role before you create your User.
## Edit Web Users[​](https://documentation.ixopay.com/manual/docs/connector/users/web#edit-web-users "Direct link to Edit Web Users")
After having created a User you will be redirected to the Edit View for this user to add additional configurations. Furthermore you have the option to update and upgrade the abilities of the created User anytime by clicking **Edit** for the User in the (Merchant) User Overview.
  1. **Disabled** : Checkbox to disable the user. This action prevents immediate access to the platform for this user after saving (see Edit Web User)
  2. **Settings** :
    1. Enable Fee AP
    2. Enable Push API - Setting to allow access to the [Push API](https://documentation.ixopay.com/api/push/push-api)
    3. Enable CDE Login,
    4. Enable Snapshot Retrieval
  3. [**Multi Merchant Access**](https://documentation.ixopay.com/manual/docs/connector/users/web#multi-merchant-access) Enables your User to get access to multiple Merchant profiles within your payment platform and the possibility to manage, edit and visualize several Merchants.
    1. Click **+ Add Merchant Access**
    2. Select among the list the Merchant profile and click **+ Add**
  4. **Two-Factor Authentication** : enable 2FA authentication
  5. Enable/Disable **Reset Dashboard**
  6. Enable/Disable **Archived** : Archives this user. You can undo the archiving in the Archived Users section (see Archived (Merchant) Users)
  7. Click **Save User** to save the changes and confirm changes (see Confirmation)

In order to review exactly what your User will be able to visualize and has access to, Admin Users can click **Login with User** and be logged in to the Web Users Platform View (see (Merchant) User Overview).
![\(Merchant\) User Overview](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-user-overview.429adc7.1280.png)(Merchant) User Overview![Edit Web User](https://documentation.ixopay.com/manual/assets/ideal-img/edit-web-user.3c66162.1280.png)Edit Web User![Confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/confirmation.378cd00.990.png)Confirmation![Archived \(Merchant\) Users](https://documentation.ixopay.com/manual/assets/ideal-img/archived-merchant-users.ffc0da6.1280.png)Archived (Merchant) Users
caution
The URL to the Merchant's login page differs from your login page as an Admin User:
  * 
  * instead of 

note
The available configuration parameters dependent on the enabled Permissions per Tenant. If you want to get access to all IXOPAY features please contact your Customer Success Team or our Sales Team for more information.
## Permissions[​](https://documentation.ixopay.com/manual/docs/connector/users/web#permissions "Direct link to Permissions")
By default the (Merchant) Web User has access to the Dashboard (e.g. as configured as Default Merchant Dashboard by an Admin User). Depending on the Tenant Permission the Permissions available for (Merchant) Web Users might differ.
Find the list of available Permissions for Web Users:
![Available Permissions](https://documentation.ixopay.com/manual/assets/ideal-img/available-permissions.1084595.330.png)Available Permissions  
| Permission  | Description  |  
| --- | --- |  
| dashboard.payout-forecast  | Access to Projected Payout section in the Financial Summery section  |  
| dashboard.financial-summary  | Access to the Financial Summary section  |  
| transaction.adapter-txid-visible  | Show Adapter TxID in the transaction view  |  
| transaction.detailed-fees  | Enables the detailed fee section in the transaction view  |  
| transaction.data-export  | Access to Data Export subsection in Transactions section  |  
| transaction.refund  | Enable option to refund a debit transaction in the transaction view  |  
| transaction.risk-check-result  | Enables the detailed Risk-based data section in the transaction view  |  
| transaction.capture  | Enables option to capture a preauthorize transaction in the transaction view  |  
| transaction.settlement-state  | Access to the Settlement status section in the transaction view  |  
| transaction.void  | Enables option to void a preauthorize transaction in the transaction view  |  
| transaction.show  | Access Transaction section in sidebar  |  
| transaction.adapter-auth-code-visible  | Show Adapter Auth Code in the transaction view  |  
| transaction.resend-postback  | Possibility to resend postbacks for transactions in the transaction view  |  
| transaction.show-chargeback  | Enables option to create a manual chargeback in the transaction view  |  
| transaction.hide-chargeback-menu  | Hides the chargeback options for the User  |  
| virtual-terminal.GSTCalculation  | Enables the option to generate GST fees via Virtual Terminal (see [Surcharge - GST Fee](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge))  |  
| virtual-terminal.register  | Enables the option to register a customer via the Virtual Terminal  |  
| virtual-terminal.use  | Access to the Virtual Terminal section in sidebar  |  
| virtual-terminal.pay-by-link  | Access to the Pay By Link functionality in the Virtual Terminal  |  
| virtual-terminal.payment-details  | Enables the option to include payment details via the Virtual Terminal  |  
| virtual-terminal.surcharge  | Enables the option to enter a surcharge via the Virtual Terminal  |  
| virtual-terminal.surchargeCalculation  | Enables the option to generate GST fees via Virtual Terminal (see [Surcharge - GST Fee](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge))  |  
| show-connectors.real-connectors  | Show connectors in Connector section  |  
| show-connectors.meta-connectors  | Show meta connectors in the Connector section  |  
| blacklist.edit  | Enables Blocklist to be edited  |  
| blacklist.show  | Access to Blocklist section in sidebar  |  
| blacklist.show-admin-values  | Show Blocklist values set on tenant level  |  
| postprocessing.documents  | Access to Invoicing & Settlement section  |  
| schedule.cancel  | Cancel a schedule  |  
| schedule.continue  | Continue a schedule  |  
| schedule.pause  | Pause a schedule  |  
| schedule.retry  | Retry a schedule  |  
| schedule.show  | Access to Schedule section  |  
| schedule.start  | Create a new schedule in the Schedule  |  
| whitelist.edit  | Enables Whitelist to be edited  |  
| whitelist.show  | Access to Whitelist section in sidebar  |  
| whitelist.show-admin-values  | Show Whitelist values set on tenant level  |  
| customer-profiles.delete  | Enables deletion of a customer profile in the profile details view  |  
| customer-profiles.deregister-and-detach  | Enables Detach & Deregister option of payment instruments in profile details view  |  
| customer-profiles.detach  | Enables Detach option of payment instruments in profile details view  |  
| customer-profiles.prefer  | Enables Prefer option of payment instruments in profile details view  |  
| customer-profiles.show  | Show section Customer Profiles  |  
| customer-profiles.transactions  | Access to the profile transactions in the profile details view  |  
| customer-profiles.update  | Enables editing of a customer profile in the profile details view  |  
| users.create  | Create a new user on merchant level  |  
| users.edit  | Edit user in Users section  |  
| users.index  | Access to Users section in sidebar  |  
| users.reset-password  | Enables Merchant Web Users to reset the Password for Merchant API users  |  
| user.roles.edit  | Enable Merchant Web Users to change the User Role of a Merchant User (see also [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings))  |  
| user.roles.show  | [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings)  |  
| statistics.show  | Access to Statistics section in sidebar  |  
Merchant User adds another Merchant User
You can give a Merchant User the permission to add another Merchant User, instead of asking the Admin User to do that.
In order to be able to do this the Merchant User needs to have the following permissions
![Merchant User Create/Edit/Index permissions](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-user-create-permissions.7b84637.494.png)Merchant User Create/Edit/Index permissions
info
To ensure compliance to Access, Roles and Right Guidelines and changes on the [IXOPAY platform](https://www.ixopay.com) setup are sufficiently reviewed, 4 eyes confirmation can be configured (see [Admin User Roles](https://documentation.ixopay.com/manual/docs/system-setup/roles))
## Merchant User Access[​](https://documentation.ixopay.com/manual/docs/connector/users/web#merchant-user-access "Direct link to Merchant User Access")
After the logging in, the [Dashboard](https://documentation.ixopay.com/manual/docs/administrative-tools/dashboard-widgets) is displayed, a customizable view of all relevant transactions, providing insights about today’s, yesterday’s and monthly Counts & Volumes of the users Merchants or Connectors.
The IXOPAY platform interface is structured into 3 areas also for Merchant Users:
  * **Top Bar** : Provides access to Account Settings (2FA setup, change password, log out) from the drop-down menu at the top right, which also provides access to the Dashboard. Users have the option to switch languages.
  * **Main menu** : Used to navigate between areas in IXOPAY, e.g. to manage transactions or customer profiles.
  * **Main Frame** : Displays the details for the current area.

In comparison to the Admin User, Merchant User have slightly different sections, depending also on the enabled [Permissions](https://documentation.ixopay.com/manual/docs/connector/users/web#permissions) (see Merchant User Interface):
  * **Financial Summary** : Merchant Users can check the financials of the individual Connectors of the Merchant(s) for the previous 6 months and projected payouts (filterable according to Connectors). Optionally the Payout Forecast can be shown (see Financial Summary)
  * **Statistics:** Merchant Users can be granted access to the [Pivot Table](https://documentation.ixopay.com/manual/docs/statistics/pivot-table) section, a useful feature to visualize and export data as needed.
  * **Customer Profiles:** Merchant User can be granted access to the [Customer Profiles](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles) of Customer Profile Containers attached to Connectors of selected Merchant(s).
  * **Connectors:** Merchant User can be granted access to Meta- and individual Connectors to check the Connectors Base Data (e.g. for integration purposes) (see Connectors Overview and Connector Details)
  * **Transactions** : Merchant User can be granted access to the [Transaction List](https://documentation.ixopay.com/manual/docs/transactions/overview), predefined filtered lists regarding transaction status are available as well (**Successful, Failed, Pending**) (see Transaction List). Further access to [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details) is available as well, but with different available **Details** and **Action Options** , depending on the Permissions (see Transaction Details).
  * **Data Export** : Merchant User can be granted access to the Data Export, to export transaction data in CSV and XLSX format. Files are retained for 7 days and permanently deleted thereafter (see Data Export).
  * **Blocklist / Allowlist** : Merchant Users can be granted access to the Merchant(s)'s Block- and Allowlist in order to see or edit entries made by Admin User. Depending on the permission also additional Block- / Allowlist items can be added.
  * **Virtual Terminal** : Authorizes and charges the Customer's payment instrument through manual capture of payment details (MOTO - Mail Order / Telephone Order) for Merchant Users (see Virtual Terminal).
  * **Invoicing & Settlements**: Enables Merchant Users to have access to the [Merchant Settlements](https://documentation.ixopay.com/manual/docs/post-processing/jobs/examples) created by [Post Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs) within the IXOPAY platform.
  * **Schedules** : Merchant Users can be granted access to the [Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules) section to automate recurring charges based on individually configurable schedules (see Schedules).
  * **Users** : Dependent on the Merchant Users [Permissions](https://documentation.ixopay.com/manual/docs/connector/users/web#permissions) the User Overview enables them to create and edit other Merchant Users (see Users).

![Merchant User Interface](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-user-interface.8c0f14a.1280.png)Merchant User Interface![Financial Summary](https://documentation.ixopay.com/manual/assets/ideal-img/financial-summary.0440e95.1280.png)Financial Summary![Statistics](https://documentation.ixopay.com/manual/assets/ideal-img/statistics.8fd9341.1280.png)Statistics![Customer Profiles](https://documentation.ixopay.com/manual/assets/ideal-img/customer-profiles.4ba310d.1280.png)Customer Profiles![Connectors Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connectors-overview.e8d38d4.1280.png)Connectors Overview![Connector Details](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details.22036d1.1280.png)Connector Details![Transaction List](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-list.14c4333.1280.png)Transaction List![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details.55f6bc3.1280.png)Transaction Details![Data Export](https://documentation.ixopay.com/manual/assets/ideal-img/data-export.686b37b.1280.png)Data Export![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.7aa2fcd.1280.png)Virtual Terminal![Schedules](https://documentation.ixopay.com/manual/assets/ideal-img/schedules.69ee6fc.1280.png)Schedules![Users](https://documentation.ixopay.com/manual/assets/ideal-img/users.434435f.1280.png)Users
tip
User access is possible from all common web browsers (incl. on mobile devices). Mobile devices support is limited.
## Multi Merchant Access[​](https://documentation.ixopay.com/manual/docs/connector/users/web#multi-merchant-access "Direct link to Multi Merchant Access")
In some cases, a Merchant Web User needs to have access to more then one Merchant. This can be achieved with adding **Multi Merchant Access** (see section Edit Web Users).
After saving the configuration the User will be able to switch between the Merchants, when logged in.
![Multi Merchant Access](https://documentation.ixopay.com/manual/assets/ideal-img/multi-merchant-access.b806b4e.456.png)Multi Merchant Access