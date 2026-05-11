---
title: Create
summary: ' Provisioning API'
tags:
- https-gateway-ixopay-com-api-provisioning-createconnector-merchantguid
- request-https-documentation-ixopay-com-api-provisioning-create-connector-request-direct-link-request
- path-parameters
- bodyrequired
- generating-provisioning-api-key
- api
- json
- xml
- ixopay
- recurring
source_url: https://documentation.ixopay.com/api/provisioning/create-connector
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector](https://documentation.ixopay.com/api/provisioning/connector)
  * Create

# Create
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```Create a connector for the given merchant.
Meta-connector
A meta-connector can only be either a `routingMetaConnector` or a `multiMethodMetaConnector`, not both.
  * To create a classic routing meta-connector, add `routingMetaConnector` and the corresponding properties.
  * To create a multi-method meta-connector, add `multiMethodMetaConnector` and the corresponding properties.

## Request[​](https://documentation.ixopay.com/api/provisioning/create-connector#request "Direct link to request")
### Path Parameters
**merchantGuid** stringrequired
Identifier of the merchant.

  * application/json

  * Body
  * Connector
  * Routing meta-connector
  * Multi-method meta-connector

### Body**required**
The connector to create.
**name** stringrequired
**Possible values:** `>= 3 characters`
**Example:**`SimulatorConnector A`
**adapter** stringrequired
Adapter identifier.
**Example:**`Simulator`
**method** stringrequired
Method identifier.
**Example:**`Creditcard`
**apiKey** stringrequired
Connector API key.
**Example:**`sim-connector-a`
**publicIntegrationKey** string
Connector public integration key, user for payment.js.
**Example:**`4nhDxztY3bBeozkyd7Zs`
**sharedSecret** string
Connector shared secret.
If left empty the sharedSecret will be generated automatically.
**Possible values:** `<= 50 characters`
**Example:**`OsEPpNrSr8hxYR3BO0F73YXMvMdDsM`
**businessCountry** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**config** object
Connector configuration.
**username** string
**Example:**`asmith`
**password** string
**Example:**`supersecure1`
**apiSecret** string
**Example:**`ljkllLkklmKLlk3`
**extraData** object
Configuration values.
When no configuration values are set, the field is returned as an empty array `[]` instead of an empty object `{}`. Always handle both cases defensively.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter.
oneOf
    * object
    * undefined[]
****object
**language** Language
[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.
**Possible values:** Value must match regular expression `^[a-z]{2}$`
**Example:**`de`
**testMode** boolean
Whether the connector is in test mode.
**Example:**`true`
**vault** object
Configuration values for vault connectors.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter and merchant in use.
**property name*** any
Configuration values for vault connectors.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter and merchant in use.
**property name*** any
Connector configuration.
**customerProfileContainer** int64
Customer profile Container ID.
**defaultRiskRuleSet** int64
**description** string
**disabled** boolean
**Example:**`false`
**disabledTransactionTypes** TransactionType[]
List of transaction type disabled for this connector.
**Possible values:** [`initial_debit`, `initial_preauthorize`, `capture`, `partial_capture`, `refund`, `partial_refund`, `register`, `deregister`, `payout`, `recurring_debit`, `recurring_preauthorize`]
**postbackFormat** PostbackFormat
**Possible values:** [`inherit`, `json`, `xml`]
**Default value:**`inherit`
**provider** string
Provider identifier.
**scheduleApiAvailable** boolean
Whether the scheduler is enabled.
**virtualTerminalAvailable** boolean
Whether the virtual terminal is enabled.
**vtRiskRuleSet** int64
Identifier of risk rule profile for virtual terminal.
**settings** object
**account-updater:connector-guid** string
**adapter-id:use-merchant-txid-as-customerid** string
**api:request-signing-enabled** string
**backdirect:loading-screen** string
**batch-capture:pessimistic** string
**batch-capture:time** string
**cb-reveral:inform-email** string
**cb-reversal:no-conflict** string
**cb:create-representment** string
**email:sender-address** string
**email:sender-name** string
**fees:calculate-register-for-combined-tx** string
**handler:anti-fraud-stack** string
**hooks:transaction-success** string
**intermediate-redirect:enabled** string
**kount:api_key** string
**kount:enable-update-call** string
**kount:fields** string
**kount:init-scripts-automatically** string
**kount:merchant_id** string
**kount:test-mode-enabled** string
**manipulation:prepend-uuid** string
**merchant-settlement:no-rolling-reserve** string
**meta-connector:reroute-refund** string
**migration:connector-guids** string
**postback-queue:max-retries** string
**postback-sharing:projects** string
**postback:old-service-name** string
**postback:override-api-key** string
**postback:send-on-capture** string
**postback:send-on-pending** string
**postback:send-test-plain-header** string
**postback:send-useragent-header** string
**postback:suppress-outgoing** string
**postback:use-rfc-compliant-tz** string
**postback:with-adapter-reference** string
**postback:with-auth-code** string
**postback:with-connector-info** string
**preemptive-rendering:enabled** string
**processing:convert-register-to-debit** string
**processing:copy-customer-data-from-customer-profile-transaction** string
**processing:copy-customer-data-from-related** string
**processing:overwrite-customer-billing-country** string
**processing:set-customer-identification** string
**reconciliation:returns-processor-id** string
**redirect:type-for-html** string
**refund:ui-enabled** string
**refund:with-chargeback** string
**registration-sharing:projects** string
**risk-engine:manual-review-delay** string
**risk-engine:manual-review-for-recurring** string
**risk-engine:review-requirements** string
**risk-engine:show-risk-check-data-in-api-result** string
**risk-engine:store-test-tx** string
**settlement:create-unknown-transaction** string
**threedsecure:check** string
**tx:expiration-minutes** string
**vault:external-vault-connector-guid** string
**view:allow-merchant-upload** string
**view:legacy** string
**view:merchant-defined** string
**view:no-country-dropdown** string
**view:no-expiration-dropdown** string
**virtual-terminal:pan-only** string
**alias** string
Set connector alias for global routing.
**terminals** object[]
  * Array [
**terminalId** string
Unique terminal identifier.
**stan** string
Set current STAN.
**captureRef** string
Set current capture reference.
**disabled** boolean
  * ]
**routingMetaConnector** object
On create/update add this to create a classic routing meta-connector (adapter and method must be set to `MetaConnector`).
**defaultConnector** string
Identifier of the default connector to route to.
**reRouteRecurring** boolean
Whether to re-route recurring transactions to the original connector.
**Default value:**`false`
**multiMethodMetaConnector** object
On create/update add this to create a multi-method meta-connector (adapter and method must be set to `MetaConnector`).
**defaultActionDisableConnector** boolean
If no action is configured (rules), the default action is to disable the connector.
**retries** int32
How many retries should be allowed if possible.
**Possible values:** `<= 9`
**expiry** int64
Expiry time in hours.
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```## Responses[​](https://documentation.ixopay.com/api/provisioning/create-connector#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The created connector.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**connector** object
**guid** string
Identifier.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
**name** stringrequired
**Possible values:** `>= 3 characters`
**Example:**`SimulatorConnector A`
**adapter** stringrequired
Adapter identifier.
**Example:**`Simulator`
**method** stringrequired
Method identifier.
**Example:**`Creditcard`
**apiKey** stringrequired
Connector API key.
**Example:**`sim-connector-a`
**publicIntegrationKey** string
Connector public integration key, user for payment.js.
**Example:**`4nhDxztY3bBeozkyd7Zs`
**sharedSecret** string
Connector shared secret.
If left empty the sharedSecret will be generated automatically.
**Possible values:** `<= 50 characters`
**Example:**`OsEPpNrSr8hxYR3BO0F73YXMvMdDsM`
**archived** boolean
**businessCountry** string
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
**Possible values:** Value must match regular expression `^[A-Z]{2}$`
**Example:**`AT`
**config** object
Connector configuration.
**username** string
**Example:**`asmith`
**password** string
**Example:**`supersecure1`
**apiSecret** string
**Example:**`ljkllLkklmKLlk3`
**extraData** object
Configuration values.
When no configuration values are set, the field is returned as an empty array `[]` instead of an empty object `{}`. Always handle both cases defensively.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter.
oneOf
    * object
    * undefined[]
****object
**language** Language
[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.
**Possible values:** Value must match regular expression `^[a-z]{2}$`
**Example:**`de`
**testMode** boolean
Whether the connector is in test mode.
**Example:**`true`
**vault** object
Configuration values for vault connectors.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter and merchant in use.
**property name*** any
Configuration values for vault connectors.
To obtain valid configuration values, use the `/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid` endpoint. This endpoint provides the necessary configuration values tailored to the specific adapter and merchant in use.
**property name*** any
Connector configuration.
**createdAt** date-time
**Example:**`2001-02-03T04:05:06+02:00`
**customerProfileContainer** int64
Customer profile Container ID.
**defaultRiskRuleSet** int64
**description** string
**disabled** boolean
**Example:**`false`
**disabledTransactionTypes** TransactionType[]
List of transaction type disabled for this connector.
**Possible values:** [`initial_debit`, `initial_preauthorize`, `capture`, `partial_capture`, `refund`, `partial_refund`, `register`, `deregister`, `payout`, `recurring_debit`, `recurring_preauthorize`]
**merchantGuid** string
Merchant identifier.
**Example:**`ME-1234-1234-1234-1234-1234-1234`
**isMetaConnector** boolean
Whether the connector is a meta-connector.
**Example:**`false`
**postbackFormat** PostbackFormat
**Possible values:** [`inherit`, `json`, `xml`]
**Default value:**`inherit`
**provider** string
Provider identifier.
**scheduleApiAvailable** boolean
Whether the scheduler is enabled.
**virtualTerminalAvailable** boolean
Whether the virtual terminal is enabled.
**vtRiskRuleSet** int64
Identifier of risk rule profile for virtual terminal.
**settings** object
**account-updater:connector-guid** string
**adapter-id:use-merchant-txid-as-customerid** string
**api:request-signing-enabled** string
**backdirect:loading-screen** string
**batch-capture:pessimistic** string
**batch-capture:time** string
**cb-reveral:inform-email** string
**cb-reversal:no-conflict** string
**cb:create-representment** string
**email:sender-address** string
**email:sender-name** string
**fees:calculate-register-for-combined-tx** string
**handler:anti-fraud-stack** string
**hooks:transaction-success** string
**intermediate-redirect:enabled** string
**kount:api_key** string
**kount:enable-update-call** string
**kount:fields** string
**kount:init-scripts-automatically** string
**kount:merchant_id** string
**kount:test-mode-enabled** string
**manipulation:prepend-uuid** string
**merchant-settlement:no-rolling-reserve** string
**meta-connector:reroute-refund** string
**migration:connector-guids** string
**postback-queue:max-retries** string
**postback-sharing:projects** string
**postback:old-service-name** string
**postback:override-api-key** string
**postback:send-on-capture** string
**postback:send-on-pending** string
**postback:send-test-plain-header** string
**postback:send-useragent-header** string
**postback:suppress-outgoing** string
**postback:use-rfc-compliant-tz** string
**postback:with-adapter-reference** string
**postback:with-auth-code** string
**postback:with-connector-info** string
**preemptive-rendering:enabled** string
**processing:convert-register-to-debit** string
**processing:copy-customer-data-from-customer-profile-transaction** string
**processing:copy-customer-data-from-related** string
**processing:overwrite-customer-billing-country** string
**processing:set-customer-identification** string
**reconciliation:returns-processor-id** string
**redirect:type-for-html** string
**refund:ui-enabled** string
**refund:with-chargeback** string
**registration-sharing:projects** string
**risk-engine:manual-review-delay** string
**risk-engine:manual-review-for-recurring** string
**risk-engine:review-requirements** string
**risk-engine:show-risk-check-data-in-api-result** string
**risk-engine:store-test-tx** string
**settlement:create-unknown-transaction** string
**threedsecure:check** string
**tx:expiration-minutes** string
**vault:external-vault-connector-guid** string
**view:allow-merchant-upload** string
**view:legacy** string
**view:merchant-defined** string
**view:no-country-dropdown** string
**view:no-expiration-dropdown** string
**virtual-terminal:pan-only** string
**alias** string
Set connector alias for global routing.
**terminals** object[]
  * Array [
**terminalId** string
Unique terminal identifier.
**disabled** boolean
  * ]
**routingMetaConnector** object
On create/update add this to create a classic routing meta-connector (adapter and method must be set to `MetaConnector`).
**defaultConnector** string
Identifier of the default connector to route to.
**reRouteRecurring** boolean
Whether to re-route recurring transactions to the original connector.
**Default value:**`false`
**multiMethodMetaConnector** object
On create/update add this to create a multi-method meta-connector (adapter and method must be set to `MetaConnector`).
**defaultActionDisableConnector** boolean
If no action is configured (rules), the default action is to disable the connector.
**retries** int32
How many retries should be allowed if possible.
**Possible values:** `<= 9`
**expiry** int64
Expiry time in hours.
**property name*** any
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
merchantGuid — pathrequired
Body required
  * Example (from schema)
  * Connector
  * Routing meta-connector
  * Multi-method meta-connector
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid

```
```

{  

  "name": "SimulatorConnector B",  

  "adapter": "Simulator",  

  "method": "Creditcard",  

  "apiKey": "sim-connector-b",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "disabledTransactionTypes": [  

    "payout",  

    "register"  

  ],  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "alias": "default",  

  "ScheduleApiAvailable": true,  

  "virtualTerminalAvailable": true,  

  "customerProfileContainer": 8,  

  "defaultRiskRuleSet": 213,  

  "vtRiskRuleSet": 312,  

  "provider": "PR-1234-1234-1234-1234-1234",  

  "settings": {  

    "tx:expiration-minutes": 900,  

    "Refund:ui-enabled": 1  

  },  

  "terminals": [  

    {  

      "terminalId": "ID-0001",  

      "disabled": false  

    }  

  ],  

  "config": {  

    "username": "uname",  

    "password": "pw",  

    "apiSecret": "sikret",  

    "extraData": {  

      "setting": "test"  

    },  

    "language": "de",  

    "testMode": false,  

    "vault": {  

      "env": "Sandbox"  

    }  

  }  

}  

```
```

{  

  "name": "My routing MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-routing-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "routingMetaConnector": {  

    "defaultConnector": "CO-4321-4321-4321-4321-4321-4321",  

    "reRouteRecurring": true  

  }  

}  

```
```

{  

  "name": "My multimethod MetaConnector",  

  "Adapter": "MetaConnector",  

  "method": "MetaConnector",  

  "apiKey": "my-multimethod-Connector",  

  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

  "businessCountry": "DE",  

  "description": "My test Connector",  

  "postbackFormat": "inherit",  

  "disabled": false,  

  "multiMethodMetaConnector": {  

    "defaultActionDisableConnector": true,  

    "retries": 9,  

    "expiry": 100  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-1234-1234-1234-1234-1234-1234",  

    "name": "SimulatorConnector A",  

    "adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-connector-a",  

    "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  

    "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  

    "archived": true,  

    "businessCountry": "AT",  

    "config": {  

      "username": "asmith",  

      "password": "supersecure1",  

      "apiSecret": "ljkllLkklmKLlk3",  

      "extraData": {},  

      "language": "de",  

      "testMode": true,  

      "vault": {}  

    },  

    "createdAt": "2001-02-03T04:05:06+02:00",  

    "customerProfileContainer": 0,  

    "defaultRiskRuleSet": 0,  

    "description": "string",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "initial_debit"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "postbackFormat": "inherit",  

    "provider": "string",  

    "scheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 0,  

    "settings": {  

      "tx:expiration-minutes": "900",  

      "refund:ui-enabled": "1"  

    },  

    "alias": "string",  

    "terminals": [  

      {  

        "terminalId": "string",  

        "disabled": true  

      }  

    ],  

    "routingMetaConnector": {  

      "defaultConnector": "string",  

      "reRouteRecurring": false  

    },  

    "multiMethodMetaConnector": {  

      "defaultActionDisableConnector": true,  

      "retries": 0,  

      "expiry": 0  

    }  

  }  

}  

```
```

{  

  "success": true,  

  "connector": {  

    "guid": "CO-4321-4321-4321-4321-4321-4321",  

    "name": "SimulatorConnector B",  

    "Adapter": "Simulator",  

    "method": "Creditcard",  

    "apiKey": "sim-Connector-b",  

    "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  

    "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  

    "archived": false,  

    "businessCountry": "DE",  

    "config": {  

      "username": "uname",  

      "password": "pw",  

      "apiSecret": "sikret",  

      "extraData": {  

        "setting": "test"  

      },  

      "language": "de",  

      "testMode": false  

    },  

    "createdAt": "2020-12-16T09:57:14+00:00",  

    "customerProfileContainer": 8,  

    "defaultRiskRuleSet": 213,  

    "description": "My test Connector",  

    "disabled": false,  

    "disabledTransactionTypes": [  

      "payout",  

      "register"  

    ],  

    "merchantGuid": "ME-1234-1234-1234-1234-1234-1234",  

    "isMetaConnector": false,  

    "PostbackFormat": "inherit",  

    "provider": "PR-1234-1234-1234-1234-1234",  

    "alias": "default",  

    "ScheduleApiAvailable": true,  

    "virtualTerminalAvailable": true,  

    "vtRiskRuleSet": 312,  

    "terminals": [  

      {  

        "terminalId": "ID-0001",  

        "disabled": false  

      }  

    ],  

    "settings": {  

      "tx:expiration-minutes": 900,  

      "refund:ui-enabled": 1  

    }  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/createConnector/:merchantGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "name": "SimulatorConnector A",  
  "adapter": "Simulator",  
  "method": "Creditcard",  
  "apiKey": "sim-connector-a",  
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",  
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",  
  "businessCountry": "AT",  
  "config": {  
    "username": "asmith",  
    "password": "supersecure1",  
    "apiSecret": "ljkllLkklmKLlk3",  
    "extraData": {},  
    "language": "de",  
    "testMode": true,  
    "vault": {}  
  },  
  "customerProfileContainer": 0,  
  "defaultRiskRuleSet": 0,  
  "description": "string",  
  "disabled": false,  
  "disabledTransactionTypes": [  
    "initial_debit"  
  ],  
  "postbackFormat": "inherit",  
  "provider": "string",  
  "scheduleApiAvailable": true,  
  "virtualTerminalAvailable": true,  
  "vtRiskRuleSet": 0,  
  "settings": {  
    "tx:expiration-minutes": "900",  
    "refund:ui-enabled": "1"  
  },  
  "alias": "string",  
  "terminals": [  
    {  
      "terminalId": "string",  
      "stan": "string",  
      "captureRef": "string",  
      "disabled": true  
    }  
  ],  
  "routingMetaConnector": {  
    "defaultConnector": "string",  
    "reRouteRecurring": false  
  },  
  "multiMethodMetaConnector": {  
    "defaultActionDisableConnector": true,  
    "retries": 0,  
    "expiry": 0  
  }  
}'  

```
```
{
  "name": "SimulatorConnector A",
  "adapter": "Simulator",
  "method": "Creditcard",
  "apiKey": "sim-connector-a",
  "publicIntegrationKey": "4nhDxztY3bBeozkyd7Zs",
  "sharedSecret": "OsEPpNrSr8hxYR3BO0F73YXMvMdDsM",
  "businessCountry": "AT",
  "config": {
    "username": "asmith",
    "password": "supersecure1",
    "apiSecret": "ljkllLkklmKLlk3",
    "extraData": {},
    "language": "de",
    "testMode": true,
    "vault": {}
  },
  "customerProfileContainer": 0,
  "defaultRiskRuleSet": 0,
  "description": "string",
  "disabled": false,
  "disabledTransactionTypes": [
    "initial_debit"
  ],
  "postbackFormat": "inherit",
  "provider": "string",
  "scheduleApiAvailable": true,
  "virtualTerminalAvailable": true,
  "vtRiskRuleSet": 0,
  "settings": {
    "tx:expiration-minutes": "900",
    "refund:ui-enabled": "1"
  },
  "alias": "string",
  "terminals": [
    {
      "terminalId": "string",
      "stan": "string",
      "captureRef": "string",
      "disabled": true
    }
  ],
  "routingMetaConnector": {
    "defaultConnector": "string",
    "reRouteRecurring": false
  },
  "multiMethodMetaConnector": {
    "defaultActionDisableConnector": true,
    "retries": 0,
    "expiry": 0
  }
}

```