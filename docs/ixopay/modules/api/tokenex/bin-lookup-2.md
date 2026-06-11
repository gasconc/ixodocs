---
title: Bin Lookup
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services  Bin
  Lookup'
tags:
- https-test-api-tokenex-com-pci-binlookup
- request-https-documentation-ixopay-com-modules-api-tokenex-bin-lookup-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/bin-lookup-2
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * Bin Lookup

# Bin Lookup
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```**Bin Lookup** is a process in which rich metadata about a payment card can be retrieved by querying the PAN against a BIN database. A bank identification number (BIN) is the first 4, 6, or 8 digits of a payment card account number (PAN). The BIN represents a range of account numbers that an issuer can use to issue cards within a given BIN. All cards issued in this BIN share the same attributes.
info
BIN lookup is a subscription service. Contact your Customer Success Manager or sales@ixopay.com to gain access to our BIN lookup product.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/bin-lookup-2#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** string
Your TokenEx token vault identifier or vaultless tokenization profile.
**tx-apikey** string
Provides access to one or more functions in the TokenEx API.

  * application/json

  * Body
  * Request Example

### Body
**PAN** string
**NOTE:** Either PAN or Token **must** be provided, but the request cannot contain both
**Token** string
**NOTE:** Either PAN or Token **must** be provided, but the request cannot contain both"
```

{  

  "PAN": "5584750144001859"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/bin-lookup-2#responses "Direct link to Responses")
  * 200
  * 400

200
  * application/json

  * Schema
  * Example (auto)
  * Success
  * Data Not Found

**Schema**
oneOf
    * Success
    * Data Not Found
**binData** object
**binMin** string
**Example:**`5584750000000000000`
**binMax** string
**Example:**`5584759999999999999`
**cleanBankName** string
**Example:**`Nexi Payments Spa`
**productName** string
**Example:**`MasterCard Preferred BusinessCard Card`
**cardBrand** string
**Example:**`MASTERCARD`
**countryAlpha2** string
**Example:**`IT`
**countryName** string
**Example:**`ITALY`
**countryNumeric** string
**Example:**`380`
**type** string
**Example:**`Credit`
**bankName** string
**Example:**`NEXI PAYMENTS SPA`
**bankUrl** string
**Example:**``
**bankPhone** string
**Example:**``
**productCode** string
**Example:**`MPB`
**prepaid** boolean
**Default value:**`true`
**Example:**`false`
**regulatedName** string
**Example:**``
**reloadable** boolean
**Default value:**`true`
**Example:**`true`
**panOrToken** string
**Example:**`pan`
**accountUpdater** boolean
**Default value:**`true`
**Example:**`false`
**alm** boolean
**Default value:**`true`
**Example:**`false`
**domesticOnly** boolean
**Default value:**`true`
**Example:**`false`
**gamblingBlocked** boolean
**Default value:**`true`
**Example:**`false`
**level2** boolean
**Default value:**`true`
**Example:**`false`
**level3** boolean
**Default value:**`true`
**Example:**`false`
**issuerCurrency** string
**Example:**``
**cardSegmentType** string
**Example:**`Commercial`
**comboCard** string
**Example:**``
**cardBrandIsAdditional** boolean
**Default value:**`true`
**Example:**`false`
**correlationId** string
**Example:**`eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==`
**sharedBin** boolean
**Default value:**`true`
**Example:**`false`
**cost** object[]
  * Array [
**capFixedAmount** integer
**Default value:**`0`
**Example:**`0`
**capAdvaloremAmount** number
**Default value:**`0`
**Example:**`0.015`
**capTypeQualifierText** string
**Example:**`EU XB CNP MIF`
  * ]
**authentication** object[]
  * Array [
**scaName** string
**Example:**`EU PSD2 - SCA`
  * ]
**additionalCardBrands** array
**referenceNumber** string
**Example:**`24032109590372982292`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**``
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```400
  * application/json

No schema
  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
Show optional parameters
tx-tokenex-id — header
tx-apikey — header
Body
  * Example (from schema)
  * Request Example
```
{
  "PAN": "string",
  "Token": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```
```

{  

  "PAN": "5584750144001859"  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```
```
{
  "PAN": "string",
  "Token": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```
```

{  

  "PAN": "5584750144001859"  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```
```
{
  "PAN": "string",
  "Token": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```
```

{  

  "PAN": "5584750144001859"  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```
```
{
  "PAN": "string",
  "Token": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```
```

{  

  "PAN": "5584750144001859"  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```
```
{
  "PAN": "string",
  "Token": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/pci/BinLookup

```
```

{  

  "PAN": "5584750144001859"  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": [  

      null  

    ]  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "binData": {  

    "binMin": "5584750000000000000",  

    "binMax": "5584759999999999999",  

    "cleanBankName": "Nexi Payments Spa",  

    "productName": "MasterCard Preferred BusinessCard Card",  

    "cardBrand": "MASTERCARD",  

    "countryAlpha2": "IT",  

    "countryName": "ITALY",  

    "countryNumeric": "380",  

    "type": "Credit",  

    "bankName": "NEXI PAYMENTS SPA",  

    "bankUrl": "",  

    "bankPhone": "",  

    "productCode": "MPB",  

    "prepaid": false,  

    "regulatedName": "",  

    "reloadable": true,  

    "panOrToken": "pan",  

    "accountUpdater": false,  

    "alm": false,  

    "domesticOnly": false,  

    "gamblingBlocked": false,  

    "level2": false,  

    "level3": false,  

    "issuerCurrency": "",  

    "cardSegmentType": "Commercial",  

    "comboCard": "",  

    "cardBrandIsAdditional": false,  

    "correlationId": "eyJGaWxlSWQiOjczNDcsIlZlcnNpb24iOjQwfQ==",  

    "sharedBin": false,  

    "cost": [  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.015,  

        "capTypeQualifierText": "EU XB CNP MIF"  

      },  

      {  

        "capFixedAmount": 0,  

        "capAdvaloremAmount": 0.003,  

        "capTypeQualifierText": "EU MIF"  

      }  

    ],  

    "authentication": [  

      {  

        "scaName": "EU PSD2 - SCA"  

      }  

    ],  

    "additionalCardBrands": []  

  },  

  "referenceNumber": "24032109590372982292",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "referenceNumber": "23110112204735728679",  

  "success": false,  

  "error": "3003 : Data Not Found",  

  "message": ""  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/pci/BinLookup' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "PAN": "string",  
  "Token": "string"  
}'  

```
```
{
  "PAN": "string",
  "Token": "string"
}

```