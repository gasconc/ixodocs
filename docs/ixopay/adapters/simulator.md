---
title: Simulator (Testing connector)
summary: ' Simulator Testing connector'
tags:
- test-data-https-documentation-ixopay-com-adapters-simulator-test-data-direct-link-test-data
- credit-cards-https-documentation-ixopay-com-adapters-simulator-credit-cards-direct-link-credit-cards
- extended-secure-testing-https-documentation-ixopay-com-adapters-simulator-extended-secure-testing-direct-link-extended-secure-testing
- direct-debit-ibans-https-documentation-ixopay-com-adapters-simulator-direct-debit-ibans-direct-link-direct-debit-ibans
- simulate-pending-status-change-https-documentation-ixopay-com-adapters-simulator-simulate-pending-status-change-direct-link-simulate-pending-status-change
- api
- 3ds
- 3d-secure
- ixopay
- direct-debit
source_url: https://documentation.ixopay.com/adapters/simulator
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* Simulator (Testing connector)

# Simulator (Testing connector)
This page provides an overview of the payments methods provided by the Simulator (Testing connector) adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Simulator (Testing connector) within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
The Simulator is an adapter for integration & testing purposes only. No real transaction will be performed at any payment provider.
## Test data[​](https://documentation.ixopay.com/adapters/simulator#test-data "Direct link to Test data")
### Credit cards[​](https://documentation.ixopay.com/adapters/simulator#credit-cards "Direct link to Credit cards")  
| Brand  | Number  | Result  |  
| --- | --- | --- |  
| Visa  | `4111 1111 1111 1111`  | Success  |  
| Visa  | `4242 4242 4242 4242`  | Failure  |  
| Mastercard  | `5555 5555 5555 4444`  | Success  |  
| Mastercard  | `5105 1051 0510 5100`  | Failure  |  
| Diners  | `3800 000000 0006`  | Success  |  
| Amex  | `3782 8224631 0005`  | Success  |  
| Discover  | `6011 1111 1111 1117`  | Success  |  
Additionally, you can simulate an SCA Soft-Decline error code by sending amount `65.00` (any currency).
### Extended 3D-Secure Testing[​](https://documentation.ixopay.com/adapters/simulator#extended-3d-secure-testing "Direct link to Extended 3D-Secure Testing")
If extended 3D-Secure Testing is enabled on the Simulator, you can use the following card numbers (resp. cardholder names for 3DS version 1) to simulate the given results:
**3DS 2.x Simulation**  
| Number  | Method Fingerprinting  | ARes Result  |  
| --- | --- | --- |  
| `4000 0010 0000 0000`  | **true**  | Frictionless - Fully Authenticated  |  
| `4111 1111 1111 1111`  | **true**  | Frictionless - Fully Authenticated  |  
| `5555 5555 5555 4444`  | **true**  | Frictionless - Fully Authenticated  |  
| `4000 0020 0000 0008`  | false  | Frictionless - Fully Authenticated  |  
| `4000 0010 0000 0216`  | **true**  | Frictionless - Attempted  |  
| `4000 0020 0000 0016`  | false  | Frictionless - Attempted  |  
| `4000 0010 0000 0109`  | **true**  | Challenge  |  
| `5000 0010 0000 0007`  | **true**  | Challenge  |  
| `4000 0020 0000 0024`  | false  | Challenge  |  
| `4000 0010 0000 0307`  | **true**  | Not Authenticated  |  
| `4000 0020 0000 0032`  | false  | Not Authenticated  |  
| `4000 0010 0000 0208`  | **true**  | Rejected  |  
| `4000 0020 0000 0040`  | false  | Rejected  |  
| `4000 0030 0000 0006`  | Error: Not Enrolled  |   |  
| `4000 0030 0000 0014`  | Error: Network Timeout  |   |  
| `4000 0030 0000 0022`  | Error: Network Error  |   |  
| `4000 0030 0000 0030`  | Error: Invalid card  |   |  
| `4000 0040 0000 0004`  | false  | Error: Access Denied  |  
| `4000 0040 0000 0012`  | false  | Error: Transient System Error  |  
| `4000 0040 0000 0020`  | false  | Error: Invalid Format  |  
| `4000 0040 0000 0038`  | false  | Error: Network Timeout  |  
| `4000 0040 0000 0046`  | false  | Error: Network Error  |  
| `4000 0040 0000 0053`  | false  | Error: Configuration missing  |  
| `4000 0040 0000 0061`  | false  | Error: Configuration incomplete  |  
**3DS 1.x Simulation**  
| Cardholder Name  | Result  |  
| --- | --- |  
| 3DS1_CONFIG_ERROR  | Error: Invalid Configuration  |  
| 3DS1_NETWORK_TIMEOUT  | Error: Network Timeout  |  
| 3DS1_NETWORK_ERROR  | Error: Network Error  |  
| 3DS1_DS_TIMEOUT  | Error: Directory Server Timeout  |  
| 3DS1_UNAUTHENTICATED  | Not authenticated  |  
| 3DS1_NOT_ENROLLED  | Not enrolled  |  
| 3DS1_ENROLLED  | Enrolled, PaReq Redirect  |  
### Direct Debit IBANs[​](https://documentation.ixopay.com/adapters/simulator#direct-debit-ibans "Direct link to Direct Debit IBANs")
You can use any IBAN you like.
The last four digits will control the result:  
| Last 4 digits  | Result  |  
| --- | --- |  
| 1111  | Success  |  
| 2222  | Pending  |  
| 2003  | Transaction Declined  |  
| 2006  | Insufficient funds  |  
_**Example:**_ `AT00 0000 0000 0000 1111` => Successful transaction
Alternatively you may override the outcome via extra data `extraData.outcome`  
|  `outcome` value  | Result  |  
| --- | --- |  
| 1111  | Success  |  
| 2222  | Pending  |  
| success  | Success  |  
Defining `outcome` will overrule the behaviour based on the last 4 digits of the given IBAN.
_**Example:**_ `AT00 0000 0000 0000 2222` + `outcome = success` => Successful transaction
## Simulate pending status change[​](https://documentation.ixopay.com/adapters/simulator#simulate-pending-status-change "Direct link to Simulate pending status change")
You may simulate a transaction status change by adding the extraData `pendingOutcome`. Do note that this simulation may only be evoked by submitting an IBAN with outcome `pending` (ending with 2222) via the simulator payment page.
The status will change in approx. 5 minutes after submission.  
| Extra Data  | Value  | Result  |  
| --- | --- | --- |  
| pendingOutcome  | success  | Status will change from `pending` to `success`  |  
| pendingOutcome  | anyOtherString  | Status will change from `pending` to `error`  |