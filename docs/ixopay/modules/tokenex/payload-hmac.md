---
title: Payload HMAC
summary: ' Transparent Gateway API v1  Payload HMAC'
tags:
- api
- hmac
- tokenex
- transaction
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payload-hmac
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* Transparent Gateway API v1
  * Payload HMAC

# Payload HMAC
If the desired endpoint requires a Hash-based Message Authentication Code (HMAC) of the payload they receive to verify authenticity, you may generate the hash value by constructing your Detokenize payload, adding your HMAC key in a header called `TX_HMACKey`, and posting it to the environment-appropriate URL listed below.
Test:   
Production: 
info
TX_HMACKey header value must be base64 encoded.
Our system will detokenize the payload, then generate an HMAC of the payload in its entirety using the hashing algorithm specified in the Type querystring parameter and the TX_HMACKey header. Acceptable Type values are:
  * HMACMD5
  * HMACSHA1
  * HMACSHA256
  * HMACSHA384
  * HMACSHA512

Results will be returned in both the body and the headers of the Response.  
| Header  | Body  | Description  |  
| --- | --- | --- |  
| tx_hashValue  | HashValue  | The HMAC of the detokenized payload  |  
| tx_refNumber  | RefNumber  | The TokenEx Reference Number for the transaction  |