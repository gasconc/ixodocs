---
title: Start
summary: ' Transaction API'
tags:
- https-gateway-ixopay-com-api-schedule-apikey-start
- request-https-documentation-ixopay-com-api-transaction-schedule-start-request-direct-link-request
- path-parameters
- bodyrequired
- request-body-callbackurl
- api
- json
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/api/transaction/schedule-start
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Start

# Start
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```Start a schedule.
Requires the `registrationId` of an existing transaction of type [Register](https://documentation.ixopay.com/api/transaction/register), [Debit](https://documentation.ixopay.com/api/transaction/debit) (`withRegister`), or [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) (`withRegister`).
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.

If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-start#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector

  * application/json

  * Body
  * Example

### Body**required**
Start a schedule on the given registration transaction
**registrationUuid** stringrequired
**Possible values:** `<= 50 characters`
**amount** stringrequired
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** stringrequired
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integerrequired
**Possible values:** `>= 0`
**periodUnit** PeriodUnitrequired
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** date-timerequired
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** stringnullable
**Possible values:** `<= 255 characters`
**callbackUrl** stringnullable
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

}  

```## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-start#responses "Direct link to Responses")
  * 200
  * 429

Schedule response
  * application/json

  * Schema
  * Example (auto)
  * Success
  * Error

**Schema**
**success** booleanrequired
**Possible values:** [`true`, `false`]
    * true
    * false
**scheduleId** string
**registrationUuid** string
**merchantMetaData** string
**oldStatus** ScheduleStatus
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** int32
Error code.
For a complete list of error codes and their meanings, please see the appendix on [Error codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes).
**adapterMessage** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**adapterCode** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
```

{  

  "success": true  

}  

```
```

{  

  "success": true,  

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```Rate limit exceeded
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** boolean
Returns `true` or `false` depending on whether the request was successful.
**Possible values:** [`false`]
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** int32
**details** stringnullable
**property name*** any
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

}  

```## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-start#callbacks "Direct link to Callbacks")
  * POST statusChange
```
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

```## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-start#callbacks-responses "Direct link to Callbacks Responses")
  * 200
  * 500

Reply with status 200 and body `OK` if you have received the callback successfully.
  * text/plain

  * Schema
  * Example (auto)
  * Success

**Schema**
**string** string
**Possible values:** [`OK`]
```

"OK"  

```
```

OK  

```Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

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
  * Example
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

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

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

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
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

```
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

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

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

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
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

```
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

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

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

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
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

```
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

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

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

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
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

```
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/start

```
```

{  

  "registrationUuid": "abcde01234abcde01234",  

  "amount": "9.99",  

  "currency": "EUR",  

  "periodLength": 6,  

  "periodUnit": "MONTH",  

  "startDateTime": "2019-09-30T01:00:00+00:00"  

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

  "scheduleId": "SC-1234-1234-1234-1234-1234-1234",  

  "registrationUuid": "abcde01234abcde01234",  

  "oldStatus": "NON-EXISTING",  

  "newStatus": "ACTIVE",  

  "scheduledAt": "2019-09-30T12:00:00+00:00"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "The scheduleId is not valid or does not match to the connector",  

  "errorCode": 7040  

}  

```
```

{  

  "success": false,  

  "errorMessage": "string",  

  "errorCode": 0,  

  "details": "string"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1009,  

  "errorMessage": "Too many requests"  

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
**name:** basicAuth[](https://documentation.ixopay.com/api/transaction/transaction-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/start' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "registrationUuid": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "periodLength": 0,  
  "periodUnit": "MONTH",  
  "startDateTime": "2001-02-03T04:05:06+02:00",  
  "merchantMetaData": "string",  
  "callbackUrl": "string"  
}'  

```
```
{
  "registrationUuid": "string",
  "amount": "9.99",
  "currency": "EUR",
  "periodLength": 0,
  "periodUnit": "MONTH",
  "startDateTime": "2001-02-03T04:05:06+02:00",
  "merchantMetaData": "string",
  "callbackUrl": "string"
}

```