---
title: Sepa
summary: 'Configure the following parameters for the Connector see Connector Config
  - SepaExpress: 1. Fill in the mandatory Username 2.'
tags:
- sepaexpress-https-documentation-ixopay-com-manual-adapters-sepa-sepaexpress-direct-link-sepaexpress
- sepaexpressv2-https-documentation-ixopay-com-manual-adapters-sepa-sepaexpressv2-direct-link-sepaexpressv2
- enable-sepa-webhooks-https-documentation-ixopay-com-manual-adapters-sepa-enable-sepa-webhooks-direct-link-enable-sepa-webhooks
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-sepa-data-fetcher-configuration-direct-link-data-fetcher-configuration
- reconciliation-https-documentation-ixopay-com-manual-adapters-sepa-reconciliation-direct-link-reconciliation
- api
- webhook
- ixopay
- refund
- sepa
source_url: https://documentation.ixopay.com/manual/adapters/sepa
portal: ixopay-manual
updated: '2026-06-11'
related: []
---

* Sepa

# Sepa
## SepaExpress[​](https://documentation.ixopay.com/manual/adapters/sepa#sepaexpress "Direct link to SepaExpress")
Configure the following parameters for the Connector (see Connector Config - SepaExpress):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the mandatory **API Secret**
  4. Fill in the mandatory **Extra Data: sharedSecret**
  5. Fill in the optional **Extra Data: integrationKey**
  6. Fill in the optional **Extra Data: gatewayHost**
  7. Select the optional **Extra Data: useOwnPaymentPage** : True, False
  8. Select the optional **Extra Data: treatPendingAsSuccess** : True, False
  9. Fill in the optional **Extra Data: useMerchantTxIdAsMetaData**

![Connector Config - SepaExpress](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-sepaexpress.ab40c6f.1280.png)Connector Config - SepaExpress
## SepaExpressV2[​](https://documentation.ixopay.com/manual/adapters/sepa#sepaexpressv2 "Direct link to SepaExpressV2")
This adapter requires an additional setup
If you want to use this adapter, please contact your Customer Success Manager directly, or contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
Configure the following parameters for the Connector (see Connector Config - SepaExpressV2):
  1. Fill in the mandatory **SepaExpress Username**
  2. Fill in the mandatory **SepaExpress Password**
  3. Fill in the mandatory **Extra Data: Scheme** : default sepa
  4. Fill in the mandatory **Extra Data: Merchant ID**
  5. Fill in the mandatory **Extra Data: Connector ID**
  6. Fill in the mandatory **Extra Data: Tenant Name**
  7. Fill in the mandatory **Extra Data: Approval By** : approval options (described below) to be set by user.
  8. Fill in the mandatory **Extra Data: onlyAllowRefundOnSucces:** true, false

![Connector Config - SepaExpressV2](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-sepaexpressv2.6442bbe.1280.png)Connector Config - SepaExpressV2
[Adapter specifics](https://documentation.ixopay.com/adapters/sepa-express-v2)
The 4 different **Approval Options** available are:
  * AIS: Your customer approves the mandate by login to customers bank account.
  * Click: Your customer approves the mandate by ticking a check box and/or clicking an approve button on the web page.
  * SMS: Your customer approves the mandate by entering a TAN received via SMS
  * Email: Your customer approves the mandate by entering a TAN received via email

## Enable SEPA Webhooks[​](https://documentation.ixopay.com/manual/adapters/sepa#enable-sepa-webhooks "Direct link to Enable SEPA Webhooks")
To ensure the correct status of transactions in[IXOPAY platform](https://www.ixopay.com) for SepaExpressV2 Webhook events must be sent to the connectors Notification URL. Therefore get in contact with SepaExpress to enable Webhook Events for the following events for you:
  * **Payment** :
    * `payment.created`
    * `payment.pendingApproval`
    * `payment.pendingReview`
    * `payment.pendingSubmission`
    * `payment.submitted`
    * `payment.failed`
    * `payment.discarded`
    * `payment.expired`
    * `payment.paid`
  * **Payout** :
    * `payout.created`
    * `payout.pendingReview`
    * `payout.pendingSubmission`
    * `payout.submitted`
    * `payout.failed`
    * `payout.discarded`
    * `payout.expired`
    * `payout.paid`
  * **Refund** :
    * `refund.created`
    * `refund.pendingReview`
    * `refund.pendingSubmission`
    * `refund.submitted`
    * `refund.failed`
    * `refund.discarded`
    * `refund.expired`
    * `refund.paid`

![Connector Notification URL](https://documentation.ixopay.com/manual/assets/ideal-img/connector-notification-url.b63e048.1280.png)Connector Notification URL
note
Credentials (SepaSandBox MerchantId etc…) and testing data (IBAN) can be found here: .
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/sepa#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider.
### Reconciliation[​](https://documentation.ixopay.com/manual/adapters/sepa#reconciliation "Direct link to Reconciliation")
Configure the following Parameters for the Reconciliation Data Fetcher to fetch Reconciliation (see Reconciliation Data Fetcher Provider Level):
  1. Fill in an optional **Name**
  2. Fill in the expected **Interval** in which the Reconciliation File should be fetched - days, hours
  3. Select the Adapter **SepaExpressV2**
  4. Enable **Testmode**

![Reconciliation Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation-data-fetcher-provider-level.ee898d5.986.png)Reconciliation Data Fetcher Provider Level