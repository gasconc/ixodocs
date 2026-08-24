---
title: CreditcardBinLookupStatus
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-lookup-status-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-lookup-status-direct-link
- api
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinLookupStatus

# CreditcardBinLookupStatus
Matches transactions by the status of their BIN lookup — useful for routing differently when BIN data is unavailable or when the lookup failed. Shown as "Credit card: BIN Lookup Status" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `statuses`  | array of strings  | yes  | One or more of: `"success"`, `"no_data"`, `"error"`  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * `success` indicates the BIN was found in the BIN database.
  * `no_data` indicates the BIN was not found.
  * `error` indicates the lookup itself failed (e.g. due to a timeout).
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status#notes)
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinLookupStatus",  

  "params": {  

    "statuses": ["success"],  

    "comparator": "in"  

  }  

}  

```