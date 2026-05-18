---
title: Tokenize CVV
summary: ' Mobile Solutions  Tokenize CVV'
tags:
- endpoints-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-cvv-endpoints-direct-link-endpoints
- api-parameters-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-cvv-api-parameters-direct-link-api-parameters
- request-https-documentation-ixopay-com-modules-docs-tokenex-tokenize-cvv-request-direct-link-request
- api
- tokenex
- ixopay
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv
portal: tokenex
updated: '2026-05-18'
related: []
---

* Mobile Solutions
  * Tokenize CVV

# Tokenize CVV
This endpoint allows you to associate a CVV value with a previously-generated token.
### Endpoints[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#endpoints "Direct link to Endpoints")  
| Environment  | URL  |  
| --- | --- |  
| Test  |   |  
### API Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#api-parameters "Direct link to API Parameters")  
| Parameter  | Data Type  | Description  |  
| --- | --- | --- |  
| TokenExID  | string  | The merchant's TokenEx ID.  |  
| Timestamp  | string  | The timestamp (UTC) when the hash is generated, in `yyyyMMddHHmmss` format.  |  
| AuthenticationKey  | string  | The Authentication Key generated on the merchant's server.  |  
| Token  | string  | The token for the previously-tokenized data with which you wish to associate a CVV.  |  
| CVV  | string  | The CVV to be associated with the provided Token.  |  
### Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#request "Direct link to Request")
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

}  

```### Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#response "Direct link to Response")
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

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

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

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

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

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

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

```  * [Endpoints](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#endpoints)
  * [API Parameters](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#api-parameters)
  * [Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#request)
  * [Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-cvv#response)
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

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

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "Token": "545454587415454",  

  "cvv": "123"  

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