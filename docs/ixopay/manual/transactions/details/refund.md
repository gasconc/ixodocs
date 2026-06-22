---
title: Refund
summary: ' Transaction Detailshttps://documentation.ixopay.com/manual/docs/transactions/details'
tags:
- additional-connector-settings-https-documentation-ixopay-com-manual-docs-transactions-details-refund-additional-connector-settings-direct-link-additional-connector-settings
- api
- ixopay
- refund
- capture
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/transactions/details/refund
portal: ixopay-manual
updated: '2026-06-22'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  * Refund

# Refund
Depending on the given Permissions and prerequisites, Users can refund transactions manually (e.g. to avoid chargebacks). This can be done by using the **Refund** Action Button in the Transaction Details.
To refund a Transaction, the Transaction has to fulfill some conditions:
  * The **Transaction Type** has to be Debit or Capture
  * The **Transaction status** has to be success or pending
  * The Transaction must **not be charged back or fully refunded** already
  * The **Connector must support** Transaction Type Refund

![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-buttons.131e552.1280.png)Transaction Details![Refund confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/refund-confirmation-comment.96dda95.990.png)Refund confirmation![Refund Transaction](https://documentation.ixopay.com/manual/assets/ideal-img/refund-transaction.5aa8ebb.1280.png)Refund Transaction
## Additional Connector Settings[​](https://documentation.ixopay.com/manual/docs/transactions/details/refund#additional-connector-settings "Direct link to Additional Connector Settings")
In case you do not see the Refund Action Button (e.g. for Merchant Users), but have the Permission enabled, you might need to enable an additional Connector Setting **Enable Refunds in UI.**
Follow these steps to activate the Connector Setting:
  1. Navigate to the **Connectors Details Overview** of the Connector you want to manually create Refunds for in the Transaction Details.
  2. Click **Edit** in the Connector Settings section and search for **Enable Refunds in UI**
  3. Click **Add** and **enter 1** to activate the setting
  4. Click **Save**

![Connector details](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview.52780f5.1280.png)Connector details![Find setting](https://documentation.ixopay.com/manual/assets/ideal-img/find-setting-enable-refunds.b8b6a8f.1162.png)Find setting![Setting: Enable refunds in UI](https://documentation.ixopay.com/manual/assets/ideal-img/setting-enable-refunds-in-ui.f76a1db.1124.png)Setting: Enable refunds in UI
tip
Refunds can also be initiated via the [IXOPAY platform](https://www.ixopay.com)'s [API Testing Tool](https://documentation.ixopay.com/manual/docs/api-testing/transaction-api). In this case the **Reference UUID** must be provided.