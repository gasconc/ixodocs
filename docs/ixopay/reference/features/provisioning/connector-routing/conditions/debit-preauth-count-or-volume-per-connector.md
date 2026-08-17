---
title: DebitPreauthCountOrVolumePerConnector
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-debit-preauth-count-volume-per-connector-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-debit-preauth-count-volume-per-connector-direct-link
- api
- json
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * DebitPreauthCountOrVolumePerConnector

# DebitPreauthCountOrVolumePerConnector
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#parameters "Direct link to Parameters")
All six parameters are required and sit at the top level of `params`.  
| Field  | Type  | Allowed values  |  
| --- | --- | --- |  
| `valueReference`  | string  |  `"merchant"` to count merchant-wide, or a connector GUID to count only that connector's transactions  |  
| `valueUnit`  | string  |  `"count"` (number of transactions) or `"volume"` (sum of transaction amounts)  |  
| `timeReference`  | string  | A numeric string indicating how many units of time to look back, e.g. `"24"` (window capped at 61 days)  |  
| `timeUnit`  | string  |  `"seconds"`, `"minutes"`, `"hours"`, `"days"`  |  
| `comparator`  | string  |  `"="`, `">"`, `">="`, `"<"`, `"<="`  |  
| `value`  | string  | The threshold to compare against, as a numeric string, e.g. `"1000"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#example "Direct link to Example")
Match when a specific connector has processed more than 1000 of volume in the last hour:
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Use `"merchant"` as `valueReference` to count across all of the merchant's connectors. To scope to a specific connector, pass that connector's GUID instead.
  * `timeReference` and `value` are sent as numeric strings (e.g. `"1"`, `"1000"`), not as JSON numbers.
  * `valueUnit` and `timeUnit` use lowercase values (`"count"` / `"volume"` and `"seconds"` / `"minutes"` / `"hours"` / `"days"`).
  * The look-back window is capped at 61 days — larger values are treated as 61 days.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector#notes)
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```
```

{  

  "constraint": "DebitPreauthCountOrVolumePerConnector",  

  "params": {  

    "valueReference": "CO-1234-5678-...",  

    "valueUnit": "volume",  

    "timeReference": "1",  

    "timeUnit": "hours",  

    "comparator": ">=",  

    "value": "1000"  

  }  

}  

```