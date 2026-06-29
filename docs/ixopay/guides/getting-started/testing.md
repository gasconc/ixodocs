---
title: Testing your setup
summary: ' Getting startedhttps://documentation.ixopay.com/docs/guides/getting-started  Testing
  your setup'
tags:
- sandbox-environment-https-documentation-ixopay-com-docs-guides-getting-started-testing-sandbox-environment-direct-link-sandbox-environment
- sandbox-environment-pci-transactions-https-documentation-ixopay-com-docs-guides-getting-started-testing-sandbox-environment-pci-transactions-direct-link-sandbox-environment-pci-transactions
- enabling-test-mode-connector-https-documentation-ixopay-com-docs-guides-getting-started-testing-enabling-test-mode-connector-direct-link-enabling-test-mode-connector
- api-testing-tool-https-documentation-ixopay-com-docs-guides-getting-started-testing-api-testing-tool-direct-link-api-testing-tool
- api
- pci
- ixopay
- authorization
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/guides/getting-started/testing
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Getting started](https://documentation.ixopay.com/docs/guides/getting-started)
  * Testing your setup

# Testing your setup
Before going live with [IXOPAY platform](https://www.ixopay.com), it is important to thoroughly test your payment integration in a controlled environment. Testing ensures that your payment flow is functioning properly and can help you catch and resolve any issues before they impact your customers.
In this guide, we will cover how to test your payment integration using the sandbox environment, test mode settings, and API testing tool provided by IXOPAY platform.
## Using the sandbox environment[​](https://documentation.ixopay.com/docs/guides/getting-started/testing#using-the-sandbox-environment "Direct link to Using the sandbox environment")
Sandbox
Create merchant
Sandbox credentials
Create API user
Create connector
Use `sandbox.ixopay.com` in your integration
Test your integration
Switch back to production
The IXOPAY platform provides a sandbox environment for merchants to test their payment integration before going live with the production environment. The sandbox has the same features and functionality as the production environment, but all transactions are simulated or sent to test environments of PSPs and no actual payments are processed.
To test your payment integration using the sandbox:
  1. Create a duplicate of your merchant, merchant API user, and connector on the [sandbox environment](https://sandbox.ixopay.com). This is necessary because the sandbox environment is completely separate from the production environment, so your existing credentials will not work. To do this, follow the [Setting up your account](https://documentation.ixopay.com/docs/guides/getting-started/setup) guide on the [sandbox environment](https://sandbox.ixopay.com).
  2. Once you have your sandbox credentials, you can use the sandbox API URL in your integration, which is `sandbox.ixopay.com`, instead of the production API URL (`gateway.ixopay.com`).
  3. Set up your integration in the sandbox environment as you would with the production environment. Depending on your integration, you may need to configure your integration settings to point to the sandbox API URL and enter your credentials.
  4. Test your integration using the sandbox environment. Perform test transactions and verify that your integration is working as expected.
  5. Once you are satisfied with your integration, and it is working correctly in the sandbox environment, you can switch to the production environment and use your production credentials and API URL.

## Using the sandbox environment with PCI transactions[​](https://documentation.ixopay.com/docs/guides/getting-started/testing#using-the-sandbox-environment-with-pci-transactions "Direct link to Using the sandbox environment with PCI transactions")
The IXOPAY platform provides a sandbox environment for merchants to test their PCI transactions before deploying them in the production environment. The PCI sandbox environment operates within the PCI scope, and to facilitate testing, it requires an additional request header, `X-Environment: sandbox`.
To test your PCI transactions using the sandbox:
  1. Create a duplicate of your merchant, merchant API user, and connector on the [sandbox environment](https://sandbox.ixopay.com). This is necessary because the sandbox environment is completely separate from the production environment, so your existing credentials will not work. To do this, follow the [Setting up your account](https://documentation.ixopay.com/docs/guides/getting-started/setup) guide on the [sandbox environment](https://sandbox.ixopay.com).
  2. Once you have your sandbox credentials, _use the same PCI API URL in your integration_ , which is `secure.ixopay.com`.
  3. Set up your PCI integration in the sandbox environment as you would in the production environment. Configure your integration settings to point to the PCI API URL and _include the`X-Environment: sandbox` request header_.
  4. Test your PCI integration using the sandbox environment. Conduct test transactions and ensure that your integration is functioning as expected within the PCI scope.
  5. Upon satisfaction with your PCI integration in the sandbox environment, proceed to switch to the production environment. Utilize your production credentials and PCI API URL (`secure.ixopay.com`), removing the `X-Environment: sandbox` request header for PCI transactions in the production environment.

## Enabling test mode on a connector[​](https://documentation.ixopay.com/docs/guides/getting-started/testing#enabling-test-mode-on-a-connector "Direct link to Enabling test mode on a connector")
Activate test mode
Save
Admin UI
Connector settings
Test your integration
Some connectors provide a test mode setting that can be enabled in the production environment. This can be useful for testing your integration in a real-world environment without risking any actual transactions or charges.
To enable test mode on the IXOPAY platform production environment:
  1. Log in to your IXOPAY platform account on the production environment.
  2. Navigate to the [connector settings](https://docs.ixopay.com/en/platform-user-administration-manual/connector/edit-connector) of the connector you want to enable test mode for.
  3. If the option is available, enable it.
  4. Save your changes.

Once test mode is enabled, transactions will be processed as if they were real, but no actual charges will be made to your payment instruments. This can be useful for testing your integration with various payment methods, currencies, and other settings.
note
Not all connectors support test mode, and enabling it may affect other aspects of your integration.
## API testing tool[​](https://documentation.ixopay.com/docs/guides/getting-started/testing#api-testing-tool "Direct link to API testing tool")
Fill form
Submit
Admin UI
API Testing
Review response
The IXOPAY platform provides API testing tools that allow you to build and test API calls to the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction), the [Status API](https://documentation.ixopay.com/api/transaction/status), and the [Schedule API](https://documentation.ixopay.com/api/transaction/schedule). These tools can be accessed through the IXOPAY platform web interface and help you ensure that your integration is properly configured and working correctly.
To use the API testing tools on IXOPAY platform:
  1. Log in to your IXOPAY platform account.
  2. Navigate to the "API Testing" section.
  3. Select the API you want to test ([Transaction](https://documentation.ixopay.com/api/transaction/transaction), [Status](https://documentation.ixopay.com/api/transaction/status), or [Schedule](https://documentation.ixopay.com/api/transaction/schedule)).
  4. Fill in the required input fields for the API call. These fields will vary depending on the API and the specific call you are testing.
  5. If necessary, provide the required authorization fields (API key, shared secret, username, and password). These fields can be automatically filled in.
  6. Click the _Submit_ button to send the API call to IXOPAY platform.
  7. Review the response from IXOPAY platform to ensure that the API call was processed correctly.

The API testing tools provided by IXOPAY platform are very useful for debugging and testing your integration. They allow you to simulate various scenarios and configurations, and to see how IXOPAY platform responds to different input parameters.
For more details on the API testing tool see the API Testing section in the [User manual](https://docs.ixopay.com/en/platform-user-administration-manual/api-testing).