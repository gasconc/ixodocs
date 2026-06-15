---
title: Attach payment instrument
summary: ' Customer profiles API  Customer profiles  Attach payment instrument'
tags:
- https-gateway-ixopay-com-api-customerprofiles-apikey-attachpaymentinstrument
- request-https-documentation-ixopay-com-api-customer-profiles-attach-payment-instrument-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- authorization
- transaction
- gateway
source_url: https://documentation.ixopay.com/api/customer-profiles/attach-payment-instrument
portal: ixopay-dev
updated: '2026-06-15'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Customer profiles
  * Attach payment instrument

# Attach payment instrument
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```Attach a payment instrument to a customer profile.
In case of any errors due to invalid requests, invalid configuration or any other unexpected reason, the system will answer with a specific error response.
## Request[​](https://documentation.ixopay.com/api/customer-profiles/attach-payment-instrument#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
API Key of Connector

  * application/json

  * Body
  * Example profileGuid
  * Example customerIdentification
  * Example customerIdentification with create profile

### Body**required**
Attach a payment instrument to a customer profile.
oneOf
    * AttachPaymentInstrumentRequestGuid
    * AttachPaymentInstrumentRequestCustomerIdentification
**transactionUuid** stringrequired
A successful register or withRegister transaction uuid.
**Possible values:** `non-empty` and `<= 50 characters`
**Example:**`71ee81126036ab3fd0a1`
**profileGuid** stringrequired
Customer id assigned by the payment platform.
**Possible values:** `>= 32 characters` and `<= 32 characters`
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```## Responses[​](https://documentation.ixopay.com/api/customer-profiles/attach-payment-instrument#responses "Direct link to Responses")
  * 200
  * 404
  * 422

Attach a payment instrument
  * application/json

  * Schema
  * Example (auto)

**Schema**
**success** boolean
Status of the request.
**Example:**`true`
**message** string
Message of the status of the request.
**Example:**`Payment instrument successfully attached to customer profile.`
**profileGuid** string
Customer profile guid.
**Possible values:** `>= 32 characters` and `<= 32 characters`
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
**paymentToken** string
Token of the customer profile, can be used with the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) to use the tokenized payment instrument.
**Possible values:** `>= 24 characters` and `<= 24 characters`
**Example:**`pt::71ee81126036ab3fd0a1`
**property name*** any
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```Error response
  * application/json

  * Schema
  * Example (auto)
  * Example transaction not found

**Schema**
**success** boolean
Status of the request.
**Example:**`false`
**message** string
Error message of the status of the request.
**Example:**`Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.`
**errorCode** string
Error message code.
**Example:**`TRANSACTION_NOT_FOUND`
**property name*** any
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```  * Schema
  * Example (auto)
  * Example not attached
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
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
  * Example customerIdentification with create profile
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "profileGuid": "CP-0000-0000-0000-0000-0000-0000"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2"  

}  

```
```

{  

  "transactionUuid": "71ee81126036ab3fd0a1",  

  "customerIdentification": "my-id-620fa70b-cc34-4bbb-8d66-3670d3ea24f2",  

  "createProfileIfNotExists": true  

}  

```
```

{  

  "success": true,  

  "message": "Payment instrument successfully attached to customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb",  

  "paymentToken": "pt::71ee81126036ab3fd0a1"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is not already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is already attached to a customer profile.",  

  "errorCode": "ALREADY_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/attachPaymentInstrument' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionUuid": "71ee81126036ab3fd0a1",  
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  
}'  

```
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```