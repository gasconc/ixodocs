---
title: Get Kount Hash Value
summary: ' Fraud Solutions  Get Kount Hash Value'
tags:
- request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-kount-hash-value-request-parameters-direct-link-request-parameters
- tokenex
- ixopay
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/get-kount-hash-value
portal: tokenex
updated: '2026-05-18'
related: []
---

* Fraud Solutions
  * [Kount](https://documentation.ixopay.com/modules/docs/tokenex/fraud-prevention-services)
  * Get Kount Hash Value

# Get Kount Hash Value
Generate a Kount hash value that can be sent directly to Kount for fraud validation of a given PAN.
**URI:** 
## Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/get-kount-hash-value#request-parameters "Direct link to Request Parameters")  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| APIKey  | string  | See [Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentication)  |  
| TokenExID  | string  | Your TokenEx ID  |  
| Token  | string  | The token you wish to obtain a hash value for  |  
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```## Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/get-kount-hash-value#response-parameters "Direct link to Response Parameters")  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Hash  | string  | Hash value returned that can be sent to Kount  |  
| Success  | bool  | Indicator if the result was successful or not  |  
| ReferenceNumber  | string  | Reference number for the TokenEx transaction  |  
| Error  | string  | Error Code and human-readable description  |  
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```  * [Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/get-kount-hash-value#request-parameters)
  * [Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/get-kount-hash-value#response-parameters)
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Hash": "545454E58W8101GXHU4U"  

}  

```