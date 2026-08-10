---
title: CreditcardBinReloadable
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-reloadable-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-reloadable-direct-link
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinReloadable

# CreditcardBinReloadable
Matches transactions whose card BIN is (or is not) reloadable. Shown as "Credit Card: BIN Reloadable" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `isReloadable`  | string  | yes  |  `"yes"` or `"no"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Requires BIN data for the card. If the transaction has no card, or the BIN lookup fails, the rule is skipped and routing falls through to the default connector. If the lookup succeeds but has no data for the BIN, the condition evaluates to false and the else branch is followed.
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable#notes)
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```
```

{  

  "constraint": "CreditcardBinReloadable",  

  "params": { "isReloadable": "yes" }  

}  

```