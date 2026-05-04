---
title: Handling errors
summary: ' Getting production readyhttps://documentation.ixopay.com/docs/guides/production  Handling
  errors'
tags:
- api-responses-https-documentation-ixopay-com-docs-guides-production-handling-errors-api-responses-direct-link-api-responses
- system-errors-https-documentation-ixopay-com-docs-guides-production-handling-errors-system-errors-direct-link-system-errors
- api
- json
- ixopay
- psp
- credit-card
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/guides/production/handling-errors
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Getting production ready](https://documentation.ixopay.com/docs/guides/production)
  * Handling errors

# Handling errors
When working with payment transactions, errors can occur at various stages. Properly handling errors is crucial to ensure a smooth payment processing experience and provide customers with the best possible service.
## API responses[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#api-responses "Direct link to API responses")
Response objects in the payment APIs include a `success` flag to indicate if the request was successful or not. If the flag is `false`, the API response indicates an error. These errors can be either system errors, which are caused by the client-server interaction, or processing errors, which are caused by an error while processing the request, for example caused by the PSP. For a complete list of error codes and their meanings, please see the appendix on [Error codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes).
`true`
`false`
200
4xx or 5xx
`extraData.doNotResubmit`
Response
`success`
Success
HTTP Status
Processing error
System error
Merchant advice:\ndo not resubmit
### System errors[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#system-errors "Direct link to System errors")
If the `success` flag is `false` and the HTTP status code is not 200, there was a system error. In this case, the response will include the `errorMessage`, `errorType`, and `details` fields. The HTTP status code being in the 4xx range indicates a client error, which means the request shouldn't be retried without making some changes. If the HTTP status code is in the 5xx range, it indicates a server-side error.
Example system error
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```#### Maintenance mode[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#maintenance-mode "Direct link to Maintenance mode")
Maintenance mode is a unique system error that occurs when [IXOPAY platform](https://www.ixopay.com) is undergoing scheduled maintenance. Advance notice of upcoming maintenance events will be communicated through [status.ixopay.com](https://status.ixopay.com) (subscribe to updates via email or other channels).
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```### Processing errors[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#processing-errors "Direct link to Processing errors")
If the HTTP status code is 200, it means a transaction has been created, but some other error happened along the way. To help you understand what went wrong, the response will include an `errors` field, which is an array of error objects. Each object contains fields such as `errorMessage`, `errorCode`, `adapterMessage`, and `adapterCode`.
The `errorMessage` field provides a brief description of the error. The `errorCode` field is a standardized error code by the IXOPAY platform, which maps the variety of different PSP error codes to a unified error scheme. You can find the individual error codes in the appendix on [Error codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes).
Finally, the `adapterMessage` and `adapterCode` fields contain the native error message and code from the payment provider or acquiring bank, which gives you more specific information about what went wrong.
Example processing error
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```### Merchant advice codes[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#merchant-advice-codes "Direct link to Merchant advice codes")
Merchant advice codes are a set of codes introduced by credit card schemes to provide feedback to merchants on how to handle failed transactions. The specific returned value for a merchant advice code varies depending on the payment service provider (PSP) being used. However, it is usually a numeric error code that provides advice on how to proceed with a failed transaction.
The [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) supports handling and forwarding merchant advice codes sent by PSPs. To find out which adapters support merchant advice codes, check the [Adapters](https://adapters.ixopay.com) page.
If a merchant advice code is returned with the response, it can be found in the `returnData.merchantAdviceCode` field. The merchant advice code is piped through as received by the IXOPAY platform.
In the case of a merchant advice code indicating "do not retry", IXOPAY platform parses the code and sets the `doNotResubmit` flag in the extra data field of the error response. This is because merchants may incur charges if they try to re-submit a transaction that has been flagged as "do not retry".
warning
It's important to note that if a merchant advice code indicating "do not retry" is returned and the error response extra data includes the `doNotResubmit` flag set to true, the merchant should not attempt to resubmit the transaction. Doing so could result in additional charges and complications. It's best to contact the customer to obtain an alternative payment method for the transaction.
Example merchant advice code error
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```### Parsed merchant advice codes[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#parsed-merchant-advice-codes "Direct link to Parsed merchant advice codes")
Parsed merchant advice codes are standardized numeric codes that refer to the [merchant advice codes](https://documentation.ixopay.com/docs/guides/production/handling-errors#merchant-advice-codes) provided by various Payment Service Providers (PSPs). These codes serve to unify and streamline the handling of failed transactions. When working with the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api), you can utilize parsed merchant advice codes for more efficient error handling.
When a parsed merchant advice code is returned with the response, you can access it in the `returnData.parsedMerchantAdviceCode` field. This field will contain the parsed merchant advice code relevant to the failed transaction if it is supported by the adapter you are using.
Just like with merchant advice codes, there are cases where a parsed merchant advice code indicates that a transaction should not be retried. Specifically, when the parsed merchant advice code is `03`, it signifies "do not retry." In such cases, IXOPAY platform parses this code and sets the `doNotResubmit` flag in the extra data field of the error response.
Here is the list of available parsed merchant advice codes and their descriptions:  
| Parsed Merchant Advice Code  | Description  |  
| --- | --- |  
| `01`  | Additional information needed.  |  
| `02`  | Try again later.  |  
| `03`  | Do not try again.  |  
warning
If a parsed merchant advice code indicating "do not retry" is received, and the error response extra data includes the `doNotResubmit` flag set to true, merchants should refrain from attempting to resubmit the transaction. Doing so could result in additional charges and complications. Instead, it is advisable to contact the customer to explore alternative payment methods for the transaction.
Example parsed merchant advice code error
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```## Best practices for error handling[​](https://documentation.ixopay.com/docs/guides/production/handling-errors#best-practices-for-error-handling "Direct link to Best practices for error handling")
Here are some best practices to help you handle payment errors efficiently:
  * **Log errors:** Logging errors is important for debugging and identifying the root cause of an issue. Log as much information as possible, including the request and response payloads, error codes, and timestamps.
  * **Display user-friendly error messages:** When displaying error messages to customers, use clear and concise language that explains the issue and what steps the user can take to resolve it.
  * **Retry failed transactions:** If a transaction fails due to a temporary issue, such as a network error, it may be possible to retry the transaction after a short delay. However, be careful not to retry failed transactions too many times, as this can result in duplicate charges or other issues.
  * **Monitor errors:** Monitoring error rates can help identify trends and issues that may require investigation or action.

By following these best practices, you can minimize the impact of payment errors and provide a better customer experience.
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```By following these best practices, you can minimize the impact of payment errors and provide a better customer experience.
  * [Getting production ready](https://documentation.ixopay.com/docs/guides/production)
  * Handling errors
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```By following these best practices, you can minimize the impact of payment errors and provide a better customer experience.
  * [API responses](https://documentation.ixopay.com/docs/guides/production/handling-errors#api-responses)
    * [System errors](https://documentation.ixopay.com/docs/guides/production/handling-errors#system-errors)
    * [Processing errors](https://documentation.ixopay.com/docs/guides/production/handling-errors#processing-errors)
    * [Merchant advice codes](https://documentation.ixopay.com/docs/guides/production/handling-errors#merchant-advice-codes)
    * [Parsed merchant advice codes](https://documentation.ixopay.com/docs/guides/production/handling-errors#parsed-merchant-advice-codes)
  * [Best practices for error handling](https://documentation.ixopay.com/docs/guides/production/handling-errors#best-practices-for-error-handling)
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 500 Internal Server Error  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "System Error occurred",  

  "errorCode": 1008  

}  

```
```

HTTP/1.1 503 Service Unavailable  

Content-Type: application/json  

  

{  

  "success": false,  

  "errorMessage": "The system is currently undergoing scheduled maintenance. Please try again later.",  

  "errorCode": 1010  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Request failed",  

      "errorCode": 1000,  

      "adapterMessage": "Invalid parameters given",  

      "adapterCode": "1234"  

    }  

  ]  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": false,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260421-d94c0d72f3a36e21f16e",  

  "returnType": "ERROR",  

  "paymentMethod": "Creditcard",  

  "errors": [  

    {  

      "errorMessage": "Expired card",  

      "errorCode": 2009,  

      "adapterMessage": "Expired card",  

      "adapterCode": "54"  

    }  

  ],  

  "returnData": {  

    "creditcardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 4,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US",  

      "merchantAdviceCode": "54: Expired card"  

      "parsedMerchantAdviceCode": "03"  

    }  

  },  

  "extraData": {  

    "doNotResubmit": true  

  }  

}  

```By following these best practices, you can minimize the impact of payment errors and provide a better customer experience.