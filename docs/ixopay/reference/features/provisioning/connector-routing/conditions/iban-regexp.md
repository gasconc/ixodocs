---
title: IbanRegexp
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-iban-regexp-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-iban-regexp-direct-link
- api
- json
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp
portal: ixopay-dev
updated: '2026-08-31'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * IbanRegexp

# IbanRegexp
Matches transactions whose customer IBAN matches a configured regular expression. Shown as "IBAN matches RegExp" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `regexp`  | string  | yes  | PCRE-style regular expression (without delimiters), applied to the customer IBAN  |  
| `comparator`  | string  | yes  |  `"eq"` (matches)  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#example "Direct link to Example")
Match IBANs from Germany:
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The expression is applied to the customer IBAN as a PCRE regular expression. Backslashes inside the pattern must be JSON-escaped.
  * If the IBAN does not match the expression, the transaction has no customer, or the customer has no IBAN, the rule is skipped and routing falls through to the default connector.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp#notes)
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRegexp",  

  "params": {  

    "regexp": "^DE",  

    "comparator": "eq"  

  }  

}  

```