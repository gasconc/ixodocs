Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * ChaseNetConnect


On this page
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |  
Last updated on **Apr 10, 2026**
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |  
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |  
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * ChaseNetConnect


On this page
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |  
Last updated on **Apr 10, 2026**
[Previous Braintree](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree)[Next CyberSource](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource)
  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * ChaseNetConnect


On this page
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |  
Last updated on **Apr 10, 2026**
# ChaseNetConnect
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#overview "Direct link to Overview")
**Account Management:** <https://merchantservices.chase.com>  
**Developer Documentation:** <https://secure.paymentech.com/devcenter/home>  
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `OrderInfo`
**Gateway Endpoints**  
This implementation of ChaseNetConnect forwards requests to the below endpoints.  
**Production:** <https://netconnect1.chasepaymentech.com/NetConnect/controller> and <https://netconnect2.chasepaymentech.com/NetConnect/controller>  
**Sandbox:** <https://netconnectvar1.chasepaymentech.com/NetConnect/controller> and <https://netconnectvar2.chasepaymentech.com/NetConnect/controller>
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | UTF197 Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | ChaseNetConnect  |  
|  `merchantId`*  | string  | Merchant Number  | ChaseNetConnect Merchant Number (MID)  |  
|  `clientId`*  | string  | Client Number  | ChaseNetConnect Client Number (CID)  |  
|  `terminalId`*  | string  | Terminal Number  | ChaseNetConnect Terminal Number (TID)  |  
| `amount`  | numeric  | Amount  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| `orderInfo.PurchaseOrderNumber`  | string  | POS Retrieval Reference Number  | An identifier for the payment from the merchant's system  |  
| `orderInfo.MedicalRelated`  | bool  | ---  | Is the purchase related to medical services/products? True = yes, False = no  |  
|  `creditCard.Number`*  | string  | Account Number  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number.  |  
|  `creditCard.ExpMonth`*  | numeric  | Expiration Date  | Expiration Month.  |  
|  `creditCard.ExpYear`*  | numeric  | Expiration Date  | Expiration Year.  |  
| `creditCard.Cvv`  | string  | CVV  | Card Verification Value  |  
| `tax.Amount`  | numeric  | Sales Tax Amount  | Tax amount in cents. Example: $10.00 should be sent as 1000.  |  
| `billingAddress.Address1`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.City`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.State`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Zip`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address  |  
| `billingAddress.Country`  | string  | Cardholder Street Address  | Combined into Cardholder Street Address   
  
Alpha-3 ISO country code  |  
| `billingAddress.Address2`  | string  | Extended Cardholder Street Address  | ---  |  
| `recurring`  | bool  | ---  | Is payment recurring? True = yes, False = no.  |  
|  `username`*  | string  | N/A  | Username to authenticate with ChaseNetConnect  |  
|  `password`*  | string  | N/A  | Password to authenticate with ChaseNetConnect  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void



```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "username": "<Your ChaseNetConnect username>",  
  "password": "<Your ChaseNetConnect password>",  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "orderInfo": {  
    "medicalRelated": false  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Purchase call>",  
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
    "fax": "555-555-6666",  
    "email": "john@doe.dev",  
    "firstName": "John",  
    "lastName": "Doe",  
    "name": "John Doe",  
    "company": "Test Co.",  
    "address1": "123 Someplace Lane",  
    "address2": null,  
    "city": "Tulsa",  
    "state": "OK",  
    "zip": "74111",  
    "country": "USA"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```


```
{  
  "gateway": "ChaseNetConnect",  
  "testMode": true,  
  "merchantId": "<Your ChaseNetConnect MerchantId>",  
  "clientId": "<Your ChaseNetConnect ClientId>",  
  "terminalId": "<Your ChaseNetConnect TerminalId>",  
  "amount": 900,  
  "orderId": "ABC00001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "tax": {  
    "amount": 100  
  },  
  "creditCard": {  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "username": "<Your Username to authenticate with ChaseNetConnect>",  
  "password": "<Your Password to authenticate with ChaseNetConnect>"  
}  

```

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Notes  |  
| --- | --- | --- |  
| `approvalCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `providerTransactionCode`  | string  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | If the transaction was a success this will be true  |
