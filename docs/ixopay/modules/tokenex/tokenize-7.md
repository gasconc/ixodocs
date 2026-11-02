---
title: Tokenize
summary: ' Network tokenization  Network Tokenization APIhttps://documentation.ixopay.com/modules/docs/tokenex/network-token-services'
tags:
- api
- json
- pci
- tokenization
- tokenex
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7
portal: ixopay-modules
updated: '2026-11-02'
related: []
---

* Network tokenization
  * [Network Tokenization API](https://documentation.ixopay.com/modules/docs/tokenex/network-token-services)
  * Tokenize

# Tokenize
This method is used to request that a network token be provisioned for a given primary account number (PAN). You will need to provide your TokenEx ID and authorized API key, the PAN or an existing TokenEx token, and the desired TokenEx token scheme if the PAN is used.
  * **Test URI** : 
  * **Prod US URI** : 
  * **Prod EU URI** : 

**Required API Key Permissions** : NetworkTokenizationGeneralAccess
**Request Headers** : [Authentication and Authorization](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)
* denotes a required field  
| HTTP Request Header  | Description  |  
| --- | --- |  
| tx-tokenex-id*  | Like a username, this ID logically segments your tokenized data.  |  
| tx-apikey*  | Controls your access to individual function in the API  |  
| tx-tokenize  | [Boolean]. True indicates that a TokenEx token should be generated for the PAN. True by default. Can be set to false if existing TokenEx token is provided.  |  
| tx-token-scheme*  | Either the name or the numerical value of the [Token Scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) to be used  |  
| tx-data-encrypted  |  `true`/`false`   
This header is used to indicate whether the Data and CVV fields have been encrypted using [browser-based encryption](https://documentation.ixopay.com/modules/docs/tokenex/browser-based-encryption-1)  |  
**Request Body Parameters** :
* Denotes a Required Field. Some optional fields may be required for certain card brands. Please read descriptions for full details.  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
|  `data`*  | string  | Either the PAN or an existing TokenEx token that represents a PAN.  |  
|  `expirationDate`*  | string  | Expiration date for the PAN.  |  
| `cvv`  | string  | The security code on the back of the physical card.  |  
| `cardholderBillingAddress.line1`  | String (140)  | Address line 1.  |  
| `cardholderBillingAddress.line2`  | String (140)  | Address line 2.  |  
| `cardholderBillingAddress.country`  | String (2)  | Country code in ISO 3166-1 alpha-2 format.  |  
| `cardholderBillingAddress.state`  | String (3)  | State code in ISO 3166-2 format.  |  
| `cardholderBillingAddress.city`  | String (100)  | Name of the cardholder's city.  |  
| `cardholderBillingAddress.zip`  | String (16)  | Cardholder's postal code.  |  
**Response Body Parameters** :  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `token`  | string  | The token generated that references the sensitive data.  |  
| `success`  | bool  | Indicator if the request was successfully processed.  |  
| `referenceNumber`  | string  | Reference number for the transaction.  |  
| `error`  | string  | Error code and human readable description.  |  
| `message`  | string  | Human readable message about the response.  |  
| `networkResponse.tokenRequestorId`  | string  | Opaque identifier associated with the domain to which the token belongs. Treat as opaque — do not persist or use in downstream logic. Identify tokens by `token` + `tokenReferenceId`.  |  
| `networkResponse.tokenReferenceId`  | string  | Unique reference identifier for the token generated.  |  
| `networkResponse.tokenizationDecision`  | string enum  | The tokenization decision: APPROVED, AUTH_REQ, PCI_APPROVED, DECLINED.  |  
| `networkResponse.messageId`  | string  | Unique message identifier (GUID), generated per response.  |  
| `networkResponse.conversationId`  | string  | Message identifier (GUID) assigned for the entire conversation — useful when contacting support.  |  
| `networkResponse.statusCode`  | string  | The four-digit status code.  |  
| `networkResponse.statusMessage`  | string  | Human readable comments about the status; null on success — read `statusCode` for the outcome.  |  
| `networkResponse.tokenState`  | string enum  | The current state of the token, as returned by the token provider.  |  
| `networkResponse.cvv2VerificationCode`  | string enum  | Indicates whether the security code (CVV/CVC) was verified by the issuer during the provisioning request. Supported only for Visa network tokens. Values: MATCH, NO_MATCH, NOT_SUPPORTED, SKIPPED.  |  
| `networkResponse.addressVerificationCode`  | string enum  | Indicates whether the billing address was verified by the issuer during the provisioning request. Supported only for Visa network tokens. Values: MATCH, PARTIAL_MATCH, PARTIAL_MATCH_FORMAT_UNSUPPORTED, NO_MATCH, NOT_SUPPORTED, SKIPPED.  |  
| `networkResponse.encData.paymentBundle.bundleElements\[]`  | array  | The elements of the payment bundle: TOKEN, TOKEN_EXP. The cryptogram itself is retrieved via [Get Payment Bundle](https://documentation.ixopay.com/modules/docs/tokenex/get-payment-bundle).  |  
| `networkResponse.encData.cardData.paymentAccountReference`  | string  | Globally unique reference of a cardholder’s PAN (PAR).  |  
| `networkResponse.encData.cardData.cardSuffix`  | string  | The last four digits of the real PAN.  |  
| `networkResponse.encData.cardData.panExpDate`  | string  | The expiry date of the real PAN. The format is `YYMM`.  |  
| `networkResponse.encData.cardData.coBranded`  | bool  | Indicates if the card is a co-branded card.  |  
| `networkResponse.encData.cardData.coBrandName`  | string  | The card co-brand name.  |  
| `networkResponse.encData.cardData.expDataPrinted`  | bool  | Indicates if the expiration date is printed on the card.  |  
| `networkResponse.encData.cardData.cvv2Printed`  | bool  | Indicates if the CVV2 is printed on the card.  |  
| `networkResponse.cardMetaData.termsAndConditionsUrl`  | string  | The website URL which is used to describe the terms and conditions.  |  
| `networkResponse.cardMetaData.cardArtUrl`  | string  | The website URL which is used to present the card’s art image.  |  
| `networkResponse.cardMetaData.cardForegroundColor`  | string  | The foreground color of the card specified as a CSS style RGB value.  |  
| `networkResponse.cardMetaData.issuerData.issuerName`  | string  | The name of the card issuer.  |  
| `networkResponse.cardMetaData.issuerData.issuerEmail`  | string  | The customer service email address of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.issuerWebsite`  | string  | The customer service website of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.customerServiceTelephone`  | string  | The customer service phone number of the issuing bank.  |  
| `networkResponse.cardMetaData.cardAssets\[].guid`  | string  | Unique identifier (GUID format) of the asset.  |  
| `networkResponse.cardMetaData.cardAssets\[].assetType`  | string enum  | The type of asset: COMBINED_BACKGROUND, ICON_ISSUER, ICON_BRAND, ICON.  |  
  * Request
  * Response
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```
```

POST /v2/NetworkToken/Tokenize HTTP/1.1  

Host: test-api.tokenex.com  

tx-apikey: YourAPIKey  

tx-tokenex-id: YourTokenExID  

tx-tokenize: true  

tx-token-scheme: PCI  

Content-Type: application/json  

  

{  

  "data": "4761209980007718",  

  "expirationDate": "2812",  

  "cvv": "123",  

  "cardholderBillingAddress": {  

    "line1": "123 Main St",  

    "line2": "Apt 4B",  

    "country": "US",  

    "state": "TX",  

    "city": "Austin",  

    "zip": "78701"  

  }  

}  

```
```

{  

  "token": "476120FDallZ7718",  

  "success": true,  

  "referenceNumber": "21082311414552807381",  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!",  

  "networkResponse": {  

    "tokenRequestorId": "a1b2c3d4e5f6",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null,  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "MATCH",  

    "addressVerificationCode": "MATCH",  

    "encData": {  

      "paymentBundle": {  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2812"  

          }  

        ]  

      },  

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

    "cardMetaData": {  

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

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER"  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND"  

        }  

      ]  

    }  

  }  

}  

```