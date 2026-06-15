---
title: DeleteToken
summary: ' TokenEx API v1  Token Services APIhttps://documentation.ixopay.com/modules/docs/tokenex/token-services-api'
tags:
- api
- tokenization
- tokenex
- ixopay
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/delete-token-1
portal: tokenex
updated: '2026-06-15'
related: []
---

* TokenEx API v1
  * [Token Services API](https://documentation.ixopay.com/modules/docs/tokenex/token-services-api)
  * DeleteToken

# DeleteToken
**DeleteToken** will remove the sensitive data element and corresponding token from your token vault.
warning
**TokenEx API v1** has been deprecated and is now in break/fix mode. All new enhancements are being added to [API v2](https://documentation.ixopay.com/modules/api/tokenex/token-servicesv-2-delete).
info
The **DeleteToken** function is only applicable to vaulted tokenization. **Delete** will return an error if a vaultless tokenization profile is specified in the `TokenExID` parameter.
**URI:** 
**Request Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| APIKey  | string  | See [Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentication)  |  
| TokenExID  | string  | Your TokenEx ID  |  
| Token  | string  | The token you wish to delete  |  
```

{  

  "APIKey": "YourAPIKey",  

  "TokenExID": "YourTokenExID",  

  "Token": "545454587415454"  

}  

```**Response Parameters**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Success  | bool  | Indicator if the result was successful or not  |  
| ReferenceNumber  | string  | Reference number for the TokenEx transaction  |  
| Error  | string  | Error Code and human-readable description  |  
```

{  

  "Error": "",  

  "ReferenceNumber": "15102913382030662954",  

  "Success": true  

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

  "Success": true  

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

  "Success": true  

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

  "Success": true  

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

  "Success": true  

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

  "Success": true  

}  

```