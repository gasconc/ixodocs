---
title: Get profile
summary: ' Customer profiles API  Customer profiles  Get profile'
tags:
- https-gateway-ixopay-com-api-customerprofiles-apikey-getprofile
- request-https-documentation-ixopay-com-api-customer-profiles-profile-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- authorization
- credit-card
- transaction
source_url: https://documentation.ixopay.com/api/customer-profiles/get-profile
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Customer profiles
  * Get profile

# Get profile
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```Retrieve a customer profile.
If successful and the profile with the given identification was found the profile data will be returned.
In case of the profile does not exist, you will receive a response stating this.
## Request[​](https://documentation.ixopay.com/api/customer-profiles/get-profile#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
API Key of Connector

  * application/json

  * Body
  * Example profileGuid
  * Example customerIdentification

### Body**required**
ID of customer profile to retrieve
oneOf
    * GetProfileRequestGuid
    * GetProfileRequestCustomerIdentification
**profileGuid** stringrequired
Customer id assigned by the payment platform.
**Possible values:** `>= 32 characters` and `<= 32 characters`
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```## Responses[​](https://documentation.ixopay.com/api/customer-profiles/get-profile#responses "Direct link to Responses")
  * 200
  * default

Retrieve a customer profile
  * application/json

  * Schema
  * Example (auto)
  * Successful profile retrieval
  * Profile not found

**Schema**
**success** boolean
`true` if successful.
**profileExists** boolean
`true` if customer profile exists. If `false` no other fields will be provided in the response.
**profileGuid** string
Customer id assigned by the payment platform.
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
**customerIdentification** string
Customer id assigned by you.
**Example:**`my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2`
**preferredMethod** string
Preferred payment method.
**Example:**`Creditcard`
**customer** object
**_TYPE** string
**billingAddress1** string
Line one of the customer's billing address.
**billingAddress2** string
Line two of the customer's billing address.
**billingCity** string
City of the customer's billing address.
**billingCountry** string
Country of the customer's billing address.
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**billingPhone** string
Phone number of the billed customer.
**Example:**`+XX 1234567890`
**billingPostcode** string
Postal code of the customer's billing address.
**billingState** string
State of the customer's billing address.
**birthDate** string
Birthdate of customer.
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**company** string
Company of the customer.
**email** string
E-mail address of the customer.
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**property name*** string
**firstName** string
First name of customer.
**Example:**`Alex`
**gender** string
Gender of the customer.
**ipAddress** string
IPv4 or IPv6 address of the customer.
**Example:**`198.51.100.123`
**lastName** string
Last name of customer.
**Example:**`Smith`
**nationalId** string
National id of the customer.
**property name*** any
**paymentInstruments** object[]
Payment instruments stored for this customer profile.
  * Array [
**_TYPE** string
**Possible values:** [`paymentInstrument`]
**createdAt** string
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`.
**method** string
Payment method of the payment instrument. Same as `paymentInstrument._TYPE`.
**Example:**`card`
**paymentData** object
**_TYPE** string
**Possible values:** [`paymentData.card`, `paymentData.iban`, `paymentData.wallet`]
    * paymentData.card
    * paymentData.iban
    * paymentData.wallet
**brand** string
Brand of the credit card.
**Example:**`visa`
**cardHolder** string
Cardholder of the credit card.
**Example:**`Alex Smith`
**expiryMonth** int32
Expiry month of the credit card.
**expiryYear** int32
Expiry year of the credit card.
**firstSixDigits** string
First six digits of the credit card.
**Example:**`411111`
**lastFourDigits** string
Last four digits of the credit card.
**Example:**`1111`
**property name*** any
Credit card payment data.
**iban** string
IBAN.
**Example:**`AT483200000012345864`
**bic** string
BIC.
**Example:**`RLNWATWWXXX`
**mandateId** string
Mandate id.
**mandateDate** string
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`.
**property name*** any
IBAN payment data.
**walletReferenceId** string
**walletType** string
**walletOwner** stringnullable
**walletOwnerFirstName** stringnullable
**walletOwnerLastName** stringnullable
**walletOwnerCountryCode** stringnullable
**walletRegistrationId** string
UUID of the transaction that initially registered this wallet.
**property name*** any
Wallet payment data.
**paymentToken** string
Token of the customer profile, can be used with the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) to use the tokenized payment instrument.
**isPreferred** boolean
If a customer profile has multiple payment instruments stored, only one can be marked as preferred payment instrument.
**associatedTokenType** stringnullable
Specifies the type of token associated with a credit card, if any.
Possible values include `applepay` for Apple Pay tokens, `googlepay` for Google Pay tokens, and `network` for network-issued tokens. This field is `null` if no token is associated and is used to identify tokenized cards for enhanced transaction security.
**Possible values:** [`googlepay`, `applepay`, `network`]
**networkTokenStatus** stringnullable
Indicates the status of an associated network token.
This field is optional and will only be present if the `associatedTokenType` is `network`.
**Possible values:** [`inactive`, `active`, `suspended`, `deactivated`]
**property name*** any
  * ]
**property name*** any
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```Error response
  * application/json

  * Schema
  * Example (auto)

**Schema**
**success** boolean
`false` if error.
**errorMessage** string
Error message.
While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`.
**errorCode** integer
Error code.
**property name*** any
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
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
  * Example profileGuid
  * Example customerIdentification
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile

```
```

{  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID"  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "string",  

    "billingAddress1": "string",  

    "billingAddress2": "string",  

    "billingCity": "string",  

    "billingCountry": "string",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "string",  

    "billingState": "string",  

    "birthDate": "string",  

    "company": "string",  

    "email": "string",  

    "extraData": {},  

    "firstName": "Alex",  

    "gender": "string",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "string"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "string",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card"  

      },  

      "paymentToken": "string",  

      "isPreferred": true,  

      "associatedTokenType": "googlepay",  

      "networkTokenStatus": "inactive"  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "profileExists": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "_TYPE": "customerData",  

    "billingAddress1": "123 Main St.",  

    "billingAddress2": "Apt. 4B",  

    "billingCity": "Anytown",  

    "billingCountry": "US",  

    "billingPhone": "+XX 1234567890",  

    "billingPostcode": "12345",  

    "billingState": "AN",  

    "birthDate": "1970-01-01",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "extraData": [],  

    "firstName": "Alex",  

    "gender": "M",  

    "ipAddress": "198.51.100.123",  

    "lastName": "Smith",  

    "nationalId": "COUNTRY-1234567-PLACEHOLDER"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 12:52:27",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 6,  

        "expiryYear": 2027,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::12345678901234567890",  

      "associatedTokenType": "applepay",  

      "isPreferred": true  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-25 13:02:22",  

      "method": "iban",  

      "paymentData": {  

        "_TYPE": "paymentData.iban",  

        "bic": null,  

        "iban": "AT111111111111111111",  

        "mandateDate": "2018-10-25 00:00:00",  

        "mandateId": "123123"  

      },  

      "paymentToken": "pt::12345678901234567891",  

      "isPreferred": false  

    },  

    {  

      "_TYPE": "paymentInstrument",  

      "createdAt": "2018-10-28 12:00:25",  

      "method": "wallet",  

      "paymentData": {  

        "_TYPE": "paymentData.wallet",  

        "walletReferenceId": "B-123456789012345",  

        "walletOwner": "someone@example.org",  

        "walletType": "paypal",  

        "walletOwnerFirstName": "Alex",  

        "walletOwnerLastName": "Smith",  

        "walletOwnerCountryCode": "US",  

        "walletRegistrationId": "reg157ra710N1D"  

      },  

      "paymentToken": "pt::12345678901234567892",  

      "isPreferred": false  

    }  

  ]  

}  

```
```

{  

  "success": false,  

  "profileExists": false,  

  "profileGuid": null,  

  "customerIdentification": null,  

  "preferredMethod": null,  

  "customer": null,  

  "paymentInstruments": []  

}  

```
```

{  

  "success": true,  

  "errorMessage": "string",  

  "errorCode": 0  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/getProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```