---
title: CreditcardCardNetwork
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-card-network-parameters-direct-link-parameters
- network-identifiers-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-card-network-network-identifiers-direct-link-network-identifiers
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-card-network-direct-link
- api
- ixopay
- credit-card
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network
portal: ixopay-dev
updated: '2026-08-17'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardCardNetwork

# CreditcardCardNetwork
Matches follow-up transactions whose card network is in a configured list. Shown as "Credit card: Card Network" in the condition catalogue. Card networks are coarser-grained than card brands — useful for routing rules that apply to an entire network's traffic.
This condition applies to follow-up transactions that reference an initial transaction: the card network is determined from the initial transaction. Transactions without a reference transaction never match.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `cardNetworks`  | array of strings  | yes  | One or more network identifiers from the list below (lowercase)  |  
| `comparator`  | string  | yes  | `"in"`  |  
### Network identifiers[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#network-identifiers "Direct link to Network identifiers")
`visa`, `mastercard`, `nyce`, `star`, `accel`, `amex`, `cartes_bancaires`, `jcb`, `diners`, `discover`, `mada`, `maestro`, `omannet`, `pulse`, `upi`
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#example "Direct link to Example")
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * Network identifiers are case-sensitive and must be lowercase.
  * Only the `in` comparator is supported. To express "not in network X", nest two rules and swap the `then` / `else` branches.
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#parameters)
    * [Network identifiers](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#network-identifiers)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network#notes)
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardCardNetwork",  

  "params": {  

    "cardNetworks": ["visa"],  

    "comparator": "in"  

  }  

}  

```