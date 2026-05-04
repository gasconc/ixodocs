---
title: Delete
summary: ' TokenEx API v2  Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/token-services'
tags:
- https-test-api-tokenex-com-token-delete
- request-https-documentation-ixopay-com-modules-api-tokenex-token-servicesv-delete-request-direct-link-request
- header-parameters
- body
- api
- json
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-delete
portal: ixopay-modules
updated: '2026-05-04'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Token Services](https://documentation.ixopay.com/modules/api/tokenex/token-services)
  * Delete

# Delete
```
POST 
## https://test-api.tokenex.com/v2/Token/Delete

```**Delete** will remove the sensitive data element and corresponding token from your token vault.
info
The Delete function is only applicable to vaulted tokenization. Delete will return an error if a vaultless tokenization profile is specified in the `tx-tokenex-id` header.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-delete#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier.
**Default value:**`YourVaultedTokenExID`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`APIKeyAssociatedWithYourVaultedTokenExID`

  * application/json

  * Body
  * Request Example

### Body
**token** stringrequired
The token that corresponds to the sensitive data element to be deleted from your token vault.
**Default value:**`TphDRnymQzVHWnYH6S`
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-delete#responses "Direct link to Responses")
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
**referenceNumber** string
**Example:**`210424812110512863491`
**message** string
**Example:**`Token Deleted`
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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
## https://test-api.tokenex.com/v2/Token/Delete

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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
## https://test-api.tokenex.com/v2/Token/Delete

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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
## https://test-api.tokenex.com/v2/Token/Delete

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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
## https://test-api.tokenex.com/v2/Token/Delete

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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
## https://test-api.tokenex.com/v2/Token/Delete

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "210424812110512863491",  

  "message": "Token Deleted"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Token/Delete' \  
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