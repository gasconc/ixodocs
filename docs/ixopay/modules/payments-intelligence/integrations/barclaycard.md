---
title: Barclaycard
summary: Barclaycard  is a UK-based payment processing provider and part of Barclays,
  serving hundreds of thousands of businesses across various industries. Headquartered
  in London, United Kingdom, Barclaycard supports a wide range of customers, from
  small businesses and startups to large enterprises and mul
tags:
- connect-barclaycard-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-barclaycard-connect-barclaycard-direct-link-connect-barclaycard
- required-access-credentials-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-barclaycard-required-access-credentials-direct-link-required-access-credentials
- importing-historical-data-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-barclaycard-importing-historical-data-direct-link-importing-historical-data
- available-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-barclaycard-available-reports-direct-link-available-reports
- api
- rest
- ixopay
- transaction
- merchant
- congrify
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard
portal: ixopay-modules
updated: '2026-08-10'
related: []
---

* Integrations
  * Barclaycard

# Barclaycard
Barclaycard () is a UK-based payment processing provider and part of Barclays, serving hundreds of thousands of businesses across various industries. Headquartered in London, United Kingdom, Barclaycard supports a wide range of customers, from small businesses and startups to large enterprises and multinational corporations.
## How to connect with Barclaycard[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#how-to-connect-with-barclaycard "Direct link to How to connect with Barclaycard")
To connect with Barclaycard API Key needs to be created from the Barclaycard Smartpay Fuse Admin Webpage and follow the instructions below:
To be able to send REST API requests, you need to pass the authentication process. For this, you need two credentials, which are generated in EBC:
  * Key detail (key id)
  * Shared secret key

  1. To get these credentials, you need to log into EBC and select Payment Configuration->Key Management and click on GENERATE KEY button.
  2. The Create Key window appears. Select API Cert / Secret and click NEXT STEP.
  3. In the next menu select Shared Secret and then SUBMIT.
  4. In the next window copy or download the Shared secret key, which is the first credential for REST API request, and click on KEY MANAGEMENT.
  5. In Key Management window select Keys: API Keys option to find newly created key.
  6. Click on the link in the Keys column to see the key details and copy Key Detail parameter, which is the second credential for REST API request.

Now you have both credentials for the REST API authentication process.
### Required access credentials[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#required-access-credentials "Direct link to Required access credentials")
  1. Name  
The name of the Barclaycard Account
  2. Merchant ID  
The Merchant ID on the Barclaycard platform to ingest data for
  3. Key ID  
The Key ID used for authentication when connecting to the Barclaycard API
  4. Secret Key  
The Secret key used for authentication when connecting to the Barclaycard API

### Importing Historical Data[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#importing-historical-data "Direct link to Importing Historical Data")
During the onboarding process with IXOPAY Payments Intelligence (formerly Congrify), you can import historical data from Barclaycard. Please reach out to the IXOPAY Payments Intelligence team to confirm which data can be historically downloaded.
## Available Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#available-reports "Direct link to Available Reports")
The following reports are available for the Barclaycard integration and will provide the necessary data for a successful integration with IXOPAY Payments Intelligence. Please ensure that you select these reports as a minimum when configuring your Barclaycard connection:
  * Transaction report

  * [How to connect with Barclaycard](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#how-to-connect-with-barclaycard)
    * [Required access credentials](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#required-access-credentials)
    * [Importing Historical Data](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#importing-historical-data)
  * [Available Reports](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/barclaycard#available-reports)