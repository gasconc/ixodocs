---
title: CreditcardBinType
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-type-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-type-direct-link
- api
- ixopay
- credit-card
- debit-card
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinType

# CreditcardBinType
Matches transactions whose card type (per BIN data) is (or is not) in a configured list. Shown as "Credit card: BIN Type" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `types`  | array of strings  | yes  | One or more of: `"CREDIT"`, `"DEBIT"`  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Use this to discriminate credit-card vs debit-card traffic for connectors that price the two differently.
  * If no BIN data is found for the card, `"in"` conditions do not match while `"notin"` conditions match. For transactions without card data (or when the BIN lookup fails), rule evaluation stops and the default connector is used.
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type#notes)
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinType",  

  "params": {  

    "types": ["CREDIT"],  

    "comparator": "in"  

  }  

}  

```