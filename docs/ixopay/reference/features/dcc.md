---
title: Dynamic currency conversion (DCC)
summary: ' Dynamic currency conversion DCC'
tags:
- dcc-process-overview-https-documentation-ixopay-com-docs-reference-features-dcc-dcc-process-overview-direct-link-dcc-process-overview
- standard-transaction-request-https-documentation-ixopay-com-docs-reference-features-dcc-standard-transaction-request-direct-link-standard-transaction-request
- hosted-payment-https-documentation-ixopay-com-docs-reference-features-dcc-hosted-payment-direct-link-hosted-payment
- understanding-dcc-data-https-documentation-ixopay-com-docs-reference-features-dcc-understanding-dcc-data-direct-link-understanding-dcc-data
- dcc-request-examples-https-documentation-ixopay-com-docs-reference-features-dcc-dcc-request-examples-direct-link-dcc-request-examples
- initial-transaction-request-https-documentation-ixopay-com-docs-reference-features-dcc-initial-transaction-request-direct-link-initial-transaction-request
- api
- ixopay
- hosted-payment-page
- credit-card
source_url: https://documentation.ixopay.com/docs/reference/features/dcc
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * Dynamic currency conversion (DCC)

# Dynamic currency conversion (DCC)
Dynamic Currency Conversion (DCC) is a feature that allows customers to see the cost of transactions in their local currency, providing a more familiar and transparent purchasing experience. This feature enhances the understanding of customers regarding their transactions by removing uncertainty about the final cost in their local currency.
For example, consider a scenario where a customer's credit card is denominated in US Dollars (USD), but the merchant is processing payments in Euros (EUR). When the customer makes a purchase, the DCC feature will enable them to see and approve the exact amount that will be charged in USD, eliminating the need to estimate the currency conversion manually or worry about fluctuating exchange rates.
DCC can be utilized either through a standard transaction request with an additional `requestDcc` parameter or through a hosted payment page, where DCC is handled transparently. Please note that the DCC option must be activated in the connector for this feature to be used.
## DCC process overview[​](https://documentation.ixopay.com/docs/reference/features/dcc#dcc-process-overview "Direct link to DCC process overview")
### Using a standard transaction request[​](https://documentation.ixopay.com/docs/reference/features/dcc#using-a-standard-transaction-request "Direct link to Using a standard transaction request")
  1. Initiate a standard transaction request and include `requestDcc` parameter to request the current conversion rate.
  2. If a conversion is possible, you'll receive a `PENDING_DCC` status along with `dccData` in the response.
  3. The `dccData` includes the conversion details such as the converted amount and the conversion rate.
  4. To finalize the transaction, send another request with the chosen currency to the [`continue-dcc`](https://documentation.ixopay.com/api/transaction/continue-dcc) endpoint.

### Using a hosted payment page[​](https://documentation.ixopay.com/docs/reference/features/dcc#using-a-hosted-payment-page "Direct link to Using a hosted payment page")
  1. Initiate a DCC request by setting `requestDcc` to true in your transaction request.
  2. The response will have a `REDIRECT` status, indicating that the user should be redirected to a [hosted payment page](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages).
  3. The DCC is handled transparently on the hosted payment page.
  4. Once the transaction is completed, the user is redirected back to the merchant's page with the transaction result.

## Understanding DCC data[​](https://documentation.ixopay.com/docs/reference/features/dcc#understanding-dcc-data "Direct link to Understanding DCC data")
The `dccData` object in the response contains the following fields:
  * `uuid`: The unique identifier of the conversion request.
  * `originalAmount`: The original transaction amount.
  * `originalCurrency`: The original currency of the transaction.
  * `convertedAmount`: The amount after currency conversion.
  * `convertedCurrency`: The currency to which the original amount has been converted.
  * `conversionRate`: The exchange rate used for the conversion.
  * `disclaimer`: The disclaimer statement related to the conversion.
  * `markUp`: The additional amount or percentage that is added up as conversion charge.

note
The chosen currency for the second request (`selectedDccCurrency`) can be either the original currency (from the initial transaction request) or the converted currency returned in the `dccData.convertedCurrency`.
## DCC request examples[​](https://documentation.ixopay.com/docs/reference/features/dcc#dcc-request-examples "Direct link to DCC request examples")
Now that we understand the general DCC process flow, let's look at some examples of DCC request and response for the standard transaction request process.
Initiate a DCC request by adding the `requestDcc` parameter to your transaction request. This parameter is not mandatory and the default is `false`.
### Example of an initial transaction request[​](https://documentation.ixopay.com/docs/reference/features/dcc#example-of-an-initial-transaction-request "Direct link to Example of an initial transaction request")  
| Parameter name  | Type  | Description  |  
| --- | --- | --- |  
| `requestDcc`  | optional`boolean?`  | initiate DCC if `true`  |  
The following example illustrates how to send a transaction request with `requestDcc` set to true:
  * Request
  * Response
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

```### Example of a rate selection request[​](https://documentation.ixopay.com/docs/reference/features/dcc#example-of-a-rate-selection-request "Direct link to Example of a rate selection request")
If a transaction is in the `PENDING_DCC` state, you can finalize it by sending a request to the [`continue-dcc`](https://documentation.ixopay.com/api/transaction/continue-dcc) endpoint. The possible currency options include the original transaction currency and the converted currency from the previous response.
`POST /transaction/{apiKey}/continue-dcc`  
| Parameter name  | Type  | Description  |  
| --- | --- | --- |  
| `continueDccUuid`  | required`string`  | UUID of the previous response  |  
| `selectedDccCurrency`  | required`string`  | Currency chosen for the transaction  |  
Following is an example demonstrating the process:
  * Request
  * Response
```

{  

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```  * [DCC process overview](https://documentation.ixopay.com/docs/reference/features/dcc#dcc-process-overview)
    * [Using a standard transaction request](https://documentation.ixopay.com/docs/reference/features/dcc#using-a-standard-transaction-request)
    * [Using a hosted payment page](https://documentation.ixopay.com/docs/reference/features/dcc#using-a-hosted-payment-page)
  * [Understanding DCC data](https://documentation.ixopay.com/docs/reference/features/dcc#understanding-dcc-data)
  * [DCC request examples](https://documentation.ixopay.com/docs/reference/features/dcc#dcc-request-examples)
    * [Example of an initial transaction request](https://documentation.ixopay.com/docs/reference/features/dcc#example-of-an-initial-transaction-request)
    * [Example of a rate selection request](https://documentation.ixopay.com/docs/reference/features/dcc#example-of-a-rate-selection-request)
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "requestDcc": true  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

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

  "continueDccUuid": "d94c0d72f3a36e21f16e",  

  "selectedDccCurrency": "USD"  

}  

```
```

{  

  "success": true,  

  "uuid": "1ed442bdf4f9eb855b1f",  

  "purchaseId": "20260526-1ed442bdf4f9eb855b1f",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard",  

  "returnData": {  

    "type": "visa",  

    "cardHolder": "Alex Smith",  

    "expiryMonth": "5",  

    "expiryYear": "2031",  

    "binDigits": "41111111",  

    "firstSixDigits": "411111",  

    "lastFourDigits": "1111",  

    "merchantFingerprint": "9s92FBBvMuw7nn8t7ChHDRuFXS6gZOnHymbGnO/BZBUw3j25LW6dcl50aHWTcdJtSFDvTqLPM4stZLbGb6EVpQ",  

    "globalFingerprint": "bSDn7SmA3Wr/o7Pzh4TaEw6RHc6rwqKxNFW8opklNbP7irUxv57avJPKveRO48fGhKY0oJYWUAfMcJq9+iSUmw",  

    "_TYPE": "cardData"  

  },  

  "extraData": {  

    "captureId": "12345678910"  

  }  

}  

```