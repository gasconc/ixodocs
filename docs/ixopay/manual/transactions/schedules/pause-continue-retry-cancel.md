---
title: Pause, Continue, Retry or Cancel Schedules
summary: ' Transaction Scheduleshttps://documentation.ixopay.com/manual/docs/transactions/schedules  Pause,
  Continue, Retry or Cancel Schedules'
tags:
- ixopay
- recurring
- transaction
source_url: https://documentation.ixopay.com/manual/docs/transactions/schedules/pause-continue-retry-cancel
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules)
  * Pause, Continue, Retry or Cancel Schedules

# Pause, Continue, Retry or Cancel Schedules
You can pause, resume, cancel or retry existing schedules using the **Actions** drop-down in the Schedules Overview.
  1. Navigate to the **Schedules Overview**
  2. If needed, **Filter** the Schedule Overview to narrow down your results
  3. Depending on the Schedule **Status** following Actions are available using the **Actions** drop-down:
    1. **Active** : **pause** or **cancel**
    2. **Paused** : **continue** or **cancel**
    3. **Error** : **retry** or **cancel**
    4. **Cancelled** : No Actions are available

![Schedules Overview I](https://documentation.ixopay.com/manual/assets/ideal-img/schedules-overview.a721d51.1280.png)Schedules Overview I![Schedules Overview II](https://documentation.ixopay.com/manual/assets/ideal-img/schedules-overview-ii.2c9c8cd.1280.png)Schedules Overview II![Confirmation Pause](https://documentation.ixopay.com/manual/assets/ideal-img/confirmation-pause.b0f9808.1000.png)Confirmation Pause![Confirmation Cancel](https://documentation.ixopay.com/manual/assets/ideal-img/confirmation-cancel.42edd68.990.png)Confirmation Cancel
tip
Only **Active** schedules can be paused, only **Paused** schedules can be continued and only **Error** schedules can be retried. Continuing or retrying a schedule sets the ContinueDateTime, the new Start Date Time for schedule interval and calculation basis for the next recurring debit (follow-up transaction).