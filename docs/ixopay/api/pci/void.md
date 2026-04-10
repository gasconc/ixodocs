---
title: Void
summary: ' PCI Transaction API'
tags:
- https-secure-ixopay-com-api-transaction-apikey-void
- request-https-documentation-ixopay-com-api-pci-void-request-direct-link-request
- path-parameters
- bodyrequired
- responses-https-documentation-ixopay-com-api-pci-void-responses-direct-link-responses
- api
- json
- 3d-secure
- pci
- ixopay
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Void

# Void```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/void

```

A void transaction cancels a previously performed authorization made with the [Preauthorize](https://documentation.ixopay.com/api/pci/preauthorize) method.
## Request[​](https://documentation.ixopay.com/api/pci/void#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector

  * application/json

### Body**required**
Data which is required to process a void
**merchantTransactionId** MerchantTransactionId (string)required
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**additionalId1** AdditionalId1 (string)
A supplementary identifier dependent on the used adapter.
This field provides additional information that can be used based on the specific adapter and their field mappings. The usage of `additionalId1` is contingent upon the support provided by the PSP, which is detailed in the adapter-specific documentation. If this field is supported, its proper usage will be outlined there. If it is not mentioned, it should not be used to avoid integration issues. Always refer to the adapter-specific documentation for guidance on using this additional identifier correctly.
**Possible values:** `non-empty` and `<= 50 characters`
**additionalId2** AdditionalId2 (string)
A supplementary identifier dependent on the used adapter.
This field provides additional information that can be used based on the specific adapter and their field mappings. The usage of `additionalId2` is contingent upon the support provided by the PSP, which is detailed in the adapter-specific documentation. If this field is supported, its proper usage will be outlined there. If it is not mentioned, it should not be used to avoid integration issues. Always refer to the adapter-specific documentation for guidance on using this additional identifier correctly.
**Possible values:** `non-empty` and `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**pspPassthroughData** object
Object containing key-value pars (string-to-string) to be passed to the PSP.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**referenceUuid** stringrequired
**Possible values:** `non-empty` and `<= 50 characters`
**description** string
**Possible values:** `<= 255 characters`

## Responses[​](https://documentation.ixopay.com/api/pci/void#responses "Direct link to Responses")
  * 200
  * 400
  * 422

Transaction response
  * application/json

  * Schema
  * Example (auto)
  * Finished
  * Processing error

**Schema**
**success** booleanrequired
**Possible values:** [`true`, `false`]
    * true
    * false
**success** booleanrequired
Returns `true` or `false` depending on whether the request was successful.
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
**redirectUrl** string
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
**_TYPE** ReturnDataType (string)required
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
**country** Country (string)
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
**threeDSecure** ThreeDSecureType (string)
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
**cardUpdatedAt** stringnullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string
Updates paused until this date.
Only non-null if the account updater is enabled. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**phoneNumber** string
**country** Country (string)
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**operator** string
**accountOwner** string
**iban** string
**bic** string
**mandateId** string
**mandateDate** string
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**bankName** string
**bankBranchName** string
**country** Country (string)
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
**routingNumber** integer
**Possible values:** `>= 9 characters` and `<= 9 characters`
**scheduleData** object
**scheduleId** string
ID of schedule which was started with the transaction.
**scheduleStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string
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
**errorCode** integer
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
**dccData** object
**uuid** string
**originalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**originalCurrency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**convertedAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**convertedCurrency** Currency (string)
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
**cancelUrl** string
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer
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
**errorCode** integer
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

`"returnType": "FINISHED"` indicates a successfully completed void transaction.
```
{  
  "success": true,  
  "uuid": "abcde12345abcde12345",  
  "purchaseId": "20190927-abcde12345abcde12345",  
  "returnType": "FINISHED",  
  "paymentMethod": "Creditcard"  
}  

An error occurred on the PSPs side.```
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

Transaction error response
  * application/json

  * Schema
  * Example (auto)
  * General error, e.g. duplicate

```
{  
  "success": false,  
  "errorMessage": "The transaction ID '20190823062178' already exists!",  
  "errorCode": 3004  
}  

  * Schema
  * Example (auto)
  * General error, e.g. validation
```
{  
  "success": false,  
  "errorMessage": "amount: 'amount' is required",  
  "errorCode": 1002  
}  

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

  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "amount": "9.99",  
  "currency": "EUR",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "string",  
  "referenceUuid": "string",  
  "description": "string"  
}'  

RequestCollapse all
Base URL
Edit
Auth
Security Scheme
basicAuth basicAuth and signature
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
  "amount": "9.99",
  "currency": "EUR",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "string",
  "referenceUuid": "string",
  "description": "string"
}