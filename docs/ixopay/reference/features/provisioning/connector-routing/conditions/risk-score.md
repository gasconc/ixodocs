---
title: RiskScore
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-risk-score-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-risk-score-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score
portal: ixopay-dev
updated: '2026-09-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * RiskScore

# RiskScore
Matches transactions whose risk-engine score satisfies a numeric comparison against a configured threshold. Shown as "Risk Score" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `riskScore`  | integer  | yes  | A score threshold  |  
| `comparator`  | string  | yes  |  `"="`, `"<"`, `"<="`, `">"`, `">="`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#example "Direct link to Example")
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Requires a risk profile to be configured on the meta-connector. If a risk score has not (yet) been computed for a transaction, the score is treated as `0` in the comparison.
  * If the transaction has no customer attached, rule evaluation stops and the default connector is used.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score#notes)
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```
```

{  

  "constraint": "RiskScore",  

  "params": {  

    "riskScore": 50,  

    "comparator": ">"  

  }  

}  

```