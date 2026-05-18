---
title: Use Network Token Function
summary: ' Transparent Gateway API v2  Invoke Functionshttps://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1  Use
  Network Token Function'
tags:
- api
- json
- tokenex
- ixopay
- psp
- authorization
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/use-network-token-function
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* Transparent Gateway API v2
  * [Invoke Functions](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1)
  * Use Network Token Function

# Use Network Token Function
Insert a network token and/or a network token expiration date into the request body.
The Use Network Token function can be used to send payment transactions to your PSP, or some third-party API, using a network token rather than the PAN.  
| Parameter Name  | Value  |  
| --- | --- |  
| FUNCTION  | UseNetworkToken  |  
| TOKEN  | The TokenEx token to which the network token and/or network token expiration date are associated with.  |  
| TYPE  | Possible Values: NetworkToken, NetworkTokenExpiryDate  |  
| FORMAT  | Optional Parameter with default value "**MMYY** "   
Possible Values: MMYYYY, M, MM, YYYY, YY, MMYY, YYMM, YYYYMM   
  
*Applicable only to **NetworkTokenExpiryDate** Type  |  
**Card Authorization Using Network Token Example:**
  * Request to TokenEx
  * TokenEx to Receiving URL
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```
```

POST /Detokenize HTTP/1.1  

Host: test-tgapi.tokenex.com  

Content-Type: application/json  

TX-URL: Receiving_URL  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "PaymentToken": {  

    "cardNumber": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkToken}}}}",  

    "expDate": "{{{{FUNCTION:UseNetworkToken,TOKEN:476120FDallZ7718,TYPE:NetworkTokenExpiryDate,FORMAT:YYMM}}}}"  

  }  

}  

```
```

POST Receiving_URL_Path HTTP/1.1  

Host: Receiving_URL_Host  

Content-Type: application/json  

  

{  

  "PaymentToken": {  

    "cardNumber": "4761209400161814",  

    "expDate": "2212"  

  }  

}  

```