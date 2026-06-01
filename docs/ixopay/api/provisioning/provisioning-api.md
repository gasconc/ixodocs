---
title: Provisioning API
summary: ' Provisioning API'
tags:
- authentication-https-documentation-ixopay-com-api-provisioning-provisioning-api-authentication-direct-link-authentication
- generating-provisioning-api-key-https-documentation-ixopay-com-api-provisioning-provisioning-api-generating-provisioning-api-key-direct-link-generating-provisioning-api-key
- api
- ixopay
- authorization
- merchant
source_url: https://documentation.ixopay.com/api/provisioning/provisioning-api
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * Introduction

Version: 3.0.0
# Provisioning API
The provisioning API allows you to manage your [IXOPAY platform](https://www.ixopay.com) entities. You can create, read, update tenants, merchants, merchant users and connectors.
IXOPAY platform Full Version
The Provisioning API is an optional feature which is not automatically available for all IXOPAY platform clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Authentication[​](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication "Direct link to Authentication")
  * HTTP: Basic Auth

To authenticate API requests, the API key and password must be sent as BASIC Authentication in the `Authorization` header, as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617). To achieve this, the API key and password are first concatenated with a `:` (colon) separator, and the resulting string is then Base64 encoded. Here is an example of how this process works:
  1. Suppose the API key is `01234567-89ab-cdef-0123456789abcdef` and the password is `0123456789abcdef0123456789abcdef`.
  2. Concatenate the username and password with a `:` separator: `01234567-89ab-cdef-0123456789abcdef:0123456789abcdef0123456789abcdef`.
  3. Base64 encode the concatenated string: `MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.
  4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic MDEyMzQ1NjctODlhYi1jZGVmLTAxMjM0NTY3ODlhYmNkZWY6MDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYK`.

tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username (API key) and password to the appropriate request object.
### Generating a Provisioning API Key[​](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key "Direct link to Generating a Provisioning API Key")
  1. Navigate to "**System Setup** " followed by "**API Keys** " from the main menu.
  2. Click on "**+ New API Key** " located at the top-right corner of the screen.
  3. Make sure to select "**Provisioning API** " in the "**Services** " field.
  4. Specify any IP addresses that are authorized to access the Provisioning API with this API key. 
     * Enter multiple IP addresses in a comma-separated format, with **no** whitespace in between (for instance, "`12.12.12.12,41.41.41.41`").
     * You can also employ [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)' for specifying IP addresses (for instance, "`10.0.0.0/28`" includes all IP addresses from `10.0.0.0` to `10.0.0.15`).
  5. Click on "**+ Create** " to generate your new API Key.
  6. It is crucial to securely store the provided password upon creation, as this will be the only opportunity it will be visible to you. Once you navigate away from the page, you'll only have the option to reset the password, not view the existing one.

  
| Security Scheme Type:  | http  |  
| --- | --- |  
| HTTP Authorization Scheme:  | basic  |  
Version: 3.0.0