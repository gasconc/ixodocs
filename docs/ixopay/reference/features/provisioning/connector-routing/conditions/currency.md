---
title: Currency
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-currency-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-currency-direct-link
- api
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * Currency

# Currency
Matches transactions whose currency equals the configured value. Shown as "Currency" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `currency`  | string  | yes  | An active ISO 4217 uppercase 3-letter code (e.g. `EUR`, `USD`, `GBP`, `CHF`, `JPY`) — the schema returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) is the authoritative list  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#example "Direct link to Example")
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The match is **exact** — there is no comparator. To express "currency is not X", nest two rules and swap the `then` / `else` branches.
  * Currency codes are case-sensitive. Use canonical uppercase form.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency#notes)
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```
```

{  

  "constraint": "Currency",  

  "params": { "currency": "EUR" }  

}  

```