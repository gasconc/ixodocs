Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Handling refunds


On this page
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
Last updated on **Apr 10, 2026**
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Handling refunds


On this page
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
Last updated on **Apr 10, 2026**
[Previous Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds)[Next Payouts](https://documentation.ixopay.com/docs/guides/payments/payouts)
  * [Refunding payments](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments)
  * [Chargebacks](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks)
  * [Chargeback reversals](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Payments](https://documentation.ixopay.com/docs/guides/payments)
  * Handling refunds


On this page
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
Last updated on **Apr 10, 2026**
# Handling refunds
When it comes to online payments, refunds are an essential part of handling transactions. There are two types of refunds that can occur: merchant-initiated refunds and customer-initiated chargebacks. In this article, we will cover both types and how to handle them using the [IXOPAY platform](https://www.ixopay.com).
## Refunding payments[​](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments "Direct link to Refunding payments")
Merchant-initiated refunds happen when a merchant wants to return funds to a customer, either in part or in full. This can happen for various reasons, such as the customer being dissatisfied with the product or service they received.
To initiate a refund, the merchant needs to send a request to the IXOPAY platform with the transaction details, including the amount to be refunded and the `referenceUuid` of the transaction that transferred the funds to the merchant's account. You can refund [debit](https://documentation.ixopay.com/api/transaction/debit) and [capture](https://documentation.ixopay.com/api/transaction/capture) transactions. If a [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction was used, it has to be [voided](https://documentation.ixopay.com/api/transaction/void), see [Place a hold on a payment](https://documentation.ixopay.com/docs/guides/payments/holding-funds) for details.
`referenceUuid`
Capture
store `uuid`
Debit
Refund
Availability
Some payment methods do not support refunds or don't support partial refunds. Make sure to check the [adapters page](https://adapters.ixopay.com) for details on the supported refund functionality for each payment method.
Here's an example of a [refund transaction API](https://documentation.ixopay.com/api/transaction/refund) call:
  * curl
  * Python
  * PHP
  * Java



```
curl --request POST -sL \  
  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/refund" \  
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
  
url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/refund".format(  
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
  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/transaction/$API_KEY/refund",  
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
  .url("https://gateway.ixopay.com/api/v3/transaction/%s/refund"  
    .format(System.getenv("API_KEY")))  
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")  
  .addHeader("Authorization", "Basic %s".format(auth))  
  .build();  
Response response = client.newCall(request).execute();  

```

## Chargebacks[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargebacks "Direct link to Chargebacks")
Customer-initiated chargebacks occur when a customer disputes a charge on their card statement. This can happen if the customer did not authorize the charge or if they believe the charge was fraudulent. Chargebacks can be costly for merchants, as they often incur a fee from the acquirer.
To handle chargebacks, merchants need to be notified when they occur. This can be done through [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) set up in the IXOPAY platform or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK`. Once a chargeback occurs, the funds from the transaction are returned to the customer, and the merchant may be required to provide evidence to dispute the chargeback.
## Chargeback reversals[​](https://documentation.ixopay.com/docs/guides/payments/refunds#chargeback-reversals "Direct link to Chargeback reversals")
In some cases, a chargeback may be reversed if the customer's dispute is resolved in favor of the merchant. This is known as a chargeback reversal. The funds are returned to the merchant's account, and the fee incurred from the original chargeback may be reversed as well.
Chargeback reversals are handled in the same way as chargebacks: either using [Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) or by using the [transaction status API](https://documentation.ixopay.com/api/transaction/status) call. The `transactionType` of a chargeback transaction is `CHARGEBACK-REVERSAL`.
info
It is important to note that refunds are generally the preferred method of handling disputes, as they are typically less expensive than chargebacks. However, in cases where chargebacks cannot be avoided, it is important to be aware of the process and have the necessary tools in place to handle them.
