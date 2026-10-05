---
title: Regions
summary: 'The IXOPAYhttps://www.ixopay.com Payment Orchestration Platform is available
  in two regions: Europe EU and the United States US. In each region, IXOPAY operates
  separate production and sandbox instances of the Gateway and Vault services.'
tags:
- hostnames-https-documentation-ixopay-com-docs-reference-appendix-regions-hostnames-direct-link-hostnames
- api
- pci
- ixopay
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/reference/appendix/regions
portal: ixopay-dev
updated: '2026-10-05'
related: []
---

* [Appendix](https://documentation.ixopay.com/docs/reference/appendix)
  * Regions

# Regions
The [IXOPAY](https://www.ixopay.com) Payment Orchestration Platform is available in two regions: Europe (EU) and the United States (US).
In each region, IXOPAY operates separate production and sandbox instances of the Gateway and Vault services. Each merchant account is assigned to exactly one region, and all requests — including API calls, admin interface access, reporting, and Vault operations — must use that region's hostnames. Regions do not share data and cannot be used interchangeably. Requests sent to the wrong region will not find the account.
Your region is assigned during onboarding. You can identify it by the hostname used to access the admin interface. If you are unsure, contact your account manager.
Throughout this documentation, hostnames are shown for the currently selected region and environment. The region selector in the navigation bar updates the entire site, including page content, code examples, and the "Send API Request" base URL. Your selection is retained for the remainder of the browser session.
## Hostnames[​](https://documentation.ixopay.com/docs/reference/appendix/regions#hostnames "Direct link to Hostnames")
Only the hostname differs between regions; the scheme and the base path, shown dimmed, are the same everywhere.  
| Service  |  🇪🇺 Europe  |  🇺🇸 United States  |  
| --- | --- | --- |  
| Production |  
| Admin  | `https://gateway.ixopay.com`  | `https://gateway.us.pop.ixopay.com`  |  
| API  | `https://gateway.ixopay.com/api/v3`  | `https://gateway.us.pop.ixopay.com/api/v3`  |  
| PCI Transaction API  | `https://secure.ixopay.com/api/v3`  | `https://secure.us.pop.ixopay.com/api/v3`  |  
| Business Intelligence  | `https://bds.ixopay.com/query`  | `https://bds.us.pop.ixopay.com/query`  |  
| Sandbox |  
| Admin  | `https://sandbox.ixopay.com`  | `https://sandbox.us.pop.ixopay.com`  |  
| API  | `https://sandbox.ixopay.com/api/v3`  | `https://api-sandbox.us.pop.ixopay.com/api/v3`  |  
| PCI Transaction API  | Production host, with the `X-Environment: sandbox` request header — [how to test PCI transactions](https://documentation.ixopay.com/docs/guides/getting-started/testing#using-the-sandbox-environment-with-pci-transactions)  | `https://secure-sandbox.us.pop.ixopay.com/api/v3`  |  
| Business Intelligence  | `https://sandboxbds.ixopay.com/query`  | `https://bds-sandbox.us.pop.ixopay.com/query`  |