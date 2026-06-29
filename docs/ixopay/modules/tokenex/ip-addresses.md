---
title: IP Addresses
summary: ' Getting started  IP Addresses'
tags:
- test-environment-https-documentation-ixopay-com-modules-docs-tokenex-addresses-test-environment-direct-link-test-environment
- production-environment-https-documentation-ixopay-com-modules-docs-tokenex-addresses-production-environment-direct-link-production-environment
- api
- tls
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/ip-addresses
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* Getting started
  * IP Addresses

# IP Addresses
info
Heads Up! TLS v1.2 or higher is required.
## Test Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/ip-addresses#test-environment "Direct link to Test Environment")
**Inbound to TokenEx**  
| Host Name  | IP Address  | Port  |  
| --- | --- | --- |  
| test-batch.tokenex.com  | 20.37.143.185  | TCP/22  |  
| test-api.tokenex.com  | 20.37.143.183  | TCP/443  |  
| test-htp.tokenex.com  | 20.37.143.184  | TCP/443  |  
| test-tgapi.tokenex.com  | 20.37.143.189  | TCP/443  |  
**Outbound from TokenEx**
If you are using TokenEx to communicate to 3rd-party service providers that utilize IP filtering, you'll need to update their whitelist accordingly.  
| Service  | Source IP  | Port  |  
| --- | --- | --- |  
| Egress 1  | 20.37.143.181  | N/A  |  
| Egress 2  | 20.37.143.182  | N/A  |  
## Production Environment[​](https://documentation.ixopay.com/modules/docs/tokenex/ip-addresses#production-environment "Direct link to Production Environment")
Production IP addresses for the interfaces listed above can be obtained via the Documents section of the Production [Client Portal](https://documentation.ixopay.com/modules/docs/tokenex/welcome#client-portal).