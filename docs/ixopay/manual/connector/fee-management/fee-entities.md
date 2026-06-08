---
title: Fee Entities
summary: ' Fee Managementhttps://documentation.ixopay.com/manual/docs/connector/fee-management  Fee
  Entities'
tags:
- video-create-fee-entity-fees-https-documentation-ixopay-com-manual-docs-connector-fee-management-fee-entities-video-create-fee-entity-fees-direct-link-video-create-fee-entity-fees
- fee-mapping-https-documentation-ixopay-com-manual-docs-connector-fee-management-fee-entities-fee-mapping-direct-link-fee-mapping
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/fee-management/fee-entities
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Fee Management](https://documentation.ixopay.com/manual/docs/connector/fee-management)
  * Fee Entities

# Fee Entities
## Video: Create a New Fee Entity and Set Up Fees[​](https://documentation.ixopay.com/manual/docs/connector/fee-management/fee-entities#video-create-a-new-fee-entity-and-set-up-fees "Direct link to Video: Create a New Fee Entity and Set Up Fees")
![](https://documentation.ixopay.com/manual/assets/ideal-img/preview-vimeo-fees.94bda3b.1300.png)
In order to create a new Fee Entities for your (Sub-)Tenant, follow these steps:
  1. Navigate to **System Setup,** sub-section **Fee Entities** (see Fee Entities Overview)
  2. Click **+ New Fee Entity**
  3. Fill in a **Name** and select the **(Sub-)Tenant** (beneficiary party) from the drop-down (see Create New Fee Entity)
  4. Enable/disable the checkbox **Merchant visible**. If enabled Merchant Users will see the Fee Entity in the [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  5. Select the option **Visible for Sub-Tenants**. Available options **None, First** or **All Sub-Tenants**
  6. Select the option **Calculation Mode.** Available options **Live** (default) to calculate fees during the transaction processing or **Only via post-processing** no fees are calculated during transaction processing, but only if a Post Processing [Job](https://documentation.ixopay.com/manual/docs/post-processing/jobs) is configured, scheduled and executed to do so.
  7. Click **+ Create Fee Entity**

![Fee Entities Overview](https://documentation.ixopay.com/manual/assets/ideal-img/fee-entities-overview.7c88ef0.1280.png)Fee Entities Overview![Create New Fee Entity](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-fee-entity.48316d1.1280.png)Create New Fee Entity
tip
Fee Entities are defined per [IXOPAY](https://www.ixopay.com) (Sub-)Tenant with the option to make it visible for Sub-Tenants (first or all). The configuration depends on the [Setup](https://documentation.ixopay.com/manual/docs/getting-started) you have chosen for your [IXOPAY platform](https://www.ixopay.com) Tenant. Keep in mind, in comparison to other entities in the IXOPAY platform, Fee Entities cannot be archived.
## Fee Mapping[​](https://documentation.ixopay.com/manual/docs/connector/fee-management/fee-entities#fee-mapping "Direct link to Fee Mapping")
In the transaction processing world there are some standard categories of fees (e.g. Markup-, Interchange-, Scheme- or Conversion Fee).
Depending on the Provider, those fee categories are reported back to the IXOPAY platform (see also [Post Processing](https://documentation.ixopay.com/manual/docs/post-processing)) and can be mapped to your individual created **Fee Entities**.
Follow these steps to map standard fee categories to your Fee Entities:
  1. Click **Set Mapping** (see Fee Entity Overview) on the Fee Entity you want to map
  2. Select the standard fee category that should be mapped from the drop-down

The mapping of those standard fee categories to your fees structure helps you standardize and optimize your Fee Management independently of the provider for all your merchants.
The mapping is also shown in the Fee Entities Overview.
![Set Mapping](https://documentation.ixopay.com/manual/assets/ideal-img/set-mapping.13f2502.1280.png)Set Mapping