---
title: Overview of TokenEx API v2
summary: ' TokenEx API v2  Overview of TokenEx API v2'
tags:
- authentication-authorization-https-documentation-ixopay-com-modules-docs-tokenex-basics-authentication-authorization-direct-link-authentication-authorization
- api
- json
- pci
- tls
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* TokenEx API v2
  * Overview of TokenEx API v2

# Overview of TokenEx API v2
This page will help you get started with **TokenEx API v2**.
The TokenEx Web API accepts JSON payloads.
**Host:** test-api.tokenex.com/v2  
**Port:** 443  
**Content Type:** application/json
warning
All TokenEx API requests must utilize TLS 1.2 (HTTPS).
## Authentication and Authorization[​](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization "Direct link to Authentication and Authorization")
The TokenEx authorization model consists of two key elements: your API Authentication parameters (a combination of your TokenEx ID and Token Ex API Key) and the IP whitelist for the associated Vault or Vaultless Profile.
**API Authentication**
For every call to the TokenEx API, you will need to provide your TokenEx ID and API key. You can think of this as a username and password.
The TokenEx ID will identify which Vault tokens will be stored in or which Vaultless Profile tokens will be generated against.
The API key will determine which functions in the API you can access. This provides for very granular access controls and supports a "segregation of duties" approach.
For example, you may have a front-end web server in the DMZ that is responsible for collecting order information and creating tokens. You may also have another server in an internal network segment that calls the Detokenize function to facilitate order processing. You could issue separate API keys for Tokenize and Detokenize so that the server in the DMZ does not have access to the Detokenize function.
How to do it.
The TokenEx ID and API key will be supplied in your HTTP request as header values.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tx-tokenex-id  | string  | Your vault identifier. This ID logically segments data at a per TokenEx client level at a minimum. A TokenEx client may provision multiple TokenEx IDs if data segmentation is needed within a single TokenEx account.  |  
| tx-apikey  | string  | Controls your access to individual functions in the API. A client can have one or many revocable and configurable API keys.  |  
**IP Whitelist**
In addition to the API Authentication Parameters described in the previous section, TokenEx also employs IP whitelisting for each TokenEx ID. Your whitelist can be maintained via the [Customer Portal](https://documentation.ixopay.com/modules/docs/tokenex/welcome#client-portal).
The IP Whitelist is based on CIDR notation. For further information refer to the following link: 
API Documentation
[Click here](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services) for the **TokenEx API** v2 API documentation.