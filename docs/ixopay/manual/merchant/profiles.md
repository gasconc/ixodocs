---
title: Create and edit Merchant Profiles
summary: ' Create and edit Merchant Profiles'
tags:
- video-create-merchant-profile-https-documentation-ixopay-com-manual-docs-merchant-profiles-video-create-merchant-profile-direct-link-video-create-merchant-profile
- create-merchant-profile-https-documentation-ixopay-com-manual-docs-merchant-profiles-create-merchant-profile-direct-link-create-merchant-profile
- edit-merchant-profile-https-documentation-ixopay-com-manual-docs-merchant-profiles-edit-merchant-profile-direct-link-edit-merchant-profile
- enable-disable-merchant-profiles-https-documentation-ixopay-com-manual-docs-merchant-profiles-enabledisable-merchant-profiles-direct-link-enable-disable-merchant-profiles
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/merchant/profiles
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [Merchant](https://documentation.ixopay.com/manual/docs/merchant)
  * Create and edit Merchant Profiles

# Create and edit Merchant Profiles
## Video: Create and Set up a Merchant Profile[​](https://documentation.ixopay.com/manual/docs/merchant/profiles#video-create-and-set-up-a-merchant-profile "Direct link to Video: Create and Set up a Merchant Profile")
![](https://documentation.ixopay.com/manual/assets/ideal-img/preview-vimeo-merchants.58c0491.1300.png)
How to create a new Merchant profile and how to set it up properly.
## Create Merchant Profile[​](https://documentation.ixopay.com/manual/docs/merchant/profiles#create-merchant-profile "Direct link to Create Merchant Profile")
Create a new Merchant for your setup:
  1. Click **+ New Merchant** in the Global Merchants Overview.
  2. Fill in the mandatory fields Merchants name, Timezone (used in data export, post processing jobs and fee management), Website.
  3. Fill in additional optional fields in the Basic data, Rolling Reserve and Additional data sections.
  4. Click **+ Create Merchant**.

The newly created Merchant is enabled immediately and will show up in the Global Merchants Overview for further editing as well as associated configuration elements.
![Global Merchants Overview](https://documentation.ixopay.com/manual/assets/ideal-img/global-merchants-overview.6c71a84.1280.png)Global Merchants Overview
Fill in the Base Data:
  1. **Name** : Add a name for this new Merchant. (Company name, business name, shop name, etc…)
  2. **External Merchant ID:** Such as CRM system ID.
  3. **Tenant** : Assign the new Merchant to a Tenant account among the list. Per default the Merchant will be assigned to your Tenant.
  4. Please fill in all administrative fields such as Merchant's **Address** , **Zip Code** , **City** , **Country** , **Timezone** , **Website,** and **Email contacts** for **Administrative, Technical, Risk Alert** and **Scheduler Alert** purposes.

Fill in the [Rolling Reserve](https://documentation.ixopay.com/manual/docs/post-processing/rolling-reserve):
  1. **Rolling Reserve** : The term Rolling Reserve stands for process of securing a certain percentage of the processed Transaction volume for a defined period of time to cover potential Risks, due to Chargebacks. In the [IXOPAY platform](https://www.ixopay.com) the Rolling Reserve can be configured for each payment method individually and will be used in the Post Processing.

Fill in the Additional Data
  1. **Default Risk Profile** and **Default Risk Profile for Use with Virtual Terminal** : Assign a specific Risk Profile to a Merchant, if applicable. This can be edited at a later stage as well. For further information consult the [Create a Risk Profile tutorial](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create).
  2. **Transaction types** : Select the Transaction types your Merchant could or would use to process payments. Per default all Transaction types remain available.

![Refresh](https://documentation.ixopay.com/manual/assets/ideal-img/create-merchant.8eebe49.1280.png)Refresh
## Edit Merchant Profile[​](https://documentation.ixopay.com/manual/docs/merchant/profiles#edit-merchant-profile "Direct link to Edit Merchant Profile")
Create a new Merchant for your setup:
  1. Click **Edit** on the desired Merchant in the Global Merchants Overview
  2. **Edit** the data as desired
  3. Click **Save Merchant**

The Merchant Profile will be updated immediately.
## Enable/Disable Merchant Profiles[​](https://documentation.ixopay.com/manual/docs/merchant/profiles#enabledisable-merchant-profiles "Direct link to Enable/Disable Merchant Profiles")
Enable/disable a Merchant Profile:
  1. Click **Edit** on the desired Merchant in the Global Merchants Overview
  2. In the form an **Active (Status)** switch will be available in the basic data Section. **Enable/Disable** the switch
  3. Click **Save Merchant**

The Merchant Profile and associated configuration elements will be enabled/disabled immediately. You can also enable/disable a Merchant directly in the Global Merchant Overview by enable/disable the **Status** switch of the desired Merchant.