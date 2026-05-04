---
title: Update
summary: ' Transaction API'
tags:
- schedule-apikey-scheduleid-update
- request-https-documentation-ixopay-com-api-transaction-schedule-update-request-direct-link-request
- responses-https-documentation-ixopay-com-api-transaction-schedule-update-responses-direct-link-responses
- callbacks-https-documentation-ixopay-com-api-transaction-schedule-update-callbacks-direct-link-callbacks
- request-body-callbackurl
- callbacks-responses-https-documentation-ixopay-com-api-transaction-schedule-update-callbacks-responses-direct-link-callbacks-responses
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/api/transaction/schedule-update
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Update

# Update
```
POST 
## /schedule/:apiKey/:scheduleId/update

```Update a schedule.
To update an existing schedule, simply send the fields which you wish to update.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 60 requests per 60-second window.
  * **Per`scheduleId` limit:** Each unique `scheduleId` is limited to 10 request per 60-second window.

If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/transaction/schedule-update#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#responses "Direct link to Responses")
  * 200
  * 429

Schedule response
Rate limit exceeded
## Callbacks[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks "Direct link to Callbacks")
  * POST statusChange
```
POST 
## {$request.body#/callbackUrl}

```Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/schedule-update#callbacks-responses "Direct link to Callbacks Responses")
  * 200
  * 500

Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
```
POST 
## /schedule/:apiKey/:scheduleId/update

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /schedule/:apiKey/:scheduleId/update

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
  * Transaction API
  * [Schedule](https://documentation.ixopay.com/api/transaction/schedule)
  * Update
```
POST 
## /schedule/:apiKey/:scheduleId/update

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /schedule/:apiKey/:scheduleId/update

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /schedule/:apiKey/:scheduleId/update

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.