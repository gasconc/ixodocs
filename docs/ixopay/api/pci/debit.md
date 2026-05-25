---
title: Debit
summary: ' PCI Transaction API'
tags:
- https-secure-ixopay-com-api-transaction-apikey-debit
- request-https-documentation-ixopay-com-api-pci-debit-request-direct-link-request
- path-parameters
- bodyrequired
- request-body-callbackurl
- api
- sdk
- json
- 3ds
- 3d-secure
source_url: https://documentation.ixopay.com/api/pci/debit
portal: ixopay-dev
updated: '2026-05-25'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Debit

# Debit
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```A Debit performs a complete customer initiated customer-to-merchant payment.
## Request[​](https://documentation.ixopay.com/api/pci/debit#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector

  * application/json

  * Body
  * Typical

### Body**required**
Data which is required to process a debit transaction. Depending on the adapter, additional fields may be required to be sent as `extraData` and field restrictions may be stricter.
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
The field `merchantMetaData` is optional and for your internal use only. It can be filled with any string you want, with a maximum length of 255 characters.
The value has no influence on the transaction process at all and will be returned to you in any postback notification. It may also be included in data exports.
If you want to add different types of information, we recommend separating them by a character which would not occur in the data value itself, e.g. a pipe character `|`.
**Possible values:** `<= 255 characters`
**Example:**`anyValue1|anotherValue2`
**referenceUuid** string
UUID of an initial transaction.
**Possible values:** `non-empty` and `<= 50 characters`
**amount** stringrequired
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**surchargeAmount** string
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** stringrequired
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**successUrl** uri
Redirect to URL on success/pending.
**Possible values:** `<= 4096 characters`
**Example:**`https://shop.example.org/checkout/success`
**cancelUrl** uri
Redirect to URL on cancel.
**Possible values:** `<= 4096 characters`
**Example:**`https://shop.example.org/checkout/cancel`
**errorUrl** uri
Redirect to URL on error.
**Possible values:** `<= 4096 characters`
**Example:**`https://shop.example.org/checkout/error`
**callbackUrl** uri
Endpoint to receive status notifications.
**Possible values:** `<= 4096 characters`
**Example:**`https://api.example.org/callback`
**transactionToken** string
Token generated via payment.js.
**Possible values:** `<= 8192 characters`
**description** string
Description of your transaction.
This might show up on a credit-card statement (depends on Adapter and PSP).
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
**withRegister** boolean
If `true`, store customer's payment instrument for recurring transactions.
**transactionIndicator** string
Instructs the acquirer which kind of payment you are planning.
Passing the correct value reduces friction and might increase the likelihood of a 3DS 2.0 frictionless flow.
**Possible values:** [`SINGLE`, `INITIAL`, `RECURRING`, `FIRST-CARDONFILE`, `CARDONFILE`, `CARDONFILE-MERCHANT-INITIATED`, `MOTO`]
**customer** object
Information on the customer making a payment.
Strive to include as much information as possible. This reduces friction and provides the most benefit for risk checks, 3D-secure authentication and other validations.
**identification** string
**Possible values:** `<= 36 characters`
**firstName** string
First name of the customer.
**Possible values:** `<= 50 characters`
**lastName** string
Last name of the customer.
**Possible values:** `<= 50 characters`
**birthDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**gender** string
Gender of the customer.
**Possible values:** [`M`, `F`]
**billingAddress1** string
Line one of the customer's billing address.
**Possible values:** `<= 50 characters`
**billingAddress2** string
Line two of the customer's billing address.
**Possible values:** `<= 50 characters`
**billingCity** string
City of the customer's billing address.
**Possible values:** `<= 50 characters`
**billingPostcode** string
Postal code of the customer's billing address.
**Possible values:** `<= 16 characters`
**billingState** string
State of the customer's billing address.
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
**schedule** object
**amount** stringrequired
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]{1,10})|([0-9]{1,10}\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** stringrequired
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**periodLength** integerrequired
The length of the duration, measured in `periodUnit`.
**Possible values:** `>= 0`
**periodUnit** PeriodUnitrequired
The unit that the duration is measured in.
**Possible values:** [`DAY`, `WEEK`, `MONTH`, `YEAR`]
**Example:**`MONTH`
**startDateTime** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
**merchantMetaData** string
The field `merchantMetaData` is optional and for your internal use only. It can be filled with any string you want, with a maximum length of 255 characters.
The value has no influence on the transaction process at all and will be returned to you in any postback notification. It may also be included in data exports.
If you want to add different types of information, we recommend separating them by a character which would not occur in the data value itself, e.g. a pipe character `|`.
**Possible values:** `<= 255 characters`
**callbackUrl** uri
Endpoint to receive status notifications.
**Possible values:** `<= 4096 characters`
**Example:**`https://api.example.org/callback`
**customerProfileData** object
Reference to a customer profile created with the Customer Profile API.
Either `profileGuid` or `customerIdentification` MUST be provided.
**profileGuid** string
The unique customer profile identifier created by the platform.
Supply this field to register a new payment instrument with an existing customer profile.
**Possible values:** `<= 36 characters`
**customerIdentification** string
The customer profile identifier provided by you.
Supply this field to create a new customer profile, or register a new payment instrument with an existing customer profiled.
**Possible values:** `<= 36 characters`
**markAsPreferred** boolean
Mark payment instrument this `CustomerProfile` is used on as preferred.
**threeDSecureData** object
3D-Secure authentication result obtained from the 3DS MPI Provider.
As explained in [3D Secure — Providing 3-D Secure data](https://documentation.ixopay.com/docs/guides/features/3d-secure#providing-3-d-secure-data) you should provide as many data as you have to apply for the 3D Secure 2.0 frictionless flow.
note
    * All fields from the 3D Secure standard that already match with the transaction or customer data are already automatically filled by the , and are not listed here.
    * _3D-Secure 2.0_ : For 3D-Secure 2.0, the `browser*` fields below are mandatory. Transaction will not succeed if neither all browser nor all SDK parameters are provided.
    * _Browser Data_ : The `browser*` fields are filled automatically by the  if you are using hosted payment pages or payment.js integration. For any other integration flow you will need to provide them. :::
**3dsecure** ThreeDSecureType
Triggers the 3D Secure authentication for this transaction.
**Possible values:** [`OFF`, `OPTIONAL`, `MANDATORY`]
**schemeId** string
"Pin" the scheme ID in case of a co-branded card.
Currently, there is only CB supported.
**Possible values:** [`CB`]
**Example:**`CB`
**channel** string
Indicates the type of channel interface being used to initiate the transaction.
    * `01` - App-based
    * `02` - Browser
    * `03` - 3DS Requestor Initiated
**Possible values:** [`01`, `02`, `03`]
**authenticationIndicator** string
Indicates the type of Authentication request. This data element provides additional information to the ACS to determine the best approach for handling an authentication request.
    * `01` - Payment transaction
    * `02` - Recurring transaction
    * `03` - Installment transaction
    * `04` - Add card
    * `05` - Maintain card
    * `06` - Cardholder verification as part of EMV token ID&V
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`]
**cardholderAuthenticationMethod** string
Mechanism used by the Cardholder to authenticate to the 3DS Requester.
    * `01` - No 3DS Requester authentication occurred (i.e. cardholder "logged in" as guest)
    * `02` - Login to the cardholder account at the 3DS Requestor system using 3DS Requestor's own credentials
    * `03` - Login to the cardholder account at the 3DS Requestor system using federated ID
    * `04` - Login to the cardholder account at the 3DS Requestor system using issuer credentials
    * `05` - Login to the cardholder account at the 3DS Requestor system using third-party authentication
    * `06` - Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`]
**cardholderAuthenticationDateTime** date-time
Date and time in UTC of the cardholder authentication.
**Example:**`2001-02-03T04:05:06+02:00`
**cardHolderAuthenticationData** string
Data that documents and supports a specific authentication process.
In the current version of the specification, this data element is not defined in detail, however the intention is that for each 3DS Requestor Authentication Method, this field carry data that the ACS can use to verify the authentication process.
**Possible values:** `<= 1024 characters`
**challengeIndicator** string
Indicates whether a challenge is requested for this transaction.
For example: For 01-PA, a 3DS Requester may have concerns about the transaction, and request a challenge.
    * `01` - No preference
    * `02` - No challenge requested
    * `03` - Challenge requested: 3DS Requestor Preference
    * `04` - Challenge requested: Mandate
    * `05` - No challenge requested (transactional risk analysis is already performed)
    * `06` - No challenge requested (Data share only)
    * `07` - No challenge requested (strong consumer authentication is already performed)
    * `08` - No challenge requested (utilise whitelist exemption if no challenge required)
    * `09` - Challenge requested (whitelist prompt requested if challenge required)
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`]
**priorReference** string
This data element provides additional information to the ACS to determine the best approach for handling a request.
Containing ACS Transaction ID for a prior authenticated transaction (for example, the first recurring transaction that was authenticated with the cardholder).
**Possible values:** `<= 36 characters`
**priorAuthenticationMethod** string
Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor.
    * `01` - Frictionless authentication occurred by ACS
    * `02` - Cardholder challenge occurred by ACS
    * `03` - AVS verified
    * `04` - Other issuer methods
**Possible values:** [`01`, `02`, `03`, `04`]
**priorAuthenticationDateTime** local-date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05`
**priorAuthenticationData** string
Data that documents and supports a specific authentication process.
In the current version of the specification this data element is not defined in detail, however the intention is that for each 3DS Requestor Authentication Method, this field carry data that the ACS can use to verify the authentication process.
In future versions of the application, these details are expected to be included.
**Possible values:** `<= 2048 characters`
**cardholderAccountType** string
Indicates the type of account. For example, for a multi-account card product.
    * `01` - Not applicable
    * `02` - Credit
    * `03` - Debit
    * `04` - JCB specific value for Prepaid
**Possible values:** [`01`, `02`, `03`, `04`]
**cardholderAccountAgeIndicator** string
Length of time that the cardholder has had the account with the 3DS Requester.
    * `01` - No account (guest check-out)
    * `02` - During this transaction
    * `03` - Less than 30 days
    * `04` - 30—60 days
    * `05` - More than 60 days
**Possible values:** [`01`, `02`, `03`, `04`, `05`]
**cardholderAccountDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**cardholderAccountChangeIndicator** string
Length of time since the cardholder’s account information with the 3DS Requestor was last changed.
Includes Billing or Shipping address, new payment account, or new user(s) added.
    * `01` - Changed during this transaction
    * `02` - Less than 30 days
    * `03` - 30—60 days
    * `04` - More than 60 days
**Possible values:** [`01`, `02`, `03`, `04`]
**cardholderAccountLastChange** date-time
Date that the cardholder’s account with the 3DS Requestor was last changed. Including Billing or Shipping address, new payment account, or new user(s) added.
**Example:**`2001-02-03T04:05:06+02:00`
**cardholderAccountPasswordChangeIndicator** string
Length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.
    * `01` - No change
    * `02` - Changed during this transaction
    * `03` - Less than 30 days
    * `04` - 30—60 days
    * `05` - More than 60 days
**Possible values:** [`01`, `02`, `03`, `04`, `05`]
**cardholderAccountLastPasswordChange** date (string)
Date that cardholder’s account with the 3DS Requestor had a password change or account.
**Example:**`2001-02-03`
**shippingAddressUsageIndicator** string
Indicates when the shipping address used for this transaction was first used with the 3DS.
    * `01` - Changed during this transaction
    * `02` - Less than 30 days
    * `03` - 30—60 days
    * `04` - More than 60 days
**Possible values:** [`01`, `02`, `03`, `04`]
**shippingAddressFirstUsage** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**transactionActivityDay** integer
Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours.
**Possible values:** `>= 0` and `<= 999`
**transactionActivityYear** integer
Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year.
**Possible values:** `>= 0` and `<= 999`
**addCardAttemptsDay** integer
Number of Add Card attempts in the last 24 hours.
**Possible values:** `>= 0` and `<= 999`
**purchaseCountSixMonths** integer
Number of purchases with this cardholder account during the previous six month.
If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999.
**Possible values:** `>= 0` and `<= 999`
**suspiciousAccountActivityIndicator** string
Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.
    * `01` - No suspicious activity has been observed
    * `02` - Suspicious activity has been observed
**Possible values:** [`01`, `02`]
**shippingNameEqualIndicator** string
Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.
    * `01` - Account Name identical to shipping name
    * `02` - Account Name different from shipping name
**Possible values:** [`01`, `02`]
**paymentAccountAgeIndicator** string
Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.
    * `01` - No account (guest check-out)
    * `02` - During this transaction
    * `03` - Less than 30 days
    * `04` - 30—60 days
    * `05` - More than 60 days
**Possible values:** [`01`, `02`, `03`, `04`, `05`]
**paymentAccountAgeDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**billingAddressLine3** string
Line 3 of customer's billing address.
**Possible values:** `<= 128 characters`
**billingAddressState** string
State of the customer's billing address.
**Possible values:** Value must match regular expression `^[A-Z0-9]{1,3}$`
**shippingAddressLine3** string
Line 3 of customer's shipping address.
**Possible values:** `<= 128 characters`
**shippingAddressState** string
State of the customer's shipping address.
**Possible values:** Value must match regular expression `^[A-Z0-9]{1,3}$`
**billingShippingAddressMatch** string
Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same.
    * `Y` - Shipping Address matches Billing Address
    * `N` - Shipping Address does not match Billing Address
**Possible values:** [`Y`, `N`]
**homePhoneCountryPrefix** string
Country Code of the home phone, [ITU E.164](https://en.wikipedia.org/wiki/E.164).
**Possible values:** `non-empty` and `<= 3 characters`
**homePhoneNumber** string
Subscriber section of the number.
**Possible values:** `<= 15 characters`
**mobilePhoneCountryPrefix** string
Country Code of the mobile phone, [ITU E.164](https://en.wikipedia.org/wiki/E.164).
**Possible values:** `non-empty` and `<= 3 characters`
**mobilePhoneNumber** string
Subscriber section of the number.
**Possible values:** `<= 15 characters`
**workPhoneCountryPrefix** string
Country Code of the work phone, [ITU E.164](https://en.wikipedia.org/wiki/E.164).
**Possible values:** `non-empty` and `<= 3 characters`
**workPhoneNumber** string
Subscriber section of the number.
**Possible values:** `<= 15 characters`
**purchaseInstalData** integer
Indicates the maximum number of authorisations permitted for instalment payments.
The field is required if the Merchant and Cardholder have agreed to installment payments, i.e. if 3DS Requestor Authentication Indicator = `03`.
Omitted if not an installment payment authentication.
**Possible values:** `>= 1` and `<= 999`
**shipIndicator** string
Indicates shipping method chosen for the transaction.
Merchants must choose the Shipping Indicator code that most accurately describes the cardholder's specific transaction. If one or more items are included in the sale, use the Shipping Indicator code for the physical goods, or if all digital goods, use the code that describes the most expensive item.
    * `01` - Ship to cardholder's billing address
    * `02` - Ship to another verified address on file with merchant
    * `03` - Ship to address that is different from the cardholder's billing address
    * `04` - "Ship to Store" / Pick-up at local store (Store address shall be populated in shipping address fields)
    * `05` - Digital goods (includes online services, electronic gift cards and redemption codes)
    * `06` - Travel and Event tickets, not shipped
    * `07` - Other (for example, Gaming, digital services not shipped, e-media subscriptions, etc.)
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`, `07`]
**deliveryTimeframe** string
Indicates the merchandise delivery timeframe.
    * `01` - Electronic Delivery
    * `02` - Same day shipping
    * `03` - Overnight shipping
    * `04` - Two-day or more shipping
**Possible values:** [`01`, `02`, `03`, `04`]
**deliveryEmailAddress** string
For electronic delivery, the email address to which the merchandise was delivered.
**Possible values:** `<= 128 characters`
**reorderItemsIndicator** string
Indicates whether the cardholder is reordering previously purchased merchandise.
    * `01` - First time ordered
    * `02` - Reordered
**Possible values:** [`01`, `02`]
**preOrderPurchaseIndicator** string
Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.
    * `01` - Merchandise available
    * `02` - Future availability
**Possible values:** [`01`, `02`]
**preOrderDate** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**giftCardAmount** integer
For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, "USD 123.45" is `123`).
**Possible values:** `>= 0` and `<= 999999999999999`
**giftCardCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**giftCardCount** integer
For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.
**Possible values:** `>= 1` and `<= 99`
**purchaseDate** local-date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date " " time` without `timespec-second`, `time-fraction`, and `time-zone`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) (([0-1][0-9])|([2][0-3])):([0-5][0-9])$`
**Example:**`2001-02-03 04:05`
**recurringExpiry** date (string)
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$`
**Example:**`2001-02-03`
**recurringFrequency** integer
Indicates the minimum number of days between authorizations.
This field is required for 01-PA and for 02-NPA, if 3DS Requestor Authentication Indicator = `02` or `03`.
**Possible values:** `>= 0` and `<= 9999`
**transType** string
Identifies the type of transaction being authenticated.
The values are derived from ISO 8583.
    * `01` - Goods / Service purchase
    * `03` - Check Acceptance
    * `10` - Account Funding
    * `11` - Quasi-Cash Transaction
    * `28` - Prepaid activation and Loan
**Possible values:** [`01`, `03`, `10`, `11`, `28`]
**exemptionIndicator** string
Requests an SCA exemption for this transaction.
Possible values are:
    * `01` - Low Value Transaction (amount under 30 EUR)
    * `02` - Low Risk Transaction
    * `03` - Whitelisted transaction, merchant is added as "Trusted Beneficiary" by cardholder
    * `04` - Secure Corporate Payment
    * `05` - Recurring or Merchant-initiated transaction
    * `06` - Mail or Telephone Order
    * `07` - Anonymous payment card
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`, `07`]
**threeRIIndicator** string
Indicates the type of 3RI request.
This data element provides additional information to the ACS to determine the best approach for handling a 3RI request. Possible values are:
    * `01` - Recurring transaction
    * `02` - Installment transaction
    * `03` - Add card
    * `04` - Maintain card information
    * `05` - Account verification.
    * `06` - Split/delayed shipment
    * `07` - Top-up
    * `08` - Mail order
    * `09` - Telephone order
    * `10` - Whitelist status check
    * `11` - Other payment
    * `12` - Billing agreement.
**Possible values:** [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`]
**browserChallengeWindowSize** string
Dimensions of the challenge window that has been displayed to the Cardholder.
The ACS shall reply with content that is formatted to appropriately render in this window to provide the best possible user experience.
    * `01` - 250x400
    * `02` - 390x400
    * `03` - 500x600
    * `04` - 600x400
    * `05` - Full screen
**Possible values:** [`01`, `02`, `03`, `04`, `05`]
**browserAcceptHeader** string
Exact content of the HTTP accept headers as sent to the 3DS Requestor from the Cardholder's browser
**Possible values:** `<= 2048 characters`
**browserIpAddress** string
IP address of the browser as returned by the HTTP headers to the 3DS Requestor.
    * IPv4 address is represented in the dotted decimal format of 4 sets of decimal numbers separated by dots. The decimal number in each and every set is in the range 0—255. Example: `1.12.123.255`
    * IPv6 address is represented as eight groups of four hexadecimal digits, each group representing 16 bits (two octets). The groups are separated by colons (`:`). Example: `2011:0db8:85a3:0101:0101:8a2e:0370:7334`
**Possible values:** `<= 56 characters`
**browserJavaEnabled** boolean
Boolean that represents the ability of the cardholder browser to execute Java.
Value is returned from the `navigator.javaEnabled` property.
**browserLanguage** string
Value representing the browser language as defined in IETF BCP47.
Value is returned from `navigator.language` property.
**Possible values:** `non-empty` and `<= 8 characters`
**browserColorDepth** string
Value representing the bit depth of the colour palette for displaying images, in bits per pixel. Obtained from Cardholder browser using the screen.colorDepth property.
    * `1` - 1 bit
    * `4` - 4 bits
    * `8` - 8 bits
    * `15` - 15 bits
    * `16` - 16 bits
    * `24` - 24 bits
    * `32` - 32 bits
    * `48` - 48 bits
**Possible values:** [`1`, `4`, `8`, `15`, `16`, `24`, `30`, `32`, `48`]
**browserScreenHeight** integer
Total height of the Cardholder's screen in pixels.
Value is returned from the `screen.height` property.
**browserScreenWidth** integer
Total width of the Cardholder's screen in pixels.
Value is returned from the `screen.width` property.
**browserTimezone** integer
Time difference between UTC time and the Cardholder browser local time, in minutes.
The field is limited to 1-5 characters where the value is returned from the `getTimezoneOffset()` method.
**Possible values:** `>= -9999` and `<= 9999`
**browserUserAgent** string
Exact content of the HTTP user-agent header.
**Possible values:** `<= 2048 characters`
**browserPlatform** string
Platform on which the cardholder's browser is running. If `navigator.platform` is not available, omit or pass an empty string.
See also [MDN — navigator: platform property](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform).
**Possible values:** `<= 2048 characters`
**sdkInterface** string
Specifies all the SDK interface types that the device supports for displaying specific challenge user interfaces within the SDK.
Accepted values are:
    * `01` - Native
    * `02` - HTML
    * `03` - Both
**Possible values:** [`01`, `02`, `03`]
**sdkUiType** string
A comma-separated list of all UI types that the device supports for displaying specific challenge user interfaces within the SDK.
Accepted values for each UI type are:
    * `01` - Text
    * `02` - Single select
    * `03` - Multi select
    * `04` - OOB
    * `05` - Html Other (valid only for HTML UI)
**Possible values:** Value must match regular expression `^(0[1-5]( *, *0[0-5])*)?$`
**Example:**`01,02,05`
**sdkAppID** string
Universally e created upon all installations and updates of the 3DS Requestor App on a Customer Device.
**Possible values:** `<= 128 characters`
**sdkEncData** string
JWE Object as defined 3DS Specs Section 6.2.2.1 containing data encrypted by the SDK for the DS to decrypt.
**Possible values:** `<= 128 characters`
**sdkEphemPubKey** string
Public key component of the ephemeral key pair generated by the 3DS SDK and used to establish session keys between the 3DS SDK and ACS.
The value should be a JSON string containing the keys `kty`, `crv`, `x`, `y`,
**Possible values:** `<= 128 characters`
**Example:**`{"kty":"EC","crv":"P-256","x":"...","y":"..."}`
**sdkMaxTimeout** integer
Indicates the maximum amount of time (in minutes) for all exchanges.
**Possible values:** `>= 5`
**sdkReferenceNumber** string
Identifies the vendor and version of the 3DS SDK that is integrated in a 3DS Requestor App, assigned by EMVCo when the 3DS SDK is approved.
**Possible values:** `<= 32 characters`
**sdkTransID** string
Universally unique transaction identifier assigned by the 3DS SDK to identify a single transaction.
**Possible values:** `<= 128 characters`
**payByLink** object
Enable generating a link that can be sent to a customer to complete a purchase.
**sendByEmail** booleanrequired
If `true` send the generated payment link to the customer via email.
The email specified in `customer.email` is used as recipient.
**expirationInMinute** int32
The generated payment link will expire after the duration specified via this field.
**Possible values:** `>= 1`
**Example:**`1441`
**language** string
[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) alpha-2 language code.
**Possible values:** `>= 2 characters` and `<= 2 characters`
**requestDcc** boolean
Enable direct currency conversion (DCC).
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
**cardData** object
**cardHolder** string
Name of the card holder of the credit card.
**Example:**`Alex Smith`
**pan** string
The Primary Account Number (PAN) of the credit card.
**Possible values:** Value must match regular expression `^[0-9]+$`
**Example:**`4111111111111111`
**cvv** string
The CVV/CVC of the credit card.
**Possible values:** Value must match regular expression `^[0-9]{3-4}$`
**Example:**`123`
**expirationMonth** string
Two-digit expiration month of the credit card.
**Possible values:** Value must match regular expression `^((0[1-9])|(1[0-2]))$`
**Example:**`06`
**expirationYear** string
Four-digit expiration year of the credit card.
**Possible values:** Value must match regular expression `^[0-9]{4}$`
**Example:**`2027`
**referenceSchemeTransactionIdentifier** string
**Possible values:** `<= 50 characters`
**Example:**`IXHKDJRR462950`
**recipientAccountReferenceUuid** string
**Possible values:** `<= 50 characters`
**includeTracing** boolean
Enable transaction routing and cascading details in callback notifications.

Typical request data
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

}  

```## Responses[​](https://documentation.ixopay.com/api/pci/debit#responses "Direct link to Responses")
  * 200
  * 400
  * 422

Transaction response
  * application/json

  * Schema
  * Example (auto)
  * Finished
  * Redirect
  * Processing error

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

````"returnType": "FINISHED"` indicates a successfully completed debit payment.
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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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

```## Callbacks[​](https://documentation.ixopay.com/api/pci/debit#callbacks "Direct link to Callbacks")
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

```## Callbacks Responses[​](https://documentation.ixopay.com/api/pci/debit#callbacks-responses "Direct link to Callbacks Responses")
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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
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
  * Typical
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```
```
POST 
## https://secure.ixopay.com/api/v3/transaction/:apiKey/debit

```
```

{  

  "merchantTransactionId": "2019-09-02-0001",  

  "additionalId1": "x0001",  

  "additionalId2": "y0001",  

  "extraData": {  

    "someKey": "someValue",  

    "otherKey": "otherValue"  

  },  

  "merchantMetaData": "merchantRelevantData",  

  "amount": "9.99",  

  "surchargeAmount": "0.9",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancel",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::tRaNsAcT1OnToK3N",  

  "description": "Example Product",  

  "cardData": {  

    "cardHolder": "Alex Smith",  

    "pan": "4111111111111111",  

    "cvv": "123",  

    "expirationMonth": "04",  

    "expirationYear": "2030"  

  },  

  "customer": {  

    "identification": "c0001",  

    "firstName": "Alex",  

    "lastName": "Smith"  

  },  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

  },  

  "language": "en"  

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

  "redirectUrl": "https://psp.example.org/c5f2accd-2c37-4b2c-bb03-22d168c25a74",  

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
curl -L 'https://secure.ixopay.com/api/v3/transaction/:apiKey/debit' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "extraData": {},  
  "pspPassthroughData": {},  
  "merchantMetaData": "anyValue1|anotherValue2",  
  "referenceUuid": "string",  
  "amount": "9.99",  
  "surchargeAmount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancel",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback",  
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
  "withRegister": true,  
  "transactionIndicator": "SINGLE",  
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
  "schedule": {  
    "amount": "9.99",  
    "currency": "EUR",  
    "periodLength": 1,  
    "periodUnit": "MONTH",  
    "startDateTime": "2001-02-03T04:05:06+02:00",  
    "merchantMetaData": {  
      "plan": "monthly"  
    },  
    "callbackUrl": "https://api.example.org/callback"  
  },  
  "customerProfileData": {  
    "profileGuid": "string",  
    "customerIdentification": "string",  
    "markAsPreferred": true  
  },  
  "threeDSecureData": {  
    "3dsecure": "OFF",  
    "schemeId": "CB",  
    "channel": "01",  
    "authenticationIndicator": "01",  
    "cardholderAuthenticationMethod": "01",  
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",  
    "cardHolderAuthenticationData": "string",  
    "challengeIndicator": "01",  
    "priorReference": "string",  
    "priorAuthenticationMethod": "01",  
    "priorAuthenticationDateTime": "2001-02-03 04:05",  
    "priorAuthenticationData": "string",  
    "cardholderAccountType": "01",  
    "cardholderAccountAgeIndicator": "01",  
    "cardholderAccountDate": "2001-02-03",  
    "cardholderAccountChangeIndicator": "01",  
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",  
    "cardholderAccountPasswordChangeIndicator": "01",  
    "cardholderAccountLastPasswordChange": "2001-02-03",  
    "shippingAddressUsageIndicator": "01",  
    "shippingAddressFirstUsage": "2001-02-03",  
    "transactionActivityDay": 0,  
    "transactionActivityYear": 0,  
    "addCardAttemptsDay": 0,  
    "purchaseCountSixMonths": 0,  
    "suspiciousAccountActivityIndicator": "01",  
    "shippingNameEqualIndicator": "01",  
    "paymentAccountAgeIndicator": "01",  
    "paymentAccountAgeDate": "2001-02-03",  
    "billingAddressLine3": "string",  
    "billingAddressState": "string",  
    "shippingAddressLine3": "string",  
    "shippingAddressState": "string",  
    "billingShippingAddressMatch": "Y",  
    "homePhoneCountryPrefix": "string",  
    "homePhoneNumber": "string",  
    "mobilePhoneCountryPrefix": "string",  
    "mobilePhoneNumber": "string",  
    "workPhoneCountryPrefix": "string",  
    "workPhoneNumber": "string",  
    "purchaseInstalData": 0,  
    "shipIndicator": "01",  
    "deliveryTimeframe": "01",  
    "deliveryEmailAddress": "string",  
    "reorderItemsIndicator": "01",  
    "preOrderPurchaseIndicator": "01",  
    "preOrderDate": "2001-02-03",  
    "giftCardAmount": 0,  
    "giftCardCurrency": "EUR",  
    "giftCardCount": 0,  
    "purchaseDate": "2001-02-03 04:05",  
    "recurringExpiry": "2001-02-03",  
    "recurringFrequency": 0,  
    "transType": "01",  
    "exemptionIndicator": "01",  
    "threeRIIndicator": "01",  
    "browserChallengeWindowSize": "01",  
    "browserAcceptHeader": "string",  
    "browserIpAddress": "string",  
    "browserJavaEnabled": true,  
    "browserLanguage": "string",  
    "browserColorDepth": "1",  
    "browserScreenHeight": 0,  
    "browserScreenWidth": 0,  
    "browserTimezone": 0,  
    "browserUserAgent": "string",  
    "browserPlatform": "string",  
    "sdkInterface": "01",  
    "sdkUiType": "01,02,05",  
    "sdkAppID": "string",  
    "sdkEncData": "string",  
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",  
    "sdkMaxTimeout": 0,  
    "sdkReferenceNumber": "string",  
    "sdkTransID": "string"  
  },  
  "payByLink": {  
    "sendByEmail": false,  
    "expirationInMinute": 300  
  },  
  "language": "string",  
  "requestDcc": true,  
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
  },  
  "cardData": {  
    "cardHolder": "Alex Smith",  
    "pan": "4111111111111111",  
    "cvv": "123",  
    "expirationMonth": "06",  
    "expirationYear": "2027"  
  },  
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",  
  "recipientAccountReferenceUuid": "string",  
  "includeTracing": true  
}'  

```
```
{
  "merchantTransactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "additionalId1": "string",
  "additionalId2": "string",
  "extraData": {},
  "pspPassthroughData": {},
  "merchantMetaData": "anyValue1|anotherValue2",
  "referenceUuid": "string",
  "amount": "9.99",
  "surchargeAmount": "9.99",
  "currency": "EUR",
  "successUrl": "https://shop.example.org/checkout/success",
  "cancelUrl": "https://shop.example.org/checkout/cancel",
  "errorUrl": "https://shop.example.org/checkout/error",
  "callbackUrl": "https://api.example.org/callback",
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
  "withRegister": true,
  "transactionIndicator": "SINGLE",
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
  "schedule": {
    "amount": "9.99",
    "currency": "EUR",
    "periodLength": 1,
    "periodUnit": "MONTH",
    "startDateTime": "2001-02-03T04:05:06+02:00",
    "merchantMetaData": {
      "plan": "monthly"
    },
    "callbackUrl": "https://api.example.org/callback"
  },
  "customerProfileData": {
    "profileGuid": "string",
    "customerIdentification": "string",
    "markAsPreferred": true
  },
  "threeDSecureData": {
    "3dsecure": "OFF",
    "schemeId": "CB",
    "channel": "01",
    "authenticationIndicator": "01",
    "cardholderAuthenticationMethod": "01",
    "cardholderAuthenticationDateTime": "2001-02-03T04:05:06+02:00",
    "cardHolderAuthenticationData": "string",
    "challengeIndicator": "01",
    "priorReference": "string",
    "priorAuthenticationMethod": "01",
    "priorAuthenticationDateTime": "2001-02-03 04:05",
    "priorAuthenticationData": "string",
    "cardholderAccountType": "01",
    "cardholderAccountAgeIndicator": "01",
    "cardholderAccountDate": "2001-02-03",
    "cardholderAccountChangeIndicator": "01",
    "cardholderAccountLastChange": "2001-02-03T04:05:06+02:00",
    "cardholderAccountPasswordChangeIndicator": "01",
    "cardholderAccountLastPasswordChange": "2001-02-03",
    "shippingAddressUsageIndicator": "01",
    "shippingAddressFirstUsage": "2001-02-03",
    "transactionActivityDay": 0,
    "transactionActivityYear": 0,
    "addCardAttemptsDay": 0,
    "purchaseCountSixMonths": 0,
    "suspiciousAccountActivityIndicator": "01",
    "shippingNameEqualIndicator": "01",
    "paymentAccountAgeIndicator": "01",
    "paymentAccountAgeDate": "2001-02-03",
    "billingAddressLine3": "string",
    "billingAddressState": "string",
    "shippingAddressLine3": "string",
    "shippingAddressState": "string",
    "billingShippingAddressMatch": "Y",
    "homePhoneCountryPrefix": "string",
    "homePhoneNumber": "string",
    "mobilePhoneCountryPrefix": "string",
    "mobilePhoneNumber": "string",
    "workPhoneCountryPrefix": "string",
    "workPhoneNumber": "string",
    "purchaseInstalData": 0,
    "shipIndicator": "01",
    "deliveryTimeframe": "01",
    "deliveryEmailAddress": "string",
    "reorderItemsIndicator": "01",
    "preOrderPurchaseIndicator": "01",
    "preOrderDate": "2001-02-03",
    "giftCardAmount": 0,
    "giftCardCurrency": "EUR",
    "giftCardCount": 0,
    "purchaseDate": "2001-02-03 04:05",
    "recurringExpiry": "2001-02-03",
    "recurringFrequency": 0,
    "transType": "01",
    "exemptionIndicator": "01",
    "threeRIIndicator": "01",
    "browserChallengeWindowSize": "01",
    "browserAcceptHeader": "string",
    "browserIpAddress": "string",
    "browserJavaEnabled": true,
    "browserLanguage": "string",
    "browserColorDepth": "1",
    "browserScreenHeight": 0,
    "browserScreenWidth": 0,
    "browserTimezone": 0,
    "browserUserAgent": "string",
    "browserPlatform": "string",
    "sdkInterface": "01",
    "sdkUiType": "01,02,05",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": "{\"kty\":\"EC\",\"crv\":\"P-256\",\"x\":\"...\",\"y\":\"...\"}",
    "sdkMaxTimeout": 0,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string"
  },
  "payByLink": {
    "sendByEmail": false,
    "expirationInMinute": 300
  },
  "language": "string",
  "requestDcc": true,
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
  },
  "cardData": {
    "cardHolder": "Alex Smith",
    "pan": "4111111111111111",
    "cvv": "123",
    "expirationMonth": "06",
    "expirationYear": "2027"
  },
  "referenceSchemeTransactionIdentifier": "IXHKDJRR462950",
  "recipientAccountReferenceUuid": "string",
  "includeTracing": true
}

```