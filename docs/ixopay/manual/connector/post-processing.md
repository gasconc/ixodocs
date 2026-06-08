---
title: Post Processing - Reconciliation / Settlement on the Connector Level
summary: ' Post Processing - Reconciliation / Settlement on the Connector Level'
tags:
- reconciliation-https-documentation-ixopay-com-manual-docs-connector-post-processing-reconciliation-direct-link-reconciliation
- provider-settlement-https-documentation-ixopay-com-manual-docs-connector-post-processing-provider-settlement-direct-link-provider-settlement
- settings-https-documentation-ixopay-com-manual-docs-connector-post-processing-settings-direct-link-settings
- api
- ixopay
- chargeback
- refund
- settlement
- direct-debit
- sepa
source_url: https://documentation.ixopay.com/manual/docs/connector/post-processing
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * Post Processing - Reconciliation / Settlement on the Connector Level

# Post Processing - Reconciliation / Settlement on the Connector Level
In order to perform Post Processing activities such as reconciling transaction and settlement data from Providers so called **Data Fetchers** need to be configured to gather the information and data from Providers. Depending on your setup and used PSPs, these data fetchers can either be set up per Connector as described below or per so called [**Provider**](https://documentation.ixopay.com/manual/docs/post-processing/provider) entity in the [IXOPAY platform](https://www.ixopay.com). Second option having the advantage to retrieve settlements for multiple Merchants from one Provider and therefore preventing Reconciliation and Settlement Errors due to "unknown transactions" from other Merchants in one Settlement report.
To set up Reconciliation and/or Provider Settlement Data Fetchers, follow these steps:
  1. Navigate to the **Connector Detail Overview**
  2. Select the Tab **Post-Processing**

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview.10d709c.1280.png)Connector Detail Overview
info
In order to be able to include transactions processed by a Connector in the Reconciliation and Provider Settlement, the Connector must be assigned to the Provider entity in the IXOPAY platform.
## Reconciliation[​](https://documentation.ixopay.com/manual/docs/connector/post-processing#reconciliation "Direct link to Reconciliation")
To enable Reconciliation on the Connector configure a Reconciliation Data Fetcher and Reconciliation Settings (if needed) according to the [adapter-specific documentation](https://documentation.ixopay.com/manual/adapters/simulator)
  1. Click **+ Add** to configure a new Reconciliation Data Fetcher
  2. **Enable** the Data Fetcher
  3. Fill in an optional **Name**
  4. Define the **interval** (number of day(s), hour(s)) for fetching data from the Provider
  5. **Enable** the option **Use Config Settings from Connector** or
  6. **Disable** the option **Use Config Settings from Connector** in case you need to customize the set up
    1. Select the **Adapter** for which you want to set up the data fetcher
    2. Fill in the required parameters (e.g. Username, Password, API secret, Certificate Path, Certificate password)
    3. Select a **language**
  7. Fill in the required **Extra Data** (adapter-specific)
  8. Save your configuration with **+ Add Data Fetcher**

Depending if you selected the option to **Use Config Settings from Connector** the Adapter name itself will show up in the Reconciliation Data Fetcher overview. You can edit your data fetcher by clicking **Edit.**
Additionally, you can configure **Reconciliation Settings** :
  1. **Enable** Reconciliation Settings
  2. Fill in the number of days in **Expect Reconciliation data within** before a Transaction will appear in [Missing Reconciliation Tab](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation), if no Reconciliation is found for this transaction
  3. **Enable** the option **Allow Error to Success** and/or
  4. **Enable** the option **Allow Success to Error** for transaction status changes without user interaction. If disabled, transactions will be shown in the [Conflicts Tab](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation)
  5. Select the option for **Remote Refund handling** in case a transaction was refunded on Provider side unknowingly in the IXOPAY platform:
    1. **Ignore** : Refund is completely ignored
    2. **Pass-through** : Refund Transaction is automatically created and sent to the Merchant as Postback notification (to the configured **Merchant’s notification URL**)
    3. **Conflict** : Transaction will appear in the [Conflicts Tab](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation) (default)
  6. Select the option for **Chargeback-on-refunded-Transaction handling** in case of a chargeback to an already refunded transaction unknowingly in the IXOPAY platform:
    1. **Ignore** : Chargeback is completely ignored
    2. **Pass-through** : Chargeback Transaction is automatically created and sent to the Merchant as Postback notification (to the configured **Merchant’s notification URL**)
    3. **Conflict** : Transaction will appear in the Conflicts Tab (default)
  7. **Enable** the option **Ignore unknown Transactions** to ignore any unknown Transactions from Reconciliation files unknowingly in the IXOPAY platform. If disabled transactions will be shown in the [Unknown tab](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation).
  8. Fill in the **Merchant’s notification URL** to receive Postback notifications for new Transactions (Notifications for Transactions created by the Merchant itself are sent to the [Callback URL](https://documentation.ixopay.com/docs/guides/getting-started/callbacks))
  9. **Save** your configuration

Once configured and enabled the data fetcher will retrieve Reconciliation data from the Provider and match it to the data available in the IXOPAY platform. In case the data matches the transaction will be marked as reconciled in the [Transaction Details Overview](https://documentation.ixopay.com/manual/docs/transactions/details). Otherwise a Reconciliation conflict is raised (see [Reconciliation](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation) Section).
![Reconciliation](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation.2cd08b1.1280.png)Reconciliation![Create new Reconciliation Data Fetcher - Use Config Settings from Connector](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-reconciliation-data-fetcher-use-config-settings-from-connector.fc85fd6.916.png)Create new Reconciliation Data Fetcher - Use Config Settings from Connector![Create new Reconciliation Data Fetcher - Do not use Config Settings from Connector](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-reconciliation-data-fetcher-do-not-use-config-settings-from-connector.efba925.926.png)Create new Reconciliation Data Fetcher - Do not use Config Settings from Connector![Transaction Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-overview.5e0d23a.1280.png)Transaction Details Overview
## Provider Settlement[​](https://documentation.ixopay.com/manual/docs/connector/post-processing#provider-settlement "Direct link to Provider Settlement")
To enable Provider Settlements on the Connector configure a Provider Settlement Data Fetcher and Provider Settlement Settings (if needed) according to the [adapter-specific documentation](https://documentation.ixopay.com/manual/adapters/simulator)
  1. Click **+ Add** to configure a new Provider Settlement Data Fetcher
  2. **Enable** the Data Fetcher
  3. Fill in an optional **Name**
  4. Define the **interval** (number of day(s), hour(s)) for fetching data from the Provider
  5. **Enable** the option **Use Config Settings from Connector** or
  6. **Disable** the option **Use Config Settings from Connector** in case you need to customize the set up
    1. Select the **Adapter** for which you want to set up the data fetcher
    2. Fill in the required parameters (e.g. Username, Password, API secret, Certificate Path, Certificate password)
    3. Select a **language**
  7. Fill in the required **Extra Data** (adapter-specific)
  8. Save your configuration with **+ Add Data Fetcher**

Depending if you selected the option to **Use Config Settings from Connector** the Adapter name itself will show up in the Provider Settlement Data Fetcher overview. You can edit your data fetcher by clicking **Edit.**
Additionally, you can configure **Provider Settlement Settings** :
  1. Fill in the number of days in **Expect settlement within** before a Transaction will be marked as **Unsettled** , if no Provider Settlement is found for this transaction
  2. **Enable** the option **Compare Provider Fees** to compare the configured Fees for transactions with actual Fees applied in the settlement. Any non-matching values will be shown in the [Conflicted Transaction Tab](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements) of a Provider Settlement
  3. **Enable** the option to **Ignore Conversion Rate**
  4. Fill in the number of days to **Collect Single Transaction Settlement** for a Settlement Batch in case of Adapters not supporting cumulated settlement files (such as SEPA, Direct Debit)
  5. **Save** your configuration

Once configured and enabled the data fetcher will retrieve Provider Settlement data and match it to the data available in the IXOPAY platform. In case the data matches the transaction will be marked as settled in the [Transaction Details Overview](https://documentation.ixopay.com/manual/docs/transactions/details). Otherwise a Settlement conflict is raised (see [Provider Settlement](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements) Section)
![Settlement](https://documentation.ixopay.com/manual/assets/ideal-img/settlement.96164c1.1280.png)Settlement![Create new Provider Settlement Data Fetcher - Use Config Settings from Connector](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-provider-settlement-data-fetcher-use-config-settings-from-connector.b82aeb4.946.png)Create new Provider Settlement Data Fetcher - Use Config Settings from Connector![Create new Provider Settlement Data Fetcher - Do not use Config Settings from Connector](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-provider-settlement-data-fetcher-do-not-use-config-settings-from-connector.91bd053.928.png)Create new Provider Settlement Data Fetcher - Do not use Config Settings from Connector![Transaction Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-overview.5e0d23a.1280.png)Transaction Details Overview
note
For some adapters the IXOPAY platform will automatically test the data fetcher connection after creation to verify data fetchers are set up correctly. You can see the test results in the data fetcher edit view (see Test data fetcher connection).
![Test data fetcher connection](https://documentation.ixopay.com/manual/assets/ideal-img/test-data-fetcher-connection.c1340c5.824.png)Test data fetcher connection
## Other Settings[​](https://documentation.ixopay.com/manual/docs/connector/post-processing#other-settings "Direct link to Other Settings")
In the Post Processing tab you can define furthermore so called **Calculation Groups**. These Groups can then be used in for the [Fee Calculation](https://documentation.ixopay.com/manual/docs/connector/fee-management/set-up-fees) (e.g. to calculate volume-tiered/count-tiered fees over multiple merchants) as **Reference Volume /Reference Count.**
![Calculation Groups](https://documentation.ixopay.com/manual/assets/ideal-img/calculation-groups.f7f8062.1280.png)Calculation Groups![Fee entry](https://documentation.ixopay.com/manual/assets/ideal-img/fee-entry.ea7fa8b.1280.png)Fee entry