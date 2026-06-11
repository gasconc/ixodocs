---
title: JWE Encryption
summary: ' Transparent Gateway API v2  JWE Encryption'
tags:
- endpoint-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-endpoint-direct-link-endpoint
- authentication-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-authentication-direct-link-authentication
- request-headers-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-request-headers-direct-link-request-headers
- jweoptions-header-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-jweoptions-header-direct-link-jweoptions-header
- request-body-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-request-body-direct-link-request-body
- examples-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-examples-direct-link-examples
- public-key-options-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-public-key-options-direct-link-public-key-options
- error-codes-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-error-codes-direct-link-error-codes
- permissions-https-documentation-ixopay-com-modules-docs-tokenex-jwe-encryption-permissions-direct-link-permissions
- api
source_url: https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption
portal: tokenex
updated: '2026-06-11'
related: []
---

* Transparent Gateway API v2
  * JWE Encryption

# JWE Encryption
The JWE Encryption endpoint detokenizes an outbound, client-initiated payload and encrypts the result as a JWE (JSON Web Encryption) compact token using RSA public key encryption. This enables secure transmission of sensitive data to downstream systems that accept JWE-formatted payloads.
## Endpoint[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#endpoint "Direct link to Endpoint")
**Test URI** :   
**Prod URI** : 
**Supported HTTP Methods:** POST
## Authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#authentication "Direct link to Authentication")
This endpoint uses the same authentication mechanism as other client-initiated TGAPI endpoints. Supply your TokenEx ID and API key as HTTP header values.  
| Header  | Description  | Required  |  
| --- | --- | --- |  
| `tx-tokenex-id`  | ID from the configuration menu in the client portal  | Yes  |  
| `tx-apikey`  | API key from the configuration menu in the client portal  | Yes  |  
## Request Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#request-headers "Direct link to Request Headers")
In addition to the authentication headers, the following header is required:  
| Header  | Description  | Required  |  
| --- | --- | --- |  
| `tx-jweoptions`  | Base64-encoded JSON object containing JWE encryption parameters (see below)  | Yes  |  
Standard detokenization headers are also supported:  
| Header  | Description  | Required  |  
| --- | --- | --- |  
| `tx-request-regex`  | Regular expression to locate tokens in the request body (alternative to triple-brace notation)  | No  |  
| `tx-cachecvv`  | Extends the life of a security code for 5 minutes after initial use  | No  |  
### TX-JWEOptions Header[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#tx-jweoptions-header "Direct link to TX-JWEOptions Header")
The `tx-jweoptions` header value must be a **Base64-encoded JSON object** with the following fields:  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `alg`  | required`string` _one of:_[`RSA-OAEP`, `RSA-OAEP-256`, `RSA1_5`]  | Key management algorithm. Case-insensitive.  |  
| `enc`  | required`string` _one of:_[`A128GCM`, `A192GCM`, `A256GCM`, `A128CBC-HS256`, `A192CBC-HS384`, `A256CBC-HS512`]  | Content encryption method. Case-insensitive.  |  
| `publicKey`  | optional`string?`  | RSA public key in PEM format. If omitted, the customer's encryption profile key is used.  |  
| `kid`  | optional`string?`  | Key ID included in the JWE protected header  |  
| `additionalHeaders`  | optional`object?`  | Additional headers included in the JWE protected header  |  
#### Supported Algorithms (`alg`)[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#supported-algorithms-alg "Direct link to supported-algorithms-alg")  
| Value  | Description  |  
| --- | --- |  
| `RSA-OAEP`  | RSA-OAEP using default parameters  |  
| `RSA-OAEP-256`  | RSA-OAEP using SHA-256 and MGF1 with SHA-256  |  
| `RSA1_5`  |  RSAES-PKCS1-v1_5 warning Included for backward compatibility only. Prefer `RSA-OAEP` or `RSA-OAEP-256` for new integrations.  |  
#### Supported Encryption Methods (`enc`)[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#supported-encryption-methods-enc "Direct link to supported-encryption-methods-enc")  
| Value  | Description  |  
| --- | --- |  
| `A128GCM`  | AES GCM using 128-bit key  |  
| `A192GCM`  | AES GCM using 192-bit key  |  
| `A256GCM`  | AES GCM using 256-bit key  |  
| `A128CBC-HS256`  | AES-CBC using 128-bit key with HMAC SHA-256  |  
| `A192CBC-HS384`  | AES-CBC using 192-bit key with HMAC SHA-384  |  
| `A256CBC-HS512`  | AES-CBC using 256-bit key with HMAC SHA-512  |  
#### Building the Header Value[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#building-the-header-value "Direct link to Building the Header Value")
  1. Construct a JSON object with the desired options:
```

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```  2. Base64-encode the JSON string. The resulting value is used as the `tx-jweoptions` header.

## Request Body[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#request-body "Direct link to Request Body")
The request body follows the same format as the [Transparent Detokenization](https://documentation.ixopay.com/modules/docs/tokenex/transparent-detokenization-integration) endpoint. Tokens are wrapped in triple curly braces and functions use quadruple curly braces.
The endpoint detokenizes all tokens first, then JWE-encrypts the entire resulting payload.
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#examples "Direct link to Examples")
  * Request
  * Response
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```The `encryptedPayload` value is a JWE compact serialization string consisting of five Base64URL-encoded segments separated by periods: `HEADER.ENCRYPTED_KEY.IV.CIPHERTEXT.TAG`.
## Public Key Options[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#public-key-options "Direct link to Public Key Options")
The RSA public key used for encryption can be supplied in one of two ways:
  1. **Inline via`publicKey` field** — Include the PEM-encoded RSA public key directly in the `tx-jweoptions` JSON. This is useful when integrating with external systems that provide their own public keys.
  2. **Encryption profile fallback** — If `publicKey` is omitted, the endpoint uses the RSA public key from your TokenEx encryption profile, configured in the Browser Based Encryption section of the client portal.

## Error Codes[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#error-codes "Direct link to Error Codes")  
| Error Code  | Description  |  
| --- | --- |  
| `8610`  | JWE encryption failed  |  
| `8611`  | Invalid or missing JWE options header (missing header, invalid Base64, or invalid JSON)  |  
| `8612`  | Invalid or missing JWE algorithm (`alg` field)  |  
| `8613`  | Invalid or missing JWE encryption method (`enc` field)  |  
| `8614`  | Invalid or missing JWE public key  |  
## Permissions[​](https://documentation.ixopay.com/modules/docs/tokenex/jwe-encryption#permissions "Direct link to Permissions")
This endpoint requires the **Detokenize** permission. Ensure your API key has this permission enabled in the TokenEx client portal.
```

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

``````

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

``````

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "alg": "RSA-OAEP-256",  

  "enc": "A256GCM",  

  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqh...\n-----END PUBLIC KEY-----"  

}  

```
```

POST https://test-tgapi.tokenex.com/Crypto/EncryptJWE HTTP/1.1  

Content-Type: application/json  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

TX-JWEOptions: eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwicHVibGljS2V5IjoiLS0tLS1CRUdJTi4uLiJ9  

  

{  

  "card": "{{{545454tEc3Hk5454}}}",  

  "cvv": "{{{{FUNCTION:CVV,TOKEN:545454tEc3Hk5454}}}}",  

  "merchant": "test-merchant"  

}  

```
```

{  

  "encryptedPayload": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGeipsEdY3mx_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDbSv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam_lDp5XnZAYpQdb76FdIKLaVmqgfwX7XWRxv2322i-vDxRfqNzo_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je81860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ_ZT2LawVCWTIy3brGPi6UklfCpIMfIjf7iGdXKHzg.48V1_ALb6US04U3b.5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_.XFBoMYUZodetZdvTiFvSkQ",  

  "referenceNumber": "22030809420634873048",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```