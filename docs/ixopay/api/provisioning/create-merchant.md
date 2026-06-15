---
title: Create
summary: ' Provisioning API'
tags:
- https-gateway-ixopay-com-api-provisioning-createmerchant-tenantguid
- request-https-documentation-ixopay-com-api-provisioning-create-merchant-request-direct-link-request
- path-parameters
- bodyrequired
- generating-provisioning-api-key
- api
- json
- ixopay
- refund
- authorization
source_url: https://documentation.ixopay.com/api/provisioning/create-merchant
portal: ixopay-dev
updated: '2026-06-15'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Merchant](https://documentation.ixopay.com/api/provisioning/merchant)
  * Create

# Create
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```Create a merchant for the given tenant.
## Request[​](https://documentation.ixopay.com/api/provisioning/create-merchant#request "Direct link to request")
### Path Parameters
**tenantGuid** stringrequired
Identifier of the tenant.

  * application/json

  * Body
  * Example (auto)

### Body**required**
The merchant to create.
**name** stringrequired
**Possible values:** `>= 3 characters`
**address** string
**administrativeEmail** string
Administrative email.
**archived** boolean
Whether the merchant is archived.
**Example:**`false`
**city** string
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**defaultCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**defaultRiskRuleSet** int64
ID of merchant's default risk rule set.
**defaultVtRiskRuleSet** int64
ID of merchant's default virtual terminal risk rule set.
**disabled** boolean
Whether the merchant is disabled.
**disabledTransactionTypes** TransactionType[]
Transaction types that are disabled for the merchant.
**Possible values:** [`initial_debit`, `initial_preauthorize`, `capture`, `partial_capture`, `refund`, `partial_refund`, `register`, `deregister`, `payout`, `recurring_debit`, `recurring_preauthorize`]
**externalId** string
**homepage** urlrequired
**isPciEnabled** boolean
**riskAlertEmail** email
**schedulerAlertEmail** email
**technicalEmail** email
**eventNotificationUrl** uri
Merchant event notification URL.
Callback URL where a merchant will be notified about network token and account updater changes where no connector is available.
**Possible values:** `<= 65535 characters`
**Example:**`https://api.example.org/event-notification`
**timezone** stringrequired
**zipCode** string
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```## Responses[​](https://documentation.ixopay.com/api/provisioning/create-merchant#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The created merchant.
  * application/json

  * Schema
  * Example (auto)

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**merchant** object
Additional fields might be mandatory depending on tenant settings.
**guid** stringrequired
Identifier.
**name** stringrequired
**Possible values:** `>= 3 characters`
**address** string
**administrativeEmail** string
Administrative email.
**archived** boolean
Whether the merchant is archived.
**Example:**`false`
**city** string
**country** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**createdAt** date-time
**Example:**`2001-02-03T04:05:06+02:00`
**defaultCurrency** string
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Example:**`EUR`
**defaultRiskRuleSet** int64
ID of merchant's default risk rule set.
**defaultVtRiskRuleSet** int64
ID of merchant's default virtual terminal risk rule set.
**disabled** boolean
Whether the merchant is disabled.
**disabledTransactionTypes** TransactionType[]
Transaction types that are disabled for the merchant.
**Possible values:** [`initial_debit`, `initial_preauthorize`, `capture`, `partial_capture`, `refund`, `partial_refund`, `register`, `deregister`, `payout`, `recurring_debit`, `recurring_preauthorize`]
**externalId** string
**homepage** urlrequired
**isPciEnabled** boolean
**riskAlertEmail** email
**schedulerAlertEmail** email
**technicalEmail** email
**eventNotificationUrl** uri
Merchant event notification URL.
Callback URL where a merchant will be notified about network token and account updater changes where no connector is available.
**Possible values:** `<= 65535 characters`
**Example:**`https://api.example.org/event-notification`
**timezone** stringrequired
**zipCode** string
**property name*** any
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
tenantGuid — pathrequired
Body required
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid

```
```

{  

  "guid": "ME-1234-1234-1234-1234-1234-1234",  

  "name": "Merchant A",  

  "address": "Straße 1",  

  "administrativeEmail": "admin@example.org",  

  "archived": false,  

  "city": "Vienna",  

  "country": "AT",  

  "createdAt": "2020-12-18T13:53:07+00:00",  

  "defaultCurrency": "EUR",  

  "defaultRiskRuleSet": 213,  

  "defaultVtRiskRuleSet": 312,  

  "disabled": false,  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "externalId": "Id-0001",  

  "homepage": "https://www.example.org",  

  "isPciEnabled": false,  

  "riskAlertEmail": "risk@example.org",  

  "schedulerAlertEmail": "scheduler@example.org",  

  "technicalEmail": "tech@example.org",  

  "eventNotificationUrl": "https://api.example.org/event-notification",  

  "timezone": "UTC",  

  "zipCode": "1180"  

}  

```
```

{  

  "success": true,  

  "merchant": {  

    "guid": "ME-1234-1234-1234-1234-1234-1234",  

    "name": "Merchant A",  

    "address": "Straße 1",  

    "administrativeEmail": "admin@example.org",  

    "archived": false,  

    "city": "Vienna",  

    "country": "AT",  

    "createdAt": "2020-12-18T13:53:07+00:00",  

    "defaultCurrency": "EUR",  

    "defaultRiskRuleSet": 213,  

    "defaultVtRiskRuleSet": 312,  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "externalId": "Id-0001",  

    "homepage": "https://www.example.org",  

    "isPciEnabled": false,  

    "riskAlertEmail": "risk@example.org",  

    "schedulerAlertEmail": "scheduler@example.org",  

    "technicalEmail": "tech@example.org",  

    "eventNotificationUrl": "https://api.example.org/event-notification",  

    "timezone": "UTC",  

    "zipCode": "1180"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createMerchant/:tenantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
--data-raw '{  
  "guid": "ME-1234-1234-1234-1234-1234-1234",  
  "name": "Merchant A",  
  "address": "Straße 1",  
  "administrativeEmail": "admin@example.org",  
  "archived": false,  
  "city": "Vienna",  
  "country": "AT",  
  "createdAt": "2020-12-18T13:53:07+00:00",  
  "defaultCurrency": "EUR",  
  "defaultRiskRuleSet": 213,  
  "defaultVtRiskRuleSet": 312,  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "payout",  
    "register"  
  ],  
  "externalId": "Id-0001",  
  "homepage": "https://www.example.org",  
  "isPciEnabled": false,  
  "riskAlertEmail": "risk@example.org",  
  "schedulerAlertEmail": "scheduler@example.org",  
  "technicalEmail": "tech@example.org",  
  "eventNotificationUrl": "https://api.example.org/event-notification",  
  "timezone": "UTC",  
  "zipCode": "1180"  
}'  

```
```
{
  "guid": "ME-1234-1234-1234-1234-1234-1234",
  "name": "Merchant A",
  "address": "Straße 1",
  "administrativeEmail": "admin@example.org",
  "archived": false,
  "city": "Vienna",
  "country": "AT",
  "createdAt": "2020-12-18T13:53:07+00:00",
  "defaultCurrency": "EUR",
  "defaultRiskRuleSet": 213,
  "defaultVtRiskRuleSet": 312,
  "disabled": false,
  "disabledTransactionTypes": [
    "payout",
    "register"
  ],
  "externalId": "Id-0001",
  "homepage": "https://www.example.org",
  "isPciEnabled": false,
  "riskAlertEmail": "risk@example.org",
  "schedulerAlertEmail": "scheduler@example.org",
  "technicalEmail": "tech@example.org",
  "eventNotificationUrl": "https://api.example.org/event-notification",
  "timezone": "UTC",
  "zipCode": "1180"
}

```