---
title: The Basics
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  The Basics'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-overview-direct-link-overview
- transaction-flows-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-transaction-flows-direct-link-transaction-flows
- construct-request-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-construct-request-direct-link-construct-request
- transaction-endpoints-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-transaction-endpoints-direct-link-transaction-endpoints
- headers-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-headers-direct-link-headers
- api
- rest
- json
- pci
- tokenization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics
portal: tokenex
updated: '2026-06-29'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * The Basics

# The Basics
Use TokenEx tokens with a variety of Payment Gateways
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#overview "Direct link to Overview")
The Card/Check/Wallet API supports the use of TokenEx tokens with many 3rd-Party [Payment Gateways](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters) through a single, standardized REST API format using JSON. This format reduces the time-to-market when integrating multiple gateways into your payments flow while keeping the customers' payment method PANs out of PCI scope.
## Transaction Flows[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#transaction-flows "Direct link to Transaction Flows")  
| Transaction  | Payment Type  | Description  |  
| --- | --- | --- |  
| Card Authorize  | Creation  | Validates customer payment card and places a hold on funds.  |  
| Card Purchase  | Creation  | Validates customer payment card and moves funds to the merchant.  |  
| Card Capture  | Modification  | Moves funds from a previous authorization to the merchant.  |  
| Card Refund  | Modification  | Moves funds from the merchant to a customer's card.  |  
| Card Void  | Modification  | Cancels an in-process action.  |  
| Check Purchase*  | Creation  | Moves funds from customer's bank account to the merchant.  |  
| Check Refund*  | Modification  | Moves funds from the merchant to the customer's bank account.  |  
| Check Void*  | Modification  | Cancels an in-process action.  |  
*Not all gateways support ACH/Check transactions
## Construct a Request[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#construct-a-request "Direct link to Construct a Request")
Please contact TokenEx Support or Customer Success to request a current Postman collection which will contain working examples of requests and responses for each gateway.
### Transaction Endpoints[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#transaction-endpoints "Direct link to Transaction Endpoints")
Send HTTP **POST** requests to the below endpoints.
**Production:**   
**Sandbox:**   
| Transaction  | Path  |  
| --- | --- |  
| Card Authorize  | /card/authorize  |  
| Card Purchase  | /card/purchase  |  
| Card Capture  | /card/capture  |  
| Card Refund  | /card/refund  |  
| Card Void  | /card/void  |  
| Check Purchase  | /check/purchase  |  
| Check Refund  | /check/refund  |  
| Check Void  | /check/void  |  
| Wallet Authorize  | /wallet/authorize  |  
| Wallet Purchase  | /wallet/purchase  |  
| Wallet Capture  | /wallet/capture  |  
| Wallet Refund  | /wallet/refund  |  
| Wallet Void  | /wallet/void  |  
### Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#headers "Direct link to Headers")  
| HTTP Request Header  | Description  |  
| --- | --- |  
| Tx-TokenEx-Id  | ID from configuration menu in client portal  |  
| Tx-ApiKey  | API key from configuration menu in client portal  |  
| Tx-Token-Scheme  | Either the name (case sensitive) or the numerical value of the [Token Scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) to be used  |  
| Tx-Tokenize  | True/False. Tokenizes PAN within request for Card numbers and ACH account numbers.  |  
| Tx-Passthrough  | True/False. Bypasses detokenization of PAN within request for Card numbers and ACH account numbers  |  
| Tx-CacheCvv  | True/False. Caches CVV for 5 minutes so that it can be used with subsequent transactions. See [CVV Retention and Retrieval](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval)  |  
| Tx-Cvv-Not-Required  | True/False. Specifies that the request will continue if a CVV is not able to be retrieved.  |  
| Tx-Retry  | See [Retries and 3rd Party APIs](https://documentation.ixopay.com/modules/docs/tokenex/retries-and-3rd-party-apis)  |  
| Tx-Http-Timeout  | Value in seconds to wait for a response from the 3rd-party before timing out.   
Default: 60   
Max: 120  |  
#### Tokenization, Detokenization and CVV Retrieval[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#tokenization-detokenization-and-cvv-retrieval "Direct link to Tokenization, Detokenization and CVV Retrieval")
Currently supported fields for tokenization and detokenization are `CreditCard.Number` and `Check.AccountNumber`. By default, detokenization is performed on these values. To bypass detokenization, pass the `Tx-Passthrough:true` header. To tokenize instead of detokenizing, pass the `Tx-Tokenize:true` header. If `Tx-Tokenize:true`, the `Tx-Token-Scheme` header must be present and the `Tx-Passthrough` header will be ignored. A token or relevant tokenization error message will always be returned if `Tx-Tokenize:true`.
The detokenize operation supports CVV retrieval for verification values previously associated with a token. To trigger CVV retrieval during a detokenize operation, pass "cvv" in the `CreditCard.CVV` field. Transactions approved by the gateway will trigger the deletion of that CVV from TokenEx systems. Numeric values will not trigger a CVV retrieval and instead will be passed along to the gateway unmodified.
A tokenize operation does not support CVV association with a card number. Instead, the value of `CreditCard.CVV` will be passed along to the gateway unmodified.
`Tx-Passthrough` bypasses tokenization, detokenization, and CVV retrieval operations. Account numbers and CVVs passed in the request are forwarded to the gateway.  
| Operation  | Tx-Tokenize  | Tx-Passthrough  |  
| --- | --- | --- |  
| Tokenize  | True  | True  |  
| Tokenize  | True  | False  |  
| Passthrough  | False  | True  |  
| Detokenize  | False  | False  |  
| Detokenize  | Header Omitted  | Header Omitted  |  
##### Example header configurations[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#example-header-configurations "Direct link to Example header configurations")
  * Tokenize
  * Detokenize
  * Retrieve CVV
  * Skip Detokenization and CVV Retrieval
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```### Body[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#body "Direct link to Body")
Payment Services has minimal validations in place around the values sent to the third-party gateway APIs. For each gateway you're integrating, consult the [gateway's parameter](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters) page for example requests and breakdowns of request and response parameters as well as any gateway-specific functionality.
Utilizing the 3rd-party API's documentation is critical for a successful integration, though there is significant standardization between gateway implementations on request parameters such as `Amount`,`CurrencyCode`, `BillingAddress`, `ShippingAddress`, `CreditCard`, `Check`, `SoftDescriptors`, `StoredCredentials`, and `ThreeDSecure`. The specific request parameters to be included with each request are dependent upon the payment gateway your application is integrating with. If a field is not required for your gateway, it does not have to be populated.
Several of our gateway implementations support [parameter forwarding](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-parameter-forwarding), allowing your application to forward parameters that are specific to a 3rd-Party Gateway's API. It is recommended to utilize this feature when a supported gateway implementation does not have a suitable parameter mapping for your application's need.
Every successful transaction will generate the response parameter `tokenExTransactionCode` in the `gatewayResponse` (see [GatewayResponse](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayresponse)). The `tokenExTransactionCode` is required for modification transactions such as Captures, Voids, and Refunds so that Payment Services can properly process the modification. The generated `tokenExTransactionCode` is a base64-encoded string containing information needed by the respective gateway implementation to process the subsequent transaction. This field should remain unmodified between primary responses and secondary transactions. An example usage of a `tokenExTransactionCode` is below.
  * Example Payment Creation Response
  * Example Payment Modification Request
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```Careful with that TokenEx transaction code!
Attempting to create or modify a `tokenexTransactionCode` may yield unpredictable results. If deconstructing and generating these codes is required for your payments flow, please reach out for more details on these code constructions. A use case for generating your own TokenEx transaction codes is performing modifications on payments that were created outside of Payment Services.
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```Careful with that TokenEx transaction code!
Attempting to create or modify a `tokenexTransactionCode` may yield unpredictable results. If deconstructing and generating these codes is required for your payments flow, please reach out for more details on these code constructions. A use case for generating your own TokenEx transaction codes is performing modifications on payments that were created outside of Payment Services.
  * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * The Basics
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```Careful with that TokenEx transaction code!
Attempting to create or modify a `tokenexTransactionCode` may yield unpredictable results. If deconstructing and generating these codes is required for your payments flow, please reach out for more details on these code constructions. A use case for generating your own TokenEx transaction codes is performing modifications on payments that were created outside of Payment Services.
  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#overview)
  * [Transaction Flows](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#transaction-flows)
  * [Construct a Request](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#construct-a-request)
    * [Transaction Endpoints](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#transaction-endpoints)
    * [Headers](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#headers)
    * [Body](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#body)
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-token-scheme: sixTOKENfour  

tx-tokenize: true  

  

**tx-passthrough is ignored in a tokenize flow**  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

  

"CreditCard": {  

  "Number": "123456789012345",  

  "ExpMonth": 3,  

  "ExpYear": 2024,  

  "CVV": "cvv"  

}  

```
```

tx-tokenex-id: <Your TokenExId>  

tx-apikey: <Your API Key>  

tx-passthrough: true  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

    "approvalCode": "082011",  

    "providerTransactionCode": "BS23DPXKTGXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "22111515501772095335",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "Gateway": "<Gateway name>",  

  "TokenExTransactionCode": "QlMyM0RQWEtUR1hYR044Mg==",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>",  

  "<Gateway-specific credential field>": "<Gateway-specific credential>"  

}  

```Careful with that TokenEx transaction code!
Attempting to create or modify a `tokenexTransactionCode` may yield unpredictable results. If deconstructing and generating these codes is required for your payments flow, please reach out for more details on these code constructions. A use case for generating your own TokenEx transaction codes is performing modifications on payments that were created outside of Payment Services.