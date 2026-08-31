---
title: CustomerCountry
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-customer-country-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-customer-country-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country
portal: ixopay-dev
updated: '2026-08-31'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CustomerCountry

# CustomerCountry
Matches transactions whose customer billing country is (or is not) in a configured list. Shown as "Customer billing country" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `countries`  | array of strings  | yes  | One or more ISO 3166-1 alpha-2 country codes, e.g. `["DE", "AT", "CH"]`  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#example "Direct link to Example")
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#notes "Direct link to Notes")
  * Country codes must be uppercase ISO 3166-1 alpha-2.
  * The Provisioning API requires the modern multi-country shape shown above. The legacy single-country shape (`{"country": "DE"}`) is no longer accepted via this endpoint — and a payload that mixes both `country` and `countries` is rejected outright.
  * If the transaction has no customer attached, the rule is skipped and routing falls through to the default connector.
  * Included in every platform package.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country#notes)
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```
```

{  

  "constraint": "CustomerCountry",  

  "params": {  

    "countries": ["DE", "AT", "CH"],  

    "comparator": "in"  

  }  

}  

```