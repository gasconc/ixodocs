---
title: Void
summary: ' Push API'
tags:
- https-gateway-ixopay-com-api-push-apikey-void
- request-https-documentation-ixopay-com-api-push-void-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- psp
- authorization
- void
source_url: https://documentation.ixopay.com/api/push/void
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* Push API
  * Push
  * Void

# Void
```
POST 
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```Records a void transaction.
warning
Either `referenceTransactionId` or `referenceUuid` must be provided.
## Request[​](https://documentation.ixopay.com/api/push/void#request "Direct link to request")
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
Reference to the related [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) containing the merchant's reference (`transactionId`).
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** string
Reference to the related [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) containing the transaction reference (`uuid`).
**Possible values:** `<= 50 characters`
**Example:**`20230315-6d432fb7217843388847`
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

  "createdAt": "2018-05-12 16:02:15"  

}  

```## Responses[​](https://documentation.ixopay.com/api/push/void#responses "Direct link to Responses")
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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15"  

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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15"  

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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15"  

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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15"  

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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
## https://gateway.ixopay.com/api/v3/push/:apiKey/void

```
```

{  

  "transactionId": "123-123-123",  

  "referenceUuid": "123456780abcdef",  

  "amount": 35.9,  

  "currency": "EUR",  

  "adapterTxId": "A-0012233",  

  "status": "success",  

  "createdAt": "2018-05-12 16:02:15"  

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
curl -L 'https://gateway.ixopay.com/api/v3/push/:apiKey/void' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "transactionId": "c5f2accd-2c37-4b2c-bb03-22d168c25a74",  
  "referenceTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
  "referenceUuid": "20230315-6d432fb7217843388847",  
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
  "error": {
    "message": "Payment could not be processed.",
    "code": 1234,
    "adapter_error_message": "Processing failed.",
    "adapter_error_code": 1000
  }
}

```