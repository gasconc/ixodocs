---
title: Update
summary: ' Provisioning API  Merchant userhttps://documentation.ixopay.com/api/provisioning/merchant-user'
tags:
- https-gateway-ixopay-com-api-provisioning-updatemerchantuser-merchantuserguid
- request-https-documentation-ixopay-com-api-provisioning-update-merchant-user-request-direct-link-request
- path-parameters
- bodyrequired
- generating-provisioning-api-key
- api
- json
- ixopay
- refund
- authorization
source_url: https://documentation.ixopay.com/api/provisioning/update-merchant-user
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Merchant user](https://documentation.ixopay.com/api/provisioning/merchant-user)
  * Update

# Update
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```Update the given merchant user.
## Request[​](https://documentation.ixopay.com/api/provisioning/update-merchant-user#request "Direct link to request")
### Path Parameters
**merchantUserGuid** stringrequired
Identifier of the merchant user.

  * application/json

  * Body
  * Example

### Body**required**
Fields of a merchant user to update, omit fields that should remain the same.
**username** string
**Possible values:** `>= 3 characters`
**type** MerchantUserTyperequired
**Possible values:** [`web`, `api`]
**email** email
Mandatory for `web` users.
**password** string
Mandatory for
    * `api` users
    * `web` users if `sendInitialPassword` is `false`
**firstName** string
**lastName** string
**validUntil** date-time
**Example:**`2001-02-03T04:05:06+02:00`
**disabled** boolean
**Default value:**`false`
**multiMerchantAccess** string[]
List of merchant GUIDs the user can access, overwrites existing list.
**permissions** MerchantUserPermission[]
For `web` users only: permissions of the user.
**Possible values:** [`frontend.blacklist.edit`, `frontend.blacklist.show`, `frontend.blacklist.show-admin-values`, `frontend.customer-profiles.delete`, `frontend.customer-profiles.deregister-and-detach`, `frontend.customer-profiles.detach`, `frontend.customer-profiles.prefer`, `frontend.customer-profiles.show`, `frontend.customer-profiles.transactions`, `frontend.customer-profiles.update`, `frontend.dashboard.financial-summary`, `frontend.dashboard.payout-forecast`, `frontend.dashboard.show`, `frontend.payment-template.edit`, `frontend.postprocessing.documents`, `frontend.representment.show`, `frontend.schedule.cancel`, `frontend.schedule.continue`, `frontend.schedule.pause`, `frontend.schedule.retry`, `frontend.schedule.show`, `frontend.schedule.start`, `frontend.show-connectors.meta-connectors`, `frontend.show-connectors.real-connectors`, `frontend.transaction.adapter-txid-visible`, `frontend.transaction.capture`, `frontend.transaction.data-export`, `frontend.transaction.detailed-fees`, `frontend.transaction.refund`, `frontend.transaction.risk-check-result`, `frontend.transaction.settlement-state`, `frontend.transaction.void`, `frontend.users.create`, `frontend.users.edit`, `frontend.users.index`, `frontend.users.reset-password`, `frontend.users.roles`, `frontend.virtual-terminal.register`, `frontend.virtual-terminal.surcharge`, `frontend.virtual-terminal.use`, `frontend.whitelist.edit`, `frontend.whitelist.show`, `frontend.whitelist.show-admin-values`]
**sendInitialPassword** boolean
For `web` users only: send an initial password via email.
**apiUserSettings** object
API user settings, which can be an object with specific API access flags or an empty array if no settings are configured.
oneOf
    * Configured Settings
    * Empty Settings
**push-api** boolean
**fees-api** boolean
**pay-by-link-api** boolean
**cde-login-enabled** boolean
**snapshot-retrieval-enabled** boolean
**addMultiMerchantAccess** string[]
List of merchant GUIDs to add to the list of merchants the user can access.
**removeMultiMerchantAccess** string[]
List of merchant GUIDs to remove from the list of merchants the user can access.
**addPermissions** MerchantUserPermission[]
For `web` users only: add permissions for the user.
**Possible values:** [`frontend.blacklist.edit`, `frontend.blacklist.show`, `frontend.blacklist.show-admin-values`, `frontend.customer-profiles.delete`, `frontend.customer-profiles.deregister-and-detach`, `frontend.customer-profiles.detach`, `frontend.customer-profiles.prefer`, `frontend.customer-profiles.show`, `frontend.customer-profiles.transactions`, `frontend.customer-profiles.update`, `frontend.dashboard.financial-summary`, `frontend.dashboard.payout-forecast`, `frontend.dashboard.show`, `frontend.payment-template.edit`, `frontend.postprocessing.documents`, `frontend.representment.show`, `frontend.schedule.cancel`, `frontend.schedule.continue`, `frontend.schedule.pause`, `frontend.schedule.retry`, `frontend.schedule.show`, `frontend.schedule.start`, `frontend.show-connectors.meta-connectors`, `frontend.show-connectors.real-connectors`, `frontend.transaction.adapter-txid-visible`, `frontend.transaction.capture`, `frontend.transaction.data-export`, `frontend.transaction.detailed-fees`, `frontend.transaction.refund`, `frontend.transaction.risk-check-result`, `frontend.transaction.settlement-state`, `frontend.transaction.void`, `frontend.users.create`, `frontend.users.edit`, `frontend.users.index`, `frontend.users.reset-password`, `frontend.users.roles`, `frontend.virtual-terminal.register`, `frontend.virtual-terminal.surcharge`, `frontend.virtual-terminal.use`, `frontend.whitelist.edit`, `frontend.whitelist.show`, `frontend.whitelist.show-admin-values`]
**removePermissions** MerchantUserPermission[]
For `web` users only: remove permissions for the user.
**Possible values:** [`frontend.blacklist.edit`, `frontend.blacklist.show`, `frontend.blacklist.show-admin-values`, `frontend.customer-profiles.delete`, `frontend.customer-profiles.deregister-and-detach`, `frontend.customer-profiles.detach`, `frontend.customer-profiles.prefer`, `frontend.customer-profiles.show`, `frontend.customer-profiles.transactions`, `frontend.customer-profiles.update`, `frontend.dashboard.financial-summary`, `frontend.dashboard.payout-forecast`, `frontend.dashboard.show`, `frontend.payment-template.edit`, `frontend.postprocessing.documents`, `frontend.representment.show`, `frontend.schedule.cancel`, `frontend.schedule.continue`, `frontend.schedule.pause`, `frontend.schedule.retry`, `frontend.schedule.show`, `frontend.schedule.start`, `frontend.show-connectors.meta-connectors`, `frontend.show-connectors.real-connectors`, `frontend.transaction.adapter-txid-visible`, `frontend.transaction.capture`, `frontend.transaction.data-export`, `frontend.transaction.detailed-fees`, `frontend.transaction.refund`, `frontend.transaction.risk-check-result`, `frontend.transaction.settlement-state`, `frontend.transaction.void`, `frontend.users.create`, `frontend.users.edit`, `frontend.users.index`, `frontend.users.reset-password`, `frontend.users.roles`, `frontend.virtual-terminal.register`, `frontend.virtual-terminal.surcharge`, `frontend.virtual-terminal.use`, `frontend.whitelist.edit`, `frontend.whitelist.show`, `frontend.whitelist.show-admin-values`]
**resetPassword** boolean
For `web` users only: reset the password and send out a password recovery email.
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```## Responses[​](https://documentation.ixopay.com/api/provisioning/update-merchant-user#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The updated merchant.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**merchantUser** object
**guid** stringrequired
Identifier.
**username** string
**Possible values:** `>= 3 characters`
**type** MerchantUserTyperequired
**Possible values:** [`web`, `api`]
**email** email
Mandatory for `web` users.
**createdAt** date-time
**Example:**`2001-02-03T04:05:06+02:00`
**requirePasswordChange** boolean
Whether a password change is required.
**passwordValidUntil** date-time
**Example:**`2050-01-01 00:00:00`
**firstName** string
**lastName** string
**validUntil** date-time
**Example:**`2001-02-03T04:05:06+02:00`
**disabled** boolean
**Default value:**`false`
**archived** boolean
**Example:**`false`
**merchantAccess** MerchantLink[]
List of merchants the user can access.
  * Array [
**guid** string
Identifier.
**name** string
**Possible values:** `>= 3 characters`
  * ]
**permissions** MerchantUserPermission[]
For `web` users only: permissions of the user.
**Possible values:** [`frontend.blacklist.edit`, `frontend.blacklist.show`, `frontend.blacklist.show-admin-values`, `frontend.customer-profiles.delete`, `frontend.customer-profiles.deregister-and-detach`, `frontend.customer-profiles.detach`, `frontend.customer-profiles.prefer`, `frontend.customer-profiles.show`, `frontend.customer-profiles.transactions`, `frontend.customer-profiles.update`, `frontend.dashboard.financial-summary`, `frontend.dashboard.payout-forecast`, `frontend.dashboard.show`, `frontend.payment-template.edit`, `frontend.postprocessing.documents`, `frontend.representment.show`, `frontend.schedule.cancel`, `frontend.schedule.continue`, `frontend.schedule.pause`, `frontend.schedule.retry`, `frontend.schedule.show`, `frontend.schedule.start`, `frontend.show-connectors.meta-connectors`, `frontend.show-connectors.real-connectors`, `frontend.transaction.adapter-txid-visible`, `frontend.transaction.capture`, `frontend.transaction.data-export`, `frontend.transaction.detailed-fees`, `frontend.transaction.refund`, `frontend.transaction.risk-check-result`, `frontend.transaction.settlement-state`, `frontend.transaction.void`, `frontend.users.create`, `frontend.users.edit`, `frontend.users.index`, `frontend.users.reset-password`, `frontend.users.roles`, `frontend.virtual-terminal.register`, `frontend.virtual-terminal.surcharge`, `frontend.virtual-terminal.use`, `frontend.whitelist.edit`, `frontend.whitelist.show`, `frontend.whitelist.show-admin-values`]
**apiUserSettings** object
API user settings, which can be an object with specific API access flags or an empty array if no settings are configured.
oneOf
    * Configured Settings
    * Empty Settings
**push-api** boolean
**fees-api** boolean
**pay-by-link-api** boolean
**cde-login-enabled** boolean
**snapshot-retrieval-enabled** boolean
**property name*** any
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
merchantUserGuid — pathrequired
Body required
  * Example (from schema)
  * Example
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid

```
```

{  

  "username": "my.new.user",  

  "firstName": "Jon",  

  "lastName": "Toe",  

  "disabled": false,  

  "multiMerchantAccess": [],  

  "removePermissions": [  

    "frontend.blacklist.edit"  

  ],  

  "sendInitialPassword": true  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "string",  

    "username": "string",  

    "type": "web",  

    "email": "user@example.com",  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "firstName": "string",  

    "lastName": "string",  

    "validUntil": "2001-02-03T04:05:06+02:00",  

    "disabled": false,  

    "archived": false,  

    "merchantAccess": [  

      {  

        "guid": "string",  

        "name": "string"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.edit"  

    ],  

    "apiUserSettings": {  

      "push-api": true,  

      "fees-api": true,  

      "pay-by-link-api": true,  

      "cde-login-enabled": true,  

      "snapshot-retrieval-enabled": true  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "merchantUser": {  

    "guid": "US-1234-1234-1234-1234-1234-1234",  

    "username": "my.newuser",  

    "email": "user@example.org",  

    "type": "web",  

    "createdAt": "2020-12-18 14:04:55",  

    "archived": false,  

    "disabled": false,  

    "validUntil": "2025-10-10 00:00:00",  

    "firstName": "Jon",  

    "lastName": "Toe",  

    "requirePasswordChange": true,  

    "passwordValidUntil": "2050-01-01 00:00:00",  

    "merchantAccess": [  

      {  

        "guid": "ME-1234-1234-1234-1234-1234-1234",  

        "name": "Merchant B"  

      }  

    ],  

    "permissions": [  

      "frontend.blacklist.show"  

    ]  

  }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/updateMerchantUser/:merchantUserGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "username": "string",  
  "type": "web",  
  "email": "user@example.com",  
  "password": "string",  
  "firstName": "string",  
  "lastName": "string",  
  "validUntil": "2001-02-03T04:05:06+02:00",  
  "disabled": false,  
  "multiMerchantAccess": [  
    "string"  
  ],  
  "permissions": [  
    "frontend.blacklist.edit"  
  ],  
  "sendInitialPassword": true,  
  "apiUserSettings": {  
    "push-api": true,  
    "fees-api": true,  
    "pay-by-link-api": true,  
    "cde-login-enabled": true,  
    "snapshot-retrieval-enabled": true  
  },  
  "addMultiMerchantAccess": [  
    "string"  
  ],  
  "removeMultiMerchantAccess": [  
    "string"  
  ],  
  "addPermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "removePermissions": [  
    "frontend.blacklist.edit"  
  ],  
  "resetPassword": true  
}'  

```
```
{
  "username": "string",
  "type": "web",
  "email": "user@example.com",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "validUntil": "2001-02-03T04:05:06+02:00",
  "disabled": false,
  "multiMerchantAccess": [
    "string"
  ],
  "permissions": [
    "frontend.blacklist.edit"
  ],
  "sendInitialPassword": true,
  "apiUserSettings": {
    "push-api": true,
    "fees-api": true,
    "pay-by-link-api": true,
    "cde-login-enabled": true,
    "snapshot-retrieval-enabled": true
  },
  "addMultiMerchantAccess": [
    "string"
  ],
  "removeMultiMerchantAccess": [
    "string"
  ],
  "addPermissions": [
    "frontend.blacklist.edit"
  ],
  "removePermissions": [
    "frontend.blacklist.edit"
  ],
  "resetPassword": true
}

```