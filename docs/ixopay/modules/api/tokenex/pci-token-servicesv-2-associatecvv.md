---
title: AssociateCvv
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-associatecvv
- request-https-documentation-ixopay-com-modules-api-tokenex-pci-token-servicesv-associatecvv-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associatecvv
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * AssociateCvv

# AssociateCvv
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```**AssociateCvv** is used to associate a CVV with a tokenized credit card primary account number (PAN).
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associatecvv#request "Direct link to request")
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
The token to associate the CVV with.
**Default value:**`411111245ShO1111`
**cvv** stringrequired
The value of the CVV you wish to associate with the token.
**Default value:**`123`
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associatecvv#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**``
**firstSix** string
**Example:**``
**lastFour** string
**Example:**``
**referenceNumber** string
**Example:**`22012916031729707389`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Associated successfully`
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
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
  "token": "411111245ShO1111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cvv": "123"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cvv": "123"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012916031729707389",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cvv": "123"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cvv": "123"
}

```