---
title: Hash
summary: ' TokenEx API v2  Kount Fraud Preventionhttps://documentation.ixopay.com/modules/api/tokenex/kount-fraud-prevention'
tags:
- https-test-api-tokenex-com-fraudprevention-hash
- request-https-documentation-ixopay-com-modules-api-tokenex-fraud-preventionv-hash-request-direct-link-request
- header-parameters
- body
- api
- json
- tokenization
- tokenex
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-hash
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Kount Fraud Prevention](https://documentation.ixopay.com/modules/api/tokenex/kount-fraud-prevention)
  * Hash

# Hash
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```**Hash** is used to generate a Kount KHASH value from a tokenized credit card PAN that can be sent to Kount's fraud prevention platform.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-hash#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`

  * application/json

  * Body
  * Request Example

### Body
**token** stringrequired
The token representing the credit card PAN to hash.
**Default value:**`411111245ShO1111`
```

{  

  "token": "411111245ShO1111"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-hash#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**hash** string
**Example:**`41111193FBKM1EIVIXVP`
**referenceNumber** string
**Example:**`22013015293050518945`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Get Kount Hash Value Successful!`
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
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
  "token": "411111245ShO1111"
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
}'  

```
```
{
  "token": "411111245ShO1111"
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
}'  

```
```
{
  "token": "411111245ShO1111"
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
}'  

```
```
{
  "token": "411111245ShO1111"
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
}'  

```
```
{
  "token": "411111245ShO1111"
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Hash

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```

{  

  "hash": "41111193FBKM1EIVIXVP",  

  "referenceNumber": "22013015293050518945",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Hash' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111"  
}'  

```
```
{
  "token": "411111245ShO1111"
}

```