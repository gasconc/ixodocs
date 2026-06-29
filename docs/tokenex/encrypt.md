---
title: Encrypt
summary: ' Transparent Gateway API v1'
tags:
- api
- tokenex
- ixopay
- gateway
source_url: ''
portal: tokenex
updated: '2026-06-29'
related: []
---

* Transparent Gateway API v1
  * [Functions](https://documentation.ixopay.com/modules/docs/tokenex/functions-1)
  * Encrypt

# Encrypt
The Encrypt function is used when the endpoint requires the sensitive data to be encrypted prior to transmission.  
| Parameter  | Description  |  
| --- | --- |  
| Function  | Encrypt  |  
| Type  | The type of Encryption Algorithm to use. Currently-supported values: **RSA**  |  
| Key  | The Key needed to encrypt the data  |  
| Encoding  | The encoding to be used post-encryption. Currently-supported values: **HEX** , **BASE64**  |  
| Token  | The token representating the data to be Encrypted post-detokenization  |  
Example:
```
{  
  "card": {  
    "type": "MC",  
    "encryptedCardNumber":"{{{{FUNCTION:Encrypt,TYPE:RSA,KEY:-----BEGIN PUBLIC KEY-----  
                           r28El+rBesEzTA9XGfvvj4saHyHJkcCdze55ZmzKt5Ix87/TOKAl5urCX530Jzi+  
                           gF3TFX3WZj5ejwdSS9UDKqB1YG21F9FkGmzmYKltF5+/a01AqZh3F0VwYcCm3LJP  
                           mv2vzOdWZSrNEXpijQaGMfklUyj4ifsy5c5A54SF8MlNRUQMIJ1PXA+5tPdyJF2q  
                           BQoRCb33IeziRgUMw9XrF5LBiem5qICbuH6P/N8SMa524gtYKv+Wkz8a7UR8Psh9  
                           mCEQbxWEoj5zjVKOwdOvxzo3XIT3qTLNAP/ShTUIfXKN0jZN3XRKg4lOLRHUXSrD  
                           cIy+CaWkcnrHQZjPgudGu30UXCFGgR26wt66vKeRCU2dtUyjWU/ew76hWqWMn3Ov  
                           +vHlQvwx  
                           -----END PUBLIC KEY-----,ENCODING:HEX,TOKEN:545454XXXXXX5454}}}}",  
    "expDate": "1122",  
    "cardValidationNum": "123"  
  }  
}  

```