---
title: HMAC Examples
summary: ' Transparent Gateway API v1  Payload HMAChttps://documentation.ixopay.com/modules/docs/tokenex/payload-hmac  HMAC
  Examples'
tags:
- api
- json
- hmac
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/hmac-examples
portal: ixopay-modules
updated: '2026-05-25'
related: []
---

* Transparent Gateway API v1
  * [Payload HMAC](https://documentation.ixopay.com/modules/docs/tokenex/payload-hmac)
  * HMAC Examples

# HMAC Examples
Additional text here
  * Request
  * Response
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```
```

POST https://test-api.tokenex.com/TransparentGatewayAPI/Hash?Type=HMACSHA256 HTTP/1.1  

Content-Type: application/json  

TX_URL: https://www.example.com  

TX_TokenExID: YourTokenExID  

TX_APIKey: YourAPIKey  

TX_HMACKey: YourHMACKey  

  

{  

  "card": {  

    "type": "MC ",  

    "number": "{{{545454587415454}}}",  

    "expDate": "1126",  

    "cardValidationNum": "123"  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Length: 95  

Content-Type: application/json; charset=utf-8  

tx_hashValue: NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==  

tx_refNumber: 19011512562595159744  

  

{  

  "HashValue": "NDY0NmZiOTI5ZDAzYzRiODY2MjllNDJlNzgxMjI0ODYyNDQ2ODNjZmViZmU5ZThiMGRmNjBkOGRkZDdiMzlhYQ==",  

  "RefNumber": "19011512562595159744"  

}  

```