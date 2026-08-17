---
title: ExtraData
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-extra-data-parameters-direct-link-parameters
- exact-match-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-extra-data-exact-match-direct-link-exact-match
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * ExtraData

# ExtraData
Matches transactions by an arbitrary key/value pair in the transaction's `extraData` field. Shown as "Extra data" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `key`  | string  | yes  | The name of the extraData field to inspect, e.g. `"channel"`, `"sku"`  |  
| `comparator`  | string  | yes  |  `"="`, `"!="`, `"matches"`, `"matches_not"`  |  
| `value`  | string  | yes  | The literal value (for `=` / `!=`) or PCRE regular expression (for `matches` / `matches_not`) to compare against  |  
## Example — exact match[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#example--exact-match "Direct link to Example — exact match")
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```## Example — regex match[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#example--regex-match "Direct link to Example — regex match")
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The `matches` / `matches_not` comparators take a PCRE-style regular expression without delimiters.
  * If the transaction has no extraData field with the configured key, the rule treats the value as absent — the result depends on the comparator (`=` returns false; `!=` returns true; regex comparators return false / true accordingly). Exception: the key `currency` falls back to the transaction's currency when it is not present in extraData.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#parameters)
  * [Example — exact match](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#example--exact-match)
  * [Example — regex match](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#example--regex-match)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data#notes)
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "channel",  

    "comparator": "=",  

    "value": "premium"  

  }  

}  

```
```

{  

  "constraint": "ExtraData",  

  "params": {  

    "key": "sku",  

    "comparator": "matches",  

    "value": "^PREMIUM-"  

  }  

}  

```