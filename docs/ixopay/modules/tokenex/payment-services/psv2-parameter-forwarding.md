---
title: Parameter Forwarding
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Parameter Forwarding'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-overview-direct-link-overview
- differences-between-environments-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-differences-between-environments-direct-link-differences-between-environments
- request-object-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-request-object-direct-link-request-object
- request-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-request-direct-link-request
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-responses-direct-link-responses
- gateway-body-content-formats-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-gateway-bodycontent-formats-direct-link-gateway-bodycontent-formats
- json-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-parameter-forwarding-json-direct-link-json
- api
- json
- hmac
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * Parameter Forwarding

# Parameter Forwarding
Sending parameters for which a TokenEx gateway implementation does not have a suitable mapping
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#overview "Direct link to Overview")
TokenEx gateway implementations have a variety of parameters available to support merchant needs but not all of the mappings are suitable for every merchant.
When a TokenEx gateway parameter mapping is not suitable or present for your application, the `parameterForwards` object can be used to specify parameters that should be forwarded to the 3rd-party gateway's API. These parameters are merged into the request that Payment Services generates from the supported parameters (see [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)).
When a supported parameter is present in both the `parameterForwards` object and the generated request, this is referred to as a collision. When a collision occurs, the merging of parameters still occurs, but the value specified within `parameterForwards` may not be forwarded. To change the value of a collision, please use the supported parameter mapping or drop it from the request body.
To inspect how values from the `parameterForwards` object are merged into the forwarded request, use the `showForwardedRequest:true` parameter (only available in Test environment).
## Differences between Environments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#differences-between-environments "Direct link to Differences between Environments")
Behavior differences between TokenEx Test and Prod environments
The `forwardedRequest` object is only returned in the TokenEx Test environment and when `showForwardedRequest` is true. Build your application's `parameterForwards` object using the Test environment to validate that your application will perform in the TokenEx Production environment as expected.
`showForwardedRequest` is not available in the TokenEx Production environment and no details about a merge will be returned in the response. Contact Support with your response's reference number to request a parameter forwarding report and sanitized forwarded request for a transaction that occurred in the TokenEx Production environment.
## Request Object[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#request-object "Direct link to Request Object")  
| parameterForwards  | Type  | Description  |  
| --- | --- | --- |  
| body  | object  | Parameters which should be forwarded in the 3rd-Party API's request body.  |  
| - content  | escaped string  | Example: `"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"`  |  
| - format  | number or string  | Defaults to JSON. Select a value below to see supported gateway implementations.   
  
Valid values:   
0 - [JSON](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#json)  |  
### Example Request[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#example-request "Direct link to Example Request")
Request
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```## Response Object[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#response-object "Direct link to Response Object")  
| forwardedRequest  | Type  | Description  |  
| --- | --- | --- |  
| parameterForwards  | object  | Report on the merge of merchant-specified parameters into the 3rd-Party API request.  |  
| - mergeOccured  | boolean  | True if the merchant-specified parameters are in the 3rd-Party API request. False if an error occured during the merge.  |  
| - forwards  | string []  | Merchant-specified parameters which were merged into the 3rd-Party API request with their intended values.  |  
| - collisions  | string []  | Merchant-specified parameters for which the 3rd-Party API request already contains.   
Merchant-specified parameter forwards cannot overwrite values that have been specified by other request parameters or by the TokenEx gateway implementation.   
**Note on Arrays** : See JSON Array Handling below.  |  
| - message  | string  | Explanatory message detailing error or collision.  |  
### Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#example-responses "Direct link to Example Responses")
  * Succssesful Merge
  * Failed Merge
  * Merge with Collisions
  * Array Merging
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```### JSON Array Handling[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#json-array-handling "Direct link to JSON Array Handling")
Using `parameterForwards` to merge JSON arrays will cause the parameter name to be displayed as a collision. When merging arrays, it is important to manually inspect the forwarded request to validate the values your application is forwarding are being merged correctly.
##### Simple arrays containing strings, numbers, or booleans[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#simple-arrays-containing-strings-numbers-or-booleans "Direct link to Simple arrays containing strings, numbers, or booleans")
These arrays are merged as a union. If a supported parameter is creating a simple array and your application is attempting to merge values into it using `parameterForwards` - items that already exist are skipped. If one array is `[1,2,3]` and the other array is `[3,4,5]`, the output will be `[1,2,3,4,5]`; the `3` is already present, so it's not added again.
##### Complex arrays containing objects[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#complex-arrays-containing-objects "Direct link to Complex arrays containing objects")
When two arrays contain objects that have the same keys, the merged array will contain all objects from both arrays. Values are not overwritten, but instead the arrays are concatenated.
## Gateway `Body.Content` Formats[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#gateway-bodycontent-formats "Direct link to gateway-bodycontent-formats")
### JSON[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#json "Direct link to JSON")
  * [Adyen Checkout](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct)
  * [dLocal](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal)
  * [EBANX](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx)
  * [First Data IPG](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg)
  * [Nuvei](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei)
  * [Orbital](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital)
  * [Worldpay Native RAFT](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft)
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#overview)
  * [Differences between Environments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#differences-between-environments)
  * [Request Object](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#request-object)
    * [Example Request](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#example-request)
  * [Response Object](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#response-object)
    * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#example-responses)
    * [JSON Array Handling](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#json-array-handling)
  * [Gateway `Body.Content` Formats](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#gateway-bodycontent-formats)
    * [JSON](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding#json)
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  ... // other request parameters  

  "showForwardedRequest":true,// display data about the forwarded request in the response  

  "parameterForwards":{  

    "body":{ // example content to forward in the body  

       "content":"{\"captureDelayHours\": 3, \"additionalData\":{ \"riskData.userType\":\"Guest\"}}"  

     }  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "captureDelayHours",  

          "additionalData.riskData.userType"  

        ]  

      },  

      "method": "POST",  

      "uri": "https://checkout-test.adyen.com/v69/payments",  

      "headers": "{\"Authorization\":[\"basic PFlvdXIgQWR5ZW4gVXNlcm5hbWU+OjxZb3VyIEFkeWVuIFBhc3N3b3JkPg==\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"captureDelayHours\":3,\"additionalData\":{\"riskData.userType\":\"Guest\"},\"amount\":{\"currency\":\"USD\",\"value\":150},\"billingAddress\":{\"city\":\"Felipeshire\",\"country\":\"US\",\"houseNumberOrName\":\"Suite 676\",\"postalCode\":\"37685\",\"stateOrProvince\":\"MT\",\"street\":\"175 Cassin Manors\"},\"paymentMethod\":{\"brand\":\"MasterCard\",\"cvc\":\"737\",\"expiryMonth\":\"12\",\"expiryYear\":\"2030\",\"holderName\":\"Fredrick Gulgowski\",\"number\":\"REMOVED[12]1115\",\"type\":\"scheme\"},\"shopperEmail\":\"Fredrick_Gulgowski@yahoo.com\",\"merchantAccount\":\"<Your merchant account identifier>\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": false,  

        "message": "ParameterForwards.Body.Content contains invalid or empty JSON."  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:42:16.301Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:1e03344211134b94120b6f553cdad2106585a23ac10426e592d92e498e35cc0e\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "forwards": [  

          "original_order_id"  

        ],  

        "collisions": [  

          "amount"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.dlocal.com/secure_payments",  

      "headers": "{\"Accept\":[\"application/json\"],\"X-Login\":[\"<Your dLocal x-login header>\"],\"X-Trans-Key\":[\"<Your dLocal x-trans-key header>\"],\"X-Version\":[\"2.1\"],\"X-Date\":[\"2023-11-10T21:41:03.035Z\"],\"Authorization\":[\"V2-HMAC-SHA256, Signature:4fd2d5618165d63ee5667fee0d030a26c4283b0c5e5584900d3c69d4f67eec48\"],\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"amount\":\"10.00\",\"original_order_id\":\"e1855f11-d6a4-471b-97a1-eb523d4e237a\",\"currency\":\"USD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"payer\":{\"name\":\"John Doe\",\"email\":\"john@doe.dev\",\"phone\":\"555-555-5555\",\"document\":\"27183121\",\"address\":{\"state\":\"OK\",\"city\":\"Tulsa\",\"zip_code\":\"74111\",\"street\":\"123 Someplace Lane\",\"number\":\"#45\"}},\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"number\":\"REMOVED[12]4242\",\"cvv\":\"123\",\"capture\":false,\"verify\":false,\"stored_credential_type\":\"UNSCHEDULED_CARD_ON_FILE\",\"stored_credential_usage\":\"USED\"},\"order_id\":\"apples2\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": {  

      "parameterForwards": {  

        "mergeOccured": true,  

        "collisions": [  

          "payment.items"  

        ],  

        "message": "Please review collisions. If needed, modify these parameter values using Payment Services parameter mappings. ./gateway-parameters/index.mdx"  

      },  

      "method": "POST",  

      "uri": "https://sandbox.ebanxpay.com/ws/direct",  

      "headers": "{\"Content-Type\":[\"application/json; charset=utf-8\"]}",  

      "body": "{\"payment\":{\"items\":[{\"sku\":\"exampleSku1\",\"name\":\"exampleName1\",\"description\":\"lorem ipsum1\",\"unit_price\":1.0,\"quantity\":1,\"type\":\"exampleType1\"},{\"sku\":\"exampleSku2\",\"name\":\"exampleName2\",\"description\":\"lorem ipsum 2\",\"unit_price\":2.0,\"quantity\":2,\"type\":\"exampleType2\"},{\"sku\":\"exampleSku3\",\"name\":\"exampleName3\",\"description\":\"lorem ipsum3\",\"unit_price\":3.0,\"quantity\":3,\"type\":\"exampleType3\"},{\"sku\":\"exampleSku4\",\"name\":\"exampleName4\",\"description\":\"lorem ipsum 4\",\"unit_price\":4.0,\"quantity\":4,\"type\":\"exampleType4\"}],\"name\":\"José Silva\",\"email\":\"jose@example.com\",\"currency_code\":\"USD\",\"amount_total\":10.0,\"merchant_payment_code\":\"xwpo4z4jik4\",\"card\":{\"card_number\":\"REMOVED[12]1111\",\"card_name\":\"José Silva\",\"card_due_date\":\"06/2023\",\"card_cvv\":\"123\",\"auto_capture\":false},\"document\":\"853.513.468-93\",\"zipcode\":\"61919\",\"address\":\"Rua teste\",\"street_number\":\"1040\",\"city\":\"Rio de Janeiro\",\"state\":\"RJ\",\"country\":\"BR\",\"phone_number\":\"8522847035\",\"create_token\":false,\"instalments\":1,\"sub_account\":{},\"responsible\":{}},\"integration_key\":\"<Your EBANX Integration Key>\",\"operation\":\"request\",\"mode\":\"full\"}"  

    },  

    ... // remainder of gatewayResponse  

  }  

}  

```