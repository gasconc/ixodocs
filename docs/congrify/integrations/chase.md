---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- chase-payment-techhttps-docs-congrify-com-integrations-chase-chase-payment-tech
- connect-chasehttps-docs-congrify-com-integrations-chase-connect-chase
- required-access-credentialshttps-docs-congrify-com-integrations-chase-required-access-credentials
- importing-historical-datahttps-docs-congrify-com-integrations-chase-importing-historical-data
- available-reportshttps-docs-congrify-com-integrations-chase-available-reports
- ixopay
- chargeback
- transaction
- merchant
- congrify
source_url: ''
portal: congrify
updated: '2026-06-11'
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
      * [How to connect with Chase](https://docs.congrify.com/#/Integrations/chase?id=how-to-connect-with-chase "How to connect with Chase")
        * [Required access credentials](https://docs.congrify.com/#/Integrations/chase?id=required-access-credentials "Required access credentials")
        * [Importing Historical Data](https://docs.congrify.com/#/Integrations/chase?id=importing-historical-data "Importing Historical Data")
      * [Available Reports](https://docs.congrify.com/#/Integrations/chase?id=available-reports "Available Reports")
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

## [Chase Payment tech](https://docs.congrify.com/#/Integrations/chase?id=chase-payment-tech)
## [About Chase Payment Tech](https://docs.congrify.com/#/Integrations/chase?id=about-chase-payment-tech)
Chase Payment Tech () is a division of JPMorgan Chase that provides secure and reliable payment processing services for businesses of all sizes. It offers integrated solutions for in-person, online, and mobile payments, along with features like fraud protection, reporting tools, and customer support. With a focus on security, scalability, and efficiency, Chase Payment Tech helps businesses streamline their payment systems and enhance transaction experiences.
## [How to connect with Chase](https://docs.congrify.com/#/Integrations/chase?id=how-to-connect-with-chase)
To connect with Chase you need to have a SFTP (Secure File transfer protocol) setup active with Chase. If you do not have these already then a Username (User ID) and Password combination must be requested from Chase to be able to retrieve your reports from their SFTP server for each Merchant Account.
## [Required access credentials](https://docs.congrify.com/#/Integrations/chase?id=required-access-credentials)
  1. Account Name The name of the Chase Account
  2. Username The username used for connection to the Chase SFTP server. Also referred as User ID on Chase side
  3. Password The password used for authentication when connecting to the Chase Paymentech SFTP server. This is also used to unzip the zipped files retrieved from the Chase Paymentech SFTP server

## [Importing Historical Data](https://docs.congrify.com/#/Integrations/chase?id=importing-historical-data)
During the onboarding process with Congrify, you can import historical data from Chase. Please reach out to Congrify's team to confirm which data can be historically downloaded, based on the SFTP data retention configuration.
## [Available Reports](https://docs.congrify.com/#/Integrations/chase?id=available-reports)
The following reports are available for the Chase integration and will provide the necessary data for a successful integration with Congrify. Please ensure that you select these reports as a minimum when configuring your Chase connection:
  * authorization_detail_financial_report
  * chargeback_activity_exception_report
  * chargebacks_received_report
  * discover_chargeback_summary_financial_report
  * deposit_activity_summary_financial_report
  * deposit_activity_transfer_summary_financial_report
  * deposit_detail_financial_report
  * interchange_downgrade_summary_financial_report
  * interchange_qualification_detail_financial_report
  * interchange_qualification_summary_financial_report
  * mastercard_excessive_chargeback_financial_report
  * reject_summary_financial_report
  * retrieval_detail_exception_report
  * service_charge_detail_financial_report
  * submission_listing_financial_report
  * transaction_summary_financial_report
  * funds_transfer_activity_financial_report