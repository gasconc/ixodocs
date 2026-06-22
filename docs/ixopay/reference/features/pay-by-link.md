---
title: Pay-by-Link
summary: IXOPAY's Pay-by-Link feature empowers you to create a secure URL for your
  customers to access a payment page. The payment page can be customized to ensure
  a seamless and branded payment experience.
tags:
- creating-pay-link-https-documentation-ixopay-com-docs-reference-features-pay-link-creating-pay-link-direct-link-creating-pay-link
- supported-transaction-types-https-documentation-ixopay-com-docs-reference-features-pay-link-supported-transaction-types-direct-link-supported-transaction-types
- email-delivery-https-documentation-ixopay-com-docs-reference-features-pay-link-email-delivery-direct-link-email-delivery
- pay-link-data-https-documentation-ixopay-com-docs-reference-features-pay-link-pay-link-data-direct-link-pay-link-data
- automatic-expiration-https-documentation-ixopay-com-docs-reference-features-pay-link-automatic-expiration-direct-link-automatic-expiration
- api
- json
- ixopay
- psp
- authorization
source_url: https://documentation.ixopay.com/docs/reference/features/pay-by-link
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * Pay-by-Link

# Pay-by-Link
IXOPAY's Pay-by-Link feature empowers you to create a secure URL for your customers to access a payment page. The payment page can be customized to ensure a seamless and branded payment experience. This document provides a comprehensive guide to using the Pay-by-Link feature.
Guide
For a detailed, step-by-step guide on integrating Pay-by-Link, refer to the [Pay-by-Link guide](https://documentation.ixopay.com/docs/guides/features/pay-by-link "Pay-by-Link guide") in our guides section.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#creating-a-pay-by-link "Direct link to Creating a Pay-by-Link")
To create a Pay-by-Link, simply create a transaction request as you typically would, while adding the additional parameter `payByLink` and specifying whether the link should be sent via email with the `sendByEmail` flag.
**Important:** The `sendByEmail` field must be explicitly set to `true` or `false`. If this field is omitted, no Pay-by-Link will be created.
### Supported transaction types[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#supported-transaction-types "Direct link to Supported transaction types")
A Pay-by-Link can be created using one of the following [transaction types](https://documentation.ixopay.com/docs/reference/concepts/transactions/types) at the _initial_ stage:
  * [Debit](https://documentation.ixopay.com/api/transaction/debit)
  * [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize)
  * [Payout](https://documentation.ixopay.com/api/transaction/payout)
  * [Register](https://documentation.ixopay.com/api/transaction/register)

### Email delivery[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#email-delivery "Direct link to Email delivery")
Setting `sendByEmail` to `true` will automatically send the link to the customer, provided that the `email` field has been specified for the customer. The email content itself can be customized. For more details, consult the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).
Here's an example of a Pay-by-Link request sent via email:
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```### Automatic expiration[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration "Direct link to Automatic expiration")
Pay-by-Link transactions can be set to expire after a specified number of minutes. For detailed information, see [automatic expiration below](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1).
## Pay-by-Link data[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#pay-by-link-data "Direct link to Pay-by-Link data")
The following fields in the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) response and the [callback](https://documentation.ixopay.com/docs/reference/integration/callbacks) request body are relevant for Pay-by-Links:
  * `redirectUrl` (`string`): This is the Pay-by-Link URL. It provides a direct link to the payment page, which offers a seamless and secure payment experience for customers.
  * `payByLinkData.cancelUrl` (`string`): This is the URL used for manual cancellation of a Pay-by-Link. To learn more about canceling Pay-by-Links, refer to [Cancellation — Manual cancellation](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation).
  * `payByLinkData.sendViaEmail` (optional `boolean`): This field represents the value of `sendByEmail` set during transaction creation.
  * `payByLinkData.expiresAt`[1](https://documentation.ixopay.com/docs/reference/features/pay-by-link#user-content-fn-1) (optional `string`): This field defines the [expiry time](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) using the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`.

Here are examples of a Pay-by-Link response:
  * API response
  * API response with expiration
  * Callback
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```info
To receive callbacks for transactions in the `pending` state, you need to enable the [connector setting](https://docs.ixopay.com/en/platform-user-administration-manual/connector/edit-connector/connector-settings) _Postback: Send on PENDING status_.
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```## Cancellation[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#cancellation "Direct link to Cancellation")
Pay-by-Links can be cancelled in two ways: automatically through expiration after a specified time period, or manually.
When a transaction is cancelled:
  * The transaction status is updated to `cancelled`.
  * The Pay-by-Link will redirect to one of the following:
    * `cancelUrl` if it has been specified.
    * the cancel result template if no URLs have been specified and a result template has been configured.
  * Payments processed directly by [IXOPAY platform](https://www.ixopay.com) are prevented if customers have already clicked the link before it was cancelled (customers will be redirected to the `cancelUrl` or the cancel result page).
  * Payments initiated by customers with a payment service provider (PSP) cannot be prevented in most cases.

Caveats
It's important to note that for technical reasons, cancelling a Pay-by-Link does not guarantee the prevention of customers from completing a transaction in all cases. If a customer was redirected to the PSP's payment page, they could still complete the payment. Depending on your use case, you must have remediation mechanisms in place to prevent double payments.
When using Payment Selection Pages, cancelling the transaction is only possible until the point where the customer has not yet chosen a payment method.
### Automatic expiration[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1 "Direct link to Automatic expiration")
Pay-by-Link transactions can be configured to expire after a specified number of minutes. The basis for the `expirationInMinute` value is the transaction creation timestamp.
Here's an example of a Pay-by-Link request with automatic expiration:
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```### Manual cancellation[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation "Direct link to Manual cancellation")
Every generated Pay-by-Link transaction will include a `payByLinkData.cancelUrl` in the response. You can use this `cancelUrl` to manually cancel uncompleted Pay-by-Link transactions.
For information on authenticating requests and understanding the structure of the response body, please consult the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
info
Manual cancellation of Pay-by-Link transactions is possible only if they are in one of the following states:
  * `pending`
  * `await_redirect`
  * `redirected`

It's important to note that cancelling a transaction is an idempotent operation, meaning that attempting to cancel a transaction that has already been cancelled will return a successful response.
  * 1. Transaction API response
  * 2. Cancel request
  * 3. Cancel response
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```## Footnotes[​](https://documentation.ixopay.com/docs/reference/features/pay-by-link#footnote-label "Direct link to Footnotes")
  1. Please note that there is also a _deprecated_ field called `expiresAt` with the format `YYYY-MM-DD hh:mm:ss T` on the Transaction API response. It is recommended to rely on the newer `payByLinkData.expiresAt` field. [↩](https://documentation.ixopay.com/docs/reference/features/pay-by-link#user-content-fnref-1)
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```  * [Creating a Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#creating-a-pay-by-link)
    * [Supported transaction types](https://documentation.ixopay.com/docs/reference/features/pay-by-link#supported-transaction-types)
    * [Email delivery](https://documentation.ixopay.com/docs/reference/features/pay-by-link#email-delivery)
    * [Automatic expiration](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration)
  * [Pay-by-Link data](https://documentation.ixopay.com/docs/reference/features/pay-by-link#pay-by-link-data)
  * [Cancellation](https://documentation.ixopay.com/docs/reference/features/pay-by-link#cancellation)
    * [Automatic expiration](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1)
    * [Manual cancellation](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation)
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "expiresAt": "2026-06-18T08:54:13+00:00",  

  }  

}  

```
```

{  

  "result": "PENDING",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "your-unique-identifier",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Dummy",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLinkData": {  

    "payByLink": true,  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

    "sendViaEmail": false,  

    "expiresAt": "2026-06-18T08:54:13+00:00"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "9.99",  

  "currency": "EUR",  

  "description": "Purchase description shown on credit card statement.",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "email": "alex.smith@example.org"  

  },  

  "payByLink": {  

    "sendByEmail": false,  

    "expirationInMinute": 60  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260617-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard",  

  "expiresAt": "2026-06-18 08:54:13 UTC",  

  "payByLinkData": {  

    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel",  

  }  

}  

```
```

POST /api/v3/payByLink/d94c0d72f3a36e21f16e/cancel  

Host: gateway.ixopay.com  

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  

Content-Type: application/json  

  

// empty request body  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```