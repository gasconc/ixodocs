---
title: Reconciliation API
summary: ' Reconciliation API'
tags:
- authentication-https-documentation-ixopay-com-api-reconciliation-reconciliation-api-authentication-direct-link-authentication
- api
- ixopay
- authorization
- reconciliation
source_url: https://documentation.ixopay.com/api/reconciliation/reconciliation-api
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Reconciliation API
  * Introduction

Version: 3.0.0
# Reconciliation API
Using our Reconciliation API, you may retrieve reconciliations of transactions within a given date range.
IXOPAY platform Full Version
The Reconciliation API is an optional feature which is not automatically available for all IXOPAY platform clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Authentication[​](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication "Direct link to Authentication")
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