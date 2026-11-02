---
title: Get Card Metadata
summary: ' Network tokenization  Network Tokenization APIhttps://documentation.ixopay.com/modules/docs/tokenex/network-token-services  Get
  Card Metadata'
tags:
- api
- json
- tokenization
- tokenex
- ixopay
- authorization
- credit-card
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/get-card-metadata
portal: ixopay-modules
updated: '2026-11-02'
related: []
---

* Network tokenization
  * [Network Tokenization API](https://documentation.ixopay.com/modules/docs/tokenex/network-token-services)
  * Get Card Metadata

# Get Card Metadata
This method is used to retrieve metadata for a credit card. This metadata includes card art, issuer information, card metadata and token metadata. This request fetches the most up-to-date metadata for the card from the issuing bank. This method can be used by passing in a TokenEx token that has an existing network token associated with it.
  * **Test URI** : 
  * **Prod US URI** : 
  * **Prod EU URI** : 

**Required API Key Permissions** : NetworkTokenizationGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)
* denotes a required field  
| HTTP Request Header  | Description  |  
| --- | --- |  
| tx-tokenex-id*  | Like a username, this ID logically segments your tokenized data.  |  
| tx-apikey*  | Controls your access to individual functions in the API  |  
**Request Body Parameters** :  
| Parameter  | Description  |  
| --- | --- |  
| token  | The TokenEx token that represents the PAN and has an associated network token.  |  
| tokenReferenceId  | If there is more than one network token stored for that token, indicate which network token to use for this operation.  |  
**Response Body Parameters** :  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| success  | bool  | Indicator if the request was successfully processed by TokenEx.  |  
| referenceNumber  | string  | TokenEx reference number for the transaction.  |  
| error  | string  | TokenEx Error Code and human readable description.  |  
| message  | string  | Human readable message about response from TokenEx.  |  
| networkResponse.messageId  | string  | Unique message identifier (GUID format), generated per response.  |  
| networkResponse.conversationId  | string  | Message identifier assigned for the entire conversation (GUID format).  |  
| networkResponse.statusCode  | string  | The four-digit status code.  |  
| networkResponse.statusMessage  | string  | Human readable comments about the status. Null on success.  |  
| networkResponse.encData.cardData.paymentAccountReference  | string  | Globally unique reference of a cardholder’s PAN. It is commonly abbreviated as PAR.  |  
| networkResponse.encData.cardData.cardSuffix  | string  | The last four digits of the real PAN.  |  
| networkResponse.encData.cardData.panExpDate  | string  | The expiry date of the real PAN. The format is 'YYMM'.  |  
| networkResponse.encData.cardData.coBranded  | bool  | It indicates if the card is a co-branded card.  |  
| networkResponse.encData.cardData.coBrandName  | string  | The card co-brand name. It is required if isCoBranded is set to true.  |  
| networkResponse.encData.cardData.expDataPrinted  | bool  | It indicates if the expiration date is printed on the card or not.  |  
| networkResponse.encData.cardData.cvv2Printed  | bool  | It indicates if the cvv2 is printed on the card or not.  |  
| networkResponse.cardMetadata.termsAndConditionsUrl  | string  | URL describing the terms and conditions.  |  
| networkResponse.cardMetadata.cardArtUrl  | string  | URL of the card art image.  |  
| networkResponse.cardMetadata.cardForegroundColor  | string  | The foreground color of the card, as a CSS RGB value.  |  
| networkResponse.cardMetadata.issuerData.issuerName  | string  | The name of the card issuer.  |  
| networkResponse.cardMetadata.issuerData.issuerEmail  | string  | The customer service email address of the issuer.  |  
| networkResponse.cardMetadata.issuerData.issuerWebsite  | string  | The customer service website of the issuer.  |  
| networkResponse.cardMetadata.issuerData.customerServiceTelephone  | string  | The customer service phone number of the issuer.  |  
| networkResponse.cardMetadata.cardAssets[].guid  | string  | Unique identifier (GUID format) of the asset.  |  
| networkResponse.cardMetadata.cardAssets[].assetType  | string enum  | The type of asset. Possible values: COMBINED_BACKGROUND, ICON_ISSUER, ICON_BRAND, ICON  |  
| networkResponse.tokenMetadata.tokenSuffix  | string  | The last four digits of the token value. Null when the token number is 12 digits or fewer.  |  
| networkResponse.tokenMetadata.tokenExpDate  | string  | The expiry date of the token. The format is 'YYMM'.  |  
  * Request
  * Response
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/GetCardMetadata HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

Content-Type: application/json  

  

{  

  "token": "476120FDallZ7718",  

  "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6"  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "21082508534912014069",  

  "error": "",  

  "message": "Network Tokenization Get Card Metadata Successful!",  

  "networkResponse": {  

    "messageId": "f2c0a901-4b7e-46fd-a436-d801385b775d",  

    "conversationId": "a9d95dcb-2ca0-4b03-bc12-bc78ee8379ca",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "encData": {  

      "cardData": {  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2812",  

        "coBranded": false,  

        "coBrandName": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "cardMetadata": {  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardForegroundColor": "RGB(22,55,94)",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899"  

      },  

      "cardAssets": [  

        { "guid": "ff46730d-0288-4d96-aaf7-e6352a726118", "assetType": "ICON_ISSUER" },  

        { "guid": "bdf425c0-704c-4de0-aa05-94f897c18087", "assetType": "COMBINED_BACKGROUND" }  

      ]  

    },  

    "tokenMetadata": {  

      "tokenSuffix": "1814",  

      "tokenExpDate": "2812"  

    }  

  }  

}  

```