---
title: Transaction Statuses
summary: ' 3-D Secure Authentication  Transaction Statuses'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-overview-direct-link-overview
- transaction-statuses-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-transaction-statuses-direct-link-transaction-statuses
- fully-authenticated-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-fully-authenticated
- authenticated-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-authenticated
- unavailable-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-unavailable
- attempted-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-attempted
- challenge-required-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-challenge-required
- decoupled-authentication-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-decoupled-authentication
- rejected-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-rejected
- informational-only-https-documentation-ixopay-com-modules-docs-tokenex-transaction-statuses-direct-link-informational-only
source_url: ''
portal: tokenex
updated: '2026-04-10'
related: []
---

* 3-D Secure Authentication
  * Transaction Statuses

# Transaction Statuses
Interpreting the results of a 3DS authentication.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#overview "Direct link to Overview")
The `threeDSecureResponse` parameter of an Authentication or Challenge Results API call can return a transaction status (`transStatus`) value that should guide a merchant's next steps. [Brand Specific Guidelines](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines) for a transaction status should always be consulted when available. This response parameter will always be present for the Payment Authentication message category and is conditional for Non-Payment Authentications.
When a special scenario is encountered that is not detailed below, please contact your Customer Success Manager or our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
## Transaction Statuses[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#transaction-statuses-1 "Direct link to Transaction Statuses")
### Y - Fully Authenticated[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#y "Direct link to Y - Fully Authenticated")
`Y` is a high confidence result that the transaction is not fraudulent and that the initiator of the transaction is authorized to use the card. Merchants receiving this status for a payment authentication may proceed with the payment authorization. Merchants receiving this status for a non-payment authentication can proceed with a happy-path flow for their use-case.
#### Fully Authenticated `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#fully-authenticated-threedsecureresponse-examples "Direct link to fully-authenticated-threedsecureresponse-examples")
  * Authentications Response
  * Challenge Results Response

```
{  
  "acsOperatorID": " MCD-LOA-SRV-JDFH-V201-12345",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "a4103609-0b23-4be3-b960-97e7382b351d",  
  "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  
  "dsTransID": "4f8f09f2-b6b1-4eec-bd6e-35a074d0c4a8",  
  "eci": "02",  
  "messageVersion": "2.1.0",  
  "threeDSServerTransID": "4f45b684-b78d-4cb1-b1f7-e2c3a524e73b",  
  "transStatus": "Y"  
}  

```

```
{  
  "threeDSServerTransID": "1ac059f1-9636-44ab-a2c4-d4d4fbc26fec",  
  "eci": "05",  
  "interactionCounter": "01",  
  "messageCategory": "01",  
  "transStatus": "Y",  
  "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  
  "dsTransID": "f491ab1d-1925-46fd-9ead-0f09b58f1dc3",  
  "messageVersion": "2.2.0",  
  "acsTransID": "3ecba808-6be5-4cd7-88c7-80a87bab66a9"  
}  

### N - Not Authenticated[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#n "Direct link to N - Not Authenticated")
`N` is a low confidence result in the legitimacy of the transaction. Merchants should interpret this result to mean that there is a high chance the action is fraudulent. Merchants should not proceed with a payment authorization with this authentication result as it is likely to result in a decline. This transaction status for Payment Authentications will be associated with a reason, [`transStatusReason`](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#transaction-status-reasons). Card brands may conditionally return a status reason for Non-Payment Authentications.
#### Not Authenticated `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#not-authenticated-threedsecureresponse-examples "Direct link to not-authenticated-threedsecureresponse-examples")
  * Authentications Response
  * Challenge Results Response
  * Canceled Challenge Response

```
{  
  "acsOperatorID": " MCD-LOA-SRV-JDFH-V201-12345",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "a62fbace-0ced-4e30-84bd-96d861f09ae4",  
  "dsTransID": "05def6d5-7474-4978-8c16-5d05d4bc8dd0",  
  "eci": "00",  
  "messageVersion": "2.1.0",  
  "threeDSServerTransID": "0ff12e4c-11d3-48bf-a760-04c92fd8b904",  
  "transStatus": "N",  
  "transStatusReason": "01"  
}  

```
{  
  "threeDSServerTransID": "25d30bd8-d16c-4f17-8553-32f3abc1aa92",  
  "eci": "02",  
  "interactionCounter": "01",  
  "messageCategory": "01",  
  "transStatus": "N",  
  "transStatusReason": "01",  
  "dsTransID": "508fc91e-3d03-42b4-9035-5bf36795d42a",  
  "messageVersion": "2.1.0",  
  "acsTransID": "b0a43842-679c-48ce-a01e-4f226fbb9cd1"  
}  

```
{  
   "threeDSServerTransID":"c8f1480d-dfa0-4bf8-8ae1-76c21ade652d",  
   "eci":"05",  
   "interactionCounter":"01",  
   "messageCategory":"01",  
   "transStatus":"N",  
   "transStatusReason":"01",  
   "challengeCancel":"01",  
   "dsTransID":"884d050a-2082-4a7c-a814-17ebb4e26228",  
   "messageVersion":"2.2.0",  
   "acsTransID":"e005a2dc-77e8-427b-b491-48f554f389aa"  
}  

### U - Unavailable[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#u "Direct link to U - Unavailable")
If the transaction is IDCI (Identity Check Insights), the `transStatus` will always be U. In other usages, `U` means that a technical issue occurred during the authentication attempt. This is not a rejection by the card issuer. This transaction status for Payment Authentications will be associated with a reason, [`transStatusReason`](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#transaction-status-reasons). Card brands may conditionally return a status reason for Non-Payment Authentications.
#### Unavailable `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#unavailable-threedsecureresponse-examples "Direct link to unavailable-threedsecureresponse-examples")
  * Challenge Results Response
  * IDCI Authentications Response
  * IDCI Authentications Response with DTI Block

```
{  
  "threeDSServerTransID": "1b4824bc-47f9-40a8-85cc-81efa6e30212",  
  "eci": "07",  
  "interactionCounter": "01",  
  "messageCategory": "01",  
  "transStatus": "U",  
  "transStatusReason": "01",  
  "dsTransID": "d8812654-7471-40b2-915a-35e78f23c138",  
  "messageVersion": "2.2.0",  
  "acsTransID": "630b7706-804e-4971-9c57-30908f85f38b"  
}  

```
{  
   "acsReferenceNumber":"3DS_LOA_DIS_MAST_020200_00281",  
   "acsTransID":"30ee4e2a-5fce-44b9-988e-74befaec40e1",  
   "authenticationValue" : "kXPigy146L6RrsjmhAFmaCLibwhH",  
   "dsTransID":"30ee4e2a-5fce-44b9-988e-74befaec40e1",  
   "eci":"04",  
   "messageVersion":"2.1.0",  
   "threeDSServerTransID":"1e5364d1-29a4-434d-9be7-3301a3a6c325",  
   "transStatus":"U",  
   "transStatusReason":"80"  
}  

```
{  
  "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  
  "acsTransID": "f3ae670a-ae3b-4727-9d77-af70b6a024b3",  
  "authenticationValue": "kXN8cmAe6L6RrsjmhAFnF+AtmE37",  
  "dsTransID": "f3ae670a-ae3b-4727-9d77-af70b6a024b3",  
  "eci": "04",  
  "messageExtension": [  
    {  
      "criticalityIndicator": false,  
      "data": {  
        "A000000004-maiqRes": {  
          "decision": "Good",  
          "reasonCode1": "A2",  
          "reasonCode2": "B1",  
          "score": "111",  
          "status": "Success"  
        }  
      },  
      "id": "A000000004-maiqRes",  
      "name": "MAIQ response"  
    }  
  ],  
  "messageVersion": "2.2.0",  
  "threeDSServerTransID": "2e968531-ef1d-4f17-8554-c09190852055",  
  "transStatus": "U",  
  "transStatusReason": "80"  
}  

### A - Attempted[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#a "Direct link to A - Attempted")
An attempt at processing the authentication was performed, but transaction could not be authenticated or cardholder identity verified. A proof of attempted authentication or verification is provided via the `authenticationValue`.
#### Attempted `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#attempted-threedsecureresponse-examples "Direct link to attempted-threedsecureresponse-examples")
  * Authentications Response

```
{  
  "acsOperatorID": "MCD-LOA-SRV-JDFH-V201-12345",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "a4103609-0b23-4be3-b960-97e7382b351d",  
  "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  
  "dsTransID": "4f8f09f2-b6b1-4eec-bd6e-35a074d0c4a8",  
  "eci": "02",  
  "messageVersion": "2.1.0",  
  "threeDSServerTransID": "4f45b684-b78d-4cb1-b1f7-e2c3a524e73b",  
  "transStatus": "A"  
}  

### C - Challenge Required[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#c "Direct link to C - Challenge Required")
[Completing a challenge](https://documentation.ixopay.com/modules/docs/tokenex/completing-a-challenge) is required to authenticate. Following receipt of challenge notification or 10 minutes have elapsed, the authentication results can be obtained from [Challenge Results](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results).
#### Challenge Required `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#challenge-required-threedsecureresponse-examples "Direct link to challenge-required-threedsecureresponse-examples")
  * Authentications Response

```
{  
  "acsChallengeMandated": "Y",  
  "acsOperatorID": "MCD-LOA-SRV-JDFH-V201-12345",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "6649ee45-c5ee-43dc-8e6f-4dcabc935255",  
  "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  
  "authenticationType": "02",  
  "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImY0NDE3MjBkLWJkMGYtNDdjMy1hNmI3LTJlNmY2Y2Q4NTQ5ZCIsImFjc1RyYW5zSUQiOiI2NjQ5ZWU0NS1jNWVlLTQzZGMtOGU2Zi00ZGNhYmM5MzUyNTUiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDMiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  
  "messageVersion": "2.1.0",  
  "threeDSServerTransID": "f441720d-bd0f-47c3-a6b7-2e6f6cd8549d",  
  "transStatus": "C"  
}  

### D - Decoupled Authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#d "Direct link to D - Decoupled Authentication")
This status means that [Decoupled Authentication](https://www.linkedin.com/pulse/what-decoupled-authentication-kevin-crockett/) is occurring and the authentication results can be obtained by polling the [Challenge Results](https://documentation.ixopay.com/modules/docs/tokenex/challenge-results) in one hour intervals or until the decoupled max time specified in the Authentications request expires.
#### Decoupled Authentication `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#decoupled-authentication-threedsecureresponse-examples "Direct link to decoupled-authentication-threedsecureresponse-examples")
  * Authentications Response

```
{  
  "acsChallengeMandated": "N",  
  "acsOperatorID": "mX21mRFudf",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "1e10ce60-713e-4366-979d-aeabaccd78b5",  
  "acsDecConInd": "Y",  
  "authenticationType": "04",  
  "cardholderInfo": "Additional authentication is needed for this transaction",  
  "dsTransID": "f5ce3d20-bb15-4741-8d3c-450500650a1e",  
  "messageVersion": "2.2.0",  
  "threeDSServerTransID": "965ece28-4878-42dc-9986-3e32ae115265",  
  "transStatus": "D"  
}  

### R - Rejected[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#r "Direct link to R - Rejected")
This transaction status for Payment Authentications will be associated with a reason, [`transStatusReason`](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#transaction-status-reasons). Card brands may conditionally return a status reason for Non-Payment Authentications.
#### Rejected `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#rejected-threedsecureresponse-examples "Direct link to rejected-threedsecureresponse-examples")
  * Authentications Response

```
{  
  "acsTransID": "26198118-a944-49a3-94b7-51d8363045dd",  
  "dsTransID": "7570ae12-db2c-4ada-b388-2233a6048010",  
  "eci": "07",  
  "transStatus": "R",  
  "transStatusReason": "06",  
  "messageVersion": "2.2.0",  
  "acsReferenceNumber": "3DS_LOA_ACS_MAIN_020200_00796",  
  "acsOperatorID": "3DS2.2.0Mar0055ACS",  
  "dsReferenceNumber": "VISA.V 17 0003",  
  "threeDSServerTransID": "f9a6bb05-1096-4237-b952-5e18a47e21c5"  
}  

### I - Informational Only[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#i "Direct link to I - Informational Only")
This status is only returned when the authentication request's challenge indicator value was 05, 05, or 07. The ACS acknowledges the 3DS Requestor’s preference to not challenge the transaction since the data sent was only for informational purposes.
#### Informational Only `threeDSecureResponse` Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#informational-only-threedsecureresponse-examples "Direct link to informational-only-threedsecureresponse-examples")
  * TRA Authentications Response

```
{  
  "acsOperatorID": "mX21mRFudf",  
  "acsReferenceNumber": "00001ACS00001",  
  "acsTransID": "89d4df77-aba4-404d-b905-1c4c774cbda6",  
  "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  
  "dsTransID": "fa556e1e-f28c-46b9-bc42-d1c933069e15",  
  "messageVersion": "2.2.0",  
  "threeDSServerTransID": "a7e047be-dd72-476a-99af-513f4c496bd6",  
  "transStatus": "I"  
}  

### Transaction Status Reasons[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-transaction-statuses#transaction-status-reasons "Direct link to Transaction Status Reasons")
A transaction status reason (`transStatusReason`) is returned for payment authentication `transStatus` values N, U, and R. Non-Payment Authentications may return this response parameter dependent upon the card brand.  
| Value  | Meaning  |  
| --- | --- |  
| 01  | Card authentication failed  |  
| 02  | Unknown Device  |  
| 03  | Unsupported Device  |  
| 04  | Exceeds authentication frequency limit  |  
| 05  | Expired Card  |  
| 06  | Invalid Card Number  |  
| 07  | Invalid transaction  |  
| 08  | No Card Record  |  
| 09  | Security Failure  |  
| 10  | Stolen Card  |  
| 11  | Suspected Fraud  |  
| 12  | Transaction not permitted to cardholder  |  
| 13  | Cardholder not enrolled in service  |  
| 14  | Transaction timed out at the ACS  |  
| 15  | Low confidence  |  
| 16  | Medium confidence  |  
| 17  | High confidence  |  
| 18  | Very high confidence  |  
| 19  | Exceeds ACS maximum challenges  |  
| 20  | Non-Payment transaction not supported  |  
| 21  | 3RI transaction not supported  |  
| 22  | ACS technical issue  |  
| 23  | Decoupled Authentication required by ACS but not requested by 3DS Requestor  |  
| 24  | 3DS Requestor Decoupled Max Expiry Time exceeded  |  
| 25  | Decoupled Authentication was provided insufficient time to authentication cardholder.   
ACS will not make attempt.  |  
| 26  | Authentication attempted but not performed by the cardholder.  |  
| 27-79  | Reserved for future EMVCo use. Values here are invalid until defined by EMVCo in future versions.  |  
| 80-99  | Reserved for use by specific card brands. [Brand Specific Guidelines](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines)  |