---
title: Kount - Data Collector and Risk Inquiry Service (RIS)
summary: ' TokenEx iFrame  Third Party Integrationshttps://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations  Kount
  - Data Collector and Risk Inquiry Service RIS'
tags:
- kount-request-details-https-documentation-ixopay-com-modules-docs-tokenex-kount-data-collection-risk-analysis-kount-request-details-direct-link-kount-request-details
- kount-information-https-documentation-ixopay-com-modules-docs-tokenex-kount-data-collection-risk-analysis-kount-information-direct-link-kount-information
- api
- sdk
- rest
- json
- tokenex
- ixopay
- iframe
- credit-card
source_url: https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis
portal: tokenex
updated: '2026-06-15'
related: []
---

* TokenEx iFrame
  * [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)
  * Kount - Data Collector and Risk Inquiry Service (RIS)

# Kount - Data Collector and Risk Inquiry Service (RIS)
Support of Kount fraud services via the TokenEx iFrame.
Prerequisite
In order to use this functionality, please contact your Customer Success representative. Find more information on how this integration works [here](https://www.ixopay.com/en/product/fraud-detection).
Compatibility
This functionality is only available in _PCI_ or _PCI with CVV_ modes.
TokenEx has integrated two Kount APIs to facilitate fraud prevention. The Kount Device Data Collector and Risk Inquiry Service have been bundled into the TokenEx iFrame. Clients with a Kount integration are able to leverage the TokenEx iFrame to call the Kount Risk Inquiry Service after collecting the device data using the Kount SDK. When configuring the TokenEx iFrame for Kount, the Kount Client Identifier and API key issued by Kount are required. The Client Identifier is set within the TokenEx iFrame configuration object and the Kount API key will need to be submitted to the TokenEx Support team as a ticket within the TokenEx portal. Once submitted the API key will be associated with the TokenEx Identifier by the Support team.
During data collection, Kount generates a unique identifier called Session Id specific to that request.  
TokenEx will send this SessionId while making a request to RIS Service. The session identifier is used to join the device data with the order data sent to the RIS. Client will use the Session Id for subsequent calls to the RIS.
On _Tokenize_ , Clients will receive the Risk Inquiry response including the SessionId and a proprietary, one-way, irreversible hash of the credit card PAN called a KHASH.
The iFrame [configuration object](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object) takes an optional fields for FraudService request:  
| Property  | Type  | Description  |  
| --- | --- | --- |  
| fraudServices  | Object  | Parent object/variable for sending FraudServices details to Iframe.  |  
| fraudServices.useKount  | boolean  | True or False. If set true, TokenEx will load the Kount sdk.  |  
| kount  | Object  | Parent object for Merchant Id and API Key  |  
| fraudServices.kount.merchantId  | string  | Kount Merchant Id  |  
The configuration object for Kount looks something like:
Config for FraudServices
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```The API key used to generate the authentication key must have the _FraudServiceGeneralAccess_ permission enabled. Contact support to enable this.
Kount Mode = "P"
When Kount mode is set to "P", Kount data collection will be ignored and TokenEx will create a unique 32 digit session id containing TokenExId as a prefix. [here](https://developer.kount.com/hc/en-us/articles/4411150039444-Risk-Inquiry-Service-Modes).
## Set Kount Request Details[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#set-kount-request-details "Direct link to Set Kount Request Details")
Before calling _Tokenize_ on iFrame, user must provide the order data to the iFrame. TokenEx has provided a method called _setFraudServicesRequestDetails_ , accepting an object of type [GetKountRiskResultRequest](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult) as the first parameter.
Error
An error will be returned if the RIS request details are not set **before **calling _Tokenize_.
Below is an example payload for RIS request: NOTE: Any User Defined Fields that are passed in are validated within Kount, not the Iframe.
info
For full list of accepted fields for RIS are [here](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult).
  * Setting Risk Analysis Request details
  * Response after Setting RIS Request successfully
  * Response after failing to set RIS Request
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```## Data Collection Success[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#data-collection-success "Direct link to Data Collection Success")
A successful data collection will generate a notice like the below example. The, iFrame also provides events when Kount data collection begins and ends.
  * Data Collection Notice
  * Data Collection Begin event
  * Data Collection End event
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```## Data Collection Failure[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#data-collection-failure "Direct link to Data Collection Failure")
When data collection fails iFrame generates a failure notice as below.
Data Collection Notice
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```## Steps to get the RIS response with _Tokenize_[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#steps-to-get-the-ris-response-with-tokenize "Direct link to steps-to-get-the-ris-response-with-tokenize")
  1. Set **fraudServices.useKount** to true and provide **fraudServices.kount.merchantId** in iFrame configuration.
  2. Load the Iframe. Kount data collection takes place in the background.
  3. Set order details via _setFraudServicesRequestDetails_ method.
  4. Call _Tokenize_ if step 4 is successful.
  5. If _setFraudServicesRequestDetails_ fails, verify the payload and retry setting the request and tokenizing.

  * RIS Successful Response
  * RIS Failed Response when missing Products (Required) Field
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```## TokenEx Fraud Services Information[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#tokenex-fraud-services-information "Direct link to TokenEx Fraud Services Information")
**Kount Risk Inquiry Service**  
[Get Kount Risk Result](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult)
## Kount Information[​](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#kount-information "Direct link to Kount Information")
**Data Collector**  

**Risk Inquiry Service**  
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```  * [Set Kount Request Details](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#set-kount-request-details)
  * [Data Collection Success](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#data-collection-success)
  * [Data Collection Failure](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#data-collection-failure)
  * [Steps to get the RIS response with _Tokenize_](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#steps-to-get-the-ris-response-with-tokenize)
  * [TokenEx Fraud Services Information](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#tokenex-fraud-services-information)
  * [Kount Information](https://documentation.ixopay.com/modules/docs/tokenex/kount-data-collection-and-risk-analysis#kount-information)
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  /*(rest of the iframe configuration here)*/  

  ...,  

  ...,  

  ...,  

  fraudServices: {  

    useKount: true,  

    kount: {  

      merchantId: "<Your kount merchant id>",  

      mode: "<Kount Mode>"  

      anId: "<Kount AnId>"  

    }  

  }  

}  

```
```

// Create a new instance of the iFrame, and add the container ID and config object  

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// populate the fraud services request details when the PAN entered is valid.  

iframe.on("validate", function (data) {  

  if (data.isValid == true) {  

    iframe.setFraudServicesRequestDetails(  

      JSON.stringify({  

        billingEmailAddress: "<email_address@domain.com>",  

        amount: 10000,  

        currency: "USD",  

        ipAddress: "<end.consumer.IP.Address>",  

        kountVersion: "0720",  

        lastFour: data.lastFour, // fill last four of PAN via this event listener  

        merchantId: "<kount_merchant_ID>",  

        transactionSite: "DEFAULT",  

        MerchantOrderNumber: "<order_number>",  

        AuthorizationStatus: "A",  

        BillingName: "Billing Name",  

        BillingStreetAddress1: "917 S Lusk St",  

        BillingStreetAddress2: "Suite 300",  

        BillingCity: "Boise",  

        BillingState: "ID",  

        BillingPostalCode: "83706",  

        BillingCountryCode: "US",  

        BillingPhoneNumber: "5555555555",  

        ShippingStreetAddress1: "917 S Lusk St",  

        ShippingStreetAddress2: "Suite 300",  

        ShippingCity: "Boise",  

        ShippingCountryCode: "US",  

        ShippingPostalCode: "83706",  

        ShippingState: "ID",  

        Products: [  

          {  

            Type: "Trinket",  

            Description: "Doodad",  

            Quantity: 10,  

            Price: 10,  

            Sku: "tgj6dneq",  

          },  

        ],  

        UserDefinedFields: {  

          Trinket: "Doodad",  

          Blue: 42,  

        },  

      }),  

    );  

  }  

});  

  

// The RIS response is returned in the Tokenize event  

```
```

{  

  "success": true,  

  "details": "Fraud Services risk request details have been received successfully."  

}  

```
```

{  

  "success": false,  

  "details": "Error while parsing data, please verify and retry."  

}  

```
```

{  

  "type": "Kount Data Collection Finished.",  

  "success": true  

}  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionBegin", function () {  

  console.log("Kount Data Collection Begin");  

});  

```
```

var iframe = new TokenEx.Iframe("tokenExIframeDiv", iframeConfig);  

  

// Add event listeners  

iframe.on("kountDataCollectionEnd", function () {  

  console.log("Kount Data Collection End");  

});  

```
```

{  

  "type": "Kount Data Collection Failed.",  

  "success": false  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "Approved",  

    "transactionId": "<TransactoinId>",  

    "auto": "A",  

    "omniScore": 61.4,  

    "sessionId": "<SessionId>",  

    "thirdPartyStatusCode": "200",  

    "referenceNumber": "<TokenExReferenceNumberForFraudServices>",  

    "success": true,  

    "error": ""  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```
```

{  

  "firstSix": "FirstSixCharactersOfThePan",  

  "lastFour": "LastFourCharactersOfThePan",  

  "kHash": "<KHashValueForThePan>",  

  "kountRiskResult": {  

    "status": "",  

    "transactionId": "",  

    "auto": "",  

    "omniScore": 0,  

    "sessionId": "",  

    "thirdPartyStatusCode": "",  

    "referenceNumber": "022051020424666873571",  

    "success": false,  

    "error": "The field Products must be a string or array type with a minimum length of '1'."  

  },  

  "token": "<TokenExToken>",  

  "referenceNumber": "<TokenExReferenceNumberForIframe>",  

  "tokenHMAC": "<TokenHMAC>",  

  "cvvIncluded": false,  

  "cardType": "<CardType>"  

}  

```