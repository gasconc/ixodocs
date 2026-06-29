---
title: Batch Upload API — v1
summary: ' Batch Upload APIhttps://documentation.ixopay.com/api/batch-upload  Version
  1'
tags:
- http-upload-request-https-documentation-ixopay-com-api-batch-upload-legacy-http-upload-request-direct-link-http-upload-request
- endpoint-https-documentation-ixopay-com-api-batch-upload-legacy-endpoint-direct-link-endpoint
- payload-https-documentation-ixopay-com-api-batch-upload-legacy-payload-direct-link-payload
- replace-username-password-apikey-filename-callbackurl-corresponding-values
- debit-https-documentation-ixopay-com-api-batch-upload-legacy-debit-direct-link-debit
- preauthorize-https-documentation-ixopay-com-api-batch-upload-legacy-preauthorize-direct-link-preauthorize
- refund-https-documentation-ixopay-com-api-batch-upload-legacy-refund-direct-link-refund
- payout-https-documentation-ixopay-com-api-batch-upload-legacy-payout-direct-link-payout
- callback-notification-https-documentation-ixopay-com-api-batch-upload-legacy-callback-notification-direct-link-callback-notification
- result-file-includes-part-successful-transaction-successful-transaction-transaction-error-failed-transaction
source_url: https://documentation.ixopay.com/api/batch-upload/legacy-v1
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Batch Upload API](https://documentation.ixopay.com/api/batch-upload)
  * Version 1

# Batch Upload API — v1
Deprecation notice
The Batch Upload API v1 is deprecated, no longer supported, and will be decommissioned by end of 2026. After that date the endpoint will no longer be available.
To migrate, review the [Batch Upload API v2 documentation](https://documentation.ixopay.com/api/batch-upload) and update your integration to use the new endpoints under `/api/v3/batchUpload/v2/{apiKey}/batches`.
Using our batch-upload API, you may upload a file in csv format containing recurring transactions for processing.
As a result a csv file will be generated containing the transactions after they have been processed.
## HTTP Upload Request[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#http-upload-request "Direct link to HTTP Upload Request")
### Endpoint[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#endpoint "Direct link to Endpoint")
  * For production: `POST https://gateway.ixopay.com/api/v3/batchUpload/{apiKey}/uploadFile`
  * For sandbox: `POST https://sandbox.ixopay.com/api/v3/batchUpload/{apiKey}/uploadFile`

### Payload[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payload "Direct link to Payload")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `apiKey`  | required`string`  | API Key of the Connector  |  
| `batchFile`  | required`string`  | The data of your batch file. Maximum upload size: **8 MB**  |  
| `callbackUrl`  | optional`string?`  | The url the link to the resulting csv file will be sent to once the processing of all transactions in the given batch file is finished, for example: `https://api.example.org/callback`  |  
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```### Transaction batch file structure[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#transaction-batch-file-structure "Direct link to Transaction batch file structure")
The first line of the batch file needs to be the header line. This line has to contain all keys for following transactions.
The mandatory and possible keys for the transactions can be found in the [transaction types documentation](https://documentation.ixopay.com/api/batch-upload/legacy-v1#transaction-types).
Any objects (e.g. the Customer object as stated in the [transaction data documentation](https://documentation.ixopay.com/api/transaction/debit)) need to be given as flattened values.
#### Example for flattened objects[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#example-for-flattened-objects "Direct link to Example for flattened objects")
  * Flattened object:

  * JSON object
  * Flattened CSV
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```  * Flattened array of objects:
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```#### Example batch file with both debit and preauthorize transactions[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#example-batch-file-with-both-debit-and-preauthorize-transactions "Direct link to Example batch file with both debit and preauthorize transactions")
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```### Response examples[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#response-examples "Direct link to Response examples")
The file and the included keys in the first line of the file will be checked at the file upload. If no file is given, if a given key is not allowed or if one of the required keys is missing, an error will be returned.
The response will be in JSON-format and can include following fields.  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `batchId`  | optional`string?`  | The batch id identifying the uploaded file. With this id the status of the processing can be recalled, as can the resulting file once the processing is finished.  |  
| `error`  | optional`string?`  | The description of an error if the uploaded file was invalid.  |  
  * Success
  * Error
```

{  

  "batchId": "someBatchId123"  

}  

```One of the keys given in the first line of the csv file was not allowed or a required key was missing.
```

{  

  "error": "invalid keys line"  

}  

```## Transaction types[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#transaction-types "Direct link to Transaction types")
The following transaction types can be given with the csv file:
### Debit[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#debit "Direct link to Debit")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case 'debit'  |  
| `referenceUuid`  | required`string`  | The id of the initial transaction this one is referring to  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `amount`  | required`string`  | decimals separated by `.`, max. 3 decimals  |  
| `currency`  | required`string`  | 3 letter currency code  |  
| `additionalId1`  | optional`string?`  | any additional ID if required by adapter  |  
| `additionalId2`  | optional`string?`  | any additional ID if required by adapter  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `merchantMetaData`  | optional`string?`  | max. 255 characters  |  
| `callbackUrl`  | optional`string?`  | endpoint to receive status notifications  |  
| `transactionToken`  | optional`string?`  | token generated via payment.js  |  
| `description`  | optional`string?`  | max. 255 characters  |  
| `items`  | optional`object?`  | object containing [Items](https://documentation.ixopay.com/api/transaction/debit)  |  
| `withRegister`  | optional`boolean?`  | store customer's payment instrument for recurring transactions  |  
| `transactionIndicator`  | optional`string?`  | `RECURRING`  |  
| `customer`  | optional`object?`  | see [Customer](https://documentation.ixopay.com/api/transaction/debit)  |  
| ↳`customer`.`paymentData`  | optional`object?`  | one of [PaymentData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `schedule`  | optional`object?`  | see [Schedule](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customerProfileData`  | optional`object?`  | see [CustomerProfileData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `threeDSecureData`  | optional`object?`  | see [ThreeDSecureData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `language`  | optional`string?`  | 2 characters  |  
### Preauthorize[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#preauthorize "Direct link to Preauthorize")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case 'preauthorize'  |  
| `referenceUuid`  | required`string`  | The id of the initial transaction this one is referring to  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `amount`  | required`string`  | decimals separated by `.`, max. 3 decimals  |  
| `currency`  | required`string`  | 3 letter currency code  |  
| `additionalId1`  | optional`string?`  | any additional ID if required by adapter  |  
| `additionalId2`  | optional`string?`  | any additional ID if required by adapter  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `merchantMetaData`  | optional`string?`  | max. 255 characters  |  
| `callbackUrl`  | optional`string?`  | endpoint to receive status notifications  |  
| `transactionToken`  | optional`string?`  | token generated via payment.js  |  
| `description`  | optional`string?`  | max. 255 characters  |  
| `items`  | optional`object?`  | object containing [Items](https://documentation.ixopay.com/api/transaction/debit)  |  
| `withRegister`  | optional`boolean?`  | store customer's payment instrument for recurring transactions  |  
| `transactionIndicator`  | optional`string?`  | `RECURRING`  |  
| `customer`  | optional`object?`  | see [Customer](https://documentation.ixopay.com/api/transaction/debit)  |  
| ↳`customer`.`paymentData`  | optional`object?`  | one of [PaymentData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `schedule`  | optional`object?`  | see [Schedule](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customerProfileData`  | optional`object?`  | see [CustomerProfileData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `threeDSecureData`  | optional`object?`  | see [ThreeDSecureData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `language`  | optional`string?`  | 2 characters  |  
### Refund[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#refund "Direct link to Refund")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case 'refund'  |  
| `referenceUuid`  | required`string`  | The id of the initial transaction this one is referring to  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `amount`  | required`string`  | decimals separated by `.`, max. 3 decimals  |  
| `currency`  | required`string`  | 3 letter currency code  |  
| `additionalId1`  | optional`string?`  | any additional ID if required by adapter  |  
| `additionalId2`  | optional`string?`  | any additional ID if required by adapter  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `merchantMetaData`  | optional`string?`  | max. 255 characters  |  
| `callbackUrl`  | optional`string?`  | endpoint to receive status notifications  |  
| `transactionToken`  | optional`string?`  | token generated via payment.js  |  
| `description`  | optional`string?`  | max. 255 characters  |  
| `items`  | optional`object?`  | object containing [Items](https://documentation.ixopay.com/api/transaction/debit)  |  
### Payout[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payout "Direct link to Payout")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case 'payout'  |  
| `referenceUuid`  | required`string`  | The id of the initial transaction this one is referring to  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `amount`  | required`string`  | decimals separated by `.`, max. 3 decimals  |  
| `currency`  | required`string`  | 3 letter currency code  |  
| `transactionToken`  | required`string` _conditional_  | token generated via payment.js  |  
| `additionalId1`  | optional`string?`  | any additional ID if required by adapter  |  
| `additionalId2`  | optional`string?`  | any additional ID if required by adapter  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `merchantMetaData`  | optional`string?`  | max. 255 characters  |  
| `callbackUrl`  | optional`string?`  | endpoint to receive status notifications  |  
| `description`  | optional`string?`  | max. 255 characters  |  
| `items`  | optional`object?`  | object containing [Items](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customer`  | optional`object?`  | see [Customer](https://documentation.ixopay.com/api/transaction/debit)  |  
| ↳`customer`.`paymentData`  | optional`object?`  | one of [PaymentData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `language`  | optional`string?`  | 2 characters  |  
## Callback notification[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#callback-notification "Direct link to Callback notification")
If you provide a callback URL during your batch upload request, and all transactions within the uploaded file are processed successfully, a notification will be sent to that URL containing a link to the resulting CSV file. This file contains information about the processing status of each transaction.
  * **Format:** The file is in CSV format.
  * **Content:** It details the processing status of each transaction included in the original batch upload.
  * **File uniqueness:** There will be exactly one result file generated per batch upload request.
  * **Availability:** The result file will be available for download for at least 7 days. This applies to both the sandbox and production environment.
  * **File size:** The size of the result file depends on the number of transactions created from the uploaded batch file (more transactions lead to a larger file).

The notification to the url will contain the following field:  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `link`  | required`string`  | The downloadable URL for the result CSV file. (Available at least 7 days)  |  
Example notification
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```Hostname
The link field in the notification will point to the result file hosted on either `gateway.ixopay.com` (production environment) or `sandbox.ixopay.com` (sandbox environment), depending on the environment you used to upload the batch file.
Example result files
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```#### Possible values in the result file[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#possible-values-in-the-result-file "Direct link to Possible values in the result file")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `success`  | optional`boolean?`  | returns `true` or `false` depending on whether the request was successful  |  
| `transactionStatus`  | optional`string?`  | status of the transaction  |  
| `uuid`  | optional`string?`  | UUID of the transaction  |  
| `referenceUuid`  | optional`string?`  | UUID of the related transaction  |  
| `merchantTransactionId`  | optional`string?`  | your transaction ID  |  
| `purchaseId`  | optional`string?`  | purchase ID  |  
| `transactionType`  | optional`string?`  | transaction type  |  
| `paymentMethod`  | optional`string?`  | payment method  |  
| `amount`  | optional`string?`  | transaction amount  |  
| `currency`  | optional`string?`  | transaction currency  |  
| `schedules`  | optional`object?`  | an array containing attached schedules, see [ScheduleData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `errors`  | optional`object?`  | an array containing transaction errors, see [TransactionError](https://documentation.ixopay.com/api/transaction/debit)  |  
| `chargebackData`  | optional`object?`  | see [ChargebackData](https://documentation.ixopay.com/api/transaction/status-by-uuid)  |  
| `chargebackReversalData`  | optional`object?`  | see [ChargebackReversalData](https://documentation.ixopay.com/api/transaction/status-by-uuid)  |  
| `extraData`  | optional`object?`  |  optional`object?` containing `key-value` pairs ( optional`string?`-to- optional`string?`)  |  
| `merchantMetaData`  | optional`string?`  | merchant metadata  |  
| `returnData`  | optional`object?`  | one of [ReturnData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customer`  | optional`object?`  | see [Customer](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customerProfileData`  | optional`object?`  | see [CustomerProfileData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `errorMessage`  | optional`string?`  | description if request fails  |  
| `errorCode`  | optional`number?`  | error identifier  |  
## Batch information request[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#batch-information-request "Direct link to Batch information request")
### Endpoint[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#endpoint-1 "Direct link to Endpoint")
`GET https://gateway.ixopay.com/api/v3/batchUpload/{apiKey}/{batchId}/get`
### Payload[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payload-1 "Direct link to Payload")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `apiKey`  | required`string`  | API Key of the Connector  |  
| `batchId`  | required`string`  | The batchId returned by the /uploadFile request.  |  
| `getDocument`  | optional`string?`  | If this value is set to `true` and the processing is finished, the result document will be returned. Otherwise, a link to the result document is returned.  |  
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```### Response[​](https://documentation.ixopay.com/api/batch-upload/legacy-v1#response "Direct link to Response")
The response will be in JSON-format and may include following fields:  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `status`  | required`string`  | The status of the batch file if the parameter "getDocument" was set to "false" in the request. Can contain "initial", "processing" or "completed".  |  
| `link`  | optional`string?`  | The link to the result file if the parameter "getDocument" was set to "false" in the request.  |  
If the processing is already finished and "getDocument" was set to "true" in the request, the result document will be returned.
  * Initial
  * Processing
  * Completed
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```getDocument set to false
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```  * [HTTP Upload Request](https://documentation.ixopay.com/api/batch-upload/legacy-v1#http-upload-request)
    * [Endpoint](https://documentation.ixopay.com/api/batch-upload/legacy-v1#endpoint)
    * [Payload](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payload)
    * [Transaction batch file structure](https://documentation.ixopay.com/api/batch-upload/legacy-v1#transaction-batch-file-structure)
    * [Response examples](https://documentation.ixopay.com/api/batch-upload/legacy-v1#response-examples)
  * [Transaction types](https://documentation.ixopay.com/api/batch-upload/legacy-v1#transaction-types)
    * [Debit](https://documentation.ixopay.com/api/batch-upload/legacy-v1#debit)
    * [Preauthorize](https://documentation.ixopay.com/api/batch-upload/legacy-v1#preauthorize)
    * [Refund](https://documentation.ixopay.com/api/batch-upload/legacy-v1#refund)
    * [Payout](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payout)
  * [Callback notification](https://documentation.ixopay.com/api/batch-upload/legacy-v1#callback-notification)
  * [Batch information request](https://documentation.ixopay.com/api/batch-upload/legacy-v1#batch-information-request)
    * [Endpoint](https://documentation.ixopay.com/api/batch-upload/legacy-v1#endpoint-1)
    * [Payload](https://documentation.ixopay.com/api/batch-upload/legacy-v1#payload-1)
    * [Response](https://documentation.ixopay.com/api/batch-upload/legacy-v1#response)
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```
```

## Replace $USERNAME, $PASSWORD, $API_KEY, $FILENAME and $CALLBACK_URL with their corresponding values  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/uploadFile \  

  --request POST \  

  --header "Content-Type: application/json" \  

  --user '$USERNAME:$PASSWORD' \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL"  

```
```

"customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "firstName": "Alex",  

    "lastName": "Smith"  

}  

```
```

customer.identification,customer.firstName,customer.lastName  

"c001","Alex","Smith"  

```
```

"errors": [  

  {  

    "message": "Some error",  

    "code": "1234"  

  },  

  {  

    "message": "Another error",  

    "code": "5678"  

  }  

]  

```
```

errors.0.message,errors.0.code,errors.1.message,errors.1.code  

"Some error","1234","Another error","5678"  

```
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```
```

{  

  "batchId": "someBatchId123"  

}  

```
```

{  

  "error": "invalid keys line"  

}  

```
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-csv-file"  

}  

```
```

## This example result file includes part of a successful transaction, a successful transaction with a transaction error and a failed transaction.  

  

success,transactionStatus,uuid,merchantTransactionId,transactionType,customer.lastName,customer.company,returnData.creditcardData.type,returnData.creditcardData.cardHolder,errorMessage,errorCode,errors.0.message,errors.0.code  

true,"SUCCESS","abcd1234","2019-09-02-0001","debit","Smith","Alex's Artisan Goods","visa","Alex Smith","","","",""  

true,"ERROR","bcde4567","2019-09-02-0002","debit","","","","","","","Payment could not be processed.","1234"  

false,"","","","","","","","","Transaction not found","8001","",""  

```
```

## Replace $USER, $PASSWORD, $API_KEY, $BATCH_ID and $GET_DOCUMENT with their corresponding values!  

curl https://gateway.ixopay.com/api/v3/batchUpload/$API_KEY/$BATCH_ID/get?getDocument=$GET_DOCUMENT \  

  --request GET \  

  --header "Content-Type: application/json" \  

  --user "$USER:$PASSWORD"  

```
```

{  

  "status": "initial"  

}  

```
```

{  

  "status": "processing"  

}  

```
```

{  

  "status": "completed",  

  "link": "https://link-to-result-document"  

}  

```