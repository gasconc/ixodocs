---
title: Transaction types
summary: ' Transaction types'
tags:
- api
- ixopay
- chargeback
- refund
- authorization
- capture
- void
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/concepts/transactions/types
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* [Concepts](https://documentation.ixopay.com/docs/reference/concepts)
  * [Transactions](https://documentation.ixopay.com/docs/reference/concepts/transactions)
  * Transaction types

# Transaction types
The [IXOPAY platform](https://www.ixopay.com) supports various transaction types, each serving a specific purpose in the payment processing flow. Most of these transactions can be initiated by calling the corresponding [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) method. Upon creation, each transaction is assigned a unique ID (`uuid`), which you should store in your database for future reference.
Availability
Please note that the availability and support for certain transaction types may vary depending on the adapter and payment method.
Here are the different transaction types supported by IXOPAY platform, along with their stages and descriptions:  
| Type  | Stage  | Description  |  
| --- | --- | --- |  
| [Debit](https://documentation.ixopay.com/api/transaction/debit)  | Initial  | Debits the customer's payment instrument with the specified amount.  
**Guide** : [Hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages), [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js)  |  
| [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize)  | Initial  | Reserves the payment amount on the customer's payment instrument for a future _Capture_ transaction.  
**Guide** : [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds)  |  
| [Incremental authorization](https://documentation.ixopay.com/api/transaction/incremental-authorization)  | Follow-up  | Increases the reserved payment amount on the customer's payment instrument for a future _Capture_ transaction.  
**Guide** : [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds#prolonging-or-increasing-held-funds)  |  
| [Capture](https://documentation.ixopay.com/api/transaction/capture)  | Follow-up  | Completes a payment that was previously authorized with a _Preauthorize_ transaction.  
**Guide** : [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds#transferring-funds)  |  
| [Void](https://documentation.ixopay.com/api/transaction/void)  | Follow-up  | Cancels a previously performed _Preauthorize_ transaction, releasing the reserved funds on the customer's payment instrument.  
**Guide** : [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds#releasing-held-funds)  |  
| [Refund](https://documentation.ixopay.com/api/transaction/refund)  | Follow-up  | Reverses a payment made with the _Debit_ or _Capture_ method, crediting the customer's payment instrument.  
**Guide** : [Handling refunds](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments)  |  
| [Payout](https://documentation.ixopay.com/api/transaction/payout)  | Initial  | Credits the customer's account with the specified amount from the merchant's account.  
**Guide** : [Payouts](https://documentation.ixopay.com/docs/guides/payments/payouts)  |  
| Chargeback  | Follow-up external  | A negative booking on the merchant's account triggered by the end customer, disputing a previously performed payment.  
**Guide** : [Handling refunds](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks)  |  
| Chargeback Reversal  | Follow-up external  | Reverses a previous _Chargeback_ when a dispute has been won by the merchant.  
**Guide** : [Handling refunds](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals)  |  
| [Register](https://documentation.ixopay.com/api/transaction/register)  | Initial  | Registers a customer's payment instrument for future charges.  
**Guide** : [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving#set-up-future-payments)  |  
| [Deregister](https://documentation.ixopay.com/api/transaction/deregister)  | Follow-up  | Deletes a previously registered payment instrument from the merchant's system, preventing future charges on the payment method.  
**Guide** : [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving#deleting-saved-payment-information)  |  
For detailed information on each transaction type and how to use them effectively, refer to the respective API documentation.