---
title: Response Handling
summary: ' Transparent Gateway API v2  Response Handling'
tags:
- tokenex-response-headers-https-documentation-ixopay-com-modules-docs-tokenex-response-handling-tokenex-response-headers-direct-link-tokenex-response-headers
- error-handling-https-documentation-ixopay-com-modules-docs-tokenex-response-handling-error-handling-direct-link-error-handling
- api
- tokenization
- tokenex
- ixopay
- authorization
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/response-handling-1
portal: tokenex
updated: '2026-06-01'
related: []
---

* Transparent Gateway API v2
  * Response Handling

# Response Handling
## TokenEx Response Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/response-handling-1#tokenex-response-headers "Direct link to TokenEx Response Headers")  
| HTTP Response Header  | Description  | /Detokenize  | /Tokenize  | /Proxy  | /Hash  |  
| --- | --- | --- | --- | --- | --- |  
| tx-message  | Informative message about the request (number of regex matches, PANs and CVVs associated, etc.).  | N/A  | Supplied  | Supplied  | N/A  |  
| tx-tokenize-error-X  | Reports errors in tokenization attempts, where X is an incremented count. Examples: tx-tokenize-error-1, tx-tokenize-error-2, etc.  | N/A  | Supplied  | Supplied  | N/A  |  
| tx-cvv-association-error-X  | Reports errors in CVV association attempts, where X is an incremented count. Examples: tx-cvv-association-error-1, tx-cvv-association-error-2, etc.  | N/A  | N/A  | Supplied  | N/A  |  
| tx-thirdpartystatuscode  | The status code received from the third party defined in the tx-url request header.  | Supplied when authentication is successful  | Supplied when authentication is successful  | N/A  | N/A  |  
| tx-tokenexstatuscode  | The status code for the request to TokenEx.  | Supplied when authentication is successful  | Supplied when authentication is successful  | N/A  | N/A  |  
| tx-total-time  | Total time required to process the request.  | Supplied  | Supplied  | N/A  | N/A  |  
| tx-tokenex-time  | Time spent processing request within the TokenEx environment.  | Supplied  | Supplied  | N/A  | N/A  |  
| tx-destination-time  | Time spent waiting for the third-party to respond.  | Supplied  | Supplied  | N/A  | N/A  |  
| tx-reference-number  | The reference number associated with your request.  | Supplied  | Supplied  | Supplied  | N/A  |  
info
In case of an error, the header values **tx-total-time** , **tx-tokenex-time** and **tx-destination-time** are set to zero.
## Error Handling[​](https://documentation.ixopay.com/modules/docs/tokenex/response-handling-1#error-handling "Direct link to Error Handling")
Errors are reported back to the client by way of an HTTP status code and response body containing error details. It is important that your application extract the error details from the body.  
| Status Code  | Description  | Likely Issue  |  
| --- | --- | --- |  
| 400  | Bad request  | Validation error  |  
| 401  | Unauthorized  | Authentication/Authorization error  |  
| 500  | Internal server error  | Unknown error  |  
Error message format
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```  * [TokenEx Response Headers](https://documentation.ixopay.com/modules/docs/tokenex/response-handling-1#tokenex-response-headers)
  * [Error Handling](https://documentation.ixopay.com/modules/docs/tokenex/response-handling-1#error-handling)
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```
```

{  

  "success": false,  

  "error": "ErrorCode:Message",  

  "referenceNumber": "Reference number returned on each call"  

}  

```