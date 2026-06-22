---
title: List
summary: ' Transaction API'
tags:
- https-gateway-ixopay-com-api-options-apikey-optionsname
- request-https-documentation-ixopay-com-api-transaction-options-list-request-direct-link-request
- path-parameters
- bodyrequired
- api
- json
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/api/transaction/options-list
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* Transaction API
  * [Options](https://documentation.ixopay.com/api/transaction/options)
  * List

# List
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```Retrieve an options list based on given option name.
## Request[​](https://documentation.ixopay.com/api/transaction/options-list#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API Key of Connector
**optionsName** stringrequired
**Possible values:** `<= 128 characters`
Options identifier of the appropriate adapter

  * application/json

  * Body
  * Example

### Body**required**
Parameters may be required dependent on the adapter
**parameters** object
**Possible values:** `<= 255 characters`
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```## Responses[​](https://documentation.ixopay.com/api/transaction/options-list#responses "Direct link to Responses")
  * 200

Options response
  * application/json

  * Schema
  * Example (auto)
  * Success
  * Error

**Schema**
**success** boolean
**options** object[]
  * Array [
**key** string
**value** string
**property name*** any
on success, returns an array containing key-value pairs
  * ]
**error** string
**property name*** any
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
apiKey — pathrequired
optionsName — pathrequired
Body required
  * Example (from schema)
  * Example
```
{
  "parameters": {}
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```
```
{
  "parameters": {}
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```
```
{
  "parameters": {}
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```
```
{
  "parameters": {}
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```
```
{
  "parameters": {}
}

```
```
POST 
## https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName

```
```

{  

  "parameters": {  

    "firstParam": "firstValue",  

    "secondParam": "secondValue"  

  }  

}  

```
```

{  

  "success": true,  

  "options": [  

    {  

      "key": "string",  

      "value": "string"  

    }  

  ],  

  "error": "string"  

}  

```
```

{  

  "success": true,  

  "options": {  

    "bank1": "Bank One",  

    "bank2": "Bank Two",  

    "bank3": "Bank Three",  

    "bank4": "Bank Four"  

  }  

}  

```
```

{  

  "success": false,  

  "errorMessage": "Given identifier 'someIdentifier' is invalid."  

}  

```
```
curl -L 'https://gateway.ixopay.com/api/v3/options/:apiKey/:optionsName' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "parameters": {}  
}'  

```
```
{
  "parameters": {}
}

```