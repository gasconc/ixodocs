---
title: How to migrate from Spreedly
summary: ' How to …https://documentation.ixopay.com/docs/recipes/how-to  How to migrate
  from Spreedly'
tags:
- main-differences-https-documentation-ixopay-com-docs-recipes-migrating-spreedly-main-differences-direct-link-main-differences
- javascript-integration-https-documentation-ixopay-com-docs-recipes-migrating-spreedly-javascript-integration-direct-link-javascript-integration
- javascript-include-https-documentation-ixopay-com-docs-recipes-migrating-spreedly-javascript-include-direct-link-javascript-include
- initial-purchase-https-documentation-ixopay-com-docs-recipes-migrating-spreedly-initial-purchase-direct-link-initial-purchase
- api
- json
- tokenization
- ixopay
- recurring
- authorization
source_url: https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [How to …](https://documentation.ixopay.com/docs/recipes/how-to)
  * How to migrate from Spreedly

# How to migrate from Spreedly
Transitioning from one payment platform to another can seem challenging, but it doesn't have to be. This recipe is designed to assist you in migrating from Spreedly to [IXOPAY platform](https://www.ixopay.com). We aim to make this transition as straightforward as possible by providing you with key insights and code samples that highlight the differences between the two platforms.
## Main differences[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#main-differences "Direct link to Main differences")
Before we delve into the specifics, it's important to understand the main differences between Spreedly and IXOPAY platform. These differences extend beyond the features each platform offers and include how they handle transactions, notifications, and integrations. Here are some of the key distinctions:
  * ​IXOPAY platform sends you an asynchronous [callback](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) once a transaction reaches a final state (success or error).
  * You don't have to deal with multiple formats from various payment processors behind Spreedly, everything is already transformed to the IXOPAY platform notification format.
  * ​IXOPAY platform supports custom styled [payment forms](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages), Javascript integration via [payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js) or redirect integration, for example for PayPal, Sofort, iDeal etc.

## Javascript integration[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#javascript-integration "Direct link to Javascript integration")
### Javascript include[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#javascript-include "Direct link to Javascript include")
  * Spreedly
  * IXOPAY platform
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```### Initializing & styling[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#initializing--styling "Direct link to Initializing & styling")
  * Spreedly
  * IXOPAY platform
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```### Tokenization[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#tokenization "Direct link to Tokenization")
  * Spreedly
  * IXOPAY platform
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```## Transaction API[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#transaction-api "Direct link to Transaction API")
### Initial purchase[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#initial-purchase "Direct link to Initial purchase")
  * Spreedly
  * IXOPAY platform
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```### Recurring transaction[​](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#recurring-transaction "Direct link to Recurring transaction")
  * Spreedly
  * IXOPAY platform
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```  * [Main differences](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#main-differences)
  * [Javascript integration](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#javascript-integration)
    * [Javascript include](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#javascript-include)
    * [Initializing & styling](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#initializing--styling)
    * [Tokenization](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#tokenization)
  * [Transaction API](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#transaction-api)
    * [Initial purchase](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#initial-purchase)
    * [Recurring transaction](https://documentation.ixopay.com/docs/recipes/how-to/migrating-from-spreedly#recurring-transaction)
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```
```

<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"></script>  

```
```

<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>  

<script  

  data-main="payment-js"  

  src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js"  

></script>  

```
```

Spreedly.init("ENV_KEY", {  

  numberEl: "div-id-of-cc-number",  

  cvvEl: "div-id-of-cvv",  

});  

Spreedly.on("ready", function () {  

  Spreedly.setStyle("number", "width:225px; height:35px;");  

  Spreedly.setStyle("number", "font-size: 20px; text-align: center");  

  Spreedly.setStyle("cvv", "width:60px; height:35px;");  

});  

```
```

const payment = new PaymentJs("1.1");  

payment.init("my-Connector-Key", "div-id-of-cc-number", "div-id-of-cvv", (payment) => {  

  payment.setNumberStyle({ border: "1px solid red", width: "150px" });  

  payment.setCvvStyle({ border: "1px solid black;" });  

  

  payment.onNumberInput((data) => {  

    alert("A number was entered");  

  });  

});  

```
```

Spreedly.tokenizeCreditCard({  

  // Required  

  first_name: document.getElementById("first-name").value,  

  last_name: document.getElementById("last-name").value,  

  month: document.getElementById("month").value,  

  year: document.getElementById("year").value,  

  

  // Optional  

  email: document.getElementById("email").value,  

  zip: document.getElementById("zip").value,  

});  

  

Spreedly.on("paymentMethod", function (token, paymentMethod) {  

  // Send requisite payment method info to backend  

  var tokenField = document.getElementById("payment_method_token");  

  var fingerprintField = document.getElementById("payment_method_fingerprint");  

  

  tokenField.setAttribute("value", token);  

  fingerprintField.setAttribute("value", paymentMethod["fingerprint"]);  

  

  var masterForm = document.getElementById("payment-form");  

  masterForm.submit();  

});  

```
```

payment.tokenize(  

  {  

    first_name: document.getElementById("first-name").value,  

    last_name: document.getElementById("last-name").value,  

    month: document.getElementById("month").value,  

    year: document.getElementById("year").value,  

    // Optional  

    email: document.getElementById("email").value,  

  }, //additional data, MUST include first_name, last_name, month and year  

  

  (token, cardData) => {  

    //success callback function  

    $("#transaction_token").val(token); //store the transaction token  

    $("#payment_form").get(0).submit(); //submit the form  

  },  

  (errors) => {  

    //error callback function  

    alert("Errors occured");  

    //render error information here  

  },  

);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

  "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

  "amount": 9.99,  

  "currency_code": "EUR",  

  "retain_on_success": true  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$Debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setTransactionToken('token-from-js')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setWithRegister(true) //to store payment information for Recurring  

  ->setSuccessUrl('https://shop.example.org/checkout/success')  

  ->setCancelUrl('https://shop.example.org/checkout/cancelled')  

  ->setErrorUrl('https://shop.example.org/checkout/error')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$customer = new \Ixopay\Client\Data\Customer();  

$customer  

  ->setFirstName('Alex')  

  ->setLastName('Smith')  

  ->setIdentification('616c6578-2e73-6d69-7468-406578616d70')  

  ->setBillingCountry('US')  

  ->setEmail('alex.smith@example.org')  

  ->setIpAddress('198.51.100.123');  

  

$debit->setCustomer($customer);  

  

$result = $client->debit($debit);  

```
```

POST /v1/gateways/<gateway_token>/purchase.json  

Host: core.spreedly.com  

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==  

Content-Type: application/json  

  

{  

  "transaction": {  

    "payment_method_token": "56wyNnSmuA6CWYP7w0MiYCVIbW6",  

    "amount": 9.99,  

    "currency_code": "EUR"  

  }  

}  

```
```

<?php  

$client = new \Ixopay\Client\Client($username, $password, $apiKey, $sharedSecret);  

  

$debit = new \Ixopay\Client\Transaction\Debit();  

$debit  

  ->setTransactionId('your-unique-identifier')  

  ->setReferenceTransactionId('uuid-returned-from-first-transaction')  

  ->setAmount(9.99)  

  ->setCurrency('EUR')  

  ->setDescription('Purchase description shown on credit card statement.')  

  ->setCallbackUrl('https://api.example.org/callback');  

  

$result = $client->debit($debit);  

```