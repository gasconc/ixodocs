---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- solidgatehttps-docs-congrify-com-integrations-solidgate-solidgate
- connect-solidgatehttps-docs-congrify-com-integrations-solidgate-connect-solidgate
- importing-historical-datahttps-docs-congrify-com-integrations-solidgate-importing-historical-data
- available-reportshttps-docs-congrify-com-integrations-solidgate-available-reports
- api
- ixopay
- chargeback
- merchant
- congrify
- observability
source_url: ''
portal: congrify
updated: '2026-06-15'
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
    * [Paysafecard](https://docs.congrify.com/#/Integrations/paysafecard "Paysafecard")
    * [Payu](https://docs.congrify.com/#/Integrations/payu "Payu")
    * [Satispay](https://docs.congrify.com/#/Integrations/satispay "Satispay")
    * [Solidgate](https://docs.congrify.com/#/Integrations/solidgate "Solidgate")
      * [How to connect with Solidgate](https://docs.congrify.com/#/Integrations/solidgate?id=how-to-connect-with-solidgate "How to connect with Solidgate")
        * [Importing Historical Data](https://docs.congrify.com/#/Integrations/solidgate?id=importing-historical-data "Importing Historical Data")
      * [Available Reports](https://docs.congrify.com/#/Integrations/solidgate?id=available-reports "Available Reports")
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [Solidgate](https://docs.congrify.com/#/Integrations/solidgate?id=solidgate)
## [About Solidgate](https://docs.congrify.com/#/Integrations/solidgate?id=about-solidgate)
Solidgate () is a modern, all-in-one payment processing and orchestration platform designed to help businesses scale globally with minimal complexity. Trusted by customer-focused brands, it combines both acquiring and orchestration capabilities to streamline payments across more than 150 countries and support over 150 currencies and alternative payment methods (APMs), including digital wallets and local cards—all through one simple integration.
## [How to connect with Solidgate](https://docs.congrify.com/#/Integrations/solidgate?id=how-to-connect-with-solidgate)
To successfully connect to the Solidgate Reporting API, you need to provide the following configuration attributes:
  * Name: Enter the name of your Solidgate Sub-merchant Account. This will be stored as account_name.
  * Public Key: Provide your Solidgate Public API key, which is used for authentication when establishing the API connection.
  * Secret Key: Provide your Solidgate Secret API key, also required for authentication.

To get these credentials, you need to log follow the instructions provided in Solidgate's documentation 
## [Importing Historical Data](https://docs.congrify.com/#/Integrations/solidgate?id=importing-historical-data)
During the onboarding process with Congrify, you can import historical data from Solidgate. Please reach out to Congrify's team to confirm which data can be historically downloaded.
## [Available Reports](https://docs.congrify.com/#/Integrations/solidgate?id=available-reports)
The following reports are available for the Solidgate integration and will provide the necessary data for a successful integration with Congrify. Please ensure that you have these reports available as a minimum when configuring your Solidgate connection:
  * Transactions report
  * Subscriptions report
  * Orders report
  * Chargebacks report
  * Frauds report
  * Prevention alerts report