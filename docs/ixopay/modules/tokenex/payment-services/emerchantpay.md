---
title: EMerchantPay
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-emerchantpay-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-emerchantpay-supported-request-parameters-direct-link-supported-request-parameters
- stored-credentials-inference-tables-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-emerchantpay-stored-credentials-inference-tables-direct-link-stored-credentials-inference-tables
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-emerchantpay-requests-direct-link-requests
- api
- xml
- 3ds
- 3d-secure
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * EMerchantPay

# EMerchantPay
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#overview "Direct link to Overview")
**Gateway:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects:** `BillingAddress,` `CreditCard,` `ThreeDSecure`, `SoftDescriptors`, `StoredCredentials`
**Gateway Endpoints:**  
This implementation of EMerchantPay forwards requests to the below endpoints.  
**Production:**   
**Sandbox:** 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#supported-request-parameters "Direct link to Supported Request Parameters")  
| Field Name  | Type  | EMerchantPay Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | EMerchantPay  |  
| `username`  | string  | `username`  | See Url parameters callout below.  |  
| `remoteIp`  | IPv4 or IPv6 address  | `remote_ip`  | IPv4 or IPv6 address of customer  |  
| `password`  | string  | `password`  | See Url parameters callout below.  |  
| `terminalToken`  | string  | `terminalToken`  | See Url parameters callout below  |  
| `amount`  | numeric  | `amount`  | The amount in minor units. For example, 2000 means EUR 20.00. Max length: 12 characters.  |  
| `currencyCode`  | string  | `currency`  | The three-character ISO currency code. Alpha-3 ISO currency code  |  
| `consumerId`  | string  | `consumer_id`  | \\*Requires rememberCard on first transaction before use.  |  
| `rememberCard`  | bool  | `remember_card`  | Pass true to get a consumerId in the response.  |  
| `transactionId`  | string  | `transaction_id`  | Use this field on a secondary request if you are submitting a transactionId. If you do not have one, a new one will be generated for you.  |  
| `billingAddress.address1`  | string  | `billing_address.address1`  | Primary address  |  
| `billingAddress.address2`  | string  | `billing_address.address2`  | Secondary address  |  
| `billingAddress.city`  | string  | `billing_address.city`  | City  |  
| `billingAddress.country`  | string  | `billing_address.country`  | Three-Character Country Code ISO country code. TokenEx will convert to ISO 3166-1 alpha-2 code.  |  
| `billingAddress.firstName`  | string  | `billing_address.first_name`  | Customer first name  |  
| `billingAddress.lastName`  | string  | `billing_address.last_name`  | Customer last name  |  
| `billingAddress.state`  | string  | `billing_address.state`  | State code required for USA and Canada  |  
| `billingAddress.zip`  | string  | `billing_address.zip_code`  | ZIP code  |  
| `billingAddress.email`  | string  | `customer_email`  | Must contain valid customer E-mail  |  
| `creditCard.cvv`  | string  | `cvv`  | cvv of cc, requirement is based on terminal configuration  |  
| `creditCard.expMonth`  | numeric  | `expiration_month`  | Expiration month as printed on credit card  |  
| `creditCard.expYear`  | numeric  | `expiration_year`  | Expiration year as printed on credit card  |  
| `creditCard.number`  | string  | `card_number`  | Complete cc number of customer  |  
| `threeDSecure.cavv`  | string  | `mpi_params.cavv`  | Verification Id of the authentication. Please note this can be the CAVV for Visa Card or UCAF to identify MasterCard.  |  
| `threeDSecure.dSTransId`  | string  | `mpi_params.directory_server_id`  | The Directory Server ID used for 3DSecure transactions through the 3DSv2 authentication protocol.  |  
| `threeDSecure.challengeIndicator`  | string  | `mpi_params.threeds_challenge_indicator`  | The 3DS challenge indicator that represents the exact indicator used during the authentication request to the MPI provider for synchronous 3DS transactions. It is optional but highly recommended for increasing the approval ratio. It can only contain one of the following values no_preference, no_challenge_requested, preference and mandate. The default value is no_preference.  |  
| `threeDSecure.eci`  | string  | `mpi_params.eci`  | The electronic commerce indicator. See [EMerchantPay Docs](https://emerchantpay.github.io/gateway-api-docs/#electronic-commerce-indicator).  |  
| `threeDSecure.programProtocol`  | string  | `mpi_params.protocol_version`  | The used 3DS protocol version.  |  
| `threeDSecure.threeDSecureVersion`  | string  | `mpi_params.protocol_sub_version`  | The used 3DS protocol sub version.  |  
| `threeDSecure.aCSTransId`  | string  | `mpi_params.acs_transaction_id`  | The ACS Transaction ID and is optional for 3DS transactions, but highly recommended for increasing the approval ratio.  |  
| `softDescriptors.merchantName`  | string  | `dynamic_descriptor_params.merchant_name`  | Allows to dynamically override the charge descriptor  |  
| `softDescriptors.merchantCity`  | string  | `dynamic_descriptor_params.merchant_city`  | Allows to dynamically override the merchant phone number  |  
| `softDescriptors.subMerchantId`  | string  | `dynamic_descriptor_params.sub_merchant_id`  | Allows to dynamically override the sub-merchant ID.  |  
| `softDescriptors.merchantAddress.country`  | string  | `dynamic_descriptor_params.merchant_country`  | Allows to dynamically override the merchant country.  |  
| `softDescriptors.merchantAddress.state`  | string  | `dynamic_descriptor_params.merchant_state`  | Allows to dynamically override the merchant subdivision code.  |  
| `softDescriptors.merchantAddress.zip`  | string  | `dynamic_descriptor_params.merchant_zip_code`  | Allows to dynamically override the merchant zip/postal code. Required for VISA OCT transactions with Australian and Canadian card bins.  |  
| `softDescriptors.merchantAddress.address1`  | string  | `dynamic_descriptor_params.merchant_address`  | Allows to dynamically override the merchant address.  |  
| `softDescriptors.merchantAddress.address2`  | string  | `dynamic_descriptor_params.merchant_address`  | Allows to dynamically override the merchant address.  |  
| `softDescriptors.merchantUrl`  | string  | `dynamic_descriptor_params.merchant_url`  | Allows to dynamically override the merchant URL  |  
| `softDescriptors.merchantPhone`  | string  | `dynamic_descriptor_params.merchant_phone`  | Allows to dynamically override the merchant phone number.  |  
| `softDescriptors.merchantServiceCity`  | string  | `dynamic_descriptor_params.merchant_service_city`  | Allows to dynamically override the merchant service city.  |  
| `softDescriptors.merchantServiceCountry`  | string  | `dynamic_descriptor_params.merchant_service_city`  | Allows to dynamically override the merchant service country.  |  
| `softDescriptors.merchantServiceState`  | string  | `dynamic_descriptor_params.merchant_service_state`  | Allows to dynamically override the merchant service subdivision code.  |  
| `softDescriptors.merchantServiceZipCode`  | string  | `dynamic_descriptor_params.merchant_service_zip_code`  | Allows to dynamically override the merchant service zip/postal code.  |  
| `softDescriptors.merchantServicePhone`  | string  | `dynamic_descriptor_params.merchant_service_phone`  | Allows to dynamically override the merchant service phone number.  |  
| `storedCredentials.initiator`  | string  | `recurring_type`  | Valid values: "merchant" or "cardholder" Used in combination with `credentialStored`and conditionally `transactionType` if applicable.   
  
This field is used for the inference of credential_on_file. See table below.  |  
| `storedCredentials.credentialStored`  | bool  | `recurring_type`  | This field is used for the inference of credential_on_file. See table below.  |  
| `storedCredentials.transactionType`  | string  |  `recurring_type`  
`recurring_category`  
`credential_on_file`  | Valid values: "unscheduled", "recurring".   
  
Any other string value will be forwarded.   
  
This field is used for the inference of credential_on_file. See table below.  |  
| `storedCredentials.previousNetworkTransactionId`  | string  | Response `scheme_transaction_identifier` on initial   
  
Request `credential_on_file_transaction_identifier` on subsequent  | Received from the initial response that is then passed to the subsequent request.  |  
| `storedCredentials.schemeSettlementDate`  | string  | Response `scheme_settlement_date` on initial Request   
  
Request `credential_on_file_settlement_date` on subsequent  | Received from the initial response that is then passed to the subsequent request.  |  
Url Parameters: username/password/terminalToken
These fields will be available to you through the EMerchantPay admin portal. You will add them as parameters as seen in the example request below.
**Subsequent Transactions**
In a CIT and MIT flow, subsequent transactions will need a different terminalToken after the initial transaction. Terminal tokens can be obtained from the EmerchantPay admin portal.
## Stored Credentials Inference Tables[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#stored-credentials-inference-tables "Direct link to Stored Credentials Inference Tables")
The table below shows how different value combinations impact the forwarded `credential_on_file` field.
if `transactionType` is "unscheduled" and if the credential has been previously stored and the `initiator` is "merchant" then `credential_on_file` is added to the forwarded request with the value of "merchant_unscheduled"  
| credentialStored  | initiator  | transactionType  | Forwarded credential_on_file  |  
| --- | --- | --- | --- |  
| true  | cardholder  | null  | subsequent_customer_initiated  |  
| false  | cardholder  | null  | initial_customer_initiated  |  
| true  | merchant  | unscheduled  | merchant_unscheduled  |  
| true  | merchant  | null  | null  |  
If `transactionType` is not null and not "unscheduled," we will add `recurring_type` and `recurring_category`. The table below illustrates the various value combinations for `recurring_type` based on the inferred`credential_on_file` indicated above.  
| Inferred credential_on_file  | Forwarded recurring_type  |  
| --- | --- |  
| subsequent_customer_initiated  | subsequent  |  
| initial_customer_initiated  | initial  |  
| merchant_unscheduled  | subsequent  |  
| null  | subsequent  |  
Once `recurring_type` is determined, we proceed to set `recurring_category` based on `transactionType`. If `transactionType` is "recurring," we assign `recurring_category` as "subscription." For any other `transactionType`, `recurring_category` is set to match the value of `transactionType`.
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#example-requests "Direct link to Example Requests")
  * Card Authorize and Purchase
  * Card Capture
  * Card Refund
  * Card Void
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | EMerchantPay Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `providerTransactionCode`  | string  | `unique_id`  | Unique id defined by gateway (must later be used if capturing, voiding or refunding a transaction)  |  
| `approved`  | string  | `status`  | SUCCESS, CANCELLED, AUTHORIZED, or VERIFIED and its respective statusCode is returned.  |  
| `tokenExTransactionCode`  | string  | `unique_id`  | Base64 encoded unique_id; currency from rawResponse  |  
| `merchantReferenceId`  | string  | `transaction_id`  | Unique transaction id defined by merchant  |  
| `brandCategoryCode`  | string  | `scheme_response_code`  | Currently provided by Visa only. Specifies a category to which a decline code belongs.  |  
| `recurringAdviceCode`  | string  | `recurring_advice_code`  | Code provided by the card network offering a suggestion of when the transaction should be retried. Currently this value is only provided by MasterCard as the Merchant Advice Code (MAC Code).  |  
| `recurringAdviceDescription`  | string  | `recurring_advice_text`  | The description for the retry advice code.  |  
| `gatewayErrors`  | object array  | ---  | See GatewayErrors callout below.  |  
| `gatewayErrors[?].Code`  | string  | ---  | See GatewayErrors callout below.  |  
| `gatewayErrors[?].Message`  | string  | ---  | See GatewayErrors callout below.  |  
| `gatewayErrors[?].Source`  | string  | N/A  | Possible values: Unspecified, Gateway, Processor, TokenEx.  |  
GatewayErrors Code, Message, and source
  1. If the response from EMerchantPay is formatted in an unanticipated way, the following error will be returned.
```

{  

  "code": "8012",  

  "message": "Could not parse gateway response",  

  "source": "TokenEx"  

}  

```  2. When the `rawResponse` from EMerchantPay contains a `status` of "declined" and a `code` between 500 and 551, the `gatewayError` will have two objects. `gatewayErrors[0].code` is mapped to `code` , `gatewayErrors[0].message` is mapped to `message` , and `gatewayErrors[0].source` will be set to "Gateway"  
For the second object `gatewayErrors[1].code` is mapped to `response_code` , `gatewayErrors[1].message` is mapped to `technical_message` , and `gatewayErrors[1].source` will be set to "Processor".  
[EMerchantPay - Error Codes](https://emerchantpay.github.io/gateway-api-docs/#error-codes-tables)  
[EMerchantPay - Issuer Response Codes](https://emerchantpay.github.io/gateway-api-docs/#issuer-response-codes)
```

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```  3. When the `rawResponse` from EMerchantPay does not contain a `status` of "approved", "error", "refunded", or "voided" `gatewayErrors[0].code` is mapped to `code` , `gatewayErrors[0].message` is mapped to `message` , and `gatewayErrors[0].source` will be set to "Gateway"
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Gateway Error
  * Processor Error
  * Processor Error — Declined by issuer
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

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

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

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

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

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

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#supported-request-parameters)
  * [Stored Credentials Inference Tables](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#stored-credentials-inference-tables)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay#example-responses)
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

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

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "creditCard": {  

    "number": "4111111111111111",  

    "expMonth": 6,  

    "expYear": 2026,  

    "fullName": "John Doe",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "firstName": "John",  

    "lastName": "Doe",  

    "address1": "123 Sesame Street",  

    "zip": "10178",  

    "city": "Los Angeles",  

    "state": "CA",  

    "country": "USA",  

    "email": "john@doe.dev",  

    "phone": "+1987987987987"  

  },  

  "terminalToken": "<Your EMerchantPay Terminal Token>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "amount": 1000,  

  "currencyCode": "EUR",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Purchase/Capture>"  

}  

```
```

{  

  "gateway": "EMerchantPay",  

  "password": "<Your EMerchantPay Password>",  

  "username": "<Your EMerchantPay Username>",  

  "terminalToken": "<Your EMerchantPay Terminal Token>",  

  "TokenExTransactionCode": "<Your TokenExTransactionCode from Authorize>"  

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

"gatewayErrors": [  

  {  

    "code": "540",  

    "message": "Amount exceeds credit card limit.",  

    "source": "Gateway"  

  },  

  {  

    "code": "51",  

    "message": "Not sufficient funds",  

    "source": "Processor"  

  }  

]  

```
```

{  

  "code": "340",  

  "message": "Please check input data for errors!",  

  "source": "Gateway"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>843655</authorization_code>\n  <retrieval_reference_number>331922006528</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>2c3d6a36542ccd053eefc1e1bad9c12b</unique_id>\n  <transaction_id>4efc3590-58df-4cd4-a5ed-3b6d722c7dc2</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-15T22:35:28Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MmMzZDZhMzY1NDJjY2QwNTNlZWZjMWUxYmFkOWMxMmI=",  

    "approvalCode": "",  

    "providerTransactionCode": "2c3d6a36542ccd053eefc1e1bad9c12b",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "4efc3590-58df-4cd4-a5ed-3b6d722c7dc2"  

  },  

  "referenceNumber": "23111516261111652474",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>sale</transaction_type>\n  <status>approved</status>\n  <cvv_result_code>M</cvv_result_code>\n  <authorization_code>738084</authorization_code>\n  <retrieval_reference_number>332118006530</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>a64c47fe5dce63ae3b3a4d4af8442311</unique_id>\n  <transaction_id>3d740e64-6c22-4295-8469-438a927a164a</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:45:18Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n  <scheme_transaction_identifier>234567891234560</scheme_transaction_identifier>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YTY0YzQ3ZmU1ZGNlNjNhZTNiM2E0ZDRhZjg0NDIzMTE=",  

    "approvalCode": "",  

    "providerTransactionCode": "a64c47fe5dce63ae3b3a4d4af8442311",  

    "approved": true,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "234567891234560",  

    "merchantReferenceId": "3d740e64-6c22-4295-8469-438a927a164a"  

  },  

  "referenceNumber": "23111712355819995218",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>capture</transaction_type>\n  <status>approved</status>\n  <unique_id>f19bba07f5a78dea33658fd47dfa9628</unique_id>\n  <transaction_id>f3aed391-0210-4d14-8e11-0a7d6045bf39</transaction_id>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:46:56Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "ZjE5YmJhMDdmNWE3OGRlYTMzNjU4ZmQ0N2RmYTk2Mjg=",  

    "approvalCode": "",  

    "providerTransactionCode": "f19bba07f5a78dea33658fd47dfa9628",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "f3aed391-0210-4d14-8e11-0a7d6045bf39"  

  },  

  "referenceNumber": "23111712373554010444",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>refund</transaction_type>\n  <status>approved</status>\n  <unique_id>ab7adb00559d7f0d698fe54b7295cea7</unique_id>\n  <transaction_id>92ac47ce-19e4-482c-9d62-2401ee857080</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:47:35Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YWI3YWRiMDA1NTlkN2YwZDY5OGZlNTRiNzI5NWNlYTc=",  

    "approvalCode": "",  

    "providerTransactionCode": "ab7adb00559d7f0d698fe54b7295cea7",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "92ac47ce-19e4-482c-9d62-2401ee857080"  

  },  

  "referenceNumber": "23111712381582919538",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>void</transaction_type>\n  <status>approved</status>\n  <authorization_code>624834</authorization_code>\n  <retrieval_reference_number>332118006533</retrieval_reference_number>\n  <scheme_response_code>00</scheme_response_code>\n  <unique_id>c2e6dde943f3fd97f9e9da893450f12d</unique_id>\n  <transaction_id>16248646-3f26-4918-aac2-58bee303d7db</transaction_id>\n  <response_code>00</response_code>\n  <technical_message>TESTMODE: No real money will be transferred!</technical_message>\n  <message>TESTMODE: No real money will be transferred!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:48:23Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <sent_to_acquirer>true</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "YzJlNmRkZTk0M2YzZmQ5N2Y5ZTlkYTg5MzQ1MGYxMmQ=",  

    "approvalCode": "",  

    "providerTransactionCode": "c2e6dde943f3fd97f9e9da893450f12d",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "16248646-3f26-4918-aac2-58bee303d7db"  

  },  

  "referenceNumber": "23111712390370582720",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response>\n  <transaction_type>authorize</transaction_type>\n  <status>error</status>\n  <unique_id>cb30b3b55a596ee65666e322c03e962a</unique_id>\n  <transaction_id>74c36d86-4da4-4c39-9e4d-526f8a43c17b</transaction_id>\n  <code>340</code>\n  <technical_message>'card_number' is invalid</technical_message>\n  <message>Please check input data for errors!</message>\n  <mode>test</mode>\n  <timestamp>2023-11-17T18:49:03Z</timestamp>\n  <descriptor>TokenEx</descriptor>\n  <amount>1000</amount>\n  <currency>EUR</currency>\n  <sent_to_acquirer>false</sent_to_acquirer>\n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "340",  

        "message": "'card_number' is invalid",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "cb30b3b55a596ee65666e322c03e962a",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {}  

    },  

    "merchantReferenceId": "74c36d86-4da4-4c39-9e4d-526f8a43c17b"  

  },  

  "referenceNumber": "23111712394268840908",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>51</scheme_response_code> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>51</response_code> \n  <code>540</code> \n  <technical_message>Not sufficient funds</technical_message> \n  <message>Amount exceeds credit card limit.</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "540",  

        "message": "Amount exceeds credit card limit.",  

        "source": "Gateway"  

      },  

      {  

        "code": "51",  

        "message": "Not sufficient funds",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID"  

  },  

  "referenceNumber": "023120516155506635941",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "forwardedRequest": null,  

    "rawResponse": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<payment_response> \n  <transaction_type>authorize</transaction_type> \n  <status>declined</status> \n  <cvv_result_code>M</cvv_result_code> \n  <retrieval_reference_number>333500197910</retrieval_reference_number> \n  <scheme_response_code>14</scheme_response_code> \n <recurring_advice_code>22</recurring_advice_code> \n <recurring_advice_text>dis be gotten declined</recurring_advice_text> \n  <unique_id>unique ID</unique_id> \n  <transaction_id>transaction ID</transaction_id> \n  <consumer_id>consumer Nr</consumer_id> \n  <token>token</token> \n  <response_code>19</response_code> \n  <code>500</code> \n  <technical_message>System Error, Re - enter transaction</technical_message> \n  <message>Transaction declined by issuer</message> \n  <mode>live</mode> \n  <timestamp>2023-11-05T11:26:26Z</timestamp> \n  <descriptor>descriptor</descriptor> \n  <amount>2000</amount> \n  <currency>USD</currency> \n  <sent_to_acquirer>true</sent_to_acquirer> \n  <scheme_transaction_identifier>identifier</scheme_transaction_identifier> \n</payment_response>\n",  

    "gatewayErrors": [  

      {  

        "code": "500",  

        "message": "Transaction declined by issuer",  

        "source": "Gateway"  

      },  

      {  

        "code": "19",  

        "message": "System Error, Re - enter transaction",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "unique ID",  

    "approved": false,  

    "verificationResult": {  

      "cvvRaw": "M",  

      "providerParsed": {}  

    },  

    "networkTransactionId": "identifier",  

    "gatewayToken": "token",  

    "customerProfileId": "consumer Nr",  

    "merchantReferenceId": "transaction ID",  

    "brandCategoryCode": "14",  

    "recurringAdviceCode": "22",  

    "recurringAdviceDescription": "it got declined"  

  },  

  "referenceNumber": "24092613503857421199",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```