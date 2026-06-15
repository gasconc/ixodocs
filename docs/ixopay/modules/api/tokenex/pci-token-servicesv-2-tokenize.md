---
title: Tokenize
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-tokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-pci-token-servicesv-tokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenize
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * Tokenize

# Tokenize
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```**Tokenize** is used to tokenize a credit card primary account number (PAN) and optionally associate a CVV with the token.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenize#request "Direct link to request")
### Header Parameters
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`PCI`
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
**data** stringrequired
The data to be tokenized.
**Default value:**`4111111111111111`
**cvv** string
The value of the CVV you want to associate with the token.
**Default value:**`123`
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`411111245ShO1111`
**firstSix** string
**Example:**`411111`
**lastFour** string
**Example:**`1111`
**referenceNumber** string
**Example:**`2201291553541132129`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Tokenize Successful! CVV is associated.`
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
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
  "data": "4111111111111111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
}'  

```
```
{
  "data": "4111111111111111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
}'  

```
```
{
  "data": "4111111111111111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
}'  

```
```
{
  "data": "4111111111111111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
}'  

```
```
{
  "data": "4111111111111111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/Tokenize

```
```

{  

  "data": "4111111111111111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "411111",  

  "lastFour": "1111",  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful! CVV is associated."  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "data": "4111111111111111",  
  "cvv": "123"  
}'  

```
```
{
  "data": "4111111111111111",
  "cvv": "123"
}

```