---
title: Common Network Tokenization Errors
summary: ' Network tokenization  Common Network Tokenization Errors'
tags:
- visa-cards-https-documentation-ixopay-com-modules-docs-tokenex-common-network-tokenization-errors-visa-cards-direct-link-visa-cards
- mastercard-american-express-cards-https-documentation-ixopay-com-modules-docs-tokenex-common-network-tokenization-errors-mastercard-american-express-cards-direct-link-mastercard-american-express-cards
- tokenization
- tokenex
- ixopay
- transaction
source_url: https://documentation.ixopay.com/modules/docs/tokenex/common-network-tokenization-errors
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Network tokenization
  * Common Network Tokenization Errors

# Common Network Tokenization Errors
Unfortunately, not all cards are eligible to receive a Network Token. Decline reasons can span from insufficient funds, incorrect metadata, the card may not be eligible to receive a Network Token, or the issuer may deem the request high risk. However, part of the value of using a tokenization provider like TokenEx, is that we can enable our you to continue a payment transaction with the PAN in the event a network token is unavailable for a given card.
Network Tokenization errors are broken down based on the card brand. Below you will find mappings for error codes related to Network Tokenization.
Please note: This list is compiled based on both vendor recommendations and internal testing. This error code list is not exhaustive. If you encounter an error that is not listed, please contact TokenEx Support via support ticket.
##  **Visa Cards**[​](https://documentation.ixopay.com/modules/docs/tokenex/common-network-tokenization-errors#visa-cards "Direct link to visa-cards")  
| statusCode  | statusMessage  | Common Causes  |  
| --- | --- | --- |  
| 9002  | The PAN format is not valid, or other data associated with the PAN was incorrect or entered incorrectly or not present or it is blocked by TSP/issuer as too many requests have been sent with the incorrect PAN and the associated data. The request may be retried with the correct data. If the request is rejected few times, maybe contact the bank to resolve the issue.  | Data associated with PAN is incorrect, Issuer decline  |  
| 9005  | An unknown error has occurred  | The value provided for one of the requested parameters is considered invalid, your request does not have minimum set of parameters required to process the business function  |  
| 9006  | The provided token cannot be found  |   |  
| 9100  | The provided PAN is deemed to be ineligible for tokenization  | Card not eligible, Underlying BIN does not qualify for Network Tokenization, the maximum number of tokens has been exceeded for the given PAN.  |  
| 9131  | The external server has an internal server error  | Connection error within the chain of communication required to obtain network token. Please retry request.  |  
##  **MasterCard / American Express Cards**[​](https://documentation.ixopay.com/modules/docs/tokenex/common-network-tokenization-errors#mastercard--american-express-cards "Direct link to mastercard--american-express-cards")  
| statusCode  | statusMessage  | Common Causes  |  
| --- | --- | --- |  
| 9002  | The PAN format is not valid, or other data associated with the PAN was incorrect or entered incorrectly or not present or it is blocked by TSP/issuer as too many requests have been sent with the incorrect PAN and the associated data. The request may be retried with the correct data. If the request is rejected few times, maybe contact the bank to resolve the issue.  | Data associated with PAN is incorrect, Issuer decline  |  
| 9004  | The server failed to produce a response within the allowed time  | Connection error within the chain of communication required to obtain network token. Please retry request.  |  
| 9006  | The provided token cannot be found  | Invalid token/PAN  |  
| 9100  | The provided PAN is deemed to be ineligible for tokenization  | Card not eligible, Underlying BIN does not qualify for Network Tokenization, the maximum number of tokens has been exceeded for the given PAN.  |  
| 9104  | The token is not currently in a valid state for this request  |   |  
| 9130 / 9131  | The external server did not receive a timely response from another server further upstream  | Connection error within the chain of communication required to obtain network token. Please retry request.  |