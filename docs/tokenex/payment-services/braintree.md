---
title: Braintree
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-braintree-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-braintree-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-braintree-requests-direct-link-requests
- gateway-response-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-braintree-gateway-response-parameters-direct-link-gateway-response-parameters
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-braintree-responses-direct-link-responses
- api
- 3ds
- 3d-secure
- pci
- tokenex
source_url: ''
portal: tokenex
updated: '2026-04-10'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Braintree

# Braintree
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `OrderInfo`, `SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Braintree forwards request to the below endpoints  
| Action  | Production  | Sandbox  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase  |  `https://api.braintreegateway.com/merchants/{merchantId}/transaction`s  | `https://api.sandbox.braintreegateway.com/merchants/{merchantId}/transactions`  |  
| Card Capture  | `https://api.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/submit_for_settlement`  | `https://api.sandbox.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/submit_for_settlement`  |  
| Card Refund  | `https://api.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/refund`  | `https://api.sandbox.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/refund`  |  
| Card Void  | `https://api.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/void`  | `https://api.sandbox.braintreegateway.com/merchants/{merchantId}/transactions/{transaction.id}/void`  |  
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | Braintree Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | Braintree  |  
|  `merchantId`*  | string  | `MerchantAccountId`  | This is the unique identifier for your entire Braintree gateway account, including the multiple merchant accounts that may be in your gateway. Often referred to as the public ID or production ID, your Braintree merchant ID will be different for your production and sandbox gateways.  |  
|  `publicKey`*  | string  | `PublicKey`  | This is your Braintree user-specific public identifier. Each user associated with your Braintree gateway will have their own public key.  |  
|  `privateKey`*  | string  | `PrivateKey`  | This is your Braintree user-specific private identifier. Each user associated with your Braintree gateway will have their own private key. Your private key should not be shared outside the use of an API call.  |  
| `testMode`  | boolean  | `Environment`  | True = SANDBOX, False = PRODUCTION  |  
| `amount`  | int  | `Amount`  | Transaction amount in whole units. Example: $10.00 USD should be sent as 1000  |  
| `currencyCode`  | string  | `CurrencyIsoCode`  | The ISO currency code pertaining to the amount  |  
| `orderId`  | string  | `OrderId`  | Use this field to pass additional information about the transaction  |  
| `store`  | string  | `Customer.Id`  | A string value that will represent this specific customer in your Braintree Vault. If blank, CustomerId will be used instead. Additionally, if blank, Options.StoreInVault will be `false`. See Braintree documentation for additional information.  |  
| `customerId`  | string  | `Customer.Id`  | A string value that will represent this specific customer in your Braintree Vault.  |  
| `email`  | string  | `Customer.Email`  | Email address composed of ASCII characters. 255 character maximum  |  
| `storeInVaultOnSuccess`  | boolean (nullable)  | `Options.StoreInVaultOnSuccess`  | The option that determines whether the payment method associated with the successful transaction should be stored in the Braintree Vault.  |  
| `submitForSettlement`  | boolean  | `Options.SubmitForSettlement`  | The option that determines whether an authorized transaction is submitted for settlement. Always `true` for Purchase requests  |  
| `holdInEscrow`  | boolean  | `Options.HoldInEscrow`  | For Braintree Marketplace merchants only. This value specifies whether a transaction is held in escrow.  |  
| `customFields`  | object  | `CustomFields`  | A collection of custom field/value pairs. Fields and values must be formatted as strings or integers. See Braintree documentation for additional information.  |  
| `userData1`  | string  | `DeviceData`  | Legacy field for passing in DeviceData. Used only if `DeviceData` is empty  |  
| `deviceData`  | string  | `DeviceData`  | Customer device information. Required when using Advanced Fraud Management Tools, when creating one-time Vaulted PayPal transactions, and when creating Venmo transactions. See Braintree documentation for additional information.  |  
| `merchantAccountId`  | string  | `MerchantAccountId`  | The merchant account ID used to create a transaction. Currency is also determined by merchant account ID. If no merchant account ID is specified, Braintree will use your default Braintree merchant account.  |  
| `transactionSource`  | string  | `TransactionSource`  | Specifies the source of the transaction. The value passed depends on whether the transaction is initiated by the merchant or the customer. If empty, "recurring" or "unscheduled" are used, depending on the value of `Recurring`  |  
| `recurring`  | boolean  | `TransactionSource`  | If `TransactionSource` is empty, True = "recurring", False = "unscheduled"  |  
| `channel`  | string  | `Channel`  | For Braintree partners and shopping carts only. If you are a shopping cart provider or other Braintree partner, pass a string identifier for your service. For PayPal transactions, this maps to paypal.bn_code.  |  
| `paymentMethodToken`  | string  | `PaymentMethodToken`  | An alphanumeric value that references a specific payment method stored in your Braintree Vault. Must be less than or equal to 36 characters. See Braintree documentation for additional information.  |  
| `paymentMethodNonce`  | string  | `PaymentMethodNonce`  | One-time-use reference to payment information provided by your customer, such as a credit card or PayPal account. Can be passed instead of a PaymentMethodToken parameter.  |  
| `creditCard.FirstName`  | string  | `Customer.FirstName`  | The first name of the cardholder. CreditCard.FirstName and CreditCard.LastName are concatenated and filled into the `CreditCard.CardHolderName` property of the Braintree request  |  
| `creditCard.LastName`  | string  | `Customer.LastName`  | The last name of the cardholder. CreditCard.FirstName and CreditCard.LastName are concatenated and filled into the `CreditCard.CardHolderName` property of the Braintree request  |  
| `creditCard.Number`  | string / Token  | `CreditCard.Number`  | Card number or TokenEx Token - TokenEx will replace the Token with the Detokenized number  |  
| `creditCard.CVV`  | string  | `CreditCard.CVV`  | The three- or four-digit number on the back of a credit card (on the front for American Express).  
  
This field is required if the merchant would like to use the Card Code Verification (CCV) security feature.  
  
Cardholder information must be stored securely and in accordance with the Payment Card Industry (PCI) Data Security Standard.  |  
| `creditCard.ExpMonth`  | numeric  | `CreditCard.ExpirationMonth`  | The two-digit expiration month of the card. Example: 01  |  
| `creditCard.ExpYear`  | numeric  | `CreditCard.ExpirationYear`  | The four-digit expiration year of the card. Example: 2022  |  
| `threeDSecure.AuthenticationRequired`  | boolean  | `Options.ThreeDSecure.Required`  | Indicates whether the Braintree request should be validated as a 3DS-enabled transaction. [More information](https://developer.paypal.com/braintree/docs/guides/3d-secure/server-side#advanced-server-side-options)  |  
| `threeDSecure.ThreeDSecureAuthenticationId`  | string  | `ThreeDSecureAuthenticationId`  | ID of the 3D Secure authentication performed for this transaction. Do not provide this field if you are using a nonce for this transaction that is 3D Secure enriched.  |  
| `threeDSecure.CAVV`  | string  | `ThreeDSecurePassThru.Cavv`  | The Cardholder Authentication Verification Value (CAVV) for a Visa transaction, or Accountholder Authentication Value (AVV)/ Universal Cardholder Authentication Field indicator (UCAF) for a Mastercard transaction. The cardholder authentication process generates the CAVV, AAV, or UCAF value prior to submitting the transaction.  |  
| `threeDSecure.DSTransId`  | string  | `ThreeDSecurePassThru.DsTransactionId`  | Transaction identifier resulting from 3D Secure 2 authentication. This field must be supplied for Mastercard Identity Check.  |  
| `threeDSecure.ECI`  | string  | `ThreeDSecurePassThru.EciFlag`  | The Electronic Commerce Indicator (ECI) value for a Visa transaction, or the Universal Cardholder Authentication Field indicator (UCAF) for a Mastercard transaction. The cardholder authentication process generates the ECI or UCAF value prior to submitting the transaction.  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `ThreeDSecurePassThru.ThreeDSecureVersion`  | The version of 3D-Secure used for authentication. 1 (for 2.1.0) or 2 (for 2.2.0). Values not "1" or "2" are forwarded to Braintree unmodified.  |  
| `threeDSecure.Xid`  | string  | `ThreeDSecurePassThru.Xid`  | Transaction identifier resulting from 3D Secure authentication. Uniquely identifies the transaction and sometimes required in the authorization message. Must be base64-encoded. No longer used in 3D Secure 2 authentications.  |  
| `shippingAddress.Address1`  | string  | `ShippingAddress.StreetAddress`  | Customer’s shipping address.  |  
| `shippingAddress.Address2`  | string  | `ShippingAddress.ExtendedAddress`  | Customer’s shipping address, line 2.  |  
| `shippingAddress.Company`  | string  | `ShippingAddress.Company`  | Company associated with customer’s shipping address.  |  
| `shippingAddress.City`  | string  | `ShippingAddress.Locality`  | City of customer’s shipping address.  |  
| `shippingAddress.State`  | string  | `ShippingAddress.Region`  | State of customer’s shipping address.  |  
| `shippingAddress.Zip`  | string  | `ShippingAddress.PostalCode`  | Postal code of customer’s shipping address.  |  
| `shippingAddress.Country`  | string  | `ShippingAddress.CountryCodeAlpha3`  | Alpha-3 ISO country code  |  
| `billingAddress.Address1`  | string  | `BillingAddress.StreetAddress`  | Customer’s billing address. BillingAddress is mapped if not using a PaymentMethodToken  |  
| `billingAddress.Address2`  | string  | `BillingAddress.ExtendedAddress`  | Second line of customer’s billing address.  |  
| `billingAddress.Company`  | string  | `BillingAddress.Company`  | Company associated with customer’s billing address.  |  
| `billingAddress.City`  | string  | `BillingAddress.Locality`  | City of customer’s billing address.  |  
| `billingAddress.State`  | string  | `BillingAddress.Region`  | State of customer’s billing address.  |  
| `billingAddress.Zip`  | string  | `BillingAddress.PostalCode`  | Postal code of customer’s billing address.  |  
| `billingAddress.Country`  | string  | `BillingAddress.CountryCodeAlpha3`  | Alpha-3 ISO country code  |  
| `softDescriptors.MerchantName`  | string  | `Descriptor.Name`  | Dynamic descriptors are sent on a per-transaction basis and define what will appear on your customers' credit card statements for a specific purchase. See Braintree documentation for additional information  |  
| `softDescriptors.MerchantPhone`  | string  | `Descriptor.Phone`  | The phone number that will appear on your customers' credit card statements for a specific purchase. See Braintree documentation for additional information  |  
| `softDescriptors.MerchantUrl`  | string  | `Descriptor.Url`  | The URL that will appear on your customers' credit card statements for a specific purchase. See Braintree documentation for additional information  |  
| `orderInfo.PurchaseOrderNumber`  | string  | `PurchaseOrderNumber`  | The PO number for the order.  |  
| `tax.Exempt`  | boolean  | `TaxExempt`  | Order's tax-exempt status.  |  
| `tax.Amount`  | int  | `TaxAmount`  | Tax amount in whole units. Example: $10.00 USD should be sent as 1000  |  
| `storedCredentials.Initiator`  | string  | `unmapped`  | If "cardholder", TransactionSource is auto-populated with "recurring_first".  |  
| `storedCredentials.CredentialStored`  | boolean  | `ExternalVault.Status`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). True = "vaulted", False = "will_vault".  |  
| `storedCredentials.PreviousNetworkTransactionId`  | string  | `ExternalVault.PreviousNetworkTransactionId`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). Value obtained from Braintree response field Target.NetworkTransactionId.  |  
| `storedCredentials.TransactionType`  | string  | `TransactionSource`  | See storedCredentials.Initiator.  
valid values:  
"recurring" = "recurring"  
"unscheduled" = "unscheduled"  
any other string value = forwarded. See [Braintree documentation](https://developer.paypal.com/braintree/docs/reference/request/transaction/sale#transaction_source)  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Void
  * Card Refund

```
{  
  "publicKey": "<Your Braintree Public Key>",  
  "privateKey": "<Your Braintree Private Key>",  
  "merchantId": "<Your Braintree Merchant ID>",  
  "orderId": "81553724",  
  "email": "john.doe@hotmail.com",  
  "merchantAccountId": "<Your Braintree Merchant Account ID>",  
  "creditCard": {  
    "brand": "Visa",  
    "number": "4111111111111111",  
    "expMonth": 6,  
    "expYear": 2024,  
    "firstName": "John",  
    "lastName": "Doe",  
    "cvv": "123"  
  },  
  "billingAddress": {  
    "phone": "555-555-5555",  
    "fax": "555-555-6666",  
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
  "amount": 1200,  
  "gateway": "Braintree"  
}  

```

```
{  
  "publicKey": "<Your Braintree Public Key>",  
  "privateKey": "<Your Braintree Private Key>",  
  "merchantId": "<Your Braintree Merchant ID>",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize call>",  
  "gateway": "Braintree"  
}  

```
{  
  "publicKey": "<Your Braintree Public Key>",  
  "privateKey": "<Your Braintree Private Key>",  
  "merchantId": "<Your Braintree Merchant ID>",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase call>",  
  "gateway": "Braintree"  
}  

```
{  
  "publicKey": "<Your Braintree Public Key>",  
  "privateKey": "<Your Braintree Private Key>",  
  "merchantId": "<Your Braintree Merchant ID>",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  
  "gateway": "Braintree",  
  "amount": 1200  
}  

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Braintree Result Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approvalCode`  | string  | `Target.ProcessorAuthorizationCode`  | A six-character pseudo-ID from the processing network.  |  
| `approved`  | boolean  | `IsSuccess`  | True if the transaction result is successful, false if it failed  |  
| `providerTransactionCode`  | string  |  `Target.Id`  
`Transaction.Id`  | Transaction ID of the newly run transaction  |  
| `tokenexTransactionCode`  | string  | `Target.Id`  | Base64 encoded Braintree gateway response field Target.Id  |  
| `networkTransactionId`  | string  |  `Target.NetworkTransactionId`  
`Transaction.NetworkTransactionId`  | The network transaction identifier provided by the payment network.  |  
| `merchantReferenceId`  | string  |  `Target.OrderId`  
`Transaction.OrderId`  | The order ID of the transaction.  |  
| `customerProfileId`  | string  |  `Target.Customer.Id`  
`Transaction.Customer.Id`  | Reference value that is associated with the customer's at the time of the transaction.  |  
| `gatewayToken`  | string  | `Target.CreditCard.Token`  | The Braintree vault token for the credit card  |  
| `brandAuthResponseCode`  | string  | `Target.NetworkResponseCode`  | Decline code at the card brand level. Also known as Issuer Response Codes.  |  
| `brandAuthResponseCodeDescription`  | string  | `Target.NetworkResponseText`  | The description for the Brand authorization response code.  |  
| `recurringAdviceCode`  | string  | `Target.MerchantAdviceCode`  | Code provided by the card network offering a suggestion of when the transaction should be retried. Currently this value is only provided by MasterCard as the Merchant Advice Code (MAC Code).  |  
| `recurringAdviceDescription`  | string  | `Target.MerchantAdviceCodeText`  | The description for the Retry Advice Code.  |  
| `verificationResult.CvvRaw`  | string  |  `Target.CvvResponseCode`  
`Transaction.CvvResponseCode`  | The processing bank's response to the card verification value (CVV) provided by the customer. Possible values:   
  
M = Matches   
N = Does not match   
U = Not verified   
I = Not provided   
S = Issuer does not participate   
A = Not applicable   
B = Bypass  |  
| `verificationResult.ProviderParsed.Avs`  | string  |  `Target.AvsErrorResponseCode`  
`Transaction.AvsErrorResponseCode`  | This field is populated if there was an error when checking AVS or the processing bank does not support AVS. Possible values:   
  
S = Issuing bank does not support AVS   
E = AVS system error  |  
| `verificationResult.ProviderParsed.StreetMatch`  | string  |  `Target.AvsStreetAddressResponseCode`  
`Transaction.AvsStreetAddressResponseCode`  | This is populated if the processor supports the address verification system (AVS). Possible values:   
  
M = Matches   
N = Does not match   
U = Not verified   
I = Not provided   
A = Not applicable   
B = Bypass  |  
| `verificationResult.ProviderParsed.PostalCodeMatch`  | string  |  `Target.AvsPostalCodeResponseCode`  
`Transaction.AvsPostalCodeResponseCode`  | This is populated if the processor supports the address verification system (AVS). Possible values:   
  
M = Matches   
N = Does not match   
U = Not verified   
I = Not provided   
A = Not applicable   
B = Bypass  |  
| `brandAuthResponseCode`  | string  | `networkResponseCode`  | Card brand code on why the transaction failed.  |  
| `brandAuthResponseCodeDescription`  | string  | `networkResponseText`  | Card brand description on why the transaction failed.  |  
| `recurringAdviceCode`  | string  | `merchantAdviceCode`  | Merchant code on why the transaction failed.  |  
| `recurringAdviceDescription`  | string  | `merchantAdviceCodeText`  | Merchant description on why the transaction failed.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#example-responses "Direct link to Example Responses")
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
    "rawResponse": "{\"Target\":{\"Id\":\"b781pn2z\",\"AddOns\":[],\"Amount\":917.01,\"AvsPostalCodeResponseCode\":\"M\",\"AvsStreetAddressResponseCode\":\"M\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"Channel\":\"TokenEx_SP\",\"CreatedAt\":\"2023-12-04T13:47:28Z\",\"CreditCard\":{\"Bin\":\"400000\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1000\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"01\",\"ExpirationYear\":\"2025\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"01/2025\",\"MaskedNumber\":\"400000******1000\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\"},\"CvvResponseCode\":\"M\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"dHJhbnNhY3Rpb25fYjc4MXBuMno\",\"MerchantAccountId\":\"tokenex\",\"ProcessedWithNetworkToken\":false,\"ProcessorAuthorizationCode\":\"4VGBS3\",\"ProcessorResponseType\":0,\"ProcessorResponseCode\":\"1000\",\"ProcessorResponseText\":\"Approved\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"Recurring\":false,\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":1,\"StatusHistory\":[{\"Amount\":917.01,\"Status\":1,\"Timestamp\":\"2023-12-04T13:47:28Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":1,\"UpdatedAt\":\"2023-12-04T13:47:28Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231204134728\",\"AuthorizationExpiresAt\":\"2023-12-05T13:47:28Z\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "Yjc4MXBuMno=",  
    "approvalCode": "4VGBS3",  
    "providerTransactionCode": "b781pn2z",  
    "approved": true,  
    "verificationResult": {  
      "cvvRaw": "M",  
      "providerParsed": {  
        "streetMatch": "M",  
        "postalCodeMatch": "M"  
      }  
    },  
    "networkTransactionId": "020231204134728"  
  },  
  "referenceNumber": "23120407472778674556",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Target\":{\"Id\":\"p67g2yb9\",\"AddOns\":[],\"Amount\":917.01,\"AvsPostalCodeResponseCode\":\"M\",\"AvsStreetAddressResponseCode\":\"M\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"Channel\":\"TokenEx_SP\",\"CreatedAt\":\"2023-12-04T14:20:42Z\",\"CreditCard\":{\"Bin\":\"400000\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1000\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"01\",\"ExpirationYear\":\"2025\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"01/2025\",\"MaskedNumber\":\"400000******1000\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\"},\"CvvResponseCode\":\"M\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"dHJhbnNhY3Rpb25fcDY3ZzJ5Yjk\",\"MerchantAccountId\":\"tokenex\",\"ProcessedWithNetworkToken\":false,\"ProcessorAuthorizationCode\":\"03256Q\",\"ProcessorResponseType\":0,\"ProcessorResponseCode\":\"1000\",\"ProcessorResponseText\":\"Approved\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"Recurring\":false,\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":8,\"StatusHistory\":[{\"Amount\":917.01,\"Status\":1,\"Timestamp\":\"2023-12-04T14:20:44Z\",\"Source\":0,\"User\":\"tmaguire\"},{\"Amount\":917.01,\"Status\":8,\"Timestamp\":\"2023-12-04T14:20:44Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":1,\"UpdatedAt\":\"2023-12-04T14:20:44Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231204142043\",\"AuthorizationExpiresAt\":\"2023-12-05T14:20:43Z\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "cDY3ZzJ5Yjk=",  
    "approvalCode": "03256Q",  
    "providerTransactionCode": "p67g2yb9",  
    "approved": true,  
    "verificationResult": {  
      "cvvRaw": "M",  
      "providerParsed": {  
        "streetMatch": "M",  
        "postalCodeMatch": "M"  
      }  
    },  
    "networkTransactionId": "020231204142043"  
  },  
  "referenceNumber": "2312040820379483992",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Target\":{\"Id\":\"b781pn2z\",\"AddOns\":[],\"Amount\":917.01,\"AvsPostalCodeResponseCode\":\"M\",\"AvsStreetAddressResponseCode\":\"M\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"Channel\":\"TokenEx_SP\",\"CreatedAt\":\"2023-12-04T13:47:28Z\",\"CreditCard\":{\"Bin\":\"400000\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1000\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"01\",\"ExpirationYear\":\"2025\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"01/2025\",\"MaskedNumber\":\"400000******1000\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\"},\"CvvResponseCode\":\"M\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"dHJhbnNhY3Rpb25fYjc4MXBuMno\",\"MerchantAccountId\":\"tokenex\",\"ProcessedWithNetworkToken\":false,\"ProcessorAuthorizationCode\":\"4VGBS3\",\"ProcessorResponseType\":0,\"ProcessorResponseCode\":\"1000\",\"ProcessorResponseText\":\"Approved\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"Recurring\":false,\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":8,\"StatusHistory\":[{\"Amount\":917.01,\"Status\":1,\"Timestamp\":\"2023-12-04T13:47:28Z\",\"Source\":0,\"User\":\"tmaguire\"},{\"Amount\":917.01,\"Status\":8,\"Timestamp\":\"2023-12-04T13:48:05Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":1,\"UpdatedAt\":\"2023-12-04T13:48:05Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231204134728\",\"AuthorizationExpiresAt\":\"2023-12-05T13:47:28Z\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "Yjc4MXBuMno=",  
    "approvalCode": "4VGBS3",  
    "providerTransactionCode": "b781pn2z",  
    "approved": true,  
    "verificationResult": {  
      "cvvRaw": "M",  
      "providerParsed": {  
        "streetMatch": "M",  
        "postalCodeMatch": "M"  
      }  
    },  
    "networkTransactionId": "020231204134728"  
  },  
  "referenceNumber": "2312040748031605347",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Target\":{\"Id\":\"e1wcap1f\",\"AddOns\":[],\"Amount\":5.00,\"AvsPostalCodeResponseCode\":\"B\",\"AvsStreetAddressResponseCode\":\"B\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"CreatedAt\":\"2023-12-04T14:22:17Z\",\"CreditCard\":{\"Bin\":\"411111\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1111\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"06\",\"ExpirationYear\":\"2026\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"06/2026\",\"MaskedNumber\":\"411111******1111\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\",\"Email\":\"Jonathan.Bergstrom@yahoo.com\"},\"CvvResponseCode\":\"B\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"cmVmdW5kX2Uxd2NhcDFm\",\"MerchantAccountId\":\"tokenex\",\"OrderId\":\"19937989\",\"ProcessedWithNetworkToken\":false,\"ProcessorAuthorizationCode\":\"K1SL9B\",\"ProcessorResponseType\":0,\"ProcessorResponseCode\":\"1000\",\"ProcessorResponseText\":\"Approved\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"PurchaseOrderNumber\":\"SC-C-7849\",\"RefundedTransactionId\":\"4205t29r\",\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":8,\"StatusHistory\":[{\"Amount\":5.00,\"Status\":1,\"Timestamp\":\"2023-12-04T14:22:17Z\",\"Source\":0,\"User\":\"tmaguire\"},{\"Amount\":5.00,\"Status\":8,\"Timestamp\":\"2023-12-04T14:22:17Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":0,\"UpdatedAt\":\"2023-12-04T14:22:17Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231204142217\",\"AuthorizationExpiresAt\":\"2023-12-11T14:22:17Z\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "ZTF3Y2FwMWY=",  
    "approvalCode": "K1SL9B",  
    "providerTransactionCode": "e1wcap1f",  
    "approved": true,  
    "verificationResult": {  
      "cvvRaw": "B",  
      "providerParsed": {  
        "streetMatch": "B",  
        "postalCodeMatch": "B"  
      }  
    },  
    "networkTransactionId": "020231204142217",  
    "merchantReferenceId": "19937989"  
  },  
  "referenceNumber": "23120408221651497409",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Target\":{\"Id\":\"e1wcap1f\",\"AddOns\":[],\"Amount\":5.00,\"AvsPostalCodeResponseCode\":\"B\",\"AvsStreetAddressResponseCode\":\"B\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"CreatedAt\":\"2023-12-04T14:22:17Z\",\"CreditCard\":{\"Bin\":\"411111\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1111\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"06\",\"ExpirationYear\":\"2026\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"06/2026\",\"MaskedNumber\":\"411111******1111\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\",\"Email\":\"Jonathan.Bergstrom@yahoo.com\"},\"CvvResponseCode\":\"B\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"cmVmdW5kX2Uxd2NhcDFm\",\"MerchantAccountId\":\"tokenex\",\"OrderId\":\"19937989\",\"ProcessedWithNetworkToken\":false,\"ProcessorAuthorizationCode\":\"K1SL9B\",\"ProcessorResponseType\":0,\"ProcessorResponseCode\":\"1000\",\"ProcessorResponseText\":\"Approved\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"PurchaseOrderNumber\":\"SC-C-7849\",\"RefundedTransactionId\":\"4205t29r\",\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":9,\"StatusHistory\":[{\"Amount\":5.00,\"Status\":1,\"Timestamp\":\"2023-12-04T14:22:17Z\",\"Source\":0,\"User\":\"tmaguire\"},{\"Amount\":5.00,\"Status\":8,\"Timestamp\":\"2023-12-04T14:22:17Z\",\"Source\":0,\"User\":\"tmaguire\"},{\"Amount\":5.00,\"Status\":9,\"Timestamp\":\"2023-12-04T14:23:40Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":0,\"UpdatedAt\":\"2023-12-04T14:23:40Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231204142217\",\"AuthorizationExpiresAt\":\"2023-12-11T14:22:17Z\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "ZTF3Y2FwMWY=",  
    "approvalCode": "K1SL9B",  
    "providerTransactionCode": "e1wcap1f",  
    "approved": true,  
    "verificationResult": {  
      "cvvRaw": "B",  
      "providerParsed": {  
        "streetMatch": "B",  
        "postalCodeMatch": "B"  
      }  
    },  
    "networkTransactionId": "020231204142217",  
    "merchantReferenceId": "19937989"  
  },  
  "referenceNumber": "23120408233767920282",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Errors\":{\"Count\":0,\"DeepCount\":1},\"Parameters\":{\"transaction[amount]\":\"2.00\",\"transaction[channel]\":\"TokenEx_SP\",\"transaction[transaction_source]\":\"unscheduled\",\"transaction[merchant_account_id]\":\"tokenex\",\"transaction[type]\":\"sale\",\"transaction[currency_iso_code]\":\"USD\",\"transaction[credit_card][cardholder_name]\":\"John Doe\",\"transaction[credit_card][expiration_month]\":\"23\",\"transaction[credit_card][expiration_year]\":\"2003\",\"transaction[customer][id]\":null,\"transaction[customer][first_name]\":\"John\",\"transaction[customer][last_name]\":\"Doe\",\"transaction[billing][company]\":\"Test Co.\",\"transaction[billing][street_address]\":\"123 Someplace Lane\",\"transaction[billing][extended_address]\":\"Some Place\",\"transaction[billing][locality]\":\"Tulsa\",\"transaction[billing][region]\":\"OK\",\"transaction[billing][postal_code]\":\"74111\",\"transaction[billing][country_code_alpha3]\":\"USA\",\"transaction[shipping][company]\":\"Test Co.\",\"transaction[shipping][street_address]\":\"123 Someplace Lane\",\"transaction[shipping][extended_address]\":\"Some Place\",\"transaction[shipping][locality]\":\"Tulsa\",\"transaction[shipping][region]\":\"OK\",\"transaction[shipping][postal_code]\":\"74111\",\"transaction[shipping][country_code_alpha3]\":\"USA\",\"transaction[options][hold_in_escrow]\":\"false\",\"transaction[options][store_in_vault]\":\"false\",\"transaction[options][submit_for_settlement]\":\"false\",\"transaction[options][three_d_secure][required]\":\"false\"},\"Message\":\"Expiration month is invalid.\"}",  
    "gatewayErrors": [  
      {  
        "code": "81712",  
        "message": "expiration_month - Expiration month is invalid.",  
        "source": "Gateway"  
      }  
    ],  
    "approved": false  
  },  
  "referenceNumber": "23120816170125447335",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Transaction\":{\"Id\":\"nzhexszw\",\"AddOns\":[],\"Amount\":2000.00,\"AvsPostalCodeResponseCode\":\"M\",\"AvsStreetAddressResponseCode\":\"M\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"Channel\":\"TokenEx_SP\",\"CreatedAt\":\"2023-12-08T22:14:52Z\",\"CreditCard\":{\"Bin\":\"400000\",\"CardholderName\":\"John Doe\",\"CardType\":14,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"1000\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"01\",\"ExpirationYear\":\"2025\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"01/2025\",\"MaskedNumber\":\"400000******1000\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\"},\"CvvResponseCode\":\"M\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":9,\"GraphQLId\":\"dHJhbnNhY3Rpb25fbnpoZXhzenc\",\"MerchantAccountId\":\"tokenex\",\"ProcessedWithNetworkToken\":false,\"ProcessorResponseType\":1,\"ProcessorResponseCode\":\"2000\",\"ProcessorResponseText\":\"Do Not Honor\",\"AdditionalProcessorResponse\":\"2000 : Do Not Honor\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"Recurring\":false,\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"EscrowStatus\":5,\"Status\":5,\"StatusHistory\":[{\"Amount\":2000.00,\"Status\":5,\"Timestamp\":\"2023-12-08T22:14:52Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":1,\"UpdatedAt\":\"2023-12-08T22:14:52Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"PaymentInstrumentType\":2,\"NetworkTransactionId\":\"020231208221452\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false},\"Errors\":{\"Count\":0,\"DeepCount\":0},\"Parameters\":{\"transaction[amount]\":\"2000.00\",\"transaction[channel]\":\"TokenEx_SP\",\"transaction[transaction_source]\":\"unscheduled\",\"transaction[merchant_account_id]\":\"tokenex\",\"transaction[type]\":\"sale\",\"transaction[currency_iso_code]\":\"USD\",\"transaction[credit_card][cardholder_name]\":\"John Doe\",\"transaction[credit_card][expiration_month]\":\"1\",\"transaction[credit_card][expiration_year]\":\"2025\",\"transaction[customer][id]\":null,\"transaction[customer][first_name]\":\"John\",\"transaction[customer][last_name]\":\"Doe\",\"transaction[billing][company]\":\"Test Co.\",\"transaction[billing][street_address]\":\"123 Someplace Lane\",\"transaction[billing][extended_address]\":\"Some Place\",\"transaction[billing][locality]\":\"Tulsa\",\"transaction[billing][region]\":\"OK\",\"transaction[billing][postal_code]\":\"74111\",\"transaction[billing][country_code_alpha3]\":\"USA\",\"transaction[shipping][company]\":\"Test Co.\",\"transaction[shipping][street_address]\":\"123 Someplace Lane\",\"transaction[shipping][extended_address]\":\"Some Place\",\"transaction[shipping][locality]\":\"Tulsa\",\"transaction[shipping][region]\":\"OK\",\"transaction[shipping][postal_code]\":\"74111\",\"transaction[shipping][country_code_alpha3]\":\"USA\",\"transaction[options][hold_in_escrow]\":\"false\",\"transaction[options][store_in_vault]\":\"false\",\"transaction[options][submit_for_settlement]\":\"false\",\"transaction[options][three_d_secure][required]\":\"false\"},\"Message\":\"Do Not Honor\"}",  
    "gatewayErrors": [  
      {  
        "code": "2000",  
        "message": "Do Not Honor",  
        "source": "Processor"  
      }  
    ],  
    "tokenExTransactionCode": "bnpoZXhzenc=",  
    "providerTransactionCode": "nzhexszw",  
    "approved": false,  
    "verificationResult": {  
      "cvvRaw": "M",  
      "providerParsed": {  
        "streetMatch": "M",  
        "postalCodeMatch": "M"  
      }  
    },  
    "networkTransactionId": "020231208221452"  
  },  
  "referenceNumber": "23120816145166171746",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"Transaction\":{\"Id\":\"7657a0eq\",\"AddOns\":[],\"Amount\":2079.41,\"AvsPostalCodeResponseCode\":\"M\",\"AvsStreetAddressResponseCode\":\"M\",\"BillingAddress\":{\"Company\":\"Test Co.\",\"StreetAddress\":\"123 Someplace Lane\",\"ExtendedAddress\":\"Some Place\",\"Locality\":\"Tulsa\",\"Region\":\"OK\",\"PostalCode\":\"74111\",\"CountryCodeAlpha2\":\"US\",\"CountryCodeAlpha3\":\"USA\",\"CountryCodeNumeric\":\"840\",\"CountryName\":\"United States of America\"},\"Channel\":\"TokenEx_SP\",\"CreatedAt\":\"2024-09-26T15:48:50Z\",\"CreditCard\":{\"Bin\":\"510510\",\"CardholderName\":\"John Doe\",\"CardType\":11,\"IsVenmoSdk\":false,\"IsNetworkTokenized\":false,\"CustomerLocation\":0,\"LastFour\":\"5100\",\"Subscriptions\":[],\"BillingAddress\":{},\"ExpirationMonth\":\"06\",\"ExpirationYear\":\"2026\",\"Prepaid\":2,\"Payroll\":2,\"Debit\":2,\"Commercial\":2,\"Healthcare\":2,\"DurbinRegulated\":2,\"ImageUrl\":\"https://assets.braintreegateway.com/payment_method_logo/mastercard.png?environment=sandbox\",\"AccountType\":\"credit\",\"CountryOfIssuance\":\"Unknown\",\"IssuingBank\":\"Unknown\",\"ProductId\":\"Unknown\",\"ExpirationDate\":\"06/2026\",\"MaskedNumber\":\"510510******5100\"},\"CurrencyIsoCode\":\"USD\",\"CustomerDetails\":{\"FirstName\":\"John\",\"LastName\":\"Doe\",\"Email\":\"<mailto:Della52@gmail.com|Della52@gmail.com>\"},\"CvvResponseCode\":\"M\",\"Descriptor\":{},\"Discounts\":[],\"Disputes\":[],\"GatewayRejectionReason\":10,\"GraphQLId\":\"dHJhbnNhY3Rpb25fNzY1N2EwZXE\",\"MerchantAccountId\":\"tokenex\",\"OrderId\":\"68419245\",\"ProcessedWithNetworkToken\":false,\"ProcessorResponseType\":2,\"ProcessorResponseCode\":\"2079\",\"ProcessorResponseText\":\"PayPal Merchant Account Configuration Error\",\"AdditionalProcessorResponse\":\"2079 : PayPal Merchant Account Configuration Error\",\"NetworkResponseCode\":\"XX\",\"NetworkResponseText\":\"sample network response text\",\"Recurring\":false,\"RefundIds\":[],\"PartialSettlementTransactionIds\":[],\"ShippingAddress\":{},\"EscrowStatus\":5,\"Status\":5,\"StatusHistory\":[{\"Amount\":2079.41,\"Status\":5,\"Timestamp\":\"2024-09-26T15:48:50Z\",\"Source\":0,\"User\":\"tmaguire\"}],\"AuthorizationAdjustments\":[],\"SubscriptionDetails\":{},\"TaxExempt\":false,\"Type\":1,\"UpdatedAt\":\"2024-09-26T15:48:50Z\",\"CustomFields\":{},\"DisbursementDetails\":{},\"Packages\":[],\"PaymentInstrumentType\":4,\"NetworkTransactionId\":\"020240926154850\",\"RetrievalReferenceNumber\":\"1234567\",\"Installments\":[],\"RefundedInstallments\":[],\"Retried\":false,\"RetryIds\":[],\"MerchantAdviceCode\":\"01\",\"MerchantAdviceCodeText\":\"New account information available\"},\"Errors\":{\"Count\":0,\"DeepCount\":0},\"Parameters\":{\"transaction[amount]\":\"2079.41\",\"transaction[order_id]\":\"68419245\",\"transaction[channel]\":\"TokenEx_SP\",\"transaction[transaction_source]\":\"unscheduled\",\"transaction[merchant_account_id]\":\"tokenex\",\"transaction[type]\":\"sale\",\"transaction[currency_iso_code]\":\"USD\",\"transaction[credit_card][cardholder_name]\":\"John Doe\",\"transaction[credit_card][expiration_month]\":\"6\",\"transaction[credit_card][expiration_year]\":\"2026\",\"transaction[customer][id]\":null,\"transaction[customer][first_name]\":\"John\",\"transaction[customer][last_name]\":\"Doe\",\"transaction[customer][email]\":\"Della52@gmail.com\",\"transaction[billing][company]\":\"Test Co.\",\"transaction[billing][street_address]\":\"123 Someplace Lane\",\"transaction[billing][extended_address]\":\"Some Place\",\"transaction[billing][locality]\":\"Tulsa\",\"transaction[billing][region]\":\"OK\",\"transaction[billing][postal_code]\":\"74111\",\"transaction[billing][country_code_alpha3]\":\"USA\",\"transaction[shipping]\":null,\"transaction[options][hold_in_escrow]\":\"false\",\"transaction[options][store_in_vault]\":\"false\",\"transaction[options][submit_for_settlement]\":\"false\",\"transaction[options][three_d_secure][required]\":\"false\"},\"Message\":\"PayPal Merchant Account Configuration Error\"}",  
    "gatewayErrors": [  
      {  
        "code": "2079",  
        "message": "PayPal Merchant Account Configuration Error",  
        "source": "Processor"  
      }  
    ],  
    "tokenExTransactionCode": "NzY1N2EwZXE=",  
    "providerTransactionCode": "7657a0eq",  
    "Approved": false,  
    "verificationResult": {  
      "cvvRaw": "M",  
      "providerParsed": {  
        "streetMatch": "M",  
        "postalCodeMatch": "M"  
      }  
    },  
    "networkTransactionId": "020240926154850",  
    "merchantReferenceId": "68419245",  
    "brandAuthResponseCode": "XX",  
    "brandAuthResponseCodeDescription": "sample network response text",  
    "recurringAdviceCode": "01",  
    "recurringAdviceDescription": "New account information available"  
  },  
  "referenceNumber": "024092610484355121126",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  
  

  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree#example-responses)