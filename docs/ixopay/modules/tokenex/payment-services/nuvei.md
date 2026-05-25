---
title: Nuvei
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-nuvei-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-nuvei-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-nuvei-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-nuvei-responses-direct-link-responses
- api
- rest
- 3ds
- 3d-secure
- pci
- tokenization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei
portal: ixopay-modules
updated: '2026-05-25'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Nuvei

# Nuvei
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#overview "Direct link to Overview")
**Gateway Website**   
**Developer Documentation:**   
**Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `OrderInfo`,`SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Nuvei forwards request to the below endpoints  
| Action  | Production  | Sandbox  |  
| --- | --- | --- |  
| Card Authorize, Card Purchase  |   |   |  
| Card Capture  |   |   |  
| Card Refund  |   |   |  
| Card Void  |   |   |  
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | Nuvei Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | Nuvei  |  
|  `merchantKey`*  | string  | `MerchantKey`  | The merchant key provided by Nuvei (part of the authentication credentials).  |  
|  `merchantId`*  | string(20)  | `MerchantId`  | The merchant ID provided by Nuvei (part of the authentication credentials).  |  
|  `merchantSiteId`*  | string(20)  | `MerchantSiteId`  | The merchant Site ID provided by Nuvei (part of the authentication credentials).  |  
| `testMode`  | boolean  | `ServerHost`  | True = TEST, False = PRODUCTION  |  
| `sessionToken`  | string  | `SessionToken`  |  [Generating a session token](https://docs.nuvei.com/documentation/accept-payment/server-to-server/rest-1-0/#sending-a-getsessiontoken)   
If a session token is not sent, one will be auto-generated and available from the gatewayResponse.rawResponse.  |  
| `amount`  | int  | `Amount`  | Transaction amount in whole units. Example: $10.00 USD should be sent as 1000  |  
| `userPaymentOptionId`  | string  | `PaymentOption.UserPaymentOptionId`  | This is a field identifying a payment option that has already been used by the customer and now it is requested for re-use. Nuvei keeps payment option details from previous uses.  |  
| `alternativePaymentMethod.PaymentMethod`  | string(50)  | `PaymentOption.AlternativePaymentMethod.PaymentMethod`  | Specifies the payment method name of the payment option to be charged.  |  
| `relatedTransactionId`  | string(19)  | `RelatedTransactionId`  | Required for 3D-Secure, recurring/rebilling, and MIT payments  |  
| `authenticationTypeOnly`  | string  | `AuthenticationTypeOnly`  | If you are not using Nuvei User Payment Management (Nuvei tokenization) and would like to send Zero Amount Authorization, you need to set AuthenticationTypeOnly to either RECURRING or INSTALLMENTS  |  
| `clientRequestId`  | string(255)  | `ClientRequestId`  | Use this advanced field to prevent idempotency. Use it to uniquely identify the request you are submitting. If Nuvei's system receives two calls with the same clientRequestId, it refuses the second call as it will assume idempotency.  |  
| `clientUniqueId`  | string(45)  | `ClientUniqueId`  | This ID identifies the transaction in your system. Optionally, you can pass this value in and Nuvei will store it with the transaction record created in their system for your future reference.  |  
| `isMoto`  | string  | `IsMoto`  | Set this field to “1” to mark the transaction as MOTO (mail order/telephone order). Leave null or “0” for regular transaction.  |  
| `isRebilling`  | numeric  | `IsRebilling`  | When performing recurring/rebilling, use this field to indicate the recurring step with the following values: 0 – For the first transaction in a series of recurring transactions. 1 – For all subsequent recurring transactions.  |  
| `isPartialApproval`  | string  | `IsPartialApproval`  | This describes a situation where the deposit was completed and processed with an amount lower than the requested amount due to a consumer’s lack of funds within the desired payment method.  |  
| `customSiteName`  | string  | `CustomSiteName`  | The merchant’s site name. This is useful for merchants operating many websites that are distinguished only by name. Risk rules and traffic management rules are usually built based on this field value.  |  
| `productId`  | string  | `ProductId`  | A free text field used to identify the product/service sold. If this parameter is not sent or is sent with an empty value, then it contains the concatenation of all item names up until the parameter maximum length. Risk rules and traffic management rules are usually built based on this field value.  |  
| `customData`  | string  | `CustomData`  | This parameter can be used to pass any type of information. If sent in request, then it is passed on to the payments gateway, and is visible in Nuvei’s back-office tool transaction reporting and is returned in response.  |  
| `creditCard.Number`  | string  | `PaymentOption.Card.CardNumber`  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `creditCard.Brand`  | string  | `PaymentMethod.Card.Brand and ExternalSchemeDetails.Brand`  | If a value is not sent, the brand is parsed from the card number.  |  
| `creditCard.FirstName`  | string  | `PaymentOption.Card.CardholderName`  | Concatenated with LastName in the `Card.CardHolderName` field  |  
| `creditCard.LastName`  | string  | `PaymentOption.Card.CardholderName`  | Concatenated with FirstName in the `Card.CardHolderName` field  |  
| `creditCard.ExpMonth`  | string  | `PaymentOption.Card.ExpirationMonth`  | The two-digit expiration month of the card. Example: 01  |  
| `creditCard.ExpYear`  | string  | `PaymentOption.Card.ExpirationYear`  | The four-digit expiration year of the card. Example: 2022  |  
| `creditCard.CVV`  | string  | `PaymentOption.Card.CVV`  | The three- or four-digit number on the back of a credit card (on the front for American Express).  
  
This field is required if the merchant would like to use the Card Code Verification (CCV) security feature.  
  
Cardholder information must be stored securely and in accordance with the Payment Card Industry (PCI) Data Security Standard.  |  
| `creditCard.AcquirerId`  | string  | `PaymentOption.Card.AcquirerId`  | The acquirer ID of the acquirer which processed the transaction.  |  
| `creditCard.CcTempToken`  | string  | `PaymentOption.Card.CcTempToken`  | A temporary card token that can be used instead of your card number in your call.  |  
| `creditCard.StoredCredentialsMode`  | string(1)  | `PaymentOption.Card.StoredCredentials.StoredCredentialsMode`  | This parameter shows whether or not stored tokenized card data is sent to execute the transaction.  |  
| `threeDSecure.CAVV`  | string  | `PaymentOption.Card.ThreeD.ExternalMpi.Cavv`  | The Cardholder Authentication Verification Value (CAVV) for a Visa transaction, or Accountholder Authentication Value (AVV)/ Universal Cardholder Authentication Field indicator (UCAF) for a Mastercard transaction as received from the external MPI (Message Passing Interface)  |  
| `threeDSecure.ECI`  | string  | `PaymentOption.Card.ThreeD.ExternalMpi.Eci`  | The Electronic Commerce Indicator (ECI) value for a Visa transaction, or the Universal Cardholder Authentication Field indicator (UCAF) for a Mastercard transaction. The cardholder authentication process generates the ECI or UCAF value prior to submitting the transaction.  |  
| `threeDSecure.DSTransId`  | string(36)  | `PaymentOption.Card.ThreeD.ExternalMpi.DsTransId`  | The transaction ID received from the MPI for 3D-Secure v2. Required for 3D-Secure v2; do not send for 3D-Secure v1.  |  
| `threeDSecure.ThreeDSecureVersion`  | string  | `PaymentOption.Card.ThreeD.Version`  | String passthrough for the version of 3DS used to perform the authentication. Including a value in this field may improve authorization rates.   
**_note_** : this field is not part of [Nuvei's external MPI 3DS authentication flow](https://docs.nuvei.com/documentation/features/3d-secure-2/3ds-implementations/3ds-external-mpi/#Overview).  |  
| `orderInfo.ShippingAmount`  | numeric  | `AmountDetails.TotalShipping`  | Shipping amount in whole units. Example: $10.00 USD should be sent as 1000  |  
| `orderInfo.DiscountAmount`  | numeric  | `AmountDetails.TotalDiscount`  | Discount amount in whole units.  |  
| `orderInfo.DutyAmount`  | numeric  | `AmountDetails.TotalHandling`  | Duty amount in whole units.  |  
| `orderInfo.PurchaseOrderNumber`  | string  | `OrderId`  | The order ID provided by Nuvei. This parameter is passed to define which merchant order to update.  |  
| `orderInfo.CustomerId`  | string  | `UserTokenId`  | This ID uniquely identifies your consumer/user in your system.  |  
| `tax.Exempt`  | boolean  | [not mapped]  | True/false. Only used for determining whether to include tax amount in the Nuvei request.  |  
| `tax.Amount`  | numeric  | `AmountDetails.TotalTax`  | Tax amount in whole units. Only passed through if `Tax.Exempt` is `false`  |  
| `subMerchant.CountryCode`  | string(2)  | `SubMerchant.CountryCode`  | The payment facilitator’s submerchant’s [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `subMerchant.City`  | string(10)  | `SubMerchant.City`  | The payment facilitator’s submerchant’s city name.  |  
| `subMerchant.Id`  | string(15)  | `SubMerchant.Id`  | This field represents the ID of internal merchants and will be forwarded to Mastercard as “SubMerchantId”.  |  
| `deviceDetails.DeviceType`  | string(10)  | `DeviceDetails.DeviceType`  | Supported device types include: DESKTOP, SMARTPHONE, TABLET, TV, UNKNOWN (if device type cannot be recognized).  |  
| `deviceDetails.DeviceName`  | string(255)  | `DeviceDetails.DeviceName`  | The name of the device.  |  
| `deviceDetails.DeviceOs`  | string(255)  | `DeviceDetails.DeviceOS`  | The OS of the device.  |  
| `deviceDetails.Browser`  | string(255)  | `DeviceDetails.Browser`  | The browser of the device.  |  
|  `customerIpAddress`*  | string  | `DeviceDetails.IpAddress`  | The IP address of the device generating the operation.  |  
| `subMethodDetails.SubMethod`  | string  | `SubMethodDetails.SubMethod`  | The sub-method parameter enables working with a specific payment method in a few different flows. See the [Nuvei APM Submethods page](https://docs.safecharge.com/documentation/features/alternative-payments/apm-submethods/) for details.  |  
| `subMethodDetails.Email`  | string  | `SubMethodDetails.SubMethodField1`  | Only applicable if using sub method "Skrill1tap"  |  
| `userDetails.Address`  | string  | `UserDetails.Address`  | The user's address.  |  
| `userDetails.City`  | string  | `UserDetails.City`  | The user's city.  |  
| `userDetails.Country`  | string  | `UserDetails.Country`  | The user's [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `userDetails.County`  | string(255)  | `UserDetails.County`  | The user's county.  |  
| `userDetails.DateOfBirth`  | string(10)  | `UserDetails.DateOfBirth`  | The user's date of birth. Format is YYYY-MM-DD.  |  
| `userDetails.Email`  | string  | `UserDetails.Email`  | The user's email address.  |  
| `userDetails.FirstName`  | string  | `UserDetails.FirstName`  | The user's first name.  |  
| `userDetails.LastName`  | string  | `UserDetails.LastName`  | The user's last name.  |  
| `userDetails.Language`  | string(2)  | `UserDetails.Language`  | The user's language. 2-letter [ISO language code](https://www.iso.org/iso-639-language-codes.html).  |  
| `userDetails.Phone`  | string  | `UserDetails.Phone`  | The user's phone number.  |  
| `userDetails.Zip`  | string  | `UserDetails.Zip`  | The user's postal code.  |  
| `shippingAddress.Address1`  | string  | `ShippingAddress.Address`  | Customer’s shipping address.  |  
| `shippingAddress.Address2`  | string  | `ShippingAddress.AddressLine2`  | Customer’s shipping address, line 2.  |  
| `shippingAddress.Country`  | string  | `ShippingAddress.CountryCode`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `shippingAddress.Email`  | string  | `ShippingAddress.Email`  | Email address associated with customer’s shipping address.  |  
| `shippingAddress.City`  | string  | `ShippingAddress.City`  | City of customer’s shipping address.  |  
| `shippingAddress.State`  | string  | `ShippingAddress.State`  | State of customer’s shipping address.  |  
| `shippingAddress.Zip`  | string  | `ShippingAddress.Zip`  | Postal code of customer’s shipping address.  |  
| `shippingAddress.Phone`  | string  | `ShippingAddress.Cell`  | Cell phone number associated with customer’s shipping address.  |  
| `shippingAddress.FirstName`  | string  | `ShippingAddress.FirstName`  | First name associated with customer’s shipping address.  |  
| `shippingAddress.LastName`  | string  | `ShippingAddress.LastName`  | Last name associated with customer’s shipping address.  |  
| `billingAddress.Address1`  | string  | `BillingAddress.Address`  | Customer’s billing address.  |  
| `billingAddress.Address2`  | string  | `BillingAddress.AddressLine2`  | Customer’s billing address, line 2.  |  
| `billingAddress.Country`  | string  | `BillingAddress.CountryCodeAlpha3`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `billingAddress.Email`  | string  | `BillingAddress.Email`  | Email address associated with customer’s billing address.  |  
| `billingAddress.City`  | string  | `BillingAddress.City`  | City of customer’s billing address.  |  
| `billingAddress.State`  | string  | `BillingAddress.State`  | State of customer’s billing address.  |  
| `billingAddress.Zip`  | string  | `BillingAddress.Zip`  | Postal code of customer’s billing address.  |  
| `billingAddress.Phone`  | string  | `BillingAddress.Cell`  | Cell phone number associated with customer’s billing address.  |  
| `billingAddress.FirstName`  | string  | `BillingAddress.FirstName`  | First name associated with customer’s shipping address.  |  
| `billingAddress.LastName`  | string  | `BillingAddress.LastName`  | Last name associated with customer’s shipping address.  |  
| `dynamicDescriptor.MerchantName`  | string(25)  | `DynamicDescriptor.MerchantName`  | The merchant name, as is displayed for the transaction on the consumer’s card statement.  |  
| `dynamicDescriptor.MerchantPhone`  | string(13)  | `DynamicDescriptor.MerchantPhone`  | The merchant contact information, as is displayed for the transaction on the consumer’s card statement. It can also be an email address.  |  
| `softDescriptors.MerchantName`  | string(25)  | `DynamicDescriptor.MerchantName`  | The merchant name, as is displayed for the transaction on the consumer’s card statement. NOTE: Takes precedent over `dynamicDescriptor.MerchantName` if both are populated  |  
| `softDescriptors.MerchantPhone`  | string(13)  | `DynamicDescriptor.MerchantPhone`  | The merchant contact information, as is displayed for the transaction on the consumer’s card statement. It can also be an email address. NOTE: Takes precedent over `dynamicDescriptor.MerchantPhone` if both are populated  |  
| `merchantDetails.CustomField1`  | string(255)  | `MerchantDetails.CustomField1`  | These fields allow the merchant to send information with the request to be saved in the API level and returned in response. It is not passed to the payment gateway and is not used for processing. Applies to all custom fields below.  |  
| `merchantDetails.CustomField2`  | string(255)  | `MerchantDetails.CustomField2`  |   |  
| `merchantDetails.CustomField3`  | string(255)  | `MerchantDetails.CustomField3`  |   |  
| `merchantDetails.CustomField4`  | string(255)  | `MerchantDetails.CustomField4`  |   |  
| `merchantDetails.CustomField5`  | string(255)  | `MerchantDetails.CustomField5`  |   |  
| `merchantDetails.CustomField6`  | string(255)  | `MerchantDetails.CustomField6`  |   |  
| `merchantDetails.CustomField7`  | string(255)  | `MerchantDetails.CustomField7`  |   |  
| `merchantDetails.CustomField8`  | string(255)  | `MerchantDetails.CustomField8`  |   |  
| `merchantDetails.CustomField9`  | string(255)  | `MerchantDetails.CustomField9`  |   |  
| `merchantDetails.CustomField10`  | string(255)  | `MerchantDetails.CustomField10`  |   |  
| `merchantDetails.CustomField11`  | string(255)  | `MerchantDetails.CustomField11`  |   |  
| `merchantDetails.CustomField12`  | string(255)  | `MerchantDetails.CustomField12`  |   |  
| `merchantDetails.CustomField13`  | string(255)  | `MerchantDetails.CustomField13`  |   |  
| `merchantDetails.CustomField14`  | string(255)  | `MerchantDetails.CustomField14`  |   |  
| `merchantDetails.CustomField15`  | string(255)  | `MerchantDetails.CustomField15`  |   |  
| `urlDetails.SuccessUrl`  | string(1000)  | `UrlDetails.SuccessUrl`  | The URL the customer is directed to after a successful transaction.  |  
| `urlDetails.FailureUrl`  | string(1000)  | `UrlDetails.FailureUrl`  | The URL the customer is directed to after an unsuccessful transaction.  |  
| `urlDetails.PendingUrl`  | string(1000)  | `UrlDetails.PendingUrl`  | The URL the customer is directed to when the transaction response is pending.  |  
| `urlDetails.NotificationUrl`  | string(1000)  | `UrlDetails.NotificationUrl`  | The URL to which DMNs ([Direct Merchant Notifications](https://docs.safecharge.com/documentation/guides/dmns/)) are sent.  |  
| `currencyConversion.Type`  | string(10)  | `CurrencyConversion.Type`  | The DCC flag indicating the type of conversion. For more information, see the [Dynamic Currency Conversion Compliance Guide](https://www.mastercard.com/elearning/dcc/docs/DCC%20Guide%2020.02.17%20EN.pdf) and the [Nuvei DCC guide](https://helpdesk.nuvei.com/doku.php?id=merchant:new_merchant:products#online_dynamic_currency_conversion_edcc)  |  
| `currencyConversion.OriginalAmount`  | numeric  | `CurrencyConversion.OriginalAmount`  | The original amount of the transaction in whole units of the original currency. Example: $10.00 USD should be sent as 1000  |  
| `currencyConversion.OriginalCurrency`  | string(3)  | `CurrencyConversion.OriginalCurrency`  | The [3-letter ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) of the merchant’s own currency.  |  
| `storedCredentials.Initiator`  | string  | `IsRebilling`  | Valid value mappings:  
"cardholder" = "0"  
"merchant" = "1". Can be overridden by the IsRebilling field above.  |  
| `storedCredentials.CredentialStored`  | boolean  | `PaymentOption.Card.StoredCredentials.StoredCredentialsMode`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). True = "1", False = "0"  |  
| `storedCredentials.PreviousNetworkTransactionId`  | string  |  `relatedTransactionId`  
`ExternalSchemeDetails.TransactionId`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). Obtained from Nuvei response field TransactionId. See storedCredentials.OriginCITThroughDifferentProvider  |  
| `storedCredentials.OriginCITThroughDifferentProvider`  | boolean  | affects `ExternalSchemeDetails.TransactionId` and `ExternalSchemeDetails.Brand`  | If true, the value sent in storedCredentials.PreviousNetworkTransactionId is mapped to ExternalSchemeDetails rather than relatedTransactionId. Card brand is read from CreditCard.Brand.  |  
| `storedCredentials.TransactionType`  | string  | [unmapped]  | Any value sent will be dropped.  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Void
  * Card Refund
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Nuvei Result Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approved`  | boolean  | `TransactionStatus`  | True if TransactionStatus equals 2 or "APPROVED"  |  
| `approvalCode`  | string  | `AuthCode`  | The authorization code of the transaction.  |  
| `providerTransactionCode`  | string  | `TransactionId`  | Transaction ID of the newly run transaction  |  
| `tokenexTransactionCode`  | string  | `TransactionId;AuthCode`  | Base64 encoded  |  
| `networkTransactionId`  | string  | `externalSchemeTransactionId`  | Value to reference transaction in subsequent transactions. Example usage: storedCredentials.PreviousNetworkTransactionId  |  
| `paymentProfileId`  | string  | `paymentOption.userPaymentOptionId`  | ID for the newly created payment option, which can be referenced in future requests.  |  
| `customerProfileId`  | string  | `userTokenId`  | This ID uniquely identifies your consumer/user in your system.  |  
| `merchantReferenceId`  | string  | `clientUniqueId`  | The ID of the transaction in the merchant’s system.  |  
| `verificationResult.cvvRaw`  | string  | `paymentOption.card.cvv2Reply`  | The CVV2 (card verification value) response returned by issuer.  |  
| `verificationResult.avsRaw`  | string  | `paymentOption.card.avsCode`  | The address verification service (AVS) response returned by issuer.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei#example-responses)
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "customerIpAddress": "100.101.102.103",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Chicago",  

    "id": "sampleMerchant"  

  },  

  "deviceDetails": {  

    "deviceType": "DESKTOP",  

    "deviceName": "TestDevice",  

    "deviceOs": "Windows 10",  

    "browser": null  

  },  

  "creditCard": {  

    "acquirerId": null,  

    "ccTempToken": null,  

    "storedCredentialsMode": null,  

    "lastName": "Nader",  

    "brand": "Visa",  

    "number": "4000022756305864",  

    "expMonth": 9,  

    "expYear": 2024,  

    "firstName": "Rochelle",  

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

  "orderInfo": {  

    "customerId": "storedCredentials-CustomerId"  

  },  

  "storedCredentials": {  

    "initiator": "merchant",  

    "credentialStored": true,  

    "previousNetworkTransactionId": "711000000014281841"  

  },  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorization>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Atlanta",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Capture or Purchase>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "merchantKey": "<Your Nuvei Merchant Key>",  

  "merchantId": "<Your Nuvei Merchant ID>",  

  "merchantSiteId": "<Your Nuvei Merchant Site ID>",  

  "subMerchant": {  

    "countryCode": "USA",  

    "city": "Los Angeles",  

    "id": "submerchantExample"  

  },  

  "tokenExTransactionCode": "<TokenExTransactionCode from a settled Purchase or Capture>",  

  "amount": 1000,  

  "gateway": "Nuvei",  

  "testMode": true,  

  "currencyCode": "USD"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850532838,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"18c348b1-5ceb-4549-a952-5d95b018c633\",\"orderId\":\"407325938\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029469188\",\"externalTransactionId\":\"\",\"authCode\":\"111748\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTg4OzExMTc0OA==",  

    "approvalCode": "111748",  

    "providerTransactionCode": "711000000029469188",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710552911748563",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850533048,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"a8428e5b-e4de-48b6-8bfa-bfb9058a9f4b\",\"orderId\":\"407325978\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****1390\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"issuerCountry\":\"SG\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\"},\"transactionStatus\":\"APPROVED\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Sale\",\"transactionId\":\"711000000029469194\",\"externalTransactionId\":\"\",\"authCode\":\"111189\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MTk0OzExMTE4OQ==",  

    "approvalCode": "111189",  

    "providerTransactionCode": "711000000029469194",  

    "approved": true,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120710554749874086",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850534148,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469244\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111274\",\"transactionType\":\"Settle\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MjQ0OzExMTI3NA==",  

    "approvalCode": "111274",  

    "providerTransactionCode": "711000000029469244",  

    "approved": true,  

    "networkTransactionId": "711000000029469244"  

  },  

  "referenceNumber": "23120710572728939467",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850536208,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469341\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111311\",\"transactionType\":\"Credit\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"paymentAccountReference\":\"f4iK2pnudYKvTALGdcwEzqj9p4\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzQxOzExMTMxMQ==",  

    "approvalCode": "111311",  

    "providerTransactionCode": "711000000029469341",  

    "approved": true,  

    "networkTransactionId": "711000000029469341"  

  },  

  "referenceNumber": "23120710595586473084",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":850535338,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"transactionId\":\"711000000029469307\",\"externalTransactionId\":\"\",\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"gwErrorCode\":0,\"gwExtendedErrorCode\":0,\"transactionStatus\":\"APPROVED\",\"authCode\":\"111659\",\"transactionType\":\"Void\",\"customData\":\"\",\"acquirerId\":\"19\",\"bin\":\"476134\",\"last4Digits\":\"1390\",\"ccCardNumber\":\"4****1390\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"25\",\"cardType\":\"Credit\",\"cardBrand\":\"VISA\",\"issuerCountry\":\"SG\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"merchantAdviceCode\":\"\",\"AVSCode\":\"\",\"CVV2Reply\":\"\"}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "NzExMDAwMDAwMDI5NDY5MzA3OzExMTY1OQ==",  

    "approvalCode": "111659",  

    "providerTransactionCode": "711000000029469307",  

    "approved": true,  

    "networkTransactionId": "711000000029469307"  

  },  

  "referenceNumber": "2312071059085320971",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851493948,\"status\":\"ERROR\",\"errCode\":1004,\"reason\":\"Missing or invalid CardData data. Invalid credit card number.\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"5bd43a59-ad94-4d33-8c41-587fe5ee2765\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"threeD\":{}}}}",  

    "gatewayErrors": [  

      {  

        "code": "1004",  

        "message": "Missing or invalid CardData data. Invalid credit card number.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2312081121005281411",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\"internalRequestId\":851494458,\"status\":\"SUCCESS\",\"errCode\":0,\"reason\":\"\",\"merchantId\":\"3612317282928935212\",\"merchantSiteId\":\"212567\",\"version\":\"1.0\",\"sessionToken\":\"cdbf6e5d-3636-49b7-86ba-78bd300f0746\",\"orderId\":\"407524878\",\"paymentOption\":{\"userPaymentOptionId\":\"\",\"card\":{\"ccCardNumber\":\"4****7969\",\"bin\":\"400015\",\"last4Digits\":\"7969\",\"ccExpMonth\":\"01\",\"ccExpYear\":\"24\",\"acquirerId\":\"19\",\"cvv2Reply\":\"\",\"avsCode\":\"\",\"cardBrand\":\"VISA\",\"issuerBankName\":\"\",\"isPrepaid\":\"false\",\"threeD\":{}},\"paymentAccountReference\":\"w66wr3rkjpvx8zrg0qobzvzvo697k\"},\"transactionStatus\":\"DECLINED\",\"gwErrorCode\":-1,\"gwErrorReason\":\"Lost/Stolen\",\"gwExtendedErrorCode\":0,\"issuerDeclineCode\":\"\",\"issuerDeclineReason\":\"\",\"transactionType\":\"Auth\",\"transactionId\":\"711000000029508885\",\"externalTransactionId\":\"\",\"authCode\":\"\",\"customData\":\"\",\"fraudDetails\":{\"finalDecision\":\"Accept\"},\"externalSchemeTransactionId\":\"\",\"merchantAdviceCode\":\"\"}",  

    "gatewayErrors": [  

      {  

        "code": "0",  

        "message": "Lost/Stolen",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "711000000029508885",  

    "approved": false,  

    "verificationResult": {  

      "avsRaw": "",  

      "cvvRaw": ""  

    },  

    "networkTransactionId": "",  

    "paymentProfileId": ""  

  },  

  "referenceNumber": "23120811215583339345",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```