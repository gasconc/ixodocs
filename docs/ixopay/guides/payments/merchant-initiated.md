---
title: Merchant-initiated transactions
summary: ' Merchant-initiated transactions'
tags:
- integration-options-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-integration-options-direct-link-integration-options
- transaction-indicators-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-transaction-indicators-direct-link-transaction-indicators
- authorization-requirements-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-authorization-requirements-direct-link-authorization-requirements
- cases-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-cases-direct-link-cases
- multiple-payments-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-multiple-payments-direct-link-multiple-payments
- single-payments-https-documentation-ixopay-com-docs-guides-payments-merchant-initiated-single-payments-direct-link-single-payments
- api
- rest
- ixopay
- recurring
source_url: https://documentation.ixopay.com/docs/guides/payments/merchant-initiated
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Merchant-initiated transactions

# Merchant-initiated transactions
Merchant-initiated transactions (MITs) allow merchants to charge a customer's payment method at a later time, without the customer being present. MITs are initiated by the merchant, rather than the customer, and are typically used for subscription-based businesses, installment payments, split payments, and penalty payments.
MITs require saved payment information, for information about how to save payment information see our dedicated guide [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).
Merchant-initiated transactions provide several benefits to merchants:
  * Increased customer retention: With MITs, merchants can set up recurring payments, making it easier for customers to continue using their services or products.
  * Reduced operational costs: MITs automate the payment process, eliminating the need for manual payments and reducing administrative tasks and costs.
  * Improved cash flow: By automating the payment process, merchants can improve cash flow by ensuring timely payments.

## Integration options[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#integration-options "Direct link to Integration options")
Merchants who wish to use MIT from their backend system need to integrate the [IXOPAY platform](https://www.ixopay.com) REST API. To perform a merchant-initiated transaction, merchants have to provide a `referenceUuid` field that points to the previous transaction ID that stored the payment instrument. This way, merchants can easily charge customers' stored payment information without requiring additional authorization from the customer.
Typically, merchant-initiated transactions are started with one of these [transaction types](https://documentation.ixopay.com/docs/reference/concepts/transactions/types):
  * [Debit](https://documentation.ixopay.com/api/transaction/debit): A payment transaction where the funds are immediately transferred.
  * [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize): A payment transaction where the merchant reserves the amount of the payment on the customer's card but does not transfer funds until a [capture](https://documentation.ixopay.com/api/transaction/capture) API call is made. If the merchant needs to [void](https://documentation.ixopay.com/api/transaction/void) the transaction, the funds will be deallocated. For details, see our article on [saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).
  * [Incremental authorization](https://documentation.ixopay.com/api/transaction/incremental-authorization): A follow-up payment transaction to a previous preauhtorize transaction that increases or prolongs the authorized amount on the customer's card. For details, see our article on [saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).

## Transaction indicators[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#transaction-indicators "Direct link to Transaction indicators")
To indicate what kind of payment a merchant is planning, a [transaction indicator](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators) is used. You should supply a `transactionIndicator` when creating a new transaction, if a merchant does not provide a transaction indicator, a default value will be used. For debit and preauthorize transactions, the default transaction indicator is `SINGLE`, which indicates a one-time payment. For register transactions, the default transaction indicator is `INITIAL`, which indicates the first of a series of payments.
For merchant-initiated transactions, the following transaction indicators are relevant:  
| Transaction indicator  | Description  |  
| --- | --- |  
| `RECURRING`  | A subsequent payment in a series of payments, it is initiated by the merchant. Follows a [customer initiated transaction](https://documentation.ixopay.com/docs/guides/payments/customer-initiated) with transaction indicator `INITIAL`.  |  
| `CARDONFILE-MERCHANT-INITIATED`  | A single payment with stored payment information, it is initiated by the merchant.  |  
For a full list of transaction indicators, please see our separate [transaction indicators](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators) page in the reference.
## Authorization Requirements[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#authorization-requirements "Direct link to Authorization Requirements")
When initiating a merchant-initiated transaction, merchants must ensure that they have the customer's explicit consent to charge their payment method. Merchants must also ensure that they have the necessary authorization to charge the payment method.
Merchants should also keep in mind that authorization requirements may vary depending on the payment method and the customer's location. For example, some payment methods may require preauthorization or authorization for the entire payment amount before the merchant can initiate an merchant-initiated transaction.
warning
It is important to note that the first payment made using a credit card **must have** [strong customer authentication (SCA)](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#strong-customer-authentication-and-3-d-secure) enabled.
## Use cases[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#use-cases "Direct link to Use cases")
In this section, we explore different use cases for merchant-initiated transactions and how to implement them using the IXOPAY platform.
### Multiple payments[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#multiple-payments "Direct link to Multiple payments")
  * **Recurring payments** (subscriptions): Merchants can offer subscription-based services and charge their customers on a regular basis (e.g., weekly, monthly, yearly). With recurring payments, the merchant stores the customer's payment information and initiates payments at regular intervals without the need for the customer to take any action. The customer is usually notified beforehand about the recurring nature of the payments and has the option to cancel at any time. For more information, refer to the getting started guide on [recurring payments](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments).
  * **Installments** or **split payments** (buy now, pay later): Merchants can offer customers the option to pay for their purchases in installments. This can be useful for large purchases that customers may not be able to pay for in one go.

Steps to use:
  1. Save payment details, see our guide [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).
  2. Optionally, notify the customer about upcoming payment.
  3. Make a [debit API call](https://documentation.ixopay.com/api/transaction/debit) on merchant's backend with the `RECURRING` transaction indicator.
  4. Invoice customer, repeat steps 2–3 until the full amount is paid or subscription is cancelled.

### Single payments[​](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#single-payments "Direct link to Single payments")
Single payments can be used for delayed charges (provide service now, but charge the actually consumed service later) and penalty charges (no-show penalty for hotels, other penalties as examples). Here are some common use cases:
  * **Delayed Charges** : Merchants can offer services or goods to customers without charging them immediately, and instead charge them later.
  * **Penalty Charges** : Merchants can charge customers for penalties such as no-show fees for hotels or late return fees for rental services.

Steps to use **delayed charges** :
  1. Save payment details using a [preauthorize API call](https://documentation.ixopay.com/api/transaction/preauthorize) with the `CARDONFILE-MERCHANT-INITIATED` transaction indicator. See our guide [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving) for more details.
  2. Provide service or goods to customer.
  3. Make a [capture API call](https://documentation.ixopay.com/api/transaction/capture) on merchant's backend.

Steps to use **penalty charges** :
  1. Save payment details using a [register API call](https://documentation.ixopay.com/api/transaction/preauthorize), see our guide [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).
  2. Provide service or goods to customer.
  3. Make a [debit API call](https://documentation.ixopay.com/api/transaction/capture) on merchant's backend with the `CARDONFILE-MERCHANT-INITIATED` transaction indicator.

  * [Integration options](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#integration-options)
  * [Transaction indicators](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#transaction-indicators)
  * [Authorization Requirements](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#authorization-requirements)
  * [Use cases](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#use-cases)
    * [Multiple payments](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#multiple-payments)
    * [Single payments](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated#single-payments)