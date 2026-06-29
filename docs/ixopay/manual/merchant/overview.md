---
title: Merchants Overview
summary: ' Merchants Overview'
tags:
- global-merchants-overview-https-documentation-ixopay-com-manual-docs-merchant-overview-global-merchants-overview-direct-link-global-merchants-overview
- detailed-merchants-overview-https-documentation-ixopay-com-manual-docs-merchant-overview-detailed-merchants-overview-direct-link-detailed-merchants-overview
- api
- ixopay
- merchant
source_url: https://documentation.ixopay.com/manual/docs/merchant/overview
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [Merchant](https://documentation.ixopay.com/manual/docs/merchant)
  * Merchants Overview

# Merchants Overview
Use the **Merchants Overview** to display your merchants and access associated configuration elements such as connectors and users.
## Global Merchants Overview[​](https://documentation.ixopay.com/manual/docs/merchant/overview#global-merchants-overview "Direct link to Global Merchants Overview")
The global Merchant Overview lists all merchants configured under the selected tenant, providing quick access to associated configuration elements for individual Merchants. You can:
  * [Create and edit Merchant Base Data](https://documentation.ixopay.com/manual/docs/merchant/profiles)
  * [Enable/Disable Merchant](https://documentation.ixopay.com/manual/docs/merchant/profiles)
  * [Archive Merchants](https://documentation.ixopay.com/manual/docs/merchant/archive)
  * Create Merchant Templates

![Global Merchant Overview](https://documentation.ixopay.com/manual/assets/ideal-img/global-merchant-overview.2d2cfa1.1280.png)Global Merchant Overview
## Detailed Merchants Overview[​](https://documentation.ixopay.com/manual/docs/merchant/overview#detailed-merchants-overview "Direct link to Detailed Merchants Overview")
Click on **Overview** for a merchant in the global Merchants Overview to display a detailed overview of that merchant.
![Detailed Merchants Overview](https://documentation.ixopay.com/manual/assets/ideal-img/detailed-merchants-overview.47adec9.1280.png)Detailed Merchants Overview
  1. **Merchant Base Data** - The merchant base data summarizes all key elements of a merchant profile and its business. For more information see our tutorial on how tol [Create and Set Up a Merchant Profile](https://documentation.ixopay.com/manual/docs/merchant/profiles)
    1. **Name** : Name of the Company, business or shop of the merchant
    2. **GUID** : Global unique identifier of the selected merchant
    3. **External Merchant ID:** Such as CRM system ID, if available
    4. **Tenant** : The tenant the merchant is assigned to
    5. **Address, ZIP Code, City, Country** : Location information
    6. **Timezone** : Merchant's current time zone
    7. **Website** : URL of the company or shop of the merchant
    8. **Administrative, Technical and Risk Alert Email** : Displays multiple contact email addresses within an organization
    9. **Default Risk Profile** and **Default VT Risk Profile (Virtual Terminal)** : Indicates whether a specific risk profile has been assigned to a merchant
    10. **Status:** Indicates whether a merchant is enabled or not
  2. **Connectors** - The **Connectors** sections displays all configured adapters and their respective payment methods assigned to a merchant profile.
    1. **GUID** : Global unique identifier of the connector
    2. **Name** : Name of the connector
    3. **Adapter** : The selected adapter and interface type, in case the adapter and its payment method offers several API connections.
    4. **Methods** : Displays the selected payment method offered by the adapter.
    5. **Description** : A description of the adapter, which can be entered when setting up and assigning the adapter
    6. **Risk Profile** : The risk profile assigned to the adapter and its payment method
    7. **Provider** : The contractual provider for the connector
    8. **Status** : Indicates whether the connector is enabled or not
    9. For further information about a connector, click on the downward arrow on the left
  3. **Users** - The users section displays the [API users](https://documentation.ixopay.com/manual/docs/connector/users/api) as well as [merchant users (web)](https://documentation.ixopay.com/manual/docs/connector/users/web) who have been granted access to the payment platform.
    1. **GUID:** Global unique identifier of the user
    2. **Type:** Indicates whether the user is a web or API user
    3. **Username:** The user name
    4. **Name:** First and last name of the user
    5. **Email:** Email address of the user
    6. **Status:** Indicates whether access to the payment platform is enabled or not
    7. **Valid Until:** If needed, administrators can restrict access to a specific time period, which is indicated here
  4. **Job Schedules** - This section displays an overview of all predefined tasks or processes that are automatically started at specific dates and times for the merchant.
    1. **Job Type:** Name or definition of the job
    2. **Schedule:** Information on the schedule settings in cron syntax
    3. **# of Connectors:** Indicates how many connectors are related to this job
    4. **Last run & Next Run:** The date the job was last run and when it will next run
    5. **Status:** Indicates whether a job schedule is enabled or not
  5. **Rolling Reserves**
    1. **Method:** Lists the payment methods
    2. **Percentage & days :**A pre-defined percentage that is withheld for an agreed period of time.

  * [Global Merchants Overview](https://documentation.ixopay.com/manual/docs/merchant/overview#global-merchants-overview)
  * [Detailed Merchants Overview](https://documentation.ixopay.com/manual/docs/merchant/overview#detailed-merchants-overview)