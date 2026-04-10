Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * Reporting


On this page
# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

Last updated on **Apr 10, 2026**
# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * Reporting


On this page
# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

Last updated on **Apr 10, 2026**
[Previous Proxy Profile Management](https://documentation.ixopay.com/modules/docs/tokenex/proxy-profile-management)[Next RSA Key Management](https://documentation.ixopay.com/modules/docs/tokenex/rsa-key-management)
  * [Hosts](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts)
  * [Routes](https://documentation.ixopay.com/modules/docs/tokenex/reporting#routes)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/reporting#examples)
    * [GET Request (Token Count)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-token-count)
    * [GET Response (Token Count)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count)
    * [GET Request (API Usage)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage)
    * [GET Response (API Usage)](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * Reseller API
  * Reporting


On this page
# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

Last updated on **Apr 10, 2026**
# Reporting
## Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#hosts "Direct link to Hosts")  
| Environment  | Host  |  
| --- | --- |  
| Test  | <https://test-my.tokenex.com>  |  
| Production (US)  | <https://my.tokenex.com>  |  
| Production (EU)  | <https://eu-my.tokenex.com>  |  
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

```

### GET Response (Token Count)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-token-count "Direct link to GET Response \(Token Count\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 27  
  
11500  

```

### GET Request (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-request-api-usage "Direct link to GET Request \(API Usage\)")

```
GET /api/reporting/apiusage HTTP/1.1  
Host: test-my.tokenex.com  
Content-Type: application/json  
Authorization: {Your Authorization Value}  

```

### GET Response (API Usage)[​](https://documentation.ixopay.com/modules/docs/tokenex/reporting#get-response-api-usage "Direct link to GET Response \(API Usage\)")

```
HTTP/1.1 200 OK  
Content-Type: application/json; charset=utf-8  
Content-Length: 208  
  
[{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"DeleteToken","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":165,"endpoint":"Detokenize","tokenExId": "{Your TokenEx Id}"},{"date":"1/1/2001 12:00:00 AM","count":330,"endpoint":"Tokenize","tokenExId": "{Your TokenEx Id}"}]  

```

