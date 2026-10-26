---
title: Amazon Payment Services
summary: ' Amazon Payment Services'
tags:
- connect-amazon-payment-services-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-amazon-connect-amazon-payment-services-direct-link-connect-amazon-payment-services
- required-access-credentials-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-amazon-required-access-credentials-direct-link-required-access-credentials
- importing-historical-data-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-amazon-importing-historical-data-direct-link-importing-historical-data
- available-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-amazon-available-reports-direct-link-available-reports
- api
- ixopay
- acquirer
- settlement
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/amazon
portal: ixopay-modules
updated: '2026-10-26'
related: []
---

* Integrations
  * Amazon Payment Services

# Amazon Payment Services
[Amazon Payment Services](https://paymentservices.amazon.com//) is a payment processing platform serving businesses across the Middle East and North Africa. It started as PAYFORT, one of the region’s early fintech companies, founded in 2013. Amazon acquired it in 2017 as part of its purchase of Souq.com and rebranded it in 2020. It operates in nine countries: the UAE, Saudi Arabia, Egypt, Jordan, Lebanon, Qatar, Kuwait, Oman and Bahrain. The platform supports major card schemes such as Visa, Mastercard and American Express, along with Apple Pay and popular local payment methods such as mada and Meeza.
## How to connect with Amazon Payment Services[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/amazon#how-to-connect-with-amazon-payment-services "Direct link to How to connect with Amazon Payment Services")
To connect with Amazon Payment Services you would need to obtain their API credentials. Amazon Payment Services exposes its reporting data through the FORT API, so no SFTP access is required for the standard integration. If you do not have these already then a Merchant ID, Access Code, SHA Request and Response Phrases need to be requested from Amazon Payment Services for each Merchant Account you want to connect.
### Required access credentials[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/amazon#required-access-credentials "Direct link to Required access credentials")
  1. Account Name Name of the Amazon Payment Services Account
  2. Merchant ID The unique merchant identifier assigned to your account by Amazon Payment Services. This identifies your merchant account when communicating with the Amazon Payment Services API.
  3. Access Code The access code provided by Amazon Payment Services, used to authenticate API requests.
  4. SHA Request Phrase A secret phrase configured in the Amazon Payment Services Merchant Dashboard. It is used to generate cryptographic signatures for outgoing API requests.
  5. SHA Response Phrase A secret phrase configured in the Amazon Payment Services Merchant Dashboard. It is used to verify the authenticity and integrity of API responses received from Amazon Payment Services.

Important: The SHA hashing algorithm configured in your Amazon Payment Services account must match the algorithm used by the integration.
## Importing Historical Data[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/amazon#importing-historical-data "Direct link to Importing Historical Data")
During the onboarding process with IXOPAY Payments Intelligence (formerly Congrify), you can import historical data from Amazon Payment Services. Please reach out to the IXOPAY Payments Intelligence team to confirm which data can be historically downloaded..
## Available Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/amazon#available-reports "Direct link to Available Reports")
The integration with Amazon Payment Services provides only Transaction Reports. Please contact our support or your point of contact to evaluate how to obtain additional files such as settlement or fee reports based on the acquirer that you are using for processing payments with Amazon Payment Services.