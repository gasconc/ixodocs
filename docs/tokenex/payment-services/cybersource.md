---
title: CyberSource
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-cybersource-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-cybersource-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-cybersource-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-cybersource-responses-direct-link-responses
- api
- 3ds
- tokenization
- tokenex
- ixopay
- recurring
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource
portal: tokenex
updated: '2026-04-28'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * CyberSource

# CyberSource
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `Check`, `OrderInfo`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of CyberSource forwards request to the below endpoints  
| Action  | Production  | Sandbox  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase, Check Purchase  | `https://api.cybersource.com/pts/v2/payments`  | `https://apitest.cybersource.com/pts/v2/payments`  |  
| Card Capture  | `https://api.cybersource.com/pts/v2/payments/{id}/captures`  | `https://apitest.cybersource.com/pts/v2/payments/{id}/captures`  |  
| Card Refund, Check Refund  | `https://api.cybersource.com/pts/v2/payments/{id}/refunds`  | `https://apitest.cybersource.com/pts/v2/payments/{id}/refunds`  |  
| Card Void, Check Void  | `https://api.cybersource.com/pts/v2/captures/{id}/voids`  | `https://apitest.cybersource.com/pts/v2/captures/{id}/voids`  |  
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | CyberSource Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | CyberSource  |  
|  `merchantId`*  | string  | `MerchantId`  | Your Cybersource merchant Id  |  
|  `publicKey`*  | string  | `MerchantKeyId`  | API Key Id  |  
|  `privateKey`*  | string  | `MerchantSecretKey`  | Shared Secret Key associated with API Key for HTTP Signature Authentication  |  
| `referenceInformationCode`  | string  | `Ptsv2paymentsClientReferenceInformation.Code`  | Merchant-generated order reference or tracking number.  |  
| `amount`  | numeric  | `Ptsv2PaymentsOrderInformationAmountDetails.TotalAmount`  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `currencyCode`  | string  | `Ptsv2PaymentsOrderInformationAmountDetails.Currency`  | Currency of the transaction. [Alpha-3 ISO currency code](https://www.iso.org/iso-4217-currency-codes.html)  
  
Use the ISO 4217 three-letter alphabetic code for the currency.  |  
| `creditCard.Number`  | string  | `Ptsv2paymentsPaymentInformationCard.Number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `creditCard.ExpMonth`  | numeric  | `Ptsv2paymentsPaymentInformationCard.ExpirationMonth`  | The customer’s credit card expiration month. 1 or 2 digit value. Example: 11  |  
| `creditCard.ExpYear`  | numeric  | `Ptsv2paymentsPaymentInformationCard.ExpirationYear`  | The customer’s credit card expiration year. 4 digit value. Example: 2025  |  
| `creditCard.Cvv`  | string  | `Ptsv2paymentsPaymentInformationCard.SecurityCode`  | Card verification value  
  
Please refer to [Tokenization, Detokenization and CVV Retrieval](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1).  |  
| `creditCard.Brand`  | string  | `Ptsv2paymentsPaymentInformationCard.Type`  | Optional Parameter. If not passed, will match pattern with the following cards and assign value. Currently supported: `visa` - 001 , `mastercard` - 002, `americanexpress` - 003, `discover` - 004, `diners club` - 005, `jcb` - 007  |  
| `threeDSecure.AuthenticationTransactionId`  | string  | `ConsumerAuthenticationInformation.AuthenticationTransactionId`  | Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages.  |  
| `threeDSecure.CAVV`  | string  | `ConsumerAuthenticationInformation.Cavv`  | Cardholder authentication verification value (CAVV).  |  
| `threeDSecure.ECI`  | string  | `ConsumerAuthenticationInformation.EciRaw`  | Raw electronic commerce indicator (ECI).  |  
| `threeDSecure.Xid`  | string  | `ConsumerAuthenticationInformation.Xid`  | Transaction identifier.  |  
| `threeDSecure.DSTransId`  | string  | `ConsumerAuthenticationInformation.DirectoryServerTransactionId`  | The Directory Server Transaction ID is generated by the Mastercard Directory Server during the authentication transaction and passed back to the merchant with the authentication results.  |  
| `threeDSecure.ProgramProtocol`  | string  | `ConsumerAuthenticationInformation.PaSpecificationVersion`  | 1 (Legacy 3DS 1.0.2) or 2 (EMVCo 3DS 2.0.0 +).  |  
| `ignoreAvsResult`  | boolean  | `AuthorizationOptions.IgnoreAvsResult`  | Flag for a sale request that indicates whether to allow the capture service to run even when the authorization receives an AVS decline.  |  
| `ignoreCvvResult`  | boolean  | `AuthorizationOptions.IgnoreCvResult`  | Flag for a sale request that indicates whether to allow the capture service to run even when the authorization receives a CVN decline  |  
| `declineAvsFlags`  | list  | `AuthorizationOptions.DeclineAvsFlags`  | Comma-separated list of AVS flags that cause the reply flag  |  
| `recurring`  | boolean  | `AuthorizationOptions.Initiator.CredentialStoredOnFile`  |  `true` means merchant will use this transaction to store payment credentials for follow-up merchant-initiated transactions.   
`false` means merchant will not use this transaction to store payment credentials for follow-up merchant-initiated transactions.  |  
| `commerceIndicator`  | string  | `Ptsv2paymentsProcessingInformation.CommerceIndicator`  | Type of transaction. Only `internet`, `moto`, `install`, `recurring`, and `recurring_internet` are valid values.  |  
| `previousTransactionId`  | string  | `MerchantInitiatedTransaction.PreviousTransactionId`  | Network transaction identifier that was returned in the payment response field _processorInformation.transactionID_ in the reply message for either the original merchant-initiated payment in the series or the previous merchant-initiated payment in the series.  |  
| `driversLicenseNumber`  | string  | `Ptsv2paymentsBuyerInformationPersonalIdentification.Id`  | Type will be supplied by TokenEx as `driver license`  |  
| `driversLicenseState`  | string  | `Ptsv2paymentsBuyerInformationPersonalIdentification.IssuedBy`  | This is the State or province where the customer’s driver’s license was issued  |  
| `check.AccountNumber`  | string  | `Ptsv2paymentsPaymentInformationBankAccount.Number`  | ACH account number or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `check.RoutingNumber`  | string  | `Ptsv2paymentsPaymentInformationBank.RoutingNumber`  | The ABA routing number.  |  
| `check.CheckNumber`  | string  | `Ptsv2paymentsPaymentInformationBank.CheckNumber`  | The number of the check.  |  
| `check.AccountType`  | string  | `Ptsv2paymentsPaymentInformationBankAccount.Type`  | Represents the account type such as Checking, Savings, General Ledger, Corporate Checking  |  
| `secCode`  | string  | `BankTransferOptions.SecCode`  | Specifies the authorization method for the transaction. Valid values are `ARC`, `CCD`, `POP`, `PPD`, `TEL`, `WEB`.  |  
| `orderInfo.PurchaseOrderNumber`  | string  | `Ptsv2paymentsOrderInformationInvoiceDetails.PurchaseOrderNumber`  | Purchase Order Number  |  
| `orderInfo.InvoiceNumber`  | string  | `Ptsv2paymentsOrderInformationInvoiceDetails.InvoiceNumber`  | An identifier for the Invoice in Merchant's system  |  
| `tax.Amount`  | numeric  | `Ptsv2paymentsOrderInformationAmountDetails.TaxAmount`  | Tax amount in cents. Example: $10.00 should be sent as 1000  |  
| `shippingAddress.FirstName`  | string  | `Ptsv2paymentsOrderInformationShipTo.FirstName`  | First name associated with customer’s shipping address.  |  
| `shippingAddress.LastName`  | string  | `Ptsv2paymentsOrderInformationShipTo.LastName`  | Last name associated with customer’s shipping address.  |  
| `shippingAddress.Address1`  | string  | `Ptsv2paymentsOrderInformationShipTo.Address1`  | First line of the shipping address  |  
| `shippingAddress.Address2`  | string  | `Ptsv2paymentsOrderInformationShipTo.Address2`  | Second line of the shipping address  |  
| `shippingAddress.City`  | string  | `Ptsv2paymentsOrderInformationShipTo.Locality`  | City of the shipping address  |  
| `shippingAddress.State`  | string  | `Ptsv2paymentsOrderInformationShipTo.AdministrativeArea`  | State or province of the shipping address  |  
| `shippingAddress.Zip`  | string  | `Ptsv2paymentsOrderInformationShipTo.PostalCode`  | Postal code for the shipping address  |  
| `shippingAddress.Country`  | string  | `Ptsv2paymentsOrderInformationShipTo.Country`  | Country of the shipping address. [Alpha-2 ISO country code](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  |  
| `shippingAddress.Phone`  | string  | `Ptsv2paymentsOrderInformationShipTo.PhoneNumber`  | Phone number associated with the shipping address  |  
| `billingAddress.FirstName`  | string  | `Ptsv2paymentsOrderInformationBillTo.FirstName`  | First name associated with customer’s billing address.  |  
| `billingAddress.LastName`  | string  | `Ptsv2paymentsOrderInformationBillTo.LastName`  | Last name associated with customer’s billing address.  |  
| `billingAddress.Address1`  | string  | `Ptsv2paymentsOrderInformationBillTo.Address1`  | Payment card billing street address as it appears on the credit card issuer’s records  |  
| `billingAddress.Address2`  | string  | `Ptsv2paymentsOrderInformationBillTo.Address2`  | Payment card billing street address as it appears on the credit card issuer’s records  |  
| `billingAddress.City`  | string  | `Ptsv2paymentsOrderInformationBillTo.Locality`  | Payment card billing city  |  
| `billingAddress.State`  | string  | `Ptsv2paymentsOrderInformationBillTo.AdministrativeArea`  | State or province of the billing address  |  
| `billingAddress.Zip`  | string  | `Ptsv2paymentsOrderInformationBillTo.PostalCode`  | The postal code of customer’s billing address.  |  
| `billingAddress.Country`  | string  | `Ptsv2paymentsOrderInformationBillTo.Country`  | Country of customer’s billing address. [Alpha-2 ISO country code](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  |  
| `billingAddress.Email`  | string  | `Ptsv2paymentsOrderInformationBillTo.Email`  | Email associated with customer’s billing address.  |  
| `billingAddress.Phone`  | string  | `Ptsv2paymentsOrderInformationBillTo.PhoneNumber`  | Phone number associated with customer’s billing address.  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * ACH Purchase
  * ACH Refund
  * ACH Void
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | TokenEx Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approvalCode`  | string  | `ProcessorInformation.ApprovalCode`  | CyberSource approval code  |  
| `providerTransactionCode`  | string  | `PtsV2PaymentsPost201Response.Id`  | CyberSource generated Id for the request  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Gateway Error 401
  * Gateway Error 400
  * Processor Error 201
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource#example-responses)
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4242424242424242",  

    "expMonth": 10,  

    "expYear": 2021,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Purchase/Capture call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode of transaction to void>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "check": {  

    "accountNumber": "4101",  

    "routingNumber": "071923284",  

    "checkNumber": "123456789",  

    "firstName": "Maureen",  

    "lastName": "Heller",  

    "accountType": "Savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "fax": "555-555-6666",  

    "email": "john@doe.dev",  

    "firstName": "John",  

    "lastName": "Doe",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "amount": 12025,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "amount": 123,  

  "gateway": "CyberSource"  

}  

```
```

{  

  "merchantId": "<Your Merchant Id>",  

  "publicKey": "<Your API Key>",  

  "privateKey": "<Your shared secret key>",  

  "referenceInformationCode": "<Your reference information code>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by ACH Purchase call>",  

  "gateway": "CyberSource"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283144516797204951\",\"method\":\"GET\"},\"capture\":{\"href\":\"/pts/v2/payments/7017283144516797204951/captures\",\"method\":\"POST\"}},\"id\":\"7017283144516797204951\",\"submitTimeUtc\":\"2023-12-04T22:18:34Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728314507\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzE0NDUxNjc5NzIwNDk1MTswMQ==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283144516797204951",  

    "approved": true  

  },  

  "referenceNumber": "23120416183229527759",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7017283584606339104953\",\"method\":\"GET\"}},\"id\":\"7017283584606339104953\",\"submitTimeUtc\":\"2023-12-04T22:19:18Z\",\"status\":\"AUTHORIZED\",\"reconciliationId\":\"75028667KPNHBTMH\",\"clientReferenceInformation\":{\"code\":\"1701728358513\"},\"processorInformation\":{\"approvalCode\":\"888888\",\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"100\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInformation\":{\"card\":{},\"tokenizedCard\":{\"type\":\"001\"}},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"authorizedAmount\":\"1.23\",\"currency\":\"USD\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4MzU4NDYwNjMzOTEwNDk1MzswMg==",  

    "approvalCode": "888888",  

    "providerTransactionCode": "7017283584606339104953",  

    "approved": true  

  },  

  "referenceNumber": "23120416191760977190",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/captures/7017284431566362204953\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/captures/7017284431566362204953/voids\",\"method\":\"POST\"}},\"id\":\"7017284431566362204953\",\"submitTimeUtc\":\"2023-12-04T22:20:43Z\",\"status\":\"PENDING\",\"reconciliationId\":\"75028628KPNHBTL3\",\"clientReferenceInformation\":{\"code\":\"1701728443212\"},\"orderInformation\":{\"amountDetails\":{\"totalAmount\":\"1.23\",\"currency\":\"USD\"}}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NDQzMTU2NjM2MjIwNDk1MzswMw==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017284431566362204953",  

    "approved": true  

  },  

  "referenceNumber": "23120416204226007564",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/refunds/7017287050566881304951\",\"method\":\"GET\"},\"void\":{\"href\":\"/pts/v2/refunds/7017287050566881304951/voids\",\"method\":\"POST\"}},\"id\":\"7017287050566881304951\",\"submitTimeUtc\":\"2023-12-04T22:25:05Z\",\"status\":\"PENDING\",\"reconciliationId\":\"749709831PNLPFNS\",\"clientReferenceInformation\":{\"code\":\"1701728705108\"},\"refundAmountDetails\":{\"refundAmount\":\"1.23\",\"currency\":\"USD\"},\"processorInformation\":{\"responseCode\":\"100\"},\"orderInformation\":{}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzI4NzA1MDU2Njg4MTMwNDk1MTswNQ==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017287050566881304951",  

    "approved": true  

  },  

  "referenceNumber": "23120416250494925549",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/voids/7017308036806043903955\",\"method\":\"GET\"}},\"id\":\"7017308036806043903955\",\"submitTimeUtc\":\"2023-12-04T23:00:04Z\",\"status\":\"VOIDED\",\"clientReferenceInformation\":{\"code\":\"1701730803868\"},\"voidAmountDetails\":{\"voidAmount\":\"1.23\",\"currency\":\"usd\"}}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzAxNzMwODAzNjgwNjA0MzkwMzk1NTswNA==",  

    "approvalCode": "",  

    "providerTransactionCode": "7017308036806043903955",  

    "approved": true  

  },  

  "referenceNumber": "023120416595269285584",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"response\":{\"rmsg\":\"Authentication Failed\"}}",  

    "gatewayErrors": [  

      {  

        "message": "Authentication Failed",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114092771358206",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "401"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"7128630725326936603955\",\"submitTimeUtc\":\"2024-04-11T19:17:52Z\",\"status\":\"INVALID_REQUEST\",\"reason\":\"INVALID_DATA\",\"message\":\"Declined - One or more fields in the request contains invalid data\",\"details\":[{\"field\":\"paymentInformation.card.expirationMonth\",\"reason\":\"INVALID_DATA\"}]}",  

    "gatewayErrors": [  

      {  

        "code": "INVALID_DATA",  

        "message": "Declined - One or more fields in the request contains invalid data",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "024041114174819468491",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "400"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"_links\":{\"self\":{\"href\":\"/pts/v2/payments/7128629213356774403955\",\"method\":\"GET\"}},\"id\":\"7128629213356774403955\",\"status\":\"DECLINED\",\"errorInformation\":{\"reason\":\"PROCESSOR_DECLINED\",\"message\":\"Decline - General decline of the card. No other information provided by the issuing bank.\"},\"clientReferenceInformation\":{\"code\":\"1712862921525\"},\"processorInformation\":{\"transactionId\":\"123456789619999\",\"networkTransactionId\":\"123456789619999\",\"responseCode\":\"303\",\"avs\":{\"code\":\"X\",\"codeRaw\":\"I1\"}},\"paymentInsightsInformation\":{\"responseInsights\":{\"category\":\"ISSUER_CANNOT_APPROVE_AT_THIS_TIME\",\"categoryCode\":\"02\"}},\"pointOfSaleInformation\":{\"terminalId\":\"111111\"}}",  

    "gatewayErrors": [  

      {  

        "code": "PROCESSOR_DECLINED",  

        "message": "Decline - General decline of the card. No other information provided by the issuing bank.",  

        "source": "Gateway"  

      },  

      {  

        "code": "303",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "7128629213356774403955",  

    "approved": false  

  },  

  "referenceNumber": "024041114151491095296",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "201"  

}  

```