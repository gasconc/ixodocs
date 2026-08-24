---
title: AmountCurrency
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-amount-currency-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-amount-currency-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * AmountCurrency

# AmountCurrency
Matches transactions whose amount (in a chosen currency) satisfies a numeric comparison against a threshold. Shown as "Amount & Currency" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `amount`  | number  | yes  | A non-negative number, e.g. `100`, `1500.50`  |  
| `currency`  | string  | yes  | Any ISO 4217 code (`EUR`, `USD`, …), or the literal `"Base Amount"`  |  
| `comparator`  | string  | yes  |  `"="`, `">"`, `">="`, `"<"`, `"<="`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#example "Direct link to Example")
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * When `currency` is set to `"Base Amount"` (note the space, exact case), the comparison uses the transaction's amount already normalised to the tenant's base currency — no conversion at evaluation time.
  * When `currency` is a regular ISO code different from the transaction's currency, the platform converts the transaction amount to the configured currency before comparing. Rules that depend on cross-currency comparison only work when an exchange rate is available.
  * `amount` accepts whole and decimal values, e.g. `100` or `1500.50` — send it as a number, not as a string.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency#notes)
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```
```

{  

  "constraint": "AmountCurrency",  

  "params": {  

    "amount": 1000,  

    "currency": "EUR",  

    "comparator": ">="  

  }  

}  

```