---
title: About the Echo API
summary: ' TokenEx Echo  About the Echo API'
tags:
- overview-https-documentation-ixopay-com-modules-api-tokenex-echo-echo-api-overview-direct-link-overview
- echo-https-documentation-ixopay-com-modules-api-tokenex-echo-echo-api-echo-direct-link-echo
- httpbin-https-documentation-ixopay-com-modules-api-tokenex-echo-echo-api-httpbin-direct-link-httpbin
- httpstatus-https-documentation-ixopay-com-modules-api-tokenex-echo-echo-api-httpstatus-direct-link-httpstatus
- encapsulated-https-documentation-ixopay-com-modules-api-tokenex-echo-echo-api-encapsulated-direct-link-encapsulated
- api
- json
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* TokenEx
  * TokenEx Echo
  * About the Echo API

# About the Echo API
A request and response troubleshooting tool
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api#overview "Direct link to Overview")
The Echo API is intended to be a troubleshooting tool that yields insights about http requests and the way information comes across to other servers.
Recommended usage: [TGAPI](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics)'s [tx-url](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1#supply-tokenex-request-headers) header or a [Proxy Profile](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1)'s URL or anything else that may require troubleshooting how information is passed between servers.
Available at: 
There are four endpoints within this API:
### Echo[​](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api#echo "Direct link to Echo")
[/echo](https://tokenechoendpoint.azurewebsites.net/api/echo): returns exactly what was sent in the format it was sent. Request headers can be viewed in the response headers section. Always returns a 200. To use [Response Simulation](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation), include the query parameter `ResponseSetKey`. Supports GET, POST, and PUT.
### HttpBin[​](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api#httpbin "Direct link to HttpBin")
[/echo/httpbin](https://tokenechoendpoint.azurewebsites.net/api/Echo/HttpBin): returns a response in the format of [httpbin.org/anything](https://httpbin.org). Supports GET, POST, and PUT. Always returns a 200.
### HttpStatus[​](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api#httpstatus "Direct link to HttpStatus")
[/httpstatus/statuscode?sleep=0](https://tokenechoendpoint.azurewebsites.net/api/HttpStatus/201?sleep=0): returns a response in the format of [httpstat.us](https://httpstat.us). Returns any valid HTTP status code sent in the path. It also supports a query string parameter, sleep, which accepts a value in milliseconds (2000 ms = 2 seconds). There is no cap on the sleep limit; useful for testing delayed or timeout scenarios. Content sent in the body is ignored. Supports GET, POST, and PUT.
### Encapsulated[​](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api#encapsulated "Direct link to Encapsulated")
[/echo/encapsulated](https://tokenechoendpoint.azurewebsites.net/api/Echo/Encapsulated): returns the request in a JSON format that allows access to all headers, form fields, and files via key-value pairs. Always returns a 200. Supports GET, POST, and PUT.