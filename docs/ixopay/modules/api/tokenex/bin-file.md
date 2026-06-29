---
title: Bin File
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services  Bin
  File'
tags:
- https-test-api-tokenex-com-pci-binfile
- request-https-documentation-ixopay-com-modules-api-tokenex-bin-file-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/bin-file
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * Bin File

# Bin File
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```info
BIN lookup is a subscription service. Contact your Customer Success Manager or sales@ixopay.com to gain access to our BIN lookup product. The endpoint requires an enterprise tier subscription.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/bin-file#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** string
Your TokenEx token vault identifier or vaultless tokenization profile.
**tx-apikey** string
Provides access to one or more functions in the TokenEx API.

  * application/json

  * Body
  * Request Example

### Body
```

{  

  "PAN": "5454545454545454"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/bin-file#responses "Direct link to Responses")
  * 200
  * 400

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**url** string
**Example:**``
**fileName** string
**Example:**`TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip`
**fileDateUtc** string
**Example:**`2023-10-17T07:36:30.0599124Z`
**referenceNumber** string
**Example:**`23102312162553243914`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**``
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```400
  * application/json

No schema
  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```RequestCollapse all
Base URL
Edit
Parameters
Show optional parameters
tx-tokenex-id — header
tx-apikey — header
Body
  * Example (from schema)
  * Request Example
```

```
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```
```

{  

  "PAN": "5454545454545454"  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```
```

```
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```
```

{  

  "PAN": "5454545454545454"  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```
```

```
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```
```

{  

  "PAN": "5454545454545454"  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```
```

```
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```
```

{  

  "PAN": "5454545454545454"  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```
```

```
```
GET 
## https://test-api.tokenex.com/v2/pci/BinFile

```
```

{  

  "PAN": "5454545454545454"  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "url": "<file download url>",  

  "fileName": "TokenEx_BINdata_2023-10-17T07:36:30.0599124Z.zip",  

  "fileDateUtc": "2023-10-17T07:36:30.0599124Z",  

  "referenceNumber": "23102312162553243914",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinFile' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d ''  

```
```

```