---
title: How to add alternative payment methods
summary: ' How to …https://documentation.ixopay.com/docs/recipes/how-to  How to add
  alternative payment methods'
tags:
- prerequisites-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-prerequisites-direct-link-prerequisites
- accounthttps-documentation-ixopay-com-docs-guides-getting-started-setup-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-account-direct-link-account
- recipe-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-recipe-direct-link-recipe
- step-choose-alternative-payment-methodhttps-adapters-ixopay-com-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-step-choose-alternative-payment-method-direct-link-step-choose-alternative-payment-method
- step-integrate-hosted-payment-pageshttps-documentation-ixopay-com-docs-guides-getting-started-accept-payments-hosted-payment-pages-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-step-integrate-hosted-payment-pages-direct-link-step-integrate-hosted-payment-pages
- step-customize-hosted-payment-pagehttps-docs-ixopay-com-platform-user-administration-manual-fast-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-step-customize-hosted-payment-direct-link-step-customize-hosted-payment
- step-test-integrationhttps-documentation-ixopay-com-docs-guides-getting-started-testing-https-documentation-ixopay-com-docs-recipes-alternative-payment-methods-step-test-integration-direct-link-step-test-integration
- api
- ixopay
- psp
source_url: https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [How to …](https://documentation.ixopay.com/docs/recipes/how-to)
  * How to add alternative payment methods

# How to add alternative payment methods
Alternative payment methods (APMs) are payment options that differ from traditional credit and debit card payments. They are used by consumers who prefer to pay through non-card methods, such as bank transfers, e-wallets, mobile payments, prepaid cards and cash-based payments. APMs are becoming increasingly popular worldwide, especially in regions where credit card penetration is low or where consumers prefer to use local payment methods. By offering APMs, you can provide customer with a broader range of payment options and reach new markets.
## Prerequisites[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#prerequisites "Direct link to Prerequisites")
###  [Set up an account](https://documentation.ixopay.com/docs/guides/getting-started/setup)[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#set-up-an-account "Direct link to set-up-an-account")
If you haven't already, create an account with [IXOPAY platform](https://www.ixopay.com) and configure it to work with your PSP. You will need to configure the integration settings, like API keys and endpoint URLs.
## Recipe[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#recipe "Direct link to Recipe")
### Step 1 - [Choose the alternative payment method](https://adapters.ixopay.com)[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#step-1---choose-the-alternative-payment-method "Direct link to step-1---choose-the-alternative-payment-method")
Choose the APM you want to offer to your customers. Some popular APMs include PayPal, Alipay, WeChat Pay and SEPA direct debit.
You can check which APMs are supported by IXOPAY platform on [IXOPAY](https://www.ixopay.com)'s [Adapters](https://adapters.ixopay.com) page.
* * *
### Step 2 - [Integrate hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages)[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#step-2---integrate-hosted-payment-pages "Direct link to step-2---integrate-hosted-payment-pages")
Most APMs require you to use the IXOPAY platform's hosted payment pages.
Follow the guides page for [hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) to integrate the hosted payment pages within your checkout process. This involves creating a transaction and getting a redirect URL from IXOPAY platform, which you will then use to redirect the customer to the hosted payment page to complete the payment.
* * *
### Step 3 - [Customize the hosted payment page](https://docs.ixopay.com/en/platform-user-administration-manual/fast)[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#step-3---customize-the-hosted-payment-page "Direct link to step-3---customize-the-hosted-payment-page")
Customize the hosted payment page to match your branding and provide clear instructions to your customers on how to complete the payment.
* * *
### Step 4 - [Test your integration](https://documentation.ixopay.com/docs/guides/getting-started/testing)[​](https://documentation.ixopay.com/docs/recipes/how-to/alternative-payment-methods#step-4---test-your-integration "Direct link to step-4---test-your-integration")
Test your integration thoroughly to make sure everything is working as expected.
* * *