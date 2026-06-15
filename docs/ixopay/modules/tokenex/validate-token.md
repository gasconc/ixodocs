---
title: ValidateToken
summary: ' TokenEx API v1  Token Services APIhttps://documentation.ixopay.com/modules/docs/tokenex/token-services-api'
tags:
- api
- tokenization
- tokenex
- ixopay
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/validate-token
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* TokenEx API v1
  * [Token Services API](https://documentation.ixopay.com/modules/docs/tokenex/token-services-api)
  * ValidateToken

# ValidateToken
**ValidateToken** is used to verify the specified token exists within your token vault.
warning
**TokenEx API v1** has been deprecated and is now in break/fix mode. All new enhancements are being added to [API v2](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-validatetoken).
info
The **ValidateToken** function is only applicable to vaulted tokenization. **ValidateToken** will return an error if a vaultless tokenization profile is specified in the `TokenExID` parameter.
**URI:** 
**Request Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| APIKey  | string  | See [Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentication)  |  
| TokenExID  | string  | Your TokenEx ID  |  
| Token  | string  | The token you wish to validate  |  
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```**Response Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Valid  | bool  | Indicator if token is valid  |  
| Success  | bool  | Indicator if the result was successful or not  |  
| ReferenceNumber  | string  | Reference number for the TokenEx transaction  |  
| Error  | string  | Error Code and human-readable description  |  
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true,  

  "Valid": true  

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

  "Valid": true  

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

  "Valid": true  

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

  "Valid": true  

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

  "Valid": true  

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

  "Valid": true  

}  

```