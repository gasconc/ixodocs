---
title: Merchant Network Tokenization enrollment
summary: ' Provisioning API  Merchant Network Tokenizationhttps://documentation.ixopay.com/api/provisioning/merchant-network-tokenization  Merchant
  Network Tokenization enrollment'
tags:
- https-gateway-ixopay-com-api-provisioning-createntenrollment
- required-permissions-https-documentation-ixopay-com-api-provisioning-create-enrollment-required-permissions-direct-link-required-permissions
- auto-accept-https-documentation-ixopay-com-api-provisioning-create-enrollment-auto-accept-direct-link-auto-accept
- request-https-documentation-ixopay-com-api-provisioning-create-enrollment-request-direct-link-request
- bodyrequired
- generating-provisioning-api-key
- api
- json
- tokenization
- ixopay
source_url: https://documentation.ixopay.com/api/provisioning/create-nt-enrollment
portal: ixopay-dev
updated: '2026-07-13'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Merchant Network Tokenization](https://documentation.ixopay.com/api/provisioning/merchant-network-tokenization)
  * Merchant Network Tokenization enrollment

# Merchant Network Tokenization enrollment
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```Records a pending Network Tokenization (TRID) enrollment request for the given merchant. Actual TRID provisioning runs asynchronously after the request is approved.
### Required permissions[​](https://documentation.ixopay.com/api/provisioning/create-nt-enrollment#required-permissions "Direct link to Required permissions")
Authorization is evaluated against the **tenant** the provisioning API key belongs to. That tenant must hold the `tokenization.network-tokenization.enrollment.create` ability. The check resolves the tenant's effective abilities including parent inheritance, so a grant on a parent tenant covers its sub-tenants automatically. Without the ability the call returns `NOT_ALLOWED`.
### Auto-accept[​](https://documentation.ixopay.com/api/provisioning/create-nt-enrollment#auto-accept "Direct link to Auto-accept")
By default a new enrollment is created with status `pending` and a reviewer is notified. If the caller tenant additionally holds the `tokenization.network-tokenization.enrollment.auto-accept-via-provisioning-api` ability, the enrollment is automatically approved and queued for processing without reviewer involvement. The request and response contract is identical in both cases.
## Request[​](https://documentation.ixopay.com/api/provisioning/create-nt-enrollment#request "Direct link to request")
  * application/json

  * Body
  * Example

### Body**required**
Data required to create a Network Tokenization enrollment request.
**merchantGuid** stringrequired
Identifier of the merchant being enrolled. Must belong to the caller tenant's accessible scope.
**Possible values:** `non-empty` and `<= 40 characters`
**Example:**`ME-f719-a6e7-6375-49ad-ceb1-90c1`
**userGuid** stringrequired
Identifier of the merchant user recorded as the actor for this enrollment. Used for audit-trail purposes only — permission decisions are evaluated against the caller tenant, not this user. The user must exist within the caller tenant's scope.
**Possible values:** `non-empty` and `<= 40 characters`
**Example:**`US-17ed-0860-7958-1a71-cc43-7198`
**companyName** stringrequired
Legal name of the company.
**Possible values:** `non-empty` and `<= 75 characters`, Value must match regular expression `^[^;%()]*$`
**websiteUrl** urirequired
URL of the merchant website.
**Possible values:** `non-empty` and `<= 100 characters`
**businessIdentificationType** stringrequired
The identifier associated with the business type.
**Possible values:** [`BID`, `EIN`, `BN`, `ABN`, `SSN`, `SIN`, `NZBN`, `CUIT`, `CNPJ`, `RUT`, `HKBR`, `BRNO`, `RFC`, `RUC`, `UEN`, `VAT`, `PAN`, `CLN`, `CL`, `CR`, `EDRPOU`, `RNC`, `NATIONAL_ID`]
**businessIdentificationValue** stringrequired
The value associated with the business identifier type.
**Possible values:** `non-empty` and `<= 40 characters`
**companyCity** stringrequired
City of the company primary address.
**Possible values:** `non-empty` and `<= 100 characters`, Value must match regular expression `^[ a-zA-Z0-9'.-]*$`
**companyCountryCode** stringrequired
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**contactEmail** emailrequired
Email address of the company primary contact.
**Possible values:** `non-empty` and `<= 256 characters`
**duns** string
Dun & Bradstreet D-U-N-S number (9 digits).
**Possible values:** `>= 9 characters` and `<= 9 characters`, Value must match regular expression `^\d{9}$`
**companyPrimaryTraderName** string
Primary trading name of the company, if different from the legal name.
**Possible values:** `non-empty` and `<= 75 characters`, Value must match regular expression `^[^;%()]*$`
**companyAddress1** string
First line of the company address.
**Possible values:** `non-empty` and `<= 140 characters`, Value must match regular expression `^[ a-zA-Z0-9'#,_:/-]*$`
**companyAddress2** string
Second line of the company address.
**Possible values:** `non-empty` and `<= 140 characters`, Value must match regular expression `^[ a-zA-Z0-9'#,_:/-]*$`
**companyPostalCode** string
Postal code of the company primary address.
**Possible values:** `non-empty` and `<= 7 characters`
**companyPhone** string
Main company phone number.
**Possible values:** `non-empty` and `<= 16 characters`, Value must match regular expression `^[0-9-().+]*$`
**primaryContactFirstName** string
First name of the company primary contact.
**Possible values:** `non-empty` and `<= 256 characters`, Value must match regular expression `^[ a-zA-Z0-9'`~".-]*$`
**primaryContactLastName** string
Last name of the company primary contact.
**Possible values:** `non-empty` and `<= 256 characters`, Value must match regular expression `^[ a-zA-Z0-9'`~".-]*$`
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```## Responses[​](https://documentation.ixopay.com/api/provisioning/create-nt-enrollment#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The enrollment request was successfully created.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**enrollmentId** string
Identifier of the created enrollment request.
**Possible values:** `non-empty` and `<= 40 characters`
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
  * application/json

  * Schema
  * Example (auto)
  * 1000

**Schema**
**success** booleanrequired
`true` if successful.
**errorCode** int64required
Error code.
    * `1000` - Unauthorized, e.g. invalid credentials
    * `1001` - The request is invalid
    * `1002` - The value does not comply to the requirements, e.g. pre-defined values
    * `1003` - The format is invalid
    * `1004` - The value contains invalid characters
    * `1005` - Mandatory parameters are missing
    * `1006` - Some parameters are not applicable in given request scenario
    * `1007` - The provided entity does not exist
    * `9999` - Internal system error
**Example:**`1004`
**errorMessage** stringrequired
Human readable error message.
:::info While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`. :::
**Example:**`name: nameInvalid characters`
**property name*** any
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```Unauthorized (1000)
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```Unprocessable entity.
  * application/json

  * Schema
  * Example (auto)
  * 1001
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```Unprocessable entity (1001)
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```Internal server error.
  * application/json
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```Internal server error (9999)
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Body required
  * Example (from schema)
  * Example
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createNtEnrollment

```
```

{  

  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  

  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  

  "companyName": "Alex's Artisan Goods",  

  "websiteUrl": "https://shop.example.org",  

  "businessIdentificationType": "EIN",  

  "businessIdentificationValue": "123456789",  

  "companyCity": "Anytown",  

  "companyCountryCode": "US",  

  "contactEmail": "alex.smith@example.org",  

  "companyPrimaryTraderName": "Alex's Artisan Goods",  

  "companyAddress1": "123 Example Street",  

  "companyPostalCode": "12345",  

  "companyPhone": "+1-555-0100",  

  "primaryContactFirstName": "Alex",  

  "primaryContactLastName": "Smith"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "string"  

}  

```
```

{  

  "success": true,  

  "enrollmentId": "NT-1234-1234-1234-1234-1234-1234"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1000,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1001,  

  "errorMessage": "Unauthorized"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```
```

{  

  "success": false,  

  "errorCode": 9999,  

  "errorMessage": "Internal server error"  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the API key and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
:::

### Generating a Provisioning API Key

1. Navigate to "**System Setup**" followed by "**API Keys**" from the main menu.
2. Click on "**+ New API Key**" located at the top-right corner of the screen.
3. Make sure to select "**Provisioning API**" in the "**Services**" field.
4. Specify any IP addresses that are authorized to access the Provisioning API with this API key.
   - Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
   - You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
5. Click on "**+ Create**" to generate your new API Key.
6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

```
```
curl -L 'https://gateway.ixopay.com/api/provisioning/createNtEnrollment' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",  
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",  
  "companyName": "string",  
  "websiteUrl": "string",  
  "businessIdentificationType": "BID",  
  "businessIdentificationValue": "string",  
  "companyCity": "string",  
  "companyCountryCode": "AT",  
  "contactEmail": "user@example.com",  
  "duns": "string",  
  "companyPrimaryTraderName": "string",  
  "companyAddress1": "string",  
  "companyAddress2": "string",  
  "companyPostalCode": "string",  
  "companyPhone": "string",  
  "primaryContactFirstName": "string",  
  "primaryContactLastName": "string"  
}'  

```
```
{
  "merchantGuid": "ME-f719-a6e7-6375-49ad-ceb1-90c1",
  "userGuid": "US-17ed-0860-7958-1a71-cc43-7198",
  "companyName": "string",
  "websiteUrl": "string",
  "businessIdentificationType": "BID",
  "businessIdentificationValue": "string",
  "companyCity": "string",
  "companyCountryCode": "AT",
  "contactEmail": "user@example.com",
  "duns": "string",
  "companyPrimaryTraderName": "string",
  "companyAddress1": "string",
  "companyAddress2": "string",
  "companyPostalCode": "string",
  "companyPhone": "string",
  "primaryContactFirstName": "string",
  "primaryContactLastName": "string"
}

```