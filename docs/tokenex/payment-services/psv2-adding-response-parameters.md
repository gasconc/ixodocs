---
title: Adding Response Parameters
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Adding Response Parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-adding-response-parameters-overview-direct-link-overview
- request-object-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-adding-response-parameters-request-object-direct-link-request-object
- request-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-adding-response-parameters-request-direct-link-request
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-adding-response-parameters-responses-direct-link-responses
- api
- tokenex
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters
portal: tokenex
updated: '2026-05-25'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * Adding Response Parameters

# Adding Response Parameters
Use regular expressions to extract data from the gateway's raw response
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#overview "Direct link to Overview")
The recommended approach to handling the result of a transaction through Payment Services is to deserialize the 3rd-party API's raw response so that the results can be processed by your application with the most flexibility.
An alternative to deserializing the raw response is to extract relevant pieces using regular expressions specific to each 3rd-party's API. This alternative - when applied to one or many gateways - can provide a set of consistent response parameters that are applicable to your application's use of Payment Services.
The `rawResponseExtracts` request parameter is applicable to all Payment Services requests. It is an array of `parameterName` and `regex` pairs. When sent, a corresponding `rawResponseExtracts` object is returned in the `gatewayResponse` below the `gatewayResponse.rawResponse`.
## Request Object[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#request-object "Direct link to Request Object")  
| rawResponseExtracts  | Type  | Description  |  
| --- | --- | --- |  
| parameterName  | string  | The name of the response parameter to be displayed in the `rawResponseExtracts`.  |  
| regex  | string  | Regular expression to locate relevant information within the `gatewayResponse.rawResponse`.   
  
See [Regex Handling](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling) for additional information.  |  
### Example Request[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#example-request "Direct link to Example Request")
Request
```

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```## Response Object[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#response-object "Direct link to Response Object")  
| rawResponseExtracts  | Type  | Description  |  
| --- | --- | --- |  
| successful  | array of strings  | This array contains a list of the `parameterName`s for which the respective regex found one or more matches within the `gatewayResponse.rawResponse`.  |  
| extracts  | object containing key-value-pairs  | Each parameter* that returned a match as `"":""` key-value pairs.   
*See [Multiple Match Handling](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#multiple-match-handling)  |  
| issues  | array of `parameterName` and `message` strings  | This array contains a list of the `parameterName`s for which a match was not returned or other issue occurred - such as being an invalid regex or evaluation timeout.  |  
| - parameterName  | string  |  `parameterName` as specified in the request  |  
| - message  | string  | Details the issue that occurred during processing which prevented the parameter from being added to the extracts.  |  
### Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#example-responses "Direct link to Example Responses")
  * All Parameters Return Match
  * Some Parameters Return Match
  * Multiple Matches
  * Invalid Regex
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```### Multiple Match Handling[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-adding-response-parameters#multiple-match-handling "Direct link to Multiple Match Handling")
When a regex returns multiple matches, the `parameterName` is added to the `successful` array and the matches are added to the `extracts` with the `parameterName` incremented + 1 for each match. See the Multiple Matches example response above.
  
```

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

``````

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

``````

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  ... // other request parameters  

  "rawResponseExtracts": [  

    {  

      "parameterName": "rawAVS",  

      "regex": "(?<=\\\"avsResultRaw\\\":\\\")([0-9])"  

    },  

    {  

      "parameterName": "rawCVC",  

      "regex": "(?<=\\\"cvcResultRaw\\\":\\\")([A-Z0-9])"  

    }  

  ]  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"007616\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1udPUR06K21T2pK15sZICRDNH3i7l\",\"threeDOffered\":\"false\",\"networkTxReference\":\"8R5EU8USE1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"c999iiVdDDG\"},\"pspReference\":\"RH3QB8XG3HNG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910202791562606",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054879\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"tc5eEJbpqabYyNTZMBG7Aq2p1OLDM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"VXDIBTAUR1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"388483Z3TMS\"},\"pspReference\":\"D35X2L9CCF8B8P65\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawAVS",  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "retryAdvice",  

          "message": "(?<=\\\"retryAdvice\\\":\\\")([A-Z0-9]{1,2}) failed to return a match."  

        }  

      ],  

      "extracts": {  

        "rawAVS": "2",  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910234677457598",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"025069\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"DyvGpymAz4Jw29sbWCiGYtc8Nmk7e\",\"threeDOffered\":\"false\",\"networkTxReference\":\"CKPQDVGCQ1219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"XCXCMZWKHSJ\"},\"pspReference\":\"XBZ8KVZ4F7TG5S82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC",  

        "AVSValues"  

      ],  

      "extracts": {  

        "rawCVC": "U",  

        "AVSValues1": "2 Neither postal code nor address match",  

        "AVSValues2": "2"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "23121910290213647798",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"085877\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"wM67LEcYKDQ0A7Cvm37ppNiQclr58\",\"threeDOffered\":\"false\",\"networkTxReference\":\"7OO8NM2131219\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"CX5ZZCX6N8W\"},\"pspReference\":\"LJMN98PV7NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"merchantResponseParamDemo\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "rawResponseExtracts": {  

      "successful": [  

        "rawCVC"  

      ],  

      "issues": [  

        {  

          "parameterName": "AVSValues",  

          "message": "Regex failed processing: Invalid pattern '(?<=\\\"avs[a-zA-Z]+\\\":\\\")([a-zA-Z0-9 ]+' at offset 38. Not enough )'s."  

        }  

      ],  

      "extracts": {  

        "rawCVC": "U"  

      }  

    },  

    ... // other gatewayResponse parameters  

  },  

  "referenceNumber": "2312191031106105958",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```