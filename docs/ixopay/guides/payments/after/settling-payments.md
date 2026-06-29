---
title: Settling payments
summary: ' After the paymenthttps://documentation.ixopay.com/docs/guides/payments/after  Settling
  payments'
tags:
- settlement-api-https-documentation-ixopay-com-docs-guides-payments-after-settling-payments-settlement-api-direct-link-settlement-api
- api
- json
- xml
- ixopay
- psp
- authorization
- settlement
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/guides/payments/after/settling-payments
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * [After the payment](https://documentation.ixopay.com/docs/guides/payments/after)
  * Settling payments

# Settling payments
In the payment industry, the process of settling payments refers to the transfer of funds from a customer's account to the merchant's account. This typically occurs after a transaction has been authorized, captured, and/or preauthorized. Settlements can also include fees charged by the [IXOPAY platform](https://www.ixopay.com) or other intermediaries involved in the transaction.
IXOPAY platform Full Version
Settlement post-processing is an optional feature which is not automatically available for all IXOPAY platform clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
The process of settling payments can present challenges for eCommerce enterprises as different payment service providers (PSPs) handle settlements in different ways. Settlement data can be provided in different formats (JSON, XML, CSV, Fixed-width file, EPPRC, GRRCN, CAMT.054) with varying semantics and granularity depending on the underlying payment method.
To help developers manage settlements, the IXOPAY platform provides a post-processing engine that standardizes the settlement process and resolves conflicts across different PSPs and payment methods. This simplifies the task for developers and helps ensure that settlements are processed efficiently and accurately.
IXOPAY platform post-processing engine
PSP 2 Adapter
PSP 1 Adapter
HTTP POST,\ne-mail,\nupload: SFTP, OneDrive, S3
Settlement API
Transaction 1
Settlement 1 CSV
...
Transaction 2
Settlement 2 XML
...
Data fetcher 1
Data fetcher 2
Settlement post-processing
Merchant
It is important to note that settlement information may not be immediately available and can take different amounts of time to be provided by different PSPs. Developers should be prepared to handle delays in settlement information and ensure that their systems are designed to process settlements as efficiently as possible.
After the settlement data has been processed, it can be configured to be exported in various ways. Settlement data can be sent to an HTTP endpoint, sent via email, uploaded to SFTP, OneDrive or S3, or pulled via the [Settlement API](https://documentation.ixopay.com/api/settlement/settlement-api). This settlement data can then be imported into the accounting system used by the merchant.
For more detailed information on managing settlements and resolving conflicts, consult the IXOPAY platform [User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/post-processing/provider-settlements).
## Settlement API[​](https://documentation.ixopay.com/docs/guides/payments/after/settling-payments#settlement-api "Direct link to Settlement API")
The [Settlement API](https://documentation.ixopay.com/api/settlement/settlement-api) can be used to fetch settlement files that were generated via settlement post-processing steps:
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```  * [Settlement API](https://documentation.ixopay.com/docs/guides/payments/after/settling-payments#settlement-api)
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/settlement/getSettlementFiles" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/settlement/getSettlementFiles"  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "fromDate": "2023-04-01T00:00:00Z",  

        "toDate": "2023-04-30T23:59:59Z",  

        "format": "link"  

    }  

)  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request("POST", url, headers=headers, data=payload)  

```
```

<?php  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/settlement/getSettlementFiles",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "fromDate": "2023-04-01T00:00:00Z",  

    "toDate": "2023-04-30T23:59:59Z",  

    "format": "link"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"fromDate\": \"2023-04-01T00:00:00Z\"," +  

    "\"toDate\": \"2023-04-30T23:59:59Z\"," +  

    "\"format\": \"link\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/settlement/getSettlementFiles")  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```