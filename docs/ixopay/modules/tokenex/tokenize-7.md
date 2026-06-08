---
title: Tokenize
summary: ' Network tokenization  Network Tokenization APIhttps://documentation.ixopay.com/modules/docs/tokenex/network-token-services'
tags:
- api
- json
- xml
- pci
- tokenization
- tokenex
- ixopay
- authorization
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7
portal: ixopay-modules
updated: '2026-06-08'
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
|  `panSource`*  | string enum  | The source of the Primary Account Number (PAN). Valid values: ONFILE, MOBILEBANKINGAPP, KEYENTERED, CAMERACAPTURED, MANUALUNKNOWN  |  
|  `consumerId`*  | string  | Unique token requestor specific consumer identifier (e.g., wallet account ID). This value is generated and assigned by the token requestor. Required for Visa and optional for AMEX and Mastercard.  |  
|  `presentationMode`*  | string enum []  | The token presentation mode supported by the token. Valid values: NFCHCE, NFCSE, ECOM, INAPP, MST, QR, PAT  |  
| `pathRecommendation`  | string  | Allows the requestor to provide tokenization advice based on available risk data. Acceptable values are APPROVED, DECLINED, AUTH*REQ and PCI*APPROVED.  |  
| `accountType`  | string  | It is used to describes the type of an account, e.g. GUEST, WALLET. Valid value 'credit_card' for AMEX, and valid values 'GUEST' or 'WALLET' for Visa.  |  
|  `expirationDate`*  | string  | Expiration date for the PAN. Required unless providing the panReferenceId.  |  
| `cvv`  | string  | The security code embedded on the back of the physical card.  |  
| `panReferenceId`  | string (36)  | The unique reference ID of the PAN.  |  
| `panSequenceNumber`  | string (3)  | The PAN sequence number (PSN), if applicable.  |  
| `cardholderName`  | string (2-26)  | The name of the cardholder.  |  
| `issuerEncData`  | string (4096)  | Data generated and encrypted by the issuer.  |  
| `deviceData.deviceName`  | string  | The name of the device.  |  
| `deviceData.deviceLocation`  | string  | The latitude and longitude coordinates of the device location (with up to two decimals), separated by a "/".  |  
| `deviceData.deviceType`  | string  | The type of the device.  |  
| `deviceData.deviceId`  | string  | Unique ID for the device, such as a hardware ID.  |  
| `deviceData.devicePlatform`  | string  | Device platform.   
Valid string values are   
  
- ANDROID   
- WINDOWS   
- IOS   
- BLACKBERRY   
- TIZEN   
- OTHER.   
Any other string values will cause a failure.  |  
| `deviceData.devicePhoneNumber`  | string  | The telephone number or the last few digits of the telephone number. Required for American Express cards.  |  
| `deviceData.deviceIPv4`  | string  | The IPv4 address of the device. Required for American Express if PanSource is not "ONFILE".  |  
| `deviceData.deviceTimeZone`  | string  | Timezone offset aligning with ISO 8601. An example of the correct format would be "GMT-08:00". Values that do not follow this format will cause a failure. Official Visa format description says "it must follow the pattern : 0-9a-zA-Z and colon `:` and hyphen `-`".  |  
| `deviceData.osVersion`  | string  | The version of the OS of the device.  |  
| `deviceData.language`  | string  | The language that the application is using to communicate with the cardholder.  |  
| `deviceData.locale`  | string  | The language that the application communicates with the cardholder. It is based on BCP 47 standard. The language must be lowercase, and the country must be uppercase. The language and country should be separated using a hyphen (-). *Required for Visa.  |  
| `deviceData.walletId`  | string  | The unique ID assigned to a wallet installation for a given user and device.  |  
| `deviceData.brand`  | string  | The device's brand.  |  
| `deviceData.manufacturer`  | string  | The device's manufacturer.  |  
| `deviceData.model`  | string  | The device's model.  |  
| `deviceData.networkType`  | string  | The type of the network.  |  
| `deviceData.imeiNumber`  | string  | The device's IMEI number.  |  
| `deviceData.serialNumber`  | string  | The device's serial number.  |  
|  `deviceData.walletAccountEmailAddress`*  | string  | The email address of the client that is linked to the wallet account login. This is required for all card brands.  |  
| `cardholderBillingAddress.line1`  | String (140)  | Address line 1.  |  
| `cardholderBillingAddress.line2`  | String (140)  | Address line 2.  |  
| `cardholderBillingAddress.line3`  | String (140)  | Address line 3.  |  
| `cardholderBillingAddress.line4`  | String (140)  | Address line 4.  |  
| `cardholderBillingAddress.line5`  | String (140)  | Address line 5.  |  
| `cardholderBillingAddress.country`  | String (2)  | Country code in ISO 3166-1 alpha-2 format.  |  
| `cardholderBillingAddress.state`  | String (3)  | State code in ISO 3166-2 format.  |  
| `cardholderBillingAddress.city`  | String (100)  | Name of the cardholder's city.  |  
| `cardholderBillingAddress.zip`  | String (16)  | Cardholder's postal code.  |  
| `walletRiskData.walletScore`  | Int  | The score of the wallet.  |  
| `walletRiskData.walletAccountLength`  | Int  | The time in days that wallet account has been in use.  |  
| `walletRiskData.walletTransactions`  | Int  | The number of transactions performed with the wallet in the last 12 months.  |  
| `walletRiskData.walletNameMatchesCardholderName`  | bool  | Name of the wallet account holder and the name of the cardholder match or not.  |  
| `walletRiskData.maskedEmail`  | string (260)  | ???*??? is used for masking the email address.  |  
| `walletRiskData.hashedEmail`  | string (60)  | 60-character string generated by BCrypt using OpenBSD implementation from BouncyCastle.  |  
| `cardRiskData.cardScore`  | Int  | The score of the card.  |  
| `cardRiskData.cardUsageLength`  | Int  | The time in days that the card has been in use.  |  
| `deviceRiskData.countryOfDevice`  | string (2)  | The country in which the device is used in ISO 3166-1 alpha-2 format.  |  
| `deviceRiskData.tokensOnDevice`  | Int  | The number of tokens on the physical device.  |  
| `deviceRiskData.deviceUseLength`  | Int  | The time in days that the device has been in use.  |  
| `deviceRiskData.deviceScore`  | Int  | The score of the trustworthiness of the device.  |  
| `userRiskData.cardOnFileLength`  | Int  | The time in days that the card has been on file.  |  
| `userRiskData.newlyAdded`  | bool  | True means that the user added the card on file during the current provisioning attempt. False means the card was already on file.  |  
| `userRiskData.userCountry`  | string (2)  | Country of the user account in ISO 3166-1 alpha-2 format.  |  
| `userRiskData.userWallets`  | Int  | The number of wallets owned by the user.  |  
| `userRiskData.userTokens`  | Int  | The number of tokens owned by the user.  |  
| `userRiskData.userAccountUsageLength`  | Int  | The time in days that the user account has been in use.  |  
| `userRiskData.userAccountScore`  | Int  | The score of the trustworthiness of the device user's account. A value of 0 means that the account is not checked by the wallet or the wallet owner.  |  
**Response Body Parameters** :  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `token`  | string  | The token generated by TokenEx that references the sensitive data.  |  
| `success`  | bool  | Indicator if the request was successfully processed by TokenEx.  |  
| `referenceNumber`  | string  | TokenEx reference number for the transaction.  |  
| `error`  | string  | TokenEx Error Code and human readable description.  |  
| `message`  | string  | Human readable message about response from TokenEx.  |  
| `networkResponse.tokenRequestorId`  | string  | Token requestor identifier associated to the domain to which the token belongs. The format matches with the EMVCo Tokenization specifications.  |  
| `networkResponse.tokenReferenceId`  | string  | Unique reference identifier for the token generated.  |  
| `networkResponse.tokenizationDecision`  | string enum  |  This indicates the tokenization decision. Possible values are:
  * APPROVED – Network tokenization approved
  * AUTH_REQ – Approved; for e-commerce, treat as APPROVED
  * PCI_APPROVED – PCI tokenization approved

note The Tokenize API returns only the decision, not the reason for issuer declines.  |  
| `networkResponse.messageId`  | string  | Unique message identifier (GUID format) of this command.  |  
| `networkResponse.conversationId`  | string  | Message identifier assigned for the entire conversation (GUID format). Typically, it is generated by the initiator of the flow.  |  
| `networkResponse.statusCode`  | string  | The four-digit status code.  |  
| `networkResponse.statusMessage`  | string  | Human readable comments about the status.  |  
| `networkResponse.tokenState`  | string enum  | The current state of the token. It has predefined values which are INACTIVE, ACTIVE, SUSPENDED, DELETED and CONSUMED. Note that the CONSUMED state is not used by default.  |  
| `networkResponse.cvv2VerificationCode`  | string enum  | 
  * MDES validates only the field format, not the CVV value.
  * The issuer always validates the CVV value.

This means that for Mastercard, the Tokenize API will return only the decision, not the reason for an issuer decline. To improve decision-making and integration accuracy, we recommend the following:
  * Visa transactions: Use the cvv2VerificationCode property in the response for decision-making.
  * Mastercard transactions: Use the `networkResponse.tokenizationDecision` property in the response for decision-making.

For your convenience, here are the possible verification code values and their descriptions:
  * M – CVV Matched (tokenization proceeds normally)
  * N – Verified, Negative Data Match (issuer may reject tokenization)
  * U – Verification Not Possible (issuer does not participate)
  * D – No CVV Validation (duplicate request skipped by some issuers)

 |  
| `networkResponse.addressVerificationCode`  | string enum  |  The address verification result. This field is present when address verification data is sent in the request. Only applicable for Visa cards and only present if the issuer provides it. Possible values:
  * Y - verified, address and postal code data match
  * P - verified, partial match(either address or postal code data match, but no result from the other)
  * B - verified, partial match(either address or postal code data match, but the other could not be verified due to incompatible format)
  * N - verified, neither address nor postal code data match
  * U - verification not possible(issuer does not participate)
  * D - verification not performed due to duplicate request

 |  
| `networkResponse.encData.paymentBundle.bundleMetadata`  | string  | It indicates the type of the bundle returned. The valid values depend on the product use cases. Possible values are ECOM_TOKEN, ECOM_CRYPTOGRAM and ECOM_PAN.  |  
| `networkResponse.encData.paymentBundle.bundleElements\[].type`  | string  | It indicates the type of the bundle returned. The valid values depend on the product use cases. Possible values are ECOM_TOKEN, ECOM_CRYPTOGRAM and ECOM_PAN.  |  
| `networkResponse.encData.paymentBundle.bundleElements\[].value`  | string  | Possible values: TOKEN,TOKEN_EXP (the format is 'YYMM'), ECOM_CRYPTOGRAM, ECI, PSN, TRACK2, PAN, PAN_EXP.  |  
| `networkResponse.encData.cardData.panReferenceId`  | string  | The unique reference ID (GUID format) of the real PAN. It is required except when PAN is provided.  |  
| `networkResponse.encData.cardData.paymentAccountReference`  | string  | Globally unique reference of a cardholder’s PAN. It is commonly abbreviated as PAR.  |  
| `networkResponse.encData.cardData.cardSuffix`  | string  | The last four digits of the real PAN.  |  
| `networkResponse.encData.cardData.panExpDate`  | string  | The expiry date of the real PAN. The format is 'YYMM'.  |  
| `networkResponse.encData.cardData.cardHolderEmbossedName`  | string  | The embossed name on the physical card.  |  
| `networkResponse.encData.cardData.cardCountryCode`  | string  | A 2-character country code. The format is based on ISO 3166-1 alpha-2.  |  
| `networkResponse.encData.cardData.cardName`  | string  | The name of the card.  |  
| `networkResponse.encData.cardData.cardType`  | string  | The type of the card product (e.g., Credit, Debit).  |  
| `networkResponse.encData.cardData.cardLongDescription`  | string (64 max)  | Description of card.  |  
| `networkResponse.encData.cardData.cardShortDescription`  | string (32 max)  | Description of card.  |  
| `networkResponse.encData.cardData.coBranded`  | bool  | It indicates if the card is a co-branded card.  |  
| `networkResponse.encData.cardData.coBrandName`  | string  | The card co-brand name. It is required if isCoBranded is set to true.  |  
| `networkResponse.encData.cardData.cardTypeIndicator`  | string []  | These are indicators (Boolean values) associated with the card. The expected values are PRIVATE_LABEL.  |  
| `networkResponse.encData.cardData.expDataPrinted`  | bool  | It indicates if the expiration date is printed on the card or not.  |  
| `networkResponse.encData.cardData.cvv2Printed`  | bool  | It indicates if the cvv2 is printed on the card or not.  |  
| `networkResponse.cardMetaData.termsAndConditionsId`  | string  | Unique identifier (GUID format) of the terms and conditions.  |  
| `networkResponse.cardMetaData.termsAndConditionsUrl`  | string  | The website URL which is used to describe the terms and conditions.  |  
| `networkResponse.cardMetaData.cardArtUrl`  | string  | The website URL which is used to present card’s art image.  |  
| `networkResponse.cardMetaData.cardBackgroundColor`  | string  | The background color of the card specified as a CSS style RGB triple (hex format).  |  
| `networkResponse.cardMetaData.cardForegroundColor`  | string  | The foreground color of the card specified as a CSS style RGB triple (hex format).  |  
| `networkResponse.cardMetaData.labelColor`  | string  | The color of the label of the card specified as a CSS style RGB triple (hex format).  |  
| `networkResponse.cardMetaData.longDescription`  | string  | The detailed description of the card product to be displayed inside the mobile wallet.  |  
| `networkResponse.cardMetaData.shortDescription`  | string  | The short description of the card product to be used for notification on the mobile device.  |  
| `networkResponse.cardMetaData.issuerData.issuerName`  | string  | The name of the card issuer.  |  
| `networkResponse.cardMetaData.issuerData.issuerAddress`  | string  | The physical address of the issuer main office.  |  
| `networkResponse.cardMetaData.issuerData.issuerEmail`  | string  | The customer service email address of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.issuerWebsite`  | string  | The customer service website of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.customerServiceTelephone`  | string  | The customer service phone number of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.onlineBankingUrl`  | string  | The online banking website of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.issuerPrivacyUrl`  | string  | The privacy policy website of the issuing bank.  |  
| `networkResponse.cardMetaData.issuerData.issuerNotificationIcon`  | string  | The icon of the issuing bank’s notification.  |  
| `networkResponse.cardMetaData.issuerData.issuerLogoUrl`  | string  | The website URL of the issuing bank’s logo.  |  
| `networkResponse.cardMetaData.issuerAppData.issuerAppOSType`  | string  | The operating system type of the issuing bank’s mobile application.  |  
| `networkResponse.cardMetaData.issuerAppData.issuerAppName`  | string  | The name of the issuing bank’s mobile application for display purpose.  |  
| `networkResponse.cardMetaData.issuerAppData.issuerAppAddress`  | string  | The package name of the issuing bank’s mobile application.  |  
| `networkResponse.cardMetaData.cardAssets\[].guid`  | string  | Unique identifier (GUID format) of the asset.  |  
| `networkResponse.cardMetaData.cardAssets\[].assetType`  | string enum  | The type of asset. Possible values: CARD_ART_FOREGROUND, CARD_ART_BACKGROUND, ICON_ISSUER, TERMS_AND_CONDITIONS, COMBINED_BACKGROUND, ICON_PAYMENT_NETWORK, ICON_COBRAND  |  
| `networkResponse.cardMetaData.cardAssets\[].mimeType`  | string enum  | The mime type of the content. Possible values: IMAGE/PNG, IMAGE/PDF, TEXT/HTML, TEXT/PLAIN, APPLICATION/PDF, TEXT/XML  |  
| `networkResponse.cardMetaData.cardAssets\[].pixelHeight`  | int  | The height of the image in pixels. Set to zero for non-image MIME-types.  |  
| `networkResponse.cardMetaData.cardAssets\[].pixelWidth`  | int  | The width of the image in pixels. Set to zero for non-image MIME-types.  |  
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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

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

  "PanSource": "KEYENTERED",  

  "ConsumerId": "235468794",  

  "PresentationMode": ["ECOM"],  

  "AccountType": "WALLET",  

  "ExpirationDate": "2212",  

  "Data": "4761209980007718",  

  "DeviceData": {  

    "locale": "en-US",  

    "walletAccountEmailAddress": "test@visa.com"  

  }  

}  

```
```

{  

  "networkResponse": {  

    "encData": {  

      "paymentBundle": {  

        "bundleMetadata": "ECOM_TOKEN",  

        "bundleElements": [  

          {  

            "type": "TOKEN",  

            "value": "4761209400161814"  

          },  

          {  

            "type": "TOKEN_EXP",  

            "value": "2212"  

          }  

        ]  

      },  

      "cardData": {  

        "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

        "paymentAccountReference": "V0010013021211750239575607559",  

        "cardSuffix": "7718",  

        "panExpDate": "2212",  

        "cardHolderEmbossedName": null,  

        "cardCountryCode": null,  

        "cardName": null,  

        "cardType": null,  

        "cardLongDescription": "long",  

        "cardShortDescription": "short",  

        "coBranded": false,  

        "coBrandName": null,  

        "cardTypeIndicator": null,  

        "expDataPrinted": true,  

        "cvv2Printed": true  

      }  

    },  

    "tokenRequestorId": "12345678901",  

    "tokenReferenceId": "749f4d0d-4005-443e-9a66-0ea2d317b8f6",  

    "tokenizationDecision": "APPROVED",  

    "panReferenceId": "f7f4a607-f696-4936-9c99-0ec0b72fd140",  

    "tokenState": "ACTIVE",  

    "cvv2VerificationCode": "M",  

    "addressVerificationCode": "Y",  

    "userValidationMethods": null,  

    "cardMetaData": {  

      "termsAndConditionsId": "893426c8-9bfa-4b51-b7da-b625106a89c5",  

      "termsAndConditionsUrl": null,  

      "cardArtUrl": null,  

      "cardBackgroundColor": "RGB(122,55,84)",  

      "cardForegroundColor": "RGB(22,55,94)",  

      "labelColor": "RGB(122,255,84)",  

      "longDescription": "long",  

      "shortDescription": "short",  

      "issuerData": {  

        "issuerName": "INTL HDQTRS-CENTER OWNED",  

        "issuerAddress": null,  

        "issuerEmail": null,  

        "issuerWebsite": "https://test.com",  

        "customerServiceTelephone": "123-456-7899",  

        "onlineBankingUrl": null,  

        "issuerPrivacyUrl": null,  

        "issuerNotificationIcon": null,  

        "issuerLogoUrl": null  

      },  

      "issuerAppData": {  

        "issuerAppOSType": null,  

        "issuerAppName": null,  

        "issuerAppAddress": null  

      },  

      "cardAssets": [  

        {  

          "guid": "ff46730d-0288-4d96-aaf7-e6352a726118",  

          "assetType": "ICON_ISSUER",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 100,  

          "pixelWidth": 100  

        },  

        {  

          "guid": "bdf425c0-704c-4de0-aa05-94f897c18087",  

          "assetType": "COMBINED_BACKGROUND",  

          "mimeType": "IMAGE/PNG",  

          "pixelHeight": 969,  

          "pixelWidth": 1536  

        }  

      ]  

    },  

    "messageId": "a3159291-c092-4faf-b0c1-913977a40446",  

    "conversationId": "8e6dc13c-66d2-4c87-b3c5-cc51edaa409a",  

    "statusCode": "0000",  

    "statusMessage": null  

  },  

  "token": "476120FDallZ7718",  

  "referenceNumber": "21082311414552807381",  

  "success": true,  

  "error": "",  

  "message": "Network Tokenization Get Token Successful!"  

}  

```