---
title: AccountUpdater
summary: ' TokenEx API v2  Account Updaterhttps://documentation.ixopay.com/modules/api/tokenex/account-updater'
tags:
- https-test-api-tokenex-com-accountupdater
- test-card-numbers-https-documentation-ixopay-com-modules-api-tokenex-accountupdater-test-card-numbers-direct-link-test-card-numbers
- response-code-message-mappings-https-documentation-ixopay-com-modules-api-tokenex-accountupdater-response-code-message-mappings-direct-link-response-code-message-mappings
- mastercard-testing-values-https-documentation-ixopay-com-modules-api-tokenex-accountupdater-mastercard-testing-values-direct-link-mastercard-testing-values
- error-cases-https-documentation-ixopay-com-modules-api-tokenex-accountupdater-error-cases-direct-link-error-cases
- request-https-documentation-ixopay-com-modules-api-tokenex-accountupdater-request-direct-link-request
- header-parameters
- body
- api
- json
source_url: https://documentation.ixopay.com/modules/api/tokenex/accountupdater
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Account Updater](https://documentation.ixopay.com/modules/api/tokenex/account-updater)
  * AccountUpdater

# AccountUpdater
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```This endpoint accepts a list of card data that will be checked for updated card expiration. You can pass either tokens or PANs in the data field of the request. There is a maximum of 100 cardData objects that can be included per request.
## Test Card Numbers[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#test-card-numbers "Direct link to Test Card Numbers")
Important Test PAN Numbers
TokenEx test PANs can be leveraged to verify that the call to the Account Updater endpoints and subsequent response codes are successful. Some of the test cards are NOT Luhn compliant and will not pass validation for tokenization. When tokenizing these test cards, please select a token scheme that does not require Luhn validation i.e. sixANTOKENfour. The requests to trigger the specific response codes are outlined in the REQUEST section.  
| PAN  | Description  |  
| --- | --- |  
| 4327390068355738  | Account Number Updated  |  
| 4680056031099387  | Account Expiration Date Updated  |  
| 4207670264522669  | Valid Account, No Update  |  
| 4403933787254356  | Account is Closed  |  
| 4000220720915104  | Contact Cardholder  |  
| 4929423647273009  | No Match  |  
| 4549612182636736  | Non-Participating Account  |  
## Response Code and Message Mappings[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#response-code-and-message-mappings "Direct link to Response Code and Message Mappings")  
| Response code  | Description  |  
| --- | --- |  
| 801*  | Account Number Updated  |  
| 802*  | Account Expiration Date Updated  |  
| 800  | Valid Account, No Update  |  
| 803*  | Account is Closed  |  
| 804*  | Contact Cardholder  |  
| 805  | Cardholder Opt Out  |  
| 806  | No Match  |  
| 807  | Non-participating Account  |  
| 808  | Error Occurred Updating Account  |  
| 809  | Rejected. The `message` property will contain the provider’s rejection reason(s).  |  
| 810  | Card brand not yet supported for Account Updater  |  
| 899  | Card failed initial validation or tokenization/detokenization and therefore could not be processed.  |  
* denotes a billable operation
### Mastercard testing values[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#mastercard-testing-values "Direct link to Mastercard testing values")
The below table shows values for `request.cardData[x].data` which will trigger corresponding results for testing purposes in the Test environment.  
| cardData[x].data ends with  | Response Code  | Description  |  
| --- | --- | --- |  
| 0 or 3  | 801  | Account Number Updated  |  
| 1  | 807  | Non-Participating Account  |  
| 2 or 9  | 800  | Valid Account, No Update  |  
| 4  | 804  | Contact Cardholder  |  
| 5  | 802  | Account Expiration Date Updated  |  
| 6  | 809  | Simulates a bad inquiry resulting in an error. The `message` property will contain the provider’s rejection reason(s).  |  
| 7  | 806  | No Match  |  
| 8  | n/a  | Simulates a downstream timeout  |  
## Error cases[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#error-cases "Direct link to Error cases")  
| Error  | Description  |  
| --- | --- |  
| 8014  | Cannot update accounts. CardData items cannot exceed 100  |  
| 8015  | Sequence numbers must be unique for each card  |  
| 8016  | Connection error occurred within the chain of communication required to obtain account update. Please retry request  |  
| 8017  | Sequence numbers must be numeric  |  
| 2100  | Input data not Luhn compatible  |  
| 3000  | Token does not exist  |  
warning
Deprecated values will be removed in a future update, but are still backwards compatible in release v25.10.0. Please plan to move away from using these values in the near future.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#request "Direct link to request")
### Header Parameters
**tx-tokenize** boolean
Specifies that the incoming data is a PAN and should be tokenized
**tx-token-scheme** stringrequired
Specifies the [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used when tokenizing
**tx-account-updater-merchantid** string
MerchantID to use for Visa account update request. _Deprecation pending_ - Use VisaProcessingParams.MerchantId instead
**tx-return-plaintext-pan** boolean
Specifies that plaintext PANs should be returned if there is an Account Number Update. AllowPlainTextPan permission must be enabled to utilize this functionality.
**tx-acquirer-segment-id** string
Specifies which Visa region to send the request to when needed. The US and EU endpoints default to the appropriate value. The sandbox value is 2. The US Prod value is 973. The EU Prod value is 982. Deprecation Pending - Use VisaProcessingParams.AcquirerSegmentId instead
**tx-tokenize-updated-pans** string
Ensures that only the updated account number is returned in the response, without the universal token.

  * application/json

  * Body
  * Example (auto)

### Body
**cardData** object[]required
The card data to be processed
  * Array [
**data** stringrequired
The PAN to be tokenized or the token to be detokenized
**Default value:**`4111111111111111`
**expiration** stringrequired
The expiration for the card in MMYY format
**Default value:**`1123`
**sequenceNumber** stringrequired
The sequence number used for keeping track of which cards succeeded and which failed. Each sequenceNumber must be unique per request.
**Default value:**`01`
  * ]
**subMerchantName** string
The Sub-merchant name to be used for Visa account update request. _Deprecation pending_ - Use VisaProcessingParams.SubMerchantName instead
**acquirerOrMerchantProprietaryInfo** string
If provided, it contains merchant proprietary information such as a customer ID that is carried in the merchant’s back-end system. Used for Visa account update request. Deprecation Pending - Use VisaProcessingParams.AcquirerOrMerchantProprietaryInfo instead
**visaProcessingParams** object[]
Parameters pertaining to the Visa account update request
  * Array [
**merchantId** string
MerchantID to use for Visa account update request. Replaces tx-account-updater-merchantid header
**subMerchantName** string
Sub-merchant name to used for Visa account update request. Replaces request.SubMerchantName
**acquirerSegmentId** string
Specifies which Visa region to send the request to when needed. The US and EU endpoints default to the appropriate value. The sandbox value is 2. The US Prod value is 973. The EU Prod value is 982. Replaces tx-acquirer-segment-id header
**acquirerOrMerchantProprietaryInfo** string
If provided, it contains merchant proprietary information such as a customer ID that is carried in the merchant’s back-end system. Replaces request.acquirerOrMerchantProprietaryInfo
  * ]
**masterCardProcessingParams** object[]
Parameters pertaining to the MasterCard account update request
  * Array [
**merchantId** string
MerchantID to use for MasterCard account update request
**subMerchantName** string
Sub-merchant name to use for MasterCard account update request
**acquirerSegmentId** string
A customer identifier assigned by MasterCard associated to the enrolled customer
  * ]
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/accountupdater#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Expiration Updated
  * No Update
  * Account Number Updated
  * Account is Closed
  * Contact Cardholder
  * Cardholder Opt Out
  * No Match
  * Non-particpating Account
  * Error Occurred Updating Account
  * Rejected
  * Card is not Mastercard or Visa

**Schema**
oneOf
    * Expiration Updated
    * No Update
    * Account Number Updated
    * Account is Closed
    * Contact Cardholder
    * Cardholder Opt Out
    * No Match
    * Non-particpating Account
    * Error Occurred Updating Account
    * Rejected
    * Card is not Mastercard or Visa
**cardData** object[]
  * Array [
**success** boolean
**Default value:**`true`
**Example:**`true`
**sequenceNumber** string
**Example:**`01`
**token** string
**Example:**`token`
**expiration** string
**Example:**`1123`
**updatedExpiration** string
**Example:**`1124`
**message** string
**Example:**`Account Expiration Date Updated`
**responseCode** integer
**Default value:**`0`
**Example:**`802`
  * ]
**referenceNumber** string
**Example:**`2201291553541132129`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**``
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```#### Authorization: tx-tokenex-id
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```RequestCollapse all
Base URL
Edit
Auth
tokenExId
tokenExApiKey
Parameters
tx-token-scheme — headerrequired
Show optional parameters
tx-tokenize — header--- true false
tx-account-updater-merchantid — header
tx-return-plaintext-pan — header--- true false
tx-acquirer-segment-id — header
tx-tokenize-updated-pans — header
Body
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```
```
POST 
## https://test-api.tokenex.com/v2/AccountUpdater

```
```

{  

  "cardData": [  

    {  

      "data": "4111111111111111",  

      "expiration": "1123",  

      "sequenceNumber": "01"  

    }  

  ],  

  "subMerchantName": "string",  

  "acquirerOrMerchantProprietaryInfo": "string",  

  "visaProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string",  

      "acquirerOrMerchantProprietaryInfo": "string"  

    }  

  ],  

  "masterCardProcessingParams": [  

    {  

      "merchantId": "string",  

      "subMerchantName": "string",  

      "acquirerSegmentId": "string"  

    }  

  ]  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "message": "Account Expiration Date Updated",  

      "responseCode": 802  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "message": "Valid Account, No Update",  

      "responseCode": 80  

    }  

  ],  

  "referenceNumber": "23100513550514076457",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "updatedExpiration": "1124",  

      "updatedToken": "42424aaaa2424242",  

      "responseCode": 801,  

      "message": "Account Number Updated"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 803,  

      "message": "Account is Closed"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": "true,",  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 804,  

      "message": "Contact Cardholder"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 805,  

      "message": "Cardholder Opt Out"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 806,  

      "message": "No Match"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": true,  

      "sequenceNumber": "01",  

      "token": "token",  

      "expiration": "1123",  

      "responseCode": 807,  

      "message": "Non-particpating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 808,  

      "message": "Error Occurred Updating Account"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "token": null,  

      "expiration": "1123",  

      "responseCode": 809,  

      "message": "Account Number contains non-numeric characters or is blank"  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "cardData": [  

    {  

      "success": false,  

      "sequenceNumber": "01",  

      "expiration": "1123",  

      "token": "token",  

      "message": "Card brand not supported",  

      "responseCode": 808  

    }  

  ],  

  "referenceNumber": "2201291553541132129",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```
**name:** tx-tokenex-id[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **8149339711073860
```
```
**name:** tx-apikey[](https://documentation.ixopay.com/modules/api/tokenex/tokenex-api-v-2#authentication)**type:** apiKey**in: **header**x-default: **9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv
```
```
curl -L 'https://test-api.tokenex.com/v2/AccountUpdater' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-H 'tx-tokenex-id: <tx-tokenex-id>' \  
-H 'tx-apikey: <tx-apikey>' \  
-d '{  
  "cardData": [  
    {  
      "data": "4111111111111111",  
      "expiration": "1123",  
      "sequenceNumber": "01"  
    }  
  ],  
  "subMerchantName": "string",  
  "acquirerOrMerchantProprietaryInfo": "string",  
  "visaProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string",  
      "acquirerOrMerchantProprietaryInfo": "string"  
    }  
  ],  
  "masterCardProcessingParams": [  
    {  
      "merchantId": "string",  
      "subMerchantName": "string",  
      "acquirerSegmentId": "string"  
    }  
  ]  
}'  

```
```
{
  "cardData": [
    {
      "data": "4111111111111111",
      "expiration": "1123",
      "sequenceNumber": "01"
    }
  ],
  "subMerchantName": "string",
  "acquirerOrMerchantProprietaryInfo": "string",
  "visaProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string",
      "acquirerOrMerchantProprietaryInfo": "string"
    }
  ],
  "masterCardProcessingParams": [
    {
      "merchantId": "string",
      "subMerchantName": "string",
      "acquirerSegmentId": "string"
    }
  ]
}

```