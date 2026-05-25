---
title: Worldpay eComm cnpAPI
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  Worldpay
  eComm cnpAPI'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-ecomm-cnpapi-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-ecomm-cnpapi-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-ecomm-cnpapi-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-ecomm-cnpapi-responses-direct-link-responses
- api
- xml
- 3ds
- tokenex
- ixopay
- refund
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi
portal: tokenex
updated: '2026-05-25'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Worldpay eComm cnpAPI

# Worldpay eComm cnpAPI
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#overview "Direct link to Overview")
Gateway Website:   
Developer Documentation:   
Sandbox documentation: 
Default Currency: Currency determined by Worldpay merchant configuration
Request Objects: `BillingAddress`, `ShippingAddress`, `CreditCard`, `Check`, `OrderInfo`, `SoftDescriptors`, `ThreeDSecure`
Gateway Endpoints  
This implementation of the eComm cnpAPI forwards requests to the below endpoints.  
Production:  
Prelive:   
Sandbox: 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#supported-request-parameters "Direct link to Supported Request Parameters")  
| Field Name  | Type  | cnpAPI Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `Gateway`  | string  | N/A  | VantivCNP  |  
| `Username`  | string  | `Authentication.User`  | The sandbox does not require registration. Populate with dummy values outside Prelive and Production.  |  
| `Password`  | string  | `Authentication.Password`  | The sandbox does not require registration. Populate with dummy values outside Prelive and Production.  |  
| `MerchantId`  | string  | `MerchantId`  | The sandbox does not require registration. Populate with dummy values outside Prelive and Production.  |  
| `VantivAPIVersion`  | string  | `Version`  | Defaults to 9.4. Versions below 9.4 may be functional but are not supported via this implementation.  |  
| `TransactionId`  | string  | `Id`  | Fall through assignment order: `TransactionId`, `OrderInfo.OrderId`, Random 25 digit string.  |  
| `ReportGroup`  | string  | `ReportGroup`  | Fall through assignment order: `ReportGroup`, `MerchantId`, `"Default Report Group"`  |  
| `OrderInfo.CustomerId`  | string  | `CustomerId`  | A value assigned by the merchant to identify the consumer.  |  
| `OrderInfo.OrderId`  | string  | `OrderId`  | If null, then the value assigned to `Id` is populated here.  |  
| `OrderInfo.OrderSource`  | string  | `OrderSource`  | Fall through assignment order: `OrderInfo.OrderSource`, `"ecommerce"`.  |  
| `Amount`  | numeric  | `Amount`  | The amount in minor units. For example, 2000 means USD 20.00. Max length: 12 characters.  |  
| `BillingAddress.FullName`  | string  | `BillToAddress.Name`  | If full name is null, then the values of `BillingAddress.FirstName` and `BillingAddress.LastName` will be space-separated and concatenated.  |  
| `BillingAddress.Company`  | string  | `BillToAddress.CompanyName`  | Company Name  |  
| `BillingAddress.Email`  | string  | `BillToAddress.Email`  | Customer Email  |  
| `BillingAddress.Phone`  | string  | `BillToAddress.Phone`  | Customer Phone  |  
| `BillingAddress.Address1`  | string  | `BillToAddress.AddressLine1`  | Customer Address Line 1  |  
| `BillingAddress.Address2`  | string  | `BillToAddress.AddressLine2`  | Customer Address Line 2  |  
| `BillingAddress.City`  | string  | `BillToAddress.City`  | Customer City  |  
| `BillingAddress.State`  | string  | `BillToAddress.State`  | Customer State - 2 characters  |  
| `BillingAddress.Zip`  | string  | `BillToAddress.Zip`  | Customer Postal Code  |  
| `BillingAddress.Country`  | string  | `BillToAddress.Country`  | Three-Character Country Code ISO country code.   
If provided, we convert this value to the Alpha 2 two-character country code.  |  
| `ShippingAddress.FullName`  | string  | `ShipToAddress.Name`  | If full name is null, then the values of `ShippingAddress.FirstName` and `ShippingAddress.LastName` will be space-separated and concatenated.  |  
| `ShippingAddress.Email`  | string  | `ShipToAddress.Email`  | Recipient Email  |  
| `ShippingAddress.Phone`  | string  | `ShipToAddress.Phone`  | Recipient Phone  |  
| `ShippingAddress.Address1`  | string  | `ShipToAddress.AddressLine1`  | Recipient Address Line 1  |  
| `ShippingAddress.Address2`  | string  | `ShipToAddress.AddressLine2`  | Recipient Address Line 2  |  
| `ShippingAddress.City`  | string  | `ShipToAddress.City`  | Recipient City  |  
| `ShippingAddress.State`  | string  | `ShipToAddress.State`  | Recipient State - 2 characters  |  
| `ShippingAddress.Zip`  | string  | `ShipToAddress.Zip`  | Recipient Postal Code  |  
| `ShippingAddress.Country`  | string  | `ShipToAddress.Country`  | Three-Character Country Code ISO country code.   
If provided, we convert this value to the Alpha 2 two-character country code.  |  
| `CreditCard.Brand`  | string  | `Card.Type`  |  [cnpAPI Type Documentation](https://support.worldpay.com/support/CNP-API/content/typeeleasachildparent.htm)   
Sending `Visa` results in `VI` being forwarded. Any value not listed below is forwarded unchanged.   
‘Visa’ -> ‘VI’   
‘Mastercard’ -> ‘MC’   
‘AmericanExpress’ -> ‘AX’   
‘DinersClub’ -> ‘DC’   
‘Discover’ -> ‘DI’   
‘Paypal’ -> ‘PP’   
‘JCB’ -> ‘JC’   
‘DirectDebit’ -> ‘EC’   
‘Giftcard’ -> ‘GC’   
‘Interac’ -> ‘IC’  |  
| `CreditCard.Number`  | string  | `Card.Number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `CreditCard.ExpMonth`  | numeric  | `Card.ExpDate`  | The customer’s credit card expiration month. Format: 2 digits, zero-padded for single digits. Example: 03 = March, 11 = November  |  
| `CreditCard.ExpYear`  | numeric  | `Card.ExpDate`  | The customer’s credit card expiration year. Format: 4 digits. For example: 2030  |  
| `CreditCard.CVV`  | string  | `Card.CardValidationNum`  | The card verification code.  |  
| `Check.AccountType`  | string  | `Echeck.AccType`  | Sending the below values (left) results in the corresponding value (right) being forwarded. Values not listed below will return an error.   
'Checking' -> 'Checking'   
'Savings' -> 'Savings'   
'CorporateChecking' ->'Corporate'   
'CorporateSavings' -> 'Corp Savings'  |  
| `Check.AccountNumber`  | string  | `Echeck.AccNum`  | Bank account number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `Check.RoutingNumber`  | string  | `Echeck.RoutingNum`  | Routing number  |  
| `Check.CheckNumber`  | string  | `Echeck.CheckNum`  | The ABA routing number.  |  
| `CustomerIpAddress`  | string  | `CardholderAuthentication.CustomerIpAddress`  | Customer IP address of the purchaser.  |  
| `ThreeDSecure.CAVV`  | string  | `CardholderAuthentication.AuthenticationValue`  | The authentication value associated with the 3DS authentication  |  
| `ThreeDSecure.DSTransId`  | string  | `CarholderAuthentication.AuthenticationTransactionId`  | The Directory Server Transaction Id associated with the 3DS authenticaiton.  |  
| `ThreeDSecure.ProgramProtocol`  | string  | `CardholderAuthentication.AuthenticationProtocolVersion`  | Protocol of 3DS - Defaults to 2 as 1 has been sunset.  |  
| `SoftDescriptors.MerchantPhone`  | string  | `CustomBilling.Phone`  | Phone number to display on customer's statement  |  
| `SoftDescriptors.MerchantCity`  | string  | `CustomBilling.City`  | City to display on customer's statement  |  
| `SoftDescriptors.MerchantUrl`  | string  | `CustomBilling.Url`  | URL to display on customer's statement  |  
| `SoftDescriptors.Descriptor`  | string  |  `CustomBilling.Descriptor` (Card requests)   
`CustomerIdentifier` (Check requests)  | Anything relevant to display on the customer's statement.  |  
| `Partial`  | bool  | `Partial`  | Used only on Capture requests  |  
| `ForeignRetailerIndicator`  | string  | `ForeignRetailerIndicator`  | Used only Capture and Sale requests for versions 12.31+  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Check Purchase
  * Check Refund
  * Check Void
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | cnpAPI Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `Approved`  | string  | XmlAttribute `response`, XmlElement `response`.  | When the XmlAttribute `response` is _not_ 0, then false. When XmlElement `response` is 000 or 010, then true. If the version is greater than or equal to 10.0 and less than 11.0, then 001 also equates true.  |  
| `ApprovalCode`  | string  |  `AuthorizationResponse.AuthCode`   
`SaleResponse.AuthCode`  | Transaction types that are not a Card Authorization or Card Purchase will not display a value for this parameter.  |  
| `ProviderTransactionCode`  | string  |  `LitleTxnId` or `CnpTxnId`  | Versions 12+ are CnpTxnId, Versions less than 12 are LitleTxnId.  |  
| `TokenExTransactionCode`  | string  |  `LitleTxnId` or `CnpTxnId` plus the PS v2 `TransactionType`.  | Base 64 encoded concatenation of the transaction id and an internal transaction type mapping. For use with payment modifications.  |  
| `GatewayErrors[0].Code`  | string  | XmlAttribute `response`, XmlElement `response`.  | When the XmlAttribute `response` is _not_ 0, the code will be the value.   
When the XmlAttribute `response` is 0 and approved is _not_ true, the code will be the XmlElement `response` value.  |  
| `GatewayErrors[0].Message`  | string  | XmlAttribute `message`,   
XmlElement `message`.  | When the XmlAttribute `response` is _not_ 0, the   
message will be the value of the XmlElement `message`.   
When the XmlAttribute `response` is 0 and approved is _not_ true, the message will be the value of the XmlElement `message`.  |  
| `GatewayErrors[0].Source`  | string  | See notes.  | If there was an issue deserializing the XML: **TokenEx**   
When the XmlAttribute `response` is not 0: **Gateway**   
When the XmlAttribute `response` is 0 and approved is _not_ true: **Processor**  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Check Purchase
  * Check Refund
  * Check Void
  * TokenEx Error
  * Gateway Error
  * Processor Error
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi#example-responses)
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "creditCard": {  

    "number": "4470330769941000",  

    "expMonth": 6,  

    "expYear": 2028,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "ForeignRetailerIndicator": "F"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "amount": 1000,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "Amount": 10000, // amount causes the success  

  "Check": {  

    "AccountNumber": "91243784",  

    "RoutingNumber": "314074269",  

    "AccountType": "savings"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "fullName": "John > Doe",  

    "company": "Test Co.",  

    "address1": "123 & Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase response>"  

}  

```
```

{  

  "gateway": "VantivCNP",  

  "username": "Example",  

  "password": "Example",  

  "merchantId": "Example",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Refund response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"8872540754908664656267734\" reportGroup=\"Example\">\r\n    <litleTxnId>370278980609125975</litleTxnId>\r\n    <orderId>8872540754908664656267734</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:33:30.906</responseTime>\r\n    <authCode>83341</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MzcwMjc4OTgwNjA5MTI1OTc1OzE=",  

    "approvalCode": "83341",  

    "providerTransactionCode": "370278980609125975",  

    "approved": true  

  },  

  "referenceNumber": "24050815221719567401",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <saleResponse id=\"8772791531805768303072535\" reportGroup=\"whatever\">\r\n    <litleTxnId>247725905039698827</litleTxnId>\r\n    <orderId>8772791531805768303072535</orderId>\r\n    <response>000</response>\r\n    <message>Approved</message>\r\n    <responseTime>2024-05-08T20:50:41.542</responseTime>\r\n    <authCode>50809</authCode>\r\n  </saleResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjQ3NzI1OTA1MDM5Njk4ODI3OzI=",  

    "approvalCode": "50809",  

    "providerTransactionCode": "247725905039698827",  

    "approved": true  

  },  

  "referenceNumber": "24050815392796562309",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9408131457963676472375811\" reportGroup=\"Example\">\r\n    <litleTxnId>879429199258342890</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:32.706</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ODc5NDI5MTk5MjU4MzQyODkwOzM=",  

    "approvalCode": "",  

    "providerTransactionCode": "879429199258342890",  

    "approved": true  

  },  

  "referenceNumber": "24050815401975655217",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <creditResponse id=\"7428872428101282612278281\" reportGroup=\"Example\">\r\n    <litleTxnId>434456361896843396</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:39.707</responseTime>\r\n    <message>Approved</message>\r\n  </creditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDM0NDU2MzYxODk2ODQzMzk2OzQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "434456361896843396",  

    "approved": true  

  },  

  "referenceNumber": "24050815402684506238",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authReversalResponse id=\"7523862008558871422012774\" reportGroup=\"Example\">\r\n    <litleTxnId>045666219656553510</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:51:51.067</responseTime>\r\n    <message>Approved</message>\r\n  </authReversalResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDQ1NjY2MjE5NjU2NTUzNTEwOzU=",  

    "approvalCode": "",  

    "providerTransactionCode": "045666219656553510",  

    "approved": true  

  },  

  "referenceNumber": "24050815403756081678",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckSalesResponse id=\"8275901544583989549638546\" reportGroup=\"Example\">\r\n    <litleTxnId>430626529229864486</litleTxnId>\r\n    <orderId>8275901544583989549638546</orderId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:57:33.885</responseTime>\r\n    <message>Approved</message>\r\n  </echeckSalesResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NDMwNjI2NTI5MjI5ODY0NDg2OzY=",  

    "approvalCode": "",  

    "providerTransactionCode": "430626529229864486",  

    "approved": true  

  },  

  "referenceNumber": "24050815462046623336",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckCreditResponse id=\"0324247985691314093343825\" reportGroup=\"Example\">\r\n    <litleTxnId>035370170144769361</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T21:44:58.616</responseTime>\r\n    <message>Approved</message>\r\n  </echeckCreditResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MDM1MzcwMTcwMTQ0NzY5MzYxOzc=",  

    "approvalCode": "",  

    "providerTransactionCode": "035370170144769361",  

    "approved": true  

  },  

  "referenceNumber": "024050816482188215415",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <echeckVoidResponse id=\"6575647767934537637712102\" reportGroup=\"Example\">\r\n    <litleTxnId>641893858408209356</litleTxnId>\r\n    <response>000</response>\r\n    <responseTime>2024-05-08T20:54:13.245</responseTime>\r\n    <postDate>2024-05-08</postDate>\r\n    <message>Approved</message>\r\n  </echeckVoidResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjQxODkzODU4NDA4MjA5MzU2Ozg=",  

    "approvalCode": "",  

    "providerTransactionCode": "641893858408209356",  

    "approved": true  

  },  

  "referenceNumber": "24050815425943956983",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <captureResponse id=\"9661757399648823018610470\" reportGroup=\"Example\">\r\n    <litleTxnId>704387086796118342</litleTxnId>\r\n    <orderId />\r\n    <response>000</response>\r\n    <responseTime>2024-05-09T14:16:18.735</responseTime>\r\n    <message>Approved</message>\r\n  </captureResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "8012",  

        "message": "Could not parse gateway response",  

        "source": "TokenEx"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050909050490601558",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"1\" message=\"Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.\" />\r\n",  

    "gatewayErrors": [  

      {  

        "code": "1",  

        "message": "Error validating xml data against the schema: cvc-maxLength-valid: Value '12356' with length = '5' is not facet-valid with respect to maxLength '4' for type 'cvNumType'.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "24050815275988539202",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<litleOnlineResponse xmlns=\"http://www.litle.com/schema\" version=\"9.4\" response=\"0\" message=\"Valid Format\">\r\n  <authorizationResponse id=\"9347230991882538679764619\" reportGroup=\"Example\">\r\n    <litleTxnId>445792283125872902</litleTxnId>\r\n    <orderId>9347230991882538679764619</orderId>\r\n    <response>110</response>\r\n    <message>Insufficient Funds</message>\r\n    <responseTime>2024-05-08T20:37:00.293</responseTime>\r\n    <authCode>41010</authCode>\r\n  </authorizationResponse>\r\n</litleOnlineResponse>\r\n",  

    "gatewayErrors": [  

      {  

        "code": "110",  

        "message": "Insufficient Funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "41010",  

    "providerTransactionCode": "445792283125872902",  

    "approved": false  

  },  

  "referenceNumber": "24050815254681834429",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```