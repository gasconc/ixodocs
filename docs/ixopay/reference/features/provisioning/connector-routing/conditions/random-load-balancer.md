---
title: RandomLoadBalancer
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-random-load-balancer-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-random-load-balancer-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * RandomLoadBalancer

# RandomLoadBalancer
Returns true probabilistically — use to distribute traffic across two connectors at a configured ratio. Shown as "Load Balance by Random" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `percentTrue`  | integer  | yes  | Expects values from `0` to `100` — the percentage of transactions for which the rule returns true  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#example "Direct link to Example")
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The split is approximate. `100` always routes to the `then` branch; a value of `0` does not fully exclude the `then` branch — to send no traffic to a connector, remove the rule instead of setting `0`.
  * Each transaction is evaluated independently — there is no session affinity.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer#notes)
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```
```

{  

  "id": null,  

  "if": {  

    "constraint": "RandomLoadBalancer",  

    "params": { "percentTrue": 70 }  

  },  

  "then": { "id": null, "route": { "connector": "CO-PRIMARY-..." } },  

  "else": { "id": null, "route": { "connector": "CO-SECONDARY-..." } }  

}  

```