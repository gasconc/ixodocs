---
title: Refund
summary: ' PCI Transaction API'
tags:
- transaction-apikey-refund
- request-https-documentation-ixopay-com-api-pci-refund-request-direct-link-request
- responses-https-documentation-ixopay-com-api-pci-refund-responses-direct-link-responses
- callbacks-https-documentation-ixopay-com-api-pci-refund-callbacks-direct-link-callbacks
- request-body-callbackurl
- callbacks-responses-https-documentation-ixopay-com-api-pci-refund-callbacks-responses-direct-link-callbacks-responses
- https-secure-ixopay-com-api-transaction-apikey-refund
- path-parameters
- bodyrequired
- api
source_url: https://documentation.ixopay.com/api/pci/refund
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Refund

# Refund
```
POST 
## /transaction/:apiKey/refund

```A refund transaction reverses a payment which was previously performed with [Debit](https://documentation.ixopay.com/api/pci/debit) or [Capture](https://documentation.ixopay.com/api/pci/capture).
Depending on the payment method you can even refund only a partial amount of the original transaction amount.
## Request[​](https://documentation.ixopay.com/api/pci/refund#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/pci/refund#responses "Direct link to Responses")
  * 200
  * 400
  * 422

Transaction response
Transaction error response
Transaction error response
## Callbacks[​](https://documentation.ixopay.com/api/pci/refund#callbacks "Direct link to Callbacks")
  * POST statusChange
```
POST 
## {$request.body#/callbackUrl}

```Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
## Callbacks Responses[​](https://documentation.ixopay.com/api/pci/refund#callbacks-responses "Direct link to Callbacks Responses")
  * 200
  * 500

Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/refund

```A refund transaction reverses a payment which was previously performed with [Debit](https://documentation.ixopay.com/api/pci/debit) or [Capture](https://documentation.ixopay.com/api/pci/capture).
Depending on the payment method you can even refund only a partial amount of the original transaction amount.
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector

  * application/json

  * Body
  * Typical

### Body**required**
Data which is required to process a refund. Depending on the adapter, additional fields may be required to be sent as `extraData` and field restrictions may be stricter.
**merchantTransactionId** MerchantTransactionIdrequired
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**additionalId1** AdditionalId1
A supplementary identifier dependent on the used adapter.
This field provides additional information that can be used based on the specific adapter and their field mappings. The usage of `additionalId1` is contingent upon the support provided by the PSP, which is detailed in the adapter-specific documentation. If this field is supported, its proper usage will be outlined there. If it is not mentioned, it should not be used to avoid integration issues. Always refer to the adapter-specific documentation for guidance on using this additional identifier correctly.
**Possible values:** `non-empty` and `<= 50 characters`
**additionalId2** AdditionalId2
A supplementary identifier dependent on the used adapter.
This field provides additional information that can be used based on the specific adapter and their field mappings. The usage of `additionalId2` is contingent upon the support provided by the PSP, which is detailed in the adapter-specific documentation. If this field is supported, its proper usage will be outlined there. If it is not mentioned, it should not be used to avoid integration issues. Always refer to the adapter-specific documentation for guidance on using this additional identifier correctly.
**Possible values:** `non-empty` and `<= 50 characters`
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
**pspPassthroughData** object
Object containing key-value pairs (string-to-string) to be passed to the PSP without storing.
_**Note:** Support for this feature varies by adapter._
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**referenceUuid** stringrequired
**Possible values:** `non-empty` and `<= 50 characters`
**amount** stringrequired
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** stringrequired
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**callbackUrl** string
**Possible values:** `<= 4096 characters`
**transactionToken** string
**Possible values:** `<= 8192 characters`
**description** string
**Possible values:** `<= 255 characters`
**items** object[]
List of items sold.
**Maximum JSON size:** `<= 32768 bytes`.
**Possible values:** `<= 128`
  * Array [
**identification** string
**Possible values:** `<= 128 characters`
**name** string
**Possible values:** `<= 256 characters`
**description** string
**Possible values:** `<= 2048 characters`
**quantity** integer
**Possible values:** `>= 1`
**price** integer
**Possible values:** `>= 1`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**l2l3Data** object
**type** string
**Possible values:** `<= 32 characters`
**unit** string
**Possible values:** `<= 16 characters`
**unitPrice** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**discount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**shippingAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**taxAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**taxRate** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**commodityCode** string
**Possible values:** `<= 64 characters`
**taxDetails** object[]
**Possible values:** `<= 10`
  * Array [
**type** string
**Possible values:** `<= 255 characters`
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**rate** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**code** string
**Possible values:** `<= 255 characters`
**taxId** string
**Possible values:** `<= 255 characters`
**applied** string
**Possible values:** `<= 255 characters`
**exemptionCode** string
**Possible values:** `<= 255 characters`
  * ]
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
  * ]
**splits** object[]
**Possible values:** `<= 10`
  * Array [
**identification** string
**Possible values:** `<= 11 characters`
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
  * ]
**l2l3Data** object
Level 2 & level 3 data.
**taxAmount** string
**Possible values:** `<= 15 characters`
**vatRegistrationNumber** string
**Possible values:** `<= 255 characters`
**nationalTaxIncluded** string
**Possible values:** `<= 5 characters`
**discountAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**commodityCode** string
**Possible values:** `<= 255 characters`
**freightAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**freightTaxAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dutyAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**taxDetails** object[]
**Possible values:** `<= 10`
  * Array [
**type** string
**Possible values:** `<= 255 characters`
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**rate** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**code** string
**Possible values:** `<= 255 characters`
**taxId** string
**Possible values:** `<= 255 characters`
**applied** string
**Possible values:** `<= 255 characters`
**exemptionCode** string
**Possible values:** `<= 255 characters`
  * ]

Typical request data
```

{  

  "merchantTransactionId": "2019-09-02-0007",  

  "referenceUuid": "bcdef23456bcdef23456",  

  "amount": "9.99",  

  "currency": "EUR",  

  "callbackUrl": "https://api.example.org/callback",  

  "description": "Refund money"  

}  

```

```

{  

  "success": true  

}  

````"returnType": "FINISHED"` indicates a successfully completed refund payment.
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```Redirect indicates that the customer should be redirected to the URL in `redirectURL`.
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://secure.ixopay.com/redirect-url",  

  "redirectQRCode": "data:image/png;base64,ABCDEFGHIJKLMNOPQRSTUVWXYZ",  

  "paymentMethod": "Creditcard"  

}  

```An error occurred on the PSPs side.
```

{  

  "success": false,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20200924-abcde12345abcde12345",  

  "returnType": "ERROR",  

  "paymentMethod": "Dummy",  

  "errors": [  

    {  

      "errorMessage": "Dummy error",  

      "errorCode": 1003,  

      "adapterMessage": "Dummy adapter error"  

    }  

  ]  

}  

```Transaction error response
  * application/json

  * Schema
  * Example (auto)
  * General error, e.g. duplicate
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The transaction ID '20190823062178' already exists!",  

  "errorCode": 3004  

}  

```  * Schema
  * Example (auto)
  * General error, e.g. validation
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "amount: 'amount' is required",  

  "errorCode": 1002  

}  

``````
POST 
## {$request.body#/callbackUrl}

```Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json

  * Body
  * Example (auto)

```

{  

  "uuid": "string",  

  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

  "purchaseId": "string",  

  "transactionType": "DEBIT",  

  "transactionSubType": "cb-resolved",  

  "paymentMethod": "string",  

  "amount": "9.99",  

  "currency": "EUR",  

  "surchargeAmount": "9.99",  

  "totalAmount": "9.99",  

  "dccData": {  

    "remoteIdentifier": "string",  

    "originalAmount": "9.99",  

    "originalCurrency": "EUR",  

    "convertedAmount": "9.99",  

    "convertedCurrency": "EUR",  

    "conversionRate": 0,  

    "selectedCurrency": "string",  

    "markUp": 0  

  },  

  "referenceUuid": "string",  

  "errors": [  

    {  

      "message": "string",  

      "code": "string",  

      "adapterMessage": "string",  

      "adapterCode": "string"  

    }  

  ],  

  "chargebackData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "chargebackDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "chargebackReversalData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "chargebackUuid": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "reversalDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "extraData": {},  

  "merchantMetaData": "string",  

  "returnData": {  

    "_TYPE": "cardData"  

  },  

  "payByLinkData": {  

    "sendViaEmail": true,  

    "cancelUrl": "string",  

    "expiresAt": "2024-07-29T15:51:28.071Z"  

  },  

  "customer": {  

    "identification": "string",  

    "firstName": "string",  

    "lastName": "string",  

    "birthDate": "2001-02-03",  

    "gender": "M",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "billingCountry": "AT",  

    "billingPhone": "+XX 1234567890",  

    "shippingFirstName": "string",  

    "shippingLastName": "string",  

    "shippingCompany": "string",  

    "shippingAddress1": "string",  

    "shippingAddress2": "string",  

    "shippingCity": "string",  

    "shippingPostcode": "string",  

    "shippingState": "string",  

    "shippingCountry": "AT",  

    "shippingPhone": "+XX 1234567890",  

    "company": "string",  

    "email": "string",  

    "emailVerified": true,  

    "ipAddress": "string",  

    "nationalId": "string",  

    "extraData": {},  

    "paymentData": {  

      "ibanData": {  

        "iban": "string",  

        "bic": "string",  

        "mandateId": "string",  

        "mandateDate": "2001-02-03"  

      }  

    }  

  },  

  "customerProfileData": {  

    "profileGuid": "string",  

    "customerIdentification": "string",  

    "paymentToken": "string",  

    "markAsPreferred": true  

  },  

  "splits": [  

    {  

      "identification": "string",  

      "amount": "9.99",  

      "currency": "EUR",  

      "sellerMerchantGuid": "string",  

      "sellerMerchantExternalId": "string",  

      "commissionFee": {  

        "amount": "9.99",  

        "currency": "EUR"  

      }  

    }  

  ],  

  "tracingData": {  

    "transactions": [  

      {  

        "uuid": "string",  

        "sequence_number": 0,  

        "status": "SUCCESS",  

        "connector": {  

          "guid": "string"  

        }  

      }  

    ]  

  },  

  "message": "string",  

  "code": "string",  

  "adapterMessage": "string",  

  "adapterCode": "string",  

  "result": "OK",  

  "scheduleData": [  

    {  

      "scheduleId": "string",  

      "scheduleStatus": "active",  

      "scheduledAt": "2001-02-03T04:05:06+02:00",  

      "merchantMetaData": "string"  

    }  

  ],  

  "notificationSource": "reconciliation",  

  "originalAmount": "string",  

  "originalCurrency": "EUR"  

}  

```

```

"OK"  

```
```

OK  

```Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pci/pci-transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3JkCg==`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L -X POST 'https://documentation.ixopay.com/transaction/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Security SchemebasicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
Body required
  * Example (from schema)
  * Typical
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "string",
  "referenceUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "callbackUrl": "string",
  "transactionToken": "string",
  "description": "string",
  "items": [
    {
      "identification": "string",
      "name": "string",
      "description": "string",
      "quantity": 0,
      "price": 0,
      "currency": "EUR",
      "l2l3Data": {
        "type": "string",
        "unit": "string",
        "unitPrice": "9.99",
        "discount": "9.99",
        "shippingAmount": "9.99",
        "taxAmount": "9.99",
        "taxRate": "9.99",
        "commodityCode": "string",
        "taxDetails": [
          {
            "type": "string",
            "amount": "9.99",
            "rate": "9.99",
            "code": "string",
            "taxId": "string",
            "applied": "string",
            "exemptionCode": "string"
          }
        ]
      },
      "extraData": {}
    }
  ],
  "splits": [
    {
      "identification": "string",
      "amount": "9.99",
      "currency": "EUR",
      "sellerMerchantGuid": "string",
      "sellerMerchantExternalId": "string",
      "commissionFee": {
        "amount": "9.99",
        "currency": "EUR"
      }
    }
  ],
  "l2l3Data": {
    "taxAmount": "string",
    "vatRegistrationNumber": "string",
    "nationalTaxIncluded": "string",
    "discountAmount": "9.99",
    "commodityCode": "string",
    "freightAmount": "9.99",
    "freightTaxAmount": "9.99",
    "dutyAmount": "9.99",
    "taxDetails": [
      {
        "type": "string",
        "amount": "9.99",
        "rate": "9.99",
        "code": "string",
        "taxId": "string",
        "applied": "string",
        "exemptionCode": "string"
      }
    ]
  }
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/refund

```
```

{  

  "merchantTransactionId": "2019-09-02-0007",  

  "referenceUuid": "bcdef23456bcdef23456",  

  "amount": "9.99",  

  "currency": "EUR",  

  "callbackUrl": "https://api.example.org/callback",  

  "description": "Refund money"  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://secure.ixopay.com/redirect-url",  

  "redirectQRCode": "data:image/png;base64,ABCDEFGHIJKLMNOPQRSTUVWXYZ",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": false,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20200924-abcde12345abcde12345",  

  "returnType": "ERROR",  

  "paymentMethod": "Dummy",  

  "errors": [  

    {  

      "errorMessage": "Dummy error",  

      "errorCode": 1003,  

      "adapterMessage": "Dummy adapter error"  

    }  

  ]  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The transaction ID '20190823062178' already exists!",  

  "errorCode": 3004  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "amount: 'amount' is required",  

  "errorCode": 1002  

}  

```
```
POST 
## {$request.body#/callbackUrl}

```
```

{  

  "uuid": "string",  

  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

  "purchaseId": "string",  

  "transactionType": "DEBIT",  

  "transactionSubType": "cb-resolved",  

  "paymentMethod": "string",  

  "amount": "9.99",  

  "currency": "EUR",  

  "surchargeAmount": "9.99",  

  "totalAmount": "9.99",  

  "dccData": {  

    "remoteIdentifier": "string",  

    "originalAmount": "9.99",  

    "originalCurrency": "EUR",  

    "convertedAmount": "9.99",  

    "convertedCurrency": "EUR",  

    "conversionRate": 0,  

    "selectedCurrency": "string",  

    "markUp": 0  

  },  

  "referenceUuid": "string",  

  "errors": [  

    {  

      "message": "string",  

      "code": "string",  

      "adapterMessage": "string",  

      "adapterCode": "string"  

    }  

  ],  

  "chargebackData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "chargebackDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "chargebackReversalData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "chargebackUuid": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "reversalDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "extraData": {},  

  "merchantMetaData": "string",  

  "returnData": {  

    "_TYPE": "cardData"  

  },  

  "payByLinkData": {  

    "sendViaEmail": true,  

    "cancelUrl": "string",  

    "expiresAt": "2024-07-29T15:51:28.071Z"  

  },  

  "customer": {  

    "identification": "string",  

    "firstName": "string",  

    "lastName": "string",  

    "birthDate": "2001-02-03",  

    "gender": "M",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "billingCountry": "AT",  

    "billingPhone": "+XX 1234567890",  

    "shippingFirstName": "string",  

    "shippingLastName": "string",  

    "shippingCompany": "string",  

    "shippingAddress1": "string",  

    "shippingAddress2": "string",  

    "shippingCity": "string",  

    "shippingPostcode": "string",  

    "shippingState": "string",  

    "shippingCountry": "AT",  

    "shippingPhone": "+XX 1234567890",  

    "company": "string",  

    "email": "string",  

    "emailVerified": true,  

    "ipAddress": "string",  

    "nationalId": "string",  

    "extraData": {},  

    "paymentData": {  

      "ibanData": {  

        "iban": "string",  

        "bic": "string",  

        "mandateId": "string",  

        "mandateDate": "2001-02-03"  

      }  

    }  

  },  

  "customerProfileData": {  

    "profileGuid": "string",  

    "customerIdentification": "string",  

    "paymentToken": "string",  

    "markAsPreferred": true  

  },  

  "splits": [  

    {  

      "identification": "string",  

      "amount": "9.99",  

      "currency": "EUR",  

      "sellerMerchantGuid": "string",  

      "sellerMerchantExternalId": "string",  

      "commissionFee": {  

        "amount": "9.99",  

        "currency": "EUR"  

      }  

    }  

  ],  

  "tracingData": {  

    "transactions": [  

      {  

        "uuid": "string",  

        "sequence_number": 0,  

        "status": "SUCCESS",  

        "connector": {  

          "guid": "string"  

        }  

      }  

    ]  

  },  

  "message": "string",  

  "code": "string",  

  "adapterMessage": "string",  

  "adapterCode": "string",  

  "result": "OK",  

  "scheduleData": [  

    {  

      "scheduleId": "string",  

      "scheduleStatus": "active",  

      "scheduledAt": "2001-02-03T04:05:06+02:00",  

      "merchantMetaData": "string"  

    }  

  ],  

  "notificationSource": "reconciliation",  

  "originalAmount": "string",  

  "originalCurrency": "EUR"  

}  

```
```

"OK"  

```
```

OK  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pci/pci-transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3JkCg==`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "string",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "callbackUrl": "string",  
  "transactionToken": "string",  
  "description": "string",  
  "items": [  
    {  
      "identification": "string",  
      "name": "string",  
      "description": "string",  
      "quantity": 0,  
      "price": 0,  
      "currency": "EUR",  
      "l2l3Data": {  
        "type": "string",  
        "unit": "string",  
        "unitPrice": "9.99",  
        "discount": "9.99",  
        "shippingAmount": "9.99",  
        "taxAmount": "9.99",  
        "taxRate": "9.99",  
        "commodityCode": "string",  
        "taxDetails": [  
          {  
            "type": "string",  
            "amount": "9.99",  
            "rate": "9.99",  
            "code": "string",  
            "taxId": "string",  
            "applied": "string",  
            "exemptionCode": "string"  
          }  
        ]  
      },  
      "extraData": {}  
    }  
  ],  
  "splits": [  
    {  
      "identification": "string",  
      "amount": "9.99",  
      "currency": "EUR",  
      "sellerMerchantGuid": "string",  
      "sellerMerchantExternalId": "string",  
      "commissionFee": {  
        "amount": "9.99",  
        "currency": "EUR"  
      }  
    }  
  ],  
  "l2l3Data": {  
    "taxAmount": "string",  
    "vatRegistrationNumber": "string",  
    "nationalTaxIncluded": "string",  
    "discountAmount": "9.99",  
    "commodityCode": "string",  
    "freightAmount": "9.99",  
    "freightTaxAmount": "9.99",  
    "dutyAmount": "9.99",  
    "taxDetails": [  
      {  
        "type": "string",  
        "amount": "9.99",  
        "rate": "9.99",  
        "code": "string",  
        "taxId": "string",  
        "applied": "string",  
        "exemptionCode": "string"  
      }  
    ]  
  }  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "string",
  "referenceUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "callbackUrl": "string",
  "transactionToken": "string",
  "description": "string",
  "items": [
    {
      "identification": "string",
      "name": "string",
      "description": "string",
      "quantity": 0,
      "price": 0,
      "currency": "EUR",
      "l2l3Data": {
        "type": "string",
        "unit": "string",
        "unitPrice": "9.99",
        "discount": "9.99",
        "shippingAmount": "9.99",
        "taxAmount": "9.99",
        "taxRate": "9.99",
        "commodityCode": "string",
        "taxDetails": [
          {
            "type": "string",
            "amount": "9.99",
            "rate": "9.99",
            "code": "string",
            "taxId": "string",
            "applied": "string",
            "exemptionCode": "string"
          }
        ]
      },
      "extraData": {}
    }
  ],
  "splits": [
    {
      "identification": "string",
      "amount": "9.99",
      "currency": "EUR",
      "sellerMerchantGuid": "string",
      "sellerMerchantExternalId": "string",
      "commissionFee": {
        "amount": "9.99",
        "currency": "EUR"
      }
    }
  ],
  "l2l3Data": {
    "taxAmount": "string",
    "vatRegistrationNumber": "string",
    "nationalTaxIncluded": "string",
    "discountAmount": "9.99",
    "commodityCode": "string",
    "freightAmount": "9.99",
    "freightTaxAmount": "9.99",
    "dutyAmount": "9.99",
    "taxDetails": [
      {
        "type": "string",
        "amount": "9.99",
        "rate": "9.99",
        "code": "string",
        "taxId": "string",
        "applied": "string",
        "exemptionCode": "string"
      }
    ]
  }
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/refund

```
```

{  

  "merchantTransactionId": "2019-09-02-0007",  

  "referenceUuid": "bcdef23456bcdef23456",  

  "amount": "9.99",  

  "currency": "EUR",  

  "callbackUrl": "https://api.example.org/callback",  

  "description": "Refund money"  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://secure.ixopay.com/redirect-url",  

  "redirectQRCode": "data:image/png;base64,ABCDEFGHIJKLMNOPQRSTUVWXYZ",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": false,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20200924-abcde12345abcde12345",  

  "returnType": "ERROR",  

  "paymentMethod": "Dummy",  

  "errors": [  

    {  

      "errorMessage": "Dummy error",  

      "errorCode": 1003,  

      "adapterMessage": "Dummy adapter error"  

    }  

  ]  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The transaction ID '20190823062178' already exists!",  

  "errorCode": 3004  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "amount: 'amount' is required",  

  "errorCode": 1002  

}  

```
```
POST 
## {$request.body#/callbackUrl}

```
```

{  

  "uuid": "string",  

  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

  "purchaseId": "string",  

  "transactionType": "DEBIT",  

  "transactionSubType": "cb-resolved",  

  "paymentMethod": "string",  

  "amount": "9.99",  

  "currency": "EUR",  

  "surchargeAmount": "9.99",  

  "totalAmount": "9.99",  

  "dccData": {  

    "remoteIdentifier": "string",  

    "originalAmount": "9.99",  

    "originalCurrency": "EUR",  

    "convertedAmount": "9.99",  

    "convertedCurrency": "EUR",  

    "conversionRate": 0,  

    "selectedCurrency": "string",  

    "markUp": 0  

  },  

  "referenceUuid": "string",  

  "errors": [  

    {  

      "message": "string",  

      "code": "string",  

      "adapterMessage": "string",  

      "adapterCode": "string"  

    }  

  ],  

  "chargebackData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "chargebackDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "chargebackReversalData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "chargebackUuid": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "reversalDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "extraData": {},  

  "merchantMetaData": "string",  

  "returnData": {  

    "_TYPE": "cardData"  

  },  

  "payByLinkData": {  

    "sendViaEmail": true,  

    "cancelUrl": "string",  

    "expiresAt": "2024-07-29T15:51:28.071Z"  

  },  

  "customer": {  

    "identification": "string",  

    "firstName": "string",  

    "lastName": "string",  

    "birthDate": "2001-02-03",  

    "gender": "M",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "billingCountry": "AT",  

    "billingPhone": "+XX 1234567890",  

    "shippingFirstName": "string",  

    "shippingLastName": "string",  

    "shippingCompany": "string",  

    "shippingAddress1": "string",  

    "shippingAddress2": "string",  

    "shippingCity": "string",  

    "shippingPostcode": "string",  

    "shippingState": "string",  

    "shippingCountry": "AT",  

    "shippingPhone": "+XX 1234567890",  

    "company": "string",  

    "email": "string",  

    "emailVerified": true,  

    "ipAddress": "string",  

    "nationalId": "string",  

    "extraData": {},  

    "paymentData": {  

      "ibanData": {  

        "iban": "string",  

        "bic": "string",  

        "mandateId": "string",  

        "mandateDate": "2001-02-03"  

      }  

    }  

  },  

  "customerProfileData": {  

    "profileGuid": "string",  

    "customerIdentification": "string",  

    "paymentToken": "string",  

    "markAsPreferred": true  

  },  

  "splits": [  

    {  

      "identification": "string",  

      "amount": "9.99",  

      "currency": "EUR",  

      "sellerMerchantGuid": "string",  

      "sellerMerchantExternalId": "string",  

      "commissionFee": {  

        "amount": "9.99",  

        "currency": "EUR"  

      }  

    }  

  ],  

  "tracingData": {  

    "transactions": [  

      {  

        "uuid": "string",  

        "sequence_number": 0,  

        "status": "SUCCESS",  

        "connector": {  

          "guid": "string"  

        }  

      }  

    ]  

  },  

  "message": "string",  

  "code": "string",  

  "adapterMessage": "string",  

  "adapterCode": "string",  

  "result": "OK",  

  "scheduleData": [  

    {  

      "scheduleId": "string",  

      "scheduleStatus": "active",  

      "scheduledAt": "2001-02-03T04:05:06+02:00",  

      "merchantMetaData": "string"  

    }  

  ],  

  "notificationSource": "reconciliation",  

  "originalAmount": "string",  

  "originalCurrency": "EUR"  

}  

```
```

"OK"  

```
```

OK  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pci/pci-transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3JkCg==`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "string",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "callbackUrl": "string",  
  "transactionToken": "string",  
  "description": "string",  
  "items": [  
    {  
      "identification": "string",  
      "name": "string",  
      "description": "string",  
      "quantity": 0,  
      "price": 0,  
      "currency": "EUR",  
      "l2l3Data": {  
        "type": "string",  
        "unit": "string",  
        "unitPrice": "9.99",  
        "discount": "9.99",  
        "shippingAmount": "9.99",  
        "taxAmount": "9.99",  
        "taxRate": "9.99",  
        "commodityCode": "string",  
        "taxDetails": [  
          {  
            "type": "string",  
            "amount": "9.99",  
            "rate": "9.99",  
            "code": "string",  
            "taxId": "string",  
            "applied": "string",  
            "exemptionCode": "string"  
          }  
        ]  
      },  
      "extraData": {}  
    }  
  ],  
  "splits": [  
    {  
      "identification": "string",  
      "amount": "9.99",  
      "currency": "EUR",  
      "sellerMerchantGuid": "string",  
      "sellerMerchantExternalId": "string",  
      "commissionFee": {  
        "amount": "9.99",  
        "currency": "EUR"  
      }  
    }  
  ],  
  "l2l3Data": {  
    "taxAmount": "string",  
    "vatRegistrationNumber": "string",  
    "nationalTaxIncluded": "string",  
    "discountAmount": "9.99",  
    "commodityCode": "string",  
    "freightAmount": "9.99",  
    "freightTaxAmount": "9.99",  
    "dutyAmount": "9.99",  
    "taxDetails": [  
      {  
        "type": "string",  
        "amount": "9.99",  
        "rate": "9.99",  
        "code": "string",  
        "taxId": "string",  
        "applied": "string",  
        "exemptionCode": "string"  
      }  
    ]  
  }  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "string",
  "referenceUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "callbackUrl": "string",
  "transactionToken": "string",
  "description": "string",
  "items": [
    {
      "identification": "string",
      "name": "string",
      "description": "string",
      "quantity": 0,
      "price": 0,
      "currency": "EUR",
      "l2l3Data": {
        "type": "string",
        "unit": "string",
        "unitPrice": "9.99",
        "discount": "9.99",
        "shippingAmount": "9.99",
        "taxAmount": "9.99",
        "taxRate": "9.99",
        "commodityCode": "string",
        "taxDetails": [
          {
            "type": "string",
            "amount": "9.99",
            "rate": "9.99",
            "code": "string",
            "taxId": "string",
            "applied": "string",
            "exemptionCode": "string"
          }
        ]
      },
      "extraData": {}
    }
  ],
  "splits": [
    {
      "identification": "string",
      "amount": "9.99",
      "currency": "EUR",
      "sellerMerchantGuid": "string",
      "sellerMerchantExternalId": "string",
      "commissionFee": {
        "amount": "9.99",
        "currency": "EUR"
      }
    }
  ],
  "l2l3Data": {
    "taxAmount": "string",
    "vatRegistrationNumber": "string",
    "nationalTaxIncluded": "string",
    "discountAmount": "9.99",
    "commodityCode": "string",
    "freightAmount": "9.99",
    "freightTaxAmount": "9.99",
    "dutyAmount": "9.99",
    "taxDetails": [
      {
        "type": "string",
        "amount": "9.99",
        "rate": "9.99",
        "code": "string",
        "taxId": "string",
        "applied": "string",
        "exemptionCode": "string"
      }
    ]
  }
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/refund

```
```

{  

  "merchantTransactionId": "2019-09-02-0007",  

  "referenceUuid": "bcdef23456bcdef23456",  

  "amount": "9.99",  

  "currency": "EUR",  

  "callbackUrl": "https://api.example.org/callback",  

  "description": "Refund money"  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": true,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20190927-abcde12345abcde12345",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://secure.ixopay.com/redirect-url",  

  "redirectQRCode": "data:image/png;base64,ABCDEFGHIJKLMNOPQRSTUVWXYZ",  

  "paymentMethod": "Creditcard"  

}  

```
```

{  

  "success": false,  

  "uuid": "abcde12345abcde12345",  

  "purchaseId": "20200924-abcde12345abcde12345",  

  "returnType": "ERROR",  

  "paymentMethod": "Dummy",  

  "errors": [  

    {  

      "errorMessage": "Dummy error",  

      "errorCode": 1003,  

      "adapterMessage": "Dummy adapter error"  

    }  

  ]  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The transaction ID '20190823062178' already exists!",  

  "errorCode": 3004  

}  

```
```

{  

  "success": true  

}  

```
```

{  

  "success": false,  

  "errorMessage": "amount: 'amount' is required",  

  "errorCode": 1002  

}  

```
```
POST 
## {$request.body#/callbackUrl}

```
```

{  

  "uuid": "string",  

  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

  "purchaseId": "string",  

  "transactionType": "DEBIT",  

  "transactionSubType": "cb-resolved",  

  "paymentMethod": "string",  

  "amount": "9.99",  

  "currency": "EUR",  

  "surchargeAmount": "9.99",  

  "totalAmount": "9.99",  

  "dccData": {  

    "remoteIdentifier": "string",  

    "originalAmount": "9.99",  

    "originalCurrency": "EUR",  

    "convertedAmount": "9.99",  

    "convertedCurrency": "EUR",  

    "conversionRate": 0,  

    "selectedCurrency": "string",  

    "markUp": 0  

  },  

  "referenceUuid": "string",  

  "errors": [  

    {  

      "message": "string",  

      "code": "string",  

      "adapterMessage": "string",  

      "adapterCode": "string"  

    }  

  ],  

  "chargebackData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "chargebackDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "chargebackReversalData": {  

    "originalUuid": "string",  

    "originalMerchantTransactionId": "string",  

    "chargebackUuid": "string",  

    "amount": "9.99",  

    "currency": "EUR",  

    "reason": "string",  

    "reversalDateTime": "2001-02-03T04:05:06+02:00"  

  },  

  "extraData": {},  

  "merchantMetaData": "string",  

  "returnData": {  

    "_TYPE": "cardData"  

  },  

  "payByLinkData": {  

    "sendViaEmail": true,  

    "cancelUrl": "string",  

    "expiresAt": "2024-07-29T15:51:28.071Z"  

  },  

  "customer": {  

    "identification": "string",  

    "firstName": "string",  

    "lastName": "string",  

    "birthDate": "2001-02-03",  

    "gender": "M",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "billingCountry": "AT",  

    "billingPhone": "+XX 1234567890",  

    "shippingFirstName": "string",  

    "shippingLastName": "string",  

    "shippingCompany": "string",  

    "shippingAddress1": "string",  

    "shippingAddress2": "string",  

    "shippingCity": "string",  

    "shippingPostcode": "string",  

    "shippingState": "string",  

    "shippingCountry": "AT",  

    "shippingPhone": "+XX 1234567890",  

    "company": "string",  

    "email": "string",  

    "emailVerified": true,  

    "ipAddress": "string",  

    "nationalId": "string",  

    "extraData": {},  

    "paymentData": {  

      "ibanData": {  

        "iban": "string",  

        "bic": "string",  

        "mandateId": "string",  

        "mandateDate": "2001-02-03"  

      }  

    }  

  },  

  "customerProfileData": {  

    "profileGuid": "string",  

    "customerIdentification": "string",  

    "paymentToken": "string",  

    "markAsPreferred": true  

  },  

  "splits": [  

    {  

      "identification": "string",  

      "amount": "9.99",  

      "currency": "EUR",  

      "sellerMerchantGuid": "string",  

      "sellerMerchantExternalId": "string",  

      "commissionFee": {  

        "amount": "9.99",  

        "currency": "EUR"  

      }  

    }  

  ],  

  "tracingData": {  

    "transactions": [  

      {  

        "uuid": "string",  

        "sequence_number": 0,  

        "status": "SUCCESS",  

        "connector": {  

          "guid": "string"  

        }  

      }  

    ]  

  },  

  "message": "string",  

  "code": "string",  

  "adapterMessage": "string",  

  "adapterCode": "string",  

  "result": "OK",  

  "scheduleData": [  

    {  

      "scheduleId": "string",  

      "scheduleStatus": "active",  

      "scheduledAt": "2001-02-03T04:05:06+02:00",  

      "merchantMetaData": "string"  

    }  

  ],  

  "notificationSource": "reconciliation",  

  "originalAmount": "string",  

  "originalCurrency": "EUR"  

}  

```
```

"OK"  

```
```

OK  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pci/pci-transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3JkCg==`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "string",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "callbackUrl": "string",  
  "transactionToken": "string",  
  "description": "string",  
  "items": [  
    {  
      "identification": "string",  
      "name": "string",  
      "description": "string",  
      "quantity": 0,  
      "price": 0,  
      "currency": "EUR",  
      "l2l3Data": {  
        "type": "string",  
        "unit": "string",  
        "unitPrice": "9.99",  
        "discount": "9.99",  
        "shippingAmount": "9.99",  
        "taxAmount": "9.99",  
        "taxRate": "9.99",  
        "commodityCode": "string",  
        "taxDetails": [  
          {  
            "type": "string",  
            "amount": "9.99",  
            "rate": "9.99",  
            "code": "string",  
            "taxId": "string",  
            "applied": "string",  
            "exemptionCode": "string"  
          }  
        ]  
      },  
      "extraData": {}  
    }  
  ],  
  "splits": [  
    {  
      "identification": "string",  
      "amount": "9.99",  
      "currency": "EUR",  
      "sellerMerchantGuid": "string",  
      "sellerMerchantExternalId": "string",  
      "commissionFee": {  
        "amount": "9.99",  
        "currency": "EUR"  
      }  
    }  
  ],  
  "l2l3Data": {  
    "taxAmount": "string",  
    "vatRegistrationNumber": "string",  
    "nationalTaxIncluded": "string",  
    "discountAmount": "9.99",  
    "commodityCode": "string",  
    "freightAmount": "9.99",  
    "freightTaxAmount": "9.99",  
    "dutyAmount": "9.99",  
    "taxDetails": [  
      {  
        "type": "string",  
        "amount": "9.99",  
        "rate": "9.99",  
        "code": "string",  
        "taxId": "string",  
        "applied": "string",  
        "exemptionCode": "string"  
      }  
    ]  
  }  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "string",
  "referenceUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "callbackUrl": "string",
  "transactionToken": "string",
  "description": "string",
  "items": [
    {
      "identification": "string",
      "name": "string",
      "description": "string",
      "quantity": 0,
      "price": 0,
      "currency": "EUR",
      "l2l3Data": {
        "type": "string",
        "unit": "string",
        "unitPrice": "9.99",
        "discount": "9.99",
        "shippingAmount": "9.99",
        "taxAmount": "9.99",
        "taxRate": "9.99",
        "commodityCode": "string",
        "taxDetails": [
          {
            "type": "string",
            "amount": "9.99",
            "rate": "9.99",
            "code": "string",
            "taxId": "string",
            "applied": "string",
            "exemptionCode": "string"
          }
        ]
      },
      "extraData": {}
    }
  ],
  "splits": [
    {
      "identification": "string",
      "amount": "9.99",
      "currency": "EUR",
      "sellerMerchantGuid": "string",
      "sellerMerchantExternalId": "string",
      "commissionFee": {
        "amount": "9.99",
        "currency": "EUR"
      }
    }
  ],
  "l2l3Data": {
    "taxAmount": "string",
    "vatRegistrationNumber": "string",
    "nationalTaxIncluded": "string",
    "discountAmount": "9.99",
    "commodityCode": "string",
    "freightAmount": "9.99",
    "freightTaxAmount": "9.99",
    "dutyAmount": "9.99",
    "taxDetails": [
      {
        "type": "string",
        "amount": "9.99",
        "rate": "9.99",
        "code": "string",
        "taxId": "string",
        "applied": "string",
        "exemptionCode": "string"
      }
    ]
  }
}

```
```
