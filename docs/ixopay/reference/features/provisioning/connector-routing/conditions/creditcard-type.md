---
title: CreditcardType
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-type-parameters-direct-link-parameters
- brand-identifiers-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-type-brand-identifiers-direct-link-brand-identifiers
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-type-direct-link
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardType

# CreditcardType
Matches transactions whose credit-card brand is (or is not) in a configured list. Shown as "Credit card: Brand" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `types`  | array of strings  | yes  | One or more brand identifiers from the table below  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
### Brand identifiers[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#brand-identifiers "Direct link to Brand identifiers")
`visa`, `visa_electron`, `mastercard`, `amex`, `diners`, `jcb`, `discover`, `unionpay`, `maestro`, `uatp`, `dinacard`, `mada`, `meeza`, `elo`, `troy`
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#example "Direct link to Example")
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Brand identifiers must be lowercase exactly as listed in the table above; any other value is rejected.
  * If the transaction has no card data attached, rule evaluation stops and the default connector is used.
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#parameters)
    * [Brand identifiers](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#brand-identifiers)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type#notes)
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardType",  

  "params": {  

    "types": ["visa", "mastercard"],  

    "comparator": "in"  

  }  

}  

```