---
title: Network Tokenization Test Cases
summary: ' Network tokenization  Network Tokenization Test Cases'
tags:
- test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api-direct-link-test-tokenize-pan-security-code-tokenize-endpoint-within-network-token-api
- test-tokenize-pan-tokenize-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-tokenize-pan-tokenize-endpoint-within-network-token-api-direct-link-test-tokenize-pan-tokenize-endpoint-within-network-token-api
- test-tokenize-pan-risk-data-tokenize-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-tokenize-pan-risk-data-tokenize-endpoint-within-network-token-api-direct-link-test-tokenize-pan-risk-data-tokenize-endpoint-within-network-token-api
- test-suspend-active-token-lifecyclemanagement-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-suspend-active-token-lifecyclemanagement-endpoint-within-network-token-api-direct-link-test-suspend-active-token-lifecyclemanagement-endpoint-within-network-token-api
- test-verify-suspended-state-token-getstatus-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-verify-suspended-state-token-getstatus-endpoint-within-network-token-api-direct-link-test-verify-suspended-state-token-getstatus-endpoint-within-network-token-api
- test-resume-suspended-token-lifecyclemanagement-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-resume-suspended-token-lifecyclemanagement-endpoint-within-network-token-api-direct-link-test-resume-suspended-token-lifecyclemanagement-endpoint-within-network-token-api
- test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api-direct-link-test-generate-payment-bundle-getpaymentbundle-endpoint-within-network-token-api
- test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api-direct-link-test-card-metadata-assets-getcardmetadata-endpoint-within-network-token-api
- test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-test-cases-test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api-direct-link-test-delete-active-token-lifecyclemanagement-endpoint-within-network-token-api
- api
source_url: https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases
portal: tokenex
updated: '2026-05-25'
related: []
---

* Network tokenization
  * Network Tokenization Test Cases

# Network Tokenization Test Cases
Once you have been provisioned for Network Tokenization in the TokenEx Test environment, the following test cases can be used to verify your implementation prior to being provisioned for Network Tokenization in the TokenEx Production environment.
TokenEx will provide you with a list of test card numbers and corresponding security codes via the Solutions Architect working with your Sales representative or Customer Success Manager. You may contact your Customer Success Manager or our sales team at sales@ixopay.com.
As you complete each of the following test cases, document the corresponding reference numbers in each API response as described below. Technical Support will use the reference numbers to verify the successful completion of each test case.
Important Test PAN Information
TokenEx test PANs can be leveraged to verify that the call to the card brands via our Network Token endpoints are successful. However, your Payment Services Provider (PSP) or Gateway may not accept the TokenEx test PAN in their environment. Please contact your PSP/Gateway to obtain a PAN for testing on their platform.
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
## Test 3: Tokenize a PAN with risk data using the Tokenize endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-3-tokenize-a-pan-with-risk-data-using-the-tokenize-endpoint-within-the-network-token-api "Direct link to Test 3: Tokenize a PAN with risk data using the Tokenize endpoint within the Network Token API")
Using a PAN from the test data list, send a request which includes risk data to the [Tokenize](https://documentation.ixopay.com/modules/docs/tokenex/tokenize-7) endpoint and ensure the following conditions in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The "NetworkResponse.TokenizationDecision" parameter equals “APPROVED”

Provide the "ReferenceNumber" response parameter for validation.
## Test 4: Suspend an active token using the LifecycleManagement endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-4-suspend-an-active-token-using-the-lifecyclemanagement-endpoint-within-the-network-token-api "Direct link to Test 4: Suspend an active token using the LifecycleManagement endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can use an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, suspend the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the successful suspension response for validation.
## Test 5: Verify the suspended state of a token using the GetStatus endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-5-verify-the-suspended-state-of-a-token-using-the-getstatus-endpoint-within-the-network-token-api "Direct link to Test 5: Verify the suspended state of a token using the GetStatus endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.
Using the token generated from the previous step, suspend the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the result was successful:  
**NOTE:** Alternatively, you can skip the previous steps by using an existing token which is already provisioned for network tokenization, and is in a “SUSPENDED” state.
Send a request to the [GetStatus](https://documentation.ixopay.com/modules/docs/tokenex/get-status) endpoint for the same token and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”
  4. The "tokenState" parameter equals "SUSPENDED"

Provide the "ReferenceNumber" from the successful GetStatus response for validation.
## Test 6: Resume a suspended token using the LifecycleManagement endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-6-resume-a-suspended-token-using-the-lifecyclemanagement-endpoint-within-the-network-token-api "Direct link to Test 6: Resume a suspended token using the LifecycleManagement endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.
Using the token generated from the previous step, suspend the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the result was successful:  
**NOTE:** Alternatively, you can skip the previous steps by using an existing token which is already provisioned for network tokenization, and is in a “SUSPENDED” state.
Using the suspended token, resume the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the successful resume response for validation.
## Test 7: Generate a payment bundle using the GetPaymentBundle endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-7-generate-a-payment-bundle-using-the-getpaymentbundle-endpoint-within-the-network-token-api "Direct link to Test 7: Generate a payment bundle using the GetPaymentBundle endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, generate a payment bundle by sending the appropriate request to the [GetPaymentBundle](https://documentation.ixopay.com/modules/docs/tokenex/get-payment-bundle) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the payment bundle response for validation.
## Test 8: Get card metadata and assets using the GetCardMetadata endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-8-get-card-metadata-and-assets-using-the-getcardmetadata-endpoint-within-the-network-token-api "Direct link to Test 8: Get card metadata and assets using the GetCardMetadata endpoint within the Network Token API")
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
## Test 9: Delete an active token using the LifecycleManagement endpoint within the Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases#test-9-delete-an-active-token-using-the-lifecyclemanagement-endpoint-within-the-network-token-api "Direct link to Test 9: Delete an active token using the LifecycleManagement endpoint within the Network Token API")
Using a PAN from the test data list, generate a network token and verify the tokenization was successful.  
**NOTE:** Alternatively, you can skip the previous step by using an existing token which is already provisioned for network tokenization, and is in an “ACTIVE” state.
Using the token generated from the previous step, delete the token by sending the appropriate request to the [LifecycleManagement](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) endpoint and verify the following conditions are met in the response:
  1. The "Success" parameter equals "true"
  2. The "NetworkResponse" JSON object is not null
  3. The "NetworkResponse.StatusCode" parameter equals “0000”

Provide the "ReferenceNumber" from the successful delete response for validation.