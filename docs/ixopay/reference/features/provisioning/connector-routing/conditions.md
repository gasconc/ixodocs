---
title: Rule conditions
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Rule
  conditions'
tags:
- card-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-card-direct-link-card
- customer-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-customer-direct-link-customer
- transaction-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-transaction-direct-link-transaction
- bank-account-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-bank-account-direct-link-bank-account
- risk-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-risk-direct-link-risk
- availability-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-availability-direct-link-availability
- evaluation-semantics-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-conditions-evaluation-semantics-direct-link-evaluation-semantics
- api
- json
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions
portal: ixopay-dev
updated: '2026-09-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * Rule conditions

# Rule conditions
Conditions are the _if_ part of routing rules: each `if` node of a routing document names a condition in its `constraint` field and passes condition-specific parameters. This catalogue lists every condition, grouped by what it inspects; the linked pages document each condition's parameters and examples.
Use [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) to discover at runtime which conditions are available to your tenant, together with a JSON Schema for each condition's parameters.
## Card[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#card "Direct link to Card")  
| Identifier  | Purpose  |  
| --- | --- |  
| [`CreditcardType`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-type)  | Match the card brand (Visa, Mastercard, …)  |  
| [`CreditcardCardNetwork`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-card-network)  | Match the card network (coarser than brand)  |  
| [`CreditCardTokenType`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/credit-card-token-type)  | Match the token type (Apple Pay, Google Pay, Click-to-Pay, raw card)  |  
| [`CreditcardBinCountry`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-country)  | Match the card issuer country (from the BIN)  |  
| [`CreditcardBinLevel`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-level)  | Match the card level (Platinum, Corporate, …)  |  
| [`CreditcardBinType`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-type)  | Match credit vs. debit cards  |  
| [`CreditcardBinSegment`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-segment)  | Match the card segment (Consumer, Commercial, …)  |  
| [`CreditcardBinPrepaid`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-prepaid)  | Match prepaid vs. non-prepaid cards  |  
| [`CreditcardBinReloadable`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-reloadable)  | Match reloadable vs. non-reloadable cards  |  
| [`CreditcardBinLookupStatus`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/creditcard-bin-lookup-status)  | Match by the outcome of the BIN lookup  |  
| [`BinRangeRegexp`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/bin-range-regexp)  | Match the BIN against a regular expression  |  
| [`HasReferenceSchemeTransactionId`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/has-reference-scheme-transaction-id)  | Match the presence of a scheme transaction ID  |  
## Customer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#customer "Direct link to Customer")  
| Identifier  | Purpose  |  
| --- | --- |  
| [`CustomerCountry`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-country)  | Match the customer's billing country  |  
| [`CustomerIpCountry`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/customer-ip-country)  | Match the customer's country resolved from the IP address  |  
## Transaction[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#transaction "Direct link to Transaction")  
| Identifier  | Purpose  |  
| --- | --- |  
| [`Currency`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/currency)  | Match the transaction currency  |  
| [`AmountCurrency`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/amount-currency)  | Compare the transaction amount in a chosen currency to a threshold  |  
| [`TransactionType`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/transaction-type)  | Match the transaction type (debit, preauthorize, …)  |  
| [`IsRecurring`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/is-recurring)  | Match recurring vs. one-off transactions  |  
| [`ExtraData`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/extra-data)  | Match a key/value pair of the transaction's extra data  |  
| [`InitialConnector`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-connector)  | Match the connector that processed the initial transaction  |  
| [`InitialAdapter`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/initial-adapter)  | Match the adapter and method that processed the initial transaction  |  
| [`RandomLoadBalancer`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/random-load-balancer)  | Split traffic probabilistically for load balancing  |  
## Bank account[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#bank-account "Direct link to Bank account")  
| Identifier  | Purpose  |  
| --- | --- |  
| [`IbanRegexp`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-regexp)  | Match the customer IBAN against a regular expression  |  
| [`IbanRoutingRule`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/iban-routing-rule)  | Match a value at a fixed position within the customer IBAN  |  
## Risk[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#risk "Direct link to Risk")  
| Identifier  | Purpose  |  
| --- | --- |  
| [`RiskScore`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/risk-score)  | Compare the risk score of the transaction to a threshold  |  
| [`ChargebackCountOrVolumePerConnector`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/chargeback-count-or-volume-per-connector)  | Compare the chargeback count or volume over a time window  |  
| [`DebitPreauthCountOrVolumePerConnector`](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions/debit-preauth-count-or-volume-per-connector)  | Compare the debit/preauthorize count or volume over a time window  |  
## Availability[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#availability "Direct link to Availability")
Not every condition is available in every setup:
  * **Platform package** — not every condition is included out of the box; the catalogue returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) is authoritative for your setup.
  * **Multi-method routing** accepts at most a fixed subset of the catalogue: `CustomerCountry`, `CustomerIpCountry`, `Currency`, `AmountCurrency`, `RiskScore` and `ExtraData`; the conditions available to your setup apply on top. All other conditions are available for routing meta-connectors only.

Using a condition outside its availability returns error code `1011`.
IXOPAY platform Full Version
Additional routing rule conditions are an optional feature which is not automatically available for all [IXOPAY platform](https://www.ixopay.com) clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Evaluation semantics[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#evaluation-semantics "Direct link to Evaluation semantics")
  * A condition that cannot be evaluated for a given transaction — for example, a card condition on a transaction without card data — stops rule evaluation entirely, and the transaction is routed to the default connector. The `else` branch is followed only when a condition evaluates to false. Some conditions instead evaluate to false (or, for `notin` comparators, to true) when the inspected data is missing — the individual condition pages document these cases.
  * Condition identifiers and parameter values are case-sensitive exactly as documented on each page.
  * The parameter schemas returned by [List routing constraints](https://documentation.ixopay.com/api/provisioning/list-routing-constraints) are the authoritative, tenant-aware description of each condition's parameters.

  * [Card](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#card)
  * [Customer](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#customer)
  * [Transaction](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#transaction)
  * [Bank account](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#bank-account)
  * [Risk](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#risk)
  * [Availability](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#availability)
  * [Evaluation semantics](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/conditions#evaluation-semantics)