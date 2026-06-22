---
title: Proxy Profile Management
summary: ' Reseller API  Proxy Profile Management'
tags:
- hosts-https-documentation-ixopay-com-modules-docs-tokenex-proxy-profile-management-hosts-direct-link-hosts
- routes-https-documentation-ixopay-com-modules-docs-tokenex-proxy-profile-management-routes-direct-link-routes
- examples-https-documentation-ixopay-com-modules-docs-tokenex-proxy-profile-management-examples-direct-link-examples
- put-request-https-documentation-ixopay-com-modules-docs-tokenex-proxy-profile-management-put-request-direct-link-put-request
- api
- json
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Reseller API
  * Proxy Profile Management

# Proxy Profile Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  |   |  
| Production (US)  |   |  
| Production (EU)  |   |  
## Routes[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#routes "Direct link to Routes")  
| HTTP Verb  | Route  | Description  |  
| --- | --- | --- |  
| PUT  | /api/proxyProfile/{tokenExId}/{profileId}  | Update the proxy profile name  |  
| POST  | /api/proxyProfile/keys/{tokenExId}/{profileId}  | Creates a new Proxy Key  |  
| PUT  | /api/proxyProfile/keys/{tokenExId}/{profileId}  | Updates the name for the Proxy Key  |  
| DELETE  | /api/proxyProfile/keys/{tokenExId}/{profileId}  | Deletes the specified Proxy Key  |  
| POST  | /api/proxyProfile/cidrs/{tokenExId}/{profileId}  | Adds a IP Whitelist (CIDR) to the Proxy Key whitelist Note: the CIDR must include the IP **and** the Range, in XXX.XXX.XXX.XXX/XX format.  |  
| PUT  | /api/proxyProfile/cidrs/{tokenExId}/{profileId}  | Updates the description for the specified IP Whitelist (CIDR). Note: the CIDR must include the IP **and** the Range, in XXX.XXX.XXX.XXX/XX format.  |  
| DELETE  | /api/proxyProfile/cidrs/{tokenExId}/{profileId}  | Deletes the specified IP Whitelist (CIDR). Note: the CIDR must include the IP **and** the Range, in XXX.XXX.XXX.XXX/XX format.  |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#examples "Direct link to Examples")
### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request "Direct link to PUT Request")
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response "Direct link to PUT Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-request "Direct link to POST Request")
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-response "Direct link to POST Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request-1 "Direct link to PUT Request")
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response-1 "Direct link to PUT Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-request "Direct link to DELETE Request")
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-response "Direct link to DELETE Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-request-1 "Direct link to POST Request")
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-response-1 "Direct link to POST Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request-2 "Direct link to PUT Request")
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response-2 "Direct link to PUT Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-request-1 "Direct link to DELETE Request")
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-response-1 "Direct link to DELETE Response")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#hosts)
  * [Routes](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#routes)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#examples)
    * [PUT Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request)
    * [PUT Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response)
    * [POST Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-request)
    * [POST Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-response)
    * [PUT Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request-1)
    * [PUT Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response-1)
    * [DELETE Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-request)
    * [DELETE Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-response)
    * [POST Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-request-1)
    * [POST Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#post-response-1)
    * [PUT Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-request-2)
    * [PUT Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#put-response-2)
    * [DELETE Request](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-request-1)
    * [DELETE Response](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management#delete-response-1)
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"profileName": "Your proxy profile name here"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

PUT /api/proxyProfile/keys/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","proxyKeyName": "A new proxy key name"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/keys/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

POST /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK","description": "Just testing"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

PUT /api/proxyProfile/cidrs/12345/6789 HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK", "description": "Just testing 2"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```
```

DELETE /api/proxyProfile/cidrs/12345/6789  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{"cidr": "123.123.123.123/32","proxyKey": "asrMpRNd2gPAf4NA3zPiQ6j8CuZsujSeHDdEUhpK"}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

```