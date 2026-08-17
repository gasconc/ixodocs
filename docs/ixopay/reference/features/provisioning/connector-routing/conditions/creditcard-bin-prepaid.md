---
title: CreditcardBinPrepaid
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-prepaid-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-prepaid-direct-link
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinPrepaid

# CreditcardBinPrepaid
Matches transactions whose card BIN is (or is not) prepaid. Shown as "Credit Card: BIN Prepaid" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `isPrepaid`  | string  | yes  |  `"yes"` or `"no"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Requires BIN data for the card. If the transaction has no card, or the BIN lookup fails, the rule is skipped and routing falls through to the default connector. If the lookup succeeds but has no data for the BIN, the condition evaluates to false and the else branch is followed.
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid#notes)
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```
```

{  

  "constraint": "CreditcardBinPrepaid",  

  "params": { "isPrepaid": "no" }  

}  

```