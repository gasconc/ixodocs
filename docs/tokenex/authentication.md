---
title: API v1 Authentication
summary: ' TokenEx API v1  API v1 Authentication'
tags:
- api-authentication-parameters-https-documentation-ixopay-com-modules-docs-tokenex-authentication-api-authentication-parameters-direct-link-api-authentication-parameters
- whitelist-https-documentation-ixopay-com-modules-docs-tokenex-authentication-whitelist-direct-link-whitelist
- api
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/authentication
portal: tokenex
updated: '2026-05-18'
related: []
---

* TokenEx API v1
  * API v1 Authentication

# API v1 Authentication
The TokenEx authorization model consists of two key elements: your API authentication parameters and your vault's IP whitelist.
## API Authentication Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/authentication#api-authentication-parameters "Direct link to API Authentication Parameters")
For every call to the TokenEx API, you will provide your TokenEx ID and API key. You can think of this as a username and password. The API key governs the functions in the API to which you have access. This provides for very granular access controls and supports a "segregation of duties" approach.
For example, you may have a front-end web server in the DMZ that is responsible for collecting order information and creating tokens. You may also have another server in an internal network segment that calls the Detokenize function to facilitate order processing. You could issue separate API keys for Tokenize and Detokenize so that the server in the DMZ does not have access to the Detokenize function.  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| APIKey  | string  | Controls your access to individual functions in the API  |  
| TokenExID  | string  | Your vault identifier  |  
## IP Whitelist[​](https://documentation.ixopay.com/modules/docs/tokenex/authentication#ip-whitelist "Direct link to IP Whitelist")
In addition to the API Authentication Parameters described in the previous section, TokenEx also employs IP whitelisting for each TokenEx ID. Your whitelist can be maintained via the [Customer Portal](https://documentation.ixopay.com/modules/docs/tokenex/welcome#client-portal).
The IP Whitelist is based on CIDR notation. For further information refer to the following link: