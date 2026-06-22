---
title: Transaction API
summary: ' Transaction API'
tags:
- request-format-https-documentation-ixopay-com-api-transaction-transaction-api-request-format-direct-link-request-format
- api
- json
- tls
- ixopay
- authorization
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/api/transaction/transaction-api
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* Transaction API
  * Introduction

Version: 3.0.0
Export
  * [OpenAPI Spec](https://gateway.ixopay.com/Schema/V3/OpenApiSpecification.yml)

# Transaction API
The transaction API includes all operations necessary to process online payments.
Additionally included is the scheduler API and the options API.
## Request format[​](https://documentation.ixopay.com/api/transaction/transaction-api#request-format "Direct link to Request format")
Requests to the Transaction API are sent via HTTPS containing a JSON body.
  * The server accepts TLS version ≥ 1.2 connections.
  * Content-Type must be `application/json`
  * Authentication credentials are sent via BASIC Auth (see below)

If required by your merchant configuration:
  * The request must contain a valid signature within the `X-Signature` header (see below)
  * The request must contain a valid `Date` header, because this value is used for signature verification (refer to RFC 7231)

Headers Example
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```## Authentication[​](https://documentation.ixopay.com/api/transaction/transaction-api#authentication "Direct link to Authentication")
  * HTTP: Basic Auth
  * Signature

To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header, as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617). To achieve this, the username and password are first concatenated with a `:` (colon) separator, and the resulting string is then Base64 encoded. Here is an example of how this process works:
  1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
  2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
  3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3JkCg==`.
  4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
We highly encourage our users to take advantage of the additional security measures we offer. One such measure involves verifying the authenticity of responses through signature verification. For further details on how to implement this security feature, we recommend reviewing our comprehensive guide to [Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security).  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | signature  |  
Version: 3.0.0
Export
  * [OpenAPI Spec](https://gateway.ixopay.com/Schema/V3/OpenApiSpecification.yml)
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
We highly encourage our users to take advantage of the additional security measures we offer. One such measure involves verifying the authenticity of responses through signature verification. For further details on how to implement this security feature, we recommend reviewing our comprehensive guide to [Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security).  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | signature  |  
  * Transaction API
  * Introduction
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
We highly encourage our users to take advantage of the additional security measures we offer. One such measure involves verifying the authenticity of responses through signature verification. For further details on how to implement this security feature, we recommend reviewing our comprehensive guide to [Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security).  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | signature  |  
  * [Request format](https://documentation.ixopay.com/api/transaction/transaction-api#request-format)
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 GMT  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
We highly encourage our users to take advantage of the additional security measures we offer. One such measure involves verifying the authenticity of responses through signature verification. For further details on how to implement this security feature, we recommend reviewing our comprehensive guide to [Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security).  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | signature  |