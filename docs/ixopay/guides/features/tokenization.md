---
title: Tokenization & PCI
summary: ' Tokenization & PCI'
tags:
- tokenization-https-documentation-ixopay-com-docs-guides-features-tokenization-tokenization-direct-link-tokenization
- multiple-tokens-https-documentation-ixopay-com-docs-guides-features-tokenization-multiple-tokens-direct-link-multiple-tokens
- creating-multiple-token-https-documentation-ixopay-com-docs-guides-features-tokenization-creating-multiple-token-direct-link-creating-multiple-token
- multiple-token-https-documentation-ixopay-com-docs-guides-features-tokenization-multiple-token-direct-link-multiple-token
- single-tokens-https-documentation-ixopay-com-docs-guides-features-tokenization-single-tokens-direct-link-single-tokens
- creating-single-token-https-documentation-ixopay-com-docs-guides-features-tokenization-creating-single-token-direct-link-creating-single-token
- single-token-https-documentation-ixopay-com-docs-guides-features-tokenization-single-token-direct-link-single-token
- converting-single-token-multiple-token-https-documentation-ixopay-com-docs-guides-features-tokenization-converting-single-token-multiple-token-direct-link-converting-single-token-multiple-token
- customer-profiles-https-documentation-ixopay-com-docs-guides-features-tokenization-customer-profiles-direct-link-customer-profiles
- api
source_url: https://documentation.ixopay.com/docs/guides/features/tokenization
portal: ixopay-dev
updated: '2026-05-25'
related: []
---

* [Features](https://documentation.ixopay.com/docs/guides/features)
  * Tokenization & PCI

# Tokenization & PCI
This guide offers a comprehensive exploration of tokenization, customer profiles, and mobile SDKs, focusing on vital components in securing online payment solutions. Whether you're seeking to understand the core principles of tokenization or harness the power of customer profiles and mobile SDKs, this resource provides the knowledge to enhance security in the realm of online payments.
## What is tokenization?[​](https://documentation.ixopay.com/docs/guides/features/tokenization#what-is-tokenization "Direct link to What is tokenization?")
Tokenization is a security technique employed in [IXOPAY platform](https://www.ixopay.com)'s payment processing system, designed to enhance security by substituting sensitive credit card data with unique tokens. These tokens serve as stand-ins for actual credit card information and can be used to perform transactions without exposing customers' genuine credit card details.
Importantly, IXOPAY platform securely manages the data that associates a token with the Primary Account Number (PAN) in compliance with industry standards and best practices. This secure storage is maintained within a PCI-compliant environment, ensuring the utmost protection of sensitive payment information.
PCI (Payment Card Industry) compliance is a set of security standards established to safeguard credit card transactions and data. It encompasses rigorous security measures and practices to ensure the secure handling of payment information, providing an additional layer of protection to online transactions.
## Multiple-use tokens[​](https://documentation.ixopay.com/docs/guides/features/tokenization#multiple-use-tokens "Direct link to Multiple-use tokens")
Multiple-use tokens are utilized for [merchant-initiated transactions](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated). They encompass the cardholder name, primary account number (PAN), and expiration date.
### Creating a multiple-use token[​](https://documentation.ixopay.com/docs/guides/features/tokenization#creating-a-multiple-use-token "Direct link to Creating a multiple-use token")
Multiple-use tokens are created during a [register transaction](https://documentation.ixopay.com/api/transaction/register). Additionally, you can create multiple-user tokens by enabling the `withRegister` flag for [debit](https://documentation.ixopay.com/api/transaction/debit) or [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transactions. Simply store the `uuid` of the created transaction.
### Using a multiple-use token[​](https://documentation.ixopay.com/docs/guides/features/tokenization#using-a-multiple-use-token "Direct link to Using a multiple-use token")
To use a previously stored multiple-use token, include it in the `referenceUuid` field for the supported [transaction types](https://documentation.ixopay.com/docs/reference/concepts/transactions/types):
  * [Debit](https://documentation.ixopay.com/api/transaction/debit)
  * [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize)
  * [Payout](https://documentation.ixopay.com/api/transaction/payout)
  * [Deregister](https://documentation.ixopay.com/api/transaction/deregister)

For a detailed guide on creating and using multiple-use tokens, refer to our [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving) guide.
## Single-use tokens[​](https://documentation.ixopay.com/docs/guides/features/tokenization#single-use-tokens "Direct link to Single-use tokens")
Single-use tokens are designed for one-time use and are generated for [customer-initiated transactions](https://documentation.ixopay.com/docs/guides/payments/customer-initiated). They include the cardholder name, Primary Account Number (PAN), Card Verification Value (CVV), and expiration date.
### Creating a single-use token[​](https://documentation.ixopay.com/docs/guides/features/tokenization#creating-a-single-use-token "Direct link to Creating a single-use token")
You can create single-use tokens in two ways:
  1. **payment.js** : ⁮payment.js provides a secure browser-based method for customers to enter their payment information. Detailed instructions on creating a single-use token using payment.js can be found in step 1 of our [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js#step-1-include-paymentjs) guide.
  2. **Mobile SDKs** : Utilize our mobile SDKs to generate single-use tokens for customers on iOS or Android devices. Access our mobile SDKs here:
     * [Android Mobile SDK](https://github.com/ixopay/ixopay-tokenization-android)
     * [iOS Mobile SDK](https://github.com/ixopay/ixopay-tokenization-ios)

Token expiration
Please note that single-use tokens come with a 15-minute expiration window. If a single-use token remains unused beyond this time frame, it will expire. Subsequently, any transaction request that references an expired token will result in an [error code 1002 — Token not found](https://documentation.ixopay.com/docs/reference/appendix/error-codes#general-errors-and-validation-errors).
### Using a single-use token[​](https://documentation.ixopay.com/docs/guides/features/tokenization#using-a-single-use-token "Direct link to Using a single-use token")
Once a single-use token has been created through one of the methods mentioned above, it can be used for a single transaction. To use the generated token, include it in the `transactionToken` field for the supported [transaction types](https://documentation.ixopay.com/docs/reference/concepts/transactions/types):
  * [Debit](https://documentation.ixopay.com/api/transaction/debit)
  * [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize)
  * [Payout](https://documentation.ixopay.com/api/transaction/payout)
  * [Register](https://documentation.ixopay.com/api/transaction/register)

For a complete example using payment.js with a debit transaction, consult our [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) guide.
### Converting a single-use token to a multiple-use token[​](https://documentation.ixopay.com/docs/guides/features/tokenization#converting-a-single-use-token-to-a-multiple-use-token "Direct link to Converting a single-use token to a multiple-use token")
You can convert a single-use token into a multi-use token by using a [register transaction](https://documentation.ixopay.com/api/transaction/register). Alternatively, you can create a multiple-use token from a single-use token by enabling the `withRegister` flag for [debit](https://documentation.ixopay.com/api/transaction/debit) or [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transactions. To achieve this, create one of the above transactions with the single-use `transactionToken`. Store the resulting `uuid` as a multi-use token.
## Customer profiles[​](https://documentation.ixopay.com/docs/guides/features/tokenization#customer-profiles "Direct link to Customer profiles")
Another way to tokenize payment information in IXOPAY platform is by using customer profiles. Explore the comprehensive details in our [customer profiles guide](https://documentation.ixopay.com/docs/guides/features/customer-profiles).