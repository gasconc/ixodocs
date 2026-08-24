---
title: CreditcardBinCountry
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-country-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-creditcard-bin-country-direct-link
- api
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CreditcardBinCountry

# CreditcardBinCountry
Matches transactions whose card-BIN issuer country is (or is not) in a configured list. Shown as "Credit card: BIN Country" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `countries`  | array of strings  | yes  | One or more ISO 3166-1 alpha-2 country codes, e.g. `["DE", "AT", "CH"]`  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#example "Direct link to Example")
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
  * If no BIN data is found for the card, `"in"` conditions do not match while `"notin"` conditions match. For transactions without card data (or when the BIN lookup fails), rule evaluation stops and the default connector is used.
  * Country codes must be uppercase ISO 3166-1 alpha-2.
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country#notes)
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CreditcardBinCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```