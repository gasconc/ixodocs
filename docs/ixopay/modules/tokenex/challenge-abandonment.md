---
title: Challenge Abandonment
summary: ' 3-D Secure Authentication  3DS Overviewhttps://documentation.ixopay.com/modules/docs/tokenex/3ds  Challenge
  Abandonment'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-challenge-abandonment-overview-direct-link-overview
- request-response-examples-https-documentation-ixopay-com-modules-docs-tokenex-challenge-abandonment-request-response-examples-direct-link-request-response-examples
- json
- 3ds
- tokenex
- ixopay
- authorization
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* 3-D Secure Authentication
  * [3DS Overview](https://documentation.ixopay.com/modules/docs/tokenex/3ds)
  * Challenge Abandonment

# Challenge Abandonment
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment#overview "Direct link to Overview")
This method closes the authentication process for challenges that are abandoned by the merchant. Possible reasons for abandoning the challenge would be to reduce checkout friction in the event that the merchant believes the transaction is low risk or if there is no regulatory obligation for the merchant to perform the challenge. It is expected that if the merchant decides to abandon a challenge request, the AbandonedChallenges method should be called to provide insight as to why the challenge was abandoned. While this is technically optional, not informing the system of the challenge abandonment could have a negative impact on the probability of approval from the issuer for a subsequent transaction.
**Test URI** :   
**Prod URI** : 
**Required Permissions** : ThreeDSecureGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)
**Body Parameters** : _* Denotes a required field_  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| serverTransactionId*  | string  | The threeDSServerTransID returned in the Authentications or Supported Versions response  |  
| abandonReasonCode  | enum  | Valid values are:   
1 - LowRisk   
2 - MarketAdoption   

  * LowRisk - can be used when the merchant feels the value of the transaction is too low for a challenge 
  

  * MarketAdoption - can be used when market regulations do not require Strong Customer Authentication 
  

 |  
## Request and Response Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment#request-and-response-examples "Direct link to Request and Response Examples")
  * Request
  * Response
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment#overview)
  * [Request and Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment#request-and-response-examples)
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```
```

PUT /[Test|Prod]/ThreeDSecure/AbandonedChallenges HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

  

{  

  "ServerTransactionId": "threeDSServerTransID",  

  "ReasonCode": 2  

}  

```
```

{  

  "threeDSecureResponse": "",  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021072917364705812422",  

  "success": true,  

  "error": "",   

  "message": "AbandonedChallenges Successful!"  

}  

```