---
title: Shopify
summary: Shopify does not process payments via the IXOPAY platformhttps://www.ixopay.com
  directly. They use their own payment solution "Shopify Payments" for facilitating
  payments with their SASS store software.
tags:
- abstract-https-documentation-ixopay-com-manual-adapters-shopify-abstract-direct-link-abstract
- setting-shopify-webhooks-https-documentation-ixopay-com-manual-adapters-shopify-setting-shopify-webhooks-direct-link-setting-shopify-webhooks
- retrieving-settlements-https-documentation-ixopay-com-manual-adapters-shopify-retrieving-settlements-direct-link-retrieving-settlements
- shopify-payments-https-documentation-ixopay-com-manual-adapters-shopify-shopify-payments-direct-link-shopify-payments
- paypal-settlements-https-documentation-ixopay-com-manual-adapters-shopify-paypal-settlements-direct-link-paypal-settlements
- api
- json
- webhook
- ixopay
- settlement
source_url: https://documentation.ixopay.com/manual/adapters/shopify
portal: ixopay-manual
updated: '2026-05-25'
related: []
---

* Shopify

# Shopify
## Abstract[​](https://documentation.ixopay.com/manual/adapters/shopify#abstract "Direct link to Abstract")
Shopify does not process payments via the [IXOPAY platform](https://www.ixopay.com) directly. They use their own payment solution ("Shopify Payments") for facilitating payments with their SASS store software. However, the IXOPAY platform is capable of creating Transaction entities, based on Shopify’s reported webhooks as well as processing Shopify and PayPal settlements.
## Setting up Shopify Webhooks[​](https://documentation.ixopay.com/manual/adapters/shopify#setting-up-shopify-webhooks "Direct link to Setting up Shopify Webhooks")
In order for the IXOPAY platform to be notified about new Transactions, you need to create a Connector onIXOPAY platform, create an API User and provision a new webhook endpoint in Shopify’s Dashboard. Refer to Shopify’s [official documentation](https://shopify.dev/apps/webhooks) for more details about Shopify Webhooks.
  1. First, create a Shopify Connector (Adapter = "**Shopify Webhooks** ", method = "**Generic** "). Refer to [this User Manual page](https://documentation.ixopay.com/manual/docs/connector/create) for general documentation for creating a new Connector.
  2. Then, create an API User. Refer to the general documentation [here](https://documentation.ixopay.com/connector/users/api).
As a special case, grant the API User the permission for the Push API by setting "**Enabled Push API** to **1** " (Image 1)
  3. Log into Shopify’s Dashboard, and go to Settings - Notifications and scroll down to the bottom of the page. Here, click on the "**Create Webhook** " button (Image 2):
Within the modal, configure the following parameters:
     * Event: Transaction creation
     * Type: JSON
     * Webhook API version: 2021-07
     * URL:
The URL scheme should adhere to the following pattern: `https://**_GATEWAY_HOST_**/posPush/**_CONNECTOR_GUID_**?username=**_API_USERNAME_**&password=**_API_USER_PASSWORD_**`
For instance, a valid URL might be: `https://**_gateway.ixopay.com_**/posPush/**_CO-0000-0000-0000-0000-0000-0000_**?username=**_my-api-user_**&password=**_API.userPassword1234_**`
Note: if the password contains any special characters, you’ll have to properly encode them. (Image 3)
  4. Copy Shopify’s API User, Shopify API Password, Webhook Secret, Shopify Host and retrieve-non-numeric-order-ID, and paste it into the Connector’s configuration (Image 4)

![Image 1](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-edit-user.57a6f0e.1200.png)Image 1![Image 2](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-image-2.0e936f0.1202.png)Image 2![Image 3](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-image-3.15cae09.1114.png)Image 3![Image 4](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-image-3-2.5730e98.547.png)Image 4
## Retrieving settlements[​](https://documentation.ixopay.com/manual/adapters/shopify#retrieving-settlements "Direct link to Retrieving settlements")
The IXOPAY platform supports the processing of two (2) types of settlements: Shopify Payments and PayPal.
As a prerequisite, you’ll first have to create [a provider entity](https://documentation.ixopay.com/manual/docs/post-processing/provider) and assign the [Shopify connector](https://documentation.ixopay.com/manual/docs/post-processing/provider) to it.
### Shopify Payments[​](https://documentation.ixopay.com/manual/adapters/shopify#shopify-payments "Direct link to Shopify Payments")
In order to automatically retrieve Provider settlements from Shopify, you first have to obtain an API User and password for the Shopify API. Follow the instructions from [Shopify’s official guide](https://shopify.dev/apps/auth/basic-http#2-generate-api-credentials) for obtaining dedicated API credentials.
Create a settlement data fetcher by selecting the Shopify Webhooks Adapter and paste the shop’s hostname as well API username and password. The data fetcher will automatically collect the necessary settlement information, provided by Shopify payments. (Image 5)
![Image 5: Edit Data Fetcher](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-image-5-edit-data-fatcher.de0c212.1202.png)Image 5: Edit Data Fetcher
### PayPal Settlements[​](https://documentation.ixopay.com/manual/adapters/shopify#paypal-settlements "Direct link to PayPal Settlements")
As a special case, PayPal payments are not covered by Shopify Payments. Instead, PayPal will provide the settlement information directly via "STL files". For more details, refer to [PayPal’s documentation](https://developer.paypal.com/docs/reports/sftp-reports/settlement-report/).
In order to have the IXOPAY platform automatically retrieving and parsing STL files, you'll have to provide an SFTP User within your PayPal’s Merchant Account. For retrieving the SFTP credentials Refer to [PayPal’s documentation](https://developer.paypal.com/docs/reports/sftp-reports/settlement-report/#creating-a-secure-ftp-server-user). Once you have obtained the SFTP access you create a ShopifyPayPal data fetcher. (Image 6)
![Image 6](https://documentation.ixopay.com/manual/assets/ideal-img/shopify-image-6-paypayl-data-fetcher.1c2d196.1186.png)Image 6