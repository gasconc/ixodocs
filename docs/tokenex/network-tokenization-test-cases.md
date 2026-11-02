---
title: Network Tokenization Test Cases
summary: ' Network tokenization  Network Tokenization Test Cases'
tags:
- test-data-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-data-direct-link-test-data
- successful-network-token-provisioning-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-successful-network-token-provisioning-direct-link-successful-network-token-provisioning
- unsuccessful-network-token-provisioning-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-unsuccessful-network-token-provisioning-direct-link-unsuccessful-network-token-provisioning
- test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api-direct-link-test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api
- test-tokenize-pan-tokenize-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-tokenize-pan-tokenize-endpoint-within-network-token-api-direct-link-test-tokenize-pan-tokenize-endpoint-within-network-token-api
- test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api-direct-link-test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api
- test-generate-payment-bundle-device-billing-data-getpaymentbundle-endpoint-within-network-token-api-visa-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-generate-payment-bundle-device-billing-data-getpaymentbundle-endpoint-within-network-token-api-visa-direct-link-test-generate-payment-bundle-device-billing-data-getpaymentbundle-endpoint-within-network-token-api-visa
- test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api-direct-link-test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api
- test-retrieve-status-token-getstatus-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-retrieve-status-token-getstatus-endpoint-within-network-token-api-direct-link-test-retrieve-status-token-getstatus-endpoint-within-network-token-api
- test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api-direct-link-test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api
source_url: https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases
portal: tokenex
updated: '2026-11-02'
related: []
---

* Network tokenization
  * Network Tokenization Test Cases

# Network Tokenization Test Cases
Once you have been provisioned for Network Tokenization in the TokenEx Test environment, the following test cases can be used to verify your implementation prior to being provisioned for Network Tokenization in the TokenEx Production environment.
Use the test card data in the table below for each scenario. As you complete each of the following test cases, document the corresponding reference numbers in each API response as described below. Technical Support will use the reference numbers to verify the successful completion of each test case.
Important Test PAN Information
TokenEx test PANs can be leveraged to verify that the call to the card brands via our Network Token endpoints are successful. However, your Payment Services Provider (PSP) or Gateway may not accept the TokenEx test PAN in their environment. Please contact your PSP/Gateway to obtain a PAN for testing on their platform.
## Test Data[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-data "Direct link to Test Data")
### Successful network token provisioning[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#successful-network-token-provisioning "Direct link to Successful network token provisioning")
Replacement rule: **Mastercard & Visa — replace `X` with `0`.** Mastercard expiry = any future date.  
| Card Brand  | Number  | Exp  | CVV  |  
| --- | --- | --- | --- |  
| American Express  | Any  | Any  | Any  |  
| Mastercard  | `512X342233150747`  | Any  | Any  |  
| Mastercard  | `512X343287498758`  | Any  | Any  |  
| Mastercard  | `51203501XXX64594`  | Any  | Any  |  
| Visa  | `46229431231XX639`  | 12/26  | 242  |  
| Visa  | `46229431231XX647`  | 12/26  | 749  |  
| Visa  | `46229431231XX654`  | 12/26  | 972  |  
| Visa  | `46229431231XX662`  | 12/26  | 344  |  
| Visa  | `46229431231XX67X`  | 12/26  | 306  |  
| Visa  | `46229431231XX688`  | 12/26  | 065  |  
| Visa  | `46229431231XX696`  | 12/26  | 264  |  
Visa test PANs are one-shot
Once a network token has been **successfully** provisioned against one of these Visa test PANs, that PAN **cannot be reset to un-provisioned to re-run a successful provisioning against it.** This is a property of the test data, not a limit on token deletion — deleting a token is a supported operation (see [Test 7](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-7-delete-an-active-token-using-the-lifecyclemanagement-endpoint-within-the-network-token-api)). Treat the success PANs as a finite, one-shot resource and budget them deliberately across your test runs. Amex accepts "Any," so Amex success provisioning is effectively unlimited; Mastercard has 3 PANs and Visa has 7.
### Unsuccessful network token provisioning[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#unsuccessful-network-token-provisioning "Direct link to Unsuccessful network token provisioning")
Replacement rule: **Amex — replace`X` with `0`; Visa — replace `X` with any number.** Expiry = any future date.  
| Card Brand  | PAN  | Failure Reason  |  
| --- | --- | --- |  
| American Express  | `370000000XXXX28`  | CARD_NOT_ELIGIBLE  |  
| American Express  | `3700000000XXXX2`  | DECLINED  |  
| American Express  | `37000000XXXX119`  | SERVICE_UNAVAILABLE  |  
| American Express  | `370000000XXXX36`  | CARD_NOT_ALLOWED  |  
| Visa  | `4000000011XXXXXX`  | CARD_VERIFICATION_FAILED  |  
| Visa  | `4001770011XXXXXX`  | CARD_NOT_ELIGIBLE  |  
| Visa  | `4010057011XXXXXX`  | CARD_NOT_ALLOWED  |  
| Visa  |  `4010057022XXXXXX` / `4020057022XXXXXX`  | DECLINED  |  
| Visa  |  `4010057033XXXXXX` / `4020057033XXXXXX`  | SERVICE_UNAVAILABLE  |  
| Visa  |  `4010057044XXXXXX` / `4020057044XXXXXX`  | SYSTEM_ERROR  |  
| Visa  |  `4010057055XXXXXX` / `4020057055XXXXXX`  | INVALID_REQUEST  |  
## Test 1: Tokenize a PAN and security code using the Tokenize endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-1-tokenize-a-pan-and-security-code-using-the-tokenize-endpoint-within-the-network-token-api "Direct link to Test 1: Tokenize a PAN and security code using the Tokenize endpoint within the Network Token API")
Using a PAN & Security Code pair from the test data list, send a request to the [Tokenize](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7) endpoint and ensure the following conditions in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The "NetworkResponse.TokenizationDecision" parameter equals “APPROVED”

Provide the "ReferenceNumber" response parameter for validation.
## Test 2: Tokenize a PAN using the Tokenize endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-2-tokenize-a-pan-using-the-tokenize-endpoint-within-the-network-token-api "Direct link to Test 2: Tokenize a PAN using the Tokenize endpoint within the Network Token API")
Using _only_ a PAN from the test data list, send a request to the [Tokenize](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7) endpoint and ensure the following conditions in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The "NetworkResponse.TokenizationDecision" parameter equals “APPROVED”

Provide the "ReferenceNumber" response parameter for validation.
## Test 3: Generate a payment bundle using the GetPaymentBundle endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-3-generate-a-payment-bundle-using-the-getpaymentbundle-endpoint-within-the-network-token-api "Direct link to Test 3: Generate a payment bundle using the GetPaymentBundle endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, generate a payment bundle by sending the appropriate request to the [GetPaymentBundle](https://documentation.ixopay.com/modules/docs/tokenex/get-payment-bundle) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Cryptogram generation is supported for Visa only. For Mastercard and Amex, request a token bundle (`bundleMetaData: Token`) instead of a cryptogram.
Provide the "ReferenceNumber" from the payment bundle response for validation.
## Test 4: Generate a payment bundle with device and billing data using the GetPaymentBundle endpoint within the Network Token API (Visa)[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-4-generate-a-payment-bundle-with-device-and-billing-data-using-the-getpaymentbundle-endpoint-within-the-network-token-api-visa "Direct link to Test 4: Generate a payment bundle with device and billing data using the GetPaymentBundle endpoint within the Network Token API \(Visa\)")
Using a Visa PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing Visa token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, generate a payment bundle by sending a request to the [GetPaymentBundle](https://documentation.ixopay.com/modules/docs/tokenex/get-payment-bundle) endpoint that includes the `billTo` fields and the `deviceInfo.id` and `deviceInfo.ipAddress` fields, and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The payment bundle contains an element of type "ECOM_CRYPTOGRAM"

The device and billing data fields support Visa's Digital Commerce Authentication Program (DCAP). They apply to Visa only and are not applicable to Mastercard or American Express.
Provide the "ReferenceNumber" from the payment bundle response for validation.
## Test 5: Get card metadata and assets using the GetCardMetadata endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-5-get-card-metadata-and-assets-using-the-getcardmetadata-endpoint-within-the-network-token-api "Direct link to Test 5: Get card metadata and assets using the GetCardMetadata endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, send a request to the [GetCardMetadata](https://documentation.ixopay.com/modules/docs/tokenex/get-card-metadata) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Using the Asset GUIDs from the GetCardMetadata response, send requests to the [GetAsset](https://documentation.ixopay.com/modules/docs/tokenex/get-asset) endpoint for each available asset and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the successful GetCardMetadata response and each reference number for the GetAsset responses for validation.
## Test 6: Retrieve the status of a token using the GetStatus endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-6-retrieve-the-status-of-a-token-using-the-getstatus-endpoint-within-the-network-token-api "Direct link to Test 6: Retrieve the status of a token using the GetStatus endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can use an existing token which is already provisioned for network tokenization.
Send a request to the [GetStatus](https://documentation.ixopay.com/modules/docs/tokenex/get-status) endpoint for the token and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The "tokenState" parameter is present

Provide the "ReferenceNumber" from the successful GetStatus response for validation.
## Test 7: Delete an active token using the LifecycleManagement endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-7-delete-an-active-token-using-the-lifecyclemanagement-endpoint-within-the-network-token-api "Direct link to Test 7: Delete an active token using the LifecycleManagement endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, delete the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the successful delete response for validation.
_Deletion is the only supported Lifecycle Management action._
## Test 8: Verify handling of a failed tokenization using the Tokenize endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-8-verify-handling-of-a-failed-tokenization-using-the-tokenize-endpoint-within-the-network-token-api "Direct link to Test 8: Verify handling of a failed tokenization using the Tokenize endpoint within the Network Token API")
Using a PAN from the _Unsuccessful network token provisioning_ table above, send a request to the [Tokenize](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7) endpoint and ensure the following conditions in the response:
  1. The "Success" parameter equals "false", or the "NetworkResponse.StatusCode" parameter is not “0000”
  2. The "NetworkResponse.TokenizationDecision" parameter is not “APPROVED”
  3. The response reflects the failure reason listed for that PAN in the table above

Repeat for each brand/failure-reason combination you need to verify in your integration's error handling. Provide the "ReferenceNumber" from each response for validation, along with the full request/response payload for each case.