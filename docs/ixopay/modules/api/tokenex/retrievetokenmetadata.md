---
title: RetrieveTokenMetadata
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-retrievetokenmetadata
- request-https-documentation-ixopay-com-modules-api-tokenex-retrievetokenmetadata-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/retrievetokenmetadata
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * RetrieveTokenMetadata

# RetrieveTokenMetadata
```
POST 
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```**RetrieveTokenMetadata** is used to obtain metadata which has been associated to a token.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/retrievetokenmetadata#request "Direct link to request")
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
The token that corresponds to the data element to be returned.
**Default value:**`411111245ShO1111`
```

{  

  "token": "411111245ShO1111"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/retrievetokenmetadata#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Token w/ CVV & network token

**Schema**
**associatedCVV** boolean
**Default value:**`true`
**Example:**`true`
**networkToken** string
**Example:**`4895370111192252`
**par** string
**Example:**`V0010113021015315044011117324`
**referenceNumber** string
**Example:**`02212051138123454260`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**``
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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
## https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata

```
```

{  

  "token": "411111245ShO1111"  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "associatedCVV": true,  

  "networkToken": "4895370111192252",  

  "par": "V0010113021015315044011117324",  

  "referenceNumber": "02212051138123454260",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/RetrieveTokenMetadata' \  
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