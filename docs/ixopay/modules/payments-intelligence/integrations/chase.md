---
title: Chase Payment Tech
summary: ' Chase Payment Tech'
tags:
- connect-chase-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-chase-connect-chase-direct-link-connect-chase
- required-access-credentials-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-chase-required-access-credentials-direct-link-required-access-credentials
- importing-historical-data-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-chase-importing-historical-data-direct-link-importing-historical-data
- available-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-chase-available-reports-direct-link-available-reports
- ixopay
- transaction
- merchant
- congrify
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase
portal: ixopay-modules
updated: '2026-08-31'
related: []
---

* Integrations
  * Chase Payment Tech

# Chase Payment Tech
Chase Payment Tech () is a division of JPMorgan Chase that provides secure and reliable payment processing services for businesses of all sizes. It offers integrated solutions for in-person, online, and mobile payments, along with features like fraud protection, reporting tools, and customer support. With a focus on security, scalability, and efficiency, Chase Payment Tech helps businesses streamline their payment systems and enhance transaction experiences.
## How to connect with Chase[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#how-to-connect-with-chase "Direct link to How to connect with Chase")
To connect with Chase you need to have a SFTP (Secure File transfer protocol) setup active with Chase. If you do not have these already then a Username (User ID) and Password combination must be requested from Chase to be able to retrieve your reports from their SFTP server for each Merchant Account.
### Required access credentials[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#required-access-credentials "Direct link to Required access credentials")
  1. Account Name The name of the Chase Account
  2. Username The username used for connection to the Chase SFTP server. Also referred as User ID on Chase side
  3. Password The password used for authentication when connecting to the Chase Paymentech SFTP server. This is also used to unzip the zipped files retrieved from the Chase Paymentech SFTP server

### Importing Historical Data[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#importing-historical-data "Direct link to Importing Historical Data")
During the onboarding process with IXOPAY Payments Intelligence (formerly Congrify), you can import historical data from Chase. Please reach out to the IXOPAY Payments Intelligence team to confirm which data can be historically downloaded, based on the SFTP data retention configuration.
## Available Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#available-reports "Direct link to Available Reports")
The following reports are available for the Chase integration and will provide the necessary data for a successful integration with IXOPAY Payments Intelligence. Please ensure that you select these reports as a minimum when configuring your Chase connection:
  * authorization_detail_financial_report
  * chargeback_activity_exception_report
  * chargebacks_received_report
  * discover_chargeback_summary_financial_report
  * deposit_activity_summary_financial_report
  * deposit_activity_transfer_summary_financial_report
  * deposit_detail_financial_report
  * interchange_downgrade_summary_financial_report
  * interchange_qualification_detail_financial_report
  * interchange_qualification_summary_financial_report
  * mastercard_excessive_chargeback_financial_report
  * reject_summary_financial_report
  * retrieval_detail_exception_report
  * service_charge_detail_financial_report
  * submission_listing_financial_report
  * transaction_summary_financial_report
  * funds_transfer_activity_financial_report

  * [How to connect with Chase](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#how-to-connect-with-chase)
    * [Required access credentials](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#required-access-credentials)
    * [Importing Historical Data](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#importing-historical-data)
  * [Available Reports](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/chase#available-reports)