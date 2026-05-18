---
title: Customer profiles API
summary: ' Customer profiles API'
tags:
- request-format-https-documentation-ixopay-com-api-customer-profiles-customer-profiles-api-request-format-direct-link-request-format
- api
- json
- tls
- ixopay
- authorization
- transaction
- gateway
source_url: https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Introduction

Version: 3.0.0
Export
  * [OpenAPI Spec](https://gateway.ixopay.com/Schema/V3/CustomerProfilesOpenApiSpecification.yml)

# Customer profiles API
The customer profiles API allows you to store customer data and multiple payment instruments (for multiple payment methods/connectors) for your customers. Via this API profiles can be retrieved, updated and deleted. To create a profile use the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api).
IXOPAY platform Full Version
Customer profiles are an optional feature which is not automatically available for all [IXOPAY platform](https://www.ixopay.com) clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Request format[​](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#request-format "Direct link to Request format")
Requests to the Customer Profile API are sent via HTTPS containing a JSON body.
  * The server accepts TLS version ≥ 1.2 connections.
  * Content-Type must be `application/json`
  * Authentication credentials are sent via BASIC Auth (see below)

**Headers Example:**
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```## Authentication[​](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#authentication "Direct link to Authentication")
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
Export
  * [OpenAPI Spec](https://gateway.ixopay.com/Schema/V3/CustomerProfilesOpenApiSpecification.yml)
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Customer profiles API
  * Introduction
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
  * [Request format](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api#request-format)
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```
```

Content-Type: application/json; charset=utf-8  

Date: Mon, 01 Jan 2018 11:01:36 UTC  

Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk  

X-Signature: DH7MfiGq5QYQusTzWMpWiJpnPz+o1pZbcf7HCiT1+jjc+7UrnmDSpVuHzrRrZ6UxJUYYnOHJfG91zm0VimWXHg==  

```tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |