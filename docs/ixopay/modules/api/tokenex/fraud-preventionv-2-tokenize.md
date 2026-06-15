---
title: Tokenize
summary: ' TokenEx API v2  Kount Fraud Preventionhttps://documentation.ixopay.com/modules/api/tokenex/kount-fraud-prevention'
tags:
- https-test-api-tokenex-com-fraudprevention-tokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-fraud-preventionv-tokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-tokenize
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Kount Fraud Prevention](https://documentation.ixopay.com/modules/api/tokenex/kount-fraud-prevention)
  * Tokenize

# Tokenize
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```**Tokenize** is used to tokenize a credit card PAN and generate a Kount KHASH value that can be sent to Kount's fraud prevention platform.
info
The credit card PAN can be encrypted with the [TokenEx public RSA key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys) and provided in the data parameter as ciphertext. For an encrypted card number, set the encrypted parameter to true.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-tokenize#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`PCI`

  * application/json

  * Body
  * Request Example

### Body
**data** stringrequired
Credit card PAN to be tokenized.
**Default value:**`4111111111111111`
**encrypted** booleanrequired
Is the credit card PAN encrypted with the TokenEx public RSA key?
**Default value:**`false`
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/fraud-preventionv-2-tokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`411111245ShO1111`
**hash** string
**Example:**`93FBKM1EIVIXVP`
**referenceNumber** string
**Example:**`22013015153221301697`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Get Kount Hash Value and Tokenize Successful!`
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
tx-token-scheme — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/FraudPrevention/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "encrypted": false  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "hash": "93FBKM1EIVIXVP",  

  "referenceNumber": "22013015153221301697",  

  "success": true,  

  "error": "",  

  "message": "Get Kount Hash Value and Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/FraudPrevention/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "encrypted": false  
}'  

```
```
{
  "data": "4111111111111111",
  "encrypted": false
}

```