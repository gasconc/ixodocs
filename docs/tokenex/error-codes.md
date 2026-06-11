---
title: Error Codes
summary: ' Error Codes'
tags:
- validation-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-validation-errors-direct-link-validation-errors
- data-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-data-errors-direct-link-data-errors
- parameter-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-parameter-errors-direct-link-parameter-errors
- service-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-service-errors-direct-link-service-errors
- encryption-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-encryption-errors-direct-link-encryption-errors
- miscellaneous-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-miscellaneous-errors-direct-link-miscellaneous-errors
- p2pe-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-p2pe-errors-direct-link-p2pe-errors
- unknown-errors-https-documentation-ixopay-com-modules-docs-tokenex-error-codes-unknown-errors-direct-link-unknown-errors
- api
- json
source_url: https://documentation.ixopay.com/modules/docs/tokenex/error-codes
portal: tokenex
updated: '2026-06-11'
related: []
---

* Appendix
  * Error Codes

# Error Codes
The collection of error codes below is shared between all TokenEx Platform v2 products (TGAPI, API, iFrame, Payment Services) although certain error codes may be product specific.
For the most up to date error codes that are shared across TokenEx v2 APIs, make a request to any of the below endpoints:
  * Request — Test
  * Request — Production US
  * Request — Production EU
  * Response
```

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

```## Access Error Codes[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#access-error-codes "Direct link to Access Error Codes")  
| Error Code  | Error Message  |  
| --- | --- |  
| 1000  | "TokenExID cannot be empty"  |  
| 1001  | "API Key cannot be empty"  |  
| 1002  | "Input data must only contain ASCII characters"  |  
| 1003  | "Authentication failed"  |  
| 1004  | "Authentication failed"  |  
| 1005  | "Access Denied: One or more properties could not be updated"  |  
| 1006  | "Authentication failed"  |  
| 1007  | "Authentication failed"  |  
| 1008  | "Authentication failed"  |  
| 1009  | "Authentication failed"  |  
| 1010  | "Authentication failed"  |  
| 1011  | "Authentication failed"  |  
## Validation Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#validation-errors "Direct link to Validation Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 2000  | "Null action passed to method"  |  
| 2001  | "missing 'credit_card' or 'check' hash value in transaction request"  |  
| 2002  | "Unable to retrieve token from transaction request"  |  
| 2003  | "You must pass a token to this method"  |  
| 2004  | "You must pass data to this method"  |  
| 2005  | "You must pass a TokenScheme to this method"  |  
| 2006  | "You must pass a SingleUseAuthCode to this method"  |  
| 2007  | "You must pass an EncryptedTrack to this method"  |  
| 2008  | "You must pass a KSN to this method"  |  
| 2009  | "Missing value in TransactionRequest"  |  
| 2010  | "Missing parameter passed to TokenizeFileFromSFTP"  |  
| 2011  | "Missing Serial Number"  |  
| 2012  | "CVV Value not present for supplied token."  |  
| 2013  | "Missing CC Track"  |  
| 2100  | "Input data not Luhn compatible"  |  
| 2101  | "Input data can only contain numeric values"  |  
| 2200  | "Length must be >= 4 for this Token Scheme"  |  
| 2201  | "Length must be >= 12 for this Token Scheme"  |  
| 2202  | "The max length for a token is 38"  |  
| 2203  | "Input data must be a valid credit card length"  |  
| 2204  | "The Length of the input data must be between 14-38"  |  
| 2205  | "The Length of the input data must be between 12-38"  |  
| 2206  | "The Length of the input data must be between 8-38"  |  
| 2207  | "The Length of the input data must be between 4-38"  |  
| 2208  | "Input data must be a valid SSN length"  |  
| 2209  | "Input data must be alpha-numeric"  |  
| 2210  | "The Length of the input data must be between 8-13"  |  
| 2211  | "The Length of the input data must be between 13-19"  |  
| 2212  | "The Length of the input data must be 16"  |  
| 2213  | "Input data must only contain ASCII characters"  |  
| 2214  | "The Length of the input data must be between 13-16"  |  
| 2215  | "The Length of the input data must be between 14-16"  |  
| 2216  | "The Length of the input data must be between 5-256"  |  
| 2217  | "The Length of the input data must be between 8-19"  |  
| 2218  | "The Length of the input data must be between 6-38"  |  
| 2300  | "Input data cannot be an empty string"  |  
| 2301  | "Input data must be Base 64 encoded"  |  
| 2302  | "You must provide a form of payment to perform and Authorize or Purchase"  |  
| 2400  | "Data did not match with Record Template"  |  
| 2401  | "Missing Record Template"  |  
| 2402  | "Missing Masking RuleSet"  |  
| 2403  | "Missing Schema"  |  
| 2404  | "Invalid TokenExId"  |  
| 2405  | "Missing Encryption Key"  |  
| 2406  | "Invalid Credit Card Data"  |  
| 2407  | "Invalid Token scheme"  |  
| 2408  | "Missing CreditCard or Check in Payment information"  |  
| 2409  | "Please provide CreditCard or Check in Payment information"  |  
| 2410  | "Please provide amount."  |  
| 2411  | "Please provide CurrencyCode or Numeric Code."  |  
| 2412  | "Too many fractional digits."  |  
| 2413  | "Please provide valid amount with one fractional part."  |  
| 2414  | "Credit card number is not recognized as known card brand."  |  
| 2415  | "You must pass CVV to this method"  |  
| 2416  | "Please provide valid CVV value."  |  
| 2417  | "Input data cannot be more than 4000 characters"  |  
| 2418  | "Input data is invalid for Token Scheme"  |  
| 2419  | "Token Scheme invalid for profile"  |  
| 2420  | "Invalid Encryption Profile"  |  
| 2421  | "Error occurred while generating Token"  |  
| 2422  | "Configuration mismatch"  |  
| 2423  | "Invalid Token"  |  
| 2424  | "Please contact support"  |  
| 2425  | "The length of the input data must be between 5-128"  |  
| 2426  | "The length of the token must be between 10-256"  |  
| 2427  | "Multiple Tokens provided for single Cvv function"  |  
| 2428  | "The length of the input data must be between 9-512"  |  
| 2429  | "The length of the token must be between 9-512"  |  
| 2430  | "Invalid Encryption Type"  |  
| 2431  | "Invalid Encoding Type"  |  
| 2432  | "Invalid Key"  |  
| 2433  | "Host not allowed"  |  
| 2434  | "Missing Header: tx-token-scheme"  |  
| 2435  | "Missing Header: tx-apikey"  |  
| 2436  | "Missing Header: tx-response-regex"  |  
| 2437  | "Missing Header: tx-tokenex-id"  |  
| 2438  | "Missing Header: tx-url"  |  
| 2439  | "Cannot hash empty body"  |  
| 2440  | "Hash type is required"  |  
| 2441  | "HMAC Key in not valid base64"  |  
| 2442  | "Key required for HMAC"  |  
| 2443  | "Invalid Function Type"  |  
| 2444  | "The length of the input data must be between 5-512"  |  
| 2445  | "The length of the token must be between 5-512"  |  
| 2446  | "Error occurred while generating Token"  |  
| 2447  | "The length of the input data must be between 14-512"  |  
| 2448  | "Input data must be Base 64 or Hex encoded"  |  
| 2449  | "Decrypt function requires DATA argument to be present"  |  
| 2450  | "Please provide valid client certificate."  |  
| 2451  | "Please provide valid client private Key."  |  
| 2452  | "Encryption profile does not exist"  |  
| 2453  | "You must pass a regex to find KSN and Track Data to this method"  |  
| 2454  | "KSN regex matching multiple matches. Please provide a regex to find single KSN value."  |  
| 2455  | "Track Data regex matching multiple matches. Please provide a regex to find single Track Data value."  |  
| 2998  | "Encountered model binding errors"  |  
| 2999  | "Request is malformed"  |  
## Data Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#data-errors "Direct link to Data Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 3000  | "Token does not exist"  |  
| 3001  | "Update Failed"  |  
| 3002  | "Delete Failed"  |  
| 3003  | "Data Not Found"  |  
| 3004  | "Payload should be maximum of 500 characters."  |  
| 3005  | "Error while generating token data."  |  
| 3006  | "No currency could be found."  |  
| 3007  | "Invalid routing number."  |  
| 3008  | "Account type must be checking or savings."  |  
| 3009  | "Account holder type must be personal or business."  |  
| 3010  | "The currency code is not formatted correctly."  |  
| 3011  | "The country code is not formatted correctly."  |  
| 3012  | "No country could be found."  |  
| 3013  | "Invalid AVS result code"  |  
| 3014  | "Invalid CVV result code"  |  
| 3015  | "Token already exists."  |  
| 3016  | "No matches found in the data provided."  |  
| 3017  | "The number of matches found exceeds the number allowed."  |  
| 3018  | "Push Profile ID must be numeric"  |  
| 3019  | "Invalid regex"  |  
| 3020  | "CVV not matched to PAN"  |  
| 3021  | "Encryption settings ID must be numeric"  |  
| 3022  | "Function never closed"  |  
| 3023  | "Max parse depth reached"  |  
| 3024  | "No TokenReferenceId associated with token"  |  
## Parameter Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#parameter-errors "Direct link to Parameter Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 4000  | "Missing Check Number"  |  
| 4001  | "Missing Credit Card Number"  |  
| 4002  | "Invalid XML formatted data in TransactionRequest"  |  
| 4003  | "Invalid JSON formatted data in TransactionRequest"  |  
| 4004  | "Transaction Object is required"  |  
| 4005  | "Invalid Amount field in data"  |  
| 4006  | "Request Format is invalid"  |  
| 4007  | "EncryptedTrack is not a valid Base64 String"  |  
| 4008  | "KSN is not a valid Base64 String"  |  
| 4009  | "EncryptedTrack is not a valid HEX String"  |  
| 4010  | "KSN is not a valid HEX String"  |  
| 4011  | "TransactionType is invalid"  |  
| 4012  | "TransactionRequest cannot be null"  |  
| 4013  | "TransactionRequestFormat is invalid"  |  
| 4014  | "Missing Account Number"  |  
| 4015  | "TokenScheme is invalid"  |  
| 4016  | "This method only supports Authorize and Purchase"  |  
| 4017  | "Input data cannot be more than 1000 characters"  |  
| 4018  | "Null parameter pass to method"  |  
| 4019  | "The parameter passed is not supported by this validation"  |  
| 4020  | "Unable to perform Delete operations for vaultless tokens"  |  
| 4021  | "Unable to perform Validate operations for vaultless tokens"  |  
| 4022  | "Unable to parse IP address"  |  
| 4023  | "Duplicate Arguments are not supported"  |  
|   |   |  
## Service Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#service-errors "Direct link to Service Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 5000  | "Please contact TokenEx Support"  |  
| 5001  | "Unable to perform this operation on vaultless tokens"  |  
| 5002  | "Outbound request to {ThirdPartyURL} has timed out after XX seconds"  |  
| 5003  | "The underlying connection was closed"  |  
| 5004  | "No connection could be made because the third party target machine actively refused it."  |  
## Encryption Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#encryption-errors "Direct link to Encryption Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 6000  | "Error Decrypting value. Please verify you are using the correct public key"  |  
| 6002  | "Missing group key"  |  
| 6003  | "Missing encryption key"  |  
| 6004  | "Missing encryption IV"  |  
| 6005  | "Invalid Cipher Mode"  |  
| 6006  | "Invalid Padding Mode"  |  
| 6007  | "Invalid Encryption Type"  |  
## Miscellaneous Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#miscellaneous-errors "Direct link to Miscellaneous Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 7000  | "Error creating Kount Hash"  |  
| 7001  | "Unknown error occurred while tokenizing"  |  
| 7002  | "{GATEWAY_NAME} does not support check processing methods"  |  
| 7003  | "Unable to retrieve profile"  |  
| 7004  | "Unable read card track data"  |  
## P2PE Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#p2pe-errors "Direct link to P2PE Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 8520  | Could not find any functions with decryptable parameters.  |  
| 8525  | Field name is not a valid ISO 7813 Track field.  |  
| 8527  | Desired expiration format is invalid.  |  
| 8534  | Field was not present in track data.  |  
| 8540  | KSN length must be exactly 24 alphanumeric characters or 96 bits.  |  
| 8599  | Decryption could not be completed.  |  
## Unknown Errors[​](https://documentation.ixopay.com/modules/docs/tokenex/error-codes#unknown-errors "Direct link to Unknown Errors")  
| Error Code  | Error Message  |  
| --- | --- |  
| 9998  | "Internal error, please contact support via the client portal"  |  
| 9999  | "Internal error, please contact support via the client portal"  |  
```

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

```
```

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

``````

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

``````

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

```
```

GET https://test-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

GET https://eu1-api.tokenex.com/v2/home/errorcodes HTTP/1.1  

  

tx-tokenex-id: YourTokenExID  

tx-apikey: YourAPIKey  

```
```

[  

  {  

    "code": 1000,  

    "message": "TokenExID cannot be empty"  

  },  

  {  

    "code": 1001,  

    "message": "API Key cannot be empty"  

  },  

  ...  

]  

```