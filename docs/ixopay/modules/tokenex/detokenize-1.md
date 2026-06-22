---
title: Detokenize
summary: ' TokenEx API v1  Token Services APIhttps://documentation.ixopay.com/modules/docs/tokenex/token-services-api'
tags:
- api
- tokenex
- ixopay
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/detokenize-1
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* TokenEx API v1
  * [Token Services API](https://documentation.ixopay.com/modules/docs/tokenex/token-services-api)
  * Detokenize

# Detokenize
**Detokenize** is used to obtain a data element represented by the corresponding token.
warning
**TokenEx API v1** has been deprecated and is now in break/fix mode. All new enhancements are being added to [API v2](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-detokenize).
**URI:** 
**Request Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| APIKey  | string  | See [Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentication)  |  
| TokenExID  | string  | Your TokenEx ID  |  
| Token  | string  | The token you wish to detokenize  |  
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```**Response Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Value  | string  | Sensitive data associated with the given token  |  
| Success  | bool  | Indicator if the result was successful or not  |  
| ReferenceNumber  | string  | Reference number for the TokenEx transaction  |  
| Error  | string  | Error Code and human-readable description  |  
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Value": "5454545454545454"  

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

  "Value": "5454545454545454"  

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

  "Value": "5454545454545454"  

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

  "Value": "5454545454545454"  

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

  "Value": "5454545454545454"  

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

  "Value": "5454545454545454"  

}  

```