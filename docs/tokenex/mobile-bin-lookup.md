---
title: Bin Lookup
summary: ' Mobile Solutions  Bin Lookup'
tags:
- endpoints-https-documentation-ixopay-com-modules-docs-tokenex-mobile-bin-lookup-endpoints-direct-link-endpoints
- api-parameters-https-documentation-ixopay-com-modules-docs-tokenex-mobile-bin-lookup-api-parameters-direct-link-api-parameters
- request-https-documentation-ixopay-com-modules-docs-tokenex-mobile-bin-lookup-request-direct-link-request
- api
- hmac
- tokenex
- ixopay
- subscription
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup
portal: tokenex
updated: '2026-06-29'
related: []
---

* Mobile Solutions
  * Bin Lookup

# Bin Lookup
info
BIN lookup is a subscription service. Contact your Customer Success Manager or sales@ixopay.com to gain access to our BIN lookup product.
The BIN Lookup endpoint uses the same authentication model as the Tokenize method in the Mobile API. See the documentation for generating the authentication key [here.](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#hmac-construction-tokenize-tokenizewithcvv-binlookup)
## Endpoints[​](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#endpoints "Direct link to Endpoints")  
| Environment  | URL  |  
| --- | --- |  
| Test  |   |  
## API Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#api-parameters "Direct link to API Parameters")  
| Parameter  | Data Type  | Description  |  
| --- | --- | --- |  
| TokenExID  | string  | The merchant's TokenEx ID.  |  
| Timestamp  | string  | The timestamp (UTC) when the hash is generated, in `yyyyMMddHHmmss` format.  |  
| AuthenticationKey  | string  | The Authentication Key generated on the merchant's server.  |  
| Pan  | string  | The PAN to lookup in BIN database  |  
| TokenScheme  | enum  | The Token Scheme to be used to tokenize the provided data. See [Universal Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes).  |  
## Request[​](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#request "Direct link to Request")
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```## Response[​](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#response "Direct link to Response")
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```  * [Endpoints](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#endpoints)
  * [API Parameters](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#api-parameters)
  * [Request](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#request)
  * [Response](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup#response)
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```
```

{  

  "tokenexid": "YourTokenExID",  

  "timestamp": "20180109161437",  

  "authenticationKey": "3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=",  

  "pan": "4109931020342877",  

  "tokenScheme": "sixTOKENfour"  

}  

```
```

{  

  "Error": null,  

  "Success": true,  

  "ReferenceNumber": "24032109095063825804",  

  "BinData": {  

    "BinMin": "4109931020000000000",  

    "BinMax": "4109931029999999999",  

    "BinLength": 8,  

    "CleanBankName": "Metro Credit Union",  

    "ProductName": "Visa Traditional",  

    "CardBrand": "VISA",  

    "CountryAlpha2": "US",  

    "CountryName": "UNITED STATES OF AMERICA",  

    "CountryNumeric": "840",  

    "Type": "Credit",  

    "BankName": "METRO CREDIT UNION",  

    "BankUrl": "",  

    "BankPhone": "",  

    "ProductCode": "A",  

    "Prepaid": false,  

    "Regulated": false,  

    "RegulatedName": "GOVERNMENT EXEMPT INTERCHANGE FEE",  

    "Reloadable": false,  

    "PanOrToken": "pan",  

    "AccountUpdater": false,  

    "Alm": false,  

    "DomesticOnly": false,  

    "GamblingBlocked": false,  

    "Level2": false,  

    "Level3": false,  

    "IssuerCurrency": "USD",  

    "CardSegmentType": "Consumer",  

    "ComboCard": "",  

    "CardBrandIsAdditional": false,  

    "CorrelationId": "eyJGaWxlSWQiOjcxMzcsIlZlcnNpb24iOjQwfQ==",  

    "SharedBin": false,  

    "Cost": [],  

    "Authentication": [],  

    "AdditionalCardBrands": []  

  }  

}  

```