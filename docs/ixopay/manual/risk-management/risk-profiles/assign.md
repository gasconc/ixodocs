---
title: Assign Risk Profiles
summary: ' Risk Managementhttps://documentation.ixopay.com/manual/docs/risk-management  Risk
  Profiles & Risk Ruleshttps://documentation.ixopay.com/manual/docs/risk-management/risk-profiles  Assign
  Risk Profiles'
tags:
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/assign
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * [Risk Profiles & Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles)
  * Assign Risk Profiles

# Assign Risk Profiles
After setting up your risk profiles by defining the appropriate rules, you can assign risk profiles to the following:
  1. A specific merchant (see [Create Merchant](https://documentation.ixopay.com/manual/docs/merchant/profiles)).
  2. A specific connector (see [Create Connector](https://documentation.ixopay.com/manual/docs/connector/create)). If desired, a specific risk profile can also be assigned to transactions initiated via the [Virtual Terminal](https://documentation.ixopay.com/manual/docs/virtual-terminal-moto) (see [Create Connector](https://documentation.ixopay.com/manual/docs/connector/create) - 4.i.).
  3. A meta-connector (see [Routing - Cascading - Balancing - Fallback](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) - 2.h.). If desired, a specific risk profile can also be assigned to transactions initiated via the Virtual Terminal (see [Routing - Cascading - Balancing - Fallback](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) - 2.i.).
  4. A multi-method connector by assigning a **Risk Profile before Routing** (see [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector)). Transactions will be checked against this risk profile before the transaction is routed to the processing connector. Additional checks will also be performed using the risk profile entered in the connector used to process the transaction.

note
Only one risk profile can be assigned at the merchant or (meta-/multi-method-) connector level. If a risk profile is assigned to the connector, it overrules the risk profile assigned to the merchant. If no risk profile is assigned at the connector level, the risk profile assigned to the merchant is inherited by the connector.