---
title: Transaction indicators
summary: ' Transaction indicators'
tags:
- single-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-single-direct-link-single
- first-card-file-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-first-card-file-direct-link-first-card-file
- card-file-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-card-file-direct-link-card-file
- merchant-initiated-card-file-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-merchant-initiated-card-file-direct-link-merchant-initiated-card-file
- initial-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-initial-direct-link-initial
- recurring-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-recurring-direct-link-recurring
- mail-telephone-order-https-documentation-ixopay-com-docs-reference-concepts-transactions-indicators-mail-telephone-order-direct-link-mail-telephone-order
- api
- 3ds
- 3d-secure
source_url: https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators
portal: ixopay-dev
updated: '2026-06-15'
related: []
---

* [Concepts](https://documentation.ixopay.com/docs/reference/concepts)
  * [Transactions](https://documentation.ixopay.com/docs/reference/concepts/transactions)
  * Transaction indicators

# Transaction indicators
Particularly for card payments you have to set the `transactionIndicator` in the transaction's data to indicate the type of CoF or recurring transaction.
Follow-up transactions
First transaction
SINGLE
FIRST-CARDONFILE
INITIAL
CARDONFILE
CARDONFILE-MERCHANT-INITIATED
RECURRING  
| transactionIndicator  | Category  | Description  | Initiator  |  
| --- | --- | --- | --- |  
| [SINGLE](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#single)  | Industry practice  | A one-off transaction (without any recurring options).  | Customer  |  
| [FIRST-CARDONFILE](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#first-card-on-file)  | Industry practice  | A one-off transaction, and the merchant stores the PAN themselves.  | Customer  |  
| [CARDONFILE](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#card-on-file)  | Industry practice  | Card-on-file transaction, initiated by the customer.  | Customer  |  
| [CARDONFILE-MERCHANT-INITIATED](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#merchant-initiated-card-on-file)  | Industry practice  | Unscheduled card-on-file transaction.  | Merchant  |  
| [INITIAL](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#initial)  | Recurring  | The first transaction of a recurring series.  | Customer  |  
| [RECURRING](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#recurring)  | Recurring  | Subsequent transactions of a recurring series, which are usually initiated automatically.  | Merchant  |  
| [MOTO](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#mail-or-telephone-order)  |   | Mail and telephone order.  |   |  
## Single[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#single "Direct link to Single")
A `SINGLE` transaction indicates a customer triggered one-off payment where the customer is present. If `withRegister` is sent with `true`, the payment instrument is stored for future use in _card-on-file_ payments.
We highly recommend enabling [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication for liability shift when the customer is present and initiating the transaction. This provides an additional layer of security and can help protect against chargebacks. 3-D Secure authentication might be required in certain regions, for example, refer to [EBA's PSD2 SCA](https://finance.ec.europa.eu/publications/strong-customer-authentication-requirement-psd2-comes-force_en) announcement.  
| `transactionIndicator`  | `SINGLE`  |  
| --- | --- |  
| `withRegister`  | `false`  | `true`  |  
| `referenceUuid`  | n/a  | n/a  |  
| 3DS recommendation  |  `OFF`, `OPTIONAL` or `MANDATORY`  |  `OPTIONAL` or `MANDATORY`  |  
| Initiator  | Customer  |  
Default
`SINGLE` is the default transaction indicator for [Debit](https://documentation.ixopay.com/api/transaction/debit) and [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transactions where `withRegister` is `false`.
_Example_ : cart checkout.
## First card-on-file[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#first-card-on-file "Direct link to First card-on-file")
A `FIRST-CARDONFILE` transaction indicates a customer triggered one-off payment where the customer is present. This is equivalent to `SINGLE` where `withRegister` is `true`, except the token is not stored in the [IXOPAY platform](https://www.ixopay.com)'s vault but by the PCI-compliant merchant themselves.
We highly recommend enabling [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication for liability shift when the customer is present and initiating the transaction. This provides an additional layer of security and can help protect against chargebacks. 3-D Secure authentication might be required in certain regions, for example, refer to [EBA's PSD2 SCA](https://finance.ec.europa.eu/publications/strong-customer-authentication-requirement-psd2-comes-force_en) announcement.  
| `transactionIndicator`  | `FIRST-CARDONFILE`  |  
| --- | --- |  
| `withRegister`  | `false`  |  
| `referenceUuid`  | n/a  |  
| 3DS recommendation  |  `OPTIONAL` or `MANDATORY`  |  
| Initiator  | Customer  |  
PCI only
This transaction indicator only applies to the [PCI transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api) and merchants that are PCI certified.
_Example_ : cart checkout.
## Card-on-file[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#card-on-file "Direct link to Card-on-file")
A `CARDONFILE` transaction indicates a customer triggered one-off card-on-file payment where the customer is present. That means, the payment instrument was previously stored.
We highly recommend enabling [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication for liability shift when the customer is present and initiating the transaction. This provides an additional layer of security and can help protect against chargebacks. 3-D Secure authentication might be required in certain regions, for example, refer to [EBA's PSD2 SCA](https://finance.ec.europa.eu/publications/strong-customer-authentication-requirement-psd2-comes-force_en) announcement.  
| `transactionIndicator`  | `CARDONFILE`  |  
| --- | --- |  
| `withRegister`  | `false`  |  
| `referenceUuid`  |  `uuid` of a `SINGLE` transaction, where `withRegister` was `true`  |  
| 3DS recommendation  |  `OPTIONAL` or `MANDATORY`  |  
| Initiator  | Customer  |  
_Example_ : cart checkout.
## Merchant-initiated card-on-file[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#merchant-initiated-card-on-file "Direct link to Merchant-initiated card-on-file")
A `CARDONFILE-MERCHANT-INITIATED` transaction indicates an _unscheduled_ merchant-initiated card-on-file payment.  
| `transactionIndicator`  | `CARDONFILE-MERCHANT-INITIATED`  |  
| --- | --- |  
| `withRegister`  | `false`  |  
| `referenceUuid`  |  `uuid` of a `SINGLE` transaction where `withRegister` was `true`  |  
| 3DS recommendation  | not possible, cardholder not present  |  
| Initiator  | Merchant  |  
_Example_ : automated balance top-up.
## Initial[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#initial "Direct link to Initial")
An `INITIAL` transaction indicates the first transaction in a recurring series of scheduled payments, where the customer is present.
Transaction criteria
`INITIAL` and `RECURRING` indicators should only be used if the merchant intends to process payments at regular, consistent intervals, and always for the same amount.
We highly recommend enabling [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication for liability shift when the customer is present and initiating the transaction. This provides an additional layer of security and can help protect against chargebacks. 3-D Secure authentication might be required in certain regions, for example, refer to [EBA's PSD2 SCA](https://finance.ec.europa.eu/publications/strong-customer-authentication-requirement-psd2-comes-force_en) announcement.  
| `transactionIndicator`  | `INITIAL`  |  
| --- | --- |  
| `withRegister`  | `true`  |  
| `referenceUuid`  | n/a  |  
| 3DS recommendation  |  `OPTIONAL` or `MANDATORY`  |  
| Initiator  | Customer  |  
Default
`INITIAL` is the default transaction indicator for [Debit](https://documentation.ixopay.com/api/transaction/debit) and [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transactions where `withRegister` is `true`.
If you want to use a stored payment instrument (card-on-file) for recurring transactions, you can use this transaction indicator and send the `uuid` of the initial `SINGLE` transaction that registered the card as a `referenceTransaction`.
_Example_ : customer subscribes to a monthly service.
## Recurring[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#recurring "Direct link to Recurring")
A `RECURRING` transaction indicates a subsequent card-on-file transaction in a recurring series of payments, where the customer is not present.
Transaction criteria
`INITIAL` and `RECURRING` indicators should only be used if the merchant intends to process payments at regular, consistent intervals, and always for the same amount.  
| `transactionIndicator`  | `RECURRING`  |  
| --- | --- |  
| `withRegister`  | `false`  |  
| `referenceUuid`  |  `uuid` of an `INITIAL` transaction  |  
| 3DS recommendation  | not possible, cardholder not present  |  
| Initiator  | Merchant  |  
_Example_ : Monthly billing of a subscribed service.
## Mail or telephone order[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#mail-or-telephone-order "Direct link to Mail or telephone order")
A `MOTO` transaction indicates the card data is entered by a service agent and not by the customer themselves.  
| `transactionIndicator`  | `MOTO`  |  
| --- | --- |  
| `withRegister`  | `false`  | `true`  |  
| `referenceUuid`  | n/a  | n/a  |  
| 3DS recommendation  | exempted  | exempted  |  
_Example_ : call-center purchase.