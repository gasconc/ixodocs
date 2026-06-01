---
title: Continue
summary: ' Transaction API'
tags:
- transaction-apikey-continue-dcc
- request-https-documentation-ixopay-com-api-transaction-continue-dcc-request-direct-link-request
- responses-https-documentation-ixopay-com-api-transaction-continue-dcc-responses-direct-link-responses
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/api/transaction/continue-dcc
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* Transaction API
  * [DCC](https://documentation.ixopay.com/api/transaction/dcc)
  * Continue

# Continue
```
POST 
## /transaction/:apiKey/continue-dcc

```DCC is a direct currency conversion possibility which can be activated during a credit card payment, if activated in the connector. To do so you will first have to send a regular transaction request with an additional parameter to receive the current conversion rate.
If there is a possible conversion an additional request has to be sent to with the chosen currency to finalize the transaction.
To initiate a DCC Request, add the additional `requestDcc` parameter to the transaction request.
If a transaction is in the `PENDING_DCC` state, it can be finalized with a request to the `continue-dcc` endpoint. The possible currencies are the original currency of the transaction and the converted currency from the transaction response.
## Request[​](https://documentation.ixopay.com/api/transaction/continue-dcc#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/transaction/continue-dcc#responses "Direct link to Responses")
  * 200

Transaction response
```
POST 
## /transaction/:apiKey/continue-dcc

```
```
POST 
## /transaction/:apiKey/continue-dcc

```Transaction response
  * Transaction API
  * [DCC](https://documentation.ixopay.com/api/transaction/dcc)
  * Continue
```
POST 
## /transaction/:apiKey/continue-dcc

```
```
POST 
## /transaction/:apiKey/continue-dcc

```
```
POST 
## /transaction/:apiKey/continue-dcc

```Transaction response