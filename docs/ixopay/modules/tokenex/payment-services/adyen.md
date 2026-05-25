---
title: Adyen Classic
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  Adyen
  Classic'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-adyen-responses-direct-link-responses
- api
- 3ds
- 3d-secure
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen
portal: ixopay-modules
updated: '2026-05-25'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Adyen Classic

# Adyen Classic
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `Check`, `OrderInfo `, `SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Adyen forwards requests to the below endpoints.
warning
Production requests must include the livePrefix field (detailed in parameters). TokenEx uses this field to forward requests to the appropriate endpoints. This field is not necessary for the Test environment.  
| Action  | Prod Endpoint  | Test Endpoint  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase, Check Purchase  |   |   |  
| Card Capture  |   |   |  
| Card Refund, Check Refund  |   |   |  
| Card Void, Check Void  |   |   |  
## Supported Request Parameters:[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#supported-request-parameters "Direct link to Supported Request Parameters:")
* denotes a required field  
| Field Name  | Type  | Adyen Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | Adyen  |  
|  `userName`*  | string  | `UserName`  | Your Adyen User Name  
Not required if "PrivateKey" is provided  |  
|  `password`*  | string  | `Password`  | Your Adyen Password  
Not required if "PrivateKey" is provided  |  
|  `privateKey`*  | string  | `ApiKey`  | x-ApiKey from Adyen Portal  
Not required if "UserName" & "Password" is provided  |  
|  `merchantAccount`*  | string  | `PaymentRequest.MerchantAccount`  | The merchant account identifier, with which you want to process the transaction.  |  
| `livePrefix`  | string  | N/A  | This integration is built on the Adyen Classic Payments v51 API. Use this field to pass the merchant-specific live endpoint prefix.  **Required for Production**  |  
|  `reference`*  | string  | `PaymentRequest.Reference`  | The reference to uniquely identify a payment. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters.  |  
| `captureDelayHours`  | string  | `PaymentRequest.CaptureDelayHours`  | The delay between the authorisation and scheduled auto-capture, specified in hours. *Numbers only  |  
| `idempotencyKey`  | string  | `PaymentRequest.IdempotencyKey`  | The Adyen API supports idempotency, allowing you to retry a request multiple times while only performing the action once.   |  
| `amount`  | numeric  | `PaymentRequest.Amount.Value`  | The amount in minor units.  |  
| `currencyCode`  | string  | `PaymentRequest.Amount.Currency`  | The three-character ISO currency code. [Alpha-3 ISO currency code](https://www.iso.org/iso-4217-currency-codes.html)  
  
Use the ISO 4217 three-letter alphabetic code for the currency.  |  
|  `creditCard.FirstName`  
`creditCard.LastName`  | string  | `PaymentRequest.Card.HolderName`  | The name of the cardholder, as printed on the card.  |  
| `creditCard.FullName`  | string  | `PaymentRequest.Card.HolderName`  | The name of the cardholder, as printed on the card.  |  
| `creditCard.Number`  | string  | `PaymentRequest.Card.Number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `creditCard.StartMonth`  | numeric  | `PaymentRequest.Card.StartMonth`  | The month component of the start date (for some UK debit cards only). Format: 2 digits, zero-padded for single digits. Example: 03 = March, 11 = November  |  
| `creditCard.ExpMonth`  | numeric  | `PaymentRequest.Card.ExpiryMonth`  | The customer’s credit card expiration month. Format: 2 digits, zero-padded for single digits. Example: 03 = March, 11 = November  |  
| `creditCard.StartYear`  | numeric  | `PaymentRequest.Card.StartYear`  | The year component of the start date (for some UK debit cards only). Format: 4 digits. For example: 2020  |  
| `creditCard.ExpYear`  | numeric  | `PaymentRequest.Card.ExpiryYear`  | The customer’s credit card expiration year. Format: 4 digits. For example: 2020  |  
| `creditCard.Cvv`  | string  | `PaymentRequest.Card.Cvc`  | The card verification code (1-20 characters)  
  
Please refer to [Tokenization, Detokenization and CVV Retrieval](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics#tokenization-detokenization-and-cvv-retrieval).  
  
Depending on the card brand, it is known also as: CVV2/CVC2 – length: 3 digits, CID – length: 4 digits  |  
| `creditCard.Brand`  | string  | `PaymentRequest.Card.Brand`  | Optional Parameter. If not passed, will match pattern with the following cards and assign value.  |  
| `creditCard.IssueNumber`  | string  | `PaymentRequest.Card.IssueNumber`  | The issue number of the card (for some UK debit cards only).  |  
|  `check.FirstName`  
  
`Check.LastName`  | string  | `PaymentRequest.BankAccount.OwnerName`  | The name of the bank account holder.  |  
| `Check.FullName`  | string  | `PaymentRequest.BankAccount.OwnerName`  | The name of the bank account holder.  |  
| `check.BankCountryCode`  | string  | `PaymentRequest.BankAccount.CountryCode`  | Country code where the bank is located. A valid value is an ISO two-character country code (e.g. 'NL').  |  
| `check.AccountNumber`  | string  | `PaymentRequest.BankAccount.BankAccountNumber`  | The bank account number (without separators) or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `check.RoutingNumber`  | string  | `PaymentRequest.BankAccount.BankLocationId`  | The location id of the bank.  |  
| `check.BankName`  | string  | `PaymentRequest.BankAccount.BankName`  | The name of the bank.  |  
| `check.BankAccountHolderTaxId`  | string  | `PaymentRequest.BankAccount.TaxId`  | The bank account holder's tax ID.  |  
| `check.BankCity`  | string  | `PaymentRequest.BankAccount.BankCity`  | The bank city.  |  
| `orderInfo.CustomerId`  | string  | `PaymentRequest.AdditionalData.enhancedSchemeData.customerReference`  | Customer code, if supplied by a customer. Required for Level 2 data.  |  
| `tax.Amount`  | numeric  | `PaymentRequest.AdditionalData.enhancedSchemeData.totalTaxAmount`  | Total tax amount, in minor units. For example, 2000 means USD 20.00. Max length: 12 characters. Required for Level 2 data.  |  
| `tax.DestinationPostalCode`  | string  | `PaymentRequest.AdditionalData.enhancedSchemeData.destinationPostalCode`  | The postal code of a destination address. Max length: 10 characters. Required for American Express.  |  
| `billingAddress.Address1`  | string  | `PaymentRequest.BillingAddress.HouseNumberOrName`  | The number or name of the house. Maximum length: 3000 characters.  |  
| `billingAddress.Address2`  | string  | `PaymentRequest.BillingAddress.Street`  | The name of the street. Maximum length: 3000 characters. The house number should not be included in this field.  |  
| `billingAddress.City`  | string  | `PaymentRequest.BillingAddress.City`  | The name of the city. Maximum length: 3000 characters.  |  
| `billingAddress.State`  | string  | `PaymentRequest.BillingAddress.StateOrProvince`  | State or province codes as defined in ISO 3166-2. For example, CA in the US or ON in Canada.  |  
| `billingAddress.Zip`  | string  | `PaymentRequest.BillingAddress.PostalCode`  | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.  |  
| `billingAddress.Country`  | string  | `PaymentRequest.BillingAddress.Country`  | Three-Character Country Code [ISO country code](https://www.iso.org/iso-3166-country-codes.html).  
if provided, We convert this value to two-character country code.   
In case if it's unavailable, please pass it as blank value and we forward it as "ZZ" as Adyen docs suggested.  |  
| `billingAddress.Email`  | string  | `PaymentRequest.ShopperEmail`  | The shopper's email address.  |  
| `shippingAddress.Address1`  | string  | `PaymentRequest.DeliveryAddress.HouseNumberOrName`  | The number or name of the house. Maximum length: 3000 characters.  |  
| `shippingAddress.Address2`  | string  | `PaymentRequest.DeliveryAddress.Street`  | The name of the street. Maximum length: 3000 characters. The house number should not be included in this field.  |  
| `shippingAddress.City`  | string  | `PaymentRequest.DeliveryAddress.City`  | The name of the city. Maximum length: 3000 characters.  |  
| `shippingAddress.State`  | string  | `PaymentRequest.DeliveryAddress.StateOrProvince`  | State or province codes as defined in ISO 3166-2. For example, CA in the US or ON in Canada.  |  
| `shippingAddress.Zip`  | string  | `PaymentRequest.DeliveryAddress.PostalCode`  | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.  |  
| `shippingAddress.Country`  | string  | `PaymentRequest.DeliveryAddress.Country`  | Three-Character Country Code [ISO country code](https://www.iso.org/iso-3166-country-codes.html).  
if provided, We convert this value to two-character country code.   
In case if it's unavailable, please pass it as blank value and we forward it as "ZZ" as Adyen docs suggested.  |  
| `threeDSecure.CAVV`  | string  | `mpiData.cavv`  | The cardholder authentication value  |  
| `threeDSecure.AuthenticationResponse`  | string(1)  | `mpidata.authenticationResponse`  | This is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.  |  
| `threeDSecure.DirectoryResponse`  | string(1)  | `mpiData.directoryResponse`  | This is the `transStatus` from the `ARes`.  |  
| `threeDSecure.ECI`  | string  | `mpiData.eci`  | The electronic commerce indicator.  |  
| `threeDSecure.DSTransId`  | string  | `mpiData.dsTransID`  | The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `mpiData.threeDSVersion`  | The version of the EMV 3D Secure protocol.  
  
For backwards compatibility, these values will be mapped to the following 3DS versions:  
1 = 3DS 2.1.0  
2 = 3DS 2.2.0  |  
| `storedCredentials.Initiator`  | string  | `unmapped`  |   |  
| `storedCredentials.CredentialStored`  | boolean  | `shopperInteraction`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). True = "ContAuth", False = "Ecommerce".  |  
| `storedCredentials.PreviousNetworkTransactionId`  | string  | [networkTxReference](https://docs.adyen.com/api-explorer/Payment/68/post/authorise#request-additionalData-AdditionalDataCommon-networkTxReference)  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). Value obtained from Adyen response field additionalData.networkTxReference. This response field must be turned on from the Adyen portal -> Developers -> Additional Data -> Acquirer Section -> select Network Transaction Reference. Save configuration.  |  
| `storedCredentials.TransactionType`  | string  | `recurringProcessingModel`  | Valid values:  
"recurring" = "Subscription",  
"installment" = "Subscription",  
"unscheduled" = "UnscheduledCardOnFile".  
any other string value that can be parsed into "Subscription", "CardOnFile", or "UnscheduledCardOnFile" will be forwarded. If the value cannot be parsed and does not match the valid values above, an error will be thrown.  |  
| `softDescriptors.pspReference`  | string  | `shopperStatement`  | The reference number that is tied to a request/transaction that will show on the shopper's bank statement. See ShopperStatement callout below.  |  
| `softDescriptors.merchantPhone`  | string  | `shopperStatement`  | The merchant phone number that will show on the shopper's bank statement. See ShopperStatement callout below.  |  
| `softDescriptors.merchantUrl`  | string  | `shopperStatement`  | The merchant URL that will show up on the shopper's bank statement. See ShopperStatement callout below.  |  
| `softDescriptors.supportPhoneNumber`  | string  | `shopperStatement`  | The merchant phone number for support that will show up on the shopper's bank statement. See ShopperStatement callout below.  |  
| `softDescriptors.shopperStatement`  | string  | `shopperStatement`  | If present, this value will override the shopper statement generated by the other soft descriptor fields and will be sent to Adyen. See ShopperStatement callout below.  |  
Soft Descriptors - ShopperStatement Construction
The following fields are utilized when generating a value for ShopperStatement: Reference, SoftDescriptors.PspReference, SoftDescriptors.MerchantPhone, SoftDescriptors.MerchantUrl, and SoftDescriptors.SupportPhoneNumber. When a one or more of the fields are assigned, their key-value-pairs are concatenated and assigned to ShopperStatement. Example output: `pspReference: b56dq6ejkhkyq0to phoneNumber: 555-555-5555 merchantUrl: https://www.merchant.com supportPhoneNumber: 555-555-5555`
To bypass the formatting above, send a value in SoftDescriptors.ShopperStatement.  
The value Adyen receives from ShopperStatement is visible within the Adyen merchant portal's description of that transaction's Shopper Details.
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * 3DS Authenticated Card Authorize/Purchase
  * Card Capture/Refund
  * Card Void
  * ACH Purchase
  * ACH Refund
  * ACH Void
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Adyen Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `ApprovalCode`  | string  | `PaymentResult.AuthCode`  | Approval code  |  
| `Approved`  | boolean  | `PaymentResult.RefusalReason`  | Transaction Outcome   
If PaymentResult.RefusalReason is empty.  |  
| `ProviderTransactionCode`  | string  | `PaymentResult.PspReference`  | Adyen's 16-character reference associated with the transaction/request.  |  
| `BrandAuthResponseCode`  | string  | `additionalData.refusalReasonRaw`  | First part of the refusal Reason.  |  
| `BrandAuthResponseCodeDescription`  | string  | `additionalData.refusalReasonRaw`  | Second part of the refusal reason.  |  
| `RecurringAdviceCode`  | string  | `additionalData.merchantAdviceRaw`  | First part of the merchant advice.  |  
| `RecurringAdviceDescription`  | string  | `additionalData.merchantAdviceRaw`  | Second part of the merchant advice.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#overview)
  * [Supported Request Parameters:](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen#example-responses)
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "storedCredentials": {  

    "credentialStored": true,  

    "transactionType": "installment",  

    "previousNetworkTransactionId": "HKF5ISPDV0922"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "gateway": "Adyen",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "amount": 120,  

  "captureDelayHours": 0,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "creditCard": {  

    "brand": "Visa",  

    "number": "4000000000000002",  

    "startMonth": 1,  

    "expMonth": 6,  

    "startYear": 2020,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "cvv": "123",  

    "issueNumber": "<Card Issuer Number>"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "tax": {  

    "destinationPostalCode": "74111",  

    "amount": 639  

  },  

  "orderInfo": {  

    "customerId": "CustomerCode"  

  },  

  "threeDSecure": {  

    "directoryResponse": "Y",  

    "dsTransID": "a5ee7737-4bc0-4296-94c9-d9fa2c74b904",  

    "threeDSecureVersion": "2.2.0",  

    "eci": "02",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA" // Mapped from threeDSecureResponse.authenticationValue.  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "testMode": true,  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "gateway": "Adyen",  

  "amount": 120,  

  "shippingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "check": {  

    "accountNumber": "987654321",  

    "routingNumber": "021000021",  

    "firstName": "Tonya",  

    "lastName": "Runolfsson",  

    "bankCountryCode": "US"  

  },  

  "billingAddress": {  

    "address1": "123",  

    "address2": " Someplace Lane",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  }  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "amount": 14,  

  "gateway": "Adyen",  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantId": "<Your merchant account identifier>",  

  "username": "<Your Adyen User Name>",  

  "password": "<Your Adyen Password>",  

  "idempotencyKey": "<Your Idempotency Key>",  

  "testMode": true,  

  "reference": "<Your Reference>",  

  "tokenExTransactionCode": "<TokenExTransactionCode provided by Authorize/Purchase call>",  

  "gateway": "Adyen"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"095734\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"095734\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"NuWFE8PbN190JnT5cikH8aDmR9Fir\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"UIG3DLGB51130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"dR-e9929a_e\"\r\n  },\r\n  \"pspReference\": \"TTQGFQFDDV8DCG65\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "VFRRR0ZRRkREVjhEQ0c2NQ==",  

    "approvalCode": "095734",  

    "providerTransactionCode": "TTQGFQFDDV8DCG65",  

    "approved": true  

  },  

  "referenceNumber": "23113010061326918600",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Authorised\",\r\n  \"authCode\": \"021244\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"authCode\": \"021244\",\r\n    \"avsResult\": \"4 AVS not supported for this card type\",\r\n    \"PaymentAccountReference\": \"8vw0MUTvuzwoPFBX5RIgKMV0clmmw\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"1O9Q00AGO1130\",\r\n    \"refusalReasonRaw\": \"AUTHORISED\",\r\n    \"checkout.cardAddedBrand\": \"mccommercialdebit\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"1 Matches\",\r\n    \"avsResultRaw\": \"4\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"M\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\",\r\n    \"acquirerReference\": \"Z32FXVKD2DW\"\r\n  },\r\n  \"pspReference\": \"JQ7NKPM97NK2WN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SlE3TktQTTk3TksyV044Mg==",  

    "approvalCode": "021244",  

    "providerTransactionCode": "JQ7NKPM97NK2WN82",  

    "approved": true  

  },  

  "referenceNumber": "23113010064974550858",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[capture-received]\",\r\n  \"pspReference\": \"GTW6NJDPCTGLNK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "R1RXNk5KRFBDVEdMTks4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "GTW6NJDPCTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010073397381705",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[refund-received]\",\r\n  \"pspReference\": \"R3WSQ6FQ9HXXGN82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UjNXU1E2RlE5SFhYR044Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "R3WSQ6FQ9HXXGN82",  

    "approved": true  

  },  

  "referenceNumber": "2311301008308849707",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"response\": \"[cancel-received]\",\r\n  \"pspReference\": \"H63RQ9RWV8NKGK82\"\r\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "SDYzUlE5UldWOE5LR0s4Mg==",  

    "approvalCode": "",  

    "providerTransactionCode": "H63RQ9RWV8NKGK82",  

    "approved": true  

  },  

  "referenceNumber": "23113010092572778946",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"status\":422,\"errorCode\":\"130\",\"message\":\"Required field 'reference' is not provided.\",\"errorType\":\"validation\"}",  

    "gatewayErrors": [  

      {  

        "code": "130",  

        "message": "Required field 'reference' is not provided."  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "23120816384059190994",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "422"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\r\n  \"resultCode\": \"Refused\",\r\n  \"refusalReason\": \"Acquirer Fraud\",\r\n  \"additionalData\": {\r\n    \"liabilityShift\": \"false\",\r\n    \"avsResult\": \"2 Neither postal code nor address match\",\r\n    \"PaymentAccountReference\": \"fqD5a6TmSrPLFeisXCKlx2z4i3y1W\",\r\n    \"threeDOffered\": \"false\",\r\n    \"networkTxReference\": \"AUYBO6L891208\",\r\n    \"checkout.cardAddedBrand\": \"mc\",\r\n    \"expiryDate\": \"3/2030\",\r\n    \"cvcResult\": \"5 Issuer not certified for CVC/CVV\",\r\n    \"recurringProcessingModel\": \"Subscription\",\r\n    \"avsResultRaw\": \"2\",\r\n    \"threeDAuthenticated\": \"false\",\r\n    \"paymentMethod\": \"mc\",\r\n    \"retry.attempt1.shopperInteraction\": \"Ecommerce\",\r\n    \"cvcResultRaw\": \"U\",\r\n    \"acquirerCode\": \"TestPmmAcquirer\"\r\n  },\r\n  \"pspReference\": \"W9J6TC63LZVKTH65\"\r\n}",  

    "gatewayErrors": [  

      {  

        "code": "Refused",  

        "message": "Acquirer Fraud"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "W9J6TC63LZVKTH65",  

    "approved": false  

  },  

  "referenceNumber": "23120816393924066115",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```