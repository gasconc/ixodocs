---
title: Callback data
summary: ' Callback data'
tags:
- additional-data-https-documentation-ixopay-com-docs-reference-integration-callbacks-callback-data-additional-data-direct-link-additional-data
- api
- json
- ixopay
- credit-card
- transaction
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks)
  * Callback data

# Callback data
The callback data sent by [IXOPAY platform](https://www.ixopay.com) contains all information about the transaction status and details. For a detailed breakdown of the data format, please refer to our [API documentation on the callback event](https://documentation.ixopay.com/api/transaction/callback).
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Notification types](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types): Learn about the different types of notifications sent by IXOPAY platform.

## Additional data[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data#additional-data "Direct link to Additional data")
If you require additional per-transaction information to process the notification for your customer's order, you have two options:
  1. You can use the optional field `merchantMetaData` when creating a transaction to include any additional data specific to your application. For example:
```
{  
  "merchantTransactionId": "your-unique-identifier",  
  "description": "Purchase description shown on credit card statement.",  
  "amount": "9.99",  
  "currency": "EUR",  
  "callbackUrl": "https://api.example.org/callback",  
  "merchantMetaData": "someKey=someValue&anything=else"  
}  

```

tip
Please note that the maximum length of `merchantMetaData` is currently limited to 255 characters.
     * You can use key-value pairs, similar to query-string parameters, to provide the necessary information.
     * Alternatively, you can use escaped JSON to structure the data.
     * If you need to add a significant amount of information, consider using a binary encoding format such as [Protobuf](https://protobuf.dev) and then base64 or base58 encoding it.
  2. Alternatively, you can provide the required data as query-string parameters in the `callbackUrl` that you define. For example, you can include the additional data in the URL like this: `https://api.example.org/callback?someKey=someValue&anything=else`.

This flexibility allows you to customize the callback data and include any necessary information to handle the transaction appropriately.