---
title: dLocal
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-dlocal-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-dlocal-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-dlocal-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-dlocal-responses-direct-link-responses
- api
- 3ds
- 3d-secure
- tokenex
- ixopay
- recurring
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal
portal: tokenex
updated: '2026-07-01'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * dLocal

# dLocal
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`, `SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of dLocal forwards requests to the below endpoints.  
| Action  | Production  | Sandbox  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase  |   |   |  
| Card Capture  |   |   |  
| Card Refund  |   |   |  
| Card Void  | [https://api.dlocal.com/payments/[transactionId]/cancel](https://api.dlocal.com/payments/%5BtransactionId%5D/cancel)  | [https://sandbox.dlocal.com/payments/[transactionId]/cancel](https://sandbox.dlocal.com/payments/%5BtransactionId%5D/cancel)  |  
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#supported-request-parameters "Direct link to Supported Request Parameters")  
| Field Name  | Type  | dLocal Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | dLocal  |  
| `username`  | string  |  `x-login` header  | [See dLocal's documentation](https://docs.dlocal.com/reference/payins-security)  |  
| `password`  | string  |  `x-trans-key` header  | [See dLocal's documentation](https://docs.dlocal.com/reference/payins-security)  |  
| `privateKey`  | string  | secret key  | [See dLocal's documentation](https://docs.dlocal.com/reference/payins-security)  |  
| `idempotencyKey`  | string  |  `x-idempotency-key` header  | [See dLocal's documentation](https://docs.dlocal.com/reference/security-issuing#idempotent-requests)  |  
| `amount`  | numeric  | `amount`  | The amount in minor units. For example, 2000 means USD 20.00. Max length: 12 characters.  |  
| `billingAddress.address1`  | string  | `payer.address.street`  | User’s address street. Required in India and South Africa.  |  
| `billingAddress.address2`  | string  | `payer.address.number`  | User’s address number. Required in India and South Africa.  |  
| `billingAddress.city`  | string  | `payer.address.city`  | The name of the city.  |  
| `billingAddress.country`  | string  | `country`  | Three-Character Country Code ISO country code. TokenEx will convert to ISO 3166-1 alpha-2 code.  |  
| `billingAddress.fullName`  | string  | `payer.name`  | User's full name.  |  
| `billingAddress.state`  | string  | `payer.address.state`  | User's address state. Required in South Africa.  |  
| `billingAddress.zip`  | string  | `payer.address.zip_code`  | User’s address zip_code. Required in South Africa.  |  
| `billingAddress.email`  | string  | `payer.email`  | User’s email address.  |  
| `billingAddress.phone`  | string  | `payer.phone`  | User’s phone. Mandatory for Wallets in India. Also required for fraud prevention.  |  
| `creditCard.CVV`  | string  | `card.cvv`  | The card verification code.  |  
| `creditCard.descriptor`  | string  | `card.descriptor`  | Dynamic descriptor passthrough.  |  
| `creditCard.expMonth`  | numeric  | `card.expiration_month`  | The customer’s credit card expiration month. Format: 2 digits, zero-padded for single digits. Example: 03 = March, 11 = November  |  
| `creditCard.expYear`  | numeric  | `card.expiration_year`  | The customer’s credit card expiration year. Format: 4 digits. For example: 2030  |  
| `creditCard.fullName`  | string  | `card.holder_name`  | The name of the cardholder, as printed on the card.  |  
| `creditCard.number`  | string  | `card.number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `currencyCode`  | string  | `currency`  | The three-character ISO currency code. Alpha-3 ISO currency code  |  
| `customerIpAddress`  | string  | `payer.ip`  | User's IP address. Required for fraud prevention.  |  
| `orderInfo.customerId`  | string  | `payer.user_reference`  | Unique user id at the merchant side. Required for fraud prevention.  |  
| `orderInfo.orderId`  | string  | `order_id`  | ID given by the merchant in their system. Will show up in `gatewayResponse.merchantReferenceId`  |  
| `orderInfo.originalOrderId`  | string  | `original_order_id`  | For payment retries. ID given by the merchant in their system for the original transaction that was rejected and needs to be retried  |  
| `softDescriptors.merchantCategoryCode`  | string  | `card.descriptor`  | See SoftDescriptors callout below.  |  
| `softDescriptors.merchantCity`  | string  | `card.descriptor`  | See SoftDescriptors callout below.  |  
| `softDescriptors.merchantEmail`  | string  | `card.descriptor`  | See SoftDescriptors callout below.  |  
| `softDescriptors.merchantPhone`  | string  | `card.descriptor`  | See SoftDescriptors callout below.  |  
| `softDescriptors.merchantUrl`  | string  | `card.descriptor`  | See SoftDescriptors callout below.  |  
| `storedCredentials.credentialStored`  | bool  | `card.stored_credential_usage`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). True = USED. False = FIRST.   
  
[See dLocal's documentation](https://docs.dlocal.com/docs/merchant-initiated-transactions)  |  
| `storedCredentials.transactionType`  | string  | `card.stored_credential_type`  | Valid values:   
"recurring" = "SUBSCRIPTION",   
"installment" = "INSTALLMENTS",   
"unscheduled" = "UNSCHEDULED_CARD_ON_FILE".   
any other string value will be upper cased and forwarded.   
  
See [dLocal's documentation](https://docs.dlocal.com/docs/merchant-initiated-transactions)  |  
| `threeDSecure.CAVV`  | string  | `three_dsecure.cavv`  | The cardholder authentication value for the 3D Secure authentication session. The returned value is a base64-encoded 20-byte array.  |  
| `threeDSecure.DSTransId`  | string  | `three_dsecure.ds_transaction_id`  | The transaction identifier assigned by the 3DS Server for v2 authentication (36 characters, commonly in UUID format).  |  
| `threeDSecure.ECI`  | string  | `three_dsecure.eci`  | The electronic commerce indicator.  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `three_dsecure.three_dsecure_version`  | "2.1.0" or "2.2.0"  |  
| `threeDSecure.EnrollmentResponse`  | string  | `three_dsecure.enrollment_response`  | [See dLocal's documentation](https://docs.dlocal.com/reference/3d-secure-object)  |  
| `threeDSecure.AuthenticationResponse`  | string  | `three_dsecure.authentication_response`  | [See dLocal's documentation](https://docs.dlocal.com/reference/3d-secure-object)  |  
| `document`  | string  | `payer.document`  | [User’s personal identification number.](https://docs.dlocal.com/reference/country-reference)  |  
| `description`  | string  | `description`  | Payment description.  |  
| `notificationUrl`  | string  | `notification_url`  | URL where dLocal will send notifications associated to changes to this payment.  |  
Soft Descriptors - Descriptor Construction
dLocal API's `card.descriptor` is a free-text field. If values are sent in the TokenEx `softDescriptor` fields, they will be concatenated and space separated in the forwarded request. Alternatively, use the `descriptor` passthrough in `creditCard`.
Example usage:
```

"softDescriptors": {  

  "merchantName":"Bob Smalls",  

  "merchantPhone": "(876) 613-1270 x38785",  

  "merchantEmail":"bob@smalls.com",  

  "merchantUrl": "http://merchant.com"  

}  

```Forwarded output: `Bob Smalls (876) 613-1270 x38785 bob@smalls.com http://merchant.com`
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#example-requests "Direct link to Example Requests")
  * Card Authorize and Purchase
  * Card Capture, Refund, and Void
```

{  

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | dLocal Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `Approved`  | boolean  |  `status` and `statusCode`  | True if the `status` is PENDING, PAID, SUCCESS, CANCELLED, AUTHORIZED, or VERIFIED and its respective `statusCode` is returned.  |  
| `ProviderTransactionCode`  | string  | id  | Unique Identifier returned by dLocal for the transaction.  |  
| `TokenExTransactionCode`  | string  |  `id` and `currency`  | Base64 encoded `id;currency` from `rawResponse`  |  
| `MerchantReferenceId`  | string  | `orderId`  | Value sent in request's 'OrderInfo.OrderId' parameter  |  
| `GatewayErrors`  | object array  | ---  | See GatewayErrors callout below.  |  
| `GatewayErrors[0].Code`  | string  |  `code` or `statusCode`  | See GatewayErrors callout below.  |  
| `GatewayErrors[0].Message`  | string  |  `message` or `statusDetail`  | See GatewayErrors callout below.  |  
| `GatewayErrors[0].Source`  | string  | N/A  | Possible values: Unspecified, Gateway, Processor, TokenEx.  |  
GatewayErrors Code, Message, and Source assignment
There are three non-overlapping flows which will add an entry to `GatewayErrors`.
  1. If the response from dLocal is formatted in an unanticipated way, the following error will be returned.
Parsing Error
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```  2. When the `rawResponse` from dLocal contains a `status` of "REJECTED" and a `statusCode` between 300 and 399 (inclusive), the `gatewayErrors[0].code` is mapped to `statusCode`, the`gatewayErrors[0].message` is mapped to `statusDetail`, and the `gatewayErrors[0].source` will be "Processor".  
[dLocal - Payment Status Codes](https://docs.dlocal.com/reference/payment-status-codes)  
[dLocal - Refund Status Codes](https://docs.dlocal.com/reference/refund-status-codes)
  3. When the `rawResponse` from dLocal does not contain a `status` matching PENDING, PAID, SUCCESS, CANCELLED, AUTHORIZED, VERIFIED, or REJECTED or the `statusCode` is not present or does not match the respective status' code as defined in the two links above, the `gatewayErrors[0].code` is mapped to `code`, the`gatewayErrors[0].message` is mapped to `message`, and the `gatewayErrors[0].source` will be "Gateway".  
[dLocal - Payments Errors](https://docs.dlocal.com/reference/http-errors-payments)  
[dLocal - Refunds Errors](https://docs.dlocal.com/reference/http-errors-refunds)

## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

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

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

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

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

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

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal#example-responses)
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

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

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

  "amount": 1000,  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "currencyCode": "USD",  

  "document": "12345678",  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "Thiago Gabriel",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "thiago@example.com",  

    "fullName": "Thiago Gabriel",  

    "address1": "Servidao B-1",  

    "address2": "1106",  

    "city": "Volta Redonda",  

    "state": "Rio de Janeiro",  

    "zip": "27275-595",  

    "country": "BRA"  

  },  

  "orderInfo": {  

    "orderId": "fd14dfcc-b545-4695-9fbd-73a759f8efa5"  

  }  

}  

```
```

{  

  "gateway": "dLocal",  

  "username": "<Your dLocal x-login header>",  

  "password": "<Your dLocal x-trans-key header>",  

  "privateKey": "<Your dLocal secret key>",  

  "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT"  

}  

```
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:21:25.000+0000\",\"approved_date\":\"2023-10-11T21:21:27.000+0000\",\"status\":\"AUTHORIZED\",\"status_detail\":\"The payment was authorized.\",\"status_code\":\"600\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NGNiMzNjYi1iODY5LTQ1YWQtYWRmNi1kZGY2MDc2MTEyM2E7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212247171683",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:34:08.000+0000\",\"approved_date\":\"2023-10-11T21:34:09.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"0d79480b-3718-4b87-9525-d4fd29bc6ad4\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC1lZTUzOWIwZi01ZDA4LTQ4ZjEtYTkzNS0xZWFjNmY0Y2IyZGY7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-ee539b0f-5d08-48f1-a935-1eac6f4cb2df",  

    "approved": true,  

    "merchantReferenceId": "0d79480b-3718-4b87-9525-d4fd29bc6ad4"  

  },  

  "referenceNumber": "023101116340464569840",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5\",\"amount\":10.00,\"currency\":\"ARS\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:21:29.000+0000\",\"approved_date\":\"2023-10-11T21:21:29.000+0000\",\"status\":\"PAID\",\"status_detail\":\"The payment was paid.\",\"status_code\":\"200\",\"order_id\":\"859b6bca-1465-44e4-8b5a-7de3e9f62adb\",\"authorization_id\":\"T-15078-74cb33cb-b869-45ad-adf6-ddf60761123a\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC03NDcyYzBjYS04YjdjLTQzNjktYWM4NC04NzRlNzJmMTRjZDU7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-7472c0ca-8b7c-4369-ac84-874e72f14cd5",  

    "approved": true,  

    "merchantReferenceId": "859b6bca-1465-44e4-8b5a-7de3e9f62adb"  

  },  

  "referenceNumber": "023101116212625269807",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2\",\"payment_id\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\",\"status\":\"SUCCESS\",\"currency\":\"ARS\",\"created_date\":\"2023-10-11T21:24:17.000+0000\",\"amount\":10.00,\"status_code\":200,\"status_detail\":\"The refund was paid.\",\"amount_refunded\":10.00,\"id_payment\":\"T-15078-404b3375-8c07-43ad-940a-2c35417afbbd\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UkVGLTE1MDc4LWE0YmMxOWI3LTkyYTEtNDQxYi1iZGZmLWU4ZDllOTRjOGNhMjtBUlM=",  

    "approvalCode": "",  

    "providerTransactionCode": "REF-15078-a4bc19b7-92a1-441b-bdff-e8d9e94c8ca2",  

    "approved": true  

  },  

  "referenceNumber": "023101116241377572552",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"VI\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"created_date\":\"2023-10-11T21:25:34.000+0000\",\"approved_date\":\"2023-10-11T21:25:34.000+0000\",\"status\":\"CANCELLED\",\"status_detail\":\"The payment was cancelled.\",\"status_code\":\"400\",\"order_id\":\"d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VC0xNTA3OC05ZTc0MDIyMS1iMDg0LTQxMDUtYjhmYS1iOGI0ZDcwZWJjNzM7QVJT",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-9e740221-b084-4105-b8fa-b8b4d70ebc73",  

    "approved": true,  

    "merchantReferenceId": "d1d0ae20-ec18-4f0a-8e0b-f1e4329f3b16"  

  },  

  "referenceNumber": "023101116253532972169",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"code\":3001,\"message\":\"Invalid credentials\"}",  

    "gatewayErrors": [  

      {  

        "code": "3001",  

        "message": "Invalid credentials",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023101116355507248091",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "403"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"id\":\"T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2\",\"amount\":10.00,\"currency\":\"ARS\",\"payment_method_id\":\"CARD\",\"payment_method_type\":\"CARD\",\"payment_method_flow\":\"DIRECT\",\"country\":\"AR\",\"card\":{\"holder_name\":\"John Doe\",\"expiration_month\":6,\"expiration_year\":2026,\"brand\":\"VI\",\"last4\":\"1111\",\"installments_responsible\":\"customer\",\"verify\":false},\"three_dsecure\":{},\"created_date\":\"2023-10-11T21:35:54.000+0000\",\"status\":\"REJECTED\",\"status_detail\":\"Rejected by bank.\",\"status_code\":\"301\",\"order_id\":\"76b479bc-9179-47f6-9315-fc5554c38aba\",\"description\":\"301\"}",  

    "gatewayErrors": [  

      {  

        "code": "301",  

        "message": "Rejected by bank.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "T-15078-512bde5b-079e-4ad4-ab65-762981ca4fd2",  

    "approved": false,  

    "merchantReferenceId": "76b479bc-9179-47f6-9315-fc5554c38aba"  

  },  

  "referenceNumber": "023101116355088643315",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```