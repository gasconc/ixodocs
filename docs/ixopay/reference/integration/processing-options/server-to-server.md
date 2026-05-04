---
title: Server-to-server
summary: ' Processing optionshttps://documentation.ixopay.com/docs/reference/integration/processing-options'
tags:
- cases-https-documentation-ixopay-com-docs-reference-integration-processing-options-server-server-cases-direct-link-cases
- processing-flow-https-documentation-ixopay-com-docs-reference-integration-processing-options-server-server-processing-flow-direct-link-processing-flow
- api
- ixopay
- psp
- recurring
- refund
- capture
- void
- direct-debit
source_url: https://documentation.ixopay.com/docs/reference/integration/processing-options/server-to-server
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Processing options](https://documentation.ixopay.com/docs/reference/integration/processing-options)
  * Server-to-server

# Server-to-server
Server-to-server processing is a payment option that allows merchants to perform transactions and interact with the payment system without involving the end-user directly. It is commonly used for various scenarios such as recurring payments, refunds, de-registering payment methods, capturing or voiding previous preauthorizations, and SEPA DirectDebit transactions.
## Use cases[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/server-to-server#use-cases "Direct link to Use cases")
  * [Recurring payments](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments)
  * [Refunds](https://documentation.ixopay.com/docs/guides/payments/refunds)
  * [De-registering](https://documentation.ixopay.com/docs/guides/payments/saving#deleting-saved-payment-information) payment methods
  * [Capture](https://documentation.ixopay.com/api/transaction/capture) or [void](https://documentation.ixopay.com/api/transaction/void) of a previous [preauthorization](https://documentation.ixopay.com/api/transaction/preauthorize)
  * SEPA DirectDebit transactions (subject to legal jurisdiction)

## Processing flow[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/server-to-server#processing-flow "Direct link to Processing flow")
  1. The transaction is triggered, for example by a customer using a stored credit card.
  2. ⁮
Merchant
The merchant sends the appropriate API call —for example a [debit](https://documentation.ixopay.com/api/transaction/debit) or [refund](https://documentation.ixopay.com/api/transaction/refund) request— to the [IXOPAY platform](https://www.ixopay.com).
  3. The IXOPAY platform processes the request and sends a transaction request to the PSP.
  4. The PSP processes the transaction and sends the result back to IXOPAY platform.
  5. ⁮
Merchant
The IXOPAY platform processes the PSP's response and, using the `callbackUrl` field, notifies the merchant via a callback to the URL provided in the initial API call. This callback includes the payment status and any relevant details.
  6. ⁮
Merchant
The merchant handles the callback, it is recommended to store the transaction's `uuid` for future use.
  7. ⁮
Merchant
The merchant responds to the callback with:
Callback response
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```  8. The IXOPAY platform responds to the merchant backend with a request containing the status of the transaction, usually `FINISHED`, `PENDING` or `ERROR`.
  9. ⁮
Merchant
The merchant decides what page to display to the customer depending on the transaction status.

Here's a visual representation of the processing flow using a sequence diagram:
Sequence diagram for server-to-server processing A visual representation of the steps listed above.PSPIXOPAY platformMerchant par​CustomerTrigger, for example a purchase with card-on-file1(Recurring) debit, or refund, etc.2Transaction3Result4Callback to callback URL5Store result6OK7Result8Thank-you or error page9
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```Here's a visual representation of the processing flow using a sequence diagram:
Sequence diagram for server-to-server processing A visual representation of the steps listed above.PSPIXOPAY platformMerchant par​CustomerTrigger, for example a purchase with card-on-file1(Recurring) debit, or refund, etc.2Transaction3Result4Callback to callback URL5Store result6OK7Result8Thank-you or error page9
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Processing options](https://documentation.ixopay.com/docs/reference/integration/processing-options)
  * Server-to-server
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```Here's a visual representation of the processing flow using a sequence diagram:
Sequence diagram for server-to-server processing A visual representation of the steps listed above.PSPIXOPAY platformMerchant par​CustomerTrigger, for example a purchase with card-on-file1(Recurring) debit, or refund, etc.2Transaction3Result4Callback to callback URL5Store result6OK7Result8Thank-you or error page9
  * [Use cases](https://documentation.ixopay.com/docs/reference/integration/processing-options/server-to-server#use-cases)
  * [Processing flow](https://documentation.ixopay.com/docs/reference/integration/processing-options/server-to-server#processing-flow)
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```Here's a visual representation of the processing flow using a sequence diagram:
Sequence diagram for server-to-server processing A visual representation of the steps listed above.PSPIXOPAY platformMerchant par​CustomerTrigger, for example a purchase with card-on-file1(Recurring) debit, or refund, etc.2Transaction3Result4Callback to callback URL5Store result6OK7Result8Thank-you or error page9