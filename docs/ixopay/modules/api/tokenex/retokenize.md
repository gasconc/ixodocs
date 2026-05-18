---
title: ReTokenize
summary: ' TokenEx API v2  Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/token-services'
tags:
- https-test-api-tokenex-com-token-retokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-retokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/retokenize
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * ReTokenize

# ReTokenize
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```**ReTokenize** is used to share tokens between separate TokenEx ID's.
warning
Both the source and destination API keys must have the ReTokenize permission. Contact Technical Support via the Client Portal to enable this permission.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/retokenize#request "Direct link to request")
### Header Parameters
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx token scheme to be used to tokenize the data.
**Default value:**`ASCII`
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`9829959239157803`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`cg2gOPDzVE9i0QYrMOKGUPYapoTnmxYtoYxllN3r`
**tx-destination-tokenex-id** string
Your TokenEx destination token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-destination-apikey** string
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`
**tx-destination-token-scheme** string
The name or the numerical value of the TokenEx token scheme to be used to tokenize the data.
**Default value:**`PCI`

  * application/json

  * Body
  * Request Example

### Body
**token** stringrequired
The data to be tokenized
**Default value:**`123456789`
```

{  

  "token": "4111111111111111"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/retokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`411111245ShO1111`
**referenceNumber** string
**Example:**`21042212110512863701`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`ReTokenize Successful!`
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-token-scheme — headerrequired
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Show optional parameters
tx-destination-tokenex-id — header
tx-destination-apikey — header
tx-destination-token-scheme — header
Body
  * Example (from schema)
  * Request Example
```
{
  "token": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```
```

{  

  "token": "4111111111111111"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```
```
{
  "token": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```
```

{  

  "token": "4111111111111111"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```
```
{
  "token": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```
```

{  

  "token": "4111111111111111"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```
```
{
  "token": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```
```

{  

  "token": "4111111111111111"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```
```
{
  "token": "123456789"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Token/ReTokenize

```
```

{  

  "token": "4111111111111111"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "ReTokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/ReTokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "123456789"  
}'  

```
```
{
  "token": "123456789"
}

```