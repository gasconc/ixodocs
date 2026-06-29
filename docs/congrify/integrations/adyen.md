---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- adyenhttps-docs-congrify-com-integrations-adyen-adyen
- connect-adyenhttps-docs-congrify-com-integrations-adyen-connect-adyen
- creating-reporting-userhttps-docs-congrify-com-integrations-adyen-creating-reporting-user
- configuring-webhookshttps-docs-congrify-com-integrations-adyen-configuring-webhooks
- importing-historical-data-via-sftphttps-docs-congrify-com-integrations-adyen-importing-historical-data-via-sftp
- available-reportshttps-docs-congrify-com-integrations-adyen-available-reports
- api
- webhook
- 3ds
- hmac
source_url: ''
portal: congrify
updated: '2026-06-29'
related: []
---

# [![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)
  * **Platform**
    * [Payments Observability & Intelligence](https://docs.congrify.com/#/README "Payments Observability & Intelligence")
    * [Registration & Login](https://docs.congrify.com/#/Fintech/RegistrationLogin "Registration & Login")
    * [User Management and Notifications](https://docs.congrify.com/#/Fintech/UserManagementNotifications "User Management and Notifications")
    * [Merchant Settings](https://docs.congrify.com/#/Fintech/MerchantSettings "Merchant Settings")
    * [Security](https://docs.congrify.com/#/Fintech/Security "Security")
  * **Observability**
    * [Dashboards](https://docs.congrify.com/#/Observability/Dashboards "Dashboards")
    * [KPIs](https://docs.congrify.com/#/Observability/KPIs "KPIs")
    * [VAMP](https://docs.congrify.com/#/Observability/VAMP "VAMP")
    * [AI Co-Pilot](https://docs.congrify.com/#/Observability/AICopilot "AI Co-Pilot")
  * **Data Pipelines**
    * [Snowflake Integration](https://docs.congrify.com/#/Data%20Pipelines/Snowflake "Snowflake Integration")
    * [Unified Reports](https://docs.congrify.com/#/Data%20Pipelines/UnifiedReports "Unified Reports")
  * **Marketplace Integrations**
    * [Stripe App Marketplace](https://docs.congrify.com/#/Marketplaces/StripeMarketplace "Stripe App Marketplace")
  * **Integrations**
    * [Getting Started](https://docs.congrify.com/#/Integrations/GettingStarted "Getting Started")
    * [Adyen](https://docs.congrify.com/#/Integrations/adyen "Adyen")
      * [How to connect with Adyen](https://docs.congrify.com/#/Integrations/adyen?id=how-to-connect-with-adyen "How to connect with Adyen")
        * [Creating a Reporting User](https://docs.congrify.com/#/Integrations/adyen?id=creating-a-reporting-user "Creating a Reporting User")
        * [Configuring Webhooks](https://docs.congrify.com/#/Integrations/adyen?id=configuring-webhooks "Configuring Webhooks")
        * [Importing Historical Data via SFTP](https://docs.congrify.com/#/Integrations/adyen?id=importing-historical-data-via-sftp "Importing Historical Data via SFTP")
      * [Available Reports](https://docs.congrify.com/#/Integrations/adyen?id=available-reports "Available Reports")
    * [Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard "Barclaycard")
    * [Braintree](https://docs.congrify.com/#/Integrations/braintree "Braintree")
    * [Chargebee](https://docs.congrify.com/#/Integrations/chargebee "Chargebee")
    * [Chase Payment tech](https://docs.congrify.com/#/Integrations/chase "Chase Payment tech")
    * [Checkout.com](https://docs.congrify.com/#/Integrations/checkout "Checkout.com")
    * [ixopay](https://docs.congrify.com/#/Integrations/ixopay "ixopay")
    * [izyco(PayU)](https://docs.congrify.com/#/Integrations/iyzico "izyco\(PayU\)")
    * [PayPal](https://docs.congrify.com/#/Integrations/paypal "PayPal")
    * [Paysafecard](https://docs.congrify.com/#/Integrations/paysafecard "Paysafecard")
    * [Payu](https://docs.congrify.com/#/Integrations/payu "Payu")
    * [Satispay](https://docs.congrify.com/#/Integrations/satispay "Satispay")
    * [Solidgate](https://docs.congrify.com/#/Integrations/solidgate "Solidgate")
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [Adyen](https://docs.congrify.com/#/Integrations/adyen?id=adyen)
## [About Adyen](https://docs.congrify.com/#/Integrations/adyen?id=about-adyen)
Adyen () is a leading global payment platform that provides businesses with a seamless way to accept payments online, in-app, and in-store. Known for its all-in-one solution, Adyen supports a wide range of payment methods and currencies, enabling companies to scale internationally with ease. Its advanced features, such as real-time data insights, fraud prevention, and a unified payment system, empower businesses to optimize their payment processes while delivering a smooth customer experience. Trusted by major global brands, Adyen is a preferred choice for companies seeking innovative and reliable payment solutions.
## [How to connect with Adyen](https://docs.congrify.com/#/Integrations/adyen?id=how-to-connect-with-adyen)
To integrate Adyen with Congrify, you must create a Reporting User and configure a Webhook. Below are the detailed steps for each process.
## [Creating a Reporting User](https://docs.congrify.com/#/Integrations/adyen?id=creating-a-reporting-user)
To create a Reporting Service User:
  1. Navigate to Developers > API Credentials in the Adyen dashboard.
  2. Select Create new credentials and set the credentials type to Report Service User. ![Alt text](https://docs.congrify.com/Images/adyen_credentials_1.png)

3.Save the username and password (Basic Auth option) generated by Adyen in Congrify. ![Alt text](https://docs.congrify.com/Images/adyen_credentials_2.png)
## [Configuring Webhooks](https://docs.congrify.com/#/Integrations/adyen?id=configuring-webhooks)
**1. Create a New Webhook** Navigate to Webhooks > Create new webhook and add a Standard Webhook. ![Alt text](https://docs.congrify.com/Images/adyen_webhook_1.png)
**2. Set Up the Server Configuration**
  * Enter the Server configuration URL provided by Congrify. ![Alt text](https://docs.congrify.com/Images/adyen_webhook_2.png)
  * Create a Username and Password, then generate the HMAC Signature. ![Alt text](https://docs.congrify.com/Images/adyen_webhook_3.png)
  * Select only the REPORT_AVAILABLE webhook event ![Alt text](https://docs.congrify.com/Images/adyen_webhook_4.png)
  * Save these details in Congrify

**3. Enable Automatic Report Generation** Go to Reports > Report overview ![Alt text](https://docs.congrify.com/Images/adyen_webhook_5.png)
Enable the Automatic generation for the following reports: 
  * 3DS Authentication ![Alt text](https://docs.congrify.com/Images/adyen_report_3DS_authentication.png)
  * Dispute transaction details ![Alt text](https://docs.congrify.com/Images/adyen_reports_dispute.png)
  * Payment accounting ![Alt text](https://docs.congrify.com/Images/adyen_reports_payment_accounting.png)
  * Received payments details ![Alt text](https://docs.congrify.com/Images/adyen_reports_received_payments.png)
  * Settlement details ![Alt text](https://docs.congrify.com/Images/adyen_reports_settlement_details.png)

**4. Test the Webhook**
  * Generate a report manually by clicking Generate.
  * Check System messages to confirm the webhook was successfully received. ![Alt text](https://docs.congrify.com/Images/adyen_webhook_6.png)

## [Importing Historical Data via SFTP](https://docs.congrify.com/#/Integrations/adyen?id=importing-historical-data-via-sftp)
During the onboarding process with Congrify, you can import historical data from Adyen. The most efficient method is to grant Congrify's team access to the shared SFTP folder with Adyen. This allows Congrify to directly select and import the desired historical data.
## [Available Reports](https://docs.congrify.com/#/Integrations/adyen?id=available-reports)
The following reports are essential for the Adyen integration. These reports will provide the necessary data for a successful integration with Congrify.Please ensure that you select these reports as a minimum when configuring your Adyen connection:
  * Payments Accounting Report
  * Received Payments Report
  * Settlement Details Report
  * Dispute Details Report
  * 3DS Authentication Report
  * Monthly Invoices