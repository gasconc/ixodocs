---
title: CVV Function
summary: ' Transparent Gateway API v2  Invoke Functionshttps://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1  CVV
  Function'
tags:
- api
- json
- pci
- pci-dss
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/cvv-function
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* Transparent Gateway API v2
  * [Invoke Functions](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1)
  * CVV Function

# CVV Function
Insert a security code (i.e. CVV) into the request body.
To utilize the CVV function, a CVV must have been previously associated to a PAN during the tokenization process and the CVV must not have been removed. If the CVV has been purged, this function will fail. In accordance with the PCI DSS, TokenEx will store the CVV for only a short period. After tokenization, the CVV will be available for up to 7 days, or until it is consumed by the CVV function in the Transparent Gateway API. If the tx-cachecvv header is set to true, the CVV will be available for unlimited uses for five minutes starting after the first successful invocation of the CVV function.  
| Parameter Name  | Value  |  
| --- | --- |  
| FUNCTION  | CVV  |  
| TOKEN  | Token in which this CVV is associated  |  
**CVV Example**
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```
```

Content-Type: application/json  

TX-URL: https://www.example.com  

TX-TokenEx-ID: YourTokenExID  

TX-APIKey: YourAPIKey  

  

{  

  "card": {  

    "type": "MC",  

    "number": "{{{545454tEc3Hk5454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "{{{{FUNCTION:CVV, TOKEN:545454tEc3Hk5454}}}}"  

  }  

}  

```