---
title: First Data IPG
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  First
  Data IPG'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-first-data-ipg-overview-direct-link-overview
- supported-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-first-data-ipg-supported-parameters-direct-link-supported-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-first-data-ipg-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-first-data-ipg-responses-direct-link-responses
- api
- 3d-secure
- tokenization
- tokenex
- ixopay
- recurring
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg
portal: tokenex
updated: '2026-06-29'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * First Data IPG

# First Data IPG
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:** [https://developer.fiserv.com/product/IPGNA/api/?type=post&path=/payments&branch=main&version=1.0.0](https://developer.fiserv.com/product/IPGNA/api/?type=post&path=/payments&branch=main&version=1.0.0)  
**Default Currency:** USD
**Reqest Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `OrderInfo`,`SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of First Data IPG forwards requests to the below endpoints.  
**Production:** prod.api.firstdata.com/gateway/v2  
**Sandbox:** cert.api.firstdata.com/gateway/v2
## Supported Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#supported-parameters "Direct link to Supported Parameters")
* denotes a required field  
| Field Name  | Type  | IPG Mapping  | Notes  |  
| --- | --- | --- | --- |  
|  `gateway`*  | string  | N/A  | FirstDataIPG  |  
|  `PublicKey`*  | string  |  `Api-Key` (header)  | Key given to merchant after boarding associating their requests with the appropriate app in Apigee.  |  
|  `PrivateKey`*  | string  |  `Message-Signature` (header)  | Used in creation of message signature hash header.  |  
| `ProcessingRegion`  | string  |  `Region` (header)  | Indicates the region where the client wants the transaction to be processed. This will override the default processing region identified for the client. Available options are argentina, brazil, germany, india and northamerica. Region specific store setup and APIGEE boarding is required in order to use an alternate region for processing.  |  
| `StoreId`  | string  | `StoreId`  | Outlet ID for clients that support multiple stores in the same app.  |  
| `CurrencyCode`  | string  | `TransactionAmount.Currency`  | ISO 4217 three-letter alphabetic code for the currency.   
Defaults to "USD".  |  
| `Amount`  | int  | `TransactionAmount.Total`  | Transaction amount in whole units. Example: $10.00 USD should be sent as 1000.  |  
| `CreditCard.Brand`  | string  | `PaymentMethod.PaymentCard.Brand`  | Required only if using dual branded card.  |  
| `CreditCard.Number`  | string  | `PaymentMethod.PaymentCard.Number`  | Card's PAN or TokenEx token  |  
| `CreditCard.ExpMonth`  | int  | `PaymentMethod.PaymentCard.ExpiryDate.Month`  | 1 or 2 digit month.  |  
| `CreditCard.ExpYear`  | int  | `PaymentMethod.PaymentCard.ExpiryDate.Year`  | 4 digit year.  |  
| `CreditCard.FullName`  | string  | `PaymentMethod.PaymentCard.CardholderName`  | Cardholder's full name.  |  
| `CreditCard.CVV`  | string  | `PaymentMethod.PaymentCard.SecurityCode`  | 3 or 4 digit Card Verification Code. If the CVV has been associated with a TokenEx token, send a non-numeric value here, such as "cvv". The CVV associated with the token will be retrieved and forwarded.  |  
| `CreditCard.Bin`  | string  | `PaymentMethod.PaymentCard.Bin`  | The payment card BIN.  |  
| N/A  | string  | `PaymentMethod.PaymentCard.Last4`  | When the card's Bin is sent, this field is auto-populated with the last four digits of the card number.  |  
| `BillingAddress.Phone`  | string  | `Order.Billing.Contact.Phone`  | Primary phone number.  |  
| `BillingAddress.Fax`  | string  | `Order.Billing.Contact.Fax`  | Fax number.  |  
| `BillingAddress.Email`  | string  | `Order.Billing.Contact.Email`  | Email address.  |  
| `BillingAddress.FirstName`  | string  | `Order.Billing.FirstName`  | Billing first name. Note - Only supported for AMEX.  |  
| `BillingAddress.LastName`  | string  | `Order.Billing.LastName`  | Billing last name. Note - Only supported for AMEX.  |  
| `BillingAddress.FullName`  | string  | `Order.Billing.Name`  | Billing name.  |  
| `BillingAddress.Company`  | string  | `Order.Billing.Address.Company`  | Company name associated with the address.  |  
| `BillingAddress.Address1`  | string  | `Order.Billing.Address.Address1`  | First line of the street address.  |  
| `BillingAddress.Address2`  | string  | `Order.Billing.Address.Address2`  | Second line of the street address.  |  
| `BillingAddress.City`  | string  | `Order.Billing.Address.City`  | City or locality.  |  
| `BillingAddress.State`  | string  | `Order.Billing.Address.Region`  | State or province.  |  
| `BillingAddress.Zip`  | string  | `Order.Billing.Address.PostalCode`  | ZIP code or postal code.  |  
| `BillingAddress.Country`  | string  | `Order.Billing.Address.Country`  | Customer country. Input Alpha 3  |  
| `OrderInfo.CustomerId`  | string  | `Order.Billing.CustomerId`  | Customer ID for billing purpose.  |  
| `OrderInfo.PurchaseOrderNumber`  | string  | `Order.AdditionalDetails.PurchaseOrderNumber`  | Purchase order number.  |  
| `OrderInfo.InvoiceNumber`  | string  | `Order.AdditionalDetails.InvoiceNumber`  | Invoice number.  |  
| `StoredCredentials.Initiator`  | string  | `StoredCredentials.Intitiator`  | Valid values: "cardholder" or "merchant". These values are made upper case and then forwarded.  |  
| `StoredCredentials.CredentialStored`  | boolean  | `StoredCredentials.Sequence`  | See usage in [The Basics - Stored Credentials.](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials) . True = "SUBSEQUENT", False = "FIRST"  |  
| `StoredCredentials.PreviousNetworkTransactionId`  | string  | `StoredCredentials.ReferencedSchemeTransactionId`  | See usage in [The Basics - Stored Credentials.](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials)   
Matches IPG response field "ipgTransactionId".  |  
| `StoredCredentials.TransactionType`  | string  | `StoredCredentials.Scheduled`  | Valid value mappings:   
"recurring" = true   
"installment" = true   
"unscheduled" = false   
any other string value = false  |  
| `OrderInfo.OrderId`  | string  | `Order.OrderId`  | Client Order ID if supplied by client. If not supplied by client, IPG will generate. The first 12 alphanumeric digits are passed down to Fiserv Enterprise reporting tool, Clientline and Data File Manager (DFM).  |  
| `MerchantTransactionId`  | string  | `MerchantTransactionId`  | A unique value per request. This field is utilized in both the body and in the generation of the message-signature header. If not supplied, a GUID is auto-generated and returned in the response.  |  
| `ShippingAddress.Phone`  | string  | `Order.Shipping.Contact.Phone`  | Primary phone number.  |  
| `ShippingAddress.Fax`  | string  | `Order.Shipping.Contact.Fax`  | Fax number.  |  
| `ShippingAddress.Email`  | string  | `Order.Shipping.Contact.Email`  | Email address.  |  
| `ShippingAddress.FullName`  | string  | `Order.Shipping.Name`  | Name of customer for shipping.  |  
| `ShippingAddress.Company`  | string  | `Order.Shipping.Address.Company`  | Company name associated with the address.  |  
| `ShippingAddress.Address1`  | string  | `Order.Shipping.Address.Address1`  | First line of the street address.  |  
| `ShippingAddress.Address2`  | string  | `Order.Shipping.Address.Address2`  | Second line of the street address.  |  
| `ShippingAddress.City`  | string  | `Order.Shipping.Address.City`  | City or locality.  |  
| `ShippingAddress.State`  | string  | `Order.Shipping.Address.Region`  | State or province.  |  
| `ShippingAddress.Zip`  | string  | `Order.Shipping.Address.PostalCode`  | ZIP code or postal code.  |  
| `ShippingAddress.Country`  | string  | `Order.Shipping.Address.Country`  | Customer country. Input Alpha 3  |  
| `SoftDescriptors.MerchantName`  | string  | `Order.SoftDescriptor.DynamicMerchantName`  | Store "doing-business-as" name.  |  
| `SoftDescriptors.MerchantCategoryCode`  | string  | `Order.SoftDescriptor.Mcc`  | The 4-digit merchant category code (MCC). The merchant might be associated with multiple MCCs. In that case the MCC provided here will be the one that better describes the current transaction.  |  
| `SoftDescriptors.MerchantPhone`  | string  | `Order.SoftDescriptor.CustomerServiceNumber`  | Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File.  |  
| `SoftDescriptors.MerchantCity`  | string  | `Order.SoftDescriptor.DynamicAddress.City`  | City or locality. Can also be sent in SoftDescriptors.MerchantAddress.City.  |  
| `SoftDescriptors.MerchantAddress.Company`  | string  | `Order.SoftDescriptor.DynamicAddress.Company`  | Company name associated with the address.  |  
| `SoftDescriptors.MerchantAddress.Address1`  | string  | `Order.SoftDescriptor.DynamicAddress.Address1`  | First line of the street address.  |  
| `SoftDescriptors.MerchantAddress.Address2`  | string  | `Order.SoftDescriptor.DynamicAddress.Address2`  | Second line of the street address.  |  
| `SoftDescriptors.MerchantAddress.City`  | string  | `Order.SoftDescriptor.DynamicAddress.City`  | See SoftDescriptors.MerchantAddress.City.  |  
| `SoftDescriptors.MerchantAddress.State`  | string  | `Order.SoftDescriptor.DynamicAddress.Region`  | State or province.  |  
| `SoftDescriptors.MerchantAddress.Zip`  | string  | `Order.SoftDescriptor.DynamicAddress.PostalCode`  | ZIP code or postal code.  |  
| `SoftDescriptors.MerchantAddress.Country`  | string  | `Order.SoftDescriptor.DynamicAddress.Country`  | Customer country. Input Alpha 3  |  
| `ThreeDSecure.CAVV`  | string  | `AuthenticationResult.Cavv`  | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase.  |  
| `ThreeDSecure.DSTransId`  | string  | `AuthenticationResult.DsTransactionId`  | The response transaction UUID from the DS (directory server)  |  
| `ThreeDSecure.AuthenticationResponse`  | string  | `AuthenticationResult.AuthenticationResponse`  | The result of authentication attempt returned by the 3D Secure authentication process (ARes).  |  
| `ThreeDSecure.ChallengeResponse`  | string  | `AuthenticationResult.TransactionStatus`  | The transaction status as returned by the 3D Secure authentication process (CRes).  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture/Refund/Void
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | IPG Response Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approvalCode`  | string  | `ApprovalCode`  | Transaction approval code.  |  
| `approved`  | boolean  | `TransactionStatus`  | If TransactionStatus equals "APPROVED" or "PARTIAL", this field is true.  |  
| `providerTransactionCode`  | string  | `IpgTransactionId`  | The response transaction ID.  |  
| `networkTransactionId`  | string  | `SchemeTransactionId`  | The transaction ID received from schemes for the initial transaction of card on file flows.  |  
| `gatewayToken`  | string  | `PaymentToken.Value`  | Client-supplied payment token value. Only applicable for DataVault tokenization scheme.  |  
| `merchantReferenceId`  | string  | `OrderId`  | Client Order ID if supplied by client. If not supplied by client, IPG will generate.  |  
| `verificationResult.cvvRaw`  | string  | `Processor.SecurityCodeResponse`  | CVV match value returned by issuer.  |  
| `verificationResult.avsRaw`  | string  | `Processor.AvsResponse.AssociationAvsResponse`  | AVS matching value returned by issuer.  |  
| `verificationResult.providerParsed.streetMatch`  | string  | `Processor.AvsResponse.StreetMatch`  | AVS Street match, as parsed by First Data IPG.  |  
| `verificationResult.providerParsed.postalCodeMatch`  | string  | `Processor.AvsResponse.PostalCodeMatch`  | Postal Code match, as parsed by First Data IPG.  |  
| `brandAuthResponseCode`  | string  | `Processor.AssociationResponseCode`  | Response code from card brand.  |  
| `recurringAdviceDescription`  | string  | `Processor.AssociationResponseCode`  | Description of why the transaction failed.  |  
| `recurringAdviceCode`  | string  | `Processor.MerchantAdviceCodeIndicator`  | Code indicating why the transaction failed.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#overview)
  * [Supported Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#supported-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg#example-responses)
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "amount": 1000,  

  "currencyCode": "USD",  

  "shippingAddress": {  

    "phone": "444-444-4444",  

    "fax": "444-444-6666",  

    "email": "jane@doe.dev",  

    "fullName": "Jane Doe",  

    "company": "Test Co.",  

    "address1": "456 Someplace Drive",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74112",  

    "country": "USA"  

  },  

  "creditCard": {  

    "bin": "411111",  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "A456789A",  

    "customerId": "9876543210"  

  },  

  "threeDSecure": {  

    "authenticationResponse": "Y",  

    "cavv": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",  

    "dsTransId": "5a56fdc9-6d47-5fee-8000-000000296743"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "84558721076",  

    "transactionType": "recurring"  

  },  

  "softDescriptors": {  

    "merchantAddress": {  

      "company": "Jay's Widgets",  

      "address1": "123 W. Brie Street",  

      "address2": "#3",  

      "city": "Denver",  

      "state": "CO",  

      "zip": "00001",  

      "country": "USA"  

    },  

    "merchantCategoryCode": "0001",  

    "merchantPhone": "9180000000",  

    "merchantCity": "Denver",  

    "merchantName": "Jay's Widgets, LLC"  

  }  

}  

```
```

{  

  "gateway": "FirstDataIPG",  

  "testMode": true,  

  "publicKey": "<Your IPG Public Key>",  

  "privateKey": "<Your IPG Private Key>",  

  "storeId": "<Your IPG Store Id, if applicable>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"7b21b860-643c-4e6d-bd4d-1f5011d1ec85\",\"apiTraceId\":\"ZXH2IXDbEVHj4RmYjrsBuQAAA2Y\",\"ipgTransactionId\":\"84643453089\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967393,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453089:YYYX:685976\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMwODk7MDtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453089:YYYX:685976",  

    "providerTransactionCode": "84643453089",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710431273630926",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"f1b639fe-45df-46ac-9bae-5b00e0b60ebe\",\"apiTraceId\":\"ZXH21T1xpUjAluhLw-mjlAAAAfg\",\"ipgTransactionId\":\"84643453143\",\"orderId\":\"R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0\",\"transactionType\":\"SALE\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967573,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK8297:4643453143:YYYX:686028\",\"schemeTransactionId\":\"013341999277513\",\"processor\":{\"referenceNumber\":\"84643453143\",\"authorizationCode\":\"OK8297\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"000\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"associationResponseCodeAdtl\":\"00\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxNDM7MTtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK8297:4643453143:YYYX:686028",  

    "providerTransactionCode": "84643453143",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341999277513",  

    "merchantReferenceId": "R-5cfb8189-bfa6-40a5-8753-d4c0c270cfa0"  

  },  

  "referenceNumber": "23120710461254554694",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"d8d4835f-0a25-407d-b280-53033a4f26b6\",\"apiTraceId\":\"ZXH2RB8wMOMoZZ7ZsYnEiwAAA7E\",\"ipgTransactionId\":\"84643453101\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"POSTAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967428,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:OK7807:4643453101:YYY :685978\",\"schemeTransactionId\":\"013341105228347\",\"processor\":{\"referenceNumber\":\"84643453089\",\"authorizationCode\":\"OK7807\",\"responseCode\":\"00\",\"network\":\"VISA\",\"associationResponseCode\":\"   \",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"}},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"detailedProductID\":\"H\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMDE7MjtVU0Q7MTAwMA==",  

    "approvalCode": "Y:OK7807:4643453101:YYY :685978",  

    "providerTransactionCode": "84643453101",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "013341105228347",  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "2312071043464695885",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"bd2088cf-4385-415a-8727-9622d551d69b\",\"apiTraceId\":\"ZXH2fQUu2irmML7hSxNHNwAAAxI\",\"ipgTransactionId\":\"84643453121\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"RETURN\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967485,\"approvedAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453121:PPX :685996\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\",\"avsResponse\":{\"streetMatch\":\"NO_INPUT_DATA\",\"postalCodeMatch\":\"NO_INPUT_DATA\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjE7MztVU0Q7MTAwMA==",  

    "approvalCode": "Y:000000:4643453121:PPX :685996",  

    "providerTransactionCode": "84643453121",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "streetMatch": "NO_INPUT_DATA",  

        "postalCodeMatch": "NO_INPUT_DATA"  

      }  

    },  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710444451583740",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"6102c130-7de2-4e93-8136-6f1d64e528ce\",\"apiTraceId\":\"ZXH2onNn3m0878N3vMhKOQAAAsM\",\"ipgTransactionId\":\"84643453127\",\"orderId\":\"R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a\",\"transactionType\":\"VOID\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1701967522,\"approvedAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionAmount\":{\"total\":10,\"currency\":\"USD\",\"components\":{\"subtotal\":10}},\"transactionStatus\":\"APPROVED\",\"approvalCode\":\"Y:000000:4643453127:PPX :686012\",\"processor\":{\"referenceNumber\":\"84643453121\",\"responseCode\":\"00\",\"responseMessage\":\"APPROVAL\"},\"additionalDetails\":{\"additionalResponseData\":{\"cardProductID\":\"?\",\"cardBrand\":\"V\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODQ2NDM0NTMxMjc7NDtVU0Q7",  

    "approvalCode": "Y:000000:4643453127:PPX :686012",  

    "providerTransactionCode": "84643453127",  

    "approved": true,  

    "verificationResult": {},  

    "merchantReferenceId": "R-337f7da4-e0eb-4e8b-95ae-f008a6ea720a"  

  },  

  "referenceNumber": "23120710452126963836",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"372277df-d537-4cef-9c07-cbd2e391b1ce\",\"apiTraceId\":\"ZXNRVjc5_7d6IseXKsvu_wAAA0A\",\"responseType\":\"GatewayDeclined\",\"ipgTransactionId\":\"84643535942\",\"orderId\":\"R-f31c0fe5-1df1-472e-91c7-94a39ae6645d\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"VISA\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2000\"},\"bin\":\"411111\",\"last4\":\"1111\",\"brand\":\"VISA\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"VISA\"},\"transactionTime\":1702056278,\"transactionAmount\":{\"total\":10.00,\"currency\":\"USD\",\"components\":{\"subtotal\":10.00}},\"transactionStatus\":\"VALIDATION_FAILED\",\"approvalCode\":\"N:-2303:Invalid credit card number\",\"errorMessage\":\"2303: Invalid credit card number\",\"error\":{\"code\":\"2303\",\"message\":\"Invalid credit card number\"}}",  

    "gatewayErrors": [  

      {  

        "code": "2303",  

        "message": "Invalid credit card number",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:-2303:Invalid credit card number",  

    "providerTransactionCode": "84643535942",  

    "approved": false,  

    "merchantReferenceId": "R-f31c0fe5-1df1-472e-91c7-94a39ae6645d"  

  },  

  "referenceNumber": "23120811243794389878",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "409"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"clientRequestId\":\"28e8d3ca-2bdd-46fb-89c9-3c5cc30b77b8\",\"apiTraceId\":\"ZXOGGAUu2irmML7hSxMpqwAAAwo\",\"responseType\":\"EndpointDeclined\",\"ipgTransactionId\":\"84643544641\",\"orderId\":\"R-f755e66d-b599-4d7d-92e3-0aa4d5619cce\",\"transactionType\":\"PREAUTH\",\"paymentToken\":{\"reusable\":true,\"declineDuplicates\":false,\"brand\":\"DINERSCLUB\",\"type\":\"PAYMENT_CARD\"},\"transactionOrigin\":\"ECOM\",\"paymentMethodDetails\":{\"paymentCard\":{\"expiryDate\":{\"month\":\"12\",\"year\":\"2024\"},\"bin\":\"601100\",\"last4\":\"0000\",\"brand\":\"DINERSCLUB\"},\"paymentMethodType\":\"PAYMENT_CARD\",\"paymentMethodBrand\":\"DINERSCLUB\"},\"country\":\"USA\",\"terminalId\":\"1567065\",\"merchantId\":\"323254102995\",\"transactionTime\":1702069784,\"transactionAmount\":{\"total\":2.95,\"currency\":\"USD\",\"components\":{\"subtotal\":2.95}},\"transactionStatus\":\"DECLINED\",\"approvalCode\":\"N:51:DECLINED\",\"errorMessage\":\"99951: DECLINED\",\"schemeTransactionId\":\"170206978466713\",\"processor\":{\"referenceNumber\":\"84643544641\",\"responseCode\":\"51\",\"network\":\"DISC\",\"associationResponseCode\":\"005\",\"responseMessage\":\"DECLINED\",\"avsResponse\":{\"streetMatch\":\"Y\",\"postalCodeMatch\":\"Y\",\"associationAvsResponse\":\"Y\"},\"securityCodeResponse\":\"NOT_CHECKED\"},\"additionalDetails\":{\"additionalResponseData\":{\"issuingBankName\":\";DISCOVER IIN RAN\",\"cardProductID\":\"X\",\"associationResponseCodeAdtl\":\"05\",\"cardBrand\":\"D\"}},\"error\":{\"code\":\"99951\",\"message\":\"DECLINED\"}}",  

    "gatewayErrors": [  

      {  

        "code": "99951",  

        "message": "DECLINED",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "N:51:DECLINED",  

    "providerTransactionCode": "84643544641",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "Y",  

      "cvvRaw": "NOT_CHECKED",  

      "providerParsed": {  

        "streetMatch": "Y",  

        "postalCodeMatch": "Y"  

      }  

    },  

    "networkTransactionId": "170206978466713",  

    "merchantReferenceId": "R-f755e66d-b599-4d7d-92e3-0aa4d5619cce"  

  },  

  "referenceNumber": "23120815094262572755",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```