---
title: General Overview
summary: ' Reseller API  General Overview'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-overview-direct-link-overview
- generating-credentials-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-generating-credentials-direct-link-generating-credentials
- steps-create-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-steps-create-direct-link-steps-create
- authorization-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-authorization-direct-link-authorization
- hosts-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-hosts-direct-link-hosts
- response-codes-https-documentation-ixopay-com-modules-docs-tokenex-general-overview-response-codes-direct-link-response-codes
- api
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/general-overview
portal: tokenex
updated: '2026-06-01'
related: []
---

* Reseller API
  * General Overview

# General Overview
Getting started with the Reseller API.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#overview "Direct link to Overview")
The Reseller API enables our reseller participants control of their customers onboarding and account management experience. Features include management of token vaults, API keys & permissions, vault IP whitelists, proxy profiles and RSA keys.
Customers can request access to the Reseller API by opening a support ticket via the client portal or your customer success manager.
Once integration testing has been reviewed and accepted, this permission can be enabled for your production account.
## Generating Credentials[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#generating-credentials "Direct link to Generating Credentials")
Reseller API credentials are supported by self-service access. Once our team has enabled the permission, the Reseller API page link will appear in the main menu.
The Reseller API supports up to 6 API Keys at any one time. Its critical to capture the API key at the time of creation as this value will auto mask and will not be accessible at a later time. Any lost API keys require a delete event and regeneration of a new key.
### Steps to Create[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#steps-to-create "Direct link to Steps to Create")
  1. Navigate to Reseller API page
  2. Click the green Add Credential Button
  3. Copy API Key/Key ID and save to your local environment

### Authorization[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#authorization "Direct link to Authorization")
Once you have the API Key and API Key ID you will need to leverage these values to generate your authorization value.
  1. Concatenate the API Key ID and the API Key, with a colon separating the values (i.e. ApiKeyID:ApiKey)
  2. Generate a Base64-encoded string of the concatenated values. This is your Authorization value

#### Example[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#example "Direct link to Example")  
| Data  | Value  |  
| --- | --- |  
| API Key ID  | `ASDF1234asdf`  |  
| API Key  | `1234567890123456789012345678901234567890`  |  
| Concatenated Value  | `ASDF1234asdf:1234567890123456789012345678901234567890`  |  
| Base64-Encoded Value  | `QVNERjEyMzRhc2RmOjEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTA=`  |  
### Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  |   |  
| Production (US)  |   |  
| Production (EU)  |   |  
### Response Codes[​](https://documentation.ixopay.com/modules/docs/tokenex/general-overview#response-codes "Direct link to Response Codes")  
| Response Code  | Description  |  
| --- | --- |  
| 200  | OK. Successful request  |  
| 400  | Bad request. Review request headers and body for accuracy  |  
| 401  | Unauthorized. Review authorization required fields for accuracy.  |  
| 404  | Requested endpoint not supported. Review headers and endpoint for accuracy.  |