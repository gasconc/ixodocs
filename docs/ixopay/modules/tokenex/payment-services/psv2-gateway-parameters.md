---
title: Gateway Parameters
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parameters'
tags:
- gateway-implementations-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-gateway-implementations-direct-link-gateway-implementations
- request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-request-parameters-direct-link-request-parameters
- billingaddress-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-billingaddress-direct-link-billingaddress
- check-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-check-direct-link-check
- creditcard-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-creditcard-direct-link-creditcard
- orderinfo-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-orderinfo-direct-link-orderinfo
- shippingaddress-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-shippingaddress-direct-link-shippingaddress
- softdescriptors-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-softdescriptors-direct-link-softdescriptors
- storedcredentials-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-storedcredentials-direct-link-storedcredentials
- threedsecure-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-psv2-gateway-parameters-threedsecure-direct-link-threedsecure
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters
portal: ixopay-modules
updated: '2026-05-11'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * Gateway Parameters

# Gateway Parameters
Supported gateways within the Card/Check/Wallet API and high-level information about each.
## Gateway Implementations[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gateway-implementations "Direct link to Gateway Implementations")  
| Parameter Pages  |  `gateway` parameter value  | Request Objects  | Built on SDK  | 3rd Party API Documentation  |  
| --- | --- | --- | --- | --- |  
| [Adyen Classic](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen)  | `Adyen`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | Yes  | [Adyen Classic Payments v51](https://docs.adyen.com/api-explorer/Payment/51/overview)  |  
| [Adyen Checkout](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen-direct)  | `AdyenDirect`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | No  | [Adyen Checkout](https://docs.adyen.com/api-explorer/Checkout/latest/overview)  |  
| [Authorize.Net](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/authorizenet-direct)  | `AuthorizeNetDirect`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- Wallet  | No  | [Authorize.Net Payment Transactions](https://developer.authorize.net/api/reference/index.html#payment-transactions)  |  
| [BluePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay)  | `BluePay`  | - BillingAddress   
- CreditCard   
- Check   
- OrderInfo  | No  | [BluePay bp10emu](https://developer.cardpointe.com/bluepay-gateway#bluePay-post)  |  
| [Braintree](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree)  | `Braintree`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | Yes  | [PayPal Braintree ](https://developer.paypal.com/braintree/docs/reference/request/transaction/sale/dotnet)  |  
| [ChaseNetConnect](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect)  | `ChaseNetConnect`  | - BillingAddress   
- CreditCard   
- OrderInfo  | No  | [Chase Paymentech Developer Center](https://secure.paymentech.com/devcenter/secure/home)  |  
| [CyberSource](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource)  | `CyberSource`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- ThreeDSecure  | Yes  | [Cybersource Payments](https://developer.cybersource.com/api-reference-assets/index.html#payments)  |  
| [dLocal](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/dlocal)  | `dLocal`  | - BillingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | No  | [dLocal Payins](https://docs.dlocal.com/reference/create-payment)  |  
| [EBANX](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx)  | `EBANX`  | - BillingAddress   
- CreditCard   
- OrderInfo   
- ThreeDSecure  | No  | [EBANX Direct Payments](https://ebanx.github.io/api-reference/#tag/Direct-Payments)  |  
| [Elavon](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/elavon)  | `Elavon`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- ThreeDSecure  | No  | [Elavon's Converge - XML](https://developer.elavon.com/products/converge/v1/credit-card-transactions-overview)  |  
| [EMerchantPay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/emerchantpay)  | `EMerchantPay`  | -BillingAddress   
-CreditCard   
-ThreeDSecure   
-SoftDescriptors   
-StoredCredentials  | No  | [EMerchantPay Card Transactions](https://emerchantpay.github.io/gateway-api-docs/?shell#card)  |  
| [First Data IPG](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg)  | `FirstDataIPG`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | No  | [Fiserv's Internet Payment Gateway](https://developer.fiserv.com/product/IPGNA/api/?type=post&path=/payments&branch=main&version=1.0.0)  |  
| [Nuvei](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei)  | `Nuvei`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | No  | [Nuvei Payment API](https://docs.nuvei.com/api/main/indexMain_v1_0.html?json#PaymentAPIOverview)  |  
| [Orbital](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital)  | `Orbital`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- SoftDescriptors   
- StoredCredentials   
- ThreeDSecure  | No  | [Chase Paymentech Orbital - Stratus](https://developer.jpmorgan.com/products/orbital-api/guides/process-payments)  |  
| [Stripe](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe)  | `Stripe`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- OrderInfo   
- SoftDescriptors  | Yes  | [Stripe Payment Intents](https://stripe.com/docs/api/payment_intents)  |  
| [Worldpay eComm cnpAPI](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-ecomm-cnpapi)  | `VantivCNP`  | - BillingAddress   
- ShippingAddress   
- CreditCard   
- Check   
- OrderInfo   
- SoftDescriptors   
- ThreeDSecure  | No  | [Worldpay CNP API](http://support.worldpay.com/support/CNP-API/content/introduction.htm)  |  
| [Worldpay Native RAFT](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft)  | `WorldpayNativeRaft`  | - BillingAddress   
- CreditCard   
- OrderInfo   
- StoredCredentials   
- ThreeDSecure  | No  | [FIS Native Raft Credit API](https://developerengine.fisglobal.com/apis/native-raft)  |  
| [Worldpay WPG](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpaywpg)  | `WorldpayWPG`  | - BillingAddress   
- CreditCard   
- Check   
- OrderInfo   
- ThreeDSecure  | No  | [FIS WPG Direct Integration](https://developerengine.fisglobal.com/apis/wpg/directintegration)  |  
* * *
## Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#request-parameters "Direct link to Request Parameters")
Gateway implementations expose functionality through the below parameters. See each implementation linked above for the exact parameters (including gateway-specifics) that are supported and the 3rd-party gateway API parameters to which they are mapped. It is okay to send requests containing parameters that are not mapped for a gateway - these extra parameters are ignored and not forwarded to the 3rd-party gateway API.  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `Gateway`  | string  | Name of the gateway implementation (see [Gateway Implementations](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gateway-implementations))  |  
| `Amount`  | number  | The amount in minor units. For example, 2000 means USD 20.00. Max length: 12 characters.  |  
| `CurrencyCode`  | string  | Use the ISO 4217 three-letter alphabetic code for the currency.  |  
| `CustomerIpAddress`  | string  | The IP Address of the customer or client performing the transaction. Used for fraud checks.  |  
| `TokenExTransactionCode`  | string  | Each successful transaction generates a `TokenExTransactionCode` that should be used when processing modifications on that transaction through Payment Services.  |  
| `BillingAddress`  | object  | See [BillingAddress](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#billingaddress)  |  
| `Check`  | object  | See [Check](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#check)  |  
| `CreditCard`  | object  | See [CreditCard](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#creditcard)  |  
| `OrderInfo`  | object  | See [OrderInfo](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#orderinfo)  |  
| `ShippingAddress`  | object  | See [ShippingAddress](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#shippingaddress)  |  
| `SoftDescriptors`  | object  | See [SoftDescriptors](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#softdescriptors)  |  
| `StoredCredentials`  | object  | See [StoredCredentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials)  |  
| `ThreeDSecure`  | object  | See [ThreeDSecure](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#threedsecure)  |  
### BillingAddress[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#billingaddress "Direct link to BillingAddress")
The Billing Address object is used to send information about the entity being billed for the transaction.  
| BillingAddress  | Type  |  
| --- | --- |  
| `Address1`  | string  |  
| `Address2`  | string  |  
| `City`  | string  |  
| `Company`  | string  |  
| `Country`  | string  |  
| `FirstName`  | string  |  
| `FullName`  | string  |  
| `LastName`  | string  |  
| `State`  | string  |  
| `Zip`  | string  |  
| `Email`  | string  |  
| `Fax`  | string  |  
| `Phone`  | string  |  
### Check[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#check "Direct link to Check")
The Check object is used to send information about an account holder's bank account. `AccountNumber` can be the TokenEx token associated with the PAN.  
| Check  | Type  |  
| --- | --- |  
| `AccountNumber`  | string  |  
| `AccountType`  | string  |  
| `BankName`  | string  |  
| `CheckNumber`  | string  |  
| `FirstName`  | string  |  
| `FullName`  | string  |  
| `LastName`  | string  |  
| `RoutingNumber`  | string  |  
### CreditCard[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#creditcard "Direct link to CreditCard")
The CreditCard object is used to send information about a cardholder's card. It can be used for credit and debit cards. `Number` can be the TokenEx token associated with the PAN.  
| CreditCard  | Type  |  
| --- | --- |  
| `Brand`  | string  |  
| `CVV`  | string  |  
| `ExpMonth`  | number  |  
| `ExpYear`  | number  |  
| `FirstName`  | string  |  
| `FullName`  | string  |  
| `LastName`  | string  |  
| `Number`  | string  |  
### OrderInfo[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#orderinfo "Direct link to OrderInfo")
The OrderInfo object is used to send additional information about the order.  
| OrderInfo  | Type  |  
| --- | --- |  
| `CustomerId`  | string  |  
| `DiscountAmount`  | number  |  
| `DutyAmount`  | number  |  
| `InvoiceNumber`  | string  |  
| `PurchaseOrderNumber`  | string  |  
| `OrderId`  | string  |  
| `ShippingAmount`  | number  |  
### ShippingAddress[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#shippingaddress "Direct link to ShippingAddress")
The Shipping Address object is used to send information about the entity to which a product is being sent.  
| ShippingAddress  | Type  |  
| --- | --- |  
| `Address1`  | string  |  
| `Address2`  | string  |  
| `City`  | string  |  
| `Company`  | string  |  
| `Country`  | string  |  
| `FirstName`  | string  |  
| `FullName`  | string  |  
| `LastName`  | string  |  
| `State`  | string  |  
| `Zip`  | string  |  
| `Email`  | string  |  
| `Fax`  | string  |  
### SoftDescriptors[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#softdescriptors "Direct link to SoftDescriptors")
Use Soft Descriptors (also called Dynamic Descriptors) to add more detail to a customer's bank statement.  
| SoftDescriptors  | Type  |  
| --- | --- |  
| `MerchantCategoryCode`  | string  |  
| `MerchantCity`  | string  |  
| `MerchantEmail`  | string  |  
| `MerchantName`  | string  |  
| `MerchantPhone`  | string  |  
| `MerchantUrl`  | string  |  
### StoredCredentials[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials "Direct link to StoredCredentials")
Use Stored Credentials to support CIT (cardholder initiated transactions) and MIT (merchant initiated transactions) flows.  
| StoredCredentials  | Type  | Description  |  
| --- | --- | --- |  
| `CredentialStored`  | boolean  | Has the credential been previously stored for use with subsequent transactions?   
False: establish credential as stored.   
True: subsequent usage of previously stored credential.   
If this parameter is omitted, the value of the `tx-tokenize` header is used to infer the value. See [Credential Stored Inference](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#credential-stored-inference)  |  
| `Initiator`  | string  | Is the transaction a cardholder-initiated or merchant-initiated transaction?   
Valid values: "cardholder" or "merchant"  |  
| `PreviousNetworkTransactionId`  | string  | The transaction id of the transaction which established the credential as stored.  |  
| `TransactionType`  | string  | Valid values: "recurring", "installment", or "unscheduled". Some gateways allow gateway-specific transaction types as a passthrough.  |  
#### Credential Stored Inference[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#credential-stored-inference "Direct link to Credential Stored Inference")  
| StoredCredentials.CredentialStored  | tx-tokenize header  | Inference  |  
| --- | --- | --- |  
| null  | true  | StoredCredentials.CredentialStored:false   
The credential has _not_ been previously stored.  |  
| null  | false  | StoredCredentials.CredentialStored:true   
The credential _has been_ previously stored.  |  
| null  | absent  | StoredCredentials.CredentialStored:true   
The credential _has been_ previously stored.  |  
| true  | ignored  | StoredCredentials.CredentialStored:true   
The credential _has been_ previously stored.  |  
| false  | ignored  | StoredCredentials.CredentialStored:false   
The credential has _not_ been previously stored.  |  
### ThreeDSecure[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#threedsecure "Direct link to ThreeDSecure")
Payment Services supports the pass through of EMVCo 3-D Secure authentication values obtained from authentication providers, such as TokenEx's [3-D Secure Authentication](https://documentation.ixopay.com/modules/docs/tokenex/3ds) or Cardinal Commerce.  
| ThreeDSecure  | Type  | EMVCo Mapping  |  
| --- | --- | --- |  
| `CAVV`  | string  | authenticationValue  |  
| `DSTransId`  | string  | dsTransID  |  
| `ECI`  | string  | eci  |  
| `ThreeDSecureVersion`  | string  | messageVersion  |  
### Wallet[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#wallet "Direct link to Wallet")
The wallet object can be used to pass through payment instrument data from providers such as Google Pay to the payment gateway.  
| Wallet  | Type  | Description  |  
| --- | --- | --- |  
| `provider`  | string  | Name of wallet provider to be used for the payment. Current values accepted:   
  
- "GooglePay"  |  
| `providerToken`  | string  | The provider token that the payment gateway requires for processing the transaction.  |  
* * *
## Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-parameters "Direct link to Response Parameters")
Requests to Payment Services return the following parameters. `GatewayResponse` may not be present if the transaction fails prior to or during the request to the 3rd-Party Gateway API.  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `Tokens`  | array of key-value-pairs  | If a request generated a token, that token is returned under the key "PAN". See [Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-examples) below.  |  
| `GatewayResponse`  | object  | Contains information about what was sent to and received from the 3rd-Party Gateway API. See [GatewayResponse](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayresponse) below.  |  
| `ReferenceNumber`  | string  | A value that can be used when communicating about a specific transaction. Provide this number to your Customer Success Manager or our Support Team when needed.  |  
| `Success`  | boolean  | True when the transaction was sent through TokenEx servers as expected. False when an issue occurred as a result of a TokenEx validation or server issue.  |  
| `Error`  | string  | When Success is false, contains information about what occurred or next steps to take.  |  
| `Message`  | string  | May contain additional information about actions that occured within Payment Services.  |  
| `ThirdPartyStatusCode`  | string  | The HTTP status code returned by the 3rd-party gateway's API.  |  
### GatewayResponse[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayresponse "Direct link to GatewayResponse")
The GatewayResponse object contains the response sent by the 3rd-Party Gateway's API and parsings of that response. Not all gateway implementations will return values for all the parameters. The `RawResponse` is the source of truth for how a transaction was processed and it is strongly recommended that your application parse it when obtaining details about and determining the success or failure of a transaction. Response models can be obtained from the [3rd-Party Gateway's API documentation](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gateway-implementations).
Additional gateway response parameters below can be used when supported by a gateway implementation and their values align with your application's logic. Reach out to us with parameter mapping suggestions for specific gateways as Payment Services continues to grow.  
| GatewayResponse  | Type  | Description  |  
| --- | --- | --- |  
| `ForwardedRequest`  | object  | Information about the request sent to the 3rd-party Gateway API. See [Payment Services Testing](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-testing). Only returned in the TokenEx Test environment.  |  
| `RawResponse`  | escaped string  | The response returned by the 3rd-party Gateway API. May be JSON, XML, or URL-encoded form parameters  |  
| `Approved`  | boolean  | True when the requested action was processed successfully. False when an issue occurred preventing the action from being successful. The logic for determining this value is detailed within each gateway implementation.  |  
| `TokenExTransactionCode`  | string  | A base64-encoded string that should be sent in secondary/modification requests such as Capture, Refund, and Void. This value assists the respective gateway in processing the request.  |  
| `ProviderTransactionCode`  | string  | A unique identifier returned by the 3rd-party Gateway API in reference to the transaction. This is usually the value required by the gateway to process a modification request on the original transaction.  |  
| `MerchantReferenceId`  | string  | Usually the value sent in request's 'OrderInfo.OrderId' parameter.  |  
| `NetworkTransactionId`  | string  | A transaction identifier returned by the network. Usually used to reference a CIT transaction in a MIT flow.  |  
| `CustomerProfileId`  | string  | A merchant or gateway assigned value to reference the customer.  |  
| `PaymentProfileId`  | string  | A merchant or gateway assigned value to reference a payment profile.  |  
| `GatewayToken`  | string  | A gateway assigned value to reference a specific PAN. This value is not a TokenEx token.  |  
| `VerificationResult`  | string  | CVC and AVS results. See [VerificationResult](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#verificationresult) below.  |  
| `GatewayErrors`  | object array  | An array of objects containing information about any issues that occurred during processing of the transaction. See [GatewayErrors ](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayerrors)below.  |  
### VerificationResult[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#verificationresult "Direct link to VerificationResult")
Returns results about any CVC and AVS checks that were performed downstream from TokenEx.  
| VerificationResult  | Type  | Description  |  
| --- | --- | --- |  
| `CvvRaw`  | string  | CVV verification as returned by the issuer. Some gateways performing AVS and CVC checks do not return the raw values.  |  
| `AvsRaw`  | string  | AVS verification as returned by the issuer. Single value, not split by postal code or street. Some gateways performing AVS and CVC checks do not return the raw values.  |  
| `ProviderParsed`  | object  | Contains any parsing of the issuer-returned CVV and AVS verification values occurred. Some gateways do not return any specific parsing of the raw values.  |  
| -`CvvMatch`  | string  | Provider-parsed value of CVV verification  |  
| -`Avs`  | string  | Provider-parsed value of AVS verification. Single value, not split by postal code or street  |  
| -`StreetMatch`  | string  | Provider-parsed value of AVS verification - street only.  |  
| -`PostalCodeMatch`  | string  | Provider-parsed value of AVS verification - postal code only.  |  
### GatewayErrors[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayerrors "Direct link to GatewayErrors")
The GatewayErrors object is intended to isolate codes and messages from the `rawResponse` when an issue arises preventing a transaction from being approved. Use this parameter to determine transaction failure only when the mappings are a value-add to your application - the `rawResponse` should always be parsed to diagnose the exact status of a transaction.  
| GatewayErrors[?]  | Type  | Description  |  
| --- | --- | --- |  
| Code  | string  | The issue code returned by the gateway. See the source parameter for the entity to which that code belongs to.  |  
| Message  | string  | The message returned by the gateway. See the source parameter for the entity to which the message belongs to.  |  
| Source  | string  | Possible values: `Unspecified`, `Gateway`, `Processor`, `TokenEx`. This source should be used to filter the array.   
`Unspecified `- the entity responsible for the issue could not be immediately determined.   
`Gateway `- issue reported by the 3rd-Party Gateway API.   
`Processor `- issues occurring downstream from the 3rd-Party Gateway API. Issuer codes and messages will fall under this source.   
`TokenEx `- When TokenEx is unable to parse out the response from the 3rd-Party Gateway API or another issue occurs during processing of the response.  |  
Errors in the `gatewayErrors` array generally fall into three categories:
  1. **Gateway/Processor Errors** — Errors originating from the 3rd-party gateway or downstream processor (e.g., invalid card data, declined transactions). These use the structured `Code`/`Message`/`Source` object format described in the table above.
  2. **TokenEx Processing Errors** — Errors that occur when TokenEx cannot parse the gateway response or encounters an internal processing issue. These also use the structured object format with `Source` set to `TokenEx`.
  3. **Unsupported Operation Errors** — Returned when a requested transaction type (e.g., check refund) is not supported by the configured gateway. These return `"Requested operation not supported by gateway"` in the `gatewayErrors` array as a plain string rather than a structured object. The response will have `approved: false` but `success: true` (because TokenEx processed the request successfully — the gateway simply doesn't support the operation).

Understanding `success` vs `approved`
Always check both the `success` and `approved` fields when handling responses. The `success` field indicates whether TokenEx processed the request without internal errors, while `approved` indicates whether the gateway approved the transaction. A response can be `success: true` with `approved: false` — this means TokenEx successfully forwarded the request, but the gateway declined or could not fulfill it.
Legacy GatewayErrors Format
All gateways support the structured Error Codes and Messages format where `gatewayErrors` is an array of objects with `Code`, `Message`, and `Source` fields. However, some customer integrations are still targeted for the older list-of-strings format where `gatewayErrors` is an array of plain strings rather than objects.
The example below shows the legacy list-of-strings format for a gateway error:
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```note
The [Unsupported Operation](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-examples) error documented above also uses the list-of-strings format (a plain string in the `gatewayErrors` array) regardless of migration status.
The table below shows when each gateway's structured Error Codes and Messages format became available. The list-of-strings format will be maintained for active customers until a sunset date is identified, after which the format will be switched.  
| Gateway  | Sandbox Migration Date  | Production Migration Date  |  
| --- | --- | --- |  
| [Adyen Classic](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/adyen)  | 5/9/2023  | 5/16/2023  |  
| [Authorize.Net](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/authorizenet-direct)  | 2/14/2023  | 2/21/2023  |  
| [BluePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/bluepay)  | 2/14/2023  | 2/21/2023  |  
| [Braintree](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/braintree)  | 11/29/2022  | 12/6/2022  |  
| [ChaseNetConnect](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/chasenetconnect)  | 12/20/2022  | 12/27/2022  |  
| [Cybersource](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/cybersource)  | 5/7/2024  | 5/14/2024  |  
| [EBANX](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/ebanx)  | 1/4/2023  | 1/10/2023  |  
| [Elavon](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/elavon)  | 5/9/2023  | 5/16/2023  |  
| [Nuvei](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/nuvei)  | 1/4/2023  | 1/10/2023  |  
| [Stripe](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe)  | 3/28/2023  | 4/4/2023  |  
| Payeezy  | 5/9/2023  | 5/16/2023  |  
| [Worldpay Native Raft](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft)  | 12/20/2022  | 12/27/2022  |  
| [Orbital](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital)  | 11/29/2022  | 12/6/2022  |  
| [First Data IPG](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/first-data-ipg)  | 12/20/2022  | 12/27/2022  |  
Contact your Customer Success Manager or our Support Team for questions about your migration status or to request migration to the structured format.
### Response Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-examples "Direct link to Response Examples")
Any request that includes either the `creditCard.Number` or `check. AccountNumber` parameter can create TokenEx tokens. If a token was generated, it will be returned in the response under `tokens.PAN`.
  * Tokenize
  * Detokenize and Passthrough
  * Gateway Error
  * Unsupported Operation
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```  * [Gateway Implementations](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gateway-implementations)
  * [Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#request-parameters)
    * [BillingAddress](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#billingaddress)
    * [Check](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#check)
    * [CreditCard](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#creditcard)
    * [OrderInfo](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#orderinfo)
    * [ShippingAddress](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#shippingaddress)
    * [SoftDescriptors](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#softdescriptors)
    * [StoredCredentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials)
    * [ThreeDSecure](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#threedsecure)
    * [Wallet](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#wallet)
  * [Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-parameters)
    * [GatewayResponse](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayresponse)
    * [VerificationResult](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#verificationresult)
    * [GatewayErrors](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#gatewayerrors)
    * [Response Examples](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#response-examples)
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": ["Declined - Updated Cardholder Available", "2022 - Declined - Updated Cardholder Available"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "tokens": {  

    "PAN": "TokenEx Token Here"  

  },  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "UUxNTkpTQzVDVEdMTks4Mg==",  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": true  

  },  

  "referenceNumber": "23111113453145218703",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{varies by gateway}",  

    "gatewayErrors": [  

      {  

        "code": "2022",  

        "message": "Declined - Updated Cardholder Available",  

        "source": "Gateway"  

      }  

    ],  

    "providerTransactionCode": "QLMNJSC5CTGLNK82",  

    "approved": false  

  },  

  "referenceNumber": "22112316405851364004",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "gatewayErrors": ["Requested operation not supported by gateway"],  

    "tokenExTransactionCode": "",  

    "providerTransactionCode": "",  

    "approved": false  

  },  

  "referenceNumber": "2512162034388070110",  

  "success": true,  

  "error": "",  

  "message": ""  

}  

```