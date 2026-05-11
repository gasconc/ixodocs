---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- paypalhttps-docs-congrify-com-integrations-paypal-paypal
- connect-paypalhttps-docs-congrify-com-integrations-paypal-connect-paypal
- required-access-credentialshttps-docs-congrify-com-integrations-paypal-required-access-credentials
- importing-historical-datahttps-docs-congrify-com-integrations-paypal-importing-historical-data
- available-reportshttps-docs-congrify-com-integrations-paypal-available-reports
- ixopay
- payment-gateway
- subscription
- chargeback
- merchant
source_url: ''
portal: congrify
updated: '2026-05-11'
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
    * [Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard "Barclaycard")
    * [Braintree](https://docs.congrify.com/#/Integrations/braintree "Braintree")
    * [Chargebee](https://docs.congrify.com/#/Integrations/chargebee "Chargebee")
    * [Chase Payment tech](https://docs.congrify.com/#/Integrations/chase "Chase Payment tech")
    * [Checkout.com](https://docs.congrify.com/#/Integrations/checkout "Checkout.com")
    * [ixopay](https://docs.congrify.com/#/Integrations/ixopay "ixopay")
    * [izyco(PayU)](https://docs.congrify.com/#/Integrations/iyzico "izyco\(PayU\)")
    * [PayPal](https://docs.congrify.com/#/Integrations/paypal "PayPal")
      * [How to connect with PayPal](https://docs.congrify.com/#/Integrations/paypal?id=how-to-connect-with-paypal "How to connect with PayPal")
        * [Required access credentials](https://docs.congrify.com/#/Integrations/paypal?id=required-access-credentials "Required access credentials")
        * [Importing Historical Data](https://docs.congrify.com/#/Integrations/paypal?id=importing-historical-data "Importing Historical Data")
      * [Available Reports](https://docs.congrify.com/#/Integrations/paypal?id=available-reports "Available Reports")
    * [Paysafecard](https://docs.congrify.com/#/Integrations/paysafecard "Paysafecard")
    * [Payu](https://docs.congrify.com/#/Integrations/payu "Payu")
    * [Satispay](https://docs.congrify.com/#/Integrations/satispay "Satispay")
    * [Solidgate](https://docs.congrify.com/#/Integrations/solidgate "Solidgate")
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [PayPal](https://docs.congrify.com/#/Integrations/paypal?id=paypal)
## [About PayPal](https://docs.congrify.com/#/Integrations/paypal?id=about-paypal)
PayPal () is a leading global payment platform that enables individuals and businesses to send and receive payments securely and efficiently. It offers a comprehensive suite of solutions for online, in-person, and mobile transactions, including peer-to-peer transfers, subscription management, and payment gateway integration. With robust features like buyer and seller protection, fraud detection, and real-time reporting tools, PayPal empowers users to streamline their financial operations. Trusted by millions worldwide, PayPal focuses on convenience, security, and innovation to enhance the digital payment experience.
## [How to connect with PayPal](https://docs.congrify.com/#/Integrations/paypal?id=how-to-connect-with-paypal)
To connect with PayPal, you need an active SFTP (Secure File Transfer Protocol) setup with them. If you don’t already have this configured, follow the steps outlined in PayPal's documentation: .
## [Required access credentials](https://docs.congrify.com/#/Integrations/paypal?id=required-access-credentials)
For Congrify, you will need the following information:
  * Name The name of the PayPal account.
  * Username The username used to connect to the PayPal SFTP server.
  * Password The password required for authentication when connecting to the PayPal SFTP server.

You can configure multiple SFTP accounts within Congrify as needed.
## [Importing Historical Data](https://docs.congrify.com/#/Integrations/paypal?id=importing-historical-data)
During the onboarding process with Congrify, you can import historical data from PayPal. Please reach out to Congrify's team to confirm which data can be historically downloaded, based on the SFTP data retention configuration.
## [Available Reports](https://docs.congrify.com/#/Integrations/paypal?id=available-reports)
The following reports are available for the PayPal integration and will provide the necessary data for a successful integration with Congrify. Please ensure that you select these reports as a minimum when configuring your PayPal connection:
  * dispute_detail_report
  * settlement_report
  * transaction_details_report