---
title: Reconciliation
summary: ' After the paymenthttps://documentation.ixopay.com/docs/guides/payments/after'
tags:
- cases-https-documentation-ixopay-com-docs-guides-payments-after-reconciliation-cases-direct-link-cases
- reconciliation-api-https-documentation-ixopay-com-docs-guides-payments-after-reconciliation-reconciliation-api-direct-link-reconciliation-api
- api
- json
- ixopay
- psp
- authorization
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/guides/payments/after/reconciliation
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * [After the payment](https://documentation.ixopay.com/docs/guides/payments/after)
  * Reconciliation

# Reconciliation
Reconciliation is a crucial process in the payment industry that allows merchants to match their payment records with those of their payment service providers (PSPs). It helps to ensure that all transactions are accounted for and accurately reflected in the merchant's accounting system.
IXOPAY platform Full Version
Reconciliation post-processing is an optional feature which is not automatically available for all [IXOPAY platform](https://www.ixopay.com) clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
Different PSPs handle reconciliation in different ways. For example, one PSP may provide reconciliation data within seconds, which can be collected via an API. In contrast, another PSP may provide reconciliation data in a file, which may take several hours or even days to obtain. The format, semantics, and granularity of the data often differ, depending on the underlying payment method.
The [IXOPAY](https://www.ixopay.com) post-processing engine standardizes the reconciliation process and any resulting conflicts, such as incorrectly calculated fees, missing reconciliation data, and unknown transactions, across your payments landscape, independent of your PSPs and payment methods. All identified conflicts can easily be resolved within IXOPAY platform, simplifying this task for you.
IXOPAY platform post-processing engine
PSP 2 Adapter
PSP 1 Adapter
HTTP POST,\ne-mail,\nupload: SFTP, OneDrive, S3
Reconciliation API
Transaction 1
Reconciliation data
...
Transaction 2
Reconciliation data
...
Data fetcher 1
Data fetcher 2
Reconciliation post-processing
Merchant
Callbacks
If [callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) are used, reconciliation is not strictly necessary as the latest status of a transaction is already provided via callbacks. However, reconciliation might still be useful if a merchant has multiple shops that run on separate systems but uses one accounting backend that should reconcile all of the shops.
For more detailed information on managing reconciliation, consult the IXOPAY platform [User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/post-processing/reconciliation).
## Use cases[​](https://documentation.ixopay.com/docs/guides/payments/after/reconciliation#use-cases "Direct link to Use cases")
  * A merchant wants to reconcile transaction data across multiple PSPs and payment methods. They use IXOPAY's post-processing engine to standardize the reconciliation process and identify any conflicts, enabling easy resolution of these conflicts within IXOPAY platform.
  * A merchant has multiple shops that run on separate systems but uses one accounting backend that should reconcile all of the shops. They use IXOPAY platform's [Reconciliation API](https://documentation.ixopay.com/api/reconciliation/reconciliation-api) to retrieve transaction data from a specific timeframe and import it into their accounting system.
  * A merchant wants to automate the reconciliation process by integrating the [Reconciliation API](https://documentation.ixopay.com/api/reconciliation/reconciliation-api) with their accounting system. They use the API to retrieve transaction data and automatically match and verify the accuracy of financial transaction data between different parties.

## Reconciliation API[​](https://documentation.ixopay.com/docs/guides/payments/after/reconciliation#reconciliation-api "Direct link to Reconciliation API")
The [Reconciliation API](https://documentation.ixopay.com/api/reconciliation/reconciliation-api) offered by IXOPAY allows developers to retrieve transactions that occurred within a specific timeframe by providing a `from` and `to` date. The returned transactions are paginated with a maximum of 100 transactions per page. Developers can use the `page` parameter to select the fetched page. The result includes all relevant transaction data, most importantly `uuid`, `merchantTransactionId`, `type`, and `status` for each transaction. Furthermore, the API may also provide information about the fees associated with each transaction.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```With the reconciliation API, you can easily retrieve all transaction data and reconcile it with your accounting system. This saves you time and effort compared to manually reconciling each transaction with each PSP or bank.
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```With the reconciliation API, you can easily retrieve all transaction data and reconcile it with your accounting system. This saves you time and effort compared to manually reconciling each transaction with each PSP or bank.
  * [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * [After the payment](https://documentation.ixopay.com/docs/guides/payments/after)
  * Reconciliation
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```With the reconciliation API, you can easily retrieve all transaction data and reconcile it with your accounting system. This saves you time and effort compared to manually reconciling each transaction with each PSP or bank.
  * [Use cases](https://documentation.ixopay.com/docs/guides/payments/after/reconciliation#use-cases)
  * [Reconciliation API](https://documentation.ixopay.com/docs/guides/payments/after/reconciliation#reconciliation-api)
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY" \  

  --header 'Content-Type: application/x-www-form-urlencoded' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data 'from=2023-04-01 00:00:00&to=2023-04-30 23:59:59&page=1'  

```
```

import requests  

import base64  

  

url = "https://gateway.ixopay.com/api/reconciliation/retrieve/{apiKey}".format(  

    apiKey=os.environ["API_KEY]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

}  

headers = {  

    "Content-Type": "application/x-www-form-urlencoded",  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/reconciliation/retrieve/$API_KEY",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "from": "2023-04-01 00:00:00",  

    "to": "2023-04-30 23:59:59",  

    "page": 1  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    'Content-Type: application/x-www-form-urlencoded',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = new FormBody.Builder()  

  .add("from", "2023-04-01 00:00:00")  

  .add("to", "2023-04-30 23:59:59")  

  .add("page", "1")  

  .build()  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/reconciliation/retrieve/%s"  

    .format(System.getenv("API_KEY"))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/x-www-form-urlencoded")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```With the reconciliation API, you can easily retrieve all transaction data and reconcile it with your accounting system. This saves you time and effort compared to manually reconciling each transaction with each PSP or bank.