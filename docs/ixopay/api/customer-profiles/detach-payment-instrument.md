---
title: Detach payment instrument
summary: ' Customer profiles API  Customer profiles  Detach payment instrument'
tags:
- https-gateway-ixopay-com-api-customerprofiles-apikey-detachpaymentinstrument
- request-https-documentation-ixopay-com-api-customer-profiles-detach-payment-instrument-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- authorization
- transaction
- gateway
source_url: https://documentation.ixopay.com/api/customer-profiles/detach-payment-instrument
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Customer profiles
  * Detach payment instrument

# Detach payment instrument
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

```Detach a payment instrument from a customer profile.
In case of any errors due to invalid requests, invalid configuration or any other unexpected reason, the system will answer with a specific error response.
## Request[​](https://documentation.ixopay.com/api/customer-profiles/detach-payment-instrument#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
API Key of Connector

  * application/json

  * Body
  * Example profileGuid
  * Example customerIdentification

### Body**required**
Detach a payment instrument from a customer profile.
oneOf
    * DetachPaymentInstrumentRequestGuid
    * DetachPaymentInstrumentRequestCustomerIdentification
**transactionUuid** stringrequired
A successful and attached register or withRegister transaction uuid.
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

```## Responses[​](https://documentation.ixopay.com/api/customer-profiles/detach-payment-instrument#responses "Direct link to Responses")
  * 200
  * 404
  * 422

Detach a payment instrument
  * application/json

  * Schema
  * Example (auto)

**Schema**
**success** boolean
Status of the request.
**Example:**`true`
**message** string
Message of the status of the request.
**Example:**`Payment instrument successfully detached from customer profile.`
**profileGuid** string
Customer profile guid.
**Possible values:** `>= 32 characters` and `<= 32 characters`
**Example:**`CP-91ec-509a-3899-4f4f-a4ad-67fb`
**property name*** any
```

{  

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

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
**Example:**`Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.`
**errorCode** string
Error message code.
**Example:**`TRANSACTION_NOT_FOUND`
**property name*** any
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```  * Schema
  * Example (auto)
  * Example not attached
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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
```
{
  "transactionUuid": "71ee81126036ab3fd0a1",
  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

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

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

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

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

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

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

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

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument

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

  "success": true,  

  "message": "Payment instrument successfully detached from customer profile.",  

  "profileGuid": "CP-91ec-509a-3899-4f4f-a4ad-67fb"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "Transaction either not found, unsuccessful or is not a valid register or withRegister transaction that is already de-registered.",  

  "errorCode": "TRANSACTION_NOT_FOUND"  

}  

```
```

{  

  "success": false,  

  "message": "The payment instrument from this transaction is not attached to the specified customer profile.",  

  "errorCode": "NOT_ATTACHED"  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/detachPaymentInstrument' \  
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