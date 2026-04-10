  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * ValidateToken


# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

Last updated on **Apr 10, 2026**
# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * ValidateToken


# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

Last updated on **Apr 10, 2026**
[Previous Delete](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-delete)[Next UpdateToken](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken)
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * ValidateToken


# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

Last updated on **Apr 10, 2026**
# ValidateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/ValidateToken

```

**ValidateToken** is used to verify the specified token exists within your token vault.
info
The ValidateToken function is only applicable to vaulted tokenization. ValidateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id header`.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token to validate.
**Default value:**`TphDRnymQzVHWnYH6S`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**`Token is Valid`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token is Valid"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/ValidateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```

