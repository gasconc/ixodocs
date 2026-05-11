---
title: Capture/Void
summary: ' Transaction Detailshttps://documentation.ixopay.com/manual/docs/transactions/details'
tags:
- void-transaction-https-documentation-ixopay-com-manual-docs-transactions-details-capture-void-void-transaction-direct-link-void-transaction
- partial-capture-transaction-https-documentation-ixopay-com-manual-docs-transactions-details-capture-void-partial-capture-transaction-direct-link-partial-capture-transaction
- automatic-capture-manual-capture-void-https-documentation-ixopay-com-manual-docs-transactions-details-capture-void-automatic-capture-manual-capture-void-direct-link-automatic-capture-manual-capture-void
- api
- ixopay
- psp
- authorization
- capture
- void
- transaction
source_url: https://documentation.ixopay.com/manual/docs/transactions/details/capture-void
portal: ixopay-manual
updated: '2026-05-11'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  * Capture/Void

# Capture/Void
## Void Transaction[​](https://documentation.ixopay.com/manual/docs/transactions/details/capture-void#void-transaction "Direct link to Void Transaction")
Depending on the given Permissions and prerequisites, Users can void transactions manually (e.g. in case a customer get directly in contact with customer support). This can be done by using the **Void** Action Buttons in the Transaction Details.
To void a Transaction, the Transaction has to fulfill some conditions:
  * The **Transaction Type** has to be Preauthorize
  * The **Transaction status** has to be success
  * The Transaction must **not be captured or voided** already
  * The Connector must support Transaction Type Void

Once confirmed the Void Transaction will be created and shown in the Transaction Status of the original Preauthorize Transaction.
![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/capture-void.843392e.1280.png)Transaction Details![Void confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/void-confirmation.7470484.996.png)Void confirmation![Void Transaction](https://documentation.ixopay.com/manual/assets/ideal-img/void-success.12a56a2.1280.png)Void Transaction
## (Partial) Capture Transaction[​](https://documentation.ixopay.com/manual/docs/transactions/details/capture-void#partial-capture-transaction "Direct link to \(Partial\) Capture Transaction")
Depending on the given Permissions and prerequisites, Users can (partially) capture transactions manually. This can be done by using the **Capture** Action Buttons in the Transaction Details.
To capture a Transaction, the Transaction has to fulfill some conditions:
  * The **Transaction Type** has to be Preauthorize
  * The **Transaction status** has to be success
  * The Transaction must **not be captured or voided fully** already
  * The Connector must support Transaction Type (Partial) Capture

During Confirmation, the User can then change the Amount to perform partial captures. Once confirmed the Capture Transaction will be created and shown in the Transaction Status of the original Preauthorize Transaction.
![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/capture-void.843392e.1280.png)Transaction Details![Capture confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/screen-shot-2022-12-06-at-5-33-13-pm.6472a8b.990.png)Capture confirmation![Capture Transaction](https://documentation.ixopay.com/manual/assets/ideal-img/screen-shot-2022-12-06-at-5-33-23-pm.bbf31e9.1280.png)Capture Transaction
note
(Partial) Capture and (Partial) Void Transactions can also be initiated via the [IXOPAY platform](https://www.ixopay.com)'s [API Testing Tool](https://documentation.ixopay.com/manual/docs/api-testing/transaction-api), if the adapter supports these Transaction Types. In any case the Reference UUID must be provided. In case of Partial Void / Partial Capture, add the desired amount and currency, otherwise transactions will result in an error.
## Automatic Capture and Manual Capture / Void[​](https://documentation.ixopay.com/manual/docs/transactions/details/capture-void#automatic-capture-and-manual-capture--void "Direct link to Automatic Capture and Manual Capture / Void")
The IXOPAY platform allows merchants to schedule future automatic captures for the full amount (successful) preauthorize transaction using either the **captureInMinutes** parameter (see also [API Documentation](https://documentation.ixopay.com/api/transaction/preauthorize)) or **Auto capture in days** parameter (see also [Virtual Terminal](https://documentation.ixopay.com/manual/docs/virtual-terminal-moto)).
Merchants are allowed to manually capture or void an authorization with a future-scheduled automatic capture. However, doing so will result in the IXOPAY platform discarding any scheduled capture. In particular, if the merchant has only partially captured a certain amount manually, it remains his responsibility to manually capture the remaining amount.
note
The scheduled capture deadline cannot guaranteed due to technical or external circumstances (e.g. pending state on PSP's side,). It is the merchant’s responsibility to ensure that the future-scheduled capture does not happen after the authorization’s expiration on the PSP’s side.