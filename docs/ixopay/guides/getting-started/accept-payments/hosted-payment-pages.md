---
title: Hosted payment pages
summary: ' Getting startedhttps://documentation.ixopay.com/docs/guides/getting-started  Accept
  paymentshttps://documentation.ixopay.com/docs/guides/getting-started/accept-payments  Hosted
  payment pages'
tags:
- hosted-payment-pages-https-documentation-ixopay-com-docs-guides-getting-started-accept-payments-hosted-payment-pages-hosted-payment-pages-direct-link-hosted-payment-pages
- step-initialize-transaction-https-documentation-ixopay-com-docs-guides-getting-started-accept-payments-hosted-payment-pages-step-initialize-transaction-direct-link-step-initialize-transaction
- step-payment-complete-https-documentation-ixopay-com-docs-guides-getting-started-accept-payments-hosted-payment-pages-step-payment-complete-direct-link-step-payment-complete
- next-steps-https-documentation-ixopay-com-docs-guides-getting-started-accept-payments-hosted-payment-pages-next-steps-direct-link-next-steps
- api
- json
- 3d-secure
- ixopay
- recurring
- authorization
source_url: https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Getting started](https://documentation.ixopay.com/docs/guides/getting-started)
  * [Accept payments](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments)
  * Hosted payment pages

# Hosted payment pages
Hosted payment pages are a simple way to start accepting payments without requiring any front-end development experience. With hosted payment pages, your customer is redirected to [IXOPAY platform](https://www.ixopay.com)'s secure hosted payment page to enter their payment details. After the payment is complete, the customer is redirected back to your website.
PSPIXOPAY platformMerchant backend CustomerCheckoutInitialize transactionInstruct redirectRedirect your customerSubmit payment detailsPerform paymentPayment completeShow success page
Reference
For more details on  hosted payment pages, check out the in-depth article on [hosted payment pages](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages "Hosted payment pages reference article") in the reference.
## How to use hosted payment pages[​](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#how-to-use-hosted-payment-pages "Direct link to How to use hosted payment pages")
### Step 1: Initialize a transaction[​](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-1-initialize-a-transaction "Direct link to Step 1: Initialize a transaction")
The first step is to initialize a new transaction on the IXOPAY platform from your backend system. To create a transaction send a `POST` request to gateway.ixopay.com.
Here we choose a [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction, which when successful, will immediately transfer funds. Depending on your business model a [Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction - followed by a [Capture](https://documentation.ixopay.com/api/transaction/capture) transaction - might be more appropriate.
Authentication
For details on how to authenticate API calls to the IXOPAY platform, see [Authentication](https://documentation.ixopay.com/api/transaction/transaction-api).
tip
This is a minimal example. Include as much information as possible in the `customer` field. This reduces friction and provides the most benefit for risk checks, 3D-secure authentication and other validations.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```### Step 2: Redirect your customer[​](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-2-redirect-your-customer "Direct link to Step 2: Redirect your customer")
If the IXOPAY platform successfully received your transaction, it will respond with a response containing `"returnType": "REDIRECT"` and a `redirectUrl`.
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```You can now redirect the customer to the page in the `redirectUrl` from your backend.
  * HTTP
  * Python
  * PHP
  * Java
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```For details on how to handle unsuccessful transaction results, see [Handling errors](https://documentation.ixopay.com/docs/guides/production/handling-errors).
### Step 3: Payment complete[​](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-3-payment-complete "Direct link to Step 3: Payment complete")
After the payment is complete, the customer will be redirected back to the website specified in `successUrl` when [creating the transaction](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-1-initialize-a-transaction).
Additionally, if you specify a `callbackUrl` in the [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction request, the IXOPAY platform will send a callback with the status of the payment. For more information on how to set up and use callbacks, please see the [callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) page.
## Next steps[​](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#next-steps "Direct link to Next steps")
Now that you've integrated IXOPAY platform via a hosted payement page, you can look into …
  * … [testing your setup](https://documentation.ixopay.com/docs/guides/getting-started/testing) to make sure you've set up everything correctly.
  * … handling changes to the payments status with [callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
  * … [recurring payments](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments) to generate recurring revenue.
  * … making your code production ready by [handling errors](https://documentation.ixopay.com/docs/guides/production/handling-errors).
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```  * [How to use hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#how-to-use-hosted-payment-pages)
    * [Step 1: Initialize a transaction](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-1-initialize-a-transaction)
    * [Step 2: Redirect your customer](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-2-redirect-your-customer)
    * [Step 3: Payment complete](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-3-payment-complete)
  * [Next steps](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#next-steps)
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }',  

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

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260507-d94c0d72f3a36e21f16e",  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "paymentMethod": "Creditcard"  

}  

```
```

HTTP/1.1 302 Found  

Location: https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890  

```
```

self.send_response(302)  

self.send_header('Location', response.json()["redirectUrl"])  

self.end_headers()  

```
```

$redirectUrl = json_decode($response)->redirectUrl;  

header("Location: $redirectUrl", true, 302);  

exit;  

```
```

JsonReader jsonReader = Json.createReader(new StringReader(response.body().string()));  

JsonObject json = jsonReader.readObject();  

  

resp.setStatus(HttpServletResponse.SC_FOUND);  

resp.setHeader("Location", json.getString("redirectUrl"));  

```