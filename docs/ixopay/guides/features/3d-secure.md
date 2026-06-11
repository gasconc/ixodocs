---
title: 3-D Secure
summary: ' 3-D Secure'
tags:
- setting-secure-authentication-https-documentation-ixopay-com-docs-guides-features-secure-setting-secure-authentication-direct-link-setting-secure-authentication
- controlling-present-secure-authentication-https-documentation-ixopay-com-docs-guides-features-secure-controlling-present-secure-authentication-direct-link-controlling-present-secure-authentication
- secure-setting-transaction-https-documentation-ixopay-com-docs-guides-features-secure-secure-setting-transaction-direct-link-secure-setting-transaction
- configuring-secure-setting-transaction-https-documentation-ixopay-com-docs-guides-features-secure-configuring-secure-setting-transaction-direct-link-configuring-secure-setting-transaction
- providing-secure-data-https-documentation-ixopay-com-docs-guides-features-secure-providing-secure-data-direct-link-providing-secure-data
- displaying-secure-authentication-https-documentation-ixopay-com-docs-guides-features-secure-displaying-secure-authentication-direct-link-displaying-secure-authentication
- testing-secure-authentication-https-documentation-ixopay-com-docs-guides-features-secure-testing-secure-authentication-direct-link-testing-secure-authentication
- footnotes-https-documentation-ixopay-com-docs-guides-features-secure-footnote-label-direct-link-footnotes
- api
- 3ds
source_url: https://documentation.ixopay.com/docs/guides/features/3d-secure
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* [Features](https://documentation.ixopay.com/docs/guides/features)
  * 3-D Secure

# 3-D Secure
3-D Secure (3DS) is a security protocol used in online credit and debit card transactions. It adds an extra layer of authentication, ensuring a purchase is made by a legitimate cardholder. This protocol is increasingly employed by online merchants worldwide and may be familiar to many customers under card networks' brand names like Visa Secure and Mastercard Identity Check.
The primary reason to use 3DS is to minimize the risk of fraudulent card usage, which provides multiple benefits:
  * **Liability Shift:** One of the primary advantages of authenticating transactions with 3DS is the shift of liability for potential chargebacks. In most cases, this responsibility shifts from the merchant to the card issuer. This shift significantly mitigates the risk of financial losses stemming from fraudulent transactions. For a more comprehensive understanding of how liability shift operates, consider exploring the [Liability shift](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift) article in our reference.
  * **Regulatory compliance:** In many regions, such as the European Economic Area (EEA), the use of Strong Customer authentication (SCA) like 3DS is a regulatory requirement under the Revised Directive on Payment Services (PSD2).
  * **Enhanced trust:** A secure payment process can increase customer trust, providing a better shopping experience and potentially boosting sales.
  * **Acceptance rate:** With 3-D Secure, merchants often experience higher acceptance rates, as the added security instills confidence in customers, encouraging them to proceed with their transactions. This can result in increased conversion rates and a positive impact on the overall business revenue.

With the [IXOPAY platform](https://www.ixopay.com), the complexities of the 3DS authentication process are handled for you. This includes maintaining SCA validity across different Payment Service Providers (PSPs) for smooth transitions and continuous operation, as well as simplifying the integration process for ease of implementation.
Reference
For more details on  3-D Secure, check out the in-depth article on [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure "3-D Secure reference article") in the reference.
3-D Secure version 1.x deprecation
The older version, 3DS version 1.x, has been deprecated and is no longer supported. All credit card schemes discontinued their support by the end of October 2022. If you're using [IXOPAY](https://www.ixopay.com)'s 3-D Secure infrastructure, ensure your configuration is set up for the supported 3-D Secure 2.x version.
## Setting-up 3-D Secure authentication[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#setting-up-3-d-secure-authentication "Direct link to Setting-up 3-D Secure authentication")
To enable and configure 3-D Secure for your platform, you can follow these general steps:
  1. **Hosted 3-D Secure:** Supports card brands Visa, Mastercard, Amex, Discover, Diners, and CB (see info below). For Adapters that support 3-D Secure version 2.0 transactions, you need to:
     * Enable 3DS authentication for your Connector
     * Configure parameters such as Acquiring BINs and Merchant Data
     * Set up your desired Parameter Configuration.
  2. **Provider 3-D Secure:** If your PSP/Acquirer provides a 3-D Secure environment, enable the corresponding option in your Adapter settings.

For a detailed step-by-step guide on configuring these settings, please refer to the [3-D Secure Configuration User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector/create-and-assign-connectors-adapters/3d-secure-configuration).
info
CB support via Hosted 3-D Secure is in a beta state. Please submit any feedback to Support.
## Controlling when to present 3-D Secure authentication[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#controlling-when-to-present-3-d-secure-authentication "Direct link to Controlling when to present 3-D Secure authentication")
Even after enabling 3-D Secure for a Connector, the 3-D Secure authentication flow does not trigger automatically for every transaction.
### 3-D Secure setting of a transaction[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#3-d-secure-setting-of-a-transaction "Direct link to 3-D Secure setting of a transaction")
The 3-D Secure authentication flow can be controlled for each transaction by setting the `threeDSecureData.3dsecure` field, which can take one of three values:
  * `MANDATORY`: 3-D Secure authentication is required for the transaction. If the card is not enrolled for 3-D Secure or the 3-D Secure flow fails, the transaction will be aborted with a `returnType` of `ERROR` and an `errorCode` `2021`[1](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fn-1). For more details on error codes related to payment errors, please refer to the [Reference: Error codes - Payment errors](https://documentation.ixopay.com/docs/reference/appendix/error-codes#payment-errors).
  * `OPTIONAL`: 3-D Secure authentication is attempted if the card is enrolled for 3-D Secure. Unless the transaction fails during the 3-D Secure flow, the transaction will continue without 3-D Secure, and a liability shift might not occur[1](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fn-1).
  * `OFF` (_default_): The 3-D Secure authentication flow is disabled, and no 3-D Secure flow is attempted for the transaction. This is the default behavior.

### Configuring the 3-D Secure setting of a transaction[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#configuring-the-3-d-secure-setting-of-a-transaction "Direct link to Configuring the 3-D Secure setting of a transaction")
You can set the 3-D Secure authentication flow at different levels:
  1. **Transaction level** : To specify the 3-D Secure requirement for a particular transaction, include the `threeDSecureData.3dsecure` field in the API request data and set it to the desired value (`MANDATORY`, `OPTIONAL`, or `OFF`).
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```  2. **Risk Engine configuration** : The Risk Engine allows you to configure rules and conditions for 3-D Secure authentication based on risk assessment. You can set up rules that trigger 3-D Secure authentication for transactions that meet specific risk criteria.
  3. **Static Connector Setting** : For Connectors supporting Hosted 3-D Secure, you can enable the checkbox _Enabled_ in _3D-Secure 2 Configuration (IXOPAY-hosted)_ to set 3-D Secure to `OPTIONAL` or `MANDATORY` as the default policy.

info
When there are conflicting settings at different levels, the most stringent setting takes precedence. Specifically, `MANDATORY` has the highest priority, followed by `OPTIONAL`, and finally `OFF`.
## Providing 3-D Secure data[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#providing-3-d-secure-data "Direct link to Providing 3-D Secure data")
Before proceeding with a transaction, it is important to provide the necessary 3-D Secure data. The `threeDSecureData` field in the API request allows you to submit the required information for the authentication process. To find the list of fields and their descriptions for 3-D Secure data submission, you can explore the corresponding API documentation for example for [debit transactions](https://documentation.ixopay.com/api/transaction/debit) by expanding the field `threeDSecureData`.
During the 3-D Secure authentication process, there are several possible outcomes that can occur based on the provided data and the customer's interaction with the authentication process. These outcomes include frictionless flows and challenge flows. For a detailed explanation of each flow, please refer to our reference on [Authentication flows](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows).
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```The desired outcome for a smooth and seamless customer experience is the frictionless flow. In a frictionless flow, no further customer interaction is required, and the transaction can proceed smoothly without any additional steps. To maximize the chances of a frictionless flow, it is crucial to provide as much data as possible in the `threeDSecureData` field of transaction requests.
Mandatory fields
The `browser*` fields are mandatory for 3-D Secure 2.0, and including all required browser fields is essential to avoid transaction failures.
For integrations using [hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) or [payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) on the IXOPAY platform, the browser fields are automatically filled, streamlining the authentication process.
However, for other [processing options](https://documentation.ixopay.com/docs/reference/integration/processing-options), it is essential to manually provide these fields, especially for customer-initiated card-on-file transactions. For more information on customer-initiated transactions, please see our dedicated guide on [Customer-initiated transactions](https://documentation.ixopay.com/docs/guides/payments/customer-initiated#transaction-indicators).
## Displaying 3-D Secure authentication[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#displaying-3-d-secure-authentication "Direct link to Displaying 3-D Secure authentication")
Once you submit a transaction with `threeDSecureData`, there are three possible outcomes:
  1. `FINISHED`: When you receive a `returnType` of `FINISHED`, the transaction was successful. This outcome can occur in two scenarios:
     * If you used `threeDSecureData.3dsecure: OPTIONAL` on your transaction, the 3-D Secure attempt might have failed, but the transaction was still processed without 3-D Secure.
     * If you used `threeDSecureData.3dsecure: MANDATORY` on your transaction, the 3-D Secure attempt was successful and your transaction processed with 3-D Secure[1](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fn-1).
On a `FINISHED` transaction, you can obtain additional details about the 3-D Secure state:
     * Determine whether [liability shift](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift) was applied by checking the ECI field `returnData.cardData.eci`. Please note that for some provider 3-D Secure implementations, an ECI might not always be available, but liability shift could still have occurred.
     * Check `returnData.cardData.threeDSecure` to find out the level of 3-D Secure required for the transaction, which will reflect the value applied based on the API request, Risk Engine rule, and Connector setting.
No further action is required from the merchant in the case of a `FINISHED` transaction.
  2. `REDIRECT`: The `REDIRECT` outcome indicates that some form of 3-D Secure authentication is necessary for the transaction. This could be due to various reasons, such as issuing bank risk checks. The authentication process can take multiple forms, and not all flows require customer interaction.
To proceed with the authentication, the customer might be redirected to a secure authentication page. The specific process and user interaction will depend on the issuing bank and the cardholder's authentication settings.
When you receive a `returnType` of `REDIRECT`, you need to redirect the customer's browser to the provided `redirectUrl` for 3-D Secure authentication. For 3-D Secure transactions, the value of the `redirectType` response field will be `iframe`.
The transaction response would look something like:
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```Redirection methods
Depending on your application's structure, there are various ways to perform this redirection. The two most common methods are via the HTTP `Location` header or using JavaScript.
     * HTTP Location header
     * JavaScript
     * iframe
To use the HTTP `Location` header for redirection, set the `Location` field to the `redirectUrl`:
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```To perform the redirection using Javascript, you can set the `window.location.href` property to the `redirectUrl`:
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```You can also show the `redirectUrl` in an iframe, for more details, see the article [Display the challenge flow in an iframe](https://documentation.ixopay.com/docs/reference/features/3d-secure/advanced-guides/challenge-flow-iframe) in our reference.
Once the authentication is successful, the customer will be redirected back to the `successUrl`. In the event of authentication failure, they will be redirected to the `errorUrl`. The detailed flow of how to set up these URLs can be found in the [Hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) and [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) guides.
  3. `ERROR`: 3-D Secure authentication failed, for example this can happen if `threeDSecureData.3dsecure: MANDATORY` and either the issuing bank Access Control Server (ACS) wasn't reachable or the credit card is not enrolled with 3-D Secure[1](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fn-1).
No further merchant action is required. You can attempt to retry the transaction at a later time or with different data, but pay attention to the [merchant advice code](https://documentation.ixopay.com/docs/guides/production/handling-errors#merchant-advice-codes).

## Testing 3-D Secure authentication[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#testing-3-d-secure-authentication "Direct link to Testing 3-D Secure authentication")
For detailed information on testing 3-D Secure authentication, including testing scenarios and configurations, please refer to the [Testing 3-D Secure authentication](https://documentation.ixopay.com/docs/reference/features/3d-secure/testing) article in the reference section. This article provides guidance on how to test both hosted and provider 3-D Secure configurations, enabling you to ensure a smooth and secure authentication process.
## Footnotes[​](https://documentation.ixopay.com/docs/guides/features/3d-secure#footnote-label "Direct link to Footnotes")
  1. Please note that this guarantee applies exclusively to Hosted 3-D Secure. For Provider 3-D Secure, its availability relies on the Adapters implementation and may be subject to certain restrictions within the PSP's API. In case liability shift is a concern, please reach out to the PSP's support if you want any unauthenticated transaction rejected. [↩](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fnref-1) [↩2](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fnref-1-2) [↩3](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fnref-1-3) [↩4](https://documentation.ixopay.com/docs/guides/features/3d-secure#user-content-fnref-1-4)
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```  * [Setting-up 3-D Secure authentication](https://documentation.ixopay.com/docs/guides/features/3d-secure#setting-up-3-d-secure-authentication)
  * [Controlling when to present 3-D Secure authentication](https://documentation.ixopay.com/docs/guides/features/3d-secure#controlling-when-to-present-3-d-secure-authentication)
    * [3-D Secure setting of a transaction](https://documentation.ixopay.com/docs/guides/features/3d-secure#3-d-secure-setting-of-a-transaction)
    * [Configuring the 3-D Secure setting of a transaction](https://documentation.ixopay.com/docs/guides/features/3d-secure#configuring-the-3-d-secure-setting-of-a-transaction)
  * [Providing 3-D Secure data](https://documentation.ixopay.com/docs/guides/features/3d-secure#providing-3-d-secure-data)
  * [Displaying 3-D Secure authentication](https://documentation.ixopay.com/docs/guides/features/3d-secure#displaying-3-d-secure-authentication)
  * [Testing 3-D Secure authentication](https://documentation.ixopay.com/docs/guides/features/3d-secure#testing-3-d-secure-authentication)
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY"  

    // ...  

  }  

}  

```
```

{  

  "merchantTransactionId": "your-unique-identifier",  

  "amount": "155",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error",  

  "callbackUrl": "https://api.example.org/callback",  

  "transactionToken": "ix::e5eb9f5158deb7d6b7da44b2334f",  

  "customer": {  

    "firstName": "Alex",  

    "lastName": "Smith",  

    "company": "Alex's Artisan Goods",  

    "email": "alex.smith@example.org",  

    "emailVerified": false,  

    "ipAddress": "198.51.100.123"  

  },  

  "language": "en",  

  "threeDSecureData": {  

    "3dsecure": "MANDATORY",  

    "channel": "02",  

    "authenticationIndicator": "01",  

    "cardholderAuthenticationMethod": "02",  

    "cardholderAuthenticationDateTime": "2026-06-09T08:18:36Z",  

    "challengeIndicator": "01",  

    "cardholderAccountType": "03",  

    "cardholderAccountAgeIndicator": "05",  

    "cardholderAccountDate": "2022-01-01",  

    "cardholderAccountChangeIndicator": "04",  

    "cardholderAccountLastChange": "2022-01-01",  

    "cardholderAccountPasswordChangeIndicator": "05",  

    "cardholderAccountLastPasswordChange": "2022-01-01",  

    "shippingAddressUsageIndicator": "04",  

    "shippingAddressFirstUsage": "2022-01-01",  

    "transactionActivityDay": 0,  

    "transactionActivityYear": 10,  

    "addCardAttemptsDay": 0,  

    "purchaseCountSixMonths": 7,  

    "suspiciousAccountActivityIndicator": "01",  

    "shippingNameEqualIndicator": "01",  

    "paymentAccountAgeIndicator": "05",  

    "paymentAccountAgeDate": "2022-01-01",  

    "billingAddressLine3": "",  

    "shippingAddressLine3": "",  

    "billingShippingAddressMatch": "Y",  

    "homePhoneCountryPrefix": "1", // combined with field below  

    "homePhoneNumber": "1234567890", // to make +1 1234567890  

    "mobilePhoneCountryPrefix": "1", // combined with field below  

    "mobilePhoneNumber": "1234567890", // to make +1 1234567890  

    "workPhoneCountryPrefix": "1", // combined with field below  

    "workPhoneNumber": "1234567890", // to make +1 1234567890  

    "shipIndicator": "01",  

    "deliveryTimeframe": "04",  

    "reorderItemsIndicator": "01",  

    "preOrderPurchaseIndicator": "01",  

    "giftCardAmount": 10,  

    "giftCardCurrency": "EUR",  

    "giftCardCount": 1,  

    "purchaseDate": "2026-06-09T08:18:36Z",  

    "transType": "01",  

    "exemptionIndicator": "02"  

    // browser* fields are submitted by payment.js or a hosted payment page if used  

  }  

}  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260608-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "iframe",  

  "paymentMethod": "Creditcard"  

}  

```
```

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

window.location.href = "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890";  

```