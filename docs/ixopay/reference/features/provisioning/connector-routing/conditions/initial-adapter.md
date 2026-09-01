---
title: InitialAdapter
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-initial-adapter-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-initial-adapter-direct-link
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter
portal: ixopay-dev
updated: '2026-09-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * InitialAdapter

# InitialAdapter
Matches transactions submitted with a customer-profile payment token by the adapter and payment method of the transaction that originally registered that token. Shown as "Adapter of Initial Transaction" in the condition catalogue.
Use this condition to keep payments made with a stored customer-profile payment token on infrastructure compatible with where the token was originally registered, without pinning them to one specific connector (use [`InitialConnector`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector) for that).
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `adapterIdentifier`  | string  | yes  | The identifier of the adapter of the initial transaction  |  
| `methodIdentifier`  | string  | yes  | The identifier of the payment method of the initial transaction  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#example "Direct link to Example")
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Available for routing meta-connectors only — not in multi-method routing documents.
  * Both parameters must match the token's registration transaction for the condition to match.
  * All other transactions — including follow-ups referenced in any other way — evaluate to false and continue in the `else` branch.
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter#notes)
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```
```

{  

  "constraint": "InitialAdapter",  

  "params": {  

    "adapterIdentifier": "SimulatorPci",  

    "methodIdentifier": "Creditcard"  

  }  

}  

```