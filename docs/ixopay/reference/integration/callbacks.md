---
title: Callbacks
summary: Callbacks are an integral part of the IXOPAY platformhttps://www.ixopay.com
  payment processing workflow. They serve as notifications sent by IXOPAY platform
  to your system, providing updates on the outcome of payment requests.
tags:
- state-changes-follow-transactions-https-documentation-ixopay-com-docs-reference-integration-callbacks-state-changes-follow-transactions-direct-link-state-changes-follow-transactions
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/integration/callbacks
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * Callbacks

# Callbacks
Callbacks are an integral part of the [IXOPAY platform](https://www.ixopay.com) payment processing workflow. They serve as notifications sent by IXOPAY platform to your system, providing updates on the outcome of payment requests. These updates include information about whether the payment was successful or encountered an error.
Handling callbacks correctly is important for maintaining accurate records, providing a seamless payment experience to your customers, and ensuring the overall success of your integration. By understanding the various types of notifications and implementing proper response handling and data processing, you can optimize your payment workflow and enhance the reliability and security of your system.
To further enhance your understanding of callback handling in the IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.
  * [Notification types](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types): Learn about the different types of notifications sent by IXOPAY platform.

Guide
For a detailed, step-by-step guide on integrating callbacks, refer to the [callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks "Callbacks guide") in our guides section.
## State changes and follow-up transactions[​](https://documentation.ixopay.com/docs/reference/integration/callbacks#state-changes-and-follow-up-transactions "Direct link to State changes and follow-up transactions")
Certain payment methods allow for state changes in transactions. This means that a transaction that initially failed may later change to a successful state. It is important to be prepared to handle multiple notifications related to the same transaction, as well as notifications regarding new follow-up transactions or changes in transaction status.
warning
Be aware that for some payment methods, a transaction can change from failed to successful. Ensure that your system is capable of handling multiple notifications for the same transaction.
In addition to notifications about the outcome of a payment, IXOPAY platform also sends notifications regarding any new follow-up transactions or changes in transaction status. These notifications provide valuable updates and insights into the progress of the payment process.
Sequence diagram for pending payment callback processing PSPIXOPAY platformMerchant par​alt[Merchant transaction flow][Concurrent callback flow]CustomerPurchaseDebitResult with PENDING state"Your payment is being processed …"GET payment pagePayment pageSubmit payment dataTransactionCallback to callback URLStore resultOKResultRedirects back to successUrlGET response URLThank-you or error page