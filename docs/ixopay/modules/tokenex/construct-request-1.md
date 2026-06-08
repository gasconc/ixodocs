---
title: Construct Request
summary: ' Transparent Gateway API v2  Construct Request'
tags:
- supply-tokenex-request-headers-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-supply-tokenex-request-headers-direct-link-supply-tokenex-request-headers
- modify-request-body-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-modify-request-body-direct-link-modify-request-body
- payload-encodings-formats-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-payload-encodings-formats-direct-link-payload-encodings-formats
- response-multiregex-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-response-multiregex-direct-link-response-multiregex
- gzip-compression-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-gzip-compression-direct-link-gzip-compression
- proxy-key-via-basic-auth-https-documentation-ixopay-com-modules-docs-tokenex-construct-request-proxy-key-via-basic-auth-direct-link-proxy-key-via-basic-auth
- api
- json
- xml
- 3d-secure
source_url: https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* Transparent Gateway API v2
  * Construct Request

# Construct Request
The HTTP request should first be constructed to meet the specifications of the receiving endpoint. Then, modifications need to be made in order to pass this request through the TGAPI. These modifications may include the addition of TokenEx specific headers, and/or changes to the request body. These modifications enable the TGAPI to perform the necessary processing (i.e. detokenization, tokenization, encryption, decryption, hashing, or encoding) on the request before forwarding the request on to the receiving endpoint.
## Supply TokenEx Request Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#supply-tokenex-request-headers "Direct link to Supply TokenEx Request Headers")  
| HTTP Request Header  | Description  | /Detokenize  | /Tokenize  | /Proxy  | /Hash  |  
| --- | --- | --- | --- | --- | --- |  
| tx-tokenex-id  | ID from configuration menu in client portal  | Required  | Required  | N/A  | Required  |  
| tx-apikey  | API key from configuration menu in client portal  | Required  | Required  | N/A  | Required  |  
| tx-url  | The destination to which TokenEx will forward the request.   
Must be prefixed with https://  | Required  | Required  | N/A  | N/A  |  
| tx-proxy-key  | API key assigned to proxy profile from proxy profile menu in client portal  | N/A  | N/A  | Required  | N/A  |  
| tx-proxy-encryption-iv  | Initialization vector (applicable when encryption is enabled in proxy profile)  | N/A  | N/A  | Optional  | N/A  |  
| tx-request-regex  | Regular expression to locate token in request (used in place of curly brackets).   
| tx-response-regex  | Regular expression or MultiRegex expression to locate data to be tokenized in the response. Data to be tokenized must be in group 0 or the match of the regex.  | Optional  | Required  | N/A  | N/A  |  
| tx-token-scheme  |  [Token scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) to be applied to data to be tokenized in response  | Optional  | Required  | N/A  | N/A  |  
| tx-cachecvv  | Extends life of security code for 5min after initial use. See See [CVV Retention and Retrieval](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval)  | Optional  | N/A  | N/A  | N/A  |  
| tx-headers  | Comma-separated list of headers expected to be received from destination endpoint in response  | Optional  | Optional  | N/A  | N/A  |  
| tx-HMACkey  | The HMAC key for HMAC payload hashing  | N/A  | N/A  | N/A  | Optional (Required for HMAC Types)  |  
| tx-response-metaregex-cvv  | Regular expression to locate CVV data to be associated with a token in the response.   
  
Example:   
  
`(?\<=\"CVV\":\\s\")([0-9]{3,4})(?=\")`   
  
will match bolded: "CVV": "**1234** "  | N/A  | Optional  | N/A  | N/A  |  
| tx-http-timeout  | Value in seconds to wait for a response from the 3rd-party before timing out.   
Default: 60   
Max: 120  | optional  | optional  | optional  | N/A  |  
| tx-retry  | See [Retries and 3rd Parties](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis)  | optional  | optional  | optional  | N/A  |  
| tx-client-key  | Utilized to pass in the private key for mutual authentication.   
  
The key should be in PKCS#8 format, starting with “-----BEGIN PRIVATE KEY-----” and ending with "-----END PRIVATE KEY-----", and should either be base64 encoded as a whole, or converted to a single line string, replacing line breaks with \r\n.   
  
If using base64 encoding, you must include a value of `true` for the _tx-client-key-encoded_ header.  | optional  | optional  | N/A  | N/A  |  
| tx-client-key-encoded  | Boolean.   
  
Indicates whether the value of _tx-client-key_ has been base64 encoded.  | conditional  | conditional  | N/A  | N/A  |  
| tx-client-cert  | Utilized to pass in the certificate for mutual authentication.   
  
The certificate should be in PEM format, starting with “-----BEGIN CERTIFICATE-----” and ending with "-----END CERTIFICATE-----", and should either be base64 encoded as a whole, or converted to a single line string, replacing line breaks with \r\n.   
  
If using base64 encoding, you must include a value of `true` for the _tx-client-cert-encoded_ header.  | optional  | optional  | N/A  | N/A  |  
| tx-client-cert-encoded  | Boolean.   
  
Indicates whether the value of _tx-client-cert_ has been base64 encoded.  | conditional  | conditional  | N/A  | N/A  |  
| tx-passthrough  | Specific to a request to the Detokenize endpoint, this allows the request to bypass the requirement that a token be present in the body of the request.  | optional  | N/A  | N/A  | N/A  |  
| tx-ignore-default-encoding  | Specifies that the default UTF8 encoding should be ignored and that the encoding in the original request will be used.  | optional  | optional  | N/A  | N/A  |  
| tx-cvv-not-required  | Specifies that the request will continue if a CVV is not able to be retrieved.  | optional  | optional  | N/A  | N/A  |  
| tx-retain-cvv  | Enables the persistence of the CVV when used for a non-payment authorization flow such as a 3D-Secure authentication. The CVV will remain usable for 7 days after its initial association.  | optional  | N/A  | N/A  | N/A  |  
| tx-accept  | XML serialization for TokenEx errors instead of JSON   
  
Requires content type to be provided as the header value (e.g. application/xml)  | optional  | optional  | N/A  | optional  |  
| tx-minified-payload  | Boolean.   
  
Indicates that your payload is minified/compressed i.e. When payload drops all tabs and whitespace and makes JSON take up the least space.   
  
We recommend using this header only when your JSON payload is compressed and also contains TokenEx Function.   
e.g.   
`{"PaymentCard":{"type":"credit","cardNumber":"{{{TOKEN}}}","expDate":"1234", "securityCode": {{{{FUNCTION:CVV, TOKEN:TOKEN}}}},"test": {"test2": {"test3": "data"}}}}`  | optional  | optional  | N/A  | N/A  |  
## Modify the Request Body[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#modify-the-request-body "Direct link to Modify the Request Body")
info
Modifications to the body are not always required, such as with proxy tokenization, or when using the tx-request-regex instead of token notation for transparent detokenization.
**Token Notation** – The token is located between three sets of curly brackets
```

{{{TOKEN}}}  

```Tokens can be located in the body of a request using token notation. Functions can also be invoked within the request body using function notation. A combination of up to ten tokens or functions may be located within a request body.
## Payload Encodings / Formats[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#payload-encodings--formats "Direct link to Payload Encodings / Formats")
The TGAPI will support any data format (JSON, XML, form-URL-encoded, etc.) if the token can be located in the request body (by token notation, a proxy profile regular expression, or via the tx-request-regex header) and read. If the token is not readable (i.e. the tokens characters have changed due to encoding/compression) or the regular expression has no match, the TGAPI will not be able to locate the token. In this case, the TGAPI detokenize endpoint and the TGAPI payload hashing endpoint will return a 3000 error, “token does not exist”. TGAPI tokenize and proxy endpoints will not return an error but will report that there are no matches for the regular expression in the tx-message response header.
By default, a charset of UTF-8 is appended to the outgoing request when TGAPI is forwarding it on to the third party. To bypass this default encoding, please set the _tx-ignore-default-encoding_ header to **true**.
Note: In the case of a "application/x-www-form-urlencoded" request, the tx-request-regex header behaves slightly differently. The regex can only operate on each key and value separately, not on the body as a whole like other requests Example:  
`name=John%20Smith&data=5454545454545454&total=23.12`  
A tx-request-regex header of `(?<=data=)([^\"]+)` would not work, because the context of the regex would just be the key `data` or the value `5454545454545454`, but not `data=5454545454545454`. Your regex must target the PAN value directly
## Response MultiRegex[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#response-multiregex "Direct link to Response MultiRegex")
MultiRegex allows more than one regex pattern to be sent for locating data elements to Tokenize, with support for different token schemes assigned to each pattern. This is useful when you have different types of data to tokenize in your 3rd-party's response.
To build a MultiRegex, create a JSON object where the keys are the regex patterns to match against and the values are the token schemes to use when tokenizing those matches.
MultiRegex object example
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```MultiRegex Validation
For a MultiRegex to be accepted, the JSON object must only contain root-level keys/values as described in this section. If there is a parsing error, the value is assumed to be a single regex pattern and the `tx-token-scheme` header controls how matches are tokenized, if any.
Once you have built the object, stringify it, then take the MultiRegex string value and set it to the `tx-response-regex` header of your request. The `tx-message` response header will indicate how many matches in the response were found and tokenized. The MultiRegex limit is the same as the per-request Tokenize limit.
Vaultless token schemes
For clients who use vaultless token schemes, matched data will be tokenized using your chose vaultless token scheme. If any MultiRegex pattern specifies a different token scheme, it will be ignored.
## GZIP Compression[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#gzip-compression "Direct link to GZIP Compression")
The TGAPI does support GZIP compressed content encodings. If the content-encoding header is set to gzip, the TGAPI will decompress the request, process, and re-compress before forwarding on to the specified endpoint. GZIP compression can be controlled in the TGAPI using a couple of headers.
**Accept-Encoding**  
When the initial request is sent to the TGAPI, setting the accept-encoding header to GZIP informs the TGAPI that a gzip compressed response can be returned to the system that initiated the request.
**Content-Encoding**  
When this header is set to gzip and is received (in a request or a response), the TGAPI understands that the request needs to be decompressed, processed, and then recompressed before forwarding the request and/or response to the recipient endpoint.
## tx-proxy-key via Basic Auth[​](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#tx-proxy-key-via-basic-auth "Direct link to tx-proxy-key via Basic Auth")
The tx-proxy-key value may also be sent via the http basic authorization header. If the tx-proxy-key is sent in this manner then the tx-proxy-key header is no longer required for proxy requests.
To leverage, simply pass tx-proxy-key as the username, and the proxy key as the password.  
For example: **Basic tx-proxy-key :Your-Proxy-Key-Here**  
The username:password segment is expected to be base64 encoded before being sent in the request.
  
  
  
  
  
  
  
  
  
  
  
  
```

{{{TOKEN}}}  

```
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```
```

{{{TOKEN}}}  

```
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```MultiRegex Validation
For a MultiRegex to be accepted, the JSON object must only contain root-level keys/values as described in this section. If there is a parsing error, the value is assumed to be a single regex pattern and the `tx-token-scheme` header controls how matches are tokenized, if any.
Once you have built the object, stringify it, then take the MultiRegex string value and set it to the `tx-response-regex` header of your request. The `tx-message` response header will indicate how many matches in the response were found and tokenized. The MultiRegex limit is the same as the per-request Tokenize limit.
Vaultless token schemes
For clients who use vaultless token schemes, matched data will be tokenized using your chose vaultless token scheme. If any MultiRegex pattern specifies a different token scheme, it will be ignored.
```

{{{TOKEN}}}  

```
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```MultiRegex Validation
For a MultiRegex to be accepted, the JSON object must only contain root-level keys/values as described in this section. If there is a parsing error, the value is assumed to be a single regex pattern and the `tx-token-scheme` header controls how matches are tokenized, if any.
Once you have built the object, stringify it, then take the MultiRegex string value and set it to the `tx-response-regex` header of your request. The `tx-message` response header will indicate how many matches in the response were found and tokenized. The MultiRegex limit is the same as the per-request Tokenize limit.
Vaultless token schemes
For clients who use vaultless token schemes, matched data will be tokenized using your chose vaultless token scheme. If any MultiRegex pattern specifies a different token scheme, it will be ignored.
```

{{{TOKEN}}}  

```
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```
```

{{{TOKEN}}}  

```
```

{  

  "(?<=data\": \")([0-9]{13})(?=\")": "nTOKEN",  

  "(?<=number\": \")([0-9]{14,16})(?=\")": "ANTOKEN"  

}  

```MultiRegex Validation
For a MultiRegex to be accepted, the JSON object must only contain root-level keys/values as described in this section. If there is a parsing error, the value is assumed to be a single regex pattern and the `tx-token-scheme` header controls how matches are tokenized, if any.
Once you have built the object, stringify it, then take the MultiRegex string value and set it to the `tx-response-regex` header of your request. The `tx-message` response header will indicate how many matches in the response were found and tokenized. The MultiRegex limit is the same as the per-request Tokenize limit.
Vaultless token schemes
For clients who use vaultless token schemes, matched data will be tokenized using your chose vaultless token scheme. If any MultiRegex pattern specifies a different token scheme, it will be ignored.