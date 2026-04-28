---
title: Encrypt Function
summary: ' Transparent Gateway API v2  Invoke Functionshttps://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1  Encrypt
  Function'
tags:
- rsa-https-documentation-ixopay-com-modules-docs-tokenex-encrypt-function-rsa-direct-link-rsa
- api
- json
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/encrypt-function
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* Transparent Gateway API v2
  * [Invoke Functions](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1)
  * Encrypt Function

# Encrypt Function
Encrypt data within the request body. The data to be encrypted may include a token, identified by token notation. In this case, the token will be detokenized prior to encryption.
The encrypt function will detokenize the payload, encrypt the data within the “Data” parameter in the function space, and replace the function space with the resulting, encoded ciphertext, before forwarding the request to the specified URL.
## RSA[​](https://documentation.ixopay.com/modules/docs/tokenex/encrypt-function#rsa "Direct link to RSA")
Function parameters:  
| Parameter Name  | Value  |  
| --- | --- |  
| FUNCTION  | Encrypt  |  
| TYPE  | RSA  |  
| KEY  | Provide the public (RSA) key to be used for encryption  |  
| ENCODING  | BASE64 or HEX (encodes ciphertext)  |  
| DATA  | Data to be encrypted. This may include tokens located by token notation. If a token and/or a function is contained in the data parameter, the token will be detokenized prior to encryption.  |  
| PADDING  | The padding mode to use. Supported modes are "OAEP" and "PKCS1". Both modes work independent of digest mode. Note that OAEP mode will leverage MGF1 along with the specified digest.  |  
| DIGEST  | The message digest to use. Supported modes are "SHA1", "SHA256", "SHA384", and "SHA512".  |  
**RSA Encrypt Examples:**
  * RSA w/ PKCS1 padding
  * RSA w/ OAEP padding & SHA-256 digest
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

  }  

}  

```## AES/Rijndael[​](https://documentation.ixopay.com/modules/docs/tokenex/encrypt-function#aesrijndael "Direct link to AES/Rijndael")
Function parameters:  
| Parameter  | Value  |  
| --- | --- |  
| FUNCTION  | Encrypt  |  
| TYPE  | _AES _or _Rijndael_  |  
| ENCODING  | BASE64 or HEX (encodes ciphertext)  |  
| IV  | The base64-encoded initialization vector for the symmetric algorithm. This should be a unique, random value for each unique request.  |  
| DATA  | Data to be encrypted. This may include tokens located by token notation. If a token and/or a function is contained in the data parameter, the token will be detokenized prior to encryption.  |  
**AES/Rijndael Encrypt Examples:**
  * AES Encrypt
  * Rijndael Encrypt
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

  }  

}  

```  * [RSA](https://documentation.ixopay.com/modules/docs/tokenex/encrypt-function#rsa)
  * [AES/Rijndael](https://documentation.ixopay.com/modules/docs/tokenex/encrypt-function#aesrijndael)
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJPmv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2qBQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrDcIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov+vHlQvwx-----END PUBLIC KEY-----,ENCODING:HEX,PADDING:OAEP,DIGEST:SHA256,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:AES,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

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

    "type": "MC",  

    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:Rijndael,IV:dGhpc2lzYW5pdmthcGljaA==,ENCODING:Base64,Data:{{{545454tEc3Hk5454}}}}}}}",  

    "expDate": "1122",  

    "cardValidationNum": "123"  

  }  

}  

```