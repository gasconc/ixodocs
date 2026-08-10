---
title: CreditcardBinSegment
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-segment-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-segment-direct-link
- api
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinSegment

# CreditcardBinSegment
Matches transactions whose card segment is (or is not) in a configured list. Shown as "Credit card: BIN segment" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
| `segments`  | array of strings  | yes  |  `"Consumer"`, `"Business"`, `"Commercial"`, `"Government"`, `"Unknown"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Available for routing meta-connectors only — not in multi-method routing documents.
  * Segment values are case-sensitive — use the exact capitalization listed above (for example `"Consumer"`, not `"CONSUMER"`).
  * If no BIN data is found for the card, `"in"` conditions do not match while `"notin"` conditions match. For transactions without card data (or when the BIN lookup fails), rule evaluation stops and the default connector is used.
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment#notes)
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinSegment",  

  "params": {  

    "comparator": "in",  

    "segments": ["Consumer"]  

  }  

}  

```