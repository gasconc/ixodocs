---
title: Push API
summary: ' Push API'
tags:
- authentication-https-documentation-ixopay-com-api-push-push-api-authentication-direct-link-authentication
- api
- ixopay
- acquirer
- authorization
- transaction
source_url: https://documentation.ixopay.com/api/push/push-api
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* Push API
  * Introduction

Version: 3.0.0
# Push API
With our Push API you may easily push transactions into the platform, which were not actually processed through it (e.g. Transaction performed via POS terminals directly), by sending appropriate requests to the corresponding endpoint.
Any Transaction pushed to the platform will be stored just as any other transaction, but no direct processing (e.g. involving an acquirer for processing) takes place.
## Authentication[​](https://documentation.ixopay.com/api/push/push-api#authentication "Direct link to Authentication")
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