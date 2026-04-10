Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Transparent Gateway API v2
  * Payload Hashing


On this page
# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

Last updated on **Apr 10, 2026**
# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Transparent Gateway API v2
  * Payload Hashing


On this page
# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

Last updated on **Apr 10, 2026**
[Previous Proxy Detokenization (Inbound)](https://documentation.ixopay.com/modules/docs/tokenex/proxy-detokenization-1)[Next Select a TGAPI Endpoint](https://documentation.ixopay.com/modules/docs/tokenex/select-a-tgapi-endpoint-1)
  * [HMAC](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Transparent Gateway API v2
  * Payload Hashing


On this page
# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

Last updated on **Apr 10, 2026**
# Payload Hashing
If the destination endpoint requires a hash of the payload to verify authenticity, you may generate the hash value by constructing your detokenize payload and posting it to the payload hashing endpoint. This endpoint will detokenize the payload, perform any other processing, then hash the payload in its entirety using the hashing algorithm specified in the 'Type' query string parameter. Acceptable Type values are:
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512


The payload hashing endpoint also supports the HMAC variants of the above algorithms:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512


danger
To perform Hashing using HMAC key, the **tx-HMACkey** header must be supplied and its value must be in **base64** encoded format.
The resulting hash will be returned in the body of the Response.
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=SHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
  
{  
  {{{411111J7BDcj1111}}}  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "hash": "m77xlHZiPKVsF9p1/VdzTb+CUwaGBDpuSRxtcb7+j24=",  
  "referenceNumber": "22030809420634873048",  
  "success": true,  
  "error": "",  
  "message": ""  
}  

```

## HMAC[​](https://documentation.ixopay.com/modules/docs/tokenex/payload-hashing-2#hmac "Direct link to HMAC")
  * Request
  * Response



```
POST https://test-tgapi.tokenex.com/Hash?Type=HMACSHA256 HTTP/1.1  
Content-Type: application/json  
TX-URL: https://www.example.com  
TX-TokenEx-ID: YourTokenExID  
TX-APIKey: YourAPIKey  
TX-HMACKey: M2eUVlF3U0+OEQk6ttWSWA==  
  
{  
  "card": {  
    "type": "MC",  
    "number": "{{{545454tEc3Hk5454}}}",  
    "expDate": "1126",  
    "cardValidationNum": "123"  
  }  
}  

```


```
HTTP/1.1 200 OK  
Content-Length: 95  
Content-Type: application/json; charset=utf-8  
  
{  
  "Success": true,  
  "HashValue":"NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  
  "ReferenceNumber": "19011512562595159744"  
}  

```

