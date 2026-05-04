---
title: Delete profile
summary: ' Customer profiles API  Customer profiles  Delete profile'
tags:
- https-gateway-ixopay-com-api-customerprofiles-apikey-deleteprofile
- request-https-documentation-ixopay-com-api-customer-profiles-delete-profile-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- authorization
- gateway
source_url: https://documentation.ixopay.com/api/customer-profiles/delete-profile
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Customer profiles
  * Delete profile

# Delete profile
```
POST 
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

```Delete a customer profile.
In case of any errors due to invalid requests, invalid configuration or any other unexpected reason, the system will answer with a generic error response.
## Request[​](https://documentation.ixopay.com/api/customer-profiles/delete-profile#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
API Key of Connector

  * application/json

  * Body
  * Example profileGuid
  * Example customerIdentification

### Body**required**
Delete a customer profile
oneOf
    * DeleteProfileRequestGuid
    * DeleteProfileRequestCustomerIdentification
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

```## Responses[​](https://documentation.ixopay.com/api/customer-profiles/delete-profile#responses "Direct link to Responses")
  * 200
  * default

Delete a customer profile
  * application/json

  * Schema
  * Example (auto)

**Schema**
**success** boolean
**property name*** any
```

{  

  "success": true  

}  

```Error response
  * application/json

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

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

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

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

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

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

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

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

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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
## https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile

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

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/v3/customerProfiles/:apiKey/deleteProfile' \  
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