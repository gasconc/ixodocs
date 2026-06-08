---
title: API Keys
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup  API
  Keys'
tags:
- creating-api-key-https-documentation-ixopay-com-manual-docs-system-setup-api-keys-creating-api-key-direct-link-creating-api-key
- api
- ixopay
source_url: https://documentation.ixopay.com/manual/docs/system-setup/api-keys
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * API Keys

# API Keys
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
The IXOPAY platform provides additional services as the [Provisioning API](https://documentation.ixopay.com/api/provisioning/provisioning-api) and the [BI Data Source](https://documentation.ixopay.com/docs/reference/features/bi-data-source) to be accessed via API. Any request to both APIs must be authenticated via BASIC Authentication credentials.
## Creating an API Key[​](https://documentation.ixopay.com/manual/docs/system-setup/api-keys#creating-an-api-key "Direct link to Creating an API Key")
  1. Click on **+ New API Key** in the API Key Overview
  2. Select the **Service** for which you want to create the API Key
  3. Enter any IP Addresses that should be able to access the service using this API Key
  4. Click on **+ Create** to save the API Key

![API Key Overview](https://documentation.ixopay.com/manual/assets/ideal-img/api-key-overview.6a07938.1280.png)API Key Overview![Available Services](https://documentation.ixopay.com/manual/assets/ideal-img/available-services.eaf7ee5.332.png)Available Services
tip
Separate multiple IP addresses with a comma (and NO whitespace, e.g. `198.51.100.101,203.0.113.103`). You can also use CIDR notation for the IP addresses (e.g. `198.51.100.0/28` for all IP addresses from `198.51.100.0` to `198.51.100.15`)
warning
Make sure to securely store the generated password, this is the only time it is shown to you. After that you can only reset it.