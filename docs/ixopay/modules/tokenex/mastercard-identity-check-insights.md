---
title: Mastercard Identity Check Insights
summary: ' 3-D Secure Authentication  Mastercard Identity Check Insights'
tags:
- request-formatting-https-documentation-ixopay-com-modules-docs-tokenex-mastercard-identity-check-insights-request-formatting-direct-link-request-formatting
- request-examples-https-documentation-ixopay-com-modules-docs-tokenex-mastercard-identity-check-insights-request-examples-direct-link-request-examples
- json
- tokenex
- ixopay
- acquirer
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* 3-D Secure Authentication
  * Mastercard Identity Check Insights

# Mastercard Identity Check Insights
Mastercard's Identity Check Insights (IDCI) can be leveraged to make frictionless requests with reduced latency and no challenge. IDCI does not provide liability shift for merchants, as this is not a request for an actual authentication, but rather a data only request and response. IDCI requests are indicated with a **Message Category of 80**.
An Authentication response's `transStatus` for an IDCI transaction will always be `"U"` because no verification of the cardholder's identity was performed and there is no liability shift.
Attention!
Only Mastercard PANs are valid for IDCI requests.
**Device Channel** : Browser, App, and 3RI Device Channels are all applicable to IDCI requests. However, 3RI is currently only supported for Version 2.2.0 requests.
## Request Formatting[​](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#request-formatting "Direct link to Request Formatting")
**Test URI** :   
**Prod URI** : 
**Required Permissions** : ThreeDSecureGeneralAccess
Request parameter requirements will follow the same rules as Message Category 01-PA, except the following optional parameters as applicable to the rules for the request's Version and Device Channel:  
| Optional Parameter  | Default Value if Empty  |  
| --- | --- |  
| MethodCompletionIndicator  | N  |  
| AuthenticationIndicator  | 1  |  
| NotificationURL  | _(No Value)_  |  
| TransactionType  | 1  |  
| ThreeRIIndicator  | 2  |  
Conditional Parameters
In instances where optional parameters are omitted, IDCI will handle the request as if the default values above were sent. **The default values can still trigger conditional logic** , for example, a request that follows the rules for version 2.2.0 and device channel 3RI that omits a `3RIIndicator` will trigger the conditional rules for `"ThreeRIIndicator": 2`. See example 2.2.0-IDCI-ThreeRI request.
## Request Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#request-examples "Direct link to Request Examples")
  * 2.1.0-IDCI-BRW
  * 2.2.0-IDCI-ThreeRI
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```## Response Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#response-examples "Direct link to Response Examples")
  * 2.1.0-IDCI-BRW
  * 2.2.0-IDCI-ThreeRI
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Request Formatting](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#request-formatting)
  * [Request Examples](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#request-examples)
  * [Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/mastercard-identity-check-insights#response-examples)
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "1",  

  "deviceChannel": "2",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "*/*",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432"  

  }  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/Authentications HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

tx-token-scheme: GUID  

tx-tokenize: false  

  

{  

  "messageCategory": "80",  

  "messageVersion": "2",  

  "deviceChannel": "3",  

  "AcquirerBin": "0000000",  

  "MerchantDetails": {  

    "acquirerMerchantID": "Acquirer Merchant Id",  

    "CategoryCode": "0001",  

    "CountryCode": "840",  

    "Name": "Merchant Name"  

  },  

  "BrowserInfo": {  

    "AcceptHeaders": "_/_",  

    "IpAddress": "Cardholder Browser Ip Address",  

    "JavaEnabled": true,  

    "JavaScriptEnabled": true,  

    "Language": "en-us",  

    "ColorDepth": "3",  

    "ScreenHeight": "1080",  

    "ScreenWidth": "1920",  

    "TimeZone": "300",  

    "UserAgent": "Cardholder Browser UserAgent"  

  },  

  "CardDetails": {  

    "Number": "f9c2f006-71d0-4a7e-b678-3f094ab561ba", //TokenEx token  

    "CardExpiryDate": "2112",  

    "AccountType": 2  

  },  

  "CardholderDetails": {  

    "Name": "Bobby Tables",  

    "EmailAddress": "bobby.tables@mailpuppy.com"  

  },  

  "ChallengeWindowSize": 2,  

  "PurchaseDetails": {  

    "Amount": "100",  

    "Currency": "840",  

    "Exponent": "2",  

    "Date": "20211122173432",  

    "RecurringExpiry": "20221231",  

    "RecurringFrequency": "10"  

  },  

  "InstallmentPaymentData": "3"  

}  

  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "dsTransID": "57b217f1-f117-4aae-a148-60a30964ce89",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.1.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "647dea33-6805-4b4c-8798-f2235be6553a"  

  },  

  "referenceNumber": "022012816174173777832",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "token": "f9c2f006-71d0-4a7e-b678-3f094ab561ba",  

  "threeDSecureResponse": {  

    "acsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "dsTransID": "c9ffa28d-31b0-4731-ad3d-6a55160fe445",  

    "eci": "04",  

    "transStatus": "U",  

    "transStatusReason": "80",  

    "messageVersion": "2.2.0",  

    "acsReferenceNumber": "3DS_LOA_DIS_MAST_020200_00281",  

    "threeDSServerTransID": "c1fbf4b7-6ab0-4b16-9648-8216cd9794e9"  

  },  

  "referenceNumber": "022012816253599411531",  

  "success": true,  

  "error": "",  

  "message": "Authentications Successful!",  

  "thirdPartyStatusCode": "200"  

}  

```