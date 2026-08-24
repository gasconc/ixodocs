---
title: InitialConnector
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-initial-connector-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-initial-connector-direct-link
- api
- ixopay
- recurring
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * InitialConnector

# InitialConnector
Matches transactions whose initial-transaction connector equals the configured GUID — used for follow-up transactions (e.g. captures, refunds, recurring) that should re-route through the same connector that processed the original transaction. Shown as "Connector of Initial Transaction" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `connectorGuid`  | string  | yes  | GUID of one of your merchant's regular (non-meta) connectors  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#example "Direct link to Example")
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Applies only to transactions that have a recorded initial-transaction connector. New (root) transactions evaluate to false and evaluation continues in the `else` branch.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector#notes)
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```
```

{  

  "constraint": "InitialConnector",  

  "params": { "connectorGuid": "CO-1234-5678-9012-3456-7890-1234" }  

}  

```