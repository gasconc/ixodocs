---
title: Worldpay WPG
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  Worldpay
  WPG'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpaywpg-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpaywpg-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpaywpg-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpaywpg-responses-direct-link-responses
- api
- xml
- 3ds
- ssl
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Worldpay WPG

# Worldpay WPG
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#overview "Direct link to Overview")
**Gateway Website** :   
**Developer Documentation** :   
**Default Currency** : USD
**Request Objects** : `BillingAddress`, `CreditCard`, `Check`, `OrderInfo`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Worldpay WPG forwards requests to the below endpoints.  
**Production** :   
**Sandbox** : 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | Worldpay WPG Mapping  | Notes  |  
| --- | --- | --- | --- |  
|  `gateway`*  | string  | N/A  | WorldpayWPG  |  
|  `username`*  | string  |  `merchantCode`  
Basic Auth username  | Merchant's Worldpay WPG   
Username  |  
|  `password`*  | string  | Basic Auth password  | Merchant's Worldpay WPG   
Password  |  
|  `orderId`*  | string  |  `order.orderCode`  
`orderModification.orderCode`  | Must have a unique value per order- i.e. the order code must not have been used previously.   
Can be up to 64 characters in length, or 25 characters if you are connecting to the US domestic acquiring platform. Recommend a minimum of 9 and a maximum of 20 for onward processing. Spaces, quotation marks, code brackets (< and >) and pipes ("|") are not allowed.  |  
|  `merchantId`*  | string  | `paymentService.merchantCode`  | Same value as username.  |  
| `amount`  | int  |  `order.amount.value`  
`modify.capture.value`  
`modify.refund.value`  | Transaction amount in whole units. Example: $10.00 USD should be sent as 1000.  |  
| `currencyCode`  | string  |  `order.amount.currencyCode`  
`modify.capture.currencyCode`  
`modify.refund.currencyCode`  | ISO 4217 three-letter alphabetic code for the currency.   
Defaults to "USD".  |  
| `creditCard.number`  | string  | `paymentDetails.CARD-SSL.cardNumber`  | Card's PAN or TokenEx token  |  
| `creditCard.FullName`  | string  | `paymentDetails.CARD-SSL.cardHolderName`  | Cardholder's full name.  |  
| `creditCard.expYear`  | int  | `paymentDetails.CARD-SSL.expiryDate.date.year`  | 4 digit year.  |  
| `creditCard.expMonth`  | int  | `paymentDetails.CARD-SSL.expiryDate.date.month`  | 1 or 2 digit month.  |  
| `creditCard.CVV`  | string  | `paymentDetails.CARD-SSL.cvc`  | 3 or 4 digit Card Verification Code. If the CVV has been associated with a TokenEx token, send a non-numeric value here, such as "cvv". The CVV associated with the token will be retrieved and forwarded.  |  
| `billingAddress.address1`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.address1`  | First line of the street address.  |  
| `billingAddress.address2`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.address2`  | Second line of the street address.  |  
| `billingAddress.city`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.city`  | City or locality.  |  
| `billingAddress.state`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.state`  | State or province.  |  
| `billingAddress.zip`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.zip`  | ZIP code or postal code.  |  
| `billingAddress.country`  | string  | `paymentDetails.CARD-SSL.cardAddress.address.country`  | Customer country. Input Alpha 3. Is converted to Alpha 2.  |  
| `orderInfo.InvoiceNumber`  | string  | `purchase.invoiceReferenceNumber`  | Invoice number associated with a transaction.  |  
| `orderInfo.CustomerId`  | string  | `purchase.customerReference`  | Customer reference for the purchase  |  
| `orderInfo.DiscountAmount`  | int  | `purchase.discountAmount.amount.value`  | The amount of discount for the order.  |  
| `orderInfo.ShippingAmount`  | int  | `purchase.shippingAmount.amount.value`  | The shipping cost for the order.  |  
| `orderInfo.DutyAmount`  | int  | `purchase.dutyAmount.amount.value`  | The duty on the total purchase amount for the order.  |  
| `tax.CardAcceptorTaxId`  | string  | `purchase.cardAcceptorTaxId`  | 9 digits for US domiciled merchants.  |  
| `tax.Amount`  | int  | `purchase.salesTax.Amount.Value`  | Amount of sales tax for the order.  |  
| `tax.Exempt`  | boolean  | `purchase.taxExempt`  | Set to true if salesTax is 0.  |  
| `threeDSecure.CAVV`  | string  | `info3DSecure.cavv`  | Cardholder authentication verification value returned by the 3DS authentication.  |  
| `threeDSecure.DSTransId`  | string  | `info3DSecure.dsTransactionId`  | Unique transaction identifier assigned by the Directory Server (DS) to identify a single 3DS transaction.  |  
| `threeDSecure.ECI`  | string  | `info3DSecure.eci`  | Electronic Commerce Indicator as returned by the 3DS authentication.  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `info3DSecure.threeDSVersion`  | The message version used for the 3DS authentication. Valid values: "2.1.0" or "2.2.0"  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | WPG Response Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `Approved`  | boolean  | `lastEvent`  | If primary request returns "AUTHORISED" or OK element is present.  |  
| `ProviderTransactionCode`  | string  | Request's `order.OrderCode`  | The order code from the request is echoed in the response from WPG and is the value used for transaction modification.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#example-responses "Direct link to Example Responses")
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

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```̌
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg#example-responses)
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username":"<Your Worldpay WPG API Login ID>",  

  "password":"<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "amount": 900,  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane, Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "invoiceNumber": "INV12233566",  

    "customerId": "CUST00000001",  

    "discountAmount": 0,  

    "shippingAmount": 100,  

    "dutyAmount": 0  

  },  

  "tax": {  

    "cardAcceptorTaxId": "VAT1999292",  

    "amount": 2400,  

    "exempt": false  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase response>",  

  "amount": 900  

}  

```
```

{  

  "testMode": true,  

  "gateway": "WorldpayWPG",  

  "username": "<Your Worldpay WPG API Login ID>",  

  "password": "<Your Worldpay WPG Transaction Key>",  

  "merchantId": "<Your Worldpay WPG API Login ID>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, or Purchase response>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_AUTHORISED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><cardNumber>4444********1111</cardNumber><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120717270023140526",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>AUTHORISED</lastEvent><CVCResultCode description=\"NOT SENT TO ACQUIRER\"/><AVSResultCode description=\"NOT SENT TO ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[Frank Walter]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><balance accountType=\"IN_PROCESS_CAPTURED\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></balance><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120717271835132784",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><captureReceived orderCode=\"1c8ba10a-beb2-4488-b2d9-7a5411938293\"><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></captureReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MWM4YmExMGEtYmViMi00NDg4LWIyZDktN2E1NDExOTM4Mjkz",  

    "approvalCode": "",  

    "providerTransactionCode": "1c8ba10a-beb2-4488-b2d9-7a5411938293",  

    "approved": true  

  },  

  "referenceNumber": "23120808171511663711",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><refundReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"><amount value=\"900\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/></refundReceived></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808182123943814",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><ok><cancelReceived orderCode=\"e98345ff-03f8-4bf3-97ed-f6118bcb6dfa\"/></ok></reply></paymentService>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZTk4MzQ1ZmYtMDNmOC00YmYzLTk3ZWQtZjYxMThiY2I2ZGZh",  

    "approvalCode": "",  

    "providerTransactionCode": "e98345ff-03f8-4bf3-97ed-f6118bcb6dfa",  

    "approved": true  

  },  

  "referenceNumber": "23120808184434058830",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><error code=\"4\"><![CDATA[Security violation]]></error></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "4",  

        "message": "Security violation"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "1f89e61a-2cf4-4b0b-9ce8-7484c0fa8db5",  

    "approved": false  

  },  

  "referenceNumber": "23120808395150707258",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE paymentService PUBLIC \"-//WorldPay//DTD WorldPay PaymentService v1//EN\"\n                                \"http://dtd.worldpay.com/paymentService_v1.dtd\">\n<paymentService version=\"1.4\" merchantCode=\"<MerchantId>\"><reply><orderStatus orderCode=\"70e54f7c-209b-4a9f-b7af-4903463fa025\"><payment><paymentMethod>VISA-SSL</paymentMethod><amount value=\"500\" currencyCode=\"USD\" exponent=\"2\" debitCreditIndicator=\"credit\"/><lastEvent>REFUSED</lastEvent><ISO8583ReturnCode code=\"55\" description=\"INVALID SECURITY CODE\"/><CVCResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AVSResultCode description=\"NOT CHECKED BY ACQUIRER\"/><AAVAddressResultCode description=\"UNKNOWN\"/><AAVPostcodeResultCode description=\"UNKNOWN\"/><AAVCardholderNameResultCode description=\"UNKNOWN\"/><AAVTelephoneResultCode description=\"UNKNOWN\"/><AAVEmailResultCode description=\"UNKNOWN\"/><cardHolderName><![CDATA[REFUSED55]]></cardHolderName><issuerCountryCode>GB</issuerCountryCode><riskScore value=\"71\"/></payment></orderStatus></reply></paymentService>\n",  

    "gatewayErrors": [  

      {  

        "code": "55",  

        "message": "INVALID SECURITY CODE"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "70e54f7c-209b-4a9f-b7af-4903463fa025",  

    "approved": false  

  },  

  "referenceNumber": "23120808440156836254",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```