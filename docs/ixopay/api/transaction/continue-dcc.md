---
title: Continue
summary: ' Transaction API'
tags:
- https-gateway-ixopay-com-api-transaction-apikey-continue-dcc
- request-https-documentation-ixopay-com-api-transaction-continue-dcc-request-direct-link-request
- path-parameters
- body
- api
- json
- 3d-secure
- ixopay
- authorization
- iframe
source_url: https://documentation.ixopay.com/api/transaction/continue-dcc
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* Transaction API
  * [DCC](https://documentation.ixopay.com/api/transaction/dcc)
  * Continue

# Continue
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```DCC is a direct currency conversion possibility which can be activated during a credit card payment, if activated in the connector. To do so you will first have to send a regular transaction request with an additional parameter to receive the current conversion rate.
If there is a possible conversion an additional request has to be sent to with the chosen currency to finalize the transaction.
To initiate a DCC Request, add the additional `requestDcc` parameter to the transaction request.
If a transaction is in the `PENDING_DCC` state, it can be finalized with a request to the `continue-dcc` endpoint. The possible currencies are the original currency of the transaction and the converted currency from the transaction response.
## Request[​](https://documentation.ixopay.com/api/transaction/continue-dcc#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector

  * application/json

  * Body
  * Example (auto)

### Body
Data which is required to continue a pending DCC transaction.
**continueDccUuid** string
**Possible values:** `<= 50 characters`
**selectedDccCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

}  

```## Responses[​](https://documentation.ixopay.com/api/transaction/continue-dcc#responses "Direct link to Responses")
  * 200

Transaction response
  * application/json

  * Schema
  * Example (auto)
  * Success

**Schema**
**success** booleanrequired
**Possible values:** [`true`, `false`]
    * true
    * false
**success** booleanrequired
`true` if the transaction was processed without an error (does not imply it is finished); `false` on failure.
**uuid** string
UUID of the transaction.
**purchaseId** string
Purchase ID of the transaction.
**returnType** string
Depending on the `returnType` a transaction is finished, intermediate, or failed.
    * `FINISHED`
The transaction completed and was processed successfully. You can deliver the ordered goods.
    * `ERROR`
The transaction failed or was declined. See the error code and message for further details.
You will find the native error message and code from the payment provider/acquiring bank in the fields `adapterMessage` and `adapterCode`.
> _Note_ : Merchant Advice Code
> When supported by an adapter implementation, a merchant advice code can be returned with the `ReturnData`.
> This code is piped through as received by the gateway.
> If a merchant advice code indicating a hard "do not retry" is returned, the value `"doNotResubmit": true` will additionally be returned with the error response extra data.
    * `REDIRECT`
You must redirect the user to the URL defined in `redirectUrl` to proceed with the transaction. Afterwards the user will be back redirected to your website (one of the URLs you defined in the API call in `successUrl`, `cancelUrl` or `errorUrl`). In parallel the  sends a status notification to you `callbackUrl` with the final result.
> _Note_ :
> For the final result you should only trust the notification, **NOT** the back redirection!
    * `PENDING`
The transaction was accepted for processing, but is not yet completed. You will receive a status notification to the URL you defined in `callbackUrl` once it reaches a final state.
Depending on the payment method, this can take from seconds up to several days.
**Possible values:** [`FINISHED`, `REDIRECT`, `HTML`, `PENDING`, `ERROR`, `PENDING_DCC`]
**redirectType** string
Depending on the `redirectType` the URL from `redirectUrl` should be displayed either in an ``, in a full page (e.g. via a `HTTP 302` redirect with a `Location` header).
**Possible values:** [`iframe`, `fullpage`]
**redirectUrl** uri
URL the customer must be redirected to, only set if `"returnType": "REDIRECT"`.
**Possible values:** `<= 255 characters`
**redirectQRCode** string
QR Code with redirectUrl base64 encoded.
**htmlContent** string
HTML content the customer must be shown, only set if `"returnType": "HTML"`.
**paymentDescriptor** string
**paymentMethod** string
Payment method used - if it has already been determined.
**returnData** object
**_TYPE** ReturnDataTyperequired
**Possible values:** [`cardData`, `phoneData`, `ibanData`, `walletData`, `achData`]
    * cardData
    * phoneData
    * ibanData
    * walletData
    * achData
**type** string
Type of credit card
**firstName** string
**lastName** string
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**cardHolder** string
**expiryMonth** string
**Possible values:** Value must match regular expression `^((0[1-9])|(1[0-2]))$`
**expiryYear** string
**Possible values:** Value must match regular expression `^[0-9]{4}$`
**binDigits** string
**Possible values:** Value must match regular expression `^[0-9]{6-8}$`
**firstSixDigits** string
**Possible values:** Value must match regular expression `^[0-9]{6}$`
**lastFourDigits** string
**Possible values:** Value must match regular expression `^[0-9]{4}$`
**fingerprint** string
**binBrand** string
**binBank** string
**binType** string
**binLevel** string
**binCountry** string
**binSegment** string
Indicates the market segment for the BIN
**Possible values:** [`Consumer`, `Business`, `Commercial`, `Government`, `Unknown`]
**binRawData** object
Shows the complete BIN entry used for the transaction
**type** string
Identifies the BIN entry data structure
**data** object
**property name*** any
**threeDSecure** ThreeDSecureType
Triggers the 3D Secure authentication for this transaction.
**Possible values:** [`OFF`, `OPTIONAL`, `MANDATORY`]
**eci** string
**merchantAdviceCode** string
Pipes through the merchant advice code for failed transactions if supported by the adapter.
**parsedMerchantAdviceCode** string
Merchant advice code for failed transactions if supported by the adapter.
    * `01` - Additional information needed.
    * `02` - Try again later.
    * `03` - Do not try again.
**Possible values:** [`01`, `02`, `03`]
**schemeTransactionIdentifier** string
The `schemeTransactionIdentifier`, is a unique reference generated by a card scheme. It serves the purpose of traceability back to the initial transaction.
It is also referred to as the 'scheme reference ID,' 'scheme transaction ID,' 'trace ID' (for Mastercard), or 'transaction ID' (for VISA).
**cardUpdateStatus** stringnullable
Status of the last account updater run.
Only non-null if the account updater is enabled and has run at least once.
**Possible values:** [`updated`, `contact`, `new-expiry`, `closed`]
**cardUpdatedAt** datetimenullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** date (string)
Updates paused until this date.
Only non-null if the account updater is enabled. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**phoneNumber** string
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**operator** string
**accountOwner** string
**iban** string
**bic** string
**mandateId** string
**mandateDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**bankName** string
**bankBranchName** string
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**walletReferenceId** string
Reference ID of the wallet.
**walletOwner** string
Owner of the wallet.
**walletType** string
Type of wallet.
**walletOwnerFirstName** string
First name of wallet owner.
**walletOwnerLastName** string
Last name of wallet owner.
**walletOwnerCountryCode** string
Country code of wallet owner.
**walletRegistrationId** string
UUID of the transaction that initially registered this wallet.
**accountHolder** string
**accountHolderType** string
**Possible values:** [`person`, `company`]
**accountType** string
**Possible values:** [`checking`, `savings`]
**accountNumber** string
**Possible values:** `<= 17 characters`
**routingNumber** int32
**Possible values:** `>= 9 characters` and `<= 9 characters`
**scheduleData** object
**scheduleId** string
ID of schedule which was started with the transaction.
**scheduleStatus** ScheduleStatus
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**property name*** any
**customerProfileData** object
**profileGuid** string
The unique customer profile identifier generated by the platform.
**customerIdentification** string
The customer profile identifier provided by you when creating the customer profile. Unique within one customer profile container.
**paymentToken** string
The created payment instrument for the customer profile, use with `transactionToken` when creating new transactions.
**markAsPreferred** boolean
Whether this payment instrument was marked as preferred for the customer.
**property name*** any
**riskCheckData** object
**riskCheckResult** string
**Possible values:** [`APPROVED`, `DECLINED`, `REVIEW`]
**riskScore** number
**threeDSecureRequired** boolean
**property name*** any
**errors** object[]
  * Array [
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
**property name*** any
General errors, such as authentication errors or validation errors will return an appropriate JSON response body containing an error message and error code.
  * ]
**adapterMessage** string
**adapterCode** string
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
**dccData** object
**uuid** string
**originalAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**originalCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**convertedAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**convertedCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**conversionRate** number
**disclaimer** string
**property name*** any
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** uri
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** date-time
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
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
**success** booleanrequired
**returnType** string
**Possible values:** [`ERROR`]
**errors** object[]
  * Array [
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
**property name*** any
General errors, such as authentication errors or validation errors will return an appropriate JSON response body containing an error message and error code.
  * ]
```

{  

  "success": true  

}  

```
```

{  

  "success": true,  

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

```#### Authorization: http
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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
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
Body
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

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

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
}'  

```
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

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

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
}'  

```
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

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

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
}'  

```
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

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

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
}'  

```
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc

```
```

{  

  "continueDccUuid": "string",  

  "selectedDccCurrency": "EUR"  

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

  "uuid": "12345678910",  

  "purchaseId": "20211006-12345678910",  

  "returnType": "PENDING_DCC",  

  "dccData": {  

    "uuid": "10987654321",  

    "originalAmount": 155,  

    "originalCurrency": "EUR",  

    "convertedAmount": "200",  

    "convertedCurrency": "USD",  

    "conversionRate": 1.07,  

    "disclaimer": "string",  

    "markUp": 0.01  

  }  

}  

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
curl -L 'https://gateway.ixopay.com/api/v3/transaction/:apiKey/continue-dcc' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "continueDccUuid": "string",  
  "selectedDccCurrency": "EUR"  
}'  

```
```
{
  "continueDccUuid": "string",
  "selectedDccCurrency": "EUR"
}

```