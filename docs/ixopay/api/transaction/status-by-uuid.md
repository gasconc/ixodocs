---
title: Get by UUID
summary: ' Transaction API  Get by UUID'
tags:
- status-apikey-getbyuuid-uuid
- request-https-documentation-ixopay-com-api-transaction-status-uuid-request-direct-link-request
- responses-https-documentation-ixopay-com-api-transaction-status-uuid-responses-direct-link-responses
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/api/transaction/status-by-uuid
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* Transaction API
  * [Status](https://documentation.ixopay.com/api/transaction/status)
  * Get by UUID

# Get by UUID
```
GET 
## /status/:apiKey/getByUuid/:uuid

```Retrieve status of the transaction identified by `uuid`.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`uuid` limit:** Each unique `uuid` is limited to 10 request per 60-second window.

If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/status-by-uuid#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/transaction/status-by-uuid#responses "Direct link to Responses")
  * 200
  * 429

Status response
Rate limit exceeded
```
GET 
## /status/:apiKey/getByUuid/:uuid

```
```
GET 
## /status/:apiKey/getByUuid/:uuid

```Status response
Rate limit exceeded
  * Transaction API
  * [Status](https://documentation.ixopay.com/api/transaction/status)
  * Get by UUID
```
GET 
## /status/:apiKey/getByUuid/:uuid

```
```
GET 
## /status/:apiKey/getByUuid/:uuid

```
```
GET 
## /status/:apiKey/getByUuid/:uuid

```Status response
Rate limit exceeded