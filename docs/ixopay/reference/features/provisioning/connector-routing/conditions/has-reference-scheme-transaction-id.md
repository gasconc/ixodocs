---
title: HasReferenceSchemeTransactionId
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditionshttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions'
tags:
- parameters-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-reference-scheme-transaction-parameters-direct-link-parameters
- https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-reference-scheme-transaction-direct-link
- api
- ixopay
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id
portal: ixopay-dev
updated: '2026-08-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * [Rule conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions)
  * HasReferenceSchemeTransactionId

# HasReferenceSchemeTransactionId
Matches transactions that carry (or do not carry) a scheme transaction ID — used to recognise follow-up transactions that need a credentials-on-file identifier. Shown as "Has Reference Scheme Transaction ID" in the condition catalogue.
## Parameters[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#parameters "Direct link to Parameters")  
| Field  | Type  | Required  | Allowed values  |  
| --- | --- | --- | --- |  
| `schemeRefIdExpected`  | string  | yes  |  `"yes"` or `"no"`  |  
## Example[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#example "Direct link to Example")
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```## Notes[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#notes "Direct link to Notes")
  * **Availability:** might not be included in your platform package — if this condition is missing from the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints), contact your Customer Success Manager to have it activated.
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```  * [Parameters](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#parameters)
  * [Example](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#example)
  * [Notes](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id#notes)
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```
```

{  

  "constraint": "HasReferenceSchemeTransactionId",  

  "params": { "schemeRefIdExpected": "yes" }  

}  

```