---
title: Error codes
summary: ' Error codes'
tags:
- structure-https-documentation-ixopay-com-docs-reference-appendix-error-codes-structure-direct-link-structure
- general-errors-validation-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-general-errors-validation-errors-direct-link-general-errors-validation-errors
- payment-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-payment-errors-direct-link-payment-errors
- network-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-network-errors-direct-link-network-errors
- post-processing-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-post-processing-errors-direct-link-post-processing-errors
- schedule-api-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-schedule-api-errors-direct-link-schedule-api-errors
- status-api-errors-https-documentation-ixopay-com-docs-reference-appendix-error-codes-status-api-errors-direct-link-status-api-errors
- api
- 3d-secure
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/appendix/error-codes
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Appendix](https://documentation.ixopay.com/docs/reference/appendix)
  * Error codes

# Error codes
In the world of payment processing, errors can occur during transactions. When a transaction fails, it's essential to understand the associated error code and message to troubleshoot and resolve the issue. The [IXOPAY platform](https://www.ixopay.com) provides comprehensive error code documentation to assist you in handling errors effectively. This article focuses on the IXOPAY platform's `errorCode` and `errorMessage`.
info
If the error is produced by any subsequent system (bank, PSP, PayPal, etc.), the error element will also contain the `adapterCode` and `adapterMessage`, reflecting directly the response of those systems.
## Structure[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#structure "Direct link to Structure")
The error codes in the IXOPAY platform documentation are organized into different groups, reflecting the phase in which an error occurred. These groups include:
  * General errors and validation errors
  * Payment errors
  * Network errors
  * Post-processing errors
  * Schedule API errors
  * Status API errors

By categorizing errors, you can quickly identify the nature of the issue and take appropriate action to resolve it.
note
While there can be thousands of different adapter error codes depending on the configured connectors, this documentation focuses on the consolidated error codes provided by IXOPAY platform. These consolidated error codes are typically the ones you'll want to consider for effective error handling.
Within each group, you will find detailed information about specific error codes, including their meanings, potential causes, and recommended actions.
Default message [⁮](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message "Default message")
Please note that the "Default message" column provides the standard error message associated with each error code. However, in some cases, the actual message returned in the API response may be expanded with additional information or entirely changed based on specific circumstances. For reliable error handling in your application, always depend on the error code rather than the error message.
## General errors and validation errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#general-errors-and-validation-errors "Direct link to General errors and validation errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 1000  | Request failed  | Some fundamental error in your request.  |  
| 1001  | Invalid response  | The upstream system responded with an unknown response.  |  
| 1002  | Invalid request data  | Request data are malformed or missing.  |  
| 1003  | Processing error  | Transaction could not be processed.  |  
| 1004  | Invalid signature  | The request signature you provided was wrong.  |  
| 1005  | Invalid request body  | The request body you provided was malformed or invalid.  |  
| 1006  | Logical error  | Preconditions failed, for example trying to capture on a failed authorize.  |  
| 1007  | Invalid configuration  | Something is wrong with your configuration, please contact your integration engineer.  |  
| 1008  | Unexpected system error  | Any unexpected system error.  |  
| 1009  | Too many requests  | Rate limit has been exceeded.  |  
| 1010  | System maintenance  | The system is currently undergoing scheduled maintenance. Please try again later.  |  
| 9999  | Unknown error  | We received an error which is not yet mapped to a better error code.  |  
## Payment errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#payment-errors "Direct link to Payment errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 2001  | Account closed externally  | The customer cancelled permission for his payment instrument externally.  |  
| 2002  | User cancelled  | Transaction was cancelled by customer.  |  
| 2003  | Transaction declined  | Transaction declined by upstream system/bank.  |  
| 2004  | Quota regulation  | Some limit reached.  |  
| 2005  | Transaction expired  | Customer took to long to submit his payment info.  |  
| 2006  | Insufficient funds  | Card limit reached.  |  
| 2007  | Incorrect payment info  |   |  
| 2008  | Invalid card  | Card is invalid.  |  
| 2009  | Expired card  |   |  
| 2010  | Fraudulent card  |   |  
| 2011  | Unsupported card  |   |  
| 2012  | Transaction cancelled  |   |  
| 2013  | Risk check block  | This error can occur due to a risk block triggered by either the Risk Engine or the upstream PSP.  |  
| 2014  | Pickup card  |   |  
| 2015  | Lost card  | Card is claimed as lost.  |  
| 2016  | Stolen card  |   |  
| 2017  | IBAN invalid  |   |  
| 2018  | BIC invalid  |   |  
| 2019  | Customer data invalid  |   |  
| 2020  | CVV required  |   |  
| 2021  | 3D-Secure Verification failed  |   |  
| 2022  | 3D-Secure Soft declined  |   |  
## Network errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#network-errors "Direct link to Network errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 3001  | Timeout  | A timeout occurred while calling an upstream service.  |  
| 3002  | Not Allowed  | Disallowed method called on upstream service.  |  
| 3003  | Temporary unavailable  | An upstream service is temporarily unavailable.  |  
| 3004  | Duplicate transaction ID  |   |  
| 3005  | Communication error  | Other upstream communication errors.  |  
## Post-processing errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#post-processing-errors "Direct link to Post-processing errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 4001  | Chargeback reverted  | Chargeback was reverted.  |  
| 4002  | Payment dispute  | A dispute was filed, see the upstream system (e.g. PayPal) for details.  |  
## Schedule API errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#schedule-api-errors "Direct link to Schedule API errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 7001  | schedule request is invalid  |   |  
| 7002  | schedule request failed  |   |  
| 7005  | scheduleAction is not valid  |   |  
| 7010  | registrationId is required  |   |  
| 7020  | registrationId is not valid  |   |  
| 7030  | reference transaction not a register  | The `registrationId`/`referenceUuid` must point to a register or a debit-with-register or a preauthorize-with-register.  |  
| 7035  | initial transaction is not a register  | The transaction for starting a schedule must be a register, a debit-with-register or a preauthorize-with-register.  |  
| 7036  | invalid initial period  | The period between the initial and second transaction must be greater than 24 hours.  |  
| 7037  | The referenced transaction is already de-registered and cannot be used for a schedule  | The `referenceUuid` must point to a register transaction that hasn't been de-registered.  |  
| 7040  | The scheduleId is not valid or does not match to the connector  |   |  
| 7050  | The startDateTime is invalid or older than 24 hours  |   |  
| 7060  | The continueDateTime is invalid or older than 24 hours  |   |  
| 7070  | The status of the schedule is not valid for the requested operation  |   |  
| 7080  | The schedule amount must be greater than 0  |   |  
| 7090  | The period length must be greater than 0 or smaller than 365  |   |  
## Status API errors[​](https://documentation.ixopay.com/docs/reference/appendix/error-codes#status-api-errors "Direct link to Status API errors")  
| Code  | Default message[1](https://documentation.ixopay.com/docs/reference/appendix/error-codes#default-message)  | Description  |  
| --- | --- | --- |  
| 8001  | Transaction not found  | No transaction was found for this specific connector determined by the apiKey.  |