---
title: Set multi-method routing
summary: ' Provisioning API  Connector Routinghttps://documentation.ixopay.com/api/provisioning/connector-routing  Set
  multi-method routing'
tags:
- https-gateway-ixopay-com-api-provisioning-setconnectormultimethodrouting-connectorguid
- request-https-documentation-ixopay-com-api-provisioning-connector-multi-method-routing-request-direct-link-request
- path-parameters
- bodyrequired
- generating-provisioning-api-key
- api
- json
- ixopay
- recurring
- authorization
source_url: https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector Routing](https://documentation.ixopay.com/api/provisioning/connector-routing)
  * Set multi-method routing

# Set multi-method routing
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```Sets the per-payment-method routing configuration of a multi-method meta-connector.
The document is **explicit-only** : methods omitted from the `methods` array are preserved untouched. To turn a method off, send its block with `disabled: true`. Each method must already be linked to the meta-connector — link methods via [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) before configuring their routing here. Method identifiers are matched case-insensitively; responses return the canonical identifier (for example `Creditcard`, `DirectDebit`).
For a method block that is present, the trees you send **fully replace** that method's existing trees. The response echoes the stored configuration with all server-assigned rule `id`s populated, and the endpoint is idempotent.
Condition subset
Multi-method routing accepts a fixed subset of the condition catalogue: `CustomerCountry`, `CustomerIpCountry`, `Currency`, `AmountCurrency`, `RiskScore` and `ExtraData`. Other conditions are rejected with error code `1011` — including conditions that a rule tree authored in the admin interface may contain; adjust such documents fetched via [Get multi-method routing](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing) before resubmitting them.
What the API validates
The document is checked for structural correctness, known conditions with well-formed parameters, tenant-level condition availability, and valid connector references. The API does **not** assess whether the resulting routing strategy behaves as you intend — see [Validation and its limits](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#validation-and-its-limits). Test routing changes against your sandbox environment before applying them to production.
## Request[​](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing#request "Direct link to request")
### Path Parameters
**connectorGuid** stringrequired
Identifier of the connector.

  * application/json

  * Body
  * Availability and routing rules
  * Disable a single method

### Body**required**
The multi-method routing document to apply.
**version** stringrequired
Version of the document format. Currently always `"1"`. Future incompatible format changes will be introduced as a new version, side by side.
**Possible values:** [`1`]
**defaultActionDisable** booleannullable
Default action when a method's availability rules reach no explicit enable/disable decision: `true` disables the method. Methods without any availability rules are always enabled. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**paymentSelectionMaxRetries** integernullable
How often the customer may retry the payment-method selection after a failed payment attempt. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**Possible values:** `>= 0`
**paymentSelectionExpiryHours** integernullable
How long the customer's payment-method selection session remains valid, in hours, counted from when the transaction is created. After it expires, the customer is redirected to the error URL. More specific expiration settings — for example a payment link's own expiry or a transaction-expiration setting on the connector — take precedence; when nothing is configured, a platform default of 4 hours applies. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**Possible values:** `>= 0`
**methods** object[]required
Per-method configuration blocks. Methods that are not part of this array are preserved untouched.
  * Array [
**method** stringrequired
Payment method identifier, for example `Creditcard`, `DirectDebit` or `Paypal`. Matched case-insensitively; responses return the canonical identifier. The method must already be linked to the meta-connector via [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector).
**Example:**`Creditcard`
**defaultConnector** objectnullable
The default connector for this method, used when no routing rule matches. Also the connector an `enable` action leaf resolves to. Omit or set `null` to keep the current value.
**connector** stringrequired
GUID of the connector.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
**disabled** boolean
When `true`, the payment method is switched off entirely, regardless of the availability rules.
**Default value:**`false`
**rerouteRecurring** boolean
When `true`, the routing tree is re-evaluated for recurring transactions of this method instead of routing them to the connector of the initial transaction.
**Default value:**`false`
**convertDebitToPreauth** boolean
When `true`, debit transactions of this method are processed as preauthorize-and-capture.
**Default value:**`false`
**availability** objectnullable
Availability rule tree of the method (action leaves). `null` means the method is available without conditions.
**tree** objectnullablerequired
Root node of the availability rule tree. `null` removes all availability rules for the method.
**id** stringnullable
Server-assigned rule id (`MPR-...`). Send `null` (or omit) to create a new rule; echo an id returned by a previous get/set call to update that rule in place.
**Example:**`MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F`
**if** object
The condition of a condition node. Mutually exclusive with `action`; omit this field on action leaves.
**constraint** stringrequired
Identifier of the condition, e.g. `Currency` or `CustomerCountry`. Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the identifiers available to your tenant.
**params** object
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**property name*** any
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**then** nullable
Subtree evaluated when the condition matches.
**else** nullable
Subtree evaluated when the condition does not match.
**action** string
Action leaf: `enable` offers the payment method to the customer, `disable` hides it. `enable` requires the method to have a default connector.
**Possible values:** [`enable`, `disable`]
**routing** objectnullable
Routing rule tree of the method (route leaves, same shape as in the routing document of a routing meta-connector). `null` means all traffic of this method uses the default connector.
**tree** objectnullablerequired
Root node of the routing rule tree. `null` removes all routing rules for the method.
**id** stringnullable
Server-assigned rule id (`MPR-...`). Send `null` (or omit) to create a new rule; echo an id returned by a previous get/set call to update that rule in place.
**Example:**`MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F`
**if** objectnullable
The condition of a condition node. Mutually exclusive with `route`.
**constraint** stringrequired
Identifier of the condition, e.g. `Currency` or `CustomerCountry`. Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the identifiers available to your tenant.
**params** object
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**property name*** any
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**then** nullable
**else** nullable
Subtree evaluated when the condition does not match. `null` means the decision falls through to the default connector.
**route** objectnullable
The payload of a route leaf. Mutually exclusive with `if`.
**connector** stringrequired
GUID of the connector to route to.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
**onFail** object[]
Ordered failover chain. When the primary connector fails to process the transaction, the listed connectors are tried one by one. Each connector in the chain must differ from its predecessor, including the primary connector.
  * Array [
**connector** stringrequired
GUID of the connector.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
  * ]
  * ]
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```## Responses[​](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing#responses "Direct link to Responses")
  * 200
  * 401
  * 404
  * 422
  * 500

The stored multi-method routing configuration, echoing the submitted document with all server-assigned rule `id`s populated. Methods not included in the request are returned with their unchanged configuration.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**routing** object
The stored multi-method routing document, covering all methods linked to the meta-connector, with all server-assigned rule `id`s populated.
**version** stringrequired
Version of the document format. Currently always `"1"`. Future incompatible format changes will be introduced as a new version, side by side.
**Possible values:** [`1`]
**defaultActionDisable** booleannullable
Default action when a method's availability rules reach no explicit enable/disable decision: `true` disables the method. Methods without any availability rules are always enabled. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**paymentSelectionMaxRetries** integernullable
How often the customer may retry the payment-method selection after a failed payment attempt. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**Possible values:** `>= 0`
**paymentSelectionExpiryHours** integernullable
How long the customer's payment-method selection session remains valid, in hours, counted from when the transaction is created. After it expires, the customer is redirected to the error URL. More specific expiration settings — for example a payment link's own expiry or a transaction-expiration setting on the connector — take precedence; when nothing is configured, a platform default of 4 hours applies. Omit or set `null` to keep the current value. Responses omit this field while it has never been set.
**Possible values:** `>= 0`
**methods** object[]required
Per-method configuration blocks. Methods that are not part of this array are preserved untouched.
  * Array [
**method** stringrequired
Payment method identifier, for example `Creditcard`, `DirectDebit` or `Paypal`. Matched case-insensitively; responses return the canonical identifier. The method must already be linked to the meta-connector via [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector).
**Example:**`Creditcard`
**defaultConnector** objectnullable
The default connector for this method, used when no routing rule matches. Also the connector an `enable` action leaf resolves to. Omit or set `null` to keep the current value.
**connector** stringrequired
GUID of the connector.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
**disabled** boolean
When `true`, the payment method is switched off entirely, regardless of the availability rules.
**Default value:**`false`
**rerouteRecurring** boolean
When `true`, the routing tree is re-evaluated for recurring transactions of this method instead of routing them to the connector of the initial transaction.
**Default value:**`false`
**convertDebitToPreauth** boolean
When `true`, debit transactions of this method are processed as preauthorize-and-capture.
**Default value:**`false`
**availability** objectnullable
Availability rule tree of the method (action leaves). `null` means the method is available without conditions.
**tree** objectnullablerequired
Root node of the availability rule tree. `null` removes all availability rules for the method.
**id** stringnullable
Server-assigned rule id (`MPR-...`). Send `null` (or omit) to create a new rule; echo an id returned by a previous get/set call to update that rule in place.
**Example:**`MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F`
**if** object
The condition of a condition node. Mutually exclusive with `action`; omit this field on action leaves.
**constraint** stringrequired
Identifier of the condition, e.g. `Currency` or `CustomerCountry`. Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the identifiers available to your tenant.
**params** object
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**property name*** any
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**then** nullable
Subtree evaluated when the condition matches.
**else** nullable
Subtree evaluated when the condition does not match.
**action** string
Action leaf: `enable` offers the payment method to the customer, `disable` hides it. `enable` requires the method to have a default connector.
**Possible values:** [`enable`, `disable`]
**routing** objectnullable
Routing rule tree of the method (route leaves, same shape as in the routing document of a routing meta-connector). `null` means all traffic of this method uses the default connector.
**tree** objectnullablerequired
Root node of the routing rule tree. `null` removes all routing rules for the method.
**id** stringnullable
Server-assigned rule id (`MPR-...`). Send `null` (or omit) to create a new rule; echo an id returned by a previous get/set call to update that rule in place.
**Example:**`MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F`
**if** objectnullable
The condition of a condition node. Mutually exclusive with `route`.
**constraint** stringrequired
Identifier of the condition, e.g. `Currency` or `CustomerCountry`. Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the identifiers available to your tenant.
**params** object
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**property name*** any
Condition-specific parameters. The shape is described by the condition's `paramsSchema` as returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints).
**then** nullable
**else** nullable
Subtree evaluated when the condition does not match. `null` means the decision falls through to the default connector.
**route** objectnullable
The payload of a route leaf. Mutually exclusive with `if`.
**connector** stringrequired
GUID of the connector to route to.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
**onFail** object[]
Ordered failover chain. When the primary connector fails to process the transaction, the listed connectors are tried one by one. Each connector in the chain must differ from its predecessor, including the primary connector.
  * Array [
**connector** stringrequired
GUID of the connector.
**Example:**`CO-1234-1234-1234-1234-1234-1234`
  * ]
  * ]
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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
**errorCode** integerrequired
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

```The connector was not found. The GUID is unknown, or the connector is not accessible with the given API key.
  * application/json

  * Schema
  * Example (auto)
  * 1007
```

{  

  "success": true,  

  "errorCode": 1004,  

  "errorMessage": "name: nameInvalid characters"  

}  

```Entity not found (1007)
```

{  

  "success": false,  

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```The routing document was rejected. See the `errorCode` list in the response schema; the `errorMessage` names the offending part of the document.
  * application/json

  * Schema
  * Example (auto)
  * 1011
  * 1012
  * 1013
  * 1014

**Schema**
**success** booleanrequired
`true` if successful.
**errorCode** integerrequired
Error code.
    * `1010` - The routing document is invalid (malformed JSON, schema violation, unsupported `version`, unknown rule `id`, or a payment method that is not linked to the meta-connector)
    * `1011` - A condition (`constraint` field) is not part of the catalogue available to your tenant (or not part of the multi-method subset)
    * `1012` - A condition's `params` object does not match its parameter schema
    * `1013` - A referenced connector does not exist, is disabled or archived, belongs to a different merchant, is itself a meta-connector, or appears twice in a row in an `onFail` chain
    * `1014` - The tree structure is invalid (for example a condition without `then` and `else`, a node that is neither condition nor leaf, or the wrong leaf type for the tree)
    * `1015` - A rule `id` is referenced more than once in the tree
    * `1016` - The addressed connector is not a meta-connector
    * `1017` - The addressed meta-connector is multi-method; use the multi-method endpoints instead
    * `1018` - The addressed meta-connector is a routing meta-connector; use the Get routing / Set routing endpoints instead
**Example:**`1011`
**errorMessage** stringrequired
Human readable error message, naming the part of the document that was rejected.
:::info While the `errorMessage` field provides useful context for understanding the nature of the error, it's important to note that the content of this message can vary based on specific circumstances. For consistent and reliable error handling in your application, always base your logic on the `errorCode` field, not the `errorMessage`. :::
**Example:**`Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'`
**property name*** any
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```Unknown constraint (1011)
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```Invalid constraint parameters (1012)
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```Invalid connector reference (1013)
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```Structural error (1014)
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

}  

```Internal server error.
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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
connectorGuid — pathrequired
Body required
  * Example (from schema)
  * Availability and routing rules
  * Disable a single method
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```
```
POST 
## https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234"  

      },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": {  

              "comparator": "in",  

              "countries": [  

                "DE",  

                "AT",  

                "CH"  

              ]  

            }  

          },  

          "then": {  

            "id": null,  

            "action": "enable"  

          },  

          "else": {  

            "id": null,  

            "action": "disable"  

          }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": {  

              "comparator": ">=",  

              "amount": 500,  

              "currency": "EUR"  

            }  

          },  

          "then": {  

            "id": null,  

            "route": {  

              "connector": "CO-8765-8765-8765-8765-8765-8765"  

            }  

          },  

          "else": {  

            "id": null,  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234"  

            }  

          }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": {  

        "connector": "CO-5678-5678-5678-5678-5678-5678"  

      },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": true,  

    "paymentSelectionMaxRetries": 0,  

    "paymentSelectionExpiryHours": 0,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "action": "enable"  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "string",  

              "params": {}  

            },  

            "route": {  

              "connector": "CO-1234-1234-1234-1234-1234-1234",  

              "onFail": [  

                {  

                  "connector": "CO-1234-1234-1234-1234-1234-1234"  

                }  

              ]  

            }  

          }  

        }  

      }  

    ]  

  }  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "defaultActionDisable": false,  

    "paymentSelectionMaxRetries": 3,  

    "paymentSelectionExpiryHours": 24,  

    "methods": [  

      {  

        "method": "Creditcard",  

        "defaultConnector": {  

          "connector": "CO-1234-1234-1234-1234-1234-1234"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": {  

          "tree": {  

            "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

            "if": {  

              "constraint": "CustomerCountry",  

              "params": {  

                "comparator": "in",  

                "countries": [  

                  "DE",  

                  "AT",  

                  "CH"  

                ]  

              }  

            },  

            "then": {  

              "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

              "action": "enable"  

            },  

            "else": {  

              "id": "MPR-3C4D-5E6F-7A8B-9C0D-1E2F-3A4B",  

              "action": "disable"  

            }  

          }  

        },  

        "routing": {  

          "tree": {  

            "id": "MPR-4D5E-6F7A-8B9C-0D1E-2F3A-4B5C",  

            "if": {  

              "constraint": "AmountCurrency",  

              "params": {  

                "comparator": ">=",  

                "amount": 500,  

                "currency": "EUR"  

              }  

            },  

            "then": {  

              "id": "MPR-5E6F-7A8B-9C0D-1E2F-3A4B-5C6D",  

              "route": {  

                "connector": "CO-8765-8765-8765-8765-8765-8765"  

              }  

            },  

            "else": {  

              "id": "MPR-6F7A-8B9C-0D1E-2F3A-4B5C-6D7E",  

              "route": {  

                "connector": "CO-1234-1234-1234-1234-1234-1234"  

              }  

            }  

          }  

        }  

      },  

      {  

        "method": "DirectDebit",  

        "defaultConnector": {  

          "connector": "CO-5678-5678-5678-5678-5678-5678"  

        },  

        "disabled": false,  

        "rerouteRecurring": false,  

        "convertDebitToPreauth": false,  

        "availability": null,  

        "routing": null  

      }  

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

  "errorCode": 1007,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist"  

}  

```
```

{  

  "success": true,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1011,  

  "errorMessage": "Unknown or restricted constraint 'CreditCardType' at 'tree/if/constraint'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1012,  

  "errorMessage": "Invalid parameters for constraint 'Currency': the value for 'currency' is not one of the allowed values at 'tree/if/params'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

{  

  "success": false,  

  "errorCode": 1014,  

  "errorMessage": "Condition node must have at least one of 'then' or 'else' at 'tree/else'"  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/setConnectorMultiMethodRouting/:connectorGuid' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+' \  
-d '{  
  "version": "1",  
  "defaultActionDisable": true,  
  "paymentSelectionMaxRetries": 0,  
  "paymentSelectionExpiryHours": 0,  
  "methods": [  
    {  
      "method": "Creditcard",  
      "defaultConnector": {  
        "connector": "CO-1234-1234-1234-1234-1234-1234"  
      },  
      "disabled": false,  
      "rerouteRecurring": false,  
      "convertDebitToPreauth": false,  
      "availability": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "action": "enable"  
        }  
      },  
      "routing": {  
        "tree": {  
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  
          "if": {  
            "constraint": "string",  
            "params": {}  
          },  
          "route": {  
            "connector": "CO-1234-1234-1234-1234-1234-1234",  
            "onFail": [  
              {  
                "connector": "CO-1234-1234-1234-1234-1234-1234"  
              }  
            ]  
          }  
        }  
      }  
    }  
  ]  
}'  

```
```
{
  "version": "1",
  "defaultActionDisable": true,
  "paymentSelectionMaxRetries": 0,
  "paymentSelectionExpiryHours": 0,
  "methods": [
    {
      "method": "Creditcard",
      "defaultConnector": {
        "connector": "CO-1234-1234-1234-1234-1234-1234"
      },
      "disabled": false,
      "rerouteRecurring": false,
      "convertDebitToPreauth": false,
      "availability": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "action": "enable"
        }
      },
      "routing": {
        "tree": {
          "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",
          "if": {
            "constraint": "string",
            "params": {}
          },
          "route": {
            "connector": "CO-1234-1234-1234-1234-1234-1234",
            "onFail": [
              {
                "connector": "CO-1234-1234-1234-1234-1234-1234"
              }
            ]
          }
        }
      }
    }
  ]
}

```