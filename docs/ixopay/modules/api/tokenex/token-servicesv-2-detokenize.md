---
title: Detokenize
summary: ' TokenEx API v2  Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/token-services'
tags:
- https-test-api-tokenex-com-token-detokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-token-servicesv-detokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-detokenize
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * Detokenize

# Detokenize
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```**Detokenize** is used to obtain a data element represented by the corresponding token.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-detokenize#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`9829959239157803`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`cg2gOPDzVE9i0QYrMOKGUPYapoTnmxYtoYxllN3r`

  * application/json

  * Body
  * Request Example

### Body
**token** stringrequired
The token that corresponds to the data element to be returned.
**Default value:**`TphDRnymQzVHWnYH6S`
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-detokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**value** string
**Example:**`4012888888881881`
**referenceNumber** string
**Example:**`21042212110512863491`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Detokenize Successful!`
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```RequestCollapse all
Base URL
Edit
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
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```
```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```
```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```
```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```
```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Detokenize

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "value": "4012888888881881",  

  "referenceNumber": "21042212110512863491",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Detokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "TphDRnymQzVHWnYH6S"  
}'  

```
```
{
  "token": "TphDRnymQzVHWnYH6S"
}

```