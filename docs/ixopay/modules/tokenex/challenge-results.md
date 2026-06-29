---
title: Challenge Results
summary: ' 3-D Secure Authentication  3DS Overviewhttps://documentation.ixopay.com/modules/docs/tokenex/3ds  Challenge
  Results'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-challenge-results-overview-direct-link-overview
- request-response-examples-https-documentation-ixopay-com-modules-docs-tokenex-challenge-results-request-response-examples-direct-link-request-response-examples
- json
- 3ds
- tokenex
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/challenge-results
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* 3-D Secure Authentication
  * [3DS Overview](https://documentation.ixopay.com/modules/docs/tokenex/3ds)
  * Challenge Results

# Challenge Results
Provides the authentication result following a challenge by submitting a previous Transaction ID.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results#overview "Direct link to Overview")
**Test URI** :   
**Prod URI** : 
**Required Permissions** : ThreeDSecureGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)
**Body Parameters** : * denotes a required field  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| serverTransactionId*  | string  | The threeDSServerTransID returned in the Authentications response  |  
## Request and Response Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results#request-and-response-examples "Direct link to Request and Response Examples")
  * Request
  * Response
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results#overview)
  * [Request and Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results#request-and-response-examples)
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```
```

GET|POST /[Test|Prod]/ThreeDSecure/ChallengeResults HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "serverTransactionId":"threeDSServerTransID"  

}  

```
```

{  

  "threeDSecureResponse": {  

    "threeDSServerTransID": "b3af1936-6646-444d-8d25-94d64bb83ff5",  

    "eci": "02",  

    "interactionCounter": "00",  

    "messageCategory": "01",  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "dsTransID": "62f00093-ccca-41d1-bd3a-f40d94268020",  

    "acsTransID": "6da01512-415c-494b-9a6f-5e2eec17fbc4",  

    "messageVersion": "2.1.0"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021091501075047646062",  

  "success": true,  

  "error": "",  

  "message": "ChallengeResults Successful!"  

}  

```