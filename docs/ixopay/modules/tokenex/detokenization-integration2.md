---
title: Detokenization Integration
summary: ' Transparent Gateway API v1  Detokenization Integration'
tags:
- detokenization-examples-json-https-documentation-ixopay-com-modules-docs-tokenex-detokenization-integration2-detokenization-examples-json-direct-link-detokenization-examples-json
- api
- json
- xml
- tokenex
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Transparent Gateway API v1
  * [Detokenization](https://documentation.ixopay.com/modules/docs/tokenex/detokenization)
  * Detokenization Integration

# Detokenization Integration
To begin using this service, you simply need to make a few modifications to the code that is constructing your HTTPS POST to the 3rd-party endpoint.
  1. Update the URL to POST to TokenEx
     * 
  2. Add HTTP Header for the intended URL
     * TX_URL
  3. Add your Authentication Headers
     * TX_TokenExID
     * TX_APIKey
  4. Wrap the field in the HTTP Body with three curly braces
     * example: `{{{424242XXXXXX4242}}}`
  5. (Optional) To inject a CVV that was previously collected by TokenEx, insert the cvv placeholder as shown below. The placeholder is the lowercase string "cvv" wrapped with three sets of curly braces.
     * example: `{{{cvv}}}`

**HTTP Request Headers**  
| Header  | Description  |  
| --- | --- |  
| TX_TokenExID  | Your TokenEx ID.  |  
| TX_APIKey  | Your API Key.  |  
| TX_URL  | The endpoint URL to which TokenEx should POST the detokenized request.  |  
| TX_Headers  | (Optional) Comma-separated list of desired headers received from the endpoint  |  
| TX_CacheCvv  | (Optional) Sending 'true' will cache the CVV for 5 minutes allowing additional attempts with the CVV after a failed transaction  |  
### Detokenization Examples - JSON[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---json "Direct link to Detokenization Examples - JSON")
  * JSON with Token
  * JSON with Token and CVV
  * JSON with Token, CVV and CacheCvv = true
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```### Detokenization Examples - XML[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---xml "Direct link to Detokenization Examples - XML")
  * XML with Token
  * XML with Token and CVV
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```### Detokenization Examples - Form POST[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---form-post "Direct link to Detokenization Examples - Form POST")
  * Form POST with Token
  * POST with Token and CVV
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```  * [Detokenization Examples - JSON](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---json)
  * [Detokenization Examples - XML](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---xml)
  * [Detokenization Examples - Form POST](https://documentation.ixopay.com/modules/docs/tokenex/detokenization-integration2#detokenization-examples---form-post)
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

TX_CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{cvv}}}"  

  }  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454587415454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: text/xml  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{cvv}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

  

type=MC&number={{{545454587415454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX_URL: https://www.example.com  

TX_TokenExID: XXXXXXXXXX  

TX_APIKey: XXXXXXXXXX  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{cvv}}}  

```