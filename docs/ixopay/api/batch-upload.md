---
title: Batch Upload API — v2
summary: ' Batch Upload API'
tags:
- endpoints-https-documentation-ixopay-com-api-batch-upload-endpoints-direct-link-endpoints
- upload-batch-file-https-documentation-ixopay-com-api-batch-upload-upload-batch-file-direct-link-upload-batch-file
- batch-status-https-documentation-ixopay-com-api-batch-upload-batch-status-direct-link-batch-status
- list-batches-https-documentation-ixopay-com-api-batch-upload-list-batches-direct-link-list-batches
- strict-default-https-documentation-ixopay-com-api-batch-upload-strict-default-direct-link-strict-default
- lenient-https-documentation-ixopay-com-api-batch-upload-lenient-direct-link-lenient
- batch-statuses-https-documentation-ixopay-com-api-batch-upload-batch-statuses-direct-link-batch-statuses
- transaction-batch-file-structure-https-documentation-ixopay-com-api-batch-upload-transaction-batch-file-structure-direct-link-transaction-batch-file-structure
- flattened-objects-https-documentation-ixopay-com-api-batch-upload-flattened-objects-direct-link-flattened-objects
- debit-https-documentation-ixopay-com-api-batch-upload-debit-direct-link-debit
source_url: https://documentation.ixopay.com/api/batch-upload
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* Batch Upload API

# Batch Upload API — v2
Beta
This API is currently in BETA and is provided on an "as is" and "as available" basis. During this phase, functionality may change without prior notice, and users may encounter bugs, errors, or incomplete features. We appreciate your feedback and understanding as we continue to improve the API.
Upgrade notice
This documentation is for the newly released Batch Upload API v2. Batch Upload API v2 introduces structured JSON result files, processing modes, and improved status responses.
If you're currently using the legacy Batch Upload API v1 endpoint please review the [Deprecation Notice](https://documentation.ixopay.com/api/batch-upload/legacy-v1)!
Using our batch-upload v2 API, you may upload a file in CSV format containing recurring transactions for processing.
As a result a JSON file will be generated containing the transactions after they have been processed.
## Endpoints[​](https://documentation.ixopay.com/api/batch-upload#endpoints "Direct link to Endpoints")
  * For production: `POST https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches`
  * For sandbox: `POST https://sandbox.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches`

### 1. Upload a batch file[​](https://documentation.ixopay.com/api/batch-upload#1-upload-a-batch-file "Direct link to 1. Upload a batch file")
`POST /api/v3/batchUpload/v2/{apiKey}/batches`
#### Request fields[​](https://documentation.ixopay.com/api/batch-upload#request-fields "Direct link to Request fields")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `apiKey`  | required`string`  | API Key of the Connector  |  
| `batchFile`  | required`string`  | The data of your batch file. Maximum upload size: **1 MB**  |  
| `callbackUrl`  | optional`string?`  | The url the link to the resulting JSON file will be sent to once the processing of all transactions in the given batch file is finished, for example: `https://api.example.org/callback`  |  
| `processingMode`  | optional`string?`  |  `strict` (default) or `lenient` — see [Processing Modes](https://documentation.ixopay.com/api/batch-upload#processing-modes)  |  
  * curl
  * Python
  * PHP
  * Java
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```#### Response — HTTP 201[​](https://documentation.ixopay.com/api/batch-upload#response--http-201 "Direct link to Response — HTTP 201")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `batchId`  | required`string`  | ID for tracking this batch. Use it in all subsequent requests.  |  
| `status`  | required`string`  | Initial status, always `pending`  |  
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```#### Error responses[​](https://documentation.ixopay.com/api/batch-upload#error-responses "Direct link to Error responses")  
| HTTP  | Body  | Reason  |  
| --- | --- | --- |  
| 400  | `{"error": "Batch file is missing"}`  | No file attached  |  
| 422  | `{"error": "File is not a valid CSV format"}`  | File could not be parsed as CSV  |  
| 422  | `{"error": "Invalid callback URL"}`  |  `callbackUrl` is not a valid, publicly reachable URL  |  
| 422  | `{"error": "Invalid processing mode"}`  |  `processingMode` value is not `strict` or `lenient`  |  
| 422  | Validation error  | File exceeds 1 MB or has wrong MIME type  |  
### 2. Get batch status[​](https://documentation.ixopay.com/api/batch-upload#2-get-batch-status "Direct link to 2. Get batch status")
`GET /api/v3/batchUpload/v2/{apiKey}/batches/{batchId}`
#### Path parameters[​](https://documentation.ixopay.com/api/batch-upload#path-parameters "Direct link to Path parameters")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `apiKey`  | required`string`  | API Key of the Connector  |  
| `batchId`  | required`string`  | The `batchId` returned by the upload request  |  
  * curl
  * Python
  * PHP
  * Java
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```#### Response[​](https://documentation.ixopay.com/api/batch-upload#response "Direct link to Response")
The shape of the response varies depending on the current `status`.
  * Pending
  * Processing / Completed / Failed

  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `batchId`  | required`string`  | The batch identifier  |  
| `status`  | required`string`  | Always `pending`  |  
| `processingMode`  | required`string`  | The mode used for this batch: `strict` or `lenient`  |  
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `batchId`  | required`string`  | The batch identifier  |  
| `status`  | required`string`  | Current status — see [Batch statuses](https://documentation.ixopay.com/api/batch-upload#batch-statuses)  |  
| `processingMode`  | required`string`  | The mode used for this batch: `strict` or `lenient`  |  
| `summary`  | required`object`  | Row counts: `totalRows`, `successfulRows`, `failedRows`  |  
| `resultDocument`  | optional`string?`  | Download URL for the result file, or `null` if not yet available  |  
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```### 3. Download the result file[​](https://documentation.ixopay.com/api/batch-upload#3-download-the-result-file "Direct link to 3. Download the result file")
`GET /api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file`
Returns the result JSON file as a streamed download. The file is only available once the batch has a status of `completed` or `processed_with_errors`.
  * curl
  * Python
  * PHP
  * Java
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```#### Error responses[​](https://documentation.ixopay.com/api/batch-upload#error-responses-1 "Direct link to Error responses")  
| HTTP  | Body  | Reason  |  
| --- | --- | --- |  
| 202  | `{"error": "Batch is not completed yet"}`  | Processing has not finished  |  
| 404  | `{"error": "Document not found"}`  |  `batchId` does not exist  |  
### 4. List batches[​](https://documentation.ixopay.com/api/batch-upload#4-list-batches "Direct link to 4. List batches")
`GET /api/v3/batchUpload/v2/{apiKey}/batches`
Returns a paginated list of all batches submitted for the given connector.
#### Query parameters[​](https://documentation.ixopay.com/api/batch-upload#query-parameters "Direct link to Query parameters")  
| Field  | Type  | Default  | Description  |  
| --- | --- | --- | --- |  
| `page`  | optional`integer?`  | `1`  | Page number (minimum: `1`)  |  
| `perPage`  | optional`integer?`  | `25`  | Results per page (min: `1`, max: `100`)  |  
  * curl
  * Python
  * PHP
  * Java
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```#### Response[​](https://documentation.ixopay.com/api/batch-upload#response-1 "Direct link to Response")
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

```## Processing modes[​](https://documentation.ixopay.com/api/batch-upload#processing-modes "Direct link to Processing modes")
The `processingMode` parameter controls what happens when a row in the batch file fails validation or cannot be processed.
###  `strict` (default)[​](https://documentation.ixopay.com/api/batch-upload#strict-default "Direct link to strict-default")
The first row that fails validation at parse time causes the entire batch to be marked as `failed`. No transactions are executed.
Use strict mode when partial execution is not acceptable — for any workflow where you need a guarantee that either all rows are executed or none are.
###  `lenient`[​](https://documentation.ixopay.com/api/batch-upload#lenient "Direct link to lenient")
Rows that fail validation are skipped and recorded in `failedRows` of the result file. Valid rows continue to be processed. The final batch status will be `processed_with_errors` if any rows failed, or `completed` if all rows succeeded.
Use lenient mode for bulk imports where processing as many valid rows as possible is preferable to an all-or-nothing outcome.
## Batch statuses[​](https://documentation.ixopay.com/api/batch-upload#batch-statuses "Direct link to Batch statuses")  
| Status  | Description  |  
| --- | --- |  
| `pending`  | The batch has been queued and processing has not started yet  |  
| `processing`  | The batch is currently being parsed or transactions are being executed  |  
| `completed`  | All rows were processed successfully  |  
| `failed`  | The batch failed — only possible in `strict` mode. Triggered by either a validation error at parse time or a transaction execution error during processing.  |  
| `processed_with_errors`  | Some rows failed — only possible in `lenient` mode  |  
## Transaction batch file structure[​](https://documentation.ixopay.com/api/batch-upload#transaction-batch-file-structure "Direct link to Transaction batch file structure")
File size limit
The maximum upload size per request is **1 MB**. If your batch exceeds this limit, you must split it into multiple CSV files and submit each one as a separate upload request. Each upload will receive its own `batchId` and can be tracked and downloaded independently.
The first line of the batch file needs to be the header line. This line has to contain all keys for following transactions.
The mandatory and possible keys for the transactions can be found in the [transaction types documentation](https://documentation.ixopay.com/api/batch-upload#transaction-types).
Any objects (e.g. the Customer object as stated in the [transaction data documentation](https://documentation.ixopay.com/api/transaction/debit)) need to be given as flattened values.
### Example for flattened objects[​](https://documentation.ixopay.com/api/batch-upload#example-for-flattened-objects "Direct link to Example for flattened objects")
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

```### Example batch file[​](https://documentation.ixopay.com/api/batch-upload#example-batch-file "Direct link to Example batch file")
```

transactionMethod,referenceUuid,merchantTransactionId,extraData.someKey,extraData.otherKey,amount,currency,customer.identification,customer.lastName,threeDSecureData.3dsecure  

"debit","4d40738b1194869734f7","your-unique-identifier","someValue","otherValue","9.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith",""  

"debit","1ed442bdf4f9eb855b1f","your-unique-identifier-2","alsoSomeValue","","4.99","USD","4a6f7264-616e-2e4a-6f6e-657340657861","",""  

"preauthorize","44118273d04397020bb5","your-unique-identifier-3","","","99.99","EUR","616c6578-2e73-6d69-7468-406578616d70","Smith","MANDATORY"  

```## Transaction types[​](https://documentation.ixopay.com/api/batch-upload#transaction-types "Direct link to Transaction types")
The following transaction types can be given with the csv file:
### Debit[​](https://documentation.ixopay.com/api/batch-upload#debit "Direct link to Debit")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case `debit`  |  
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
### Preauthorize[​](https://documentation.ixopay.com/api/batch-upload#preauthorize "Direct link to Preauthorize")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case `preauthorize`  |  
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
### Refund[​](https://documentation.ixopay.com/api/batch-upload#refund "Direct link to Refund")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case `refund`  |  
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
### Payout[​](https://documentation.ixopay.com/api/batch-upload#payout "Direct link to Payout")
Either `referenceUuid` or `transactionToken` must be provided.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case `payout`  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `amount`  | required`string`  | decimals separated by `.`, max. 3 decimals  |  
| `currency`  | required`string`  | 3 letter currency code  |  
| `referenceUuid`  | required`string` _conditional_  | The id of the initial transaction. Required if `transactionToken` is not provided.  |  
| `transactionToken`  | required`string` _conditional_  | token generated via payment.js. Required if `referenceUuid` is not provided.  |  
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
### Deregister[​](https://documentation.ixopay.com/api/batch-upload#deregister "Direct link to Deregister")
Either `referenceUuid` or `transactionToken` must be provided.
  * To deregister a transaction, provide its `referenceUuid`.

  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `transactionMethod`  | required`string`  | The method of the transaction, in this case `deregister`  |  
| `merchantTransactionId`  | required`string`  | your unique transaction ID  |  
| `referenceUuid`  | required`string` _conditional_  | UUID of the register transaction to deregister. Required if `transactionToken` is not provided.  |  
| `transactionToken`  | required`string` _conditional_  | Payment token to deregister from a customer profile. Required if `referenceUuid` is not provided.  |  
| `tokenType`  | optional`string?`  | Which token type to deregister. One of `ALL`, `PAN`, `NT`. Defaults to `ALL`.  |  
| `additionalId1`  | optional`string?`  | any additional ID if required by adapter  |  
| `additionalId2`  | optional`string?`  | any additional ID if required by adapter  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `pspPassthroughData`  | optional`object?`  | Data passed through directly to the PSP  |  
| `merchantMetaData`  | optional`string?`  | max. 255 characters  |  
## Callback notification[​](https://documentation.ixopay.com/api/batch-upload#callback-notification "Direct link to Callback notification")
If you provide a callback URL during your batch upload request, a notification will be sent to that URL once processing is complete — regardless of whether all rows succeeded, some failed, or the entire batch failed.
  * **Format:** The notification body is JSON.
  * **Trigger:** Sent once per batch, when the batch reaches a terminal status (`completed`, `processed_with_errors`, or `failed`).
  * **File uniqueness:** There will be exactly one result file generated per batch upload request.
  * **Availability:** The result file will be available for download for at least 7 days. This applies to both the sandbox and production environment.
  * **File size:** The size of the result file depends on the number of transactions created from the uploaded batch file (more transactions lead to a larger file).

The notification to the url will contain the following field:  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `link`  | required`string`  | The downloadable URL for the result JSON file. (Available at least 7 days)  |  
Example notification
```

{  

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```Hostname
The link field in the notification will point to the result file hosted on either `gateway.ixopay.com` (production environment) or `sandbox.ixopay.com` (sandbox environment), depending on the environment you used to upload the batch file.
## Result file[​](https://documentation.ixopay.com/api/batch-upload#result-file "Direct link to Result file")
The result file is in **JSON** format and is available for download for at least 7 days in both sandbox and production.
### Structure[​](https://documentation.ixopay.com/api/batch-upload#structure "Direct link to Structure")
Example result file
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```###  `summary` fields[​](https://documentation.ixopay.com/api/batch-upload#summary-fields "Direct link to summary-fields")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `totalRows`  | required`integer`  | Total number of rows that were attempted  |  
| `successfulRows`  | required`integer`  | Number of rows that were executed successfully  |  
| `failedRows`  | required`integer`  | Number of rows that failed validation or execution  |  
###  `failedRows` entry fields[​](https://documentation.ixopay.com/api/batch-upload#failedrows-entry-fields "Direct link to failedrows-entry-fields")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `type`  | required`string`  |  `TX_LOG_CREATE` — failed before execution; `TX_LOG_POST_CREATE` — failed during execution  |  
| `merchantTransactionId`  | optional`string?`  | Your transaction ID from the batch row  |  
| `errorMessage`  | optional`string?`  | Human-readable description of the failure  |  
| `errorCode`  | optional`string?`  | Machine-readable error identifier  |  
###  `successfulRows` entry fields[​](https://documentation.ixopay.com/api/batch-upload#successfulrows-entry-fields "Direct link to successfulrows-entry-fields")  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| `success`  | required`boolean`  | Always `true` for entries in this array  |  
| `transactionStatus`  | required`string`  | status of the transaction  |  
| `uuid`  | required`string`  | UUID of the transaction  |  
| `merchantTransactionId`  | required`string`  | your transaction ID  |  
| `transactionType`  | required`string`  | transaction type  |  
| `amount`  | required`string`  | transaction amount  |  
| `currency`  | required`string`  | transaction currency  |  
| `errorMessage`  | optional`string?`  | description if request fails  |  
| `errorCode`  | optional`number?`  | error identifier  |  
| `errors`  | optional`array?`  | an array containing transaction errors, see [TransactionError](https://documentation.ixopay.com/api/transaction/debit)  |  
| `returnData`  | optional`object?`  | one of [ReturnData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `customer`  | optional`object?`  | see [Customer](https://documentation.ixopay.com/api/transaction/debit)  |  
| `extraData`  | optional`object?`  | object containing `key-value` pairs (string-to-string)  |  
| `merchantMetaData`  | optional`string?`  | merchant metadata  |  
| `schedules`  | optional`array?`  | an array containing attached schedules, see [ScheduleData](https://documentation.ixopay.com/api/transaction/debit)  |  
| `chargebackData`  | optional`object?`  | see [ChargebackData](https://documentation.ixopay.com/api/transaction/status-by-uuid)  |  
| `customerProfileData`  | optional`object?`  | see [CustomerProfileData](https://documentation.ixopay.com/api/transaction/debit)  |  
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

``````

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

``````

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches" \  

  --request POST \  

  --user "$USERNAME:$PASSWORD" \  

  --form "batchFile=@$FILENAME.csv" \  

  --form "callbackUrl=$CALLBACK_URL" \  

  --form "processingMode=lenient"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

with open(os.environ["FILENAME"] + ".csv", "rb") as f:  

    response = requests.post(  

        url,  

        files={"batchFile": f},  

        data={  

            "callbackUrl": os.environ["CALLBACK_URL"],  

            "processingMode": "lenient",  

        },  

        auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

    )  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "POST",  

    CURLOPT_POSTFIELDS     => [  

        "batchFile"      => new CURLFile("$FILENAME.csv"),  

        "callbackUrl"    => $CALLBACK_URL,  

        "processingMode" => "lenient",  

    ],  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.io.File;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

RequestBody body = new MultipartBody.Builder()  

    .setType(MultipartBody.FORM)  

    .addFormDataPart("batchFile", System.getenv("FILENAME") + ".csv",  

        RequestBody.create(new File(System.getenv("FILENAME") + ".csv"),  

            MediaType.parse("text/csv")))  

    .addFormDataPart("callbackUrl", System.getenv("CALLBACK_URL"))  

    .addFormDataPart("processingMode", "lenient")  

    .build();  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .post(body)  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending"  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID"))  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "pending",  

  "processingMode": "strict"  

}  

```
```

{  

  "batchId": "a1b2c3d4-...",  

  "status": "completed",  

  "processingMode": "strict",  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 100,  

    "failedRows": 0  

  },  

  "resultDocument": "https://gateway.ixopay.com/..."  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD" \  

  --output result.json  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches/{batchId}/file".format(  

    apiKey=os.environ["API_KEY"],  

    batchId=os.environ["BATCH_ID"],  

)  

  

response = requests.get(url, auth=(os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

with open("result.json", "wb") as f:  

    f.write(response.content)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches/$BATCH_ID/file",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

  

file_put_contents("result.json", $response);  

```
```

import okhttp3.*;  

import java.nio.file.Files;  

import java.nio.file.Paths;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

Request request = new Request.Builder()  

    .url("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches/" + System.getenv("BATCH_ID") + "/file")  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

try (ResponseBody body = client.newCall(request).execute().body()) {  

    Files.write(Paths.get("result.json"), body.bytes());  

}  

```
```

curl "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25" \  

  --request GET \  

  --user "$USERNAME:$PASSWORD"  

```
```

import requests  

import os  

  

url = "https://gateway.ixopay.com/api/v3/batchUpload/v2/{apiKey}/batches".format(  

    apiKey=os.environ["API_KEY"]  

)  

  

response = requests.get(  

    url,  

    params={"page": 1, "perPage": 25},  

    auth=(os.environ["USERNAME"], os.environ["PASSWORD"]),  

)  

```
```

<?php  

  

$curl = curl_init();  

curl_setopt_array($curl, [  

    CURLOPT_URL            => "https://gateway.ixopay.com/api/v3/batchUpload/v2/$API_KEY/batches?page=1&perPage=25",  

    CURLOPT_RETURNTRANSFER => true,  

    CURLOPT_CUSTOMREQUEST  => "GET",  

    CURLOPT_USERPWD        => "$USERNAME:$PASSWORD",  

]);  

  

$response = curl_exec($curl);  

curl_close($curl);  

```
```

import okhttp3.*;  

import java.util.Base64;  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

String auth = Base64.getEncoder().encodeToString(  

    (System.getenv("USERNAME") + ":" + System.getenv("PASSWORD")).getBytes());  

HttpUrl url = HttpUrl.parse("https://gateway.ixopay.com/api/v3/batchUpload/v2/"  

        + System.getenv("API_KEY") + "/batches")  

    .newBuilder()  

    .addQueryParameter("page", "1")  

    .addQueryParameter("perPage", "25")  

    .build();  

Request request = new Request.Builder()  

    .url(url)  

    .get()  

    .addHeader("Authorization", "Basic " + auth)  

    .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "data": [  

    {  

      "batchId": "a1b2c3d4-...",  

      "status": "completed",  

      "createdAt": "2026-04-22T10:00:00+00:00"  

    },  

    {  

      "batchId": "e5f6g7h8-...",  

      "status": "pending",  

      "createdAt": "2026-04-22T10:05:00+00:00"  

    }  

  ],  

  "total": 42,  

  "perPage": 25,  

  "currentPage": 1  

}  

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

  "link": "https://gateway.ixopay.com/link-to-the-result-json-file"  

}  

```
```

{  

  "summary": {  

    "totalRows": 100,  

    "successfulRows": 97,  

    "failedRows": 3  

  },  

  "failedRows": [  

    {  

      "type": "TX_LOG_CREATE",  

      "merchantTransactionId": "your-unique-identifier",  

      "errorMessage": "currency: 'XXX' is not in the list of valid values",  

      "errorCode": "1000"  

    }  

  ],  

  "successfulRows": [  

    {  

      "success": true,  

      "transactionStatus": "SUCCESS",  

      "uuid": "abcd1234-...",  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionType": "debit",  

      "amount": "9.99",  

      "currency": "EUR",  

      "customer.lastName": "Smith"  

    }  

  ]  

}  

```