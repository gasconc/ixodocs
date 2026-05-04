---
title: Callback
summary: ' PCI Transaction API'
tags:
- request-https-documentation-ixopay-com-api-pci-callback-request-direct-link-request
- bodyrequired
- api
- json
- webhook
- 3d-secure
- pci
- ixopay
- psp
- chargeback
source_url: https://documentation.ixopay.com/api/pci/callback
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Callback

# Callback
```
Webhook 
```Receive status updates about transactions.
See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
## Request[​](https://documentation.ixopay.com/api/pci/callback#request "Direct link to request")
  * application/json

  * Body
  * Example (auto)

### Body**required**
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**selectedCurrency** string
**Possible values:** `<= 32 characters`
**markUp** number
**referenceUuid** string
**Possible values:** `non-empty` and `<= 50 characters`
**errors** object[]
  * Array [
**message** string
Error message.
While the `message` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `code` field, not the `message`.
**code** string
Error code.
For a complete list of error codes and their meanings, please see the appendix on [Error codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes).
**adapterMessage** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**adapterCode** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**property name*** any
General errors, such as authentication errors or validation errors will return an appropriate JSON response body containing an error message and error code.
  * ]
**chargebackData** object
When `transactionType` is `CHARGEBACK` this field contains information on the chargeback.
**originalUuid** string
**originalMerchantTransactionId** string
**Possible values:** `non-empty` and `<= 50 characters`
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**property name*** any
When `transactionType` is `CHARGEBACK` this field contains information on the chargeback.
**chargebackReversalData** object
When `transactionType` is `CHARGEBACK-REVERSAL` this field contains information on the chargeback-reversal.
**originalUuid** string
**originalMerchantTransactionId** string
**Possible values:** `non-empty` and `<= 50 characters`
**chargebackUuid** string
**amount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**property name*** any
When `transactionType` is `CHARGEBACK-REVERSAL` this field contains information on the chargeback-reversal.
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
**merchantMetaData** string
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
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**gender** string
**Possible values:** [`M`, `F`]
**billingAddress1** string
**Possible values:** `<= 50 characters`
**billingAddress2** string
**Possible values:** `<= 50 characters`
**billingCity** string
**Possible values:** `<= 50 characters`
**billingPostcode** string
**Possible values:** `<= 16 characters`
**billingState** string
**Possible values:** `<= 30 characters`
**billingCountry** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**billingPhone** string
**Possible values:** `<= 20 characters`
**Example:**`+XX 1234567890`
**shippingFirstName** string
**Possible values:** `<= 50 characters`
**shippingLastName** string
**Possible values:** `<= 50 characters`
**shippingCompany** string
**Possible values:** `<= 50 characters`
**shippingAddress1** string
**Possible values:** `<= 50 characters`
**shippingAddress2** string
**Possible values:** `<= 50 characters`
**shippingCity** string
**Possible values:** `<= 50 characters`
**shippingPostcode** string
**Possible values:** `<= 16 characters`
**shippingState** string
**Possible values:** `<= 30 characters`
**shippingCountry** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**shippingPhone** string
**Possible values:** `<= 20 characters`
**Example:**`+XX 1234567890`
**company** string
**Possible values:** `<= 50 characters`
**email** string
**Possible values:** `<= 255 characters`
**emailVerified** boolean
**ipAddress** string
**Possible values:** `<= 50 characters`
**nationalId** string
**Possible values:** `<= 20 characters`
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**Possible values:** `<= 64`.  
**Property name:** `<= 64 characters`.  
**Property value:** `<= 8192 characters`.
**property name*** string
**Possible values:** `<= 8192 characters`
**paymentData** object
oneOf
    * PaymentIbanData
    * PaymentWalletData
**ibanData** object
**iban** string
**Possible values:** `<= 34 characters`
**bic** string
**Possible values:** `<= 11 characters`
**mandateId** string
**Possible values:** `<= 50 characters`
**mandateDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
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
**property name*** any
**property name*** any
  * ]
**tracingData** object
Transaction routing and cascading details.
Present only if tracing was enabled in the request.
**transactions** object[]
  * Array [
**uuid** string
**sequence_number** int32
Indicates the transaction's order in the processing sequence
**status** string
Current status of the transaction
**Possible values:** [`SUCCESS`, `PENDING`, `REDIRECT`, `CANCELLED`, `ERROR`]
**connector** object
**guid** string
**property name*** any
**property name*** any
  * ]
**property name*** any
Transaction routing and cascading details.
Present only if tracing was enabled in the request.
**message** string
Error message.
While the `message` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `code` field, not the `message`.
**code** string
Error code.
For a complete list of error codes and their meanings, please see the appendix on [Error codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes).
**adapterMessage** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**adapterCode** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**result** string
**Possible values:** [`OK`, `PENDING`, `ERROR`]
**scheduleData** object[]
  * Array [
**scheduleId** string
ID of schedule which was started with the transaction.
**scheduleStatus** CallbackScheduleStatus
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**property name*** any
  * ]
**notificationSource** string
In case the transaction status, amount or currency has been changed after reconciliation the parameter can have the following value: `reconciliation`, `settlement`.
**Possible values:** [`reconciliation`, `settlement`]
**originalAmount** string
In case the transaction amount has been changed after reconciliation the is parameter will contain the original amount. Decimals separated by `.`, max. 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**originalCurrency** string
In case the transaction currency has been changed after reconciliation the is parameter will contain the original currency.
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
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

```## Responses[​](https://documentation.ixopay.com/api/pci/callback#responses "Direct link to Responses")
  * 200

Reply with status 200 and body `OK` if you have received the callback successfully.
  * text/plain

  * Schema
  * Example (auto)

**Schema**
**string** string
**Possible values:** [`OK`]
```

"OK"  

```#### Authorization: http
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

```RequestCollapse all
Auth
Security SchemebasicAuth basicAuth and signature
Username
Password
Body required
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
Webhook 
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
Webhook 
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
Webhook 
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
Webhook 
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
Webhook 
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