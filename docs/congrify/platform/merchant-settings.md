---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- merchant-settingshttps-docs-congrify-com-fintech-merchantsettings-merchant-settings
- integrating-slackr-notification-channelhttps-docs-congrify-com-fintech-merchantsettings-integrating-slackr-notification-channel
- masking-sensitive-informationhttps-docs-congrify-com-fintech-merchantsettings-masking-sensitive-information
- exchange-rate-strategyhttps-docs-congrify-com-fintech-merchantsettings-exchange-rate-strategy
- defining-thresholds-payment-amount-ranges-dispute-amount-ranges-https-docs-congrify-com-fintech-merchantsettings-defining-thresholds-payment-amount-ranges-dispute-amount-ranges39
- configuring-anomaly-detection-settingshttps-docs-congrify-com-fintech-merchantsettings-configuring-anomaly-detection-settings
- ixopay
- chargeback
- merchant
- congrify
source_url: ''
portal: congrify
updated: '2026-05-18'
related: []
---

# [![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)
  * **Platform**
    * [Payments Observability & Intelligence](https://docs.congrify.com/#/README "Payments Observability & Intelligence")
    * [Registration & Login](https://docs.congrify.com/#/Fintech/RegistrationLogin "Registration & Login")
    * [User Management and Notifications](https://docs.congrify.com/#/Fintech/UserManagementNotifications "User Management and Notifications")
    * [Merchant Settings](https://docs.congrify.com/#/Fintech/MerchantSettings "Merchant Settings")
      * [Integrating Slack(R) as a notification channel](https://docs.congrify.com/#/Fintech/MerchantSettings?id=integrating-slackr-as-a-notification-channel "Integrating Slack\(R\) as a notification channel")
      * [Masking sensitive information](https://docs.congrify.com/#/Fintech/MerchantSettings?id=masking-sensitive-information "Masking sensitive information")
      * [Exchange Rate Strategy](https://docs.congrify.com/#/Fintech/MerchantSettings?id=exchange-rate-strategy "Exchange Rate Strategy")
      * [Defining thresholds for ‘Payment amount ranges’ and 'Dispute amount ranges'](https://docs.congrify.com/#/Fintech/MerchantSettings?id=defining-thresholds-for-payment-amount-ranges-and-39dispute-amount-ranges39 "Defining thresholds for ‘Payment amount ranges’ and 'Dispute amount ranges'")
      * [Configuring the Anomaly Detection settings](https://docs.congrify.com/#/Fintech/MerchantSettings?id=configuring-the-anomaly-detection-settings "Configuring the Anomaly Detection settings")
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
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [Merchant Settings](https://docs.congrify.com/#/Fintech/MerchantSettings?id=merchant-settings)
## [Integrating Slack(R) as a notification channel](https://docs.congrify.com/#/Fintech/MerchantSettings?id=integrating-slackr-as-a-notification-channel)
  1. To begin, you would need to install the Congrify Payments Intelligence App from the Slack Marketplace (More → Apps → Search) to setup Congrify Business Alert app in your Slack.

![Alt text](https://docs.congrify.com/Images/MerchantSettings_2.png)
  2. On the Congrify web-app, you can initiate the Slack integration by clicking on the 'Connect to Slack' button

![Alt text](https://docs.congrify.com/Images/MerchantSettings_3.png)
  3. You will be re-directed to the Slack website to assign your company Slack workspace, review and allow the necessary app permissions and submit the request to your company Slack Administrator to integrate with the Congrify Business Intelligence app on Slack. 

![Alt text](https://docs.congrify.com/Images/MerchantSettings_4.png) ![Alt text](https://docs.congrify.com/Images/MerchantSettings_5.png)
  4. Alternatively, you may also setup your Business Alerts to be sent over the official Slack email, which can further send updates and notifications to the corresponding Slack channel

![Alt text](https://docs.congrify.com/Images/MerchantSettings_6.png)
## [Masking sensitive information](https://docs.congrify.com/#/Fintech/MerchantSettings?id=masking-sensitive-information)
Congrify allows you to further mask sensitive personally identifiable information from the detailed views available to Users through an easy toggle under ‘Merchant Settings’ → 'Your data settings'. While all payer indirect identifiers are already anonymized or pseudonymized such that no sensitive information like the Payer card details are exposed to unauthorized Users, masking sensitive information further anonymizes the PAN details through unique hash values, such that the payer uniqueness and statistical insights are still available.
![Alt text](https://docs.congrify.com/Images/MerchantSettings_7.png)
Example of unique hash value replacing the sensitive Payer emails in the Congrify platform.
![Alt text](https://docs.congrify.com/Images/MerchantSettings_8.png)
## [Exchange Rate Strategy](https://docs.congrify.com/#/Fintech/MerchantSettings?id=exchange-rate-strategy)
While Congrify provides accurate and updated foreign exchange conversion rates to support multi-currency reporting, you can choose your own preferred foreign exchange rates for real-time conversions on the Congrify platform. To setup the integration of your own preferred foreign exchange rates via shared file transfer, please contact our support team at support@congrify.com.
![Alt text](https://docs.congrify.com/Images/MerchantSettings_9.png)
## [Defining thresholds for ‘Payment amount ranges’ and 'Dispute amount ranges'](https://docs.congrify.com/#/Fintech/MerchantSettings?id=defining-thresholds-for-payment-amount-ranges-and-39dispute-amount-ranges39)
In the ‘Merchant Settings' → 'Payment/ Dispute amount ranges’ you can define the range thresholds which are available as filters to update the dashboard and analytics pages with the relevant ranges for aggregating data into visible insights. 
![Alt text](https://docs.congrify.com/Images/MerchantSettings_10.png)
On setting the defined thresholds in 'Merchant Settings', such payment and dispute threshold ranges are available as pre-defined filter ranges to conveniently adjust the insights available on your dashboard.
![Alt text](https://docs.congrify.com/Images/MerchantSettings_11.png)
## [Configuring the Anomaly Detection settings](https://docs.congrify.com/#/Fintech/MerchantSettings?id=configuring-the-anomaly-detection-settings)
You can define the sensitivity parameters for the anomaly detection machine learning model directly on the UI under 'Merchant Settings'. 
![Alt text](https://docs.congrify.com/Images/MerchantSettings_12.png) ![Alt text](https://docs.congrify.com/Images/MerchantSettings_13.png)
These changes update the Congrify anomaly detection model and re-compute the defined anomalies which can be explored in the Congrify platform in near real-time.
![Alt text](https://docs.congrify.com/Images/MerchantSettings_14.png)