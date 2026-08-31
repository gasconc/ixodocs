---
title: TransactionType
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-transaction-type-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-transaction-type-direct-link
- api
- ixopay
- refund
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type
portal: ixopay-dev
updated: '2026-08-31'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * TransactionType

# TransactionType
Matches transactions whose type equals the configured value. Shown as "Transaction type" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `type`  | string  | yes  |  `"debit"`, `"preauthorize"`, `"register"`, `"payout"`, `"refund"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#example "Direct link to Example")
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * The match is **exact** — there is no comparator. To match multiple transaction types, chain two rules or use nested conditions with swapped branches.
  * Transaction-type values are case-sensitive and must be lowercase.
  * Available for routing meta-connectors only — not in multi-method routing documents.
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type#notes)
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```
```

{  

  "constraint": "TransactionType",  

  "params": { "type": "debit" }  

}  

```