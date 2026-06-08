---
title: BluePay
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-bluepay-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-bluepay-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-bluepay-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-bluepay-responses-direct-link-responses
- api
- tokenex
- ixopay
- refund
- capture
- void
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay
portal: tokenex
updated: '2026-06-08'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * BluePay

# BluePay
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#overview "Direct link to Overview")
**Account Management:**   
**Developer Documentation:**  (bp10emu) **Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `Check`,`OrderInfo`
**Gateway Endpoints**  
This implementation of BluePay forwards requests to the below endpoints.  
**Production:**   
**Sandbox:** 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field type column indicates max length  
| Field Name  | Type  | bp10emu Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | BluePay  |  
|  `merchantId`*  | string(12)  | `MERCHANT`  | BluePay Account ID  |  
|  `privateKey`*  | string  | Used in TPS Hash  | BluePay Secret Key  |  
| `duplicateOverride`  | boolean  | `DUPLICATEOVERRIDE`  | Set to true to turn off duplicate scrubbing for a transaction. Set to false or leave blank to process with duplicate scrubbing  |  
| `responseVersion`  | string  | `RESPONSEVERSION`  | 1-8+, All higher versions include lower versions. Defaults to 1 if left blank  |  
| `description`  | string  | `COMMENT`  | Brief summary of the transaction  |  
| `amount`  | numeric  | `AMOUNT`  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderId`  | string(128)  | `ORDER_ID`  | An identifier for the payment from the merchant's system  |  
| `docType`  | string  | `DOC_TYPE`  | ACH documentation type of agreement with payer: PPD, CCD, WEB, TEL. Defaults to WEB  |  
| `customerIpAddress`  | string  | `CUSTOMER_IP`  | The IP address of the customer's computer. When the customer does not post their payment directly to the BluePay Gateway, setting this value is helpful to take full advantage of BluePay's fraud prevention systems.  |  
| `orderInfo.PurchaseOrderNumber`  | string  | `LV2_ITEM_CUST_PO`  | Purchase Order Number  |  
| `orderInfo.InvoiceNumber`  | string(10)  | `INVOICE_ID`  | An identifier for the Invoice in Merchant's system  |  
| `orderInfo.CustomerId`  | string(30)  | `LV2_ITEM_CUSTOMER_NUMBER`  | Unique identifier for customer within Merchant's system  |  
| `creditCard.Number`  | string  | `CC_NUM`  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `creditCard.ExpMonth`  | numeric  | `CC_EXPIRES`  | ExpMonth and ExpYear (last two digits of passed four digits) are concatenated within Payment Services' BluePay Integration and passed into CC_EXPIRES. Example: 01 2025 becomes 0125  |  
| `creditCard.ExpYear`  | numeric  | `CC_EXPIRES`  | ExpMonth and ExpYear (last two digits of passed four digits) are concatenated within Payment Services' BluePay Integration and passed into CC_EXPIRES. Example: 01 2025 becomes 0125  |  
| `creditCard.Cvv`  | string  | `CVCCVV2`  | Card verification value  |  
| `tax.Amount`  | numeric(6)  | `AMOUNT_TAX`  | Tax amount in cents. Example: $10.00 should be sent as 1000  |  
| `check.AccountNumber`  | string  | `ACH_ACCOUNT`  | ACH account number or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `check.RoutingNumber`  | string  | `ACH_ROUTING`  | Contains the nine-digit bank routing ("ABA") number for the customer's bank account.  |  
| `check.AccountType`  | string  | `ACH_ACCOUNT_TYPE`  |  **Valid input Values**  
1 or Checking  
2 or Savings  
3 or GeneralLedger  
**bp10emu mapping**  
Checking - C  
Savings - S  
GeneralLedger - G  |  
| `billingAddress.Phone`  | string  | `PHONE`  | Phone number for contact at billing address  |  
| `billingAddress.Email`  | string  | `EMAIL`  | Email address for contact at billing address  |  
| `billingAddress.FullName`  | string  | `NAME`  | Name associated with customer’s billing address. If left empty, field will default to billingAddress.FirstName + billingAddress.Lastname.  |  
| `billingAddress.FirstName`  | string  | `NAME`  | Name associated with customer’s billing address. FirstName and Lastname are space-separated and sent in NAME if FullName is empty.  |  
| `billingAddress.LastName`  | string  | `NAME`  | Name associated with customer’s billing address. FirstName and Lastname are space-separated and sent in NAME if FullName is empty.  |  
| `billingAddress.Company`  | string  | `COMPANY_NAME`  | Name of company at billing address  |  
| `billingAddress.Address1`  | string  | `ADDR1`  | First line of customer’s billing address  |  
| `billingAddress.Address2`  | string  | `ADDR2`  | Second line of customer’s billing address  |  
| `billingAddress.City`  | string  | `CITY`  | City of customer’s billing address  |  
| `billingAddress.State`  | string  | `STATE`  | State of customer’s billing address  |  
| `billingAddress.Zip`  | string  | `ZIPCODE`  | Zip code of customer’s billing address  |  
| `billingAddress.Country`  | string  | `COUNTRY`  | [Alpha-3 ISO country code](https://www.iso.org/iso-3166-country-codes.html)  |  
| `rebill.ExternalRebill`  | string  | `F_REBILLING`  | Rebilling flag. Only used for non-BluePay generated rebillings to identify the transaction as a rebilling. Set value to "1" for rebill transaction.  |  
| `rebill.BluePayRebill`  | string  | `REBILLING`  | "1" for yes, "0" for no. Rebilling will be managed by BluePay and can be configured using the other rebilling fields below.  |  
| `rebill.StartDate`  | string  | `REB_FIRST_DATE`  | The date of the first rebilling. Two valid formats as follows:  
"YYYY-MM-DD HH:MM:SS" Hours, minutes, and seconds are optional.  
"XX UNITS" marked from the time of the transaction. Examples: 10 DAYS, 1 MONTH, 1 YEAR  |  
| `rebill.Frequency`  | string  | `REB_EXPR`  | The period of time in-between rebillings. "XX UNITS" marked from the time of the transaction. Examples: 10 DAYS, 1 MONTH, 1 YEAR  |  
| `rebill.Cycles`  | string  | `REB_CYCLES`  | Number of times to rebill. Leaving blank or not sending will cause the rebillings to continue until canceled.  |  
| `rebill.Amount`  | int  | `REB_AMOUNT`  | Amount to rebill. Defaults to amount of transaction for rebillings. $10.00 should be sent as 1000  |  
| `rebill.IsCreditOrSale`  | string  | `REB_IS_CREDIT`  | Field to indicate whether the rebill transaction is a SALE or CREDIT.  
The valid values are:  
"1" for CREDIT  
"0" For SALE (default).  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Authorize/Purchase w/ External Rebilling
  * Card Authorize/Purchase w/ BluePay Rebilling
  * Card Capture
  * Card Refund
  * Card Void
  * ACH Purchase
  * ACH Refund
  * ACH Void
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | bp10emu Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approvalCode`  | string  | `AUTH_CODE`  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | Result  | If the Result field in the GatewayResponse.RawResponse is APPROVED, this field will be true.  |  
| `providerTransactionCode`  | string  | `RRNO`  | Transaction ID of the newly run transaction.  |  
Parsing the bp10emu Raw Response
The rawResponse field for BluePay's bp10emu contains a URL-Encoded string of key-values separated by &.' + These fields are in unpredictable orders and values should be read via regex. A suggested regex for finding the values of certain fields: `(?\<=([?]\|[&])FIELD_NAME=)([^&]+)`  
**Demo** : 
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#example-responses "Direct link to Example Responses")
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

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay#example-responses)
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "externalRebill": "1"  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay Secret Key>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "rebill": {  

    "bluePayRebill": "1",  

    "startDate": "7 DAYS",  

    "frequency": "1 MONTH",  

    "cycles": "2",  

    "amount": 900  

  },  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2024,  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "purchaseOrderNumber": "ABC00001",  

    "invoiceNumber": "ABC00001",  

    "customerId": "ABC00001"  

  },  

  "tax": {  

    "amount": 100  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "check": {  

    "accountNumber": "91243783",  

    "routingNumber": "800483636",  

    "accountType": "Checking"  

  },  

  "billingAddress": {  

    "phone": "555-555-5555",  

    "email": "john@doe.dev",  

    "name": "John Doe",  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Suite #40A",  

    "city": "Edmond",  

    "state": "OK",  

    "zip": "74100",  

    "country": "USA"  

  },  

  "docType": "WEB",  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "amount": 900,  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gateway": "BluePay",  

  "testMode": true,  

  "merchantId": "<Your BluePay AccountId>",  

  "privateKey": "<Your BluePay SecretKey>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  

  "duplicateOverride": true,  

  "responseVersion": "5",  

  "description": "Wide-ruled notebook paper",  

  "orderId": "ABC00001",  

  "orderInfo": {  

    "invoiceNumber": "ABC00001"  

  },  

  "customerIpAddress": "130.37.201.117"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A45%3A09.033947&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=AUTH&STATUS=1&RRNO=200454159023&CVV2_RESULT=_&SOURCE_ID=200454159023&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454159023&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&EMV_APPLICATION=&BANK_NAME=NETWORK%20ONLY&CITY=Ornburgh&F_WILL_CAPTURE=0&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454159023&PAYMENT_TYPE=CREDIT&AVS=1&MODE=TEST&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&PROCESSOR_ID=100553863525&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=8DD3BAF139458DE9DEB1EC93F0E419301AF80EBE076FC6FE0ACECFB80E1E96B396A346868594DC9F4219843B672158955976F470C178D1DB12A69DAAE78B4B25&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&COUNTRY=USA&EMV_APPNAME=&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Auth&CUST_EMAIL=Mary0%40gmail.com&REBID=&CONNECTED_IP=20.37.143.182&ID=200454159023&Result=APPROVED&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTU5MDIz",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454159023",  

    "approved": true  

  },  

  "referenceNumber": "23113013450721664267",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&REMOTE_IP=20.37.143.182&CARD_COUNTRY=NGA&ADDR1=4358%20Delia%20Motorway&EMV=&Result=APPROVED&CUSTOMER_CODE=200454179879&AVS=4&CARD_TYPE=MC&EMV_APPLICATION=&CVV2_STATUS=1&OWNER_USER_ID=100553863406&F_CARD_PRESENT=0&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&F_REBILL_MASTER=0&RRNO=200454179879&ORDER_ID=200454179879&F_UNHELD=0&PAYMENT_TYPE=CREDIT&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&EMAIL=Mandy.Donnelly84%40hotmail.com&F_BYPASS_AUTH=0&REBID=&AVS_RESULT=4&FLAGS=T&AMOUNT=9.00&ACCOUNT_NAME=DEMO-tokenex&ZIP=28253-2429&CONNECTED_IP=20.37.143.182&FANCY_STATUS=Approved&SOURCE_ID=200454179879&AUTH_CODE=RAYCJP&CVV2_RESULT=_&LOGIN_ACCOUNT_ID=100553863405&TRANS_ID=200454179879&STATUS=1&FRAUD_SCORE=0&MODE=TEST&TPS_HASH_TYPE=HMAC_SHA512&F_WILL_CAPTURE=0&TRANS_TYPE=SALE&EMV_APPNAME=&PROCESSOR_ID=100553863525&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&ISSUE_DATE=2023-11-30%2013%3A56%3A29.765734&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&AMOUNT_TAX=0.00&BP_STAMP=00ADC5DF02E0FF2DE4A29DB766D7761D7C8DC17528FC02FC725630C02048B8BA06CF3E4C35339851E5E676133124C119293DE6D83E11F0421E5746A5EFB92408&STATE=Delaware&BACKEND_ID=084472311187&ORIG_IS_SETTLED=0&CVV2=_&INVOICE_ID=200454179879&COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&COUNTRY=USA&ID=200454179879&BANK_NAME=ZENITH%20BANK&ORIGIN=bp10emu&CITY=South%20Kaitlin&MESSAGE=Approved%20Sale&CARD_EXPIRE=0325",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTc5ODc5",  

    "approvalCode": "RAYCJP",  

    "providerTransactionCode": "200454179879",  

    "approved": true  

  },  

  "referenceNumber": "23113013562966061620",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?AVS_RESULT=1&REBID=&ACCOUNT_NAME=DEMO-tokenex&ZIP=96592-2764&AMOUNT=9.00&FLAGS=T&SOURCE_ID=200454159023&FANCY_STATUS=Approved&CONNECTED_IP=20.37.143.182&ORIG_AMOUNT=9.00&F_REBILL_MASTER=0&RRNO=200454185269&ORDER_ID=200454159023&F_BYPASS_AUTH=0&CUST_EMAIL=Mary0%40gmail.com&EMAIL=Mary0%40gmail.com&F_UNHELD=0&PAYMENT_TYPE=CREDIT&AVS=1&CUSTOMER_CODE=200454185269&CARD_TYPE=MC&F_CARD_PRESENT=0&OWNER_USER_ID=100553863406&CVV2_STATUS=0&EMV_APPLICATION=&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&REMOTE_IP=20.37.143.182&EMV=&Result=APPROVED&ADDR1=173%20Antonio%20Pike&CARD_COUNTRY=USA&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&INVOICE_ID=200454159023&CVV2=_&ORIG_IS_SETTLED=0&BANK_NAME=NETWORK%20ONLY&ID=200454185269&COUNTRY=USA&MESSAGE=Approved%20Capture&CARD_EXPIRE=0324&CITY=Ornburgh&ORIGIN=bp10emu&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&ISSUE_DATE=2023-11-30%2014%3A00%3A07.023067&BP_STAMP=20656F85F34E4DDB6CAC1B96FB1B7D3F888897DE674B9A7AF5FFA8DA820B6CCEA9CA77ED8C27E92A7556554D4426CE9D1941791F412AD6CC707C323BE9F1EFA4&AMOUNT_TAX=0.00&MASTER_ID=200454159023&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=006571706282&STATE=Hawaii&TPS_HASH_TYPE=HMAC_SHA512&MODE=TEST&FRAUD_SCORE=0&PROCESSOR_ID=100553863525&F_WILL_CAPTURE=0&TRANS_TYPE=CAPTURE&EMV_APPNAME=&ORIG_TTYPE=AUTH&LOGIN_ACCOUNT_ID=100553863405&CVV2_RESULT=_&AUTH_CODE=BARPUD&STATUS=1&TRANS_ID=200454185269",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1MjY5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454185269",  

    "approved": true  

  },  

  "referenceNumber": "23113014000696183743",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?COMPANY_NAME=Hermann%2C%20Ondricka%20and%20Thiel&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454179879&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Delaware&BP_STAMP=26CBC552AD1145F2ED51A9E5177AA528EA05CC8EBA23DB18590820D67613AAC697DE9D5380B08F155105BEB218CF5E7DF269E413C2458A1974885D96616CB169&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=4358%20Delia%20Motorway&PROCESSOR_ID=100553863525&CARD_EXPIRE=0325&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mandy.Donnelly84%40hotmail.com&ID=200454181409&CONNECTED_IP=20.37.143.182&Result=APPROVED&ORIG_TTYPE=SALE&CUST_EMAIL=Mandy.Donnelly84%40hotmail.com&REBID=&ORDER_ID=200454179879&RRNO=200454181409&CVV2_RESULT=_&BINDATA=6~M~X~~~~~~~~MCG~N~~~Y~C&SOURCE_ID=200454179879&INVOICE_ID=200454179879&AVS_RESULT=4&CUSTOMER_CODE=200454181409&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=28253-2429&AUTH_CODE=BARPUD&BACKEND_ID=706282844384&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&ISSUE_DATE=2023-11-30%2013%3A57%3A22.106088&PAYMENT_ACCOUNT=xxxxxxxxxxxx5798&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&CVV2=_&CVV2_STATUS=0&EMV=&CARD_COUNTRY=NGA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454181409&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=4&BANK_NAME=ZENITH%20BANK&EMV_APPLICATION=&CITY=South%20Kaitlin&F_WILL_CAPTURE=0",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTgxNDA5",  

    "approvalCode": "BARPUD",  

    "providerTransactionCode": "200454181409",  

    "approved": true  

  },  

  "referenceNumber": "23113013572114139682",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&ORDER_ID=200454159023&RRNO=200454185947&CVV2_RESULT=_&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&SOURCE_ID=200454159023&AVS_RESULT=1&INVOICE_ID=200454159023&CUSTOMER_CODE=200454185947&FLAGS=T&ORIG_IS_SETTLED=0&F_UNHELD=0&FANCY_STATUS=Approved&ZIP=96592-2764&AUTH_CODE=RANGRT&BACKEND_ID=921253149095&REMOTE_IP=20.37.143.182&TRANS_TYPE=VOID&STATUS=1&TPS_HASH_TYPE=HMAC_SHA512&AMOUNT_TAX=0.00&LEVEL_2_DATA=cust_po%3D%26customer_number%3D%26&ISSUE_DATE=2023-11-30%2014%3A00%3A39.410722&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&AMOUNT=9.00&LOGIN_ACCOUNT_ID=100553863405&CVV2=_&F_CARD_PRESENT=0&CVV2_STATUS=0&EMV=&CARD_COUNTRY=USA&ACCOUNT_NAME=DEMO-tokenex&TRANS_ID=200454185947&PAYMENT_TYPE=CREDIT&MODE=TEST&AVS=1&BANK_NAME=NETWORK%20ONLY&EMV_APPLICATION=&CITY=Ornburgh&F_WILL_CAPTURE=0&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&MESSAGE=Approved%20Void&COUNTRY=USA&MASTER_ID=200454185269&EMV_APPNAME=&OWNER_USER_ID=100553863406&STATE=Hawaii&BP_STAMP=9DFB1772A2BDF76922A470F1AAFD3600AAA7D185B90636325E34BB8CE3CBD6CFF3E8C5B365391EC5C73A18456A774405ADF2410873A15B5719DAA5BB481B76F9&F_BYPASS_AUTH=0&F_REBILL_MASTER=0&ADDR1=173%20Antonio%20Pike&PROCESSOR_ID=100553863525&CARD_EXPIRE=0324&CARD_TYPE=MC&FRAUD_SCORE=0&ORIG_AMOUNT=9.00&ORIGIN=bp10emu&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMAIL=Mary0%40gmail.com&CONNECTED_IP=20.37.143.182&Result=APPROVED&ID=200454185947&ORIG_TTYPE=CAPTURE&CUST_EMAIL=Mary0%40gmail.com&REBID=",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjAwNDU0MTg1OTQ3",  

    "approvalCode": "RANGRT",  

    "providerTransactionCode": "200454185947",  

    "approved": true  

  },  

  "referenceNumber": "231130140038853382",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?REBID=&Result=ERROR&PAYMENT_TYPE=CREDIT&STATE=Hawaii&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&EMAIL=Mary0%40gmail.com&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&EMV_APPLICATION=&CARD_TYPE=&AMOUNT=9.00&PAYMENT_ACCOUNT=&ADDR1=173%20Antonio%20Pike&BANK_NAME=&STATUS=E&ORIGIN=bp10emu&CVV2=&CUST_EMAIL=Mary0%40gmail.com&LOGIN_ACCOUNT_ID=100553863405&MODE=TEST&REMOTE_IP=20.37.143.181&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&BP_STAMP=A0A2E1D9943C6D4DA24B4FB2F3B0CB25DA903F99A659C25168F4E8D5536629FF12730E3F0C254539D573BC489D269DD7569CD28BAEC6E76E1F998058D9EF021B&ZIP=96592-2764&TPS_HASH_TYPE=HMAC_SHA512&RRNO=&AMOUNT_TAX=0.00&TRANS_TYPE=AUTH&ORDER_ID=&AUTH_CODE=&INVOICE_ID=&F_CARD_PRESENT=0&MESSAGE=CARD%20ACCOUNT%20NOT%20VALID&CARD_EXPIRE=0324&EMV_APPNAME=&CITY=Ornburgh&OWNER_USER_ID=100553863406&EMV=&AVS=",  

    "gatewayErrors": [  

      {  

        "code": "ERROR",  

        "message": "CARD ACCOUNT NOT VALID"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816270423298381",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "/interfaces/wlcatch?RRNO=201043425078&EMV_APPLICATION=&ORIGIN=bp10emu&STATUS=0&OWNER_USER_ID=100553863406&CARD_COUNTRY=USA&AUTH_CODE=&CVV2_RESULT=_&EMV=&FANCY_STATUS=Declined&REBID=&STATE=Hawaii&INVOICE_ID=201043425078&LOGIN_ACCOUNT_ID=100553863405&F_CARD_PRESENT=0&ISSUE_DATE=2023-12-08%2016%3A19%3A29.43492&BANK_NAME=NETWORK%20ONLY&ORDER_ID=201043425078&CUSTOMER_CODE=201043425078&TRANS_ID=201043425078&AVS_RESULT=1&AMOUNT_TAX=0.00&ADDR1=173%20Antonio%20Pike&TPS_HASH_TYPE=HMAC_SHA512&BP_STAMP=E6CF795F48AA233440B640A4D508376836D1501EEB17CC5EEC76B53DBCA564E27326C0BD1513ED3CBFDBA96736F2B7EE0B479DDC91B80AFA8C384A715A578617&CVV2_STATUS=0&CUST_EMAIL=Mary0%40gmail.com&ZIP=96592-2764&COUNTRY=USA&PAYMENT_ACCOUNT=xxxxxxxxxxxx4448&EMAIL=Mary0%40gmail.com&CITY=Ornburgh&COMPANY_NAME=Franecki%2C%20Mertz%20and%20Conroy&AMOUNT=8.00&CONNECTED_IP=20.37.143.181&F_BYPASS_AUTH=0&FRAUD_SCORE=0&F_WILL_CAPTURE=0&PAYMENT_TYPE=CREDIT&REMOTE_IP=20.37.143.181&BP_STAMP_DEF=RRNO%20ISSUE_DATE%20Result&BACKEND_ID=887454904262&ORIG_IS_SETTLED=0&SOURCE_ID=201043425078&MESSAGE=Declined%20Auth&TRANS_TYPE=AUTH&ID=201043425078&F_UNHELD=0&Result=DECLINED&EMV_APPNAME=&MODE=TEST&AVS=1&FLAGS=T&CVV2=_&CARD_TYPE=MC&MEMO=Maiores%20dolore%20accusantium%20autem%20vel%20recusandae.&LEVEL_2_DATA=customer_number%3D%26cust_po%3D%26&CARD_EXPIRE=0324&ACCOUNT_NAME=DEMO-tokenex&PROCESSOR_ID=100553863525&BINDATA=8~N~P~14E00%2000%2000%2000%2000%2000%2000%2000%2000~~~~~~~~N~~~~&F_REBILL_MASTER=0",  

    "gatewayErrors": [  

      {  

        "code": "DECLINED",  

        "message": "Declined Auth"  

      }  

    ],  

    "tokenExTransactionCode": "MjAxMDQzNDI1MDc4",  

    "approvalCode": "",  

    "providerTransactionCode": "201043425078",  

    "approved": false  

  },  

  "referenceNumber": "23120816192752821306",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "302"  

}  

```