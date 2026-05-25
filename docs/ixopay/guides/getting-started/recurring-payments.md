---
title: Recurring payments
summary: ' Getting startedhttps://documentation.ixopay.com/docs/guides/getting-started  Recurring
  payments'
tags:
- step-creating-initial-transaction-https-documentation-ixopay-com-docs-guides-getting-started-recurring-payments-step-creating-initial-transaction-direct-link-step-creating-initial-transaction
- step-handle-initial-transaction-response-https-documentation-ixopay-com-docs-guides-getting-started-recurring-payments-step-handle-initial-transaction-response-direct-link-step-handle-initial-transaction-response
- making-follow-transactions-without-scheduler-https-documentation-ixopay-com-docs-guides-getting-started-recurring-payments-making-follow-transactions-without-scheduler-direct-link-making-follow-transactions-without-scheduler
- conclusion-https-documentation-ixopay-com-docs-guides-getting-started-recurring-payments-conclusion-direct-link-conclusion
- next-steps-https-documentation-ixopay-com-docs-guides-getting-started-recurring-payments-next-steps-direct-link-next-steps
- api
- json
- ixopay
- recurring
- subscription
source_url: https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments
portal: ixopay-dev
updated: '2026-05-25'
related: []
---

* [Getting started](https://documentation.ixopay.com/docs/guides/getting-started)
  * Recurring payments

# Recurring payments
Recurring payments, also known as subscription payments, are transactions that occur on a regular basis. These types of payments are common in industries such as streaming services, subscription boxes, and software as a service (SaaS) providers. With [IXOPAY platform](https://www.ixopay.com), you can easily set up recurring payments for your customers.
PSPIXOPAY platformMerchant backend loop[IXOPAY platform scheduler]Create initial transaction with schedulePerform paymentPayment completePayment completeHandle the initial transaction response and store uuidFollow-up transactions: callbackUpdate internal stateCallback OK
Reference
For more details on the  scheduler, check out the in-depth article on the [scheduler](https://documentation.ixopay.com/docs/reference/features/scheduler "Scheduler reference article") in the reference.
To use recurring payments, follow these simple steps:
## Step 1: Creating the initial transaction[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-1-creating-the-initial-transaction "Direct link to Step 1: Creating the initial transaction")
To start a recurring payment, you'll need to create an initial [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction with the `withRegister` flag set to `true`. This flag allows you to register the payment instrument for future charges. The `transactionIndicator` field should be set to `INITIAL` to indicate that this is the first transaction in the [recurring payments series](https://documentation.ixopay.com/docs/reference/concepts/transactions/indicators#initial).
Transaction criteria
`INITIAL` and `RECURRING` indicators should only be used if the merchant intends to process payments at regular, consistent intervals, and always for the same amount.
Alternatively, a [Register](https://documentation.ixopay.com/api/transaction/register) transaction can be used. The register transaction will not debit funds, the subsequent follow-up transactions will debit funds from the customer. You can use this to set start the payment schedule at a later time.
You can also include a `schedule` object in the initial transaction to schedule follow-up transactions. The scheduler object should include the `amount`, `currency`, `periodLength`, `periodUnit`, and optionally `startDateTime` fields.
The response to this transaction will contain a unique identifier called `uuid`, which you will need for subsequent transactions.
Here's an example of how to create an initial [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction with the `withRegister` flag set to true:
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

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

```In the above example, we set the `amount` and `currency` fields to the amount we want to charge the customer for each transaction. The `periodLength` and `periodUnit` fields are used to specify how often we want to charge the customer. In this case, we want to charge the customer every month, so we set the periodUnit to `MONTH`.
## Step 2: Handle the initial transaction response[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-2-handle-the-initial-transaction-response "Direct link to Step 2: Handle the initial transaction response")
When the initial transaction is created, you'll receive a response that includes a unique `uuid` for the transaction and `scheduleData.scheduleId` for the transaction. You can use these fields to identify the transaction and schedule in future API calls.
Depending on your integration methods, handle the result of the initial transaction:
  * For hosted payment pages you need to [Redirect your customer](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages#step-2-redirect-your-customer).
  * For hosted fields, you have to include the [`transactionToken`](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js#step-2-perform-transaction) in the initial transaction, then the payment should be complete.
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```## Step 3: Follow-up transactions[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-3-follow-up-transactions "Direct link to Step 3: Follow-up transactions")
​IXOPAY platform will automatically schedule follow-up transactions according to the schedule specified in the `schedule` object. You will receive a notification via the callback URL specified in the initial transaction when a follow-up transaction is made, see [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) on how to handle these notifications.
Depending on the result of the notifications you can manage your customers access to the subscription.
### Making follow-up transactions without the scheduler[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#making-follow-up-transactions-without-the-scheduler "Direct link to Making follow-up transactions without the scheduler")
If you do not want to use the IXOPAY platform scheduler, you can implement your own scheduler to make the follow-up transactions. You will need to remove the `schedule` and store the `uuid` of the initial transaction and schedule follow-up transactions using your own scheduler.
When the scheduled time for a follow-up transaction arrives, you will need to create a new [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction with the `uuid` of the initial transaction specified in the `referenceUuid` field and the `transactionIndicator` field set to `RECURRING`. You can then process the transaction and repeat the process for subsequent follow-up transactions.
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

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

```By using your own scheduling logic, you have the most control over when and how often your customers are invoiced. You can implement your own Dunning process and handle failures gracefully.
## Conclusion[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#conclusion "Direct link to Conclusion")
Recurring payments can be a powerful tool for merchants to increase customer retention and drive revenue. By using the `withRegister` flag on a [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction or by using the [Register](https://documentation.ixopay.com/api/transaction/register) transaction, you can easily create recurring payments. Either use IXOPAY platform's scheduler or bring your own.
## Next steps[​](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#next-steps "Direct link to Next steps")
Now that you've integrated IXOPAY platform's recurring payments, you can look into …
  * … handling changes to the payments status with [callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
  * … [testing your setup](https://documentation.ixopay.com/docs/guides/getting-started/testing) to make sure you've set up everything correctly.
  * … checking out the [scheduler reference](https://documentation.ixopay.com/docs/reference/features/scheduler) to understand the intricacies of scheduling recurring payments.
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

```  * [Step 1: Creating the initial transaction](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-1-creating-the-initial-transaction)
  * [Step 2: Handle the initial transaction response](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-2-handle-the-initial-transaction-response)
  * [Step 3: Follow-up transactions](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#step-3-follow-up-transactions)
    * [Making follow-up transactions without the scheduler](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#making-follow-up-transactions-without-the-scheduler)
  * [Conclusion](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#conclusion)
  * [Next steps](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments#next-steps)
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "withRegister": true,  

        "transactionIndicator": "INITIAL",  

        "schedule": {  

          "amount": "9.99",  

          "currency": "EUR",  

          "periodLength": 1,  

          "periodUnit": "MONTH",  

          "callbackUrl": "https://api.example.org/callback"  

        },  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "withRegister": true,  

    "transactionIndicator": "INITIAL",  

    "schedule": {  

      "amount": "9.99",  

      "currency": "EUR",  

      "periodLength": 1,  

      "periodUnit": "MONTH",  

      "callbackUrl": "https://api.example.org/callback"  

    },  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"withRegister\"": true," +  

    "\"transactionIndicator\": \"INITIAL\"," +  

    "\"schedule\": {" +  

      "\"amount\": \"9.99\"," +  

      "\"currency\": \"EUR\"," +  

      "\"periodLength\": 1," +  

      "\"periodUnit\": \"MONTH\"," +  

      "\"callbackUrl\": \"https://api.example.org/callback\"" +  

    "}," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "4d40738b1194869734f7",  

  "purchaseId": "20260520-4d40738b1194869734f7",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

}  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

        "referenceUuid": "4d40738b1194869734f7",  

        "transactionIndicator": "RECURRING",  

        "description": "My subscription.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/callback",  

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

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS =>'{  

    "merchantTransactionId": "your-unique-identifier",  

    "referenceUuid": "4d40738b1194869734f7",  

    "transactionIndicator": "RECURRING",  

    "description": "My subscription.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

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

    "\"referenceUuid\": \"4d40738b1194869734f7\"," +  

    "\"transactionIndicator\": \"RECURRING\"," +  

    "\"description\": \"My subscription.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

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