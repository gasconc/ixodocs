---
title: Tokenize
summary: ' TokenEx API v2  Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/token-services'
tags:
- https-test-api-tokenex-com-token-tokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-token-servicesv-tokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-tokenize
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * Tokenize

# Tokenize
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```**Tokenize** is used to tokenize a data element such as a Social Security number or health ID number.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-tokenize#request "Direct link to request")
### Header Parameters
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`ASCII`
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
**data** stringrequired
The data to be tokenized
**Default value:**`123456789`
```

{  

  "data": "4111111111111111"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-tokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`411111APT0Oa1111`
**referenceNumber** string
**Example:**`21042212110512863701`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Tokenize Successful!`
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-token-scheme — headerrequired
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "data": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```
```

{  

  "data": "4111111111111111"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```
```
{
  "data": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```
```

{  

  "data": "4111111111111111"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```
```
{
  "data": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```
```

{  

  "data": "4111111111111111"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```
```
{
  "data": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```
```

{  

  "data": "4111111111111111"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```
```
{
  "data": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/Tokenize

```
```

{  

  "data": "4111111111111111"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111APT0Oa1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "123456789"  
}'  

```
```
{
  "data": "123456789"
}

```