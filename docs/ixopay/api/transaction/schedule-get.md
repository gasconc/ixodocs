---
title: Get
summary: ' Transaction API'
tags:
- https-gateway-ixopay-com-api-schedule-apikey-scheduleid
- request-https-documentation-ixopay-com-api-transaction-schedule-request-direct-link-request
- path-parameters
- responses-https-documentation-ixopay-com-api-transaction-schedule-responses-direct-link-responses
- api
- json
- ixopay
- authorization
- transaction
- gateway
source_url: https://documentation.ixopay.com/api/transaction/schedule-get
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Get

# Get
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```Retrieve a schedule.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.

If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-get#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector
**scheduleId** stringrequired
**Possible values:** `<= 32 characters`
ID of the schedule

## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-get#responses "Direct link to Responses")
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
**oldStatus** ScheduleStatus
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**newStatus** ScheduleStatus
Status of the schedule.
**Possible values:** [`ACTIVE`, `PAUSED`, `CANCELLED`, `ERROR`, `CREATE-PENDING`, `NON-EXISTING`]
**scheduledAt** date-time
[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) Internet Date/Time Format `date-time`
**Possible values:** Value must match regular expression `^[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))T(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])\+[0-9]{2}\:[0-9]{2}$`
**Example:**`2001-02-03T04:05:06+02:00`
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

  "oldStatus": "ACTIVE",  

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

```Rate limit exceeded
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
**errorCode** int32
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

```#### Authorization: http
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

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Security SchemebasicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```
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

  "oldStatus": "ACTIVE",  

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
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```
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

  "oldStatus": "ACTIVE",  

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
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Security SchemebasicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired
  * Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Get
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```
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

  "oldStatus": "ACTIVE",  

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
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```
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

  "oldStatus": "ACTIVE",  

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
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get

```
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

  "oldStatus": "ACTIVE",  

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
```
curl -L 'https://gateway.ixopay.com/api/v3/schedule/:apiKey/:scheduleId/get' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Security SchemebasicAuth basicAuth and signature
Username
Password
Parameters
apiKey — pathrequired
scheduleId — pathrequired