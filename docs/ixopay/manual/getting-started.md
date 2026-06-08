---
title: Getting Started
summary: ' Getting Started'
tags:
- merchant-setup-https-documentation-ixopay-com-manual-docs-getting-started-merchant-setup-direct-link-merchant-setup
- api-user-setup-https-documentation-ixopay-com-manual-docs-getting-started-api-user-setup-direct-link-api-user-setup
- connector-setup-https-documentation-ixopay-com-manual-docs-getting-started-connector-setup-direct-link-connector-setup
- testing-setup-https-documentation-ixopay-com-manual-docs-getting-started-testing-setup-direct-link-testing-setup
- api
- ixopay
- acquirer
- psp
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/getting-started
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* Getting Started

# Getting Started
note
We always recommend testing your setup in your Sandbox environment (not available for [IXOPAY](https://www.ixopay.com) Starter & Growth) with your test accounts.
Before starting with the configuration of your tenant, it is important to think about your desired setup. This strongly depends on your business model/corporate or financial structure and there is no one correct way to do it. Instead, we will give you some tips and recommendations on how to approach the setup.
**Sub-tenants:** These are normally used by our White Label customers to create a multi-level sub-structure. If you are a White Label customer and have more than one client with their own merchants, use sub-tenants to depict this structure. You can add any number of merchants under each sub-tenant. Information on how to set up your (sub-)tenant can be found [here](https://documentation.ixopay.com/manual/docs/system-setup/tenants).
info
Depending on your business model, Enterprise clients may also find it makes sense to create a sub-tenant structure.
## 1. Merchant Setup[​](https://documentation.ixopay.com/manual/docs/getting-started#1-merchant-setup "Direct link to 1. Merchant Setup")
Before you start creating merchants under your (sub-)tenant, we suggest thinking about your desired setup. You can create as many merchants as you like or simply create one merchant. Here are some tips and recommendations:
**One merchant only:** Recommended for companies that either
  * own only one brand
  * are structured in a single entity
  * operate in a single market

or for those who
  * own more brands,
  * are structured in several entities
  * operate in different markets

**but** only have one account / set of credentials from their PSP/acquirer for all brands/entities/markets.
**More than one merchant:** Recommended for companies that either
  * own more brands
  * are structured in several entities
  * operate in different markets

**and** want to keep their transactions separate **or** companies that have more than one account/set of credentials from their PSP/ acquirer.
Information on how to **create and set up a Merchant Profile** can be found [here](https://documentation.ixopay.com/manual/docs/merchant/profiles).
## 2. API User Setup[​](https://documentation.ixopay.com/manual/docs/getting-started#2-api-user-setup "Direct link to 2. API User Setup")
An API user is required for every merchant in your setup in order to send transactions to the [IXOPAY platform](https://www.ixopay.com)'s Transaction API. **_Neglecting to set up the API user is is one of the most common oversights by new users._**
Information on how to create an **API User** can be found [here](https://documentation.ixopay.com/manual/docs/connector/users/api).
## 3. Connector Setup[​](https://documentation.ixopay.com/manual/docs/getting-started#3-connector-setup "Direct link to 3. Connector Setup")
In order to process transactions through a PSP/ acquirer, a so-called connector is required, which allows you to configure the technical integration specifically for a merchant. The IXOPAY platform offers a wide range of technical integrations for PSPs/acquirers, called adapters. An overview of all adapters can be found [adapters.ixopay.com](https://adapters.ixopay.com).
If you have more than one account/set of credentials from a PSP/acquirer, you need to add a connector for each. If you want to use different payment methods or end-points, you will need to create a new connector for each payment method and end-point. It is not possible to configure a stand-alone connector; they must always be associated with a Merchant Profile.
Information on how to **create and assign connectors and adapters** can be found [here](https://documentation.ixopay.com/manual/docs/connector/create).
## 4. Testing Your Setup[​](https://documentation.ixopay.com/manual/docs/getting-started#4-testing-your-setup "Direct link to 4. Testing Your Setup")
Once you have finished the first three steps, we recommend testing the connector to make sure your setup is working. We always recommend testing it in the Sandbox environment (not available for IXOPAY Starter & Growth) with your test account. Testing can be performed in different ways:
  * via [API calls](https://documentation.ixopay.com/api/transaction/transaction-api)
  * from the IXOPAY platform interface using our [API Testing Tool](https://documentation.ixopay.com/manual/docs/api-testing/transaction-api) for transactions.

  * [1. Merchant Setup](https://documentation.ixopay.com/manual/docs/getting-started#1-merchant-setup)
  * [2. API User Setup](https://documentation.ixopay.com/manual/docs/getting-started#2-api-user-setup)
  * [3. Connector Setup](https://documentation.ixopay.com/manual/docs/getting-started#3-connector-setup)
  * [4. Testing Your Setup](https://documentation.ixopay.com/manual/docs/getting-started#4-testing-your-setup)