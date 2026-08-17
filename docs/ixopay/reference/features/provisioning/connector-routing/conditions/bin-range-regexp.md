---
title: BinRangeRegexp
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-bin-range-regexp-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-bin-range-regexp-direct-link
- api
- json
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * BinRangeRegexp

# BinRangeRegexp
Matches transactions whose card BIN matches (or does not match) a configured regular expression. Shown as "BIN Range matches RegExp" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `regexp`  | string  | yes  | PCRE-style regular expression (without delimiters), applied to the card's BIN digits  |  
| `comparator`  | string  | yes  |  `"eq"` (matches) or `"neq"` (does not match)  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#example "Direct link to Example")
Match Visa BINs starting with 4 followed by any 5 digits:
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The expression is applied to the card's BIN digits — these may be 6 **or 8** digits, so avoid `$`-anchored 6-digit patterns. Backslashes inside the pattern must be JSON-escaped.
  * If the transaction has no card or the BIN is empty, rule evaluation stops and the default connector is used.
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp#notes)
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "BinRangeRegexp",  

  "params": {  

    "regexp": "^4[0-9]{5}",  

    "comparator": "eq"  

  }  

}  

```