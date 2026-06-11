---
title: Customer-initiated transactions
summary: ' Customer-initiated transactions'
tags:
- integration-options-https-documentation-ixopay-com-docs-guides-payments-customer-initiated-integration-options-direct-link-integration-options
- transaction-indicators-https-documentation-ixopay-com-docs-guides-payments-customer-initiated-transaction-indicators-direct-link-transaction-indicators
- strong-customer-authentication-secure-https-documentation-ixopay-com-docs-guides-payments-customer-initiated-strong-customer-authentication-secure-direct-link-strong-customer-authentication-secure
- saving-payment-information-https-documentation-ixopay-com-docs-guides-payments-customer-initiated-saving-payment-information-direct-link-saving-payment-information
- api
- 3ds
- 3d-secure
- pci
- ixopay
- recurring
source_url: https://documentation.ixopay.com/docs/guides/payments/customer-initiated
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Customer-initiated transactions

# Customer-initiated transactions
Customer-initiated transactions are transactions initiated by the customer, whether in-person, online, or through other means, such as telephone or mobile. These transactions can be in the form of a one-time purchase, a recurring payment, or a pre-authorized payment. They are transactions in which the customer is present and actively participating.
While most transactions we are familiar with are customer-initiated, there are also [merchant initiated transactions](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated). These are initiated by the merchant using stored payment information.
The merchant has to choose the correct transaction type based on the nature of the payment. It is important to select the correct transaction type to avoid issues such as chargebacks or declines due to incorrect information. Ensuring the correct transaction type is chosen can help merchants avoid fraud and ensure a smoother payment experience for both themselves and their customers.
## Integration options[​](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#integration-options "Direct link to Integration options")
Customer-initiated transactions can be integrated into a website using either hosted payment pages or payment.js. [Hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) are web pages that are hosted by the [IXOPAY platform](https://www.ixopay.com) and allow customers to enter their payment information. [payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) is a client-side library that merchants can use to create custom payment forms on their website.
  * [Debit](https://documentation.ixopay.com/api/transaction/debit): A payment transaction where the funds are immediately transferred.
  * [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize): A payment transaction where the merchant reserves the amount of the payment on the customer's card but does not transfer funds until a [capture](https://documentation.ixopay.com/api/transaction/capture) API call is made. If the merchant needs to [void](https://documentation.ixopay.com/api/transaction/void) the transaction, the funds will be deallocated. For details, see our article on [saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).
  * [Incremental authorization](https://documentation.ixopay.com/api/transaction/incremental-authorization): A follow-up payment transaction to a previous preauhtorize transaction that increases or prolongs the authorized amount on the customer's card. For details, see our article on [saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).

## Transaction indicators[​](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#transaction-indicators "Direct link to Transaction indicators")
To indicate what kind of payment a merchant is planning, a [transaction indicator](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators) is used. You should supply a `transactionIndicator` when creating a new transaction, if a merchant does not provide a transaction indicator, a default value will be used. For debit and preauthorize transactions, the default transaction indicator is `SINGLE`, which indicates a one-time payment. For register transactions, the default transaction indicator is `INITIAL`, which indicates the first of a series of payments.
The transaction indicators that are relevant to customer-initiated transactions include:  
| Transaction indicator  | Description  |  
| --- | --- |  
| `SINGLE`  | Indicates a one-time payment.  |  
| `INITIAL`  | The first of a series of payments, such as for a subscription service.  |  
| `CARDONFILE`  | Used when the customer has previously stored their payment instrument, such as a credit card, and is now using it again to perform a one-time payment.  |  
| `FIRST-CARDONFILE`  | Indicates a one-time payment, but the PCI-compliant merchant stores the payment instrument of the customer themselves.  |  
When using a `CARDONFILE` transaction indicator, the merchant has to collect 3DS browser data and send it to the IXOPAY platform.
For a full list of transaction indicators, please see our separate [transaction indicators](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators) page in the reference.
## Strong customer authentication and 3-D Secure[​](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#strong-customer-authentication-and-3-d-secure "Direct link to Strong customer authentication and 3-D Secure")
When processing payments, merchants must comply with Strong Customer Authentication (SCA) regulations. SCA is a European Union regulatory requirement designed to make online payments more secure. Merchants must use SCA for customer-initiated payments, but for merchant-initiated payments, SCA is not required.
For more information on 3-D Secure, please see our separate [3-D Secure](https://documentation.ixopay.com/docs/guides/features/3d-secure) guide.
## Saving payment information[​](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#saving-payment-information "Direct link to Saving payment information")
During a customer-initiated transaction, the option to save payment information is available. This means that the credit card data is stored securely in the PCI-compliant vault of [IXOPAY](https://www.ixopay.com).
For details on how to save payment information, see our dedicated guide [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving).