---
title: Connector List & Routing
summary: ' Connector List & Routing'
tags:
- connector-list-https-documentation-ixopay-com-manual-docs-merchant-connector-list-connector-list-direct-link-connector-list
- routing-https-documentation-ixopay-com-manual-docs-merchant-connector-list-routing-direct-link-routing
- ixopay
- merchant
source_url: https://documentation.ixopay.com/manual/docs/merchant/connector-list
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* [Merchant](https://documentation.ixopay.com/manual/docs/merchant)
  * Connector List & Routing

# Connector List & Routing
## Connector List[​](https://documentation.ixopay.com/manual/docs/merchant/connector-list#connector-list "Direct link to Connector List")
At some point during your [IXOPAY](https://www.ixopay.com) journey, you may have many different connectors distributed across different (Sub-)Tenants and Merchants. To get an overview of your Connector Setup and to filter and find specific Connectors, you may use the **Connector List.**
  1. Navigate to **Merchant Configuration > Connector List**
  2. Order the Connector List entries alphabetically according to specific columns by clicking **Up and Down Arrows** (see Connector List), or
  3. **Filter** the List according to your needs (see Filter Criteria Table) and click **Apply** (see Filter Result)

In the Connector List you have the option to directly edit the **Connector Settings, Fees or the Rules** see also [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector) and [Meta-Connector](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) section by using the Action Buttons (see Filter Result). Click on the **Rules** Button for Meta-Connectors to be redirected to the **Rule Editor**. For Multi-Method Connectors **select** from the drop-down **which Rules** you want to edit, before being redirected to the Rule Editor (see Connector List Edit).
![Connector List](https://documentation.ixopay.com/manual/assets/ideal-img/connector-list.96ff2e9.1280.png)Connector List![Filter Result](https://documentation.ixopay.com/manual/assets/ideal-img/filter-result.08a2be0.1280.png)Filter Result![Connector List Edit](https://documentation.ixopay.com/manual/assets/ideal-img/connector-list-edit.d3e3110.298.png)Connector List Edit  
| Filter  | Description  |  
| --- | --- |  
| Tenant  | Filter list by Tenant / Sub-tenant. Enable **Include Sub-Tenant** to include Connectors of Sub-Tenants of the selected Tenant in the result.  |  
| Merchant  | Filter list by selected Merchant  |  
| Provider  | Filter list by selected Provider  |  
| Adapter  | Filter list by selected Adapter  |  
| Method  | Filter list by selected Method  |  
| Status  | Filter list by selected Status - Enabled / Disabled  |  
| Routing Connectors  | Filter list by Routing Connectors 
  * All = Includes Connectors with and without routing capability (Connectors, Multi-Method Connectors, Meta-Connectors)
  * Yes = Only Connectors with routing capability (Multi-Method and Meta-Connectors)
  * No = Only Connectors without routing capability

 |  
note
The number of list entries per page is limited, you can navigate the pages at the bottom of each page.
## Routing[​](https://documentation.ixopay.com/manual/docs/merchant/connector-list#routing "Direct link to Routing")
The Routing section gives you an overview of your Routing Connector Setup and to filter and find specific Routing Connectors. Order Options, available Actions and Filter Options are identical to the Connector List, except Filter Option **Routing Connectors** , which **is set to Yes by default**.