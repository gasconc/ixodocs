---
title: How to add a second PSP for fail-safe payments
summary: ' How to …https://documentation.ixopay.com/docs/recipes/how-to  How to add
  a second PSP for fail-safe payments'
tags:
- prerequisites-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-prerequisites-direct-link-prerequisites
- accounthttps-documentation-ixopay-com-docs-guides-getting-started-setup-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-account-direct-link-account
- recipe-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-recipe-direct-link-recipe
- step-second-psp-ixopay-platformhttps-documentation-ixopay-com-docs-guides-getting-started-setup-step-create-connector-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-step-second-psp-direct-link-step-second-psp
- step-configure-fail-over-settingshttps-docs-ixopay-com-platform-user-administration-manual-connector-routing-cascading-balancing-fallback-conditions-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-step-configure-fail-over-settings-direct-link-step-configure-fail-over-settings
- step-test-fail-over-integrationhttps-documentation-ixopay-com-docs-guides-getting-started-testing-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-step-test-fail-over-integration-direct-link-step-test-fail-over-integration
- step-monitor-maintain-fail-safe-integration-https-documentation-ixopay-com-docs-recipes-dual-psp-failure-safety-step-monitor-maintain-fail-safe-integration-direct-link-step-monitor-maintain-fail-safe-integration
- api
- ixopay
- psp
source_url: https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* [How to …](https://documentation.ixopay.com/docs/recipes/how-to)
  * How to add a second PSP for fail-safe payments

# How to add a second PSP for fail-safe payments
If you already have a payment service provider (PSP) integrated into your platform, you may want to consider adding a second PSP as a fail-safe in case the first PSP experiences downtime or other issues. This helps ensure that your customers can always make payments, even if one of your integrated PSPs is unavailable.
## Prerequisites[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#prerequisites "Direct link to Prerequisites")
###  [Set up an account](https://documentation.ixopay.com/docs/guides/getting-started/setup)[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#set-up-an-account "Direct link to set-up-an-account")
If you haven't already, create an account with [IXOPAY platform](https://www.ixopay.com) and configure it to work with your PSP. You will need to configure the integration settings, like API keys and endpoint URLs.
## Recipe[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#recipe "Direct link to Recipe")
### Step 1 - [Set up your second PSP in IXOPAY platform](https://documentation.ixopay.com/docs/guides/getting-started/setup#step-3-create-a-connector)[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#step-1---set-up-your-second-psp-in- "Direct link to step-1---set-up-your-second-psp-in-")
The first step is to set up your second PSP in IXOPAY platform. This involves creating a new payment configuration and linking it to the appropriate payment service provider.
* * *
### Step 2 - [Configure the fail-over settings](https://docs.ixopay.com/en/platform-user-administration-manual/connector/routing-cascading-balancing-fallback#conditions)[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#step-2---configure-the-fail-over-settings "Direct link to step-2---configure-the-fail-over-settings")
Next, you need to configure the fail-over settings for your payment integration. This involves setting up rules for when IXOPAY platform should switch to the secondary PSP. For example, you may want to switch to the secondary PSP if the primary PSP experiences downtime or if a payment fails to process.
* * *
### Step 3 - [Test your fail-over integration](https://documentation.ixopay.com/docs/guides/getting-started/testing)[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#step-3---test-your-fail-over-integration "Direct link to step-3---test-your-fail-over-integration")
Once you have set up your fail-over settings, test your integration to ensure that it works as expected. This involves simulating downtime or other issues with your primary PSP and verifying that payments are still being processed by your secondary PSP.
* * *
### Step 4 - Monitor and maintain your fail-safe integration[​](https://documentation.ixopay.com/docs/recipes/how-to/dual-psp-failure-safety#step-4---monitor-and-maintain-your-fail-safe-integration "Direct link to Step 4 - Monitor and maintain your fail-safe integration")
Finally, it's important to monitor and maintain your fail-safe integration over time. This includes monitoring the uptime and performance of both PSPs, as well as regularly testing and verifying that your fail-over settings are working properly. By doing so, you help ensure that your customers are always able to make payments, even in the event of PSP downtime or other issues.
* * *