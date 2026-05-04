---
title: Create
summary: ' Provisioning API'
tags:
- createconnector-merchantguid
- request-https-documentation-ixopay-com-api-provisioning-create-connector-request-direct-link-request
- responses-https-documentation-ixopay-com-api-provisioning-create-connector-responses-direct-link-responses
- api
- ixopay
- merchant
source_url: https://documentation.ixopay.com/api/provisioning/create-connector
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector](https://documentation.ixopay.com/api/provisioning/connector)
  * Create

# Create
```
POST 
## /createConnector/:merchantGuid

```Create a connector for the given merchant.
Meta-connector
A meta-connector can only be either a `routingMetaConnector` or a `multiMethodMetaConnector`, not both.
  * To create a classic routing meta-connector, add `routingMetaConnector` and the corresponding properties.
  * To create a multi-method meta-connector, add `multiMethodMetaConnector` and the corresponding properties.

## Request[​](https://documentation.ixopay.com/api/provisioning/create-connector#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/provisioning/create-connector#responses "Direct link to Responses")
  * 200
  * 401
  * 422
  * 500

The created connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
Unprocessable entity.
Internal server error.
```
POST 
## /createConnector/:merchantGuid

```
```
POST 
## /createConnector/:merchantGuid

```The created connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
Unprocessable entity.
Internal server error.
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector](https://documentation.ixopay.com/api/provisioning/connector)
  * Create
```
POST 
## /createConnector/:merchantGuid

```
```
POST 
## /createConnector/:merchantGuid

```
```
POST 
## /createConnector/:merchantGuid

```The created connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
Unprocessable entity.
Internal server error.