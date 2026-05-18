---
title: PCI Transaction API
summary: ' PCI Transaction API'
tags:
- request-format-https-documentation-ixopay-com-api-pci-pci-transaction-api-request-format-direct-link-request-format
- api
- json
- pci
- pci-dss
- tls
- tokenization
- ixopay
- payment-gateway
- authorization
source_url: https://documentation.ixopay.com/api/pci/pci-transaction-api
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * Introduction

Version: 3.0.0
# PCI Transaction API
This API enables PCI-compliant merchants to send transactions containing card data directly, without requiring them to use the payment.js tokenization or hosted payment page.
The API solely supports card transactions. For any other kind of payment method (e.g. PayPal, DirectDebit etc.) please refer to the regular Transaction API.
info
For those familiar with the regular Transaction API, the only modification is the addition of the `cardData` element; all other functionality remains unchanged.
tip
To test the PCI Transaction API in the Sandbox environment add following header to your request:  
`X-Environment: Sandbox`
PCI API Access Requirements
To access the PCI API, we require some documentation from merchants. This process takes some time, so please plan accordingly.
Here are the steps to enable the PCI API:
  1. Request your Named Technical Support Contact (NTSC) create a support ticket in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support), providing the following information:
     * Request for the system (production or sandbox)
     * Related merchant guid — which looks like `ME-0123-4567-890a-bcde-f012-3456`
     * PCI compliance evidence
  2. As PCI compliance evidence, we only accept:
     * Official SAQ-D or AOC documents. QSA certificates are not accepted, see [PCI requirements](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/Are-compliance-certificates-recognized-for-PCI-DSS-validation/).
     * The document must not be be expired.
     * The document must be signed.
     * The document must be complete with no pages missing.
     * The merchant's name used in the document and in the [IXOPAY platform](https://www.ixopay.com) must be the same.
     * It is acceptable if the names do not match in the case where a payment gateway provides your AOC or SAQ-D and sends us transactions on your behalf, as long as you inform us in advance.

Please note that we keep track and document who we've granted the PCI API for and when. We also require to review the SAQ-D or AOC when it expires and reserve the right to revoke the permission for the PCI API.
You can expect a response from our team within approximately 2 days after submitting your application for review.
Thank you for your cooperation. We take PCI compliance seriously, and these requirements ensure that we maintain the highest level of security for our platform and our merchants.
## Request format[​](https://documentation.ixopay.com/api/pci/pci-transaction-api#request-format "Direct link to Request format")
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

```## Authentication[​](https://documentation.ixopay.com/api/pci/pci-transaction-api#authentication "Direct link to Authentication")
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
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
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
  * [Request format](https://documentation.ixopay.com/api/pci/pci-transaction-api#request-format)
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