---
title: Scheduler
summary: The Scheduler feature in IXOPAY platformhttps://www.ixopay.com provides an
  efficient way to manage recurring transactions, creating a more streamlined payment
  process. This guide offers detailed instructions on how to create, configure, update,
  and manage schedules within the IXOPAY platform platfor
tags:
- creating-starting-schedule-https-documentation-ixopay-com-docs-reference-features-scheduler-creating-starting-schedule-direct-link-creating-starting-schedule
- defining-updating-schedule-intervals-https-documentation-ixopay-com-docs-reference-features-scheduler-defining-updating-schedule-intervals-direct-link-defining-updating-schedule-intervals
- adding-additional-context-schedules-https-documentation-ixopay-com-docs-reference-features-scheduler-adding-additional-context-schedules-direct-link-adding-additional-context-schedules
- managing-schedule-states-https-documentation-ixopay-com-docs-reference-features-scheduler-managing-schedule-states-direct-link-managing-schedule-states
- api
- ixopay
- recurring
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/scheduler
portal: ixopay-dev
updated: '2026-06-22'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * Scheduler

# Scheduler
The Scheduler feature in [IXOPAY platform](https://www.ixopay.com) provides an efficient way to manage recurring transactions, creating a more streamlined payment process. This guide offers detailed instructions on how to create, configure, update, and manage schedules within the IXOPAY platform platform.
Guide
For a detailed, step-by-step guide on integrating the scheduler, refer to the [scheduler guide](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments "Scheduler guide") in our guides section.
## Creating and starting a schedule[​](https://documentation.ixopay.com/docs/reference/features/scheduler#creating-and-starting-a-schedule "Direct link to Creating and starting a schedule")
You have two ways to initiate a schedule:
  1. **During a[Debit](https://documentation.ixopay.com/api/transaction/debit)/[Register](https://documentation.ixopay.com/api/transaction/register) Transaction:** You can create a schedule when initiating a [Debit](https://documentation.ixopay.com/api/transaction/debit) or [Register](https://documentation.ixopay.com/api/transaction/register) transaction. The initial [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction will occur immediately, while the first scheduled transaction will take place at the `startDateTime` defined within the schedule.
  2. **Using the[Start](https://documentation.ixopay.com/api/transaction/schedule-start) API call:** Alternatively, you can initiate a schedule using a specific [Start](https://documentation.ixopay.com/api/transaction/schedule-start) API call.

note
There must be a period of at least 24 hours between the initial transaction and the second scheduled transaction.
## Defining and updating schedule intervals[​](https://documentation.ixopay.com/docs/reference/features/scheduler#defining-and-updating-schedule-intervals "Direct link to Defining and updating schedule intervals")
When you define schedule data, you establish the intervals for recurring transactions by setting a `periodUnit` and a `periodLength`. For example, if `periodUnit = DAY` and `periodLength = 14`, this means the customer will be charged every 14 days for the defined amount.
You can use the following interval units:
  * `DAY`
  * `WEEK`
  * `MONTH`
  * `YEAR`

Schedules can also be updated through an Update API call. This allows you to modify the following details:
  * Amount
  * Currency
  * Period length (`periodLength`)
  * Period unit (`periodUnit`)
  * Start date-time (`startDateTime`)
  * Callback URL

## Adding additional context to schedules[​](https://documentation.ixopay.com/docs/reference/features/scheduler#adding-additional-context-to-schedules "Direct link to Adding additional context to schedules")
To provide additional context to transactions created by the schedule, you can add `merchantMetaData` when creating a schedule. This is a free text string that you can use to add any notes or relevant information.
## Managing schedule states[​](https://documentation.ixopay.com/docs/reference/features/scheduler#managing-schedule-states "Direct link to Managing schedule states")
A schedule's state can be modified using the following API calls:
  * [`pause`](https://documentation.ixopay.com/api/transaction/schedule-pause): Temporarily halts the schedule. A [`continue`](https://documentation.ixopay.com/api/transaction/schedule-continue) call is required to resume transactions.
  * [`continue`](https://documentation.ixopay.com/api/transaction/schedule-continue): Resumes a paused schedule.
  * [`cancel`](https://documentation.ixopay.com/api/transaction/schedule-cancel): Terminates the schedule. Once a schedule has been cancelled, it cannot be reactivated, and a new [`start`](https://documentation.ixopay.com/api/transaction/schedule-start) API call will need to be initiated.

The possible schedule states are:
  * `ACTIVE`: The schedule is actively executing recurring charges in the defined interval.
  * `PAUSED`: The schedule is temporarily on hold.
  * `CANCELLED`: The schedule has been cancelled.
  * `ERROR`: This state signifies that a recurring charge has failed. To retry an erroneous schedule, send a [`continue`](https://documentation.ixopay.com/api/transaction/schedule-continue) call.

The transition between these states is depicted in the following state diagram:
start
pause
cancel
recurring charge failed
continue
cancel
continue
ACTIVE
PAUSED
CANCELLED
ERROR