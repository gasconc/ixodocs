---
title: Customer profiles
summary: ' Customer profiles'
tags:
- setting-customer-profiles-https-documentation-ixopay-com-docs-guides-features-customer-profiles-setting-customer-profiles-direct-link-setting-customer-profiles
- creating-customer-profile-https-documentation-ixopay-com-docs-guides-features-customer-profiles-creating-customer-profile-direct-link-creating-customer-profile
- step-initiate-debit-transaction-register-https-documentation-ixopay-com-docs-guides-features-customer-profiles-step-initiate-debit-transaction-register-direct-link-step-initiate-debit-transaction-register
- extract-customeridentification-response-json
- customer-existing-data-database
- assuming-unique-identifier-like-customerid
- step-authenticate-user-https-documentation-ixopay-com-docs-guides-features-customer-profiles-step-authenticate-user-direct-link-step-authenticate-user
- languages
- footnotes-https-documentation-ixopay-com-docs-guides-features-customer-profiles-footnote-label-direct-link-footnotes
- api
source_url: https://documentation.ixopay.com/docs/guides/features/customer-profiles
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/guides/features)
  * Customer profiles

# Customer profiles
Customer profiles are a powerful feature that allows you to store and manage customer data and payment details. This guide will walk you through the process of setting up, creating, and using customer profiles.
Reference
For more details on  customer profiles, check out the in-depth article on [customer profiles](https://documentation.ixopay.com/docs/reference/features/customer-profiles "Customer profiles reference article") in the reference.
IXOPAY platform Full Version
Customer profiles are an optional feature which is not automatically available for all [IXOPAY platform](https://www.ixopay.com) clients!
If you want to get access to all IXOPAY platform features you need to upgrade your plan. Please contact your Customer Success Manager or our sales team at sales@ixopay.com for more information.
## Setting up customer profiles[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#setting-up-customer-profiles "Direct link to Setting up customer profiles")
Before you can start creating and using customer profiles, you need to set up _customer profile containers_. These containers serve as storage for the customer profiles and can be shared across sub-tenants, enabling multiple merchants within the same ecosystem to access shared customer profiles.
Here's how you can set up customer profile containers:
  1. **Navigate to the tokenization configuration** : Go to the _Tokenization_ > _Customer Profiles_ section.
  2. **Select the tenant** (_optional_[1](https://documentation.ixopay.com/docs/guides/features/customer-profiles#user-content-fn-1)): Choose the tenant for which you want to create or edit a customer profile container.
  3. **Create a new container** : Click on _'➕ New Container'_ to create a new customer profile container.
  4. **Enter a container name** : Provide a name for your new container.
  5. **Create the container** : Click on _'➕ Create'_ to create the container.

Once the container is created, it will appear in the _Customer Profile Container Overview_ and can be edited at any time. You can also access the customer profiles stored in the container by clicking _'show'_.
To store customer profiles in a container, you need to assign the customer profile container to a connector. Any successful [register](https://documentation.ixopay.com/api/transaction/register) transaction or [debit](https://documentation.ixopay.com/api/transaction/debit)/[preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction with the `withRegister` flag set to true processed by this Connector will automatically add the customer data and used payment instrument for subsequent charges as a Customer Profile in this container. You can assign a Customer Profile Container either in the Connector Base Data or using Global Settings.
## Creating a customer profile[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#creating-a-customer-profile "Direct link to Creating a customer profile")
### Step 1: Initiate a debit transaction with register[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-1-initiate-a-debit-transaction-with-register "Direct link to Step 1: Initiate a debit transaction with register")
During the customer's first purchase, initiate a [debit](https://documentation.ixopay.com/api/transaction/debit) or [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) transaction with the `withRegister` flag enabled, or a [register](https://documentation.ixopay.com/api/transaction/register) transaction. In this example, we use a [debit](https://documentation.ixopay.com/api/transaction/debit) transaction as described in the [Getting-started guide on payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js). This transaction will transfer funds and create a new customer profile. Ensure that you set the `customerProfileData` field during this transaction. Additionally, if you set the `customerProfileData.customerIdentification` field to a value of your choosing, you can later look-up the customer profile via this value.
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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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

```### Step 2: Store the customer profile ID[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-2-store-the-customer-profile-id "Direct link to Step 2: Store the customer profile ID")
Once the transaction is successful, the system will automatically assign a `profileGuid` to the customer profile. You should store either the `customerProfileData.customerIdentification` or `customerProfileData.profileGuid` in your database under the user's entry. This ID will be used to retrieve the customer profile in the future.
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

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```## Using a customer profile[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#using-a-customer-profile "Direct link to Using a customer profile")
### Step 1: Authenticate the user[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-1-authenticate-the-user "Direct link to Step 1: Authenticate the user")
Before you can use a customer profile, you need to ensure that the user is authenticated. This is crucial because it prevents unauthorized access to the customer's profile.
  * curl
  * Python: Flask
  * PHP: Laravel
  * Java
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```### Step 2: Fetch the stored customer profile[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-2-fetch-the-stored-customer-profile "Direct link to Step 2: Fetch the stored customer profile")
After the user is authenticated, you can [fetch the stored customer profile](https://documentation.ixopay.com/docs/reference/features/customer-profiles#retrieving-profile-information) from the IXOPAY platform. This ID used could be either the `customerProfileData.customerIdentification` or `customerProfileData.profileGuid` that you stored during the creation of the customer profile.
  * curl
  * Python: Flask
  * PHP: Laravel
  * Java
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```### Step 3: Extract the payment instrument and payment token[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-3-extract-the-payment-instrument-and-payment-token "Direct link to Step 3: Extract the payment instrument and payment token")
Next, you need to extract the payment instrument and `paymentToken` from the customer profile. The payment instrument refers to the method of payment that the customer has chosen, such as credit card, debit card, or bank transfer. The `paymentToken` is a unique identifier for the payment instrument.
_Optional:_ if there are multiple payment instruments stored for a customer, you could present them to the customer and let the customer choose which one to use.
  * HTTP Response
  * Python: Flask
  * PHP: Laravel
  * Java: Spring Boot
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```### Step 4: Initiate debit a transaction[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-4-initiate-debit-a-transaction "Direct link to Step 4: Initiate debit a transaction")
Finally, you can initiate a debit transaction using the `paymentToken`. It's worth noting that while this example demonstrates a debit transaction, the same process applies to various transaction types. Regardless of the transaction type, you need to include the `paymentToken` in the `transactionToken` field of the transaction request. This will allow the system to process the transaction using the stored payment instrument.
For more details on executing transactions, refer to the [Executing transactions](https://documentation.ixopay.com/docs/reference/features/customer-profiles#executing-transactions) section in the reference article.
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

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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

```By following these steps, you can leverage customer profiles to provide a seamless and efficient checkout experience for your customers.
## Footnotes[​](https://documentation.ixopay.com/docs/guides/features/customer-profiles#footnote-label "Direct link to Footnotes")
  1. This step applies only if you have multiple tenants set up. [↩](https://documentation.ixopay.com/docs/guides/features/customer-profiles#user-content-fnref-1)
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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

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

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "My purchase description as shown in the credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

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

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "My purchase description as shown in the credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

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

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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

```  * [Setting up customer profiles](https://documentation.ixopay.com/docs/guides/features/customer-profiles#setting-up-customer-profiles)
  * [Creating a customer profile](https://documentation.ixopay.com/docs/guides/features/customer-profiles#creating-a-customer-profile)
    * [Step 1: Initiate a debit transaction with register](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-1-initiate-a-debit-transaction-with-register)
    * [Step 2: Store the customer profile ID](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-2-store-the-customer-profile-id)
  * [Using a customer profile](https://documentation.ixopay.com/docs/guides/features/customer-profiles#using-a-customer-profile)
    * [Step 1: Authenticate the user](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-1-authenticate-the-user)
    * [Step 2: Fetch the stored customer profile](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-2-fetch-the-stored-customer-profile)
    * [Step 3: Extract the payment instrument and payment token](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-3-extract-the-payment-instrument-and-payment-token)
    * [Step 4: Initiate debit a transaction](https://documentation.ixopay.com/docs/guides/features/customer-profiles#step-4-initiate-debit-a-transaction)
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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

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

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "$CC_TOKEN",  

    "description": "My purchase description as shown in the credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

        "callbackUrl": "https://api.example.org/checkout/callback",  

        "withRegister": true,  

        "customerProfileData": {  

            "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

            "markAsPreferred": true  

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

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/checkout/callback",  

    "withRegister": true,  

    "customerProfileData": {  

      "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

      "markAsPreferred": true  

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

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/checkout/callback\"," +  

    "\"withRegister\": true," +  

    "\"customerProfileData\": {" +  

      "\"customerIdentification\": \"23ac38bf-c5cd-4001-9d60-ba373130cd74\"," +  

      "\"markAsPreferred\": true" +  

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
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "success": true,  

  "uuid": "d94c0d72f3a36e21f16e",  

  "purchaseId": "20260526-d94c0d72f3a36e21f16e",  

  "returnType": "FINISHED",  

  "paymentMethod": "Creditcard"  

  "customerProfileData": {  

    "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

    "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

    "paymentToken": "pt::b639e636df17af782602"  

  }  

}  

```
```

from flask import Flask, request, jsonify  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

  

## ...  

  

response_data = response.json()  

  

## Extract the customerIdentification from the response JSON  

customer_identification = response_data['customerProfileData']['customerIdentification']  

  

## Get the customer's existing data from the database  

## (assuming you have a unique identifier like customer_id)  

customer_id = "your_customer_id"  # Replace with the actual customer identifier  

customer = Customer.query.get(customer_id)  

  

if customer:  

    # Update the customer's customer_identification  

    customer.customer_identification = customer_identification  

  

    # Save the updated customer record  

    db.session.commit()  

  

## ...  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

// Extract the customerIdentification  

$customerIdentification = $response_data['customerProfileData']['customerIdentification'];  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

$customerId = "your_customer_id";  

$customer = Customer::find($customerId);  

  

if ($customer) {  

  // Update the customer's customerIdentification  

  $customer->customerIdentification = $customerIdentification;  

  

  // Save the updated customer record  

  $customer->save();  

}  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

// Extract the customerIdentification  

String customerIdentification = jsonNode.get("customerProfileData")  

  .get("customerIdentification").asText();  

  

// Get the customer's existing data from the database  

// (assuming you have a unique identifier like customerId)  

final String customerId = "your_customer_id";  

Customer customer = customerRepository.findById(customerId).orElse(null);  

  

if (customer != null) {  

  // Update the customer profile  

  customer.setCustomerIdentification(customerIdentification);  

  

  // Save the updated customer record  

  customerRepository.save(customer);  

}  

  

// ...  

```
```

## See other languages  

```
```

from flask import Flask, session, redirect  

from flask_session import Session  

from flask_sqlalchemy import SQLAlchemy  

  

app = Flask(__name__)  

db = SQLAlchemy(app)  

Session(app)  

  

## ...  

  

if not session.get('customer_id'):  

    return redirect(url_for('login'))  

  

customer = Customer.query.filter_by(customer_id=session['customer_id']).first()  

customer_identification = customer.customer_identification  

```
```

<?php  

  

use Illuminate\Http\Request;  

use Illuminate\Support\Facades\DB; // Import the database facade  

use App\Models\Customer; // Replace with the actual Customer model  

  

// ...  

  

if (!auth()->check()) {  

  return redirect('/login');  

}  

  

$customer = Customer::find(auth()->id());  

$customerIdentification = $customer->$customerIdentification;  

```
```

// ...  

  

// assuming a "user" parameter that is an @AuthenticationPrincipal  

  

Customer customer = customerRepository.findById(user.getCustomerProfileId()).orElse(null);  

String customerIdentification = customer.getCustomerIdentification();  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "customerIdentification": "23ac38bf-c5cd-4001-9d60-ba373130cd74",  

  }'  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "customerIdentification": customer_identification  

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

  CURLOPT_URL => "https://gateway.ixopay.com/api/v3/customerProfiles/${API_KEY}/getProfile",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => 'POST',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

    "customerIdentification": "{$customerIdentification}"  

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

  String.format("{" +  

    "\"customerIdentification\": \"%s\"" +  

  "}", customerIdentification);  

);  

String auth = Base64.getEncoder().encodeToString(  

  "%s:%s".format(System.getenv("USERNAME"), System.getenv("PASSWORD")));  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com/api/v3/customerProfiles/%s/getProfile".format(  

    System.getenv("API_KEY")))  

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

  "profileExists": "true",  

  "profileGuid": "CP-1234-5678-9ABC-DEF0-1234-5678",  

  "customerIdentification": "616c6578-2e73-6d69-7468-406578616d70",  

  "preferredMethod": "Creditcard",  

  "customer": {  

    "identification": "616c6578-2e73-6d69-7468-406578616d70",  

    "billingCountry": "US",  

    "birthDate": "1970-01-01",  

    "email": "alex.smith@example.org"  

  },  

  "paymentInstruments": [  

    {  

      "_TYPE": "card",  

      "createdAt": "2031-05-27 10:15:25",  

      "method": "card",  

      "paymentData": {  

        "_TYPE": "paymentData.card",  

        "brand": "visa",  

        "cardHolder": "Alex Smith",  

        "expiryMonth": 5,  

        "expiryYear": 2031,  

        "firstSixDigits": "411111",  

        "lastFourDigits": "1111"  

      },  

      "paymentToken": "pt::b639e636df17af782602",  

      "isPreferred": true  

    }  

  ]  

}  

```
```

## ...  

  

response_data = response.json()  

  

preferred_payment_token = None  

first_payment_token = None  

  

for payment_instrument in response_data.get("paymentInstruments", []):  

    payment_token = payment_instrument.get("paymentToken")  

  

    # if there is a preferred payment instrument, we use it  

    if payment_instrument.get("isPreferred"):  

        preferred_payment_token = payment_token  

        break  

  

    # otherwise we use the first one  

    if payment_token:  

        first_payment_token = payment_token  

        if preferred_payment_token:  

            break  

  

if preferred_payment_token is not None:  

    payment_token = preferred_payment_token  

else:  

    payment_token = first_payment_token  

  

## ...  

```
```

<?php  

  

// ...  

  

$responseData = json_decode($response->getBody(), true);  

  

$preferredPaymentToken = null;  

$firstPaymentToken = null;  

  

foreach ($responseData['paymentInstruments'] ?? [] as $paymentInstrument) {  

  $paymentToken = $paymentInstrument['paymentToken'];  

  

  // if there is a preferred payment instrument, we use it  

  if ($paymentInstrument['isPreferred']) {  

    $preferredPaymentToken = $paymentToken;  

    break;  

  }  

  

  // otherwise we use the first one  

  if ($paymentToken) {  

    $firstPaymentToken = $paymentToken;  

    if ($preferredPaymentToken) {  

      break;  

    }  

  }  

}  

  

$paymentToken = $preferredPaymentToken ?? $firstPaymentToken;  

  

// ...  

```
```

// ...  

  

String responseBody = response.body().string();  

ObjectMapper objectMapper = new ObjectMapper();  

JsonNode jsonNode = objectMapper.readTree(responseBody);  

  

String preferredPaymentToken = null;  

String firstPaymentToken = null;  

  

if (responseNode.has("paymentInstruments")) {  

  JsonNode paymentInstrumentsNode = responseNode.get("paymentInstruments");  

  

  for (JsonNode instrumentNode : paymentInstrumentsNode) {  

    JsonNode paymentTokenNode = instrumentNode.get("paymentToken");  

    boolean isPreferred = instrumentNode.has("isPreferred")  

      && instrumentNode.get("isPreferred").asBoolean();  

  

    // If there is a preferred payment instrument, use it  

    if (isPreferred && paymentTokenNode != null) {  

      paymentToken = paymentTokenNode.asText();  

      break;  

    }  

  

    // Otherwise, use the first one with a valid paymentToken  

    if (paymentTokenNode != null && paymentToken == null) {  

      paymentToken = paymentTokenNode.asText();  

    }  

  }  

}  

  

String paymentToken = preferredPaymentToken != null  

  ? preferredPaymentToken  

  : firstPaymentToken;  

  

// ...  

```
```

curl --request POST -sL \  

  --url "https://gateway.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw '{  

    "merchantTransactionId": "your-unique-identifier",  

    "transactionToken": "pt::b639e636df17af782602",  

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

  

## ...  

  

url = "https://gateway.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": payment_token,  

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

  

// ...  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

$curl = curl_init("https://gateway.ixopay.com/api/v3/transaction/$API_KEY/debit");  

curl_setopt_array($curl, array(  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_POSTFIELDS => <<<EOD  

  {  

      "merchantTransactionId": "your-unique-identifier",  

      "transactionToken": "{$paymentToken}",  

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

// ...  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  String.format("{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"%s\"," +  

    "\"description\": \"Purchase description shown on credit card statement.\"," +  

    "\"amount\": \"9.99\"," +  

    "\"currency\": \"EUR\"," +  

    "\"successUrl\": \"https://shop.example.org/checkout/success\"," +  

    "\"cancelUrl\": \"https://shop.example.org/checkout/cancelled\"," +  

    "\"errorUrl\": \"https://shop.example.org/checkout/error\"," +  

    "\"callbackUrl\": \"https://api.example.org/callback\"" +  

  "}", preferredPaymentToken)  

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