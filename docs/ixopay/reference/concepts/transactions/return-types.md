---
title: Transaction return types
summary: ' Transaction return types'
tags:
- finished-https-documentation-ixopay-com-docs-reference-concepts-transactions-return-types-finished-direct-link-finished
- api
- 3d-secure
- ixopay
- recurring
- credit-card
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* [Concepts](https://documentation.ixopay.com/docs/reference/concepts)
  * [Transactions](https://documentation.ixopay.com/docs/reference/concepts/transactions)
  * Transaction return types

# Transaction return types
Within the [IXOPAY platform](https://www.ixopay.com), transactions can result in one of five return states. Each state is returned in the `returnType` field of the transaction response and provides information about the transaction status and the outcome. Below is a detailed explanation of each state.
## Finished[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#finished "Direct link to Finished")
A `FINISHED` state indicates that the transaction was successfully processed and completed. This signifies that you are now clear to deliver the ordered goods or services.
Recurring Transactions
For transactions flagged with `withRegister` or [Register](https://documentation.ixopay.com/api/transaction/register) transactions, use the `uuid` of the finished transaction for subsequent recurring charges, placing it in the `referenceUuid` field.
Response example
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```## Redirect[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#redirect "Direct link to Redirect")
A `REDIRECT` state is returned for scenarios like [Hosted Payment Pages](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) or [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication where the user needs to be redirected to the `redirectUrl` to proceed with the transaction. After completion, the user will be redirected back to your site using one of the URLs specified (`successUrl`, `cancelUrl`, or `errorUrl`). Simultaneously, [IXOPAY](https://www.ixopay.com) will send a status notification with the transaction result to your [`callbackUrl`](https://documentation.ixopay.com/docs/reference/integration/callbacks).
note
Rely on the status notification to ascertain the final transaction outcome, not the user's redirection back to your provided URLs (`successUrl`, `cancelUrl`, or `errorUrl`).
Response example
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```## Pending[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#pending "Direct link to Pending")
A `PENDING` state means the transaction has been accepted for processing but hasn't yet completed. You will receive a status notification at your [`callbackUrl`](https://documentation.ixopay.com/docs/reference/integration/callbacks) when the transaction reaches its final state. Completion times can vary, ranging from seconds to several days, depending on the payment method.
Response example
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```## Pending DCC[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#pending-dcc "Direct link to Pending DCC")
A `PENDING_DCC` state means that the Dynamic Currency Conversion (DCC) is being processed. During this state, the transaction is paused until the [`continue-dcc`](https://documentation.ixopay.com/api/transaction/continue-dcc) endpoint is called, after which the transaction proceeds. More details on the process can be found in the [Dynamic currency conversion (DCC)](https://documentation.ixopay.com/docs/reference/features/dcc) reference article.
Response example
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```## Error[​](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#error "Direct link to Error")
An `ERROR` state signifies a failed or declined transaction. The `errors` field in the response, an array of error objects, provides insights into the issue. These objects contain fields like `errorMessage`, `errorCode`, `adapterMessage`, and `adapterCode` that further elaborate on the failure. For more information, refer to the [Handling Errors](https://documentation.ixopay.com/docs/guides/production/handling-errors) section.
Merchant Advice Codes
Some adapters may support Merchant Advice Codes, a set of codes introduced by credit card schemes to provide feedback on handling failed transactions. If a Merchant Advice Code is returned with the response, you will find it in the `returnData.merchantAdviceCode` field. For more detailed information on Merchant Advice Codes, visit the [Merchant advice codes](https://documentation.ixopay.com/docs/guides/production/handling-errors#merchant-advice-codes) section.
Response example
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```  * [Finished](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#finished)
  * [Redirect](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#redirect)
  * [Pending](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#pending)
  * [Pending DCC](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#pending-dcc)
  * [Error](https://documentation.ixopay.com/docs/reference/concepts/transactions/return-types#error)
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": "155.00",  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": "1.28",  

    "disclaimer": "string",  

    "markUp": "1.6"  

  }  

}  

```
```

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "4",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "_TYPE": "creditcardData"  

  },  

  "errors": [  

    {  

      "errorMessage": "The transaction was declined",  

      "errorCode": 2003,  

      "adapterMessage": "Transaction declined",  

      "adapterCode": "transaction_declined"  

    }  

  ]  

}  

```