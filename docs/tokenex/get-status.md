---
title: Get Status
summary: ' Network tokenization  Network Tokenization APIhttps://documentation.ixopay.com/modules/docs/tokenex/network-token-services  Get
  Status'
tags:
- api
- json
- tokenization
- tokenex
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/get-status
portal: tokenex
updated: '2026-10-26'
related: []
---

* Network tokenization
  * [Network Tokenization API](https://documentation.ixopay.com/modules/docs/tokenex/network-token-services)
  * Get Status

# Get Status
This method is used to retrieve the status of a network token.
  * **Test URI** : 
  * **Prod US URI** : 
  * **Prod EU URI** : 

**Required API Key Permissions** : NetworkTokenizationGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)
* denotes a required field  
| HTTP Request Header  | Description  |  
| --- | --- |  
| tx-tokenex-id*  | Like a username, this ID logically segments your tokenized data.  |  
| tx-apikey*  | Controls your access to individual functions in the API  |  
**Request Body Parameters** :  
| Parameter  | Description  |  
| --- | --- |  
| token  | The TokenEx token that represents the PAN and has an associated network token.  |  
| tokenReferenceId  | If there is more than one network token stored for that token, indicate which network token to use for this operation.  |  
**Response Body Parameters** :  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| success  | bool  | Indicator if the request was successfully processed by TokenEx.  |  
| referenceNumber  | string  | TokenEx reference number for the transaction.  |  
| error  | string  | TokenEx Error Code and human readable description.  |  
| message  | string  | Human readable message about response from TokenEx.  |  
| provider  | string  | Identifies which provider serviced the request: `CybersourceTMS` or `VisaTGS`.  |  
| thirdPartyStatusCode  | string  | Reserved field; not currently populated.  |  
| networkResponse.tokenState  | string enum  | The current state of the token, as returned by the token provider.  |  
| networkResponse.messageId  | string  | Unique message identifier (GUID format), generated per response.  |  
| networkResponse.conversationId  | string  | Message identifier assigned for the entire conversation (GUID format).  |  
| networkResponse.statusCode  | string  | The four-digit status code.  |  
| networkResponse.statusMessage  | string  | Human readable comments about the status. Null on success.  |  
  * Request
  * Response
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```
```

POST /v2/NetworkToken/GetStatus HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082509302518698472",  

  "error": "",  

  "message": "Network Tokenization GetStatus Successful!",  

  "provider": "CybersourceTMS",  

  "thirdPartyStatusCode": null,  

  "networkResponse": {  

    "tokenState": "ACTIVE",  

    "messageId": "5b7d8ca7-fa4c-4a93-8bd0-c64c1ebdbeee",  

    "conversationId": "a81530fc-0851-4c28-aff1-7dd5c150e84b",  

    "statusCode": "0000",  

    "statusMessage": null  

  }  

}  

```