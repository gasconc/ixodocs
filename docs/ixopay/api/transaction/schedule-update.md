  * [](https://documentation.ixopay.com/)
  * Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Update


# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

Last updated on **Apr 10, 2026**
# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

  * [](https://documentation.ixopay.com/)
  * Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Update


# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

Last updated on **Apr 10, 2026**
[Previous Start](https://documentation.ixopay.com/api/transaction/schedule-start)[Next Get](https://documentation.ixopay.com/api/transaction/schedule-get)
  * [](https://documentation.ixopay.com/)
  * Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Update


# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

Last updated on **Apr 10, 2026**
# Update

```
POST 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update

```

Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.


If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector.
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule.


  * application/json


### Body**required**
Update a schedule with given parameters.
Include only the fields you want to update, all other fields will remain unchanged.
**registrationUuid** string
**Possible values:** `<= 50 characters`
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integer
**Possible values:** `>= 0`
**periodUnit** PeriodUnit (string)
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
**Possible values:** `<= 255 characters`
**callbackUrl** string
Callback URL for sending notifications of transactions initiated by the schedule, instead of the URL from the Register transaction.
**Possible values:** `<= 4096 characters`


## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus (string)
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** string<date-time>
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer<int32>
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

```

Rate limit exceeded
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
**errorCode** integer<int32>
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

```

## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange



```
POST 
## {$request.body#/callbackUrl}

```

Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
  * application/json


### Body**required**
The current state of the transaction.
**uuid** string
UUID of the transaction.
**merchantTransactionId** MerchantTransactionId (string)
A unique identifier supplied by the merchant to track transactions within their own systems.
This field links the platform’s transaction back to the merchant’s system, allowing for easy tracking and reconciliation. Note that while this ID is used within the platform, there is no guarantee that it will be forwarded to the Payment Service Provider (PSP).
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**purchaseId** string
Purchase ID of the transaction.
**Possible values:** `<= 50 characters`
**transactionType** TransactionType (string)
**Possible values:** [`DEBIT`, `CAPTURE`, `DEREGISTER`, `PREAUTHORIZE`, `REFUND`, `REGISTER`, `VOID`, `CHARGEBACK`, `CHARGEBACK-REVERSAL`, `PAYOUT`, `INCREMENTAL-AUTHORIZATION`]
**transactionSubType** TransactionSubType (string)
Only present if transaction has a `subType`.
**Possible values:** [`cb-resolved`, `cb-reversal-resolved`]
**paymentMethod** string
Payment method.
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**surchargeAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**totalAmount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**dccData** object
**remoteIdentifier** string
**Possible values:** `<= 128 characters`
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**chargebackDateTime** string<date-time>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**reason** string
**reversalDateTime** string<date-time>
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
**merchantMetaData** string
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
**cardUpdatedAt** string<datetime>nullable
Last run of the account updater.
Only non-null if the account updater is enabled and has run at least once. [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05:06`
**cardUpdatePausedUntil** string<date>
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
**mandateDate** string<date>
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
**routingNumber** integer<int32>
**Possible values:** `>= 9 characters` and `<= 9 characters`
**payByLinkData** object
**payByLink** booleandeprecated
`true` if this transaction was a Pay-by-Link transaction.
**sendViaEmail** boolean
`true` if this Pay-by-Link was sent to the transaction customer via email.
**cancelUrl** string<uri>
Endpoint to call to cancel a Pay-by-Link transaction.
For details, see [Pay-by-Link API reference](https://documentation.ixopay.com/api/pay-by-link/cancel).
**expiresAt** string<date-time>
Indicates at what date time the Pay-by-Link transaction expires.
**property name*** any
**customer** object
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
**Possible values:** `<= 50 characters`
**lastName** string
**Possible values:** `<= 50 characters`
**birthDate** string<date>
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
**billingCountry** Country (string)
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
**shippingCountry** Country (string)
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
**mandateDate** string<date>
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
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**sellerMerchantGuid** string
**Possible values:** `<= 11 characters`
**sellerMerchantExternalId** string
**Possible values:** `<= 128 characters`
**commissionFee** object
**amount** Amount (string)
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** Currency (string)
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
**sequence_number** number<int32>
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
**scheduleStatus** CallbackScheduleStatus (string)
Status of the schedule.
**Possible values:** [`active`, `paused`, `cancelled`, `error`, `create-pending`, `non-existing`]
**scheduledAt** string<date-time>
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


## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
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

```

Callback processing failed and retries will be performed.
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

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/update' \  
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

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/v3
Auth
Security Scheme
basicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
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

