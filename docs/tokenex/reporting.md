---
title: Reporting
summary: ' Reseller API'
tags:
- hosts-https-documentation-ixopay-com-modules-docs-tokenex-reporting-hosts-direct-link-hosts
- routes-https-documentation-ixopay-com-modules-docs-tokenex-reporting-routes-direct-link-routes
- examples-https-documentation-ixopay-com-modules-docs-tokenex-reporting-examples-direct-link-examples
- request-token-count-https-documentation-ixopay-com-modules-docs-tokenex-reporting-request-token-count-direct-link-request-token-count
- api
- json
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/reporting
portal: tokenex
updated: '2026-06-08'
related: []
---

* Reseller API
  * Reporting

# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  |   |  
| Production (US)  |   |  
| Production (EU)  |   |  
## Routes[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#routes "Direct link to Routes")  
| HTTP Verb  | Route  | Description  |  
| --- | --- | --- |  
| GET  | /api/reporting/tokencount  | Returns a count (int) of all tokens for your Company.  |  
| GET  | /api/reporting/apiusage  | Returns usage stats for each TokenEx ID within your Company.  |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#examples "Direct link to Examples")
### GET Request (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-token-count "Direct link to GET Request \(Token Count\)")
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts)
  * [Routes](https://documentation.ixopay.com/modules/docs/tokenex/reporting#routes)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/reporting#examples)
    * [GET Request (Token Count)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-token-count)
    * [GET Response (Token Count)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count)
    * [GET Request (API Usage)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage)
    * [GET Response (API Usage)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage)
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```
```

GET /api/reporting/tokencount HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 27  

  

11500  

```
```

GET /api/reporting/apiusage HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json; charset=utf-8  

Content-Length: 208  

  

[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```