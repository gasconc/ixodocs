---
title: Decrypt Function
summary: ' Transparent Gateway API v2  Invoke Functionshttps://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1  Decrypt
  Function'
tags:
- api
- json
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/decrypt-function
portal: tokenex
updated: '2026-05-25'
related: []
---

* Transparent Gateway API v2
  * [Invoke Functions](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1)
  * Decrypt Function

# Decrypt Function
Decrypt data within the request body.
The decrypt function can be used to pass encrypted data (as opposed to tokenized data) through Transparent Detokenization. If data has previously been RSA encrypted using TokenEx’s public RSA key, the ciphertext can be decrypted using this function before it is passed on to the destination endpoint.  
| Parameter Name  | Value  |  
| --- | --- |  
| FUNCTION  | Decrypt  |  
| TYPE  | - RSA   
- AES^*   
- Rijndael^  |  
| ENCODING  | BASE64 or HEX (ciphertext encoding)  |  
| DATA  | The ciphertext data to be decrypted  |  
| IV  | Base64-encoded initialization vector (Required only for `AES` or `Rijndael` Types)  |  
| PADDING  | The padding mode to use during decryption. Supported values are "OAEP" and "PKCS1".   
  
If omitted, the default RSA mode is _PKCS1_   
  
NOTE: _OAEP_ mode will leverage MGF1 along with the specified digest.  |  
| DIGEST  | The message digest to use during decryption in _OAEP_ padding mode. Supported values are "SHA1", "SHA256", "SHA384", and "SHA512".   
  
If omitted, the default value for DIGEST is _SHA1_  |  
*_AES-256-CBC is supported._
^As a prerequisite for this functionality, the symmetric key used for encryption will need to be shared with TokenEx and loaded. _Open a support ticket in the TokenEx client portal to learn more about loading an AES key to utilize the TGAPI decrypt function._
**RSA Decrypt Examples:**
  * RSA w/ PKCS1 padding
  * RSA w/ OAEP padding & SHA-512 digest
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

  }  

}  

```**AES/Rijndael Decrypt Examples**
  * AES Decrypt
  * Rijndael Decrypt
```

POST https://test-tgapi.tokenex.com/detokenize HTTP/1.1  

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:h7gQItIu8Ge5cSRRG4oN41uNPmunlp3gM3ONSrmzj4wx0AaMbRbwmI4C0YUWw2f8dKWOnAKszuwaYG4dpXrUnYAufX/ZiS8SHNnfFQsTTEYwupuWdgymYsqiRKw4nmwzUoXdTxTIx03em61e0knd3bwRayWxOc4PHgQ9A46IWz3UmBW75VMf5OfdhwX7QfdTSH2UKKdjwzNgXOTjb7spHzbzT6QYC4I+SLin1XCfFsEWcCJGha6v2m3eyu5Nu/K62XMeaie8vj3KB/Fx+t5bx9lyWr2txMuDtaU1hYXeZYt78dI4DptV6ZvoUIOjGE8/tg3RZ9xTGKwlXtKG8TQzig==}}}}",  

    "expDate": "1112",  

    "securityCode": "{{{{FUNCTION:Decrypt,TYPE:RSA,ENCODING:BASE64,PADDING:OAEP,DIGEST:SHA512,DATA:Ab/CCGcIdcVx+70l3vWBn8pRZ91wOm5EkvXYjAoFcW5B2qwTxLzFuCVA6LJg6gnSq2dci1uEvHmuJSdJiNGt+Z4J2ilT2t3EIi7m2ymRlS0KxbH+DaW6QrpSPvjcTiMkGPXkBqcOmVqVuZNrQWwyY/P2rfCZ+HLdJ47IAdjjaIF959xv2Xz8Hhq310qIxWsVYHbA/pXf1Qw5iB4REJXJNx0tdC00WnyjuYLGrFX+qHT5Ju54HLwFxeK1khywzzVcuVs4ZQfPEwNtJVir57HJr/JbXuAc3zugK8XcvW1MCNve2keoW1Elx1NAa2lX2YJr+Jo54MCMPNt0zZWCrwczKQ==}}}}"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:AES,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

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

  "paymentCard": {  

    "type": "credit",  

    "cardNumber": "{{{{FUNCTION:DECRYPT,TYPE:Rijndael,IV:pIgb1waGIoxxjj60VRoB4g==,ENCODING:Base64,DATA:iM1vdSnHAMiJQtizceARU6TLBb5vlhcXUElKmOevijE=}}}}",  

    "expDate": "1112"  

  }  

}  

```