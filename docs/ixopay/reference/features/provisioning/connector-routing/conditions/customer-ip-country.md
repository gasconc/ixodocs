---
title: CustomerIpCountry
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-customer-country-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-customer-country-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * CustomerIpCountry

# CustomerIpCountry
Matches transactions whose customer IP-resolved country (via GeoIP) is (or is not) in a configured list. Shown as "Customer IP Country" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `countries`  | array of strings  | yes  | One or more ISO 3166-1 alpha-2 country codes, e.g. `["US", "CA"]`  |  
| `comparator`  | string  | yes  |  `"in"` or `"notin"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#example "Direct link to Example")
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#notes "Direct link to Notes")
  * Country comparison is case-insensitive, but ISO 3166-1 alpha-2 uppercase form is the recommended canonical input.
  * The Provisioning API requires the modern multi-country shape shown above. The legacy single-country shape (`{"country": "US"}`) is no longer accepted via this endpoint — and a payload that mixes both `country` and `countries` is rejected outright.
  * If the transaction has no customer attached, the rule is skipped and routing falls through to the default connector.
  * Included in every platform package.
  * Also available in multi-method routing documents.
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country#notes)
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```
```

{  

  "constraint": "CustomerIpCountry",  

  "params": {  

    "countries": ["US", "CA"],  

    "comparator": "notin"  

  }  

}  

```