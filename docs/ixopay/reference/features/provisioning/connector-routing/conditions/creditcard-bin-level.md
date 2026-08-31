---
title: CreditcardBinLevel
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-level-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-level-direct-link
- api
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level
portal: ixopay-dev
updated: '2026-08-31'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinLevel

# CreditcardBinLevel
Matches transactions whose card-BIN level is (or is not) in a configured list. Shown as "Credit card: BIN Level" in the condition catalogue. Level values such as `PLATINUM`, `PREMIUM`, `CORPORATE`, `BUSINESS` or `STANDARD` are illustrative — the available values are data-derived and not guaranteed.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `levels`  | array of strings  | yes  | One or more level identifiers (e.g. `["PREMIUM", "CORPORATE"]`)  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The set of level values is derived from card BIN data and can change over time. Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover the values currently available.
  * If no BIN data is found for the card (or the BIN source does not report levels), `"in"` conditions do not match; `"notin"` conditions match when no BIN entry was found at all. For transactions without card data (or when the BIN lookup fails), rule evaluation stops and the default connector is used.
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level#notes)
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLevel",  

  "params": {  

    "levels": ["PREMIUM", "CORPORATE"],  

    "comparator": "in"  

  }  

}  

```