---
title: Supported Versions
summary: ' 3-D Secure Authentication  3DS Overviewhttps://documentation.ixopay.com/modules/docs/tokenex/3ds  Supported
  Versions'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-supported-versions-overview-direct-link-overview
- request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-supported-versions-request-parameters-direct-link-request-parameters
- response-parameters-https-documentation-ixopay-com-modules-docs-tokenex-supported-versions-response-parameters-direct-link-response-parameters
- version-sunset-https-documentation-ixopay-com-modules-docs-tokenex-supported-versions-version-sunset-direct-link-version-sunset
- request-response-examples-https-documentation-ixopay-com-modules-docs-tokenex-supported-versions-request-response-examples-direct-link-request-response-examples
- api
- json
- 3ds
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/supported-versions
portal: tokenex
updated: '2026-06-11'
related: []
---

* 3-D Secure Authentication
  * [3DS Overview](https://documentation.ixopay.com/modules/docs/tokenex/3ds)
  * Supported Versions

# Supported Versions
Gather card range and 3DS version information.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#overview "Direct link to Overview")
**Test URI** :   
**Prod URI** : 
**Required Permissions** : ThreeDSecureGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)* denotes a required field  
| HTTP Request Header  | Description  |  
| --- | --- |  
| tx-tokenex-id*  | Like a username, this ID logically segments your tokenized data.  |  
| tx-apikey*  | Controls your access to individual function in the API  |  
| tx-token-scheme  | Either the name or the numerical value of the [Token Scheme]../../appendix/universal-token-schemes.mdx) to be used  |  
| tx-tokenize  | True/False. Defaults to False. If False, a TokenEx token can be provided in the "data" parameter. If True, a PAN can be provided, and a TokenEx token will be returned in the response using the token scheme as indicated by the tx-token-scheme header.  |  
## Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#request-parameters "Direct link to Request Parameters")
* denotes a required field  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| data*  | string  | Plaintext PAN to be tokenized or existing TokenEx token to be detokenized and passed along to gather supported 3DS versions for a PAN.   
Plaintext PANs and detokenized values must be Luhn compliant.  |  
## Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#response-parameters "Direct link to Response Parameters")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| token  | string  | The TokenEx token associated with the PAN used in the request.  |  
| recommended3DSVersion  | object  | The highest supported 3DS version of the three servers - 3DS, ACS, and DS - for each `dsIdentifier` supplied in the `threeDSecureResponse`. The authentication request should be sent with the value returned in this field. See Version notice below.  |  
| threeDSecureResponse  | object array  | See ThreeDSecure Response table below.  |  
| thirdPartyStatusCode  | string  | The HTTP status code of the response provided by the 3DS provider  |  
| referenceNumber  | string  | Supply this value when interacting with TokenEx support about a response.  |  
| success  | bool  | True or False dependent upon whether or not TokenEx was able to contact the 3DS provider.  |  
| error  | string  | If an error occurs outside the `threeDSecureResponse`, this parameter will contain an error code and message.  |  
| message  | string  | A message in support of the TokenEx `success` and `error` parameters  |  
| ThreeDSecureResponse  | Type  | Description  |  
| --- | --- | --- |  
| threeDSMethodURL  | string  | Relevant for performing device fingerprinting outside the TokenEx iFrame.  |  
| acsStartProtocolVersion  | string  | The earliest protocol version that is supported by the Access Control Server.  |  
| acsEndProtocolVersion  | string  | The most recent protocol message version number that is supported for the Access Control Server.  |  
| acsInfoInd  | Object  | Provides additional information to the 3DS Server. The element lists all applicable values for the card range. See [Brand Specific Guidelines](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines) for additional values.   
01 = Authentication Available at ACS   
02 = Attempts Supported by ACS or DS   
03 = Decoupled Authentication Supported   
04 = Whitelisting Supported  |  
| threeDSServerStartVersion  | string  | The earliest protocol version that is supported by the 3DS Server.  |  
| threeDSServerEndVersion  | string  | The most recent protocol message version number that is supported by the 3DS Server.  |  
| directoryServerID  | string  | Registered Application Provider Identifier (RID) that is unique to the Payment System.  |  
| dsStartProtocolVersion  | string  | The earliest protocol version that is supported by the Directory Server.  |  
| dsEndProtocolVersion  | string  | The most recent protocol message version number that is supported for the Directory Server.  |  
| dsIdentifier  | string  | Indicates the Directory Server for which the card range is enrolled/eligible.   
For dual PANs multiple card ranges across Directory Servers will be provided.   
Values to be expected:   
AMEX   
CB   
DISCOVER   
JCB   
MASTERCARD   
VISA  |  
| threeDSServerTransID  | string  | Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction.  |  
## Version 2.1.0 Sunset[​](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#version-210-sunset "Direct link to Version 2.1.0 Sunset")
warning
The version 2.1.0 is being sunset by the following brands: Mastercard, Visa, Discover, JCB, Amex. Authentications requests sent using version 2.1.0 to the respective directory servers (`dsIdentifier`) will begin returning errors when the sunset dates are reached.  
| Brand  | Last Day of Support  | Sunset  |  
| --- | --- | --- |  
| Mastercard  | September 23, 2024  | September 24, 2024  |  
| Visa  | September 24, 2024  | September 25, 2024  |  
| Discover  | September 24, 2024  | September 25, 2024  |  
| JCB  | September 25, 2024  | September 26, 2024  |  
| Amex  | September 29, 2024  | September 30, 2024  |  
| Cartes Bancaires  | Unknown*  | Unknown*  |  
*No sunset information for Cartes Bancaires (CB) has been communicated to our service provider. Using 2.1.0 past September 24, 2024 should be done with caution.
## Request and Response Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#request-and-response-examples "Direct link to Request and Response Examples")
  * Request
  * Single Brand Response
  * Co-Branded Response
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#overview)
  * [Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#request-parameters)
  * [Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#response-parameters)
  * [Version 2.1.0 Sunset](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#version-210-sunset)
  * [Request and Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions#request-and-response-examples)
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

POST /[Test|Prod]/ThreeDSecure/SupportedVersions HTTP/1.1  

Content-Type: application/json  

tx-tokenex-id:YourTokenExID  

tx-apikey:YourAPIKey  

tx-token-scheme:4  

tx-tokenize:true  

  

{  

  "data": "4242424242424242"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02", "81", "84", "85", "86", "87", "88", "89"],  

      "directoryServerID": "A000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "MASTERCARD",  

      "threeDSServerTransID": "d30c45c3-d8bc-49f2-8799-b9da53b3d8ee"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```
```

{  

  "token": "a0cea820-23fb-4b8c-87ab-f44f0d513a79",  

  "recommended3dsVersion": {  

    "MASTERCARD": "2.2.0"  

  },  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_1",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "A000000004",  

      "dsIdentifier": "SANDBOX2",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    },  

    {  

      "threeDSMethodURL": "http://www.mc.com/methodURL_2",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.2.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v2",  

      "acsInfoInd": ["01", "02"],  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "directoryServerID": "M000000004",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "73a4f36a-17ef-4499-854a-f8128323f97d"  

    }  

  ],  

  "thirdPartyStatusCode": "200",  

  "referenceNumber": "021081300184804066092",  

  "success": true,  

  "error": "",  

  "message": "SupportedVersions Successful!"  

}  

```