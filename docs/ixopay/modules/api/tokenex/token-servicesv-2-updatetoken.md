  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * UpdateToken


# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

Last updated on **Apr 10, 2026**
# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * UpdateToken


# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

Last updated on **Apr 10, 2026**
[Previous ValidateToken](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken)[Next ReTokenize](https://documentation.ixopay.com/modules/api/tokenex/retokenize)
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * UpdateToken


# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

Last updated on **Apr 10, 2026**
# UpdateToken

```
POST 
## https://test-api.tokenex.com/v2/Token/UpdateToken

```

**UpdateToken** is used to modify the data element represented by the corresponding token.
info
The UpdateToken function is only applicable to vaulted tokenization. UpdateToken will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
Supported token schemes
The UpdateToken function is only supported with the [GUID](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid) and [TOKEN](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token) vaulted token schemes.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`


  * application/json


### Body
**token** stringrequired
The token that corresponds to the data element to be updated.
**Default value:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**newData** stringrequired
The new data the token should represent.
**Default value:**`NewDataValue`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-updatetoken#responses "Direct link to Responses")
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
**Example:**`Token updated`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "Token updated"  
}  

```


```

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Token/UpdateToken' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  
  "newData": "NewDataValue"  
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
  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",
  "newData": "NewDataValue"
}

```

