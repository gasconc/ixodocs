---
title: Tokenize
summary: ' Mobile Solutions'
tags:
- endpoints-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-endpoints-direct-link-endpoints
- api-parameters-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-api-parameters-direct-link-api-parameters
- request-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-request-direct-link-request
- api
- pci
- tokenex
- ixopay
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1
portal: tokenex
updated: '2026-04-28'
related: []
---

* Mobile Solutions
  * Tokenize

# Tokenize
This endpoint serves to generate a token based on the provided Token Scheme and data to be tokenized.
## Endpoints[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#endpoints "Direct link to Endpoints")  
| Environment  | URL  |  
| --- | --- |  
| Test  |   |  
## API Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#api-parameters "Direct link to API Parameters")  
| Parameter  | Data Type  | Description  |  
| --- | --- | --- |  
| TokenExID  | string  | The merchant's TokenEx ID.  |  
| Timestamp  | string  | The timestamp (UTC) when the hash is generated, in `yyyyMMddHHmmss` format.  |  
| AuthenticationKey  | string  | The Authentication Key generated on the merchant's server.  |  
| Data  | string  | The data to be tokenized.  |  
| TokenScheme  | enum  | The Token Scheme to be used to tokenize the provided data. See [Universal Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes).  |  
| UseExtendedBIN  | bool  | Optional parameter: Allows for 8 digit BIN to be returned in the tokenize response (Only available for PCI token scheme). Defaults to false.  |  
## Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#request "Direct link to Request")
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```## Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#response "Direct link to Response")
  * Response
  * UseExtendedBIN:true
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```  * [Endpoints](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#endpoints)
  * [API Parameters](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#api-parameters)
  * [Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#request)
  * [Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-1#response)
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "data": "5454545454545454",  

  "tokenScheme": "sixTOKENfour",  

  "cvv": "123",  

  "useExtendedBin": false  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "18010916143712345678",  

  "Token": "545454587415454",  

  "TokenHMAC": "QiuCu0FZuu0SUn2gMtRYQSHjkd30LgSf4QMM3yH1Dp0="  

  "FirstEight": "54545454"  

}  

```