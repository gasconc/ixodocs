---
title: Status API
summary: ' API Testinghttps://documentation.ixopay.com/manual/docs/api-testing  Status
  API'
tags:
- fill-necessary-parameters-testing-client-form-https-documentation-ixopay-com-manual-docs-api-testing-status-api-fill-necessary-parameters-testing-client-form-direct-link-fill-necessary-parameters-testing-client-form
- api
- 3d-secure
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/api-testing/status-api
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [API Testing](https://documentation.ixopay.com/manual/docs/api-testing)
  * Status API

# Status API
To retrieve the status of transactions, the [IXOPAY platform](https://www.ixopay.com) provides a Status API (part of the Transaction API). Either use the API Testing directly in the IXOPAY platform or see our [Status API documentation](https://documentation.ixopay.com/api/transaction/status) for further information. For more information in general about Transactions, check out the [Transaction](https://documentation.ixopay.com/manual/docs/transactions) section in the User Manual.
note
Before you start, please consider that requests using the same **Transaction UUID and IP address** do have a rate limit of 10 requests per 60 seconds.
In addition a **general rate limit** of 100 request per 60 seconds applies for the [Schedule API](https://documentation.ixopay.com/manual/docs/api-testing/schedule-api) and Status API combined, either for the logged-in API user or used domain in combination with the originating IP.
To use the API Testing in the IXOPAY platform, follow these steps:
  1. Navigate to the **API Testing** section, sub-section **Status API**
  2. Select a **Connector** from the list (API Key and Shared Secret will be filled automatically) or
  3. Fill in the **API Key** and **Shared Secret** (see [Create and Assign Connectors & Adapters](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration) section)
  4. Select User in dropdown list
  5. The Target URL is pre-filled with the URL to the appropriate IXOPAY platform instance and usually does not require any further adjustments.

![API Testing - Status API](https://documentation.ixopay.com/manual/assets/ideal-img/api-testing-status-api.e7a954a.1280.png)API Testing - Status API
### Fill in the necessary parameters for the testing in the Client Form[​](https://documentation.ixopay.com/manual/docs/api-testing/status-api#fill-in-the-necessary-parameters-for-the-testing-in-the-client-form "Direct link to Fill in the necessary parameters for the testing in the Client Form")
  * Select the **Request Type**
    * **By UUID**
    * **By merchant transaction ID**

![By UUID](https://documentation.ixopay.com/manual/assets/ideal-img/by-uuid.b54d793.1280.png)By UUID![By merchant transaction ID](https://documentation.ixopay.com/manual/assets/ideal-img/by-merchant-transaction-id-.ea6fb0f.1280.png)By merchant transaction ID
Once you are ready, click **Submit Status Api Request**. The Result Box will display the response containing information about the request (e.g. current state) Depending on your entered information the request can be successful or result in errors due to missing fields or invalid data.
![Result Box](https://documentation.ixopay.com/manual/assets/ideal-img/result-box-status.7625785.1280.png)Result Box