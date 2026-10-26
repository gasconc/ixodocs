---
title: Get multi-method routing
summary: ' Provisioning API  Connector Routinghttps://documentation.ixopay.com/api/provisioning/connector-routing  Get
  multi-method routing'
tags:
- getconnectormultimethodrouting-connectorguid
- request-https-documentation-ixopay-com-api-provisioning-connector-multi-method-routing-request-direct-link-request
- responses-https-documentation-ixopay-com-api-provisioning-connector-multi-method-routing-responses-direct-link-responses
- api
- ixopay
source_url: https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing
portal: ixopay-dev
updated: '2026-10-26'
related: []
---

* [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector Routing](https://documentation.ixopay.com/api/provisioning/connector-routing)
  * Get multi-method routing

# Get multi-method routing
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```Returns the current routing configuration of a multi-method meta-connector as a multi-method routing document, one entry per payment method linked to the meta-connector.
The returned document is a valid request body for [Set multi-method routing](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing): fetch it, modify it, and send it back. Every rule node carries a server-assigned `id` — echo these ids when you resubmit to update rules in place. One exception: rule trees authored in the admin interface may contain conditions outside the multi-method subset (or not activated for your tenant); adjust such documents before resubmitting them.
Meta-level fields that have never been set (`defaultActionDisable`, `paymentSelectionMaxRetries`, `paymentSelectionExpiryHours`) are omitted from the response.
Rate limit
Please be aware of the rate limit for this API endpoint:
  * **Total limit:** Each unique API user is limited to to 100 requests per 60-second window.

If these limits are exceeded, the server will respond with a **HTTP 429** status code, indicating too many requests. Please ensure to manage your requests within these limits to maintain uninterrupted service.
## Request[​](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing#request "Direct link to request")
## Responses[​](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing#responses "Direct link to Responses")
  * 200
  * 401
  * 404
  * 422
  * 500

The current multi-method routing configuration of the meta-connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
The connector was not found. The GUID is unknown, or the connector is not accessible with the given API key.
The routing document was rejected. See the `errorCode` list in the response schema; the `errorMessage` names the offending part of the document.
Internal server error.
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```The current multi-method routing configuration of the meta-connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
The connector was not found. The GUID is unknown, or the connector is not accessible with the given API key.
The routing document was rejected. See the `errorCode` list in the response schema; the `errorMessage` names the offending part of the document.
Internal server error.
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Provisioning API
  * [Connector Routing](https://documentation.ixopay.com/api/provisioning/connector-routing)
  * Get multi-method routing
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```
```
GET 
## /getConnectorMultiMethodRouting/:connectorGuid

```The current multi-method routing configuration of the meta-connector.
Unauthorized, see [authentication](https://documentation.ixopay.com/api/provisioning/provisioning-api#generating-a-provisioning-api-key).
The connector was not found. The GUID is unknown, or the connector is not accessible with the given API key.
The routing document was rejected. See the `errorCode` list in the response schema; the `errorMessage` names the offending part of the document.
Internal server error.