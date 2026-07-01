---
title: Adyen Checkout
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  Adyen
  Checkout'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-direct-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-direct-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-direct-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-direct-responses-direct-link-responses
- api
- 3ds
- tokenex
- ixopay
- acquirer
- recurring
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct
portal: tokenex
updated: '2026-07-01'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Adyen Checkout

# Adyen Checkout
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `OrderInfo`, `SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Adyen forwards requests to the below endpoints, defaulting to v69. To use a different version, send that version in the _adyenApiVersion_ parameter (detailed in parameter chart below).
Adyen Checkout Live Endpoints
Production requests must include the livePrefix field (detailed in parameters). TokenEx uses this field to forward requests to the appropriate endpoints. This field is not necessary for the Test environment.  
| Action  | Production  | Sandbox  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase  | `https://random-companyName-checkout-live.adyenpayments.com/checkout/v69/payments`  | `https://checkout-test.adyen.com/v69/payments`  |  
| Card Capture  | `https://random-companyName-checkout-live.adyenpayments.com/checkout/v69/payments/{paymentPspReference}/captures`  | `https://checkout-test.adyen.com/v69/payments/{paymentPspReference}/captures`  |  
| Card Refund  | `https://random-companyName-checkout-live.adyenpayments.com/checkout/v69/payments/{paymentPspReference}/refunds`  | `https://checkout-test.adyen.com/v69/payments/{paymentPspReference}/refunds`  |  
| Card Void  | `https://random-companyName-checkout-live.adyenpayments.com/checkout/v69/payments/{paymentPspReference}/cancels`  | `https://checkout-test.adyen.com/v69/payments/{paymentPspReference}/cancels`  |  
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | Adyen Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | AdyenDirect  |  
|  `username`*  | string  | Username piece of Basic Auth  | Your Adyen User Name  
Not required if "PrivateKey" is provided  |  
|  `password`*  | string  | Password piece of Basic Auth  | Your Adyen Password  
Not required if "PrivateKey" is provided  |  
|  `privateKey`*  | string  |  `x-api-key` header  | x-api-key from Adyen Portal  
Not required if "UserName" & "Password" is provided  |  
| `livePrefix`  | string  | live endpoint prefix  | Use this field to pass the merchant-specific live endpoint prefix.  **Required for Production**  |  
| `adyenApiVersion`  | string  | Adyen Checkout API version  | Defaults to version 69. To change version, send target version as two digits. Example, "70".  |  
| `skipAdyenRiskChecks`  | boolean  | `riskData.skipRisk`  | if true, instructs Adyen to skip risk checks for Authorize and Purchase requests.  |  
|  `merchantId`*  | string  | `merchantAccount`  | The merchant account identifier with which you want to process the transaction.  |  
|  `orderInfo.orderId`*  | string  | `reference`  | The reference to uniquely identify a payment. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters.  |  
| `orderInfo.customerId`  | string  | `additionalData.enhancedSchemeData.customerReference`  | Customer code, if supplied by a customer. Required for Level 2 data.  |  
| `orderInfo.shopperStatement`  | string  | `shopperStatement`  | What appears on the customer's statement. [Adyen Docs ](https://docs.adyen.com/account/transaction-description#dynamic-values)  |  
| `customerIpAddress`  | string  | `shopperIp`  | Customers IP Address  |  
| `amount`  | numeric  | `amount.value`  | The amount in minor units. For example, 2000 means USD 20.00. Max length: 12 characters. Required for Level 2 data.  |  
| `currencyCode`  | string  | `amount.currency`  | The three-character ISO currency code. [Alpha-3 ISO currency code](https://www.iso.org/iso-4217-currency-codes.html)  
  
Use the ISO 4217 three-letter alphabetic code for the currency.  |  
| `tax.amount`  | numeric  | `additionalData.enhancedSchemeData.totalTaxAmount`  | Total tax amount, in minor units. For example, 2000 means USD 20.00. Max length: 12 characters. Required for Level 2 data.  |  
| `creditCard.fullName`  | string  | `paymentMethod.holderName`  | The name of the cardholder, as printed on the card.  |  
| `creditCard.number`  | string  | `paymentMethod.number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `creditCard.expMonth`  | numeric  | `paymentMethod.expiryMonth`  | The customer’s credit card expiration month. Format: 2 digits, zero-padded for single digits. Example: 03 = March, 11 = November  |  
| `creditCard.expYear`  | numeric  | `paymentMethod.expiryYear`  | The customer’s credit card expiration year. Format: 4 digits. For example: 2030  |  
| `creditCard.cvv`  | string  | `paymentMethod.cvc`  | The card verification code.  |  
| `creditCard.brand`  | string  | `paymentMethod.brand`  | The brand of the customer's credit card.  |  
| `billingAddress.address1`  | string  | `billingAddress.houseNumberOrName`  | The number or name of the house.  |  
| `billingAddress.address2`  | string  | `billingAddress.street`  | The name of the street.  |  
| `billingAddress.city`  | string  | `billingAddress.city`  | The name of the city.  |  
| `billingAddress.state`  | string  | `billingAddress.stateOrProvince`  | State or province codes as defined in ISO 3166-2. For example, CA in the US or ON in Canada.  |  
| `billingAddress.zip`  | string  | `billingAddress.postalCode`  | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.  |  
| `billingAddress.country`  | string  | `billingAddress.country`  | Three-Character Country Code [ISO country code](https://www.iso.org/iso-3166-country-codes.html).  
if provided, We convert this value to two-character country code.   
In case this value is not sent with the billing address, it is auto-filled as "ZZ" as suggested by Adyen.   |  
| `billingAddress.email`  | string  | `shopperEmail`  | The shopper's email address.  |  
| `shippingAddress.address1`  | string  | `deliveryAddress.houseNumberOrName`  | The number or name of the house.  |  
| `shippingAddress.address2`  | string  | `deliveryAddress.street`  | The name of the street.  |  
| `shippingAddress.city`  | string  | `deliveryAddress.city`  | The name of the city.  |  
| `shippingAddress.state`  | string  | `deliveryAddress.stateOrProvince`  | State or province codes as defined in ISO 3166-2. For example, CA in the US or ON in Canada.  |  
| `shippingAddress.zip`  | string  |  `deliveryAddress.postalCode`  
`additionalData.enhancedSchemeData.destinationPostalCode`  | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.  |  
| `shippingAddress.country`  | string  | `deliveryAddress.country`  | Three-Character Country Code [ISO country code](https://www.iso.org/iso-3166-country-codes.html).  
if provided, We convert this value to two-character country code.   
In case this value is not sent with the shipping address, it is auto-filled as "ZZ" as suggested by Adyen.   |  
| `threeDSecure.cavv`  | string  | `mpiData.cavv`  | The cardholder authentication value  |  
| `threeDSecure.authenticationResponse`  | string  | `mpiData.authenticationResponse`  | This is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.  |  
| `threeDSecure.directoryResponse`  | string  | `mpiData.directoryResponse`  | This is the `transStatus` from the `ARes` or Authentication response.  |  
| `threeDSecure.eci`  | string  | `mpiData.eci`  | The electronic commerce indicator from the Authentication response.  |  
| `threeDSecure.DSTransId`  | string  | `mpiData.dsTransID`  | The unique transaction identifier assigned by the Directory Server (DS) from the Authentication or Challenge Results response.  |  
| `threeDSecure.threeDSecureVersion`  | string  | `mpiData.threeDSVersion`  | The EMV 3DS version used to authenticate the cardholder. Example, "2.1.0" or "2.2.0".  |  
| `storedCredentials.initiator`  | string  | N/A  | unmapped  |  
| `storedCredentials.credentialStored`  | boolean  | `shopperInteraction`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). True = "ContAuth", False = "Ecommerce".  |  
| `storedCredentials.previousNetworkTransactionId`  | string  | `additionalData.networkTxReference`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). Value obtained from Adyen response field additionalData.networkTxReference. This response field must be turned on from the Adyen portal -> Developers -> Additional Data -> Acquirer Section -> select Network Transaction Reference. Save configuration.  |  
| `storedCredentials.TransactionType`  | string  | `recurringProcessingModel`  | Valid values:  
"recurring" = "CardOnFile",  
"installment" = "Subscription",  
"unscheduled" = "UnscheduledCardOnFile".  
any other string value will be forwarded.  |  
| `softDescriptors.merchantPhone`  | string  | `shopperStatement`  | See note below.  |  
| `softDescriptors.merchantUrl`  | string  | `shopperStatement`  | See note below.  |  
| `softDescriptors.merchantEmail`  | string  | `shopperStatement`  | See note below.  |  
| `softDescriptors.merchantName`  | string  | `shopperStatement`  | See note below.  |  
Soft Descriptors - ShopperStatement Construction
Adyen API's shopperStatement is a free-text field. If values are sent in the TokenEx SoftDescriptor fields, they will be concatenated and space separated in the forwarded request. Alternatively, use the shopperStatement passthrough in OrderInfo.
Example usage:
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```Forwarded output: `Bob Smalls (876) 613-1270 x38785 bob@smalls.com http://merchant.com`
The value Adyen receives from ShopperStatement is visible within the Adyen merchant portal's description of that transaction's Shopper Details.
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture/Refund
  * Card Void
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Adyen Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `Approved`  | boolean  |  `ResultCode` (Primary transactions)   
`Status` (Secondary transactions)  | True when the following conditions are met.   
Primary Transactions: ResultCode is "authorised".   
Secondary Transactions: Status is "received".  |  
| `ApprovalCode`  | string  | `additionalData.authCode`  | Authorisation code  |  
| `ProviderTransactionCode`  | string  | `pspReference`  | Adyen's 16-character reference associated with the transaction/request.  |  
| `TokenExTransactionCode`  | string  | `pspReference`  | Base64 encoded Adyen Checkout's pspReference. Required for use on secondary transactions.  |  
| `NetworkTransactionId`  | string  | `additionalData.networkTxReference`  | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.   
  
This contains either the Mastercard Trace ID or the Visa Transaction ID.  |  
| `MerchantReferenceId`  | string  | `merchantReference or reference`  | Value sent in request's OrderInfo.OrderId parameter  |  
| `VerificationResult.CvvRaw`  | string  | `additionalData.cvcResultRaw`  | The CVV (card verification value) response returned by issuer.  |  
| `VerificationResult.AvsRaw`  | string  | `additionalData.AvsResultRaw`  | The address verification service (AVS) response returned by issuer.  |  
| `VerificationResult.ProviderParsed.CvvMatch`  | string  | `additionalData.cvcResult`  | CVV match as parsed by Adyen  |  
| `VerificationResult.ProviderParsed.Avs`  | string  | `additionalData.AvsResult`  | AVS value as parsed by Adyen  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Gateway Error
  * Processor Error
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct#example-responses)
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "amount": 150,  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "5555341244441115",  

    "expMonth": 12,  

    "expYear": 2030,  

    "fullName": "Fredrick Gulgowski",  

    "cvv": "737"  

  },  

  "billingAddress": {  

    "phone": "793-358-4413 x1584",  

    "email": "Fredrick_Gulgowski@yahoo.com",  

    "company": "Wolff, Durgan and Satterfield",  

    "address1": "Suite 676",  

    "address2": "175 Cassin Manors",  

    "city": "Felipeshire",  

    "state": "MT",  

    "zip": "37685",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "orderId": "ae34a289-1505-4c75-9ab1-a02490d6fc37"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "directoryResponse": "C",  

    "threeDSecureVersion": "2.1.0",  

    "eci": "02",  

    "cavv": "3q2+78r+ur7erb7vyv66vv\\/\\/\\/\\/8=",  

    "dsTransId": "76d5b612-ac0f-45a3-8166-3d5f99faf568"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "currencyCode": "USD",  

  "tokenExTransactionCode": "V1c4TDQ3UzVKVjVYOE44Mg==",  

  "amount": 150  

}  

```
```

{  

  "gateway": "AdyenDirect",  

  "testMode": true,  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen Username>",  

  "password": "<Your Adyen Password>",  

  "tokenExTransactionCode": "V0dWRDQ0TkdWTUsyV044Mg=="  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"054713\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"zKOXz46ry95J4Z5HebXHLP4ipyDae\",\"threeDOffered\":\"false\",\"networkTxReference\":\"Q7GKE3IG51120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"1-c62fbC1D3\"},\"pspReference\":\"PQ9522HF9HXXGN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UFE5NTIySEY5SFhYR044Mg==",  

    "approvalCode": "054713",  

    "providerTransactionCode": "PQ9522HF9HXXGN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "Q7GKE3IG51120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010564922704876",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"authCode\":\"043383\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"1BZVvg7AiI8piUUPb1ZpJ7sB2VyXM\",\"threeDOffered\":\"false\",\"networkTxReference\":\"1F7XCJ1QM1120\",\"refusalReasonRaw\":\"AUTHORISED\",\"expiryDate\":\"3\\/2030\",\"cvcResult\":\"5 Issuer not certified for CVC\\/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\",\"acquirerReference\":\"F24GG4M84JH\"},\"pspReference\":\"JRR8KLPX6NK2WN82\",\"resultCode\":\"Authorised\",\"amount\":{\"currency\":\"USD\",\"value\":13},\"merchantReference\":\"Zpm2k8s2we5nhg1u\",\"paymentMethod\":{\"brand\":\"mc\",\"type\":\"scheme\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlJSOEtMUFg2TksyV044Mg==",  

    "approvalCode": "043383",  

    "providerTransactionCode": "JRR8KLPX6NK2WN82",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "1F7XCJ1QM1120",  

    "merchantReferenceId": "Zpm2k8s2we5nhg1u"  

  },  

  "referenceNumber": "23112010584148827716",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"PQ9522HF9HXXGN82\",\"pspReference\":\"F3R6HQTMSV5X8N82\",\"reference\":\"PQ9522HF9HXXGN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "RjNSNkhRVE1TVjVYOE44Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "F3R6HQTMSV5X8N82",  

    "approved": true,  

    "merchantReferenceId": "PQ9522HF9HXXGN82"  

  },  

  "referenceNumber": "23112010572476795207",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"JRR8KLPX6NK2WN82\",\"pspReference\":\"QZ8SJFGDCTGLNK82\",\"reference\":\"JRR8KLPX6NK2WN82\",\"status\":\"received\",\"amount\":{\"currency\":\"USD\",\"value\":13}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UVo4U0pGR0RDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "QZ8SJFGDCTGLNK82",  

    "approved": true,  

    "merchantReferenceId": "JRR8KLPX6NK2WN82"  

  },  

  "referenceNumber": "23112010591299228642",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"merchantAccount\":\"TokenExECOM\",\"paymentPspReference\":\"J6N66C47Q3RZNN82\",\"pspReference\":\"KVGX56TLV8NKGK82\",\"reference\":\"J6N66C47Q3RZNN82\",\"status\":\"received\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "S1ZHWDU2VExWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "KVGX56TLV8NKGK82",  

    "approved": true,  

    "merchantReferenceId": "J6N66C47Q3RZNN82"  

  },  

  "referenceNumber": "23112011000552348816",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\",\"pspReference\":\"LC3SD679J7RPWJ65\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "LC3SD679J7RPWJ65",  

    "approved": false  

  },  

  "referenceNumber": "23120816343252746474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"additionalData\":{\"liabilityShift\":\"false\",\"avsResult\":\"2 Neither postal code nor address match\",\"PaymentAccountReference\":\"ztN0W0tsgj4jQPE4mA3evHpjgtVZm\",\"threeDOffered\":\"false\",\"networkTxReference\":\"SEB7MVSZI1208\",\"expiryDate\":\"3/2030\",\"cvcResult\":\"5 Issuer not certified for CVC/CVV\",\"avsResultRaw\":\"2\",\"threeDAuthenticated\":\"false\",\"paymentMethod\":\"mc\",\"retry.attempt1.shopperInteraction\":\"Ecommerce\",\"cvcResultRaw\":\"U\",\"acquirerCode\":\"TestPmmAcquirer\"},\"pspReference\":\"HL7BV8VMM75ZGN82\",\"refusalReason\":\"Acquirer Fraud\",\"resultCode\":\"Refused\",\"refusalReasonCode\":\"14\",\"merchantReference\":\"SlicedApplesBulk\"}",  

    "gatewayErrors": [  

      {  

        "code": "14",  

        "message": "Acquirer Fraud",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "HL7BV8VMM75ZGN82",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "2",  

      "cvvRaw": "U",  

      "providerParsed": {  

        "cvvMatch": "5 Issuer not certified for CVC/CVV",  

        "avs": "2 Neither postal code nor address match"  

      }  

    },  

    "networkTransactionId": "SEB7MVSZI1208",  

    "merchantReferenceId": "SlicedApplesBulk"  

  },  

  "referenceNumber": "23120816363685560139",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```