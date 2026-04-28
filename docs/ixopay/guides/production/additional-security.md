---
title: Additional security
summary: ' Getting production readyhttps://documentation.ixopay.com/docs/guides/production  Additional
  security'
tags:
- signatures-https-documentation-ixopay-com-docs-guides-production-additional-security-signatures-direct-link-signatures
- computing-signature-https-documentation-ixopay-com-docs-guides-production-additional-security-computing-signature-direct-link-computing-signature
- validating-callback-signatures-https-documentation-ixopay-com-docs-guides-production-additional-security-validating-callback-signatures-direct-link-validating-callback-signatures
- languages
- compute-expected-signature
- compare-computed-signature-one-signature-header
- signing-requests-https-documentation-ixopay-com-docs-guides-production-additional-security-signing-requests-direct-link-signing-requests
- signature-testing-https-documentation-ixopay-com-docs-guides-production-additional-security-signature-testing-direct-link-signature-testing
- signature-testing-tool
- api
source_url: https://documentation.ixopay.com/docs/guides/production/additional-security
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* [Getting production ready](https://documentation.ixopay.com/docs/guides/production)
  * Additional security

# Additional security
Ensuring the security of your API should be a top priority in any production environment. At [IXOPAY](https://www.ixopay.com), we understand this need and provide a robust security system to safeguard your data. Our API security includes basic measures such as TLS 1.2 and HTTP Basic Authentication to establish secure communication. Additionally, we offer a signature mechanism that offers an extra layer of protection for API requests and callbacks. The authenticity of messages is guaranteed by utilizing [HMAC](https://en.wikipedia.org/wiki/HMAC) with [SHA2-512](https://en.wikipedia.org/wiki/SHA-2) as the hashing algorithm in the signature mechanism.
Here is a summary of the security measures that our APIs offer:
  * TLS 1.2 or later: This cryptographic protocol provides secure communication between the client and server by encrypting all data transmitted over the network.
  * HTTP Basic Authentication: This authentication mechanism requires a valid username and password combination for access to the API.
  * Signatures: HMAC-SHA512 is used to generate signatures for each message sent over the API. These signatures help to ensure the authenticity and integrity of API requests and callbacks.

## Signatures[​](https://documentation.ixopay.com/docs/guides/production/additional-security#signatures "Direct link to Signatures")
An aspect of the security measures offered by the [IXOPAY platform](https://www.ixopay.com) API is the signature mechanism. Signatures are a way of ensuring the authenticity and integrity of API requests and callbacks. A signature is a hashed value that is included in all API responses and callbacks from the platform. Merchants can also sign their own requests to the APIs, which the IXOPAY platform will attempt to verify. It is recommended (but not required) that merchants check the signature of callbacks since this is the only form of communication where no TLS certificate can prove the identity of IXOPAY.
The signature is sent and received in the `X-Signature` HTTP header. To generate the signature, HMAC (Hash-based Message Authentication Code) using SHA2-512 as the hashing algorithm is used. The secret key for the HMAC is the shared secret configured on your connector.
info
To validate or create signatures, a correct [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.2) HTTP `Date` header is required. As a fallback for certain HTTP libraries, an equivalent `X-Date` header can be used on the request as well and will take precedence over the `Date` header.
To implement the signature mechanism, merchants need to compute the signature, validate callback signatures, and sign requests. These steps will be covered in the following sections.
### Computing the signature[​](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature "Direct link to Computing the signature")
To compute the signature for a request or callback, you need to follow a specific process. Here are the steps you need to take:
  1. **Construct the message string** : To construct the message string, you need to concatenate several values together in a specific order. The values are the HTTP method, the SHA512 hash of the request's body, the Content-Type header value, the timestamp as sent in the Date header, and the Request URI.s 
     * Shell
     * Python
     * PHP
     * Java
```

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```  2. **Calculate the HMAC** : Once you have the message string, you need to calculate the HMAC using the shared secret provided by your connector. 
     * Shell
     * Python
     * PHP
     * Java
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```  3. **Base64 encode the HMAC** : The final step is to Base64 encode the binary HMAC value. 
     * Shell
     * Python
     * PHP
     * Java
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```After following these three steps, you should have a valid signature that can be included in the `X-Signature` header of your API request.
### Validating callback signatures[​](https://documentation.ixopay.com/docs/guides/production/additional-security#validating-callback-signatures "Direct link to Validating callback signatures")
To validate the signature of a callback notification, you need to rebuild the signature using the shared secret provided to you, along with any other credentials, as explained in the [Computing the signature](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature) section. This calculated signature must be compared to the one provided in the `X-Signature` header of the notification request.
info
It is recommended (but not required) that merchants check the signature of callbacks since this is the only form of communication where no TLS certificate can prove the identity of IXOPAY.
To verify the signature, first, obtain the required data from the notification request and compute the signature following the steps outlined in the [Computing the signature](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature) section. If the resulting signature matches the `X-Signature` header provided in the notification request, you can trust the callback.
Here's an example that shows how to validate the signature of a callback:
  * Shell
  * Python
  * PHP
  * Java
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```Legacy signatures
In some situations, our API may generate callbacks with signatures calculated using legacy methods, involving MD5 hashing the body as signature payload instead of the standard SHA2-512. This section details this legacy behavior and how to manage it effectively.
  * Callbacks associated with a legacy signature will by default use the same signature type as the initial or related transaction.
  * If the initial or related transaction request used an MD5 sum of the body, corresponding callbacks will also employ MD5 signature calculation.
  * This behavior is governed by the setting _Postback Format Version_ , by default set to _Inherit from Request_.

For new integrations we strongly recommend adopting the current signature generation method using SHA2-512. For existing integrations, if compatible, we encourage updating your integration to leverage the recommended signature standard.
### Signing requests[​](https://documentation.ixopay.com/docs/guides/production/additional-security#signing-requests "Direct link to Signing requests")
Signing requests is an optional step that merchants can take to add an additional layer of security to their API requests. To sign a request, you need to follow the same process as described in the [Computing the signature](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature) section.
Once you have computed the signature using the steps described in [Computing the signature](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature), you need to include it in the request headers as the value of the `X-Signature` header. Here is an example code snippet in PHP that demonstrates how to sign a request:
  * Shell
  * Python
  * PHP
  * Java
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```By including the `X-Signature header` in your requests, you instruct the IXOPAY platform to verify the request's authenticity. The signature verification process is handled as follows:
  * [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api): Signature verification is mandatory for all requests sent to this API. The IXOPAY platform will only accept requests that have been properly signed with the shared secret provided to you during integration.
  * [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api): Signature verification is conditional. It will only be performed if the connector setting _API: Enable Request Signing_ is enabled for your connector. If this setting is active, the IXOPAY platform will only accept requests that have been properly signed.

### Signature testing[​](https://documentation.ixopay.com/docs/guides/production/additional-security#signature-testing "Direct link to Signature testing")
To evaluate the correctness of your signature algorithm implementation, it is recommended to employ the signature testing tool presented below. Utilizing this tool, you may execute tests to verify the accuracy of your signature algorithm in a controlled environment. The signature testing tool can be found displayed below.
### Signature testing tool
Input your signature details in the "Signature parameters" section and check if the signature output in the "Signature output" matches your generated signature.
info
This tool does **not** verify the validity of the API key, shared secret or the payload itself.
Securely use your real API keys and shared secret without any data being submitted to our servers. The testing tool operates exclusively within your browser using JavaScript.
#### Signature parameters
Shared secret
HTTP method
HTTP request body
Content-Type header
Date header [(format)](https://tools.ietf.org/html/rfc2616.html#section-3.3.1)
**Invalid timestamp!**
Request URI
**Invalid endpoint!**
Hashing algorithm
SHA-512MD5 _(deprecated)_
#### Signature output
SHA-512 hash of HTTP request body
`cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e`
HTTP method
`POST`
Content-Type header
`application/json; charset=utf-8`
Date header
`Tue, 28 Apr 2026 15:23:40 GMT`
Request URI
`/api/v3/transaction/YOUR-API-KEY-HERE/debit`
Hash HMAC Input
Based on your input, _note the line breaks_.
`POSTcf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3eapplication/json; charset=utf-8Tue, 28 Apr 2026 15:23:40 GMT/api/v3/transaction/YOUR-API-KEY-HERE/debit`
Expected signature
Data is hashed using _HMAC-SHA512_ , and the resulting binary encoded using _Base64_.
`4ICq+hfHFA81dAJHcXoP2/Pb+nkp9GljLe2S+REN0vMBhbQYNQUHIw/YxUTEIWS5Uu5WgdDEc7keMtqS0mpnAA==`
Expected headers
`X-Signature: **4ICq+hfHFA81dAJHcXoP2/Pb+nkp9GljLe2S+REN0vMBhbQYNQUHIw/YxUTEIWS5Uu5WgdDEc7keMtqS0mpnAA==**  
Date: Tue, 28 Apr 2026 15:23:40 GMT  
Content-Type: application/json; charset=utf-8`
Fix the errors, in order for the signature output to be shown!
```

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

``````

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

``````

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

SHA512_BODY="$(echo -n "$BODY" | sha512sum | cut -d " " -f1)"  

MESSAGE="$METHOD\n$SHA512_BODY\n$CONTENT_TYPE\n$DATE\n$REQUEST_URI"  

```
```

message = (  

 f"{method}\n{hashlib.sha512(body).hexdigest()}\n"  

 f"{contentType}\n{date}\n{requestUri}"  

).encode('utf-8')  

```
```

$message = $method . "\n" .  

  hash('sha512', $body) . "\n" .  

  $contentType . "\n" .  

  $date . "\n" .  

  $requestUri;  

```
```

MessageDigest sha512 = MessageDigest.getInstance("SHA-512");  

byte[] messageDigest = sha512.digest(body.getBytes(StandardCharsets.UTF_8));  

StringBuilder bodySha512 = new StringBuilder();  

for (byte b : messageDigest) {  

  bodySha512.append(String.format("%02x", b));  

}  

  

String message = method + "\n" +  

  bodySha512 + "\n" +  

  contentType + "\n" +  

  date + "\n" +  

  requestUri;  

```
```

HMAC=$(echo -n "$MESSAGE" | openssl dgst -sha512 -binary -hmac "$SHARED_SECRET")  

```
```

hmac_digest = hmac.new(sharedSecret.encode('utf-8'), message, hashlib.sha512).digest()  

```
```

$hmac = hash_hmac('sha512', $message, $sharedSecret, true);  

```
```

String hmacAlgorithm = "HmacSHA512";  

Mac mac = Mac.getInstance(hmacAlgorithm);  

SecretKeySpec secretKeySpec = new SecretKeySpec(  

  sharedSecret.getBytes(StandardCharsets.UTF_8), hmacAlgorithm);  

mac.init(secretKeySpec);  

  

byte[] hmac = mac.doFinal(data);  

```
```

SIGNATURE=$(echo -n "$HMAC" | base64 -w 0)  

```
```

signature = base64.b64encode(hmac_digest).decode('utf-8')  

```
```

$signature = base64_encode($hmac);  

```
```

final String signature = Base64.getEncoder().encodeToString(hmac);  

```
```

## See other languages  

```
```

shared_secret = os.environ["SHARED_SECRET"]  

date = request.headers.get('Date')  

request_method = request.method  

request_uri = request.full_path  

content_type = request.headers.get('Content-Type')  

body = request.get_data()  

  

## Compute the expected signature  

expected_signature = signature(request_method, body, content_type, date, request_uri,  

                               shared_secret)  

  

## Compare the computed signature with the one from the X-Signature header  

received_signature = request.headers.get('X-Signature')  

if received_signature != expected_signature:  

    # The signature is invalid, handle the error  

    # ...  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = $_SERVER['HTTP_DATE'];  

$requestMethod = $_SERVER['REQUEST_METHOD'];  

$requestUri = $_SERVER['REQUEST_URI'];  

$contentType = $_SERVER['CONTENT_TYPE'];  

$body = file_get_contents('php://input');  

  

// Compute the expected signature  

$expectedSignature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

$receivedSignature = $_SERVER['HTTP_X_SIGNATURE'];  

if ($receivedSignature !== $expectedSignature) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String date = request.getHeader("Date");  

String requestMethod = request.getMethod();  

String requestUri = request.getRequestURI();  

String contentType = request.getContentType();  

String body = new String(request.getInputStream().readAllBytes(), StandardCharsets.UTF_8);  

  

// Compute the expected signature  

String expectedSignature = signature(requestMethod, body, contentType, date, requestUri,  

sharedSecret);  

  

// Compare the computed signature with the one from the X-Signature header  

String receivedSignature = request.getHeader("X-Signature");  

if (!expectedSignature.equals(receivedSignature)) {  

    // The signature is invalid, handle the error  

    // ...  

}  

```
```

## See other languages  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime, timezone  

  

shared_secret = os.getenv('SHARED_SECRET')  

api_key = os.getenv('API_KEY')  

  

request_uri = f'/api/v3/transaction/{api_key}/debit'  

url = "https://gateway.ixopay.com{requestUri}".format(  

    apiKey=api_key,  

    requestUri=request_uri  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

cc_token = os.environ["CC_TOKEN"]  

  

current_time = datetime.now(timezone.utc)  

date = current_time.strftime('%a, %d %b %Y %H:%M:%S GMT')  

request_method = 'POST'  

content_type = 'application/json'  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "transactionToken": cc_token,  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error"  

    }  

)  

  

signature = signature(request_method, payload, content_type, date, request_uri,  

   shared_secret)  

  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Date": date,  

    "X-Signature": signature,  

    "Authorization": "Basic {auth}".format(auth=auth),  

}  

  

response = requests.request(request_method, url, headers=headers, data=payload)  

```
```

$sharedSecret = "$SHARED_SECRET";  

$date = new DateTime('now', new DateTimeZone('UTC')))->format("D, d M Y H:i:s T");  

$requestMethod = "POST";  

$requestUri = "/api/v3/transaction/$API_KEY/debit";  

$contentType = "application/json";  

$body = '{  

  "merchantTransactionId": "your-unique-identifier",  

  "description": "Purchase description shown on credit card statement.",  

  "amount": "9.99",  

  "currency": "EUR",  

  "successUrl": "https://shop.example.org/checkout/success",  

  "cancelUrl": "https://shop.example.org/checkout/cancelled",  

  "errorUrl": "https://shop.example.org/checkout/error"  

}';  

  

$signature = signature($requestMethod, $body, $contentType, $date, $requestUri,  

  $sharedSecret);  

  

$headers = [  

    "Content-Type: $contentType",  

    "Accept: application/json",  

    "Date: $date",  

    "X-Signature: $signature",  

    "Authorization: Basic $auth"  

];  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://gateway.ixopay.com$requestUri",  

  CURLOPT_RETURNTRANSFER => true,  

  CURLOPT_ENCODING => '',  

  CURLOPT_MAXREDIRS => 10,  

  CURLOPT_TIMEOUT => 0,  

  CURLOPT_FOLLOWLOCATION => true,  

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  

  CURLOPT_CUSTOMREQUEST => $requestMethod,  

  CURLOPT_POSTFIELDS => $body,  

  CURLOPT_HTTPHEADER => $headers,  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String sharedSecret = System.getenv("SHARED_SECRET");  

String transactionToken = req.getParameter("cctoken");  

  

String date = DateTimeFormatter.RFC_1123_DATE_TIME  

  .format(LocalDateTime.now(ZoneOffset.UTC));  

String requestMethod = "POST";  

String requestUri = "/api/v3/transaction/%s/debit".format(System.getenv("API_KEY"));  

String contentType = "application/json";  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse(contentType),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"transactionToken\": \"" + transactionToken + "\"," +  

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

String signature = signature(requestMethod, body, contentType, date, requestUri,  

    sharedSecret);  

Request request = new Request.Builder()  

  .url("https://gateway.ixopay.com%s".format(requestUri))  

  .method(requestMethod, body)  

  .addHeader("Content-Type", contentType)  

  .addHeader("Accept", "application/json")  

  .addHeader("Date", date)  

  .addHeader("X-Signature", signature)  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```