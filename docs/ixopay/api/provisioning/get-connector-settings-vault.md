---
title: Settings vault
summary: ' Provisioning API  Settings vault'
tags:
- https-gateway-ixopay-com-api-provisioning-getconnectorsettings-adapterid-merchantguid
- request-https-documentation-ixopay-com-api-provisioning-connector-settings-vault-request-direct-link-request
- path-parameters
- responses-https-documentation-ixopay-com-api-provisioning-connector-settings-vault-responses-direct-link-responses
- generating-provisioning-api-key
- api
- json
- 3ds
- 3d-secure
- ixopay
source_url: https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector](https://documentation.ixopay.com/api/provisioning/connector)
  * Settings vault

# Settings vault
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```Returns the connector settings of a given vault adapter.
## Request[​](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault#request "Direct link to request")
### Path Parameters
**adapterId** stringrequired
Identifier of the adapter.
**merchantGuid** stringrequired
Identifier of the merchant.

## Responses[​](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The vault connector settings for the given adapter.
  * application/json

  * Schema
  * Example (auto)
  * Example

**Schema**
**success** booleanrequired
Whether the request was successful or not.
**baseConfig** object
List of properties, json-schema style.
When [creating a connector](https://documentation.ixopay.com/api/provisioning/create-connector) pass the key/value pairs in `config.extraData`.
**property name*** any
List of properties, json-schema style.
When [creating a connector](https://documentation.ixopay.com/api/provisioning/create-connector) pass the key/value pairs in `config.extraData`.
**vaultConfig** object
List of properties, json-schema style.
When [creating a connector](https://documentation.ixopay.com/api/provisioning/create-connector) pass the key/value pairs in `config.vault`.
**property name*** any
List of properties, json-schema style.
When [creating a connector](https://documentation.ixopay.com/api/provisioning/create-connector) pass the key/value pairs in `config.vault`.
**property name*** any
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
adapterId — pathrequired
merchantGuid — pathrequired
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
adapterId — pathrequired
merchantGuid — pathrequired
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector](https://documentation.ixopay.com/api/provisioning/connector)
  * Settings vault
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```
```
GET 
## https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid

```
```

{  

  "success": true,  

  "baseConfig": {},  

  "vaultConfig": {}  

}  

```
```

{  

  "baseConfig": [  

    {  

      "name": "integrationType",  

      "type": "select",  

      "required": false,  

      "description": "Type of Integration"  

    },  

    {  

      "name": "mergeCustomerDataFromRef",  

      "type": "bool",  

      "required": false,  

      "description": "Merge Customer Data from Reference Transaction"  

    },  

    {  

      "name": "collectMissing3DSecureData",  

      "type": "bool",  

      "required": false,  

      "description": "Collect Missing 3DS Browser Data through Redirect"  

    }  

  ],  

  "vaultConfig": [  

    {  

      "name": "dummyParam",  

      "type": "string",  

      "required": true,  

      "description": "Dummy Parameter"  

    },  

    {  

      "name": "enableTestMpi",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Test MPI"  

    },  

    {  

      "name": "threeDConfig",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs",  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              }  

            ]  

          }  

        },  

        {  

          "name": "password",  

          "type": "string",  

          "required": false,  

          "description": "Password"  

        },  

        {  

          "name": "countryCode",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Country Code (ISO 3166 three digit)"  

        },  

        {  

          "name": "MerchantID",  

          "type": "string",  

          "required": false,  

          "description": "MerchantID"  

        },  

        {  

          "name": "MerchantName",  

          "type": "string",  

          "required": false,  

          "description": "MerchantName"  

        },  

        {  

          "name": "MerchantURL",  

          "type": "string",  

          "required": false,  

          "description": "Merchant Shop URL"  

        }  

      ]  

    },  

    {  

      "name": "threeDV2Config",  

      "type": "object",  

      "required": false,  

      "description": "3D-Secure 2 Configuration (IXOPAY-hosted)",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": true,  

          "description": "Enabled"  

        },  

        {  

          "name": "acquirers",  

          "type": "array",  

          "required": false,  

          "description": "Acquiring BINs"  

        },  

        {  

          "items": {  

            "type": "object",  

            "properties": [  

              {  

                "name": "scheme",  

                "type": "string",  

                "required": true,  

                "description": "Scheme",  

                "enum": [  

                  "visa",  

                  "mastercard",  

                  "amex",  

                  "jcb",  

                  "discover",  

                  "unionpay",  

                  "diners"  

                ]  

              },  

              {  

                "name": "bin",  

                "type": "string",  

                "required": true,  

                "description": "BIN"  

              },  

              {  

                "name": "MerchantID",  

                "type": "string",  

                "required": true,  

                "description": "MerchantID"  

              }  

            ]  

          }  

        },  

        {  

          "name": "Merchant",  

          "type": "object",  

          "required": false,  

          "description": "Merchant Data",  

          "properties": [  

            {  

              "name": "mcc",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Category Code"  

            },  

            {  

              "name": "country",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Country Code"  

            },  

            {  

              "name": "name",  

              "type": "string",  

              "required": false,  

              "description": "Merchant Name"  

            }  

          ]  

        },  

        {  

          "name": "parameterConfig",  

          "type": "object",  

          "required": false,  

          "description": "Parameter Configuration",  

          "properties": [  

            {  

              "name": "challengeIndicator",  

              "type": "string",  

              "required": false,  

              "description": "Force Challenge Indicator",  

              "enum": [  

                "---",  

                "01 - No Preference",  

                "02 - No Challenge requested",  

                "03 - Challenge Requested",  

                "04 - Challenge Mandated"  

              ]  

            }  

          ]  

        },  

        {  

          "name": "preferredProtocolVersion",  

          "type": "string",  

          "required": false,  

          "description": "Preferred Protocol Version",  

          "enum": "any 2.1.0 2.2.0 latest"  

        }  

      ]  

    },  

    {  

      "name": "applePay",  

      "type": "object",  

      "required": false,  

      "description": "Apple Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "privateKey",  

          "type": "string",  

          "required": false,  

          "description": "Private Key"  

        }  

      ]  

    },  

    {  

      "name": "googlePay",  

      "type": "object",  

      "required": false,  

      "description": "Google Pay",  

      "properties": [  

        {  

          "name": "enabled",  

          "type": "boolean",  

          "required": false,  

          "description": "Enabled"  

        },  

        {  

          "name": "MerchantIdentifier",  

          "type": "string",  

          "required": false,  

          "description": "MerchantIdentifier"  

        },  

        {  

          "name": "useTestEnvironment",  

          "type": "boolean",  

          "required": false,  

          "description": "Test Environment Enabled"  

        }  

      ]  

    },  

    {  

      "name": "enablePassthroughToken",  

      "type": "boolean",  

      "required": false,  

      "description": "Enable Passthrough Tokens"  

    }  

  ],  

  "success": true  

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
curl -L 'https://gateway.ixopay.com/api/provisioning/getConnectorSettings/:adapterId/:merchantGuid' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```RequestCollapse all
Base URL
Edit
Auth
Username
Password
Parameters
adapterId — pathrequired
merchantGuid — pathrequired