---
title: Tokenize
summary: ' TokenEx API v2  Encrypted Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/encrypted-token-services'
tags:
- https-test-api-tokenex-com-encryptedtoken-tokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-encrypted-token-services-tokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/encrypted-token-services-v-2-tokenize
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Encrypted Token Services](https://documentation.ixopay.com/modules/api/tokenex/encrypted-token-services)
  * Tokenize

# Tokenize
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```**Tokenize** is used to tokenize a sensitive data element that has been encrypted with the [TokenEx public RSA key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys).
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/encrypted-token-services-v-2-tokenize#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`PCI`

  * application/json

  * Body
  * Request Example

### Body
**encryptedData** stringrequired
The encrypted value of the sensitive data element you wish to tokenize.
**Default value:**`dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==`
**padding** string
Possible Values: PKCS1 and OAEP. PKCS1 is default.
**Default value:**`PKCS1`
**digest** string
This field is ignored if Padding is set to PKCS1. If Padding is set to OAEP, the default value for digest is SHA1. Possible digest values: SHA1, SHA256, SHA384, SHA512.
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/encrypted-token-services-v-2-tokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`411111245ShO1111`
**firstSix** string
**Example:**``
**lastFour** string
**Example:**``
**referenceNumber** string
**Example:**`22013016253937650006`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Tokenize Successful!`
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
tx-token-scheme — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/EncryptedToken/Tokenize

```
```

{  

  "encryptedData": "JthwENUx7IjhulnjPOfidk18VPY/LDkHfk5uZ7w7WjjPhEFdDP9+Q6FJQTLc6Ul3DjLfjFotJwoGeRUusOHZeGAfEAY/T4dj8VV7AREDblsJ22Yn7qpSp/S1A8pC5CTvrAm0OBJlZe5nmMiBFE/e5O3xjxRYRQbodxMlBlqsK0I2NC99GGFvWgsZRgrIephOikNRvrK7CHb2v9EVbSzRDKNdqgZ/H61trrObc39YsN+1cGsJDzqbw6ttY48hr8xns9TcL54UFeqqbT1Q7yX5exF72piFjyWM7nJx0JPVYdLOP5367iZAOxsGiXpo0QwvrF/t2G6S/5uInoH8CxiAoQ=="  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "token": "411111245ShO1111",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22013016253937650006",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/EncryptedToken/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",  
  "padding": "PKCS1",  
  "digest": "string"  
}'  

```
```
{
  "encryptedData": "dTD+matJePdp5+zjno537R1DXMLMr073LfH3Ko+4J76v5jcurGVDsicPrqqn6u3garNpTZrS6Rft0tUfQ90A+wo8jOjDMKnm4B9H9uaLriaCiGwjCUN1e+RcaOoigTveq7f90M+iWygGrOr5xvPmn0sAQAB9PJc/DOptjx96VI5PyimagOHj1LMMJEX50t81bWPkQHsfALlmZ7/jhwwSXb1G1Qsn16HVFiLWAZnRauaRPON5BWvp/QF57XyEyewXu9q+DPTuAC9y50j7fFQhAnrWkpJseT3fiO0NL8+LKu9is7JXXR9WCrlQHW9qMHgKr1JUyeEfYXfNpisq0gMgDw==",
  "padding": "PKCS1",
  "digest": "string"
}

```