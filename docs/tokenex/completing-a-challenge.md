---
title: Completing a Challenge
summary: ' 3-D Secure Authentication  Completing a Challenge'
tags:
- authentications-request-response-https-documentation-ixopay-com-modules-docs-tokenex-completing-challenge-authentications-request-response-direct-link-authentications-request-response
- challenge-request-https-documentation-ixopay-com-modules-docs-tokenex-completing-challenge-challenge-request-direct-link-challenge-request
- challenge-response-https-documentation-ixopay-com-modules-docs-tokenex-completing-challenge-challenge-response-direct-link-challenge-response
- handling-timeouts-https-documentation-ixopay-com-modules-docs-tokenex-completing-challenge-handling-timeouts-direct-link-handling-timeouts
- api
- 3ds
- tokenex
- ixopay
- iframe
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge
portal: tokenex
updated: '2026-05-25'
related: []
---

* 3-D Secure Authentication
  * Completing a Challenge

# Completing a Challenge
Implementing a 3DS challenge flow within the client's browser.
If a transaction is determined to be a high-risk by the ACS, the client will be required to pass an authentication challenge. The challenge is required when an [Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications)' `threeDSecureResponse` has a `"transStatus" : "C"`.
This challenge can be loaded into an iframe via a form that posts the `encdodedCreq` to the `acsURL` from the Authentications response. The form will return a challenge window (HTML with embedded styling and javascript) with which the client will interact. The challenge could require an OTP (one time passcode), the selection of one or more answers, or some other interaction. When the client completes the challenge, the challenge window posts the answer(s) to the ACS and a summary (notification) of the challenge results is sent to the notification URL provided in the Authentications request. When that notification is received, a request containing the relevant `threeDSServerTransID` can then be sent to [Challenge Results](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results). The response contains the results of that challenge, and if successful, any additional 3DS information (`eci`, `dsTransId`, `acsTransId`, etc.) needed to process the payment.
## Authentications Request and Response[​](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge#authentications-request-and-response "Direct link to Authentications Request and Response")
The Authentications request contains a few fields which influence a potential challenge.
* denotes a required field  
| Field Name  | Type  | Description  |  
| --- | --- | --- |  
| ChallengeWindowSize*  | numeric  | Determines size of the challenge window.   
1 - 250x400   
2 - 390x400   
3 - 500x600   
4 - 600x400   
5 - Full Screen (allows for responsive design)  |  
| NotificationUrl*  | string  | Endpoint the ACS will notify following challenge completion  |  
| GenerateChallengeRequest  | boolean  | If true or omitted, an encodedCReq (encoded Challenge Request) is available in the Authentications response. This encodedCReq is required to retrieve a challenge.  |  
An Authentications response which prompts a challenge will contain a couple fields needed to retrieve the challenge.  
| Field Name  | Type  | Description  |  
| --- | --- | --- |  
| acsURL  | string  | Endpoint to send the form data (action)  |  
| encodedCReq  | string  | Base64 encoded challenge request.  
This value should remain encoded.  
Contains the threeDSServerTransID, acsTransID, challengeWindowSize, messageType, and 3DS messageVersion.  |  
## Challenge Request[​](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge#challenge-request "Direct link to Challenge Request")
The challenge request is posted to the acsURL and returns a challenge window.
* denotes a required field  
| Field Name  | Type  | Description  |  
| --- | --- | --- |  
| creq*  | text  | encodedCReq from Authentications response  |  
| threeDSSessionData  | text  | Any values to be passed back in the Challenge Response to the NotificationUrl. 
  * Limited to 1024 bytes
  * Must be AlphaNumeric or Base64 encoded.

 |  
Example Challenge Request
```

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```The above could be an HTML form that targets an iframe. The response is HTML with embedded styling and JavaScript. An example challenge is below:
![Example OTP Challenge](https://documentation.ixopay.com/modules/assets/images/ExampleOTPChallenge-b7c0383205e9f56fff998e86f83596d7.jpg)
## Challenge Response[​](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge#challenge-response "Direct link to Challenge Response")
The Client's answer(s) are posted back to the ACS and the ACS sends a notification. That notification will contain the `cres` and the `threeDSSessionData` (if included in Challenge Request).  
| Field Name  | Type  | Description  |  
| --- | --- | --- |  
| cres  | text  | Base64 encoded challenge response.   
Contains the acsTransID, messageType, challengeCompletionInd, 3DS messageVersion, transStatus, and threeDSServerTransID.  |  
| threeDSSessionData  | text  | Any values passed in the Challenge Request's threeDSSessionData. 
  * Max 1024 bytes
  * AlphaNumeric or Base64 encoded

 |  
Example Notification
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

```## Retrieving Challenge Results[​](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge#retrieving-challenge-results "Direct link to Retrieving Challenge Results")
Following receipt of the notification from the ACS, the full challenge results can be retrieved from [Challenge Results](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results) endpoint.
## Handling Timeouts[​](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge#handling-timeouts "Direct link to Handling Timeouts")
Requestors have 30 seconds from receiving a challenged Authentications response to initiate a challenge request. If a Requestor does not intend to execute a challenge, the requestor should [abandon the challenge](https://documentation.ixopay.com/modules/docs/tokenex/challenge-abandonment).
```

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

```
```

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

``````

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

``````

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

```
```

POST https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

creq:eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImIzYWYxOTM2LTY2NDYtNDQ0ZC04ZDI1LTk0ZDY0YmI4M2ZmNSIsImFjc1RyYW5zSUQiOiI2ZGEwMTUxMi00MTVjLTQ5NGItOWE2Zi01ZTJlZWMxN2ZiYzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0  

threeDSSessionData:Anything1024BytesAndAlphaNumeric  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

cres=eyJhY3NUcmFuc0lEIjoiZDBjM2I5NjAtMTBkZS00ZDkzLTlhZTItNDk1MWM4OGQxN2M0IiwibWVzc2FnZVR5cGUiOiJDUmVzIiwiY2hhbGxlbmdlQ29tcGxldGlvbkluZCI6IlkiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidHJhbnNTdGF0dXMiOiJZIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI1M2I3NDQ5ZC0yYzVkLTQwNmEtYjZhNC0xNTVmMDVlZWUwY2IifQ&threeDSSessionData=Anything1024BytesAndAlphaNumeric  

```