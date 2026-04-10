---
title: FinTecSystems
summary: This page provides an overview of the payments methods provided by the FinTecSystems
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating FinTecSystems within your payments landscape,
  as well as an overview of the parameters requ
tags:
- payment-methods-https-documentation-ixopay-com-adapters-fintecsystems-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-fintecsystems-additional-parameters-direct-link-additional-parameters
- api
- ixopay
- chargeback
- bank-transfer
- transaction
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* FinTecSystems

# FinTecSystems
This page provides an overview of the payments methods provided by the FinTecSystems adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating FinTecSystems within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/fintecsystems#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| BankTransfer  | Full-Page Redirect  | Debit, Register  |  
## Additional parameters[​](https://documentation.ixopay.com/adapters/fintecsystems#additional-parameters "Direct link to Additional parameters")  
| Extra Data  | Required  | Description  |  
| --- | --- | --- |  
| checkAmount  | Required for risk check  | Amount to be checked against  |  
| checkCurrency  | Required for risk check  | Currency, e.g. EUR  |  
| checkBalanceOverview  | Not required  | If set to true, the current running total of the account will be returned  |  
| checkChargebacks  | Not required  | If set to true, the number of detected chargeback transactions for the account will be returned  |  
| checkName  | Required for name risk check  | Last name to be checked against. Both first and last name are required for the check  |  
| checkFirstname  | Required for name risk check  | First name to be checked against. Both first and last name are required for the check  |  
| checkAccountSnapshotDays  | Required for snapshot risk check if from and to date are not set  | Range in days which should be used (between 10 and 365)  |  
| checkAccountSnapshotFrom  | Required for snapshot risk check if days are not set  | A date in the format yyyy-mm-dd  |  
| checkAccountSnapshotTo  | Required for snapshot risk check if days are not set  | A date in the format yyyy-mm-dd  |  
| checkAccountSnapshotFilters  | Not required  | An array of strings to filter the snapshot (e.g. `["income", "rent", "living-cost", "credit", "expenditure", "revenue", "salary"]`)  |  
| checkAccountSnapshotAllAccounts  | Not required  | If set to true, returns snapshot for all accounts including their turnovers  |  
| checkAccountSnapshotAllTags  | Not required  | If set to true, returns the full categorization of the turnovers in the snapshot  |  
note
Risk check feature is currently only available for **Registers**. To enable risk check, set the connector's **withRiskCheckCall** setting to true.