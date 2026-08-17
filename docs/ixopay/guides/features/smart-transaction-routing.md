---
title: Smart transaction routing
summary: ' Smart transaction routing'
tags:
- api
- json
- ixopay
- transaction
- merchant
- dashboard
source_url: https://documentation.ixopay.com/docs/guides/features/smart-transaction-routing
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/guides/features)
  * Smart transaction routing

# Smart transaction routing
Smart transaction routing sends each transaction to the connector best suited to process it, based on rules you define — by currency, customer country, amount, card properties, risk score, and more. Routing also covers **failover** (retrying failed transactions on backup connectors) and **load balancing** (splitting traffic across connectors).
Routing rules are configured on a **meta-connector** : a virtual connector that dispatches every transaction it receives to one of the merchant's regular connectors. Your integration processes payments against the meta-connector like against any other connector — the routing decision happens transparently on the platform.
There are two ways to author routing rules:
  * **Admin interface** — the visual rule editor, explained in the user manual: [Meta-Connector routing](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) and [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector).
  * **Provisioning API** — author the same rules programmatically as JSON documents, for example from your own dashboard.

Reference
For more details on  connector routing via the Provisioning API, check out the in-depth article on [connector routing via the Provisioning API](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing "Connector routing via the Provisioning API reference article") in the reference.
Both paths read and write the same configuration, so they can be combined freely.