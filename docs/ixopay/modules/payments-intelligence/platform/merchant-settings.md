---
title: Merchant Settings
summary: ' Merchant Settings'
tags:
- integrating-slack-notification-channel-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-merchant-settings-integrating-slack-notification-channel-direct-link-integrating-slack-notification-channel
- masking-sensitive-information-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-merchant-settings-masking-sensitive-information-direct-link-masking-sensitive-information
- exchange-rate-strategy-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-merchant-settings-exchange-rate-strategy-direct-link-exchange-rate-strategy
- defining-thresholds-payment-amount-ranges-dispute-amount-ranges-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-merchant-settings-defining-thresholds-payment-amount-ranges-dispute-amount-ranges-direct-link-defining-thresholds-payment-amount-ranges-dispute-amount-ranges
- configuring-anomaly-detection-settings-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-merchant-settings-configuring-anomaly-detection-settings-direct-link-configuring-anomaly-detection-settings
- ixopay
- merchant
- congrify
- dashboard
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Platform
  * Merchant Settings

# Merchant Settings
In the IXOPAY Payments Intelligence (formerly Congrify) web-app, you can configure your data settings to mask sensitive data, set significance buckets for your payment data and to ensure that you get real-time alerts through preferred 3rd party notification channels by integrating Slack® and email tools.
To start, navigate to the Merchant Settings under your User tab → Merchant Settings
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_1.11e8de7.1600.png)
## Integrating Slack® as a notification channel[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#integrating-slack-as-a-notification-channel "Direct link to Integrating Slack® as a notification channel")
  1. To begin, you would need to install the **Congrify Payments Intelligence** App from the Slack Marketplace (More → Apps → Search) to setup the Congrify Payments Intelligence Business Alert app in your Slack.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_2.f16983a.1600.png)
  2. On the IXOPAY Payments Intelligence web-app, you can initiate the Slack integration by clicking on the 'Connect to Slack' button
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_3.9b7b210.1600.png)
  3. You will be re-directed to the Slack website to assign your company Slack workspace, review and allow the necessary app permissions and submit the request to your company Slack Administrator to integrate with the Congrify Payments Intelligence Business Intelligence app on Slack.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_4.1b3b16a.1600.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_5.fe7b566.1600.png)
  4. Alternatively, you may also setup your Business Alerts to be sent over the official Slack email, which can further send updates and notifications to the corresponding Slack channel
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_6.a806461.1600.png)

## Masking sensitive information[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#masking-sensitive-information "Direct link to Masking sensitive information")
IXOPAY Payments Intelligence allows you to further mask sensitive personally identifiable information from the detailed views available to Users through an easy toggle under ‘Merchant Settings’ → 'Your data settings'. While all payer indirect identifiers are already anonymized or pseudonymized such that no sensitive information like the Payer card details are exposed to unauthorized Users, masking sensitive information further anonymizes the PAN details through unique hash values, such that the payer uniqueness and statistical insights are still available.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_7.f610960.1600.png)
Example of unique hash value replacing the sensitive Payer emails in the IXOPAY Payments Intelligence platform.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_8.49396da.1600.png)
## Exchange Rate Strategy[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#exchange-rate-strategy "Direct link to Exchange Rate Strategy")
While IXOPAY Payments Intelligence provides accurate and updated foreign exchange conversion rates to support multi-currency reporting, you can choose your own preferred foreign exchange rates for real-time conversions on the IXOPAY Payments Intelligence platform. To setup the integration of your own preferred foreign exchange rates via shared file transfer, please get in contact with our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_9.7fc7c0b.1600.png)
## Defining thresholds for ‘Payment amount ranges’ and 'Dispute amount ranges'[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#defining-thresholds-for-payment-amount-ranges-and-dispute-amount-ranges "Direct link to Defining thresholds for ‘Payment amount ranges’ and 'Dispute amount ranges'")
In the ‘Merchant Settings' → 'Payment/ Dispute amount ranges’ you can define the range thresholds which are available as filters to update the dashboard and analytics pages with the relevant ranges for aggregating data into visible insights.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_10.809a568.1600.png)
On setting the defined thresholds in 'Merchant Settings', such payment and dispute threshold ranges are available as pre-defined filter ranges to conveniently adjust the insights available on your dashboard.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_11.c19117f.1600.png)
## Configuring the Anomaly Detection settings[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/merchant-settings#configuring-the-anomaly-detection-settings "Direct link to Configuring the Anomaly Detection settings")
You can define the sensitivity parameters for the anomaly detection machine learning model directly on the UI under 'Merchant Settings'.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_12.02b3c6c.1600.png)
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_13.2581d2f.1600.png)
These changes update the IXOPAY Payments Intelligence anomaly detection model and re-compute the defined anomalies which can be explored in the IXOPAY Payments Intelligence platform in near real-time.
![](https://documentation.ixopay.com/modules/assets/ideal-img/MerchantSettings_14.eb8d0c5.1600.png)