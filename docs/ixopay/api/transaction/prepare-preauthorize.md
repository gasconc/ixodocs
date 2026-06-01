---
title: Prepare pre-authorize
summary: ' Transaction API  Prepare transactionhttps://documentation.ixopay.com/api/transaction/prepare-transaction  Prepare
  pre-authorize'
tags:
- transaction-apikey-prepare-preauthorize
- request-https-documentation-ixopay-com-api-transaction-prepare-preauthorize-request-direct-link-request
- responses-https-documentation-ixopay-com-api-transaction-prepare-preauthorize-responses-direct-link-responses
- callbacks-https-documentation-ixopay-com-api-transaction-prepare-preauthorize-callbacks-direct-link-callbacks
- request-body-callbackurl
- callbacks-responses-https-documentation-ixopay-com-api-transaction-prepare-preauthorize-callbacks-responses-direct-link-callbacks-responses
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/api/transaction/prepare-preauthorize
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* Transaction API
  * [Prepare transaction](https://documentation.ixopay.com/api/transaction/prepare-transaction)
  * Prepare pre-authorize

# Prepare pre-authorize
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```Prepare a pre-authorize transaction, will not create a transaction on the IXOPAY platform. Used with very specific payment adapters to prepare a frontend payment widget.
## Request[​](https://documentation.ixopay.com/api/transaction/prepare-preauthorize#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/transaction/prepare-preauthorize#responses "Direct link to Responses")
  * 200

Preauthorize Debit response
## Callbacks[​](https://documentation.ixopay.com/api/transaction/prepare-preauthorize#callbacks "Direct link to Callbacks")
  * POST statusChange
```
POST 
## {$request.body#/callbackUrl}

```Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
## Callbacks Responses[​](https://documentation.ixopay.com/api/transaction/prepare-preauthorize#callbacks-responses "Direct link to Callbacks Responses")
  * 200
  * 500

Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
  * Transaction API
  * [Prepare transaction](https://documentation.ixopay.com/api/transaction/prepare-transaction)
  * Prepare pre-authorize
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/prepare-preauthorize

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.