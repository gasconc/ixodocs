---
title: Simulate Chargeback / Chargeback Reversal
summary: ' Transaction Detailshttps://documentation.ixopay.com/manual/docs/transactions/details  Simulate
  Chargeback / Chargeback Reversal'
tags:
- ixopay
- psp
- chargeback
- capture
- transaction
source_url: https://documentation.ixopay.com/manual/docs/transactions/details/chargeback
portal: ixopay-manual
updated: '2026-06-01'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  * Simulate Chargeback / Chargeback Reversal

# Simulate Chargeback / Chargeback Reversal
Depending on the given Permissions and prerequisites, Users can simulate chargebacks (e.g. in case a PSP is not supporting end-to-end live tests including chargebacks). This can be done by using the **Simulate Chargeback** Action Button in the Transaction Details.
To simulate a chargeback for a Transaction, the Transaction has to fulfill some conditions:
  * Processed using a connector configured from the [Simulator or SimulatorPCI](https://documentation.ixopay.com/manual/adapters/simulator) adapter
  * The **Transaction Type** has to be Debit or Capture
  * The **Transaction Status** has to be successful
  * The Transaction must not be **charged back** already

For (simulated) chargebacks, Users with the given Permission can simulate chargeback reversals as well. This can be done by using the **Simulate Chargeback Reversal** Action Button in the Transaction Details.
![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-buttons.131e552.1280.png)Transaction Details![Chargeback confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/chargeback-confirmation.0cf5d35.998.png)Chargeback confirmation![Initial transaction: charged back](https://documentation.ixopay.com/manual/assets/ideal-img/initial-transaction-charged-back.4b3e038.1280.png)Initial transaction: charged back![Chargeback transaction](https://documentation.ixopay.com/manual/assets/ideal-img/chargeback-transaction.910ec31.1280.png)Chargeback transaction![Chargeback reversal confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/chargeback-reversal-confirmation.bdf4704.1004.png)Chargeback reversal confirmation![Chargeback transaction: reversed](https://documentation.ixopay.com/manual/assets/ideal-img/chargeback-transaction-reversed.c15f33b.1280.png)Chargeback transaction: reversed