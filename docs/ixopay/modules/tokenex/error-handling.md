---
title: Error Handling
summary: ' Transparent Gateway API v1  Error Handling'
tags:
- api
- json
- tokenex
- payment-gateway
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/error-handling
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* Transparent Gateway API v1
  * Error Handling

# Error Handling
Errors are reported back to you by way of an HTTP 400 status code. However, it is important to note that the payment gateway itself could also return an HTTP 400 status code. With that, TokenEx will add error information as HTTP return headers as well as in a JSON object in the HTTP body. It is important that your application extract the error details from the HTTP headers or the body.
warning
TGAPI 1.0 will not return the response body when the 3rd party API returns a status code other than a 200 OK status. If there is a need to receive the response body in those scenarios, you may utilize TGAPI 2.0.
HTTP Response Headers
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```Error JSON
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```
```

tx_Code: Error Code  

tx_Message: Error Message  

tx_refNumber: Reference number returned on each call  

```
```

{  

  "Code": "Error Code",  

  "Message": "Error Message",  

  "RefNumber": "Reference number returned on each call"  

}  

```