---
title: Transparent Detokenization Integration
summary: ' Transparent Gateway API v2  Transparent Detokenizationhttps://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-1  Transparent
  Detokenization Integration'
tags:
- detokenization-examples-json-https-documentation-ixopay-com-modules-docs-tokenex-transparent-detokenization-integration-detokenization-examples-json-direct-link-detokenization-examples-json
- api
- json
- xml
- tokenex
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Transparent Gateway API v2
  * [Transparent Detokenization](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-1)
  * Transparent Detokenization Integration

# Transparent Detokenization Integration
To begin using this service, you simply need to make a few modifications to the code that is constructing your HTTPS payload to the 3rd-party endpoint.
  1. Update the URL to POST to TokenEx
     * 
  2. Add a HTTP Header for the intended URL
     * TX-URL
  3. Add your Authentication Headers
     * TX-TokenEx-ID
     * TX-APIKey
  4. Replace the sensitive data point in the HTTP Body with the TokenEx token, wrapped in three curly braces
     * example: `{{{545454XXXXXX5454}}}`
  5. (Optional) To inject a CVV that was previously collected by TokenEx, insert the CVV placeholder as shown below. The placeholder is established by calling the [CVV function](https://documentation.ixopay.com/modules/docs/tokenex/cvv-function).
     * example: `{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}`

Don't want to wrap your token in curly braces?
You can optionally use the "tx-request-regex" header which allows you to bypass the `{{{ }}}` requirement and instead identify the location of your token using a regular expression.
**HTTP Request Headers**  
| Header  | Required  | Description  |  
| --- | --- | --- |  
| TX-TokenEx-ID  | Required  | Your TokenEx ID.  |  
| TX-APIKey  | Required  | Your API Key.  |  
| TX-URL  | Required  | The endpoint URL to which TokenEx should POST the detokenized request.  |  
| TX-CacheCvv  | Optional  | Sending 'true' will cache the CVV for 5 minutes allowing additional attempts with the CVV after a failed transaction.  |  
Click [here](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1) to view more information about required and additional optional headers for this endpoint.
**HTTP Response Headers**  
| Header  | Description  |  
| --- | --- |  
| tx-thirdpartystatuscode  | The statuscode TokenEx received from our connection with the 3rd party host.  |  
| tx-tokenexstatuscode  | The status code related to your connection with TokenEx.  |  
| tx-destinationtime  | The amount of time the request spent with the 3rd party host.  |  
| tx-tokenex-time  | The total amount of time the request spent with TokenEx.  |  
| tx-total-time  | The total amount of time (TokenEx + 3rd party host) it took to process the request.  |  
### Detokenization Examples - JSON[​](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---json "Direct link to Detokenization Examples - JSON")
  * JSON with Token
  * JSON with Token and CVV
  * JSON with Token, CVV and CacheCvv = true
  * JSON using TX-Request-Regex to locate Token
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```### Detokenization Examples - XML[​](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---xml "Direct link to Detokenization Examples - XML")
  * XML with Token
  * XML with Token and CVV
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```### Detokenization Examples - Form URL encoded[​](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---form-url-encoded "Direct link to Detokenization Examples - Form URL encoded")
  * Form POST with Token
  * Form POST with Token and CVV
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```  * [Detokenization Examples - JSON](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---json)
  * [Detokenization Examples - XML](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---xml)
  * [Detokenization Examples - Form URL encoded](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration#detokenization-examples---form-url-encoded)
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum":"123  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1112",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-CacheCvv: true  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454XXXXXX5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}"  

  }  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-Request-Regex: (?<="CreditCardNumber": ")(.*?)(?=")  

  

{  

  "FirstName": "John",  

  "LastName": "Smith",  

  "CreditCardNumber": "545454XXXXXX5454",  

  "ExpirationDate": "06/24",  

  "CVV": "123"  

}  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>123</cardValidationNum>  

</card>  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: text/xml  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

<card>  

  <type>MC</type>  

  <number>{{{545454XXXXXX5454}}}</number>  

  <expDate>1126</expDate>  

  <cardValidationNum>{{{{FUNCTION:CVV, TOKEN:545454XXXXXX5454}}}}</cardValidationNum>  

</card>  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum=123  

```
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/x-www-form-URLencoded  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

type=MC&number={{{545454XXXXXX5454}}}&expDate=1112&cardValidationNum={{{{FUNCTION:CVV,TOKEN:545454XXXXXX5454}}}}  

```