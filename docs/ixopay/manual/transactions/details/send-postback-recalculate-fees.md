---
title: Send Postback / Recalculate Fees
summary: ' Transaction Detailshttps://documentation.ixopay.com/manual/docs/transactions/details  Send
  Postback / Recalculate Fees'
tags:
- send-postback-https-documentation-ixopay-com-manual-docs-transactions-details-send-postback-recalculate-fees-send-postback-direct-link-send-postback
- recalculate-fees-https-documentation-ixopay-com-manual-docs-transactions-details-send-postback-recalculate-fees-recalculate-fees-direct-link-recalculate-fees
- ixopay
- transaction
- merchant
- reconciliation
source_url: https://documentation.ixopay.com/manual/docs/transactions/details/send-postback-recalculate-fees
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  * Send Postback / Recalculate Fees

# Send Postback / Recalculate Fees
## Send Postback[​](https://documentation.ixopay.com/manual/docs/transactions/details/send-postback-recalculate-fees#send-postback "Direct link to Send Postback")
Depending on the given Permissions, Users can re-send the last Postback Notification (e.g. in case the Callback URL was not available). This can be done by using the **Send Postback** Action Button in the Transaction Details or using the **Resend Postback** Button in the Outgoing Postback Request Log entry.
![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-buttons.131e552.1280.png)Transaction Details![Outgoing Postback Request](https://documentation.ixopay.com/manual/assets/ideal-img/outgoing-postback-request.1ed7abd.1280.png)Outgoing Postback Request![Postback sent](https://documentation.ixopay.com/manual/assets/ideal-img/postback-sent.493df28.1280.png)Postback sent
tip
Don't forget to either send a `callbackUrl` in the Transaction Request or to configure a Merchant's notification URL for the Reconciliation Settings (Fallback).
![Merchant notification URL](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-notification-url.6e8ba87.1280.png)Merchant notification URL
## Recalculate Fees[​](https://documentation.ixopay.com/manual/docs/transactions/details/send-postback-recalculate-fees#recalculate-fees "Direct link to Recalculate Fees")
Depending on the given Permissions, Users can recalculate fees. This is particularly useful in case of changes to the [Fee Set Configuration](https://documentation.ixopay.com/manual/docs/connector/fee-management/set-up-fees) of the processing Connector.
![Recalculate fees confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/recalculate-fees-confirmation.550b3d7.1002.png)Recalculate fees confirmation![Fees recalculated](https://documentation.ixopay.com/manual/assets/ideal-img/fees-recalculated.6d77695.1280.png)Fees recalculated