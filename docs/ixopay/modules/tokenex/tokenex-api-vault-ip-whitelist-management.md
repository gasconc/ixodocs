Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * IP Whitelist Management


On this page
# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

Last updated on **Apr 10, 2026**
# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * IP Whitelist Management


On this page
# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

Last updated on **Apr 10, 2026**
[Previous Vault API Key & Permission Management](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions)[Next Proxy Profile Management](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management)
  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts)
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


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * IP Whitelist Management


On this page
# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

Last updated on **Apr 10, 2026**
# IP Whitelist Management
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#get-response "Direct link to GET Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 85  
  
[{"ip":"0.0.0.0/0","description":""},{"ip":"1.2.3.4/32","description":"Testing IP"}]  

```

### POST Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-request "Direct link to POST Request")

```
POST /api/api/ip/12345 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"ip":"0.0.0.0/32","description":"New entry"}  

```

### POST Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#post-response "Direct link to POST Response")

```
HTTP/1.1 201 Created  
Content-Type: application/json; charset=utf-8  

```

### PUT Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-request "Direct link to PUT Request")

```
PUT /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  
  
{"description":"Updated Description"}  

```

### PUT Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#put-response "Direct link to PUT Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

### DELETE Request[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-request "Direct link to DELETE Request")

```
DELETE /api/api/ip/12345/0.0.0.0/32 HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### DELETE Response[​](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-api-vault-ip-whitelist-management#delete-response "Direct link to DELETE Response")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  

```

