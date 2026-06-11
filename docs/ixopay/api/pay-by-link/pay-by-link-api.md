---
title: Pay-by-Link API
summary: ' Pay-by-Link API'
tags:
- authentication-https-documentation-ixopay-com-api-pay-link-pay-link-api-authentication-direct-link-authentication
- api
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* Pay-by-Link API
  * Introduction

Version: 3.0.0
# Pay-by-Link API
Using our Pay-by-Link API, you can manage Pay-by-Link transactions.
To create Pay-by-Links, use the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api).
## Authentication[​](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api#authentication "Direct link to Authentication")
  * HTTP: Basic Auth

To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header, as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617). To achieve this, the username and password are first concatenated with a `:` (colon) separator, and the resulting string is then Base64 encoded. Here is an example of how this process works:
  1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
  2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
  3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
  4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
Version: 3.0.0