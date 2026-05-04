---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- barclaycardhttps-docs-congrify-com-integrations-barclaycard-barclaycard
- connect-barclaycardhttps-docs-congrify-com-integrations-barclaycard-connect-barclaycard
- required-access-credentialshttps-docs-congrify-com-integrations-barclaycard-required-access-credentials
- importing-historical-datahttps-docs-congrify-com-integrations-barclaycard-importing-historical-data
- available-reportshttps-docs-congrify-com-integrations-barclaycard-available-reports
- api
- rest
- ixopay
- chargeback
- transaction
source_url: ''
portal: congrify
updated: '2026-04-28'
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
      * [How to connect with Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard?id=how-to-connect-with-barclaycard "How to connect with Barclaycard")
        * [Required access credentials](https://docs.congrify.com/#/Integrations/barclaycard?id=required-access-credentials "Required access credentials")
        * [Importing Historical Data](https://docs.congrify.com/#/Integrations/barclaycard?id=importing-historical-data "Importing Historical Data")
      * [Available Reports](https://docs.congrify.com/#/Integrations/barclaycard?id=available-reports "Available Reports")
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

## [Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard?id=barclaycard)
## [About Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard?id=about-barclaycard)
Barclaycard () is a UK-based payment processing provider and part of Barclays, serving hundreds of thousands of businesses across various industries. Headquartered in London, United Kingdom, Barclaycard supports a wide range of customers, from small businesses and startups to large enterprises and multinational corporations.
## [How to connect with Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard?id=how-to-connect-with-barclaycard)
To connect with Barclaycard API Key needs to be created from the Barclaycard Smartpay Fuse Admin Webpage and follow the instructions below:
To be able to send REST API requests, you need to pass the authentication process. For this, you need two credentials, which are generated in EBC:
  * Key detail (key id)
  * Shared secret key

  1. To get these credentials, you need to log into EBC and select Payment Configuration->Key Management and click on GENERATE KEY button.
  2. The Create Key window appears. Select API Cert / Secret and click NEXT STEP.
  3. In the next menu select Shared Secret and then SUBMIT.
  4. In the next window copy or download the Shared secret key, which is the first credential for REST API request, and click on KEY MANAGEMENT.
  5. In Key Management window select Keys: API Keys option to find newly created key.
  6. Click on the link in the Keys column to see the key details and copy Key Detail parameter, which is the second credential for REST API request. 

Now you have both credentials for the REST API authentication process.
## [Required access credentials](https://docs.congrify.com/#/Integrations/barclaycard?id=required-access-credentials)
  1. Name The name of the Barclaycard Account
  2. Merchant ID The Merchant ID on the Barclaycard platform to ingest data for
  3. Key ID The Key ID used for authentication when connecting to the Barclaycard API
  4. Secret Key The Secret key used for authentication when connecting to the Barclaycard API

## [Importing Historical Data](https://docs.congrify.com/#/Integrations/barclaycard?id=importing-historical-data)
During the onboarding process with Congrify, you can import historical data from Barclaycard. Please reach out to Congrify's team to confirm which data can be historically downloaded.
## [Available Reports](https://docs.congrify.com/#/Integrations/barclaycard?id=available-reports)
The following reports are available for the Barclaycard integration and will provide the necessary data for a successful integration with Congrify. Please ensure that you select these reports as a minimum when configuring your Barclaycard connection:
  * Transaction report