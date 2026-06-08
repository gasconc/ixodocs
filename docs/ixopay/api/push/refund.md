---
title: Refund
summary: ' Push API'
tags:
- https-gateway-ixopay-com-api-push-apikey-refund
- request-https-documentation-ixopay-com-api-push-refund-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- psp
- refund
- authorization
source_url: https://documentation.ixopay.com/api/push/refund
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* Push API
  * Push
  * Refund

# Refund
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```Records a refund transaction.
warning
Either `referenceTransactionId` or `referenceUuid` must be provided.
## Request[​](https://documentation.ixopay.com/api/push/refund#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.

  * application/json

  * Body
  * Typical

### Body**required**
**transactionId** stringrequired
Your unique transaction ID.
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`c5f2accd-2c37-4b2c-bb03-22d168c25a74`
**referenceTransactionId** string
Reference to the related transaction containing the merchant's reference (`transactionId`).
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** string
Reference to the related transaction containing the transaction reference (`uuid`).
**Possible values:** `<= 50 characters`
**Example:**`20230315-6d432fb7217843388847`
**amount** stringrequired
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Example:**`9.99`
**currency** stringrequired
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**status** TransactionStatus
Status of Transaction.
**Possible values:** [`success`, `failed`, `error_adapter`, `error_internal`, `cancelled`]
**Default value:**`success`
**adapterTxId** string
PSP's reference of Transaction.
**Possible values:** `<= 50 characters`
**adapterToken** string
Token given by the adapter.
**Possible values:** `<= 50 characters`
**createdAt** date-time
Date/Time of transaction processing, defaults to `now()`.
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Example:**`2001-02-03T04:05:06+02:00`
**additionalId1** string
Any additional ID if required by the Adapter.
**Possible values:** `<= 50 characters`
**additionalId2** string
Any additional ID if required by the Adapter.
**Possible values:** `<= 50 characters`
**merchantMetaData** string
Additional metadata for the merchant.
**Possible values:** `<= 255 characters`
**description** string
Description of your transaction.
**Possible values:** `<= 255 characters`
**Example:**`My Purchase Order 123`
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**property name*** string
**descriptor** string
Descriptor which is printed on card-holder's statement.
**Possible values:** `<= 50 characters`
**Example:**`Order# 123`
**buyerCountry** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**customer** object
Information on the customer making a payment.
**identification** string
Customer's ID.
**Possible values:** `<= 36 characters`
**Example:**`123`
**firstName** string
First name of the customer.
**Possible values:** `<= 50 characters`
**Example:**`Alex`
**lastName** string
Last name of the customer.
**Possible values:** `<= 50 characters`
**Example:**`Smith`
**birthDate** date (string)
Birthdate of customer.
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Example:**`2001-02-03`
**gender** string
Gender of the customer.
**Possible values:** [`M`, `F`]
**Example:**`F`
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
Line one of the customer's shipping address.
**Possible values:** `<= 50 characters`
**shippingAddress2** string
Line two of the customer's shipping address.
**Possible values:** `<= 50 characters`
**shippingCity** string
City of the customer's shipping address.
**Possible values:** `<= 50 characters`
**shippingPostcode** string
Postal code of the customer's shipping address.
**Possible values:** `<= 16 characters`
**shippingState** string
State of the customer's shipping address.
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
**ipAddress** string
**Possible values:** `<= 50 characters`
**nationalId** string
**Possible values:** `<= 20 characters`
**iban** string
IBAN of customer's bank account.
**Possible values:** `<= 34 characters`
**bic** string
BIC of customer's bank account.
**Possible values:** `<= 11 characters`
**creditcard** object
Credit card data.
**cardHolder** string
Name printed on card.
**Possible values:** `<= 60 characters`
**Example:**`Alex Smith`
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**expiryMonth** int32
Expiration date - month.
**Possible values:** `>= 1` and `<= 12`
**Example:**`4`
**expiryYear** int32
Expiration date - year.
**Possible values:** `>= 0` and `<= 9999`
**Example:**`2028`
**firstSixDigits** string
First 6 digits of card number.
**Possible values:** `<= 6 characters`
**Example:**`411111`
**lastFourDigits** string
Last 4 digits of card number.
**Possible values:** `<= 4 characters`
**Example:**`1111`
**type** string
Type of card.
**Possible values:** `<= 15 characters`
**Example:**`Visa`
**error** object
Error/Decline reason data.
**message** stringrequired
Error message.
**Possible values:** `<= 60 characters`
**Example:**`Transaction declined.`
**code** stringrequired
Error code.
**Possible values:** `<= 20 characters`
**Example:**`3002`
**adapter_error_message** stringrequired
Error message of PSP.
**Possible values:** `<= 65535 characters`
**Example:**`Do not honour`
**adapter_error_code** string
Error code of PSP.
**Possible values:** `<= 20 characters`
**Example:**`5`
**created** date-time
Date and time of error, defaults to `now()`.
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`.
**Example:**`2001-02-03T04:05:06+02:00`

Typical
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

}  

```## Responses[​](https://documentation.ixopay.com/api/push/refund#responses "Direct link to Responses")
  * 200

Push transaction response.
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
**uuid** string
The assigned transaction uuid.
**error_message** string
On error, this field will contain a description of the error.
**error_code** string
The error code.
**Possible values:** [`MISSING_FIELDS`, `INVALID_DATA`, `DUPLICATE_ID`, `INVALID_REFERENCE`]
```

{  

  "success": true  

}  

```Success
```

{  

  "success": true,  

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```Error
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
apiKey — pathrequired
Body required
  * Example (from schema)
  * Typical
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

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

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

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

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

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

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

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

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/refund

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15",  

  "customer": {  

    "identification": 123111,  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "billingCountry": "US"  

  },  

  "creditcard": {  

    "cardHolder": "Alex Smith",  

    "expiryMonth": 6,  

    "expiryYear": 2027,  

    "firstSixDigits": 411111,  

    "lastFourDigits": 1111  

  }  

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

  "uuid": "12c0b3f4aa1d02d1608a"  

}  

```
```

{  

  "success": false,  

  "error_message": "The following fields are missing: registrationId",  

  "error_code": "MISSING_FIELDS"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/push/push-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```
```
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/refund' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
  "amount": "9.99",  
  "currency": "EUR",  
  "status": "success",  
  "adapterTxId": "string",  
  "adapterToken": "string",  
  "createdAt": "2001-02-03T04:05:06+02:00",  
  "additionalId1": "string",  
  "additionalId2": "string",  
  "merchantMetaData": "string",  
  "description": "My Purchase Order 123",  
  "extraData": {  
    "someKey": "someValue"  
  },  
  "descriptor": "Order# 123",  
  "buyerCountry": "AT",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "billingAddress1": "123 Main St. Apt. 4B",  
    "billingCity": "Anytown",  
    "billingCountry": "US"  
  },  
  "creditcard": {  
    "cardHolder": "Alex Smith",  
    "country": "US",  
    "expiryMonth": 6,  
    "expiryYear": 2027,  
    "firstSixDigits": 411111,  
    "lastFourDigits": 1111,  
    "type": "visa"  
  },  
  "error": {  
    "message": "Payment could not be processed.",  
    "code": 1234,  
    "adapter_error_message": "Processing failed.",  
    "adapter_error_code": 1000  
  }  
}'  

```
```
{
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",
  "referenceUuid": "20230315-6d432fb7217843388847",
  "amount": "9.99",
  "currency": "EUR",
  "status": "success",
  "adapterTxId": "string",
  "adapterToken": "string",
  "createdAt": "2001-02-03T04:05:06+02:00",
  "additionalId1": "string",
  "additionalId2": "string",
  "merchantMetaData": "string",
  "description": "My Purchase Order 123",
  "extraData": {
    "someKey": "someValue"
  },
  "descriptor": "Order# 123",
  "buyerCountry": "AT",
  "customer": {
    "firstName": "Alex",
    "lastName": "Smith",
    "billingAddress1": "123 Main St. Apt. 4B",
    "billingCity": "Anytown",
    "billingCountry": "US"
  },
  "creditcard": {
    "cardHolder": "Alex Smith",
    "country": "US",
    "expiryMonth": 6,
    "expiryYear": 2027,
    "firstSixDigits": 411111,
    "lastFourDigits": 1111,
    "type": "visa"
  },
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```