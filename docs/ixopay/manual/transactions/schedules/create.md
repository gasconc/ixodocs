---
title: Create a Schedule
summary: ' Transaction Scheduleshttps://documentation.ixopay.com/manual/docs/transactions/schedules  Create
  a Schedule'
tags:
- create-schedule-https-documentation-ixopay-com-manual-docs-transactions-schedules-create-create-schedule-direct-link-create-schedule
- create-schedule-registration-https-documentation-ixopay-com-manual-docs-transactions-schedules-create-create-schedule-registration-direct-link-create-schedule-registration
- create-schedule-virtual-terminal-https-documentation-ixopay-com-manual-docs-transactions-schedules-create-create-schedule-virtual-terminal-direct-link-create-schedule-virtual-terminal
- alert-settings-schedules-https-documentation-ixopay-com-manual-docs-transactions-schedules-create-alert-settings-schedules-direct-link-alert-settings-schedules
- api
- ixopay
- recurring
- capture
- void
- credit-card
source_url: https://documentation.ixopay.com/manual/docs/transactions/schedules/create
portal: ixopay-manual
updated: '2026-06-22'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules)
  * Create a Schedule

# Create a Schedule
note
In order to be able to create a new schedule for a register transaction, make sure the Connector processing the transactions is configured to be **Available for Schedule** (see [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create))
## Create a new Schedule[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#create-a-new-schedule "Direct link to Create a new Schedule")
New schedules for transactions can either be created via API (see our [Schedule API documentation](https://documentation.ixopay.com/docs/reference/features/scheduler)) or via the User Interface.
To create a new schedule in the User Interface, follow these steps:
  1. Navigate to the **Schedules Overview**
  2. Click **+ New Schedule.** You can decide, wether you want to create a new schedule using an **existing Registration ID** (Transaction UUID of a Register) or the **Virtual Terminal**.

![Schedules Overview](https://documentation.ixopay.com/manual/assets/ideal-img/schedules-overview.a721d51.1280.png)Schedules Overview![New Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/new-schedule.d44cd69.928.png)New Schedule
### Create a Schedule with Registration ID[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#create-a-schedule-with-registration-id "Direct link to Create a Schedule with Registration ID")
  1. Fill in a **Registration ID** (Transaction UUID of a Register Transaction)
  2. Fill in an **Amount** and select a **Currency** for the recurring debit transactions (follow-up transactions)
  3. Select a **Start Date Time (UTC)** for the schedule. The first recurring debit (follow-up transaction) will be initiated for this date and time.
  4. Define the schedule interval (Period Length and Period Unit) for the recurring debits (follow-up transactions). After each interval the next transaction will be initiated (see [Pause, Continue, Retry or Cancel](https://documentation.ixopay.com/manual/docs/transactions/schedules/pause-continue-retry-cancel) for options to edit a schedule)
    1. **Period Length**
    2. **Period Unit** - Day, Week, Month, Year.
  5. Click **+ Create** to save your schedule

A schedule confirmation with the **Schedule ID** and **Scheduled at date** will be shown and the schedule will appear in the Schedule Overview.
![Create schedule with Registration ID](https://documentation.ixopay.com/manual/assets/ideal-img/create-schedule-with-registration-id.8eedc4f.830.png)Create schedule with Registration ID![Schedule Confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-confirmation.fddcf3b.1198.png)Schedule Confirmation
info
Keep in mind that for recurring debits the defined interval (Period Length and Period Unit) is scheduled based on the last processed transaction. If for any reason the processing of a transaction initiated by the schedule is delayed in regards to the initial defined Start Date Time, the next transaction initiated by this schedule will be delayed too.
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
### Create a Schedule with Virtual Terminal[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#create-a-schedule-with-virtual-terminal "Direct link to Create a Schedule with Virtual Terminal")
note
In order to be able to create a new schedule for a register transaction using the Virtual Terminal, make sure the Connector processing the transactions is configured to be **Available on Terminal** (see [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create)).
You will get redirected to the **Virtual Terminal** section of the IXOPAY platform where you can select the
  1. **(Sub-)Tenant**
  2. **Merchant**
  3. **Connector**

to be used create a new schedule for a register transaction and click **Virtual Terminal or** [**Pay By Link**](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink), depending if you want to create a payment link for the customer. Fill in the necessary parameters for the schedule to be created in the **Scheduler Form** :
  1. [Transaction](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#transaction)
  2. [Credit Card](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#credit-card)
  3. [Additional Transaction Data](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#additional-transaction-data)
  4. [Start Schedule](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#start-schedule)
  5. [Customer](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer)
  6. [Additional Customer Data](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#additional-customer-data)
  7. [Customer Billing Data](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer-billing-data)
  8. [Customer Shipping Data](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer-shipping-data)
  9. [Items](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#item)

Click **Reset Form** to reset the form and enter different values or **Choose another Connector** to get back to the (Sub-)Tenant, Merchant, Connector selection page.
![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.834b14f.1280.png)Virtual Terminal![Scheduler Form Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/scheduler-form-virtual-terminal.863f5f1.1280.png)Scheduler Form Virtual Terminal![Scheduler Form Pay By Link](https://documentation.ixopay.com/manual/assets/ideal-img/scheduler-form-pay-by-link.d01daba.1280.png)Scheduler Form Pay By Link
#### Transaction[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#transaction "Direct link to Transaction")
In this section you can configure Transaction Details regarding the scheduled Transaction (see Transaction Table).
![Transaction ID automatically generated](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-id-automatically-generated.c9161ec.1280.png)Transaction ID automatically generated![Is Recurring](https://documentation.ixopay.com/manual/assets/ideal-img/is-recurring.0a07626.1280.png)Is Recurring  
| Field  | Description  |  
| --- | --- |  
| Transaction Type  | Select a Transaction Type for the scheduled transaction: Debit, Preauthorize, Capture, Void, Register, etc..  |  
| Amount  | Fill in an amount  |  
| Currency  | Select a currency  |  
| Description  | Fill in an optional description  |  
| Transaction ID automatically generated  | If enabled a Transaction ID will be automatically generated. To manually enter a Transaction ID disable this option.  |  
| Is Recurring (Virtual Terminal only)  | Enable this option in case the scheduled transaction is recurring (not applicable for all transaction types). You can choose between the options **With Register** (First Transaction of Recurring Payments) and **Use Registration** (Follow-up Transaction of Recurring Payments). In case of Use Registration a **Registration ID** must be provided (Transaction UUID of a Register Transaction) and the Credit Card section will be hidden.  |  
| With Register (First Transaction of Recurring Payments) (Pay By Link only)  | Enable the option **With Register** (First Transaction of Recurring Payments)  |  
#### Credit Card[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#credit-card "Direct link to Credit Card")
In this section you can fill in the Creditcard Details regarding the scheduled Transaction (see Creditcard Table). This section is hidden in the Pay By Link Scheduler Form.
![Credit Card](https://documentation.ixopay.com/manual/assets/ideal-img/credit-card.6c35222.1280.png)Credit Card  
| Field  | Description  |  
| --- | --- |  
| First Name  | First Name of Cardholder  |  
| Last Name  | Last Name of Cardholder  |  
| Card Number  | Creditcard number  |  
| CVV  | Creditcard CVV  |  
| Month  | Expiry month of creditcard  |  
| Year  | Expiry year of creditcard  |  
#### Additional Transaction Data[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#additional-transaction-data "Direct link to Additional Transaction Data")
In this section you can fill in the Additional Transaction Data (optional) regarding the scheduled Transaction (see Additional Transaction Data Table).
![Additional Transaction Data](https://documentation.ixopay.com/manual/assets/ideal-img/additional-transaction-data.8e1b98b.1280.png)Additional Transaction Data  
| Field  | Description  |  
| --- | --- |  
| Language  | Select a language  |  
| Additional ID 1  | Fill in an Additional ID 1  |  
| Additional ID 2  | Fill in an Additional ID 2  |  
| Extra Data  | Fill in additional Key-Value Extra Data pairs. Add new Extra Data lines by selecting **+ Add Line**  |  
| Merchant Meta Data  | Fill in additional Merchant Meta Data (not availalable by default)  |  
#### Start Schedule[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#start-schedule "Direct link to Start Schedule")
In this section you can fill in the Details regarding the Schedule itself (see Start ScheduleTable).
![Start Schedule](https://documentation.ixopay.com/manual/assets/ideal-img/start-schedule.b3e062d.1280.png)Start Schedule![Start Date Time](https://documentation.ixopay.com/manual/assets/ideal-img/start-date-time.7f885ae.1280.png)Start Date Time
info
For debit transactions the Start Date Time **must be greater** than 24 hours from the schedule creation, otherwise the request will fail because the period between the initial and the follow-up transaction **must be** greater than 24 hours.
Keep in mind that for recurring debits the defined interval (Period Length and Period Unit) is scheduled based on the last processed transaction. If for any reason the processing of a transaction initiated by the schedule is delayed in regards to the initial defined Start Date Time, the next transaction initiated by this schedule will be delayed too.
![Create Schedule: Invalid Period](https://documentation.ixopay.com/manual/assets/ideal-img/create-a-schedule-invalid-period.6592a8b.1280.png)Create Schedule: Invalid Period  
| Field  | Description  |  
| --- | --- |  
| Schedule Action  |  **None** is set per default. To define a schedule, select **Start Schedule**  |  
| Schedule Amount  | Fill in an amount for the scheduled transaction(s)  |  
| Schedule Currency  | Select a currency for the scheduled transaction(s)  |  
| Period Length  | Fill in a Period Length. The interval between recurring transactions will be defined by the period length and unit  |  
| Period Unit  | Select a Period Unit: Day, Week, Month or Year. The interval between recurring transactions will be defined by the period length and unit  |  
| Start Date Time  | Select a Start Date Time (UTC) for the first scheduled transaction  |  
#### Customer[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer "Direct link to Customer")
In this section you can fill in Customer Details regarding the scheduled Transaction (see Customer Table).
![Customer](https://documentation.ixopay.com/manual/assets/ideal-img/customer.fc48056.1280.png)Customer  
| Field  | Description  |  
| --- | --- |  
| First Name  | Fill in the Customer First Name  |  
| Last Name  | Fill in the Customer Last Name  |  
| Identification  | Fill in the mandatory Identification ID for the Customer  |  
| Email  | Fill in the Customer Email  |  
| Email Verified  | Enable if the Customer Email is verified  |  
#### Additional Customer Data[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#additional-customer-data "Direct link to Additional Customer Data")
In this section you can fill in additional optional Customer Details (see Additional Customer Data Table).
![Additional Customer Data](https://documentation.ixopay.com/manual/assets/ideal-img/additional-customer-data.e970fd0.1280.png)Additional Customer Data
| Field | Description |
| ----------- | --------------------------------------------------------------------------------------------------- | | Birth Date | Fill in the Customers Birth Date in the format YYYY-MM-DD | | Gender | Select optional **Male** or **Female** | | Company | Fill in the Customers Company | | National ID | Fill in the National ID | | Extra Data | Fill in additional Key-Value Extra Data pairs. Add new Extra Data lines by selecting **+ Add Line** |
#### Customer Billing Data[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer-billing-data "Direct link to Customer Billing Data")
In this section you can fill in additional optional Customer Billing Details (see Customer Billing Data Table).  
| Field  | Description  |  
| --- | --- |  
| Address 1  | Fill in Address Line 1 of Customers Billing Address  |  
| Address 2  | Fill in Address Line 2 of Customers Billing Address  |  
| City  | Fill in the City  |  
| Post Code  | Fill in the Postal Code  |  
| State  | Fill in the State  |  
| Country  | Select the Country  |  
| Phone  | Fill in the Phone number  |  
#### Customer Shipping Data[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#customer-shipping-data "Direct link to Customer Shipping Data")
In this section you can fill in additional optional Customer Shipping Details (see Customer Shipping Data Table).
![Customer Shipping Data](https://documentation.ixopay.com/manual/assets/ideal-img/customer-shipping-data.4c57e24.1280.png)Customer Shipping Data  
| Field  | Description  |  
| --- | --- |  
| First Name  | Fill in the First Name  |  
| Last Name  | Fill in the Last Name  |  
| Company  | Fill in the Company of Customers Shipping Address  |  
| Address 1  | Fill in Address Line 1 of Customers Shipping Address  |  
| Address 2  | Fill in Address Line 2 of Customers Shipping Address  |  
| City  | Fill in the City  |  
| Post Code  | Fill in the Postal Code  |  
| State  | Fill in the State  |  
| Country  | Select the Country  |  
| Phone  | Fill in the Phone number  |  
#### Item[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#item "Direct link to Item")
In this section you can fill in additional details about Items (see Items Table). Click **+Add Item** to add additional items
![Items](https://documentation.ixopay.com/manual/assets/ideal-img/items.6a183ab.1280.png)Items  
| Field  | Description  |  
| --- | --- |  
| Item Identification  | Fill in an Item Identification  |  
| Item Name  | Fill in an Item Name  |  
| Item Description  | Fill in an Item Description  |  
| Item Quantity  | Fill in an Item Quantity  |  
| Item Currency  | Fill in an Item Currency  |  
| Extra Data  | Fill in additional Key-Value Extra Data pairs. Add new Extra Data lines by selecting + Add Item Extra Data  |  
Create the Schedule by clicking **Start Transaction** in the Scheduler Form. A schedule confirmation with the **Schedule ID, (Reference) Transaction ID** will be shown and the schedule will appear in the Schedule Overview.
![Schedule Confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-confirmation.fddcf3b.1198.png)Schedule Confirmation
## Alert Settings for Schedules[​](https://documentation.ixopay.com/manual/docs/transactions/schedules/create#alert-settings-for-schedules "Direct link to Alert Settings for Schedules")
You can subscribe to Alert Notifications in case a scheduled transaction changes to an error state. Follow these steps to subscribe to Schedule Alert Notifications:
  1. Open the **Alert Settings** by clicking the **Bell** Icon in the top right corner of the Navigation Bar, clicking the **Gear-wheel** Icon
  2. In the Scheduler section set up your alerts as needed (see [Manage and Visualize Alerts](https://documentation.ixopay.com/manual/docs/administrative-tools/manage-and-visualize-alerts) for more information)

![Alert Settings](https://documentation.ixopay.com/manual/assets/ideal-img/alert-settings.0987816.1280.png)Alert Settings![Scheduler](https://documentation.ixopay.com/manual/assets/ideal-img/scheduler.70f3bf0.1280.png)Scheduler