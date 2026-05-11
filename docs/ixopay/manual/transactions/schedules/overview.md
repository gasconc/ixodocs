---
title: Schedules Overview
summary: ' Transaction Scheduleshttps://documentation.ixopay.com/manual/docs/transactions/schedules  Schedules
  Overview'
tags:
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/transactions/schedules/overview
portal: ixopay-manual
updated: '2026-05-11'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules)
  * Schedules Overview

# Schedules Overview
The Schedules Overview contains all scheduled (follow-up) transactions to a register transaction within the [IXOPAY platform](https://www.ixopay.com). In the Overview you have the option to [pause, continue, retry or cancel an existing schedule](https://documentation.ixopay.com/manual/docs/transactions/schedules/pause-continue-retry-cancel) or to [create a new schedule](https://documentation.ixopay.com/manual/docs/transactions/schedules/create). With the Schedules Filter you can narrow down your results by filtering according to various data points.
  1. Navigate to the **Transactions** section, sub-section **Schedules**. All scheduled transactions are listed in this overview.
  2. **Filter** to refine the search results (see Filter Table)

![Schedules Overview](https://documentation.ixopay.com/manual/assets/ideal-img/schedules-overview.a721d51.1280.png)Schedules Overview  
| Filter name  | Description  |  
| --- | --- |  
| Merchant  | Select a specific Merchant from the list  |  
| Connector  | Select a specific Connector from the list  |  
| GUID  | Fill in the Schedule GUID  |  
| Registration ID  | Fill in the Registration ID (UUID of the related Register Transaction)  |  
| Status  | Select the Schedule status: All, Active, Conceled, Create-Pending, Error, Paused  |  
| Period  | Fill in the Period Length and select the Period Unit  |  
| Created At  | Filter a specific range by selecting a from and a to date.  |  
| Merchant Meta Data  | Fill in Merchant Meta Data  |  
| Amount  | Filter a specific range by selecting a from and a to amount.  |  
| Currency  | Select the Currency  |  
| Customer ID  | Fill in a Customer ID  |  
| Customer E-Mail  | Fill in a Customer E-Mail  |  
For each schedule, the [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details) of the related Register Transaction will show the **Follow-Up Transactions** performed by the schedule and the **Attached Schedules** to the Register Transaction. Follow the link to the related Register Transaction in the **Register** column.
![Schedules Overview](https://documentation.ixopay.com/manual/assets/ideal-img/schedules-overview-register-transaction.48bec24.1280.png)Schedules Overview![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details.cb43779.1280.png)Transaction Details