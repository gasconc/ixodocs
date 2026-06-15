---
title: EBANX
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-ebanx-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-ebanx-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-ebanx-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-ebanx-responses-direct-link-responses
- api
- 3ds
- tokenex
- ixopay
- acquirer
- recurring
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx
portal: tokenex
updated: '2026-06-15'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * EBANX

# EBANX
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#overview "Direct link to Overview")
**Account Management:**   
**Developer Documentation:**  
  
  
  
**Default Currency** : USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of EBANX forwards requests to the below endpoints.  
**Production** :   
**Sandbox** : 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#supported-request-parameters "Direct link to Supported Request Parameters")
Type column indicates max length  
| Field Name  | Type  | Direct API Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | EBANX  |  
| `integrationKey`  | string(100)  | `integration_key`  | EBANX unique and secret Integration Key  |  
| `mode`  | string(4)  | `mode`  | Defaults to "full" if left blank on Authorize/Purchase operations.  |  
| `operation`  | string(7)  | `operation`  | Used in Authorize, Purchase, and Refund.   
Defaults to "request" if left blank.  |  
| `tokenExTransactionCode`  | string  | N/A  | Used for processing capture, refund, or void operations  |  
| `merchantCaptureCode`  | string(200)  | `merchant_capture_code`  | Optional identifier for the payment capture.  |  
| `merchantRefundCode`  | string(40)  | `merchant_refund_code`  | The ID of the refund on the merchant system.  |  
| `description`  | string(500)  | `description`  | Brief summary of the operation. Used in Refund.  |  
| `refundId`  | string(20)  | `refund_id`  | The ID of the refund to be canceled  |  
| `items`  | [ ]  | `payment.items`  | Array containing the items of the order  |  
| `items.Sku`  | string(20)  | `payment.items.sku`  | SKU of the item  |  
| `items.Name`  | string(100)  | `payment.items.name`  | Name of the item  |  
| `items.Description`  | string(200)  | `payment.items.description`  | Description of the item  |  
| `items.UnitPrice`  | numeric  | `payment.items.unit_price`  | Smallest values of currency specified by CurrencyCode. Converted to format of CurrencyCode. Example for USD: input 1000 for an output of $10.00.  |  
| `items.Quantity`  | numeric  | `payment.items.quantity`  | Quantity of each item  |  
| `items.Type`  | string(50)  | `payment.items.type`  | Type of the item  |  
| `document`  | string(32)  | `payment.document`  | Customer identification document number  |  
| `merchantPaymentCode`  | string(128)  | `payment.merchant_payment_code`  | The payment hash Merchant Payment Code (unique merchant ID).  |  
| `userValue1`  | string(20)  | `payment.user_value_1`  | Parameter that can be used by the merchant to associate additional info to the payment.  |  
| `orderInfo.orderId`  | string(40)  | `payment.order_number`  | An optional identifier set by the merchant. There can be multiple payments with the same order number.  |  
| `userValue1`  | string(20)  | `payment.user_value_1`  | Parameter that can be used by the merchant to associate additional info to the payment.  |  
| `userValue3`  | string(20)  | `payment.user_value_3`  | Parameter that can be used by the merchant to associate additional info to the payment.  |  
| `userValue4`  | string(20)  | `payment.user_value_4`  | Parameter that can be used by the merchant to associate additional info to the payment.  |  
| `userValue5`  | string(20)  | `payment.user_value_5`  | Parameter that can be used by the merchant to associate additional info to the payment.  |  
| `paymentTypeCode`  | string(3)  | `payment.payment_type_code`  | The code of the payment method.  |  
| `amount`  | numeric  | `payment.amount_total`  | Smallest values of currency specified by CurrencyCode. Converted to format of CurrencyCode. Example for USD: input 1000 for an output of $10.00.  |  
| `currencyCode`  |   | `payment.currency_code`  | Use the ISO 4217 three-letter alphabetic code for the currency.  |  
| `dueDate`  | string(10)  | `payment.due_date`  | The due date of payment slips  |  
| `subAccountName`  | numeric  | `payment.installments`  | The number of installments of the payment. Defaults to 1  |  
| `note`  | string(200)  | `payment.note`  | A note about the payment. The value of this parameter will be shown along with payment details.  |  
| `subAccountName`  | string(32)  | `payment.sub_account.name`  | Name of the sub account  |  
| `subAccountImageUrl`  | string(2000)  | `payment.notification_url`  | The URL to send notifications for this payment. If this field is filled, EBANX will notify using this URL instead of the configured one.  |  
| `eftCode`  | string(32)  | `payment.eft_code`  | Code for the customer’s bank. Only required for Colombia payments  |  
| `redirectUrl`  | string(2000)  | `payment.redirect_url`  | The URL to redirect the customer after the payment in the EBANX Payment Page. If this field is filled, EBANX will redirect the customer using this URL instead of the configured one.  |  
| `personType`  | string(8)  | `payment.person_type`  | Optional parameter that can be used to identify the type of customer: "business" or "personal"  |  
| `responsibleName`  | string(100)  | `payment.responsible.name`  | Responsible name. Required if person_type = business.  |  
| `customerIpAddress`  | string  | `payment.customer_ip`  | Customer’s IP address. It may be used by an anti-fraud tool.  |  
| `deviceId`  | string  | `payment.device_id`  | Unique ID to identify the customer’s device.  |  
|  `billingAddress.FirstName`  
`billingAddress.LastName`  | string  | `payment.name`  | If left empty, this field's default value will be populated from billingAddress.FirstName + billingAddress.LastName. Sum of both fields cannot be greater than 50 characters  |  
| `billingAddress.FullName`  | string  | `payment.name`  | Alternative entry for name.  |  
| `billingAddress.Address1`  | string  | `payment.street_number`  | Customer street number.  |  
| `billingAddress.Address2`  | string(100)  | `payment.address`  | Extra address field for complimentary data.  |  
| `billingAddress.City`  | string(80)  | `payment.city`  | Customer city  |  
| `billingAddress.State`  | string  | `payment.state`  | Customer state/region/province  |  
| `billingAddress.Country`  | string  | `payment.country`  | Customer country. Input Alpha 3. Converted to Alpha 2.  |  
| `billingAddress.Zip`  | string(8)  | `payment.zipcode`  | Customer zip code  |  
| `billingAddress.Email`  | string(100)  | `payment.email`  | Customer email address  |  
| `billingAddress.Phone`  | string  | `payment.card.card_number`  | Customer phone number  |  
| `creditCard`  | object  | `payment.card`  | Use for either credit or debit card transactions  |  
| `creditCard.Number`  | string  | `payment.card.card_number`  | TokenEx Token or PAN  |  
| `creditCard.CVV`  | string  | `payment.card.card_cvv`  | Card security code.  |  
|  `creditCard.FirstName`  
`creditCard.LastName`  | string  | `payment.card.card_name`  | Parameters are combined and space separated.  |  
| `creditCard.FullName`  | string  | `payment.card.card_name`  | Alternative entry for name  |  
| `creditCard.ExpMonth`  | string(128)  | `payment.card.card_due_date`  | MM. Combined with CreditCard.ExpYear to equal MM/YYYY  |  
| `creditCard.ExpYear`  | numeric  | `payment.card.card_due_date`  | YYYY. Combined withe CreditCard.ExpMonth to equal MM/YYYY  |  
| `creditCard.EBANXToken`  | string  | `payment.card.token`  | EBANX token used for recurring billing.  |  
| `threeDSecure.ECI`  | string  | `payment.card.threeds_eci`  | Electronic Commerce Indicator  |  
| `threeDSecure.CAVV`  | string  | `payment.card.threeds_cryptogram`  | Cardholder Authentication Verification Value  |  
| `threeDSecure.XID`  | string  | `payment.card.threeds_xid`  | Unique transaction Identification number to identify the 3DS transaction  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `payment.card.threeds_version`  | 3DS Version  |  
| `threeDSecure.DSTransId`  | string  | `payment.card.threeds_trxid`  | Directory Server Transaction ID  |  
| `createEBANXToken`  | boolean  | `payment.create_token`  | Generates a token for recurring billing.  |  
| `softDescriptors.MerchantName`  | string  | `softDescriptor`  | See note below.  |  
| `softDescriptors.MerchantPhone`  | string  | `softDescriptor`  | See note below.  |  
| `softDescriptors.MerchantEmail`  | string  | `softDescriptor`  | See note below.  |  
| `softDescriptors.MerchantUrl`  | string  | `softDescriptor`  | See note below.  |  
| `softDescriptors.MerchantCategoryCode`  | string  | `softDescriptor`  | See note below.  |  
| `softDescriptors.MerchantCity`  | string  | `softDescriptor`  | See note below.  |  
| `storedCredentials.Initiator`  | string  | `card_cvv_mode`  | Valid values: "cardholder" or "merchant".  |  
Soft Descriptors - SoftDescriptor Construction
EBANX API's softDescriptor is a free-text field. If values are sent in the TokenEx SoftDescriptors fields, they will be concatenated and space separated in the forwarded request. Alternatively, use the softDescriptor passthrough in OrderInfo.
Example Usage:
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```Forwarded output: `Bob Smalls (876) 613-1270 x38785 bob@smalls.com http://merchant.com 1515151515 Las Vegas`
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Direct API Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approved`  | boolean  | N/A  | If EBANX returns an authcode, this field will be true.  |  
| `approvalCode`  | string(40)  | `authcode`  | Transaction authentication code from the processor.  |  
| `providerTransactionCode`  | string  | `hash`  | The payment hash (EBANX unique identifier).  |  
| `merchantReferenceId`  | string  | `order_number`  | The value sent in `orderInfo.orderId`.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

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

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

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

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

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

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx#example-responses)
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

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

  "merchantUrl": "http://merchant.com",  

  "merchantCategoryCode": "1515151515",  

  "merchantCity": "Las Vegas"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantPaymentCode": "ABC00001",  

  "document": "853.513.468-93",  

  "creditCard": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "number": "378282246310005",  

    "cvv": "123",  

    "expMonth": 6,  

    "expYear": 2023  

  },  

  "billingAddress": {  

    "firstName": "José",  

    "lastName": "Silva",  

    "address1": "1040",  

    "address2": "Rua teste",  

    "city": "Rio de Janeiro",  

    "state": "RJ",  

    "zip": "61919",  

    "country": "BRA",  

    "phone": "8522847035",  

    "email": "jose@example.com"  

  },  

  "softDescriptors": {  

    "merchantName": "Bob Smalls",  

    "merchantPhone": "(876) 613-1270 x38785",  

    "merchantEmail": "bob@smalls.com",  

    "merchantUrl": "http://merchant.com",  

    "merchantCategoryCode": "1515151515",  

    "merchantCity": "Las Vegas"  

  },  

  "amount": 1000,  

  "currencyCode": "BRL"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "merchantCaptureCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "amount": 1000  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "amount": 1000,  

  "description": "water damage",  

  "merchantRefundCode": "ABC00001",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase or Capture call>"  

}  

```
```

{  

  "gateway": "EBANX",  

  "testMode": true,  

  "integrationKey": "<Your EBANX Integration Key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, or Purchase, Capture, or Refund call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"PE\",\"status_date\":null,\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":true},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515012312723182",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515052947124633",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359\",\"country\":\"br\",\"merchant_payment_code\":\"example\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:06:46\",\"open_date\":\"2023-12-05 21:01:24\",\"confirm_date\":\"2023-12-05 21:06:46\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"23643\"},\"pre_approved\":true,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjhmYTRlOTkyNGQ1YWMxZWZhNjVhYzBjNjI0YTcxM2FkZTA5NGQxNDE3MzU5O2V4YW1wbGU=",  

    "approvalCode": "23643",  

    "providerTransactionCode": "656f8fa4e9924d5ac1efa65ac0c624a713ade094d1417359",  

    "approved": true  

  },  

  "referenceNumber": "23120515064620722884",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a\",\"country\":\"br\",\"merchant_payment_code\":\"example2\",\"order_number\":null,\"status\":\"CO\",\"status_date\":\"2023-12-05 21:05:30\",\"open_date\":\"2023-12-05 21:05:29\",\"confirm_date\":\"2023-12-05 21:05:30\",\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"63258\"},\"pre_approved\":true,\"capture_available\":false,\"refunds\":[{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null}]},\"refund\":{\"id\":\"9785428953\",\"merchant_refund_code\":null,\"status\":\"RE\",\"request_date\":\"2023-12-05 21:10:02\",\"pending_date\":null,\"confirm_date\":null,\"cancel_date\":null,\"amount_ext\":\"10.00\",\"description\":\"defect in product\",\"email_quantity\":0,\"email_first_date\":null,\"email_last_date\":null,\"bank_info_customer_filled\":0,\"bank_info_customer_filled_date\":null},\"operation\":\"refund\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkwOTkyZTdmNmZmNjBhZTQzMDU0MDIwMTBiY2E5OGI3ZWI1Nzk1MWY5ZDVhO2V4YW1wbGUy",  

    "approvalCode": "63258",  

    "providerTransactionCode": "656f90992e7f6ff60ae4305402010bca98b7eb57951f9d5a",  

    "approved": true  

  },  

  "referenceNumber": "23120515100284997369",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4\",\"country\":\"br\",\"merchant_payment_code\":\"example1\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-05 21:10:36\",\"open_date\":\"2023-12-05 21:10:22\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-08\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"OK\",\"description\":\"Accepted\",\"authcode\":\"44515\"},\"pre_approved\":false,\"capture_available\":false},\"operation\":\"cancel\",\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NjU2ZjkxYmU1M2ZjMTIxMDUzMTgwN2I3ZTdiMWM2OTZkMjgyNDU5YTBmZjNhNmE0O2V4YW1wbGUx",  

    "approvalCode": "44515",  

    "providerTransactionCode": "656f91be53fc1210531807b7e7b1c696d282459a0ff3a6a4",  

    "approved": true  

  },  

  "referenceNumber": "23120515103561530597",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":\"ERROR\",\"status_code\":\"BP-DR-0\",\"status_message\":\"Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)\"}",  

    "gatewayErrors": [  

      {  

        "code": "BP-DR-0",  

        "message": "Payment already exists with merchant_payment_code: example1 (created on 2023-12-05 21:10:22, status is CA)",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120815505323000961",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"payment\":{\"hash\":\"65738fa85f187f642cf59ada93b69160a2d7c74066686b40\",\"country\":\"br\",\"merchant_payment_code\":\"example4\",\"order_number\":null,\"status\":\"CA\",\"status_date\":\"2023-12-08 21:50:32\",\"open_date\":\"2023-12-08 21:50:32\",\"confirm_date\":null,\"transfer_date\":null,\"amount_br\":\"58.52\",\"amount_ext\":\"10.00\",\"amount_iof\":\"0.22\",\"currency_rate\":\"5.8300\",\"currency_ext\":\"USD\",\"due_date\":\"2023-12-11\",\"instalments\":\"1\",\"payment_type_code\":\"visa\",\"details\":{\"billing_descriptor\":\"TOKENEX\"},\"transaction_status\":{\"acquirer\":\"EBANX\",\"code\":\"NOK\",\"description\":\"Insufficient funds\"},\"pre_approved\":false,\"capture_available\":false},\"status\":\"SUCCESS\"}",  

    "gatewayErrors": [  

      {  

        "code": "NOK",  

        "message": "Insufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "65738fa85f187f642cf59ada93b69160a2d7c74066686b40",  

    "approved": false  

  },  

  "referenceNumber": "2312081550315893143",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```