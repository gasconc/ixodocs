---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- checkout-comhttps-docs-congrify-com-integrations-checkout-checkoutcom
- connect-checkout-comhttps-docs-congrify-com-integrations-checkout-connect-checkoutcom
- importing-historical-datahttps-docs-congrify-com-integrations-checkout-importing-historical-data
- available-reportshttps-docs-congrify-com-integrations-checkout-available-reports
- ixopay
- chargeback
- settlement
- merchant
- congrify
- observability
source_url: ''
portal: congrify
updated: '2026-06-01'
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
      * [How to connect with Checkout.com](https://docs.congrify.com/#/Integrations/checkout?id=how-to-connect-with-checkoutcom "How to connect with Checkout.com")
        * [Importing Historical Data](https://docs.congrify.com/#/Integrations/checkout?id=importing-historical-data "Importing Historical Data")
      * [Available Reports](https://docs.congrify.com/#/Integrations/checkout?id=available-reports "Available Reports")
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

## [Checkout.com](https://docs.congrify.com/#/Integrations/checkout?id=checkoutcom)
## [About Checkout.com](https://docs.congrify.com/#/Integrations/checkout?id=about-checkoutcom)
Checkout.com () is a leading global payment processing platform that enables businesses to accept, process, and manage payments with ease. Offering a flexible and unified solution, it supports a wide range of payment methods, currencies, and geographies, making it ideal for businesses looking to scale internationally. With advanced features such as fraud detection, real-time reporting, and robust analytics, Checkout.com helps optimize payment operations while ensuring security and efficiency. Trusted by global brands, it empowers businesses to deliver seamless payment experiences to their customers.
## [How to connect with Checkout.com](https://docs.congrify.com/#/Integrations/checkout?id=how-to-connect-with-checkoutcom)
To integrate Checkout.com with Congrify, you need to generate an Access Key Pair from the Checkout.com dashboard and share it with Congrify.
  1. Navigate to Developers In the Checkout.com dashboard, click Developers in the top-right corner. The left-side panel will look similar to the image below:

![Alt text](https://docs.congrify.com/Images/checkout1.png)
  2. Create a New Key

  * Select Create a new key, which opens the configuration screen.
  * Under Type of Key, choose Access Key Pair.

![Alt text](https://docs.congrify.com/Images/checkout2.png)
3.Configure permissions Check the following options:
  * files
  * notifier:events
  * reports:view
  * reports

![Alt text](https://docs.congrify.com/Images/checkout3.png)
  4. Select the Entity and Finalize

  * Choose the required entity.
  * Click Create Keys and share them with Congrify.

## [Importing Historical Data](https://docs.congrify.com/#/Integrations/checkout?id=importing-historical-data)
During the onboarding process with Congrify, you have the option to import historical data from Checkout.com. To initiate this, simply inform Congrify's team of the desired timeframes for the historical reports.
## [Available Reports](https://docs.congrify.com/#/Integrations/checkout?id=available-reports)
The following reports are essential for Checkout.com's integration with Congrify. These reports ensure that the necessary data is available for a successful integration.
Please verify that these reports are activated and accessible on Checkout.com's side. If you have any questions or require assistance, don't hesitate to contact Congrify's support team or Checkout.com's support.
  * Authentication report
  * Balance report
  * Dispute report
  * Financial actions report
  * Fraud detection report
  * Payment report
  * Payout report
  * Settlement breakdown report