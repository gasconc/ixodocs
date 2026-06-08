---
title: Update profile
summary: ' Customer profiles API  Customer profiles  Update profile'
tags:
- https-gateway-ixopay-com-api-customerprofiles-apikey-updateprofile
- request-https-documentation-ixopay-com-api-customer-profiles-update-profile-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- authorization
- gateway
source_url: https://documentation.ixopay.com/api/customer-profiles/update-profile
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Customer profiles
  * Update profile

# Update profile
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```Update a customer profile.
The response contains the updated customer data and information about the changed fields.
In case of any errors due to invalid requests, invalid configuration or any other unexpected reason, the system will answer with a generic error response.
## Request[​](https://documentation.ixopay.com/api/customer-profiles/update-profile#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
API Key of Connector

  * application/json

  * Body
  * Example

### Body**required**
Update a customer profile
oneOf
    * UpdateProfileRequestGuid
    * UpdateProfileRequestCustomerIdentification
**profileGuid** stringrequired
Customer id assigned by the payment platform.
**Possible values:** `>= 32 characters` and `<= 32 characters`
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
**customerData** objectrequired
**firstName** stringrequired
First name of customer.
**Possible values:** `<= 50 characters`
**Example:**`Alex`
**lastName** string
Last name of customer.
**Possible values:** `<= 50 characters`
**Example:**`Smith`
**birthDate** string
Birthdate of customer.
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `full-date`.
**Example:**`1970-01-01`
**gender** string
Gender of the customer.
**Possible values:** `<= 1 characters`, Value must match regular expression `^[MF]$`
**Example:**`M`
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
Country of the customer's billing address.
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** `<= 2 characters`
**billingPhone** string
Phone number of the billed customer.
**Possible values:** `<= 20 characters`
**Example:**`+XX 1234567890`
**company** string
Company of the customer.
**Possible values:** `<= 50 characters`
**email** string
E-mail address of the customer.
**Possible values:** `<= 255 characters`
**ipAddress** string
IPv4 or IPv6 address of the customer.
**Possible values:** `<= 50 characters`
**Example:**`198.51.100.123`
**nationalId** string
National id of the customer.
**Possible values:** `<= 14 characters`
**extraData** object
Object containing key-value pairs (string-to-string), to be used by either the upstream Adapter, the Risk Engine etc.
**property name*** string
**preferredInstrument** string
**Possible values:** `>= 24 characters` and `<= 24 characters`
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```## Responses[​](https://documentation.ixopay.com/api/customer-profiles/update-profile#responses "Direct link to Responses")
  * 200
  * default

Update a customer profile
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** boolean
**profileGuid** string
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
**changedFields** string[]
**property name*** any
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
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
  * Example
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile

```
```

{  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

  "customerData": {  

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

  "preferredInstrument": "pt::12345678901234567890"  

}  

```
```

{  

  "success": true,  

  "profileGuid": "string",  

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

  "changedFields": [  

    "string"  

  ]  

}  

```
```

{  

  "success": true,  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000",  

  "customerIdentification": "YOUR_CUSTOMER_ID",  

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

    "nationalId": "1234"  

  },  

  "changedFields": [  

    "firstName",  

    "lastName"  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/updateProfile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  
  "customerData": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "birthDate": "1970-01-01",  
    "gender": "M",  
    "billingAddress1": "string",  
    "billingAddress2": "string",  
    "billingCity": "string",  
    "billingPostcode": "string",  
    "billingState": "string",  
    "billingCountry": "string",  
    "billingPhone": "+XX 1234567890",  
    "company": "string",  
    "email": "string",  
    "ipAddress": "198.51.100.123",  
    "nationalId": "string",  
    "extraData": {}  
  },  
  "preferredInstrument": "string"  
}'  

```
```
{
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",
  "customerData": {
    "firstName": "Alex",
    "lastName": "Smith",
    "birthDate": "1970-01-01",
    "gender": "M",
    "billingAddress1": "string",
    "billingAddress2": "string",
    "billingCity": "string",
    "billingPostcode": "string",
    "billingState": "string",
    "billingCountry": "string",
    "billingPhone": "+XX 1234567890",
    "company": "string",
    "email": "string",
    "ipAddress": "198.51.100.123",
    "nationalId": "string",
    "extraData": {}
  },
  "preferredInstrument": "string"
}

```