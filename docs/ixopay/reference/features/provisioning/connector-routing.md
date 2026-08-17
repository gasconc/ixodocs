---
title: Connector routing
summary: ' Connector routing'
tags:
- routing-decisions-work-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-routing-decisions-work-direct-link-routing-decisions-work
- routing-document-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-routing-document-direct-link-routing-document
- rule-ids-round-trip-editing-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-rule-ids-round-trip-editing-direct-link-rule-ids-round-trip-editing
- failover-chains-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-failover-chains-direct-link-failover-chains
- classic-multi-method-endpoints-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-classic-multi-method-endpoints-direct-link-classic-multi-method-endpoints
- multi-method-meta-connectors-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-multi-method-meta-connectors-direct-link-multi-method-meta-connectors
- rule-conditions-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-rule-conditions-direct-link-rule-conditions
- validation-limits-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-validation-limits-direct-link-validation-limits
- error-codes-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-error-codes-direct-link-error-codes
- typical-workflow-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-typical-workflow-direct-link-typical-workflow
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * Connector routing

# Connector routing
Smart routing decides which connector processes a transaction, based on rules you define — by currency, customer country, amount, risk score, and more. This reference explains how to author those rules programmatically through the [Provisioning API](https://documentation.ixopay.com/api/provisioning/provisioning-api), so you can manage routing from your own platform instead of the admin interface.
Reference
For more details on  connector Routing endpoint, check out the in-depth article on [connector Routing endpoint](https://documentation.ixopay.com/api/provisioning/list-routing-constraints "Connector Routing endpoint reference article") in the reference.
Routing rules always belong to a **meta-connector** : a virtual connector that dispatches each transaction to one of the regular connectors of the same merchant. Meta-connectors are created via [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) and come in two flavors:
  * A **routing meta-connector** routes transactions of a single payment method.
  * A **multi-method meta-connector** additionally decides which payment methods are offered to the customer, and routes each method independently.

The same rules can also be edited visually in the admin interface — see [Meta-Connector routing](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) and [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector) in the user manual. Both authoring paths read and write the same configuration: you can create rules in the admin interface, fetch them via the API, modify them, and send them back.
## How routing decisions work[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#how-routing-decisions-work "Direct link to How routing decisions work")
Routing rules form a **decision tree**. Every node of the tree is one of:
  * a **condition node** — an `if` with a condition (for example _"currency is EUR"_), a `then` subtree and an `else` subtree, or
  * a **leaf** — the final decision for a transaction that reaches it.

A transaction enters at the root node and walks the tree top-down: if the condition matches, it continues in `then`, otherwise in `else`. When it reaches a leaf, the decision is made. When it reaches a missing branch (`else: null`, for example), the decision falls through to the **default connector**.
yes
no
yes
no
Currency is EUR?
Amount ≥ 500 EUR?
Route to connector B
Route to connector C
Route to connector A
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```In routing trees, every leaf **routes** to a connector. In the availability rules of multi-method meta-connectors, leaves instead **enable** or **disable** a payment method — see [Multi-method meta-connectors](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#multi-method-meta-connectors).
## The routing document[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#the-routing-document "Direct link to The routing document")
The API represents the rule tree of a routing meta-connector as a JSON document — the same document is returned by [Get routing](https://documentation.ixopay.com/api/provisioning/get-connector-routing) and accepted by [Set routing](https://documentation.ixopay.com/api/provisioning/set-connector-routing):
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
  
| Field  | Description  |  
| --- | --- |  
| `version`  | Version of the document format, currently always `"1"`. Incompatible format changes will ship as a new version.  |  
| `default`  | The default connector, used whenever no rule produces a decision. `null` clears it.  |  
| `rerouteRecurring`  | When `true`, recurring transactions are routed through the rule tree again instead of following their initial transaction.  |  
| `tree`  | The root node of the rule tree. `null` removes all rules.  |  
Sending a document **fully replaces** the existing rule tree — there is no partial update. The write endpoints are idempotent: submitting the same document twice produces the same configuration.
### Rule ids and round-trip editing[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-ids-and-round-trip-editing "Direct link to Rule ids and round-trip editing")
Every rule node carries an `id`, assigned by the platform when the rule is stored — an opaque identifier starting with `MPR-`. The ids follow two simple rules:
  * Send `id: null` (or omit it) to create a **new** rule.
  * Echo an `id` returned by a previous get/set call to **update that rule in place**.

This makes fetch–modify–resubmit editing safe: the response of every get/set call is itself a valid request body. An `id` that does not belong to the addressed meta-connector is rejected, and the same `id` must not appear twice in one tree. One exception to the round trip exists for multi-method meta-connectors — see [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-conditions).
tip
If you do not need to track rule identity across updates — for example because you always regenerate the whole tree from your own source of truth — you can simply send `id: null` everywhere. The full-replace semantics make both styles equivalent in outcome.
### Failover chains[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#failover-chains "Direct link to Failover chains")
A route leaf can name an ordered list of fallback connectors:
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```If the primary connector fails to process the transaction, the connectors in `onFail` are tried in order. Each connector in the chain must differ from its predecessor, including the primary connector.
## Classic and multi-method endpoints[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#classic-and-multi-method-endpoints "Direct link to Classic and multi-method endpoints")  
| Endpoint  | Purpose  |  
| --- | --- |  
| [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints)  | Discover the rule conditions available to your tenant.  |  
| [Get routing](https://documentation.ixopay.com/api/provisioning/get-connector-routing)  | Read the routing document of a routing meta-connector.  |  
| [Set routing](https://documentation.ixopay.com/api/provisioning/set-connector-routing)  | Replace the routing document of a routing meta-connector.  |  
| [Get multi-method routing](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing)  | Read the routing document of a multi-method meta-connector.  |  
| [Set multi-method routing](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing)  | Update the routing document of a multi-method meta-connector.  |  
Each endpoint only accepts the matching meta-connector type: Get/Set routing return error code `1017` when addressed with a multi-method meta-connector, Get/Set multi-method routing return `1018` when addressed with a routing meta-connector, and addressing a regular (non-meta) connector returns `1016`.
## Multi-method meta-connectors[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#multi-method-meta-connectors "Direct link to Multi-method meta-connectors")
The multi-method document configures each payment method individually:
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```Every method carries two independent rule trees:
  * The **availability tree** decides whether the method is offered to the customer. Its leaves are actions: `{ "action": "enable" }` or `{ "action": "disable" }`. An `enable` leaf requires the method to have a default connector. A method without an availability tree (`availability: null`) is available unconditionally.
  * The **routing tree** decides which connector processes the transaction once the customer has picked the method. Its leaves are `route` leaves — exactly the same shape as in [the routing document](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#the-routing-document). A method without a routing tree (`routing: null`) always uses its default connector.

Mixing leaf types — an `action` leaf in a routing tree, or a `route` leaf in an availability tree — is rejected with error code `1014`.
The document is **explicit-only** :
  * Methods that are not part of the `methods` array are **preserved untouched**.
  * To turn a method off, send its block with `"disabled": true` — omitting it does _not_ disable it.
  * Meta-level fields (`defaultActionDisable`, `paymentSelectionMaxRetries`, `paymentSelectionExpiryHours`) keep their current value when omitted or `null`, and are omitted from responses while they have never been set.

Payment methods are referenced by their identifier, for example `Creditcard`, `DirectDebit` or `Paypal`. Identifiers are matched case-insensitively; responses always return the canonical identifier. A method must already be linked to the meta-connector (via [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector)) before its routing can be configured.
## Rule conditions[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-conditions "Direct link to Rule conditions")
Each condition names its type in the `constraint` field and passes condition-specific parameters:
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```Call [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the conditions available to your tenant. Every catalogue entry includes a JSON Schema for its `params` object, so you can validate rules locally before submitting them. The [condition reference](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions) describes all conditions in detail.
Availability differs by setup:
  * Not every condition is included in your platform package out of the box — the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) reflects exactly what is available to your tenant. To activate additional conditions, contact your Customer Success Manager.
  * **Multi-method** routing accepts a fixed subset of the catalogue: `CustomerCountry`, `CustomerIpCountry`, `Currency`, `AmountCurrency`, `RiskScore` and `ExtraData`. The discovery endpoint always returns the full catalogue of routing meta-connectors; when authoring multi-method documents, restrict yourself to this subset. Rule trees created in the admin interface may contain conditions outside this subset (or not activated for your tenant) — a document fetched via [Get multi-method routing](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing) must then be adjusted before it can be resubmitted.

## Validation and its limits[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#validation-and-its-limits "Direct link to Validation and its limits")
When you submit a routing document, the platform checks that:
  * the JSON is well-formed and matches the published schema,
  * every connector you reference exists, is enabled and not archived, and belongs to the same merchant,
  * every condition names a known condition type with parameters in the expected shape,
  * the conditions you use are activated for your tenant (and in the multi-method subset, where applicable),
  * the tree is structurally valid: nodes are complete, leaves are well-typed, and no rule id is referenced more than once.

What the API does not validate
The API accepts your routing document as a _configuration_ , not as a _strategy_. It does not assess whether the document produces the routing decisions you intend. In particular, it does not check whether your conditions cover every transaction you will receive, whether failover chains can practically succeed (connectors are checked to be different, not to support the same payment methods or currencies), whether your chosen conditions actually apply to your traffic, or whether any commercial outcome is reasonable.
Routing documents are accepted on a best-effort basis: a successful response means the document is well-formed and references valid entities — not that it produces correct routing decisions. Test routing changes in the [sandbox environment](https://documentation.ixopay.com/docs/guides/getting-started/testing) before applying them to production.
## Error codes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#error-codes "Direct link to Error codes")
Rejected documents return HTTP status `422` with an error envelope; the `errorMessage` names the part of the document that was rejected.  
| Code  | Meaning  |  
| --- | --- |  
| `1010`  | The document is invalid — malformed JSON, schema violation, unsupported version, unknown rule id, or a payment method that is not linked to the meta-connector.  |  
| `1011`  | A condition (`constraint` field) is not part of the catalogue available to your tenant, or not part of the multi-method subset.  |  
| `1012`  | A condition's `params` object does not match its parameter schema.  |  
| `1013`  | A referenced connector does not exist, is disabled or archived, belongs to a different merchant, is a meta-connector, or repeats its predecessor in a failover chain.  |  
| `1014`  | The tree structure is invalid — for example a condition without branches, or the wrong leaf type for the tree.  |  
| `1015`  | A rule id is referenced more than once in the tree.  |  
| `1016`  | The addressed connector is not a meta-connector.  |  
| `1017`  | The addressed meta-connector is multi-method — use the multi-method endpoints.  |  
| `1018`  | The addressed meta-connector is a routing meta-connector — use Get routing / Set routing.  |  
Unknown or inaccessible connector GUIDs in the URL return HTTP status `404` with error code `1007`.
## Typical workflow[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#typical-workflow "Direct link to Typical workflow")
  1. **Discover** the available conditions once per tenant with [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints); cache the catalogue.
  2. **Fetch** the current configuration with [Get routing](https://documentation.ixopay.com/api/provisioning/get-connector-routing) or [Get multi-method routing](https://documentation.ixopay.com/api/provisioning/get-connector-multi-method-routing).
  3. **Modify** the document — validate condition parameters locally against the discovered schemas.
  4. **Submit** it with [Set routing](https://documentation.ixopay.com/api/provisioning/set-connector-routing) or [Set multi-method routing](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing), and store the returned document (it contains the assigned rule ids).

See [worked examples](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples) for complete request/response pairs of the most common routing setups.
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```See [worked examples](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples) for complete request/response pairs of the most common routing setups.
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * Connector routing
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```See [worked examples](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples) for complete request/response pairs of the most common routing setups.
  * [How routing decisions work](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#how-routing-decisions-work)
  * [The routing document](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#the-routing-document)
    * [Rule ids and round-trip editing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-ids-and-round-trip-editing)
    * [Failover chains](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#failover-chains)
  * [Classic and multi-method endpoints](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#classic-and-multi-method-endpoints)
  * [Multi-method meta-connectors](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#multi-method-meta-connectors)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-conditions)
  * [Validation and its limits](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#validation-and-its-limits)
  * [Error codes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#error-codes)
  * [Typical workflow](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#typical-workflow)
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```
```
flowchart TD
  A{"Currency is EUR?"} -- yes --> B{"Amount ≥ 500 EUR?"}
  A -- no --> C["Route to connector B"]
  B -- yes --> D["Route to connector C"]
  B -- no --> E["Route to connector A"]
```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": {  

        "connector": "CO-1234-1234-1234-1234-1234-1234",  

        "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

      }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "route": {  

    "connector": "CO-1234-1234-1234-1234-1234-1234",  

    "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }, { "connector": "CO-8765-8765-8765-8765-8765-8765" }]  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "rerouteRecurring": false,  

      "convertDebitToPreauth": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    }  

  ]  

}  

```
```

{ "constraint": "CustomerCountry", "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] } }  

```See [worked examples](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples) for complete request/response pairs of the most common routing setups.