---
title: Schedule API
summary: ' API Testinghttps://documentation.ixopay.com/manual/docs/api-testing  Schedule
  API'
tags:
- schedule-api-client-https-documentation-ixopay-com-manual-docs-api-testing-schedule-api-schedule-api-client-direct-link-schedule-api-client
- schedule-action-https-documentation-ixopay-com-manual-docs-api-testing-schedule-api-schedule-action-direct-link-schedule-action
- schedule-data-https-documentation-ixopay-com-manual-docs-api-testing-schedule-api-schedule-data-direct-link-schedule-data
- api
- 3d-secure
- ixopay
- recurring
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/api-testing/schedule-api
portal: ixopay-manual
updated: '2026-05-11'
related: []
---

* [API Testing](https://documentation.ixopay.com/manual/docs/api-testing)
  * Schedule API

# Schedule API
As available for the Transaction API, you can also run tests against the Schedule API (part of the Transaction API). Either use the API Testing directly in the [IXOPAY platform](https://www.ixopay.com) or see our [Schedule API documentation](https://documentation.ixopay.com/api/transaction/schedule) for further information. For more information in general about Schedules, check out the [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules) section in the User Manual.
To use the API Testing in the IXOPAY platform, follow these steps:
  1. Navigate to the **API Testing** section, sub-section **Schedule API**
  2. Select a **Connector** from the list (API Key and Shared Secret will be filled automatically) or
  3. Fill in the **API Key** and **Shared Secret** (see [Create and Assign Connectors & Adapters section](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration))
  4. Select User in dropdown list

The Target URL is pre-filled with the URL to the appropriate IXOPAY platform instance and usually does not require any further adjustments. No matter how you test your set up, please keep the following notes in mind:
![API Testing - Schedule API](https://documentation.ixopay.com/manual/assets/ideal-img/api-testing-schedule-api.73fdaa4.1280.png)API Testing - Schedule API
note
Before you start your tests, please consider that requests using the same **Schedule ID** and **IP address** have a **rate limit** of 10 requests per 60 seconds.
In addition, a **general rate** **limit** of 100 request per 60 seconds applies for the Schedule API and [Status API](https://documentation.ixopay.com/manual/docs/api-testing/status-api) combined, either for the logged-in API user or used domain in combination with the originating IP.
## Schedule API client[​](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api#schedule-api-client "Direct link to Schedule API client")
Fill in the necessary parameters for the testing in the Client Form:
  * [Schedule Action](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api#schedule-action)
  * [Schedule Data](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api#schedule-data)

Once you are ready click **Submit Schedule Request**. The Result Box will display the response containing information about the request (e.g. current state). Depending on your entered information the request can be successful or result in errors due to missing fields or invalid data.
![Result Box](https://documentation.ixopay.com/manual/assets/ideal-img/result-box-schedule.75ff05a.1280.png)Result Box
### Schedule Action[​](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api#schedule-action "Direct link to Schedule Action")
Select the Action you want to test:
  * Start Schedule
  * Updated Schedule
  * Show Schedule
  * Pause Schedule
  * Continue Schedule
  * Cancel Schedule

![Schedule Action](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-action.247c722.1280.png)Schedule Action
info
The Actions to be performed depend on the Schedule Status (see [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules/pause-continue-retry-cancel) section).
### Schedule Data[​](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api#schedule-data "Direct link to Schedule Data")
In this section you can fill in additional Schedule — data (see also [Create a Schedule](https://documentation.ixopay.com/manual/docs/transactions/schedules/create) and [Pause, Continue, Retry or Cancel Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules/pause-continue-retry-cancel) section). Depending on the chosen action different parameters might be grayed out.
  * **Registration ID:** Fill in the Transaction UUID of a Register
  * **Schedule ID** : Fill in the GUID of a Schedule
  * **Amount:** Fill in an amount for your Transaction
  * **Currency** : Fill in a 3-letter currency. (e.g EUR for Euro).
  * **Start Date Time:** Fill in the Start Date and Time for the Schedule to start with the first Recurring Debit
  * **Continue Date Time** : Fill in the Continue Date and Time for a paused Schedules to resume with the next Recurring Debit.
  * **Period Length:** Fill in a Period Length. The interval between recurring transactions will be defined by the period length and unit
  * **PeriodUnit** : Fill in the Period Unit. The interval between recurring transactions will be defined by the period length and unit
  * **Callback URL:** Prefilled Callback URL the platform will send status notifications
  * **Merchant Meta Data:** Not available by default: Fill in additional Merchant Meta Data (string, max. length of 255 characters)

![Schedule Data](https://documentation.ixopay.com/manual/assets/ideal-img/schedule-schedule-data.37042ea.1280.png)Schedule Data
note
In order to be able to create a new schedule for a register transaction, make sure the Connector processing the transactions is configured to be **Available for Schedule** (see [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration))