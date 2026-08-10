---
title: List routing constraints
summary: ' Provisioning API  Connector Routinghttps://documentation.ixopay.com/api/provisioning/connector-routing  List
  routing constraints'
tags:
- https-gateway-ixopay-com-api-provisioning-listroutingconstraints
- responses-https-documentation-ixopay-com-api-provisioning-list-routing-constraints-responses-direct-link-responses
- generating-provisioning-api-key
- api
- json
- ixopay
- authorization
- merchant
- gateway
source_url: https://documentation.ixopay.com/api/provisioning/list-routing-constraints
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector Routing](https://documentation.ixopay.com/api/provisioning/connector-routing)
  * List routing constraints

# List routing constraints
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```Returns the catalogue of rule conditions — currency, customer country, amount, risk score, … — you can use when authoring routing rules. A condition is referenced by its identifier in the `constraint` field of a routing document.
Each catalogue entry carries a `paramsSchema`: a JSON Schema (draft-07 compatible) describing the `params` object the condition accepts. You can feed this schema into any standard JSON Schema validator to check the parameters you intend to send before submitting a routing document.
The catalogue is **per-tenant** , not per-merchant: the response is identical for every merchant managed with the same API key. Conditions that are not activated for your tenant are not returned; additionally activated conditions are included — to activate more, contact your Customer Success Manager. The catalogue rarely changes, so caching the response is safe.
info
The catalogue lists every condition available for the routing rules of routing meta-connectors. Multi-method routing accepts a fixed subset — see [Set multi-method routing](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing) and the [condition reference](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions).
## Responses[​](https://documentation.ixopay.com/api/provisioning/list-routing-constraints#responses "Direct link to Responses")
  * 200
  * 401
  * 500

The catalogue of rule conditions available to the API key's tenant.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**constraints** object[]
The catalogue of rule conditions available to the API key's tenant.
  * Array [
**identifier** string
Stable identifier of the condition. Use this value as the `constraint` field of a condition when authoring routing rules.
**Example:**`Currency`
**name** string
Human-readable name of the condition.
**Example:**`Currency`
**paramsSchema** object
A JSON Schema (draft-07 compatible) describing the `params` object this condition accepts. The content is dynamic and tenant-aware — treat it as data and validate your routing documents against it before submitting.
**property name*** any
A JSON Schema (draft-07 compatible) describing the `params` object this condition accepts. The content is dynamic and tenant-aware — treat it as data and validate your routing documents against it before submitting.
  * ]
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector Routing](https://documentation.ixopay.com/api/provisioning/connector-routing)
  * List routing constraints
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/listRoutingConstraints

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {}  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "constraints": [  

    {  

      "identifier": "Currency",  

      "name": "Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "EUR",  

              "USD",  

              "GBP"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "AmountCurrency",  

      "name": "Amount & Currency",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              ">",  

              ">=",  

              "=",  

              "<=",  

              "<"  

            ]  

          },  

          "amount": {  

            "type": "number",  

            "description": "Amount"  

          },  

          "currency": {  

            "type": "string",  

            "description": "Currency",  

            "enum": [  

              "Base Amount",  

              "EUR",  

              "USD"  

            ]  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "amount",  

          "currency"  

        ]  

      }  

    },  

    {  

      "identifier": "CustomerCountry",  

      "name": "Customer billing country",  

      "paramsSchema": {  

        "type": "object",  

        "properties": {  

          "comparator": {  

            "type": "string",  

            "description": "Comparator",  

            "enum": [  

              "in",  

              "notin"  

            ]  

          },  

          "countries": {  

            "type": "array",  

            "description": "Countries",  

            "items": {  

              "type": "string",  

              "description": "Country",  

              "enum": [  

                "AT",  

                "DE",  

                "CH"  

              ]  

            }  

          }  

        },  

        "additionalProperties": false,  

        "required": [  

          "comparator",  

          "countries"  

        ]  

      }  

    }  

  ]  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/listRoutingConstraints' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password