---
title: Customer profiles
summary: ' Customer profiles'
tags:
- introduction-https-documentation-ixopay-com-docs-reference-features-customer-profiles-introduction-direct-link-introduction
- cases-https-documentation-ixopay-com-docs-reference-features-customer-profiles-cases-direct-link-cases
- creating-customer-profile-https-documentation-ixopay-com-docs-reference-features-customer-profiles-creating-customer-profile-direct-link-creating-customer-profile
- customer-profiles-https-documentation-ixopay-com-docs-reference-features-customer-profiles-customer-profiles-direct-link-customer-profiles
- retrieving-profile-information-https-documentation-ixopay-com-docs-reference-features-customer-profiles-retrieving-profile-information-direct-link-retrieving-profile-information
- executing-transactions-https-documentation-ixopay-com-docs-reference-features-customer-profiles-executing-transactions-direct-link-executing-transactions
- updating-profile-information-https-documentation-ixopay-com-docs-reference-features-customer-profiles-updating-profile-information-direct-link-updating-profile-information
- deleting-profile-information-https-documentation-ixopay-com-docs-reference-features-customer-profiles-deleting-profile-information-direct-link-deleting-profile-information
- managing-payment-instruments-https-documentation-ixopay-com-docs-reference-features-customer-profiles-managing-payment-instruments-direct-link-managing-payment-instruments
- attaching-payment-instrument-https-documentation-ixopay-com-docs-reference-features-customer-profiles-attaching-payment-instrument-direct-link-attaching-payment-instrument
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * Customer profiles

# Customer profiles
The customer profiles feature is designed to store and manage customer data and payment details, facilitating faster and more efficient checkout experiences for your customers. This document provides a comprehensive guide to using the customer profiles feature.
Guide
For a detailed, step-by-step guide on integrating customer profiles, refer to the [customer profiles guide](https://documentation.ixopay.com/docs/guides/features/customer-profiles "Customer profiles guide") in our guides section.
IXOPAY platform Full Version
Customer profiles are an optional feature which is not automatically available for all [IXOPAY platform](https://www.ixopay.com) clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Introduction[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#introduction "Direct link to Introduction")
The customer profiles API enables you to store various types of customer data, including multiple payment instruments (for multiple connectors), in a unique customer profile. Each customer profile is automatically assigned a `profileGuid` by the system, and a `customerIdentification` is provided by you.
Typically, using the customer profiles involves the following steps:
  1. **Creation of a customer profile** : During a customer's first purchase, a new customer profile is created via a transaction call to the desired payment method's connector. The `customerIdentification` field must be set for this transaction.
  2. **Retrieving a customer profile** : When the customer returns for subsequent purchases, you can retrieve the profile information using the `getProfile` call.
  3. **Executing transactions using the customer profile** : A transaction is sent using the `paymentToken` of the selected payment instrument in the customer's profile.

These steps are represented in the following graph:
1.
2.
3.
Customer
Create new profile with a transaction call to the desired payment method's connector
Retrieve profile info with `getProfile` call
Send transaction with `paymentToken` of the profile's payment instrument
## Use cases[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#use-cases "Direct link to Use cases")
The main use cases for customer profiles are:
  1. **Sharing payment instruments between multiple merchants:** This allows for a seamless checkout experience across different merchants within the same ecosystem.
  2. **[Hosted payment pages](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) with payment method selection:** By using stored payment instruments, customers can have a simplified and efficient payment experience, reducing the friction during the checkout process.

## Creating a customer profile[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#creating-a-customer-profile "Direct link to Creating a customer profile")
During a transaction request that includes the `customerProfileData` element, you can implicitly create a new customer profile. This request should be sent to the appropriate connector for the selected payment method. The `customerIdentification` field must be set during this transaction.
The system will automatically use any data provided in the `customer` element for the customer profile's data. If the transaction is a [Register](https://documentation.ixopay.com/api/transaction/register) type or a [Debit](https://documentation.ixopay.com/api/transaction/debit)/[Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) type with the `withRegister` flag set, the payment instrument will be stored within the customer profile for later usage on subsequent charges.
Transaction request body```
{  
  "merchantTransactionId": "your-unique-identifier",  
  // in this example we use the tokenized credit card from payment.js  
  "transactionToken": "$CC_TOKEN",  
  "description": "Purchase description shown on credit card statement.",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "identification": "616c6578-2e73-6d69-7468-406578616d70",  
    "billingCountry": "US",  
    "birthDate": "1970-01-01",  
    "email": "alex.smith@example.org"  
  },  
  "customerProfileData": {  
    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  
    // Mark this as the preferred one for the future  
    "markAsPreferred": true  
  }  
}  

```

Once the transaction is successful, the system will automatically add the customer's registered payment instrument to the customer profile. Along with this, the response of the successful transaction will also include the `customerProfileData.profileGuid`. You can use this `profileGuid` to retrieve the full customer profile information, including the stored payment instruments, using the [`getProfile`](https://documentation.ixopay.com/api/customer-profiles/get-profile) call.
Transaction response```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "FINISHED",  
  "paymentMethod": "Creditcard"  
  "customerProfileData": {  
    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  
    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  
    "paymentToken": "pt::b639e636df17af782602"  
  }  
}  

## Using customer profiles[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#using-customer-profiles "Direct link to Using customer profiles")
Once a customer profile is set up, it can be used to retrieve profile information and to execute transactions.
### Retrieving profile information[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#retrieving-profile-information "Direct link to Retrieving profile information")
You can retrieve the customer profile using the [`getProfile`](https://documentation.ixopay.com/api/customer-profiles/get-profile) call, which returns the stored payment instruments. The profile can be requested either via the `profileGuid` or via the `customerIdentification`.
  * Request by customer identification
  * Request by profile GUID
  * Response

```
POST /api/v3/customerProfiles/$API_KEY/getProfile  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70"  
}  
```
POST /api/v3/customerProfiles/$API_KEY/getProfile  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678"  
}  

getProfile response
```
{  
  "success": true,  
  "profileExists": "true",  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  
  "preferredMethod": "Creditcard",  
  "customer": {  
    "identification": "616c6578-2e73-6d69-7468-406578616d70",  
    "billingCountry": "US",  
    "birthDate": "1970-01-01",  
    "email": "alex.smith@example.org"  
  },  
  "paymentInstruments": [  
    {  
      "_TYPE": "card",  
      "createdAt": "2031-04-10 08:52:36",  
      "method": "card",  
      "paymentData": {  
        "_TYPE": "paymentData.card",  
        "brand": "visa",  
        "cardHolder": "Alex Smith",  
        "expiryMonth": 4,  
        "expiryYear": 2031,  
        "firstSixDigits": "411111",  
        "lastFourDigits": "1111"  
      },  
      "paymentToken": "pt::b639e636df17af782602",  
      "isPreferred": true  
    }  
  ]  
}  

### Executing transactions[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#executing-transactions "Direct link to Executing transactions")
For transactions, the `paymentToken` of the selected instrument must be included within the `transactionToken` element of the transaction request.
You can also designate a payment instrument as the preferred one by either using the `markAsPreferred` flag during the transaction that registers the instrument or specifying the `paymentToken` as the `preferredInstrument` when calling the [`updateProfile`](https://documentation.ixopay.com/api/customer-profiles/update-profile) endpoint.```
{  
  "merchantTransactionId": "your-unique-identifier",  
  // this is the paymentToken from the customer profile  
  "transactionToken": "pt::b639e636df17af782602",  
  "description": "Purchase description shown on credit card statement.",  
  "amount": "9.99",  
  "currency": "EUR",  
  "successUrl": "https://shop.example.org/checkout/success",  
  "cancelUrl": "https://shop.example.org/checkout/cancelled",  
  "errorUrl": "https://shop.example.org/checkout/error",  
  "callbackUrl": "https://api.example.org/callback"  
}  

Transaction execution and security considerations
When dealing with transaction execution and customer profiles, it's essential to bear in mind the following key points:
  * If you're a merchant using multiple connectors and storing payment instruments to customer profiles, be aware that each payment instrument is tied to a specific connector. Use a [meta-connector](https://docs.ixopay.com/en/platform-user-administration-manual/connector/routing-cascading-balancing-fallback) when sending the transaction request. This guarantees that the transaction is appropriately routed to the correct connector linked to the stored payment instrument.
  * ⁮IXOPAY platform doesn't conduct any authentication for accessing a customer profile. Therefore, it's important for you to ensure that only authorized users can access a particular customer profile. You should only transmit a `profileGuid` or `customerIdentification` if the user is authorized.
  * During transaction execution, you have the choice to use `referenceUuid` instead of `paymentToken` from the payment instrument passed through `transactionToken`. However, remember that `referenceUuid` cannot be shared among multiple merchants, while `paymentToken` can be.
  * Even when using a stored customer profile, a [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) SCA flow may still be required to maintain compliance with payment security protocols.

### Updating profile information[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#updating-profile-information "Direct link to Updating profile information")
It's possible to modify the customer profile data, including marking a particular payment instrument as preferred.
  * To update a customer profile, you can use the [`updateProfile`](https://documentation.ixopay.com/api/customer-profiles/update-profile) endpoint. This call allows you to change various elements of the profile, such as contact information or customer data.
  * To mark a specific payment instrument as preferred:
    * You can specify the `paymentToken` of the instrument in the `preferredInstrument` field when making the [`updateProfile`](https://documentation.ixopay.com/api/customer-profiles/update-profile) call.
    * Alternatively, you can set the `markAsPreferred` flag during the transaction that registers this instrument. Within this transaction, reference the customer profile by specifying either the `customerIdentification` or `profileGuid` fields in the `customerProfileData` element.

Remember to ensure that the appropriate [meta-connector](https://docs.ixopay.com/en/platform-user-administration-manual/connector/routing-cascading-balancing-fallback) is used during these transactions. This guarantees that the transaction request is correctly forwarded to the correct connector tied to the stored payment instrument.
After updating, you can verify the changes by performing a [`getProfile`](https://documentation.ixopay.com/api/customer-profiles/get-profile) call.
### Deleting profile information[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#deleting-profile-information "Direct link to Deleting profile information")
You have the ability to permanently delete customer profiles using the [`deleteProfile`](https://documentation.ixopay.com/api/customer-profiles/delete-profile) API call. The profile can be specified by either the `profileGuid` or `customerIdentification`.
  * Request by customer identification
  * Request by profile GUID
  * Response

```
{  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70"  
}  
```
{  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678"  
}  

```
{  
  "success": true  
}  

Please exercise caution when deleting profiles as this action is irreversible. Once a profile is deleted, all related customer data and payment details stored within that profile will be lost.
## Managing payment instruments[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#managing-payment-instruments "Direct link to Managing payment instruments")
Customer profiles allow dynamic management of stored payment instruments. New payment instruments can be attached to a customer profile or detached from them when no longer needed.
Deregister
A successful [deregister](https://documentation.ixopay.com/api/transaction/deregister) API call on [register](https://documentation.ixopay.com/api/transaction/register)/withRegister `transactionUuid` will, if attached, automatically detach the payment instrument from the customer profile.
### Attaching a payment instrument[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#attaching-a-payment-instrument "Direct link to Attaching a payment instrument")
A previously registered payment instrument can be attached to a customer profile without initiating a new transaction using the [`attachPaymentInstrument `](https://documentation.ixopay.com/api/customer-profiles/attach-payment-instrument) call.
Prerequisites
  * The referenced transaction must be a successful [register](https://documentation.ixopay.com/api/transaction/register)/withRegister transaction.
  * The connector of the referenced transaction must match the connector of the API key.
  * The connector of the referenced transaction and API key must belong to the same [customer profile container](https://documentation.ixopay.com/docs/reference/features/customer-profiles#customer-profile-containers).
  * The referenced transaction must **not** be deregistered.
  * The referenced transaction must **not** be attached to a customer profile.

  * Request by customer identification
  * Request by profile GUID
  * Request by customer identification and `createProfileIfNotExists`
  * Response
```
POST /api/v3/customerProfiles/$API_KEY/attachPaymentInstrument  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "transactionUuid": "d94c0d72f3a36e21f16e",  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70"  
}  

```
POST /api/v3/customerProfiles/$API_KEY/attachPaymentInstrument  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "transactionUuid": "d94c0d72f3a36e21f16e",  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  
}  
```
POST /api/v3/customerProfiles/$API_KEY/attachPaymentInstrument  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "transactionUuid": "d94c0d72f3a36e21f16e",  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  
  "createProfileIfNotExists": true  
}  

```
{  
  "success": true,  
  "message": "Payment instrument successfully attached to customer profile.",  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  
  "paymentToken": "pt::b639e636df17af782602"  
}  

#### Field descriptions[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#field-descriptions "Direct link to Field descriptions")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `transactionUuid`  | required`string`  | If provided, attaches the payment instrument to the specified existing profile.  |  
| `profileGuid`  | optional`string?`  | If provided, attaches the payment instrument to the specified existing profile.  |  
| `customerIdentification`  | optional`string?`  | If provided, the system will search for an existing profile. If none exists and createProfileIfNotExists is true, a new profile will be created. Payment instrument will be attached to the newly created profile.  |  
| `createProfileIfNotExists`  | optional`boolean?` Default: `false`  | Flag to indicate whether to create a new profile if customerIdentification doesn't match any existing one.  |  
info
Either `profileGuid` or `customerIdentification` must be provided. If both parameters are omitted, the request will fail.
### Detaching a payment instrument[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#detaching-a-payment-instrument "Direct link to Detaching a payment instrument")
Detaching removes a payment instrument from a customer profile, rendering it unusable for future transactions associated with that profile.
Prerequisite
The referenced transaction must be attached to the customer profile provided in the request.
  * Request by customer identification
  * Request by profile GUID
  * Response
```
POST /api/v3/customerProfiles/$API_KEY/detachPaymentInstrument  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "transactionUuid": "d94c0d72f3a36e21f16e",  
  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  
}  

```
POST /api/v3/customerProfiles/$API_KEY/detachPaymentInstrument  
Host: gateway.ixopay.com  
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQK  
Content-Type: application/json  
  
{  
  "transactionUuid": "d94c0d72f3a36e21f16e",  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678"  
}  

```
{  
  "success": true,  
  "message": "Payment instrument successfully detached from customer profile.",  
  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678"  
}  

#### Field descriptions[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#field-descriptions-1 "Direct link to Field descriptions")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `transactionUuid`  | required`string`  | UUID of the successful transaction that registered the payment instrument..  |  
| `profileGuid`  | optional`string?`  | If provided, customer profile from which to detach the payment instrument.  |  
| `customerIdentification`  | optional`string?`  | If provided, customer identification profile from which to detach the payment instrument.  |  
info
Either `profileGuid` or `customerIdentification` must be provided. If both parameters are omitted, the request will fail.
Deregister
A successful [`detachPaymentInstrument`](https://documentation.ixopay.com/api/customer-profiles/detach-payment-instrument) API call will not automatically deregister the payment instrument. This has to be done separately with a [deregister transaction](https://documentation.ixopay.com/api/transaction/deregister).
## Customer profile containers[​](https://documentation.ixopay.com/docs/reference/features/customer-profiles#customer-profile-containers "Direct link to Customer profile containers")
In the customer profiles feature, the _customer profile containers_ play a central role. Initially, a tenant doesn't have a customer profile container; it needs to be created first. These containers serve as storage for the customer profiles.
One of the most powerful attributes of customer profile containers is their ability to be shared across sub-tenants. This sharing capability enables multiple merchants within the same ecosystem to access shared customer profiles, delivering a seamless and consistent shopping experience for the customers.
Sharing customer profiles
The ability to share customer profiles across multiple merchants is a significant advantage of the customer profiles feature. The primary benefit is that customers only need to enter and store their payment information once with a single merchant. Then, when they shop with a different merchant within the same ecosystem that shares customer profiles, they can leverage their stored profile, eliminating the need to re-enter their payment information.
It's important to note that each `customerIdentification` must be unique per customer profile container. Furthermore, a tenant can opt to disable customer profile containers for sub-tenants if needed.
Upon its creation, a customer profile container is not automatically associated with any specific function. There are two main methods to utilize a customer profile container:
  1. Implement a [global setting](https://docs.ixopay.com/en/platform-user-administration-manual/connector/edit-connector/global-connector-settings) that assigns the customer profile container to all connectors of a given tenant. This setting is specific to a tenant and is not passed down to sub-tenants.
  2. Associate the customer profile container with each individual connector that should employ the customer profiles.

  * [Introduction](https://documentation.ixopay.com/docs/reference/features/customer-profiles#introduction)
  * [Use cases](https://documentation.ixopay.com/docs/reference/features/customer-profiles#use-cases)
  * [Creating a customer profile](https://documentation.ixopay.com/docs/reference/features/customer-profiles#creating-a-customer-profile)
  * [Using customer profiles](https://documentation.ixopay.com/docs/reference/features/customer-profiles#using-customer-profiles)
    * [Retrieving profile information](https://documentation.ixopay.com/docs/reference/features/customer-profiles#retrieving-profile-information)
    * [Executing transactions](https://documentation.ixopay.com/docs/reference/features/customer-profiles#executing-transactions)
    * [Updating profile information](https://documentation.ixopay.com/docs/reference/features/customer-profiles#updating-profile-information)
    * [Deleting profile information](https://documentation.ixopay.com/docs/reference/features/customer-profiles#deleting-profile-information)
  * [Managing payment instruments](https://documentation.ixopay.com/docs/reference/features/customer-profiles#managing-payment-instruments)
    * [Attaching a payment instrument](https://documentation.ixopay.com/docs/reference/features/customer-profiles#attaching-a-payment-instrument)
    * [Detaching a payment instrument](https://documentation.ixopay.com/docs/reference/features/customer-profiles#detaching-a-payment-instrument)
  * [Customer profile containers](https://documentation.ixopay.com/docs/reference/features/customer-profiles#customer-profile-containers)