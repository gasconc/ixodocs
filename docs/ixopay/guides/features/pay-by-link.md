Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/guides/features)
  * Pay-by-Link


On this page
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
Last updated on **Apr 10, 2026**
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/guides/features)
  * Pay-by-Link


On this page
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
Last updated on **Apr 10, 2026**
[Previous Customer profiles](https://documentation.ixopay.com/docs/guides/features/customer-profiles)[Next Tokenization & PCI](https://documentation.ixopay.com/docs/guides/features/tokenization)
  * [Step 1: Creating a Pay-by-Link](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link)
  * [Step 2: Using the Pay-by-Link](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link)
  * [Optional: Cancelling Pay-by-Links](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links)
  * [More](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/guides/features)
  * Pay-by-Link


On this page
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
Last updated on **Apr 10, 2026**
# Pay-by-Link
The Pay-by-Link feature offers a seamless, (almost) no-code integration for creating secure payment links. Pay-by-Links can be shared with customers through various channels, such as email (integrated with the [IXOPAY platform](https://www.ixopay.com)), or others using a third-party provider (for example SMS). In this guide, we'll walk you through the most straightforward use case: creating a Pay-by-Link, using it for payments, and canceling it.
Reference
For more details on  Pay-by-Link, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link "Pay-by-Link reference article") in the reference.
Email Features
To utilize the email features of Pay By Link, please provide SMTP email server details to the Customer Success Team and request the _Pay By Link email permissions_ be enabled. It is by design that Pay By Link emails will not be sent until these requirements have been met.
## Step 1: Creating a Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-1-creating-a-pay-by-link "Direct link to Step 1: Creating a Pay-by-Link")
In order to create a Pay-by-Link, simply create a transaction request as per usual while adding the additional parameter `payByLink` and specifying whether the link should be sent per email.
  * Set `sendByEmail` to `false` to only generate the Pay-by-Link.
  * Setting `sendByEmail` to `true` will send out the link to the customer on the pre-condition that the `email` field has been set on the `customer`. The email content itself may be customized. To find out how, refer to the [Pay-by-Link article in the User Manual](https://docs.ixopay.com/en/platform-user-administration-manual/connector-specific-features-1/paybylink).


Here's an example:
Result templates
Note the absence of the `successUrl`, `cancelUrl`, and `errorUrl` fields. If they are not provided, the Pay-by-Link's result template will be shown to the customer.
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  
  --data-raw '{  
    "merchantTransactionId": "your-unique-identifier",  
    "transactionToken": "$CC_TOKEN",  
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
cc_token = os.environ["CC_TOKEN"]  
  
payload = json.dumps(  
    {  
        "merchantTransactionId": "your-unique-identifier",  
        "transactionToken": cc_token,  
        "description": "My purchase description as shown in the credit card statement.",  
        "amount": "9.99",  
        "currency": "EUR",  
        "callbackUrl": "https://api.example.org/checkout/callback",  
        "payByLink": {  
            "sendByEmail": false  
        }  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit",  
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
    "description": "My purchase description as shown in the credit card statement.",  
    "amount": "9.99",  
    "currency": "EUR",  
    "callbackUrl": "https://api.example.org/checkout/callback",  
    "payByLink": {  
      "sendByEmail": false  
    }  
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
    "\"description\": \"My purchase description as shown in the credit card statement.\"," +  
    "\"amount\": \"9.99\"," +  
    "\"currency\": \"EUR\"," +  
    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  
    "\"payByLink\": {" +  
      "\"sendByEmail\": false" +  
    "}" +  
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

Callbacks
Pay-by-Link can be used in conjunction with callbacks to receive transaction status updates. For more details on how to set up and manage callbacks, please refer to the [Callbacks guide](https://documentation.ixopay.com/docs/guides/getting-started/callbacks).
## Step 2: Using the Pay-by-Link[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#step-2-using-the-pay-by-link "Direct link to Step 2: Using the Pay-by-Link")
Once you've created the Pay-by-Link, an API response will be generated, containing the Pay-by-Link URL. You can locate the Pay-by-Link URL in the API Response as `redirectUrl`. This URL will take the customer to the payment page, which is a special [hosted payment page](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages) provided by the IXOPAY platform, where they can complete the payment process.
One of the key advantages of Pay-by-Link is its versatility in how the link is delivered to the customer. You have two primary options:
  * **Sending via email** : You can send the Pay-by-Link to the customer via email. This is a built-in feature of the IXOPAY platform and provides a convenient way to reach your customers with payment instructions.
  * **Presenting through other channels** : Alternatively, you can choose to present the Pay-by-Link to the customer through other channels, such as SMS using a third-party provider, on your website, or any other communication method that suits your business needs. This flexibility allows you to integrate Pay-by-Link seamlessly into your existing workflows and reach your customers where they are.


Here's a simple example of the API response:
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot



```
HTTP/1.1 200 OK  
Content-Type: application/json  
  
{  
  "success": true,  
  "uuid": "d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "returnType": "REDIRECT",  
  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  
  "paymentMethod": "Creditcard",  
  "payByLinkData": {  
    "cancelUrl": "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel"  
  }  
}  

```


```
# ...  
  
response_data = response.json()  
  
pay_by_link = response.get("redirect_url")  
  
# present pay_by_link to customer  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$payByLink = $responseData['redirectUrl']  
  
// present $payByLink to customer  

```


```
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String payByLink = jsonNode.get("redirectUrl").asText();  
  
// present payByLink to customer  

```

## Optional: Cancelling Pay-by-Links[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#optional-cancelling-pay-by-links "Direct link to Optional: Cancelling Pay-by-Links")
To cancel a Pay-by-Link, you can use the `cancelUrl` found in the response. However, please note that cancellation may not prevent a payment in all cases, especially if the customer has already initiated the payment with the payment service provider (PSP). For more details on the effects of cancellation, check out the in-depth article on [Pay-by-Link](https://documentation.ixopay.com/docs/reference/features/pay-by-link#manual-cancellation) in the reference.
For detailed information on authentication, response structure, and cancellation, please refer to the [Pay-by-Link API documentation](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api).
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/payByLink/d94c0d72f3a36e21f16e/cancel" \  
  --header 'Content-Type: application/json' \  
  --header 'Accept: application/json' \  
  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)"  

```


```
import requests  
import json  
import base64  
import os  
  
# ...  
  
response_data = response.json()  
  
cancel_url = response.get("payByLinkData").get("cancelUrl")  
  
auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  
  
headers = {  
    "Content-Type": "application/json",  
    "Accept": "application/json",  
    "Authorization": "Basic {auth}".format(auth=auth),  
}  
  
response = requests.request("POST", cancel_url, headers=headers)  

```


```
<?php  
  
// ...  
  
$responseData = json_decode($response->getBody(), true);  
  
$cancelUrl = $responseData['payByLinkData']['cancelUrl']  
  
$auth = base64_encode("$USERNAME:$PASSWORD");  
  
$curl = curl_init($cancelUrl);  
curl_setopt_array($curl, array(  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => '',  
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
// ...  
  
String responseBody = response.body().string();  
ObjectMapper objectMapper = new ObjectMapper();  
JsonNode jsonNode = objectMapper.readTree(responseBody);  
  
String cancelUrl = jsonNode.get("payByLinkData").get("cancelUrl").asText();  
  
OkHttpClient client = new OkHttpClient().newBuilder().build();  
RequestBody body = RequestBody.create("", null);  
String auth = Base64.getEncoder().encodeToString(  
  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  
Request request = new Request.Builder()  
  .url(cancelUrl)  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## More[​](https://documentation.ixopay.com/docs/guides/features/pay-by-link#more "Direct link to More")
We've covered the basics of creating Pay-by-Links and handling the response. If you need more technical details or information on automatic expiration, please check the [Pay-by-Link reference section](https://documentation.ixopay.com/docs/reference/features/pay-by-link#automatic-expiration-1) for additional information.
