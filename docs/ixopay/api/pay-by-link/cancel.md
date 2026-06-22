---
title: Cancel
summary: ' Pay-by-Link API'
tags:
- https-gateway-ixopay-com-api-paybylink-paybylinkid-cancel
- request-https-documentation-ixopay-com-api-pay-link-cancel-request-direct-link-request
- path-parameters
- responses-https-documentation-ixopay-com-api-pay-link-cancel-responses-direct-link-responses
- api
- json
- ixopay
- psp
- authorization
- transaction
source_url: https://documentation.ixopay.com/api/pay-by-link/cancel
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* Pay-by-Link API
  * Pay-by-Link
  * Cancel

# Cancel
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```Cancel a Pay-by-Link.
warning
For technical reasons, cancelling a Pay-by-Link does not prevent customers from finishing a transaction in all cases. In case the customer was redirected to the PSP's payment page, they could still conduct and finish the payment. Depending on your use case, you must ensure to have remediation mechanisms in place to prevent double payments.
When using Payment Selection Pages, cancellation of the transaction is only possible up to the point where the customer did not yet choose a payment method.
## Request[​](https://documentation.ixopay.com/api/pay-by-link/cancel#request "Direct link to request")
### Path Parameters
**payByLinkId** stringrequired
**Possible values:** `<= 50 characters`
ID of the Pay-by-Link.
The value for `payByLinkId` can be extracted from the `cancelUrl` of the `payByLinkData` response field in the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api).

## Responses[​](https://documentation.ixopay.com/api/pay-by-link/cancel#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

Successfully cancelled a Pay-by-Link.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** boolean
Whether the request was successful.
**transactionStatus** string
Current status of the transaction
**Possible values:** [`success`, `error_adapter`, `error_internal`, `invalid`, `pending`, `pending_postback`, `await_redirect`, `await_completion`, `redirected`, `cancelled`, `pending_dcc`]
**errorCode** number
Error message in case of error.
**errorMessage** string
Error code in case of error.
**property name*** any
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```Unauthorized access.
  * application/json

**Schema**
**success** boolean
Whether the request was successful.
**errorCode** number
Error message in case of error.
**errorMessage** string
Error code in case of error.
**property name*** any
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```Cannot cancel anymore because preconditions were violated.
  * application/json

  * Schema
  * Example (auto)
  * Already expired
  * Not cancellable
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```Server error.
  * application/json
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```#### Authorization: http
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
payByLinkId — pathrequired
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
payByLinkId — pathrequired
  * Pay-by-Link API
  * Pay-by-Link
  * Cancel
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
POST 
## https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "cancelled"  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Invalid credentials.",  

  "errorCode": 3002  

}  

```
```

{  

  "success": true,  

  "transactionStatus": "success",  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "error_internal",  

  "errorMessage": "Transaction has already expired and can not be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": false,  

  "transactionStatus": "success",  

  "errorMessage": "Transaction is not in a state which can be cancelled",  

  "errorCode": 1006  

}  

```
```

{  

  "success": true,  

  "errorCode": 0,  

  "errorMessage": "string"  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Failed to cancel transaction",  

  "errorCode": 1008  

}  

```
```
**name:** basicAuth[](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
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
curl -L -X POST 'https://gateway.ixopay.com/api/v3/payByLink/:payByLinkId/cancel' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
payByLinkId — pathrequired