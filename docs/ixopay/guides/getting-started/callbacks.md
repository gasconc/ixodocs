---
title: Callbacks
summary: ' Getting startedhttps://documentation.ixopay.com/docs/guides/getting-started'
tags:
- step-setting-callback-url-https-documentation-ixopay-com-docs-guides-getting-started-callbacks-step-setting-callback-url-direct-link-step-setting-callback-url
- languages
- conclusion-https-documentation-ixopay-com-docs-guides-getting-started-callbacks-conclusion-direct-link-conclusion
- next-steps-https-documentation-ixopay-com-docs-guides-getting-started-callbacks-next-steps-direct-link-next-steps
- api
- json
- ixopay
- recurring
- authorization
- void
source_url: https://documentation.ixopay.com/docs/guides/getting-started/callbacks
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Getting started](https://documentation.ixopay.com/docs/guides/getting-started)
  * Callbacks

# Callbacks
The [IXOPAY platform](https://www.ixopay.com) provides a callback mechanism that allows you to receive real-time updates on the status of your payment transactions. This is useful for keeping your own system in sync with the status of your payments, and for triggering other actions based on the status of a payment (e.g. sending a confirmation email to your customer).
PSPIXOPAY platformMerchant backend par​loop[State changes]Perform transaction: setting a callback URLPerform paymentPayment completeCallbackUpdate internal stateCallback OKPayment completePayment state changeOKCallbackUpdate internal stateCallback OK
Reference
For more details on  callbacks, check out the in-depth article on [callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks "Callbacks reference article") in the reference.
To use callbacks, follow these simple steps:
## Step 1: Setting a callback URL[​](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-1-setting-a-callback-url "Direct link to Step 1: Setting a callback URL")
When you initiate a payment transaction using one of the transaction methods (debit, preauthorize etc.), you can provide a `callbackUrl` parameter in your request payload. This parameter specifies the URL of your system's endpoint that will receive the callback notifications.
Callback URL requirements
For detailed information on the restrictions that apply to the `callbackUrl` field, please refer to the comprehensive article on [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling) in the reference section.
Here is an example request to create a debit transaction with a callback URL:
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

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

```## Step 2: Setting up a callback endpoint[​](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-2-setting-up-a-callback-endpoint "Direct link to Step 2: Setting up a callback endpoint")
To receive callback notifications from IXOPAY platform, you need to set up an endpoint in your system that can receive and process incoming POST requests.
The callback data is sent as a JSON payload in the body of the POST request. The payload contains information about the transaction, including its current state and any relevant details.
HTTP response
Once the callback has been handled by your system, IXOPAY platform expects a HTTP response with status code 200 and a response body of exactly `OK` (trimmed). Any other response — a non-200 status code **or** a body that is not `OK` — is treated as a failed postback and will cause IXOPAY platform to retry sending the callback using an exponential backoff algorithm — see [Reference: Callbacks - Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt).
Here is an example of how you can set up a callback endpoint in your store's backend system:
  * HTTP
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot
```

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```## Step 3: Update internal state[​](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-3-update-internal-state "Direct link to Step 3: Update internal state")
Once the authenticity of the callback data has been verified (see [Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security)), your system can update its internal state to reflect the new state of the transaction. This could involve updating a database record, triggering a notification to a user, or performing some other action based on the current state of the transaction.
  * HTTP
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

}  

```It is important to note that callbacks are not guaranteed to be delivered in real-time and may experience delays or even failures.
If your initial request could not be processed, no transaction will be created; this is indicated by an initial transaction response with `success` set to `false`. If no transaction is created, IXOPAY platform will not send any callbacks.
## Conclusion[​](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#conclusion "Direct link to Conclusion")
In summary, using callbacks to update a payment transaction's state in the background can provide real-time updates on the status of the transaction without the need to constantly query the IXOPAY platform API. Follow the steps above to configure the callback URL, process the callback data, and update your internal state based on the current state of the transaction.
## Next steps[​](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#next-steps "Direct link to Next steps")
Now that you have integrated IXOPAY platform's callbacks, you can look into …
  * … implementing [additional security](https://documentation.ixopay.com/docs/guides/production/additional-security) by validating the callback signature.
  * … [recurring payments](https://documentation.ixopay.com/docs/guides/getting-started/recurring-payments) to generate recurring revenue.
  * … [testing your setup](https://documentation.ixopay.com/docs/guides/getting-started/testing) to make sure you've set up everything correctly.
  * … exploring the [callback reference](https://documentation.ixopay.com/docs/reference/integration/callbacks) for detailed information on callback structure and usage.
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

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

}  

```  * [Step 1: Setting a callback URL](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-1-setting-a-callback-url)
  * [Step 2: Setting up a callback endpoint](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-2-setting-up-a-callback-endpoint)
  * [Step 3: Update internal state](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#step-3-update-internal-state)
  * [Conclusion](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#conclusion)
  * [Next steps](https://documentation.ixopay.com/docs/guides/getting-started/callbacks#next-steps)
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

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback"  

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

POST /callback  

Host: api.example.org  

Content-Type: application/json  

Date: Thu, 23 Mar 2023 10:34:47 GMT  

X-Signature: vbWnLPF+bxvv7c6PId/FXWGlV8HqrtzaC8uqJDbNQBLH1I6V9yF8ePQIsEFsfTJXvQGO1B7hzkPIrwF7J47QVw==  

  

{  

  "result": "OK",  

  "uuid": "d94c0d72f3a36e21f16e",  

  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  

  "purchaseId": "20260511-d94c0d72f3a36e21f16e",  

  "transactionType": "DEBIT",  

  "paymentMethod": "Creditcard",  

  "amount": "9.99",  

  "currency": "EUR",  

  "returnData": {  

    "cardData": {  

      "type": "visa",  

      "cardHolder": "Alex Smith",  

      "expiryMonth": 5,  

      "expiryYear": 2031,  

      "binDigits": "41111111",  

      "firstSixDigits": "411111",  

      "lastFourDigits": "1111",  

      "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  

      "threeDSecure": "OFF",  

      "binBrand": "US",  

      "binBank": "Global Trust Bank",  

      "binCountry": "US"  

    }  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  

  # TODO: handle callback  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:controller CallbackController  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

  

    // TODO: handle callback  

  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    // TODO: handle callback  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

}  

```
```

## See other languages  

```
```

from flask import Flask, request  

  

app = Flask(__name__)  

  

transaction_fetch(id):  

  # fetch transaction from database  

  

transaction_update(transction):  

  # update transaction in database  

  

send_email(customer, template_id):  

  # send an email  

  

@app.route('/callback', methods=['POST'])  

def callback():  

  if not request.is_json:  

    return 'Unsupported Media Type', 415  

  

  content = request.get_json()  

  transaction_id = content.merchantTransactionId  

  transaction_result = content.result  

  

  # Update internal state based on current state of the transaction  

  transaction = transaction_fetch(transaction_id)  

  transcation.result = transaction_result  

  

  transaction_update(transaction)  

  

  if transaction.result == 'OK':  

    send_email(transaction.customer, 'order_confirmed')  

  

  return 'OK', 200, {'Content-Type': 'text/plain'}  

  

if __name__ == "__main__":  

  app.run()  

```
```

<?php  

  

// php artisan make:model Transaction  

// php artisan make:mail OrderConfirmed --markdown=order_confirmed  

  

namespace App\Http\Controllers;  

  

use Illuminate\Http\Request;  

use App\Models\Transaction;  

use App\Mail\OrderConfirmed;  

  

class CallbackController extends Controller  

{  

  public function callback(Request $request)  

  {  

    if ($request->header('Content-Type') !== 'application/json') {  

      return response('Unsupported Media Type', 415);  

    }  

  

    $callback = $request->json()->all();  

    $transactionId = $callback->merchantTranscationId;  

    $result = $callback->result;  

  

    $transaction = Transaction::find($transactionId);  

    if ($transaction === null) {  

      return callbackHandledResponse();  

    }  

  

    $transaction->result = $result;  

    $transaction->save();  

  

    if($transaction->result === 'OK') {  

      Mail::to($transaction->customer->email)->send(  

        new OrderConfirmed($transaction->customerId));  

    }  

  

    return callbackHandledResponse();  

  }  

  

  private function callbackHandledResponse()  

  {  

    return response('OK', 200)->header('Content-Type', 'text/plain');  

  }  

}  

  

// in routes/web.php:  

  

use Illuminate\Support\Facades\Route;  

use App\Http\Controllers\CallbackController;  

  

Route::post('/callback', [CallbackController::class, 'callback']);  

```
```

import com.fasterxml.jackson.databind.JsonNode;  

import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.boot.SpringApplication;  

import org.springframework.boot.autoconfigure.SpringBootApplication;  

import org.springframework.http.HttpStatus;  

import org.springframework.http.MediaType;  

import org.springframework.http.ResponseEntity;  

import org.springframework.mail.SimpleMailMessage;  

import org.springframework.mail.javamail.JavaMailSender;  

import org.springframework.stereotype.Repository;  

import org.springframework.web.bind.annotation.PostMapping;  

import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;  

  

import javax.persistence.Column;  

import javax.persistence.Entity;  

import javax.persistence.Id;  

import javax.persistence.Table;  

  

@SpringBootApplication  

@RestController  

public class Application {  

  

  public static void main(String[] args) {  

    SpringApplication.run(Application.class, args);  

  }  

  

  @Autowired  

  private TransactionRepository transactionRepository;  

  

  @Autowired  

  private JavaMailSender mailSender;  

  

  @PostMapping(path = "/callback",  

    consumes = MediaType.APPLICATION_JSON, produces = MediaType.TEXT_PLAIN_VALUE)  

  public ResponseEntity<String> callback(@RequestBody JsonNode json) {  

    String transactionId = node.get("merchantTransactionId")  

    String result = node.get("result");  

  

    Transaction transaction = transactionRepository.findById(transactionId).orElse(null);  

    if(transaction != null) {  

      transaction.state = result;  

      transactionRepository.save(transaction);  

  

      if("OK".equals(transaction.state)) {  

        SimpleMailMessage message = new SimpleMailMessage();  

        message.setTo(transaction.customerEmail);  

        message.setSubject("Order confirmed.");  

        message.setText(  

          "Your payment has been received.\n\nThe order has now been confirmed.");  

        mailSender.send(message);  

      }  

    }  

  

    // Return an "OK" response with a 200 status code  

    return ResponseEntity.ok("OK");  

  }  

  

  @Entity  

  @Table(name = "transaction")  

  public static class Transaction {  

    @Id  

    private String id;  

  

    @Column(name = "state")  

    private String state;  

  

    @Column(name = "customer_email")  

    private String customerEmail;  

  

    // ...  

  }  

  

  @Repository  

  public static class TransactionRepository extends JpaRepository<Transaction, String> {  

  }  

}  

```