---
title: Authentication flows
summary: ' 3-D Securehttps://documentation.ixopay.com/docs/reference/features/3d-secure  Authentication
  flows'
tags:
- available-authentication-flows-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-available-authentication-flows-direct-link-available-authentication-flows
- frictionless-flow-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-frictionless-flow-direct-link-frictionless-flow
- challenge-flow-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-challenge-flow-direct-link-challenge-flow
- error-flow-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-error-flow-direct-link-error-flow
- results-authentication-flows-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-results-authentication-flows-direct-link-results-authentication-flows
- success-results-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-success-results-direct-link-success-results
- error-results-https-documentation-ixopay-com-docs-reference-features-secure-authentication-flows-error-results-direct-link-error-results
- 3ds
- 3d-secure
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows
portal: ixopay-dev
updated: '2026-05-25'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * Authentication flows

# Authentication flows
When using 3-D Secure for transaction requests, the authentication process can lead to various outcomes, depending on the provided data and the customer's interaction. Here are the different authentication flows that may occur during the 3-D Secure process:
Authentication\nrequest
Frictionless flow
Challenge flow
Error flow
Error result
Success result
## Available authentication flows[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#available-authentication-flows "Direct link to Available authentication flows")
In the 3-D Secure authentication process, several distinct flows can occur, each with specific characteristics. Familiarize yourself with these authentication flows to understand how they influence transaction processing.
### Frictionless flow[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#frictionless-flow "Direct link to Frictionless flow")
In the frictionless flow, all necessary 3-D Secure data is provided, and the authentication is successfully completed without any additional steps required from the customer. This smooth and seamless process allows the transaction to proceed without any interruptions or challenges.
The [IXOPAY platform](https://www.ixopay.com) continues the transaction with the authorization process.
### Challenge flow[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#challenge-flow "Direct link to Challenge flow")
In certain cases, the issuing bank may require additional verification from the customer to ensure the security of the transaction. This leads to the challenge flow, where the customer is prompted to complete an extra step, such as entering a one-time password (OTP) or undergoing biometric authentication. Once the authentication is successfully completed, the transaction proceeds.
During the challenge flow, you can obtain the `extraData.3ds:transStatus`, which will be `C`, to indicate the need for this additional verification. For details on how to receive this data via callbacks, please refer to the [Transaction results article](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results).
The IXOPAY platform sets the transaction status to `REDIRECT`. The challenge flow will be handled on the page referenced by `redirectUrl`. Depending on the outcome of the challenge flow, the IXOPAY platform might continue the transaction with the authorization process.
### Error flow[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#error-flow "Direct link to Error flow")
In some cases, the directory server directly indicates an error without starting a challenge or frictionless flow. The possible outcomes are documented below in the [Error results](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#error-results).
## Results of the authentication flows[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#results-of-the-authentication-flows "Direct link to Results of the authentication flows")
The outcomes of authentication flows have a direct impact on transaction status and [liability shift](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift). Explore the various results that can arise from the 3-D Secure authentication process to gain insights into transaction handling.
### Success results[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#success-results "Direct link to Success results")
Below are the success results that indicate different authentication and account verification outcomes. For detailed information on how to obtain the `extraData.3ds:transStatus` field for each success result, please refer to the [Transaction results article](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results).
  * **Authentication, account verification successful** (`transStatus: Y`): Indicates a transaction that is fully authenticated.
  * **Attempts, processing performed** (`transStatus: A`): Cardholder is not fully authenticated, but a proof of attempted authentication/verification is provided.

Each of the above results warrants [liability shift](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift).
The IXOPAY platform continues the transaction with the authorization process.
### Error results[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows#error-results "Direct link to Error results")
There are instances where errors may occur during the 3-D Secure authentication process. These errors could be due to technical issues, communication problems between systems, or invalid data provided during the authentication attempt. In the error flow, it is necessary to investigate and resolve the error before proceeding with the transaction. For detailed information on how to obtain the `extraData.3ds:transStatus` field for each success result, please refer to the [Transaction results article](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results).
  * **Not authenticated, account not verified** (`transStatus: N`): Indicates a transaction that is not authenticated. Occurs when the cardholder failed the challenge or if the issuer is rejecting the card upfront.
  * **Authentication, account verification rejected** (`transStatus: R`): Similar to _Not authenticated_ , except that the issuer suspects a fraudulent attempt. The IXOPAY platform aborts the transaction as required by the schemes.
  * **Authentication, account verification could not be performed** (`transStatus: U`): Technical or other problem, for example issuer was not reachable.

Depending on the value of the `threeDSecureData.3dsecure` field, the IXOPAY platform sets the transaction status to `ERROR` or continues with the authorization (for example if `threeDSecureData.3dsecure` was `OPTIONAL`).