---
title: Braintree
summary: Braintree  is a full-stack payment platform that simplifies online and mobile
  payments for businesses. Acquired by PayPal in 2013, Braintree enables merchants
  to accept various payment methods, including credit and debit cards, PayPal, digital
  wallets like Apple Pay and Google Pay, and local payment
tags:
- connect-braintree-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-connect-braintree-direct-link-connect-braintree
- find-merchant-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-find-merchant-direct-link-find-merchant
- generate-public-key-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-generate-public-key-direct-link-generate-public-key
- generate-private-key-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-generate-private-key-direct-link-generate-private-key
- create-reporting-user-role-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-create-reporting-user-role-direct-link-create-reporting-user-role
- importing-historical-data-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-importing-historical-data-direct-link-importing-historical-data
- available-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-integrations-braintree-available-reports-direct-link-available-reports
- api
- pci
- tokenization
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree
portal: ixopay-modules
updated: '2026-08-10'
related: []
---

* Integrations
  * Braintree

# Braintree
Braintree () is a full-stack payment platform that simplifies online and mobile payments for businesses. Acquired by PayPal in 2013, Braintree enables merchants to accept various payment methods, including credit and debit cards, PayPal, digital wallets like Apple Pay and Google Pay, and local payment options in over 130 currencies.
It offers seamless integration, robust security features like PCI compliance and tokenization, and tools for fraud detection, making it a popular choice for e-commerce, subscription-based services, and mobile applications.
## How to connect with Braintree[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#how-to-connect-with-braintree "Direct link to How to connect with Braintree")
To integrate Braintree with IXOPAY Payments Intelligence (formerly Congrify), you need to provide the following Production Environment details:
  * Integration Name
  * Merchant ID
  * Public Key
  * Private Key

You can find instructions on obtaining these details in Braintree's online documentation: 
You can also provide the following Secure File Transfer Protocol (SFTP) credentials, supported by Braintree, to receive the full Disbursement and Fee reports which include the interchange, scheme and acquirer charges:
  * Username
  * Password

You can find instructions on setting up SFTP access credentials in Braintree's online documentation: 
### Find your Merchant ID[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#find-your-merchant-id "Direct link to Find your Merchant ID")
Your merchant ID is the unique identifier for your entire gateway account, including the multiple merchant accounts that may be in your gateway. Often referred to as the public ID or production ID, your merchant ID will be different for your production and sandbox gateways. If you contact the Support team for assistance, you may be asked to confirm this credential for your gateway account.
To find your merchant ID:
  1. Log into either the production Control Panel or the sandbox Control Panel, depending on which environment you are working in
  2. Click on the gear icon in the top right corner
  3. Click Business from the drop-down menu
  4. You'll find your merchant ID at the top of this page.

Your merchant ID can also be found when logged into your Control Panel, as the string of letters and numbers following /merchants/ in the URL.
### Generate a Public Key[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#generate-a-public-key "Direct link to Generate a Public Key")
This is your user-specific public identifier. Each user associated with your Braintree gateway will have their own public key.
To find your public key:
  1. Log into either the production Control Panel or the sandbox Control Panel, depending on which environment you are working in
  2. Click on the gear icon in the top right corner
  3. Click API from the drop-down menu
  4. Scroll to the API Keys section

If no API keys appear, click the Generate New API Key button.
### Generate a Private Key[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#generate-a-private-key "Direct link to Generate a Private Key")
This is your user-specific private identifier. Each user associated with your Braintree gateway will have their own private key. Your private key should not be shared outside the use of an API call – even with us.
To find your private key:
  1. Log into either the production Control Panel or the sandbox Control Panel, depending on which environment you are working in
  2. Click on the gear icon in the top right corner
  3. Click API from the drop-down menu
  4. Scroll to the API Keys section
  5. Click the View link located in the Private Key column

Your private key will be revealed in the Private Key column on the next page.
### Create a Reporting User Role[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#create-a-reporting-user-role "Direct link to Create a Reporting User Role")
  1. As a first step, navigate to Team, then select Roles, and click Add New Role.
![](https://documentation.ixopay.com/modules/assets/ideal-img/braintree_reporting_user_1.e0ea24e.1600.png)
  2. Enter a name that clearly identifies it as a Reporting Role. Next, select all the permissions listed below, and then click Create Role to complete the setup.
![](https://documentation.ixopay.com/modules/assets/ideal-img/braintree_reporting_user_2.cccb453.1600.png)
  3. The role must then be assigned to the user who created the API keys. Once the role has been assigned, the keys will be ready for use.
![](https://documentation.ixopay.com/modules/assets/ideal-img/braintree_user_roles_2.7a3064d.1600.png)

### Importing Historical Data[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#importing-historical-data "Direct link to Importing Historical Data")
As part of the onboarding process with IXOPAY Payments Intelligence, you have the option to import historical data from Braintree. To proceed, please reach out to the support team or your designated point of contact.
### Available Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#available-reports "Direct link to Available Reports")
The integration with Braintree provides access to the following reports:
  * Transaction Report
  * Settlement Report
  * Dispute Report

  * [How to connect with Braintree](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#how-to-connect-with-braintree)
    * [Find your Merchant ID](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#find-your-merchant-id)
    * [Generate a Public Key](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#generate-a-public-key)
    * [Generate a Private Key](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#generate-a-private-key)
    * [Create a Reporting User Role](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#create-a-reporting-user-role)
    * [Importing Historical Data](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#importing-historical-data)
    * [Available Reports](https://documentation.ixopay.com/modules/docs/payments-intelligence/integrations/braintree#available-reports)