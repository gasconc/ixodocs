---
title: Place a hold on a payment
summary: ' Place a hold on a payment'
tags:
- preauthorizing-funds-https-documentation-ixopay-com-docs-guides-payments-holding-funds-preauthorizing-funds-direct-link-preauthorizing-funds
- api
- json
- ixopay
- authorization
- capture
- void
- credit-card
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/guides/payments/holding-funds
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Place a hold on a payment

# Place a hold on a payment
In online payments, placing a hold on a payment is a common practice that allows merchants to reserve funds on a customer's card for a certain amount of time before actually transferring the funds. This can be useful for various use cases such as delayed charges, pre-orders, or to ensure that funds are available before processing a payment. Other scenarios where this is useful are when the final amount charged to the customer is not yet known, such as for hotel reservations or car rentals.
This article covers the process of placing a hold on a payment via a preauthorization transaction. This transaction allows you to reserve funds on a customer's account without immediately transferring them to your merchant account. The held funds can later be transferred via a capture transaction, or released via a void transaction. Additionally, it is possible to prolong or increase the held funds via an incremental authorization transaction. The code samples in this article are based on the [Hosted Fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) integration, but with the proper adaptations, they will also work with [Hosted Payment Pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages). We'll cover each of these steps in detail, and provide some examples of how to perform them using our transaction API.
`preauthorization`
`capture`
`incrementalAuthorization`
`void`
Start
Funds held
Payment received
Hold released
## Preauthorizing funds[​](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds "Direct link to Preauthorizing funds")
The [preauthorize transaction](https://documentation.ixopay.com/api/transaction/preauthorize) allows merchants to place a hold on funds on a customer's card. To do this, the merchant sends a request to the [IXOPAY platform](https://www.ixopay.com) with the transaction details, including the amount to be preauthorized and the customer's card details. The result of the preauthorize transaction will include a unique identifier, the `uuid`, which must be stored and used as `referenceUuid` in subsequent capture, void, and incremental authorization transactions."
tip
Funds for a preauthorize transaction are typically held for 7 days, but this can vary depending on the payment processor and the agreement with the merchant. Some adapters may support longer or shorter preauthorizations, so it's important to check the documentation and agreements with the payment processor to understand the specifics.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```## Transferring funds[​](https://documentation.ixopay.com/docs/guides/payments/holding-funds#transferring-funds "Direct link to Transferring funds")
[Capture transactions](https://documentation.ixopay.com/api/transaction/capture) are used to transfer the held funds from a preauthorization to the merchant's account. Typically, this is done when the merchant is ready to provide the service or product to the customer. For some adapters, a partial capture is possible where not all funds that were held are transferred, for example, if the customer only receives part of the service or product.
info
The previously stored `uuid` from the [preauthorize transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds) must be used as `referenceUuid` in the capture transaction.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```## Releasing held funds[​](https://documentation.ixopay.com/docs/guides/payments/holding-funds#releasing-held-funds "Direct link to Releasing held funds")
[Void transactions](https://documentation.ixopay.com/api/transaction/void) are used to cancel the preauthorization and release the held funds back to the customer's account. This is usually done when the merchant cannot fulfill the service or product, or if the customer decides to cancel the order. It's important to note that once a void transaction is made, the held funds will not be transferred, even if the merchant is later able to fulfill the order.
info
The previously stored `uuid` from the [preauthorize transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds) must be used as `referenceUuid` in the void transaction.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```## Prolonging or increasing held funds[​](https://documentation.ixopay.com/docs/guides/payments/holding-funds#prolonging-or-increasing-held-funds "Direct link to Prolonging or increasing held funds")
[Incremental authorization transactions](https://documentation.ixopay.com/api/transaction/incremental-authorization) are used to prolong the hold on the funds or to increase the amount of funds being held. This is useful in cases where the initial preauthorization hold is about to expire, but the merchant needs more time to provide the service or product.
info
Incremental authorization is optional and not supported by all adapters.
Reference transaction
A follow-up [capture transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#transferring-funds) may capture the full amount of the initial transaction and all its subsequent incremental authorizations. It must use the `uuid` of the initial [preauthorize transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds) as the `referenceUuid`.
A follow-up [void transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#releasing-held-funds) must use the `uuid` of the initial [preauthorize transaction](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds) as the `referenceUuid`.
  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```  * [Preauthorizing funds](https://documentation.ixopay.com/docs/guides/payments/holding-funds#preauthorizing-funds)
  * [Transferring funds](https://documentation.ixopay.com/docs/guides/payments/holding-funds#transferring-funds)
  * [Releasing held funds](https://documentation.ixopay.com/docs/guides/payments/holding-funds#releasing-held-funds)
  * [Prolonging or increasing held funds](https://documentation.ixopay.com/docs/guides/payments/holding-funds#prolonging-or-increasing-held-funds)
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/preauthorize" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/preauthorize".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

$transactionToken = $_REQUEST['cctoken'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/preauthorize",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": {$transactionToken},  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

String transactionToken = req.getParameter("cctoken");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/preauthorize"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/capture" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/capture".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/capture",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/capture"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/void" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/void".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/void",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/void"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/incrementalAuthorization" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url =  

    "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/incrementalAuthorization"  

    .format(apiKey=os.environ["API_KEY"])  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "referenceUuid": "4d40738b1194869734f7",  

        "merchantTransactionId": "your-unique-identifier",  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback"  

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

  CURLOPT_URL =>  

    "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/incrementalAuthorization",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "referenceUuid": "4d40738b1194869734f7",  

    "merchantTransactionId": "your-unique-identifier",  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"" +  

    "\"callbackUrl\": \"https://api.example.org/callback\""  

  "}"  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/transaction/%s/incrementalAuthorization"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```