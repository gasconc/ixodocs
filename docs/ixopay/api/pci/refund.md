---
title: Refund
summary: ' PCI Transaction API'
tags:
- transaction-apikey-refund
- request-https-documentation-ixopay-com-api-pci-refund-request-direct-link-request
- responses-https-documentation-ixopay-com-api-pci-refund-responses-direct-link-responses
- callbacks-https-documentation-ixopay-com-api-pci-refund-callbacks-direct-link-callbacks
- request-body-callbackurl
- callbacks-responses-https-documentation-ixopay-com-api-pci-refund-callbacks-responses-direct-link-callbacks-responses
- api
- pci
- ixopay
- refund
source_url: https://documentation.ixopay.com/api/pci/refund
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Refund

# Refund
```
POST 
## /transaction/:apiKey/refund

```A refund transaction reverses a payment which was previously performed with [Debit](https://documentation.ixopay.com/api/pci/debit) or [Capture](https://documentation.ixopay.com/api/pci/capture).
Depending on the payment method you can even refund only a partial amount of the original transaction amount.
## Request[​](https://documentation.ixopay.com/api/pci/refund#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/pci/refund#responses "Direct link to Responses")
  * 200
  * 400
  * 422

Transaction response
Transaction error response
Transaction error response
## Callbacks[​](https://documentation.ixopay.com/api/pci/refund#callbacks "Direct link to Callbacks")
  * POST statusChange
```
POST 
## {$request.body#/callbackUrl}

```Receive status updates about transactions.
Status changes are posted as callbacks to the `callbackUrl` defined in the request. See the [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks) reference for further information about callbacks.
## Callbacks Responses[​](https://documentation.ixopay.com/api/pci/refund#callbacks-responses "Direct link to Callbacks Responses")
  * 200
  * 500

Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * PCI Transaction API
  * [Transaction](https://documentation.ixopay.com/api/pci/transaction)
  * Refund
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```
```
POST 
## /transaction/:apiKey/refund

```
```
POST 
## {$request.body#/callbackUrl}

```Reply with status 200 and body `OK` if you have received the callback successfully.
Callback processing failed and retries will be performed.
See the [Response handling — Acknowledging callback receipt](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt) reference for further information.