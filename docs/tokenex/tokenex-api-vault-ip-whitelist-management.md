---
title: IP Whitelist Management
summary: ' Reseller API  IP Whitelist Management'
tags:
- hosts-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-api-vault-whitelist-management-hosts-direct-link-hosts
- routes-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-api-vault-whitelist-management-routes-direct-link-routes
- examples-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-api-vault-whitelist-management-examples-direct-link-examples
- request-https-documentation-ixopay-com-modules-docs-tokenex-tokenex-api-vault-whitelist-management-request-direct-link-request
- api
- json
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management
portal: tokenex
updated: '2026-07-01'
related: []
---

* Reseller API
  * IP Whitelist Management

# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  |   |  
| Production (US)  |   |  
| Production (EU)  |   |  
## Routes[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#routes "Direct link to Routes")  
| HTTP Verb  | Route  | Description  |  
| --- | --- | --- |  
| GET  | /api/api/ip/{TokenExID}  | Retrieve a list of IP Whitelists and their Descriptions for the given TokenEx ID.  |  
| POST  | /api/api/ip/{TokenExID}  | Add a new IP Whitelist (CIDR) entry to the given TokenEx ID.  |  
| PUT  | /api/api/ip/{TokenExID}/{CIDR}  | Update the Description for the given IP Whitelist (CIDR). Note: the CIDR must include the IP **and** the Range, in XXX.XXX.XXX.XXX/XX format.  |  
| DELETE  | /api/api/ip/{TokenExID}/{CIDR}  | Delete the given IP Whitelist (CIDR) entry. Note: the CIDR must include the IP **and** the Range, in XXX.XXX.XXX.XXX/XX format.  |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#examples "Direct link to Examples")
### GET Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-request "Direct link to GET Request")
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts)
  * [Routes](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#routes)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#examples)
    * [GET Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-request)
    * [GET Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response)
    * [POST Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request)
    * [POST Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response)
    * [PUT Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request)
    * [PUT Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response)
    * [DELETE Request](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request)
    * [DELETE Response](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response)
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

GET /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 85  

  

[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```
```

POST /api/api/ip/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"ip":"0.0.0.0/32","description":"New entry"}  

```
```

HTTP/1.1 201 Created  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"description":"Updated Description"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```