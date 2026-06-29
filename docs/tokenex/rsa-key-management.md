---
title: RSA Key Management
summary: ' Reseller API  RSA Key Management'
tags:
- rsa-encryption-key-rotation-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-rsa-encryption-key-rotation-direct-link-rsa-encryption-key-rotation
- multiple-rsa-encryption-keys-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-multiple-rsa-encryption-keys-direct-link-multiple-rsa-encryption-keys
- rolling-back-rsa-encryption-key-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-rolling-back-rsa-encryption-key-direct-link-rolling-back-rsa-encryption-key
- rsa-key-portal-api-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-rsa-key-portal-api-direct-link-rsa-key-portal-api
- hosts-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-hosts-direct-link-hosts
- examples-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-examples-direct-link-examples
- request-https-documentation-ixopay-com-modules-docs-tokenex-rsa-key-management-request-direct-link-request
- api
- json
- tokenex
source_url: https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management
portal: tokenex
updated: '2026-06-29'
related: []
---

* Reseller API
  * RSA Key Management

# RSA Key Management
## RSA encryption key rotation[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rsa-encryption-key-rotation "Direct link to RSA encryption key rotation")
When enabled, per request, TokenEx provides a way for our clients to rotate the RSA keys they utilize for Browser Based Encryption, and other APIs that utilize an RSA encrypted request. To utilize this service, visit the page titled Browser Based Encryption Key Management within the client portal navigation.
  * TokenEx clients will have one key associated with the group by default.
  * This public key can be used for encryption for all TokenEx Id’s under that group.
  * Users can Rotate RSA keys when they are ready using the “Rotate RSA Keys” button.
  * Users can view RSA public key using “View Key” button.
  * The “Copy RSA Key” will add the RSA Key into the user’s clipboard.

### Multiple RSA encryption keys[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#multiple-rsa-encryption-keys "Direct link to Multiple RSA encryption keys")
  1. Users can have up to two active keys at a time.
  2. When users create a new key, the existing key will be set to expire in 7 days.
  3. Users/applications will be able to use both keys for encryption until the old key expires.
  4. When users have two active encryption keys, TokenEx will try to decrypt the data with both active keys for decrypting the data.

### Rolling back new RSA encryption key[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rolling-back-new-rsa-encryption-key "Direct link to Rolling back new RSA encryption key")
  1. Users can use the “Hold to Delete” button to delete any active keys.
  2. If the most recent active key is deleted, then TokenEx will reset the expiry date on the old key. That means the old key would no longer expire in 7 days.

### RSA Key Portal API[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rsa-key-portal-api "Direct link to RSA Key Portal API")
TokenEx provides a way for our clients to retrieve the latest RSA Key generated from the Browser Based Encryption Key Management page utilizing the Reseller API.
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  |   |  
| Production (US)  |   |  
| Production (EU)  |   |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#examples "Direct link to Examples")
In the following example, supply the correct TokenExID within the URL in order to retrieve the latest RSA Key.
### GET Request[​](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#get-request "Direct link to GET Request")
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```  * [RSA encryption key rotation](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rsa-encryption-key-rotation)
    * [Multiple RSA encryption keys](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#multiple-rsa-encryption-keys)
    * [Rolling back new RSA encryption key](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rolling-back-new-rsa-encryption-key)
    * [RSA Key Portal API](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#rsa-key-portal-api)
  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#hosts)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#examples)
    * [GET Request](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management#get-request)
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

GET /api/api/Key/{TokenExID} HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```