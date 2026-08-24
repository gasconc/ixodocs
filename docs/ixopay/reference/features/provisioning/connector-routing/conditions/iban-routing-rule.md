---
title: IbanRoutingRule
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-iban-routing-rule-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-iban-routing-rule-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * IbanRoutingRule

# IbanRoutingRule
Matches transactions whose customer IBAN contains a configured substring at a configured position — useful for routing rules that depend on a specific bank identifier or country block within the IBAN. Shown as "Check IBAN exact position value" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `position`  | integer  | yes  | 1-indexed start position within the IBAN string (e.g. `1` for the first two country-code letters)  |  
| `value`  | string  | yes  | The expected substring to compare against  |  
| `comparator`  | string  | yes  |  `"eq"` (matches)  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#example "Direct link to Example")
Match IBANs whose first two characters are `DE` (Germany):
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The match extracts a substring of the same length as `value`, starting at `position` (1-indexed). Lengths and positions must be consistent with the IBAN structure you're checking.
  * If the transaction has no customer or the customer has no IBAN, the rule is skipped and routing falls through to the default connector.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule#notes)
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```
```

{  

  "constraint": "IbanRoutingRule",  

  "params": {  

    "position": 1,  

    "value": "DE",  

    "comparator": "eq"  

  }  

}  

```