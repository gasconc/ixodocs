---
title: IsRecurring
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-recurring-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-recurring-direct-link
- api
- json
- ixopay
- recurring
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * IsRecurring

# IsRecurring
Matches transactions that are (or are not) part of a recurring series. Shown as "Is recurring transaction" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `recurring`  | string  | yes  |  `"yes"` or `"no"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#example "Direct link to Example")
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The `recurring` parameter is a string (`"yes"` / `"no"`), not a JSON boolean.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring#notes)
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```
```

{  

  "constraint": "IsRecurring",  

  "params": { "recurring": "yes" }  

}  

```