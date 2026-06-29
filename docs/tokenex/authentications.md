---
title: Authentications
summary: ' 3-D Secure Authentication  3DS Overviewhttps://documentation.ixopay.com/modules/docs/tokenex/3ds'
tags:
- message-categories-https-documentation-ixopay-com-modules-docs-tokenex-authentications-message-categories-direct-link-message-categories
- requestor-authentication-indicator-https-documentation-ixopay-com-modules-docs-tokenex-authentications-requestor-authentication-indicator-direct-link-requestor-authentication-indicator
- device-channel-https-documentation-ixopay-com-modules-docs-tokenex-authentications-device-channel-direct-link-device-channel
- version-https-documentation-ixopay-com-modules-docs-tokenex-authentications-version-direct-link-version
- version-validations-https-documentation-ixopay-com-modules-docs-tokenex-authentications-version-validations-direct-link-version-validations
- directory-server-identifiers-https-documentation-ixopay-com-modules-docs-tokenex-authentications-directory-server-identifiers-direct-link-directory-server-identifiers
- test-environment-https-documentation-ixopay-com-modules-docs-tokenex-authentications-test-environment-direct-link-test-environment
- production-environment-https-documentation-ixopay-com-modules-docs-tokenex-authentications-production-environment-direct-link-production-environment
- construct-request-https-documentation-ixopay-com-modules-docs-tokenex-authentications-construct-request-direct-link-construct-request
- request-body-creation-https-documentation-ixopay-com-modules-docs-tokenex-authentications-request-body-creation-direct-link-request-body-creation
source_url: https://documentation.ixopay.com/modules/docs/tokenex/authentications
portal: tokenex
updated: '2026-06-29'
related: []
---

* 3-D Secure Authentication
  * [3DS Overview](https://documentation.ixopay.com/modules/docs/tokenex/3ds)
  * Authentications

# Authentications
Passing transaction and cardholder data for authentication.
The Authentications request body is the heart of the authentication process. It can contain information about the merchant, cardholder, transaction, client browser, and preferences for how the authentication and a potential challenge is to be handled. The smallest authentication request body is about the same size as what is necessary for an authorization or purchase request to payment gateway and those requests share a lot of the same data. The data elements required for an authentication request are determined by the transaction type ([Message Categories](https://documentation.ixopay.com/modules/docs/tokenex/authentications#message-categories)), authentication type ([Requestor Authentication Indicator](https://documentation.ixopay.com/modules/docs/tokenex/authentications#requestor-authentication-indicator)), transaction origination ([Device Channel](https://documentation.ixopay.com/modules/docs/tokenex/authentications#device-channel)), and which ([3DS version](https://documentation.ixopay.com/modules/docs/tokenex/authentications#3ds-version)) of the EMVCo specification is to be used.
## Message Categories[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#message-categories "Direct link to Message Categories")
All authentication requests are either a Payment Authentication (PA) or Non-Payment Authentication (NPA). Examples of PA requests are purchases for goods or services, account funding, prepaid activation and load, check acceptance, or quasi-cash transactions. NPA requests are for situations where identity verification and account confirmation are desired, but no monetary transaction is occurring. An example of an NPA request is adding a card to a mobile wallet, where the authentication can happen outside the payment process.
## Requestor Authentication Indicator[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#requestor-authentication-indicator "Direct link to Requestor Authentication Indicator")
The Authentication Indicator goes further than the Message Category to specify what type of authentication is being requested: a one-time payment transaction, a recurring transaction, installment transaction, adding a card to a mobile wallet, maintaining card information on file, or cardholder verification. This data element provides additional context for the ACS to determine the best approach for handling an authentication request.
## Device Channel[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#device-channel "Direct link to Device Channel")
The device channel is the source of the authentication request. There are three device channels: App, Browser (BRW), and 3DS Requestor Initiated (3RI). TokenEx currently supports Browser and 3RI.
  * App - transaction is originating from a mobile app provided by the 3DS requestor.
  * Browser - transaction is originating from a website utilizing a browser.
  * 3RI - merchant-initiated confirmation of account information and cardholder authentication with no direct cardholder present. For example, a subscription-based merchant confirming an account is still valid prior to a recurring purchase.

## 3DS Version[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#3ds-version "Direct link to 3DS Version")
TokenEx supports EMVCo 3-D Secure versions 2.1.0 and 2.2.0. The full specifications for these versions can be downloaded as PDFs [here](https://www.emvco.com/emv-technologies/3d-secure/).  
When building your request body, use the TokenEx property corresponding to the EMVCo spec's property. If additional research is needed to build a specific request body, the [TokenEx : EMVCo Property Mapping](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-emvco-property-mapping) can be used to assist.
Version 2.2.0 introduces additional data elements, support for Decoupled Authentication, Delegated Authentication, and low-exemption requests based off transaction risk analysis (TRA) or Trusted Merchant (whitelist) status.
TokenEx is unable to perform 3DS authentication for cards not enrolled in 3DS versions 2.1.0 or 2.2.0,  
Use [Supported Versions](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions) to check a card's enrollment status before building the authentication request.
### Version Validations[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#version-validations "Direct link to Version Validations")
TokenEx will validate the request against the version specified by the `MessageVersion` property before 3DS processing, returning an error response specific to the version when necessary. If the `MessageVersion` property is omitted, TokenEx will attempt validation against 2.2.0 first, falling back to 2.1.0 if unsuccessful. If 2.1.0 validations are also unsuccessful, an error response specifying the issue will be returned.
## Directory Server Identifiers[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#directory-server-identifiers "Direct link to Directory Server Identifiers")
### Test Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#test-environment "Direct link to Test Environment")
In the **Test environment** , two directory server identifiers are available:
  * **SANDBOX_DS** – Use this identifier for running test cases.
  * **SANDBOX2** – Used to test resilience in handling co-branded cards, where a single card may be associated with multiple directory servers.

While **SANDBOX_DS** is required for successful authentication in test cases, hardcoding this value is strongly discouraged. Instead, ensure your implementation dynamically retrieves the appropriate directory server identifier from the `threeDSecureResponse[?].dsIdentifier` field provided in the Supported Versions response. This approach ensures compatibility with future updates or changes to directory server identifiers.
### Production Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#production-environment "Direct link to Production Environment")
In the **Production environment** , the available directory server options are based on card brands:
  * **AMEX**
  * **CB** (Cartes Bancaires)
  * **DISCOVER**
  * **JCB**
  * **MASTERCARD**
  * **VISA**

For co-branded cards or scenarios involving multiple directory servers, merchants should dynamically select the preferred directory server using the `threeDSecureResponse[?].dsIdentifier` field. The decision should be based on business criteria such as payment authorization costs or the protections offered by each brand.
## Construct Request[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#construct-request "Direct link to Construct Request")
**Test URI** :   
**Prod URI** : 
**Required Permissions** : ThreeDSecureGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)* denotes a required field  
| HTTP Request Header  | Description  |  
| --- | --- |  
| tx-tokenex-id*  | Like a username, this ID logically segments your tokenized data.  |  
| tx-apikey*  | Controls access to individual functions of the API  |  
| tx-token-scheme  | Either the name or the numerical value of the [Token Scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) to be used  |  
| tx-tokenize  | True/False. Defaults to False. If False, a TokenEx token can be provided in the "number" parameter within the "CardDetails" object. If True, a PAN can be provided, and a TokenEx token will be returned in the response using the token scheme as indicated by the tx-token-scheme header.  |  
### Request Body Creation[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#request-body-creation "Direct link to Request Body Creation")
When building the authentication request there are a couple best practices:
  * If the data is available, send it. More data reduces the risk of a challenge.
  * Never send junk data. Junk data can prompt unnecessary challenges and authentication failures.

All [Authentications request properties](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-emvco-property-mapping) (TokenEx : EMVCo)
Linking Device Fingerprint to Authentication
Link a device fingerprint to the authentication by sending the `threeDSServerTransID` from either the SupportedVersions `threeDSecureResponse` or Iframe Tokenize event's `threeDSecureResponse` in the `ServerTransactionId` parameter.
### Request Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#request-examples "Direct link to Request Examples")
  * 2.1.0-PA-BRW-Frictionless
  * 2.2.0-PA-BRW-Frictionless
  * 2.1.0-NPA-BRW-Frictionless
  * 2.2.0-NPA-BRW-Frictionless
  * 2.1.0-PA-BRW-Challenge
  * 2.2.0-PA-BRW-Challenge
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```## Response Body Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#response-body-examples "Direct link to Response Body Examples")
### Successful Authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#successful-authentication "Direct link to Successful Authentication")
  * 2.1.0-PA-BRW-Frictionless
  * 2.2.0-PA-BRW-Frictionless
  * 2.1.0-NPA-BRW-Frictionless
  * 2.2.0-NPA-BRW-Frictionless
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```### Not Authenticated[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#not-authenticated "Direct link to Not Authenticated")
  * TransStatus:N
  * TransStatus:U
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```### Challenged Authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#challenged-authentication "Direct link to Challenged Authentication")
  * 2.1.0-PA-BRW-Challenge
  * 2.2.0-PA-BRW-Challenge
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```### Validation Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/authentications#validation-examples "Direct link to Validation Examples")
  * TokenEx Validation
  * Downstream Validation
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```  * [Message Categories](https://documentation.ixopay.com/modules/docs/tokenex/authentications#message-categories)
  * [Requestor Authentication Indicator](https://documentation.ixopay.com/modules/docs/tokenex/authentications#requestor-authentication-indicator)
  * [Device Channel](https://documentation.ixopay.com/modules/docs/tokenex/authentications#device-channel)
  * [3DS Version](https://documentation.ixopay.com/modules/docs/tokenex/authentications#3ds-version)
    * [Version Validations](https://documentation.ixopay.com/modules/docs/tokenex/authentications#version-validations)
  * [Directory Server Identifiers](https://documentation.ixopay.com/modules/docs/tokenex/authentications#directory-server-identifiers)
    * [Test Environment](https://documentation.ixopay.com/modules/docs/tokenex/authentications#test-environment)
    * [Production Environment](https://documentation.ixopay.com/modules/docs/tokenex/authentications#production-environment)
  * [Construct Request](https://documentation.ixopay.com/modules/docs/tokenex/authentications#construct-request)
    * [Request Body Creation](https://documentation.ixopay.com/modules/docs/tokenex/authentications#request-body-creation)
    * [Request Examples](https://documentation.ixopay.com/modules/docs/tokenex/authentications#request-examples)
  * [Response Body Examples](https://documentation.ixopay.com/modules/docs/tokenex/authentications#response-body-examples)
    * [Successful Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentications#successful-authentication)
    * [Not Authenticated](https://documentation.ixopay.com/modules/docs/tokenex/authentications#not-authenticated)
    * [Challenged Authentication](https://documentation.ixopay.com/modules/docs/tokenex/authentications#challenged-authentication)
    * [Validation Examples](https://documentation.ixopay.com/modules/docs/tokenex/authentications#validation-examples)
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:GUID  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:false  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71", // TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201153136"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "2303779999000283",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0000",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 1,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number": "2303779950000012",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 2,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 4,  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.1.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": false,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardDetails": {  

    "Number": "2303779999000408",  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201091950"  

  },  

  "TransactionType": 1  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "ServerTransactionId": "value from prior threeDSecureResponse",  

  "MethodCompletionIndicator": 2,  

  "MessageVersion": "2.2.0",  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavascriptEnabled": false,  

    "Language": "en-us",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "AcquirerBin": "0000000",  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "CardDetails": {  

    "Number":"2303779950000061",  

    "CardExpiryDate":"2112",  

    "AccountType":2  

  },  

  "ChallengeWindowSize": 2,  

  "DeviceChannel": 2,  

  "DirectoryServerIdentifier": "SANDBOX_DS",  

  "GenerateChallengeRequest": true,  

  "MerchantDetails": {  

    "AcquirerMerchantId": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "MessageCategory": 1,  

  "NotificationUrl": "https://merchant.endpoint-for-notifications.com",  

  "AuthenticationIndicator": 1,  

  "PurchaseDetails": {  

    "Amount": 1000,  

    "Currency": "840",  

    "Exponent": 2,  

    "Date": "20211201171425"  

  },  

  "TransactionType": 1  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "76d5b612-ac0f-45a3-8166-3d5f99faf568",  

    "acsTransID": "889d32d1-a9d1-45f2-b49c-824f4a9bd233",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "7e01b292-b362-4a74-add5-9adccb7014f5"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "2112011518481842068",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "0cb36a1e-6d00-49d0-aea8-351f97b5fa71",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "dcda6541-dc32-442e-a077-737e627ef58d",  

    "acsTransID": "4c0c8196-49ea-40cb-83d0-94201eebb1a5",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "721167be-356f-4dc4-bae7-25bb347ef2ae"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117264319298974",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "cc5faf34-f0ce-46a0-a170-5776b1dbd6ec",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "02",  

    "dsTransID": "7cd3e528-463f-46c0-8c80-f5cab2c98a2a",  

    "acsTransID": "5e5bf9b7-4993-471b-8b24-c52d8d5a6c2c",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "ce709bae-0472-430e-8f28-e3ae480d71b8"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115200329495003",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "b54fa860-3e08-4c06-a860-2a72bdd8bad7",  

  "threeDSecureResponse": {  

    "transStatus": "Y",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=", // Mapped to threeDSecure.cavv.  

    "eci": "05",  

    "dsTransID": "210f12af-8129-4b0b-bfac-6c720535fc35",  

    "acsTransID": "fc6b0d98-5e7b-4fbf-8148-a49e5df36d64",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "threeDSServerTransID": "a6e5af5a-100a-4443-b4d6-1229cfce2263"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117301461470093",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "c87a186b-52d5-440b-8d8e-3f29ff87f98a",  

  "threeDSecureResponse": {  

    "acsTransID": "def3cb82-17df-4e91-9340-70dac4211d95",  

    "dsTransID": "dd8167e4-7bf1-4599-8e4c-2ca95472aa1d",  

    "eci": "00",  

    "transStatus": "N",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "threeDSServerTransID": "49261f3f-fddf-490b-8176-2af36f947bc4"  

  },  

  "referenceNumber": "23020211450569442058",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "8ca18e2d-348e-4f70-9442-b09317059dea",  

  "threeDSecureResponse": {  

    "acsTransID": "0db7d51a-ca9d-4731-9f53-e32286d2b8db",  

    "dsTransID": "8a7b63af-dc16-4daa-8c14-a4e7e8d6ff6c",  

    "eci": "02",  

    "transStatus": "U",  

    "transStatusReason": "01",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_ACS_MCTF_020200_05450",  

    "acsOperatorID": "ACS-V220-MTF-ACS-60230",  

    "authenticationValue": "BwABApFSYyd4l2eQQFJjAAAAAAA=",  

    "threeDSServerTransID": "c1add07e-0ac9-4b0d-98a8-ffa9d83d3477"  

  },  

  "referenceNumber": "23020212114776665365",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "cc8114d2-1909-4131-94d3-7303a93e8d78",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "480db009-6d17-4e59-829f-3e40b2c09b56",  

    "acsTransID": "bbbf3392-5249-4d48-940e-8d7ca9d61988",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjQ2YmUwNmM0LTdmOGYtNDYxNi1iZjQzLWFiNzU0YWJjM2YwOCIsImFjc1RyYW5zSUQiOiJiYmJmMzM5Mi01MjQ5LTRkNDgtOTQwZS04ZDdjYTlkNjE5ODgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",  

    "threeDSServerTransID": "46be06c4-7f8f-4616-bf43-ab754abc3f08"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120115203951283022",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "token": "39b13290-55c3-432c-9634-4b843b064e68",  

  "threeDSecureResponse": {  

    "transStatus": "C",  

    "acsURL": "https://acs-server.mc.msignia-dev.tech/api/v1/browser_challenges",  

    "acsChallengeMandated": "Y",  

    "authenticationType": "02",  

    "dsTransID": "f5be20d0-2a81-49e8-a819-0901f461b0ab",  

    "acsTransID": "57bf08de-490a-40bc-89d3-02c3874d23a7",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "00001ACS00001",  

    "acsOperatorID": "mX21mRFudf",  

    "encodedCReq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImZkZjIxZGU2LTUwMzYtNDBjOC1hYTZmLTYzMzdkMmRiZTE3MSIsImFjc1RyYW5zSUQiOiI1N2JmMDhkZS00OTBhLTQwYmMtODlkMy0wMmMzODc0ZDIzYTciLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDIiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0",  

    "threeDSServerTransID": "fdf21de6-5036-40c8-aa6f-6337d2dbe171"  

  },  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "21120117304271018520",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!"  

}  

```
```

{  

  "referenceNumber": "23020211441297290046",  

  "success": false,  

  "error": "ChallengeWindowSize must be in the range of 1 to 5",  

  "message": ""  

}  

```
```

{  

  "token": "3d404fe1-1604-49c9-a14f-b1e070389fe6",  

  "threeDSecureResponse": {  

    "errorCode": "4002",  

    "errorDetail": "dsIdentifier",  

    "errorDescription": "Data validation errors",  

    "threeDSServerTransID": "7a22613f-013d-48db-909a-8006c533ea9e",  

    "errorComponent": "S"  

  },  

  "referenceNumber": "23020211443642045454",  

  "success": true,  

  "error": "Data validation errors",  

  "message": "Authentications Failed!",  

  "thirdPartyStatusCode": "400"  

}  

```