---
title: How to use TokenEx universal tokens
summary: ' How to …https://documentation.ixopay.com/docs/recipes/how-to  How to use
  TokenEx universal tokens'
tags:
- prerequisites-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-prerequisites-direct-link-prerequisites
- accounts-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-accounts-direct-link-accounts
- pci-api-access-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-pci-api-access-direct-link-pci-api-access
- recipe-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-recipe-direct-link-recipe
- step-gather-credentials-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-step-gather-credentials-direct-link-step-gather-credentials
- step-tokenize-tokenex-iframe-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-step-tokenize-tokenex-iframe-direct-link-step-tokenize-tokenex-iframe
- step-build-request-according-ixopay-platform-specification-https-documentation-ixopay-com-docs-recipes-tokenex-universal-tokens-step-build-request-according-ixopay-platform-specification-direct-link-step-build-request-according-ixopay-platform-specification
- api
- json
- pci
source_url: https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [How to …](https://documentation.ixopay.com/docs/recipes/how-to)
  * How to use TokenEx universal tokens

# How to use TokenEx universal tokens
This recipe helps you to combine TokenEx's universal tokens with [IXOPAY platform](https://www.ixopay.com)'s payment orchestration, enabling you to seamlessly integrate your existing TokenEx tokenization setup with IXOPAY platform's flexible payment orchestration capabilities.
Let's dive into the recipe and equip you with the combined strength of TokenEx and the IXOPAY platform to elevate your payment processing capabilities.
## Prerequisites[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#prerequisites "Direct link to Prerequisites")
Before diving into the recipe, make sure you have the following prerequisites in place:
### Set up your accounts[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#set-up-your-accounts "Direct link to Set up your accounts")
Ensure your accounts are set up correctly before proceeding:
  1. **Activate your TokenEx account** : Ensure you have an active [TokenEx](https://tokenex.com) account with access to the Universal Token Transaction API. Familiarize yourself with TokenEx's tokenization services and ensure that you have existing tokens stored within your TokenEx account.
  2. **Set up your IXOPAY platform account**: If you haven't already, [create an account](https://documentation.ixopay.com/docs/guides/getting-started/setup) with IXOPAY platform and configure it to work with your preferred payment service provider (PSP). Make sure to set up your IXOPAY platform integration settings, including API keys and endpoint URLs, to enable communication with TokenEx.

### PCI API access[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#pci-api-access "Direct link to PCI API access")
Using TokenEx universal tokens with IXOPAY platform requires that your account is activated for use with the [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api). Confirm that your TokenEx account is activated for use with the PCI Transaction API. This activation typically occurs during the setup of your IXOPAY platform account by your TokenEx representative.
## Recipe[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#recipe "Direct link to Recipe")
### Step 1 - Gather your credentials[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#step-1---gather-your-credentials "Direct link to Step 1 - Gather your credentials")
To proceed with the integration, you'll need credentials for authentication with both TokenEx and IXOPAY platform. Here's a breakdown of the required credentials:  
| Variable  | Credential  | Description  |  
| --- | --- | --- |  
| `$TOKENEX_ID`  | TokenEx ID  | Used for the TokenEx iFrame integration and the TokenEx Universal Token Transaction API.  |  
| `$TOKENEX_IFRAME_SECRET`  | TokenEx iFrame customer secret key  | Required for the TokenEx iFrame integration.  |  
| `$TOKENEX_API_KEY`  | TokenEx API key  | Necessary for accessing the TokenEx Universal Token Transaction API.  |  
| `$API_KEY`  |  IXOPAY platform connector API key  | Identifies the connector within the IXOPAY platform.  |  
| `$SHARED_SECRET`  |  IXOPAY platform connector shared secret  | Used for calculating the [signature](https://documentation.ixopay.com/docs/guides/production/additional-security).  |  
| `$USERNAME`  |  IXOPAY platform API user username  | Used for authentication within the IXOPAY platform.  |  
| `$PASSWORD`  |  IXOPAY platform API user password  | Required for authentication within the IXOPAY platform.  |  
Ensure you have all these credentials handy to seamlessly follow the integration recipe.
### Step 2 - Tokenize using the TokenEx iFrame[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#step-2---tokenize-using-the-tokenex-iframe "Direct link to Step 2 - Tokenize using the TokenEx iFrame")
Follow the documentation over at [docs.tokenex.com — TokenEx iFrame](https://docs.tokenex.com/docs/iframe-new). Here are some recommendations:
  * We recommend using the [PCI w/ CVV Configuration](https://docs.tokenex.com/docs/pci-w-cvv-configuration). However, you can continue using any existing token scheme you've already set up.
  * If you use existing tokens, tying a CVV to the token might be necessary for transactions. In that case employ the TokenEx iFrame in [CVV Only Mode Configuration](https://docs.tokenex.com/docs/cvv-only-mode-configuration).

Retrieve the token from the iFrame by calling the [`tokenenize()` function](https://docs.tokenex.com/docs/events#tokenize). Store the returned `token`, which we'll reference as `$TOKENEX_TOKEN` throughout the recipe.
### Step 3 - Build your request according to the IXOPAY platform specification[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#step-3---build-your-request-according-to-the-ixopay-platform-specification "Direct link to Step 3 - Build your request according to the IXOPAY platform specification")
Similar to the [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js#step-2-perform-transaction) integration, construct a request to the IXOPAY platform.
Send [`cardData`](https://documentation.ixopay.com/api/pci/debit) instead of a `transactionToken`.
  * The `pan` field should be the TokenEx token ID instead of the actual PAN.
  * The `cvv` field can either be:
    * The actual CVV, or
    * Any non-numeric, non-null value will attempt [CVV retrieval from the TokenEx universal token](https://docs.tokenex.com/docs/cvv-retention-retrieval).
  * For tokenized ACH bank account numbers, put the TokenEx token ID in the `extraData.accNum` field to detokenize them.

Intermediate step
This step serves as an essential intermediary stage. Please be aware that the example provided below is intended as a guide and will not function correctly in its current form due to the following reasons:
  * The `cardData.pan` field needs to contain the actual PAN instead of the TokenEx token ID.
  * The [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api) requires a signature to be included with the request, which is calculated by the platform when using TokenEx’s Universal Token Transaction API.
  * To ensure proper functionality, include a [valid `X-Signature` header](https://documentation.ixopay.com/docs/guides/production/additional-security#computing-the-signature) as per the documentation.

  * curl
  * Python
  * PHP
  * Java
```

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```### Step 4 - Proxy the request to the TokenEx Universal Token Transaction API[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#step-4---proxy-the-request-to-the-tokenex-universal-token-transaction-api "Direct link to Step 4 - Proxy the request to the TokenEx Universal Token Transaction API")
In this step, instead of directly sending the request to IXOPAY platform, we'll proxy it through the [TokenEx Universal Token Transaction API](https://docs.tokenex.com/docs/payment-orchestration) for detokenization and processing.
  1. **Update the endpoint URL:** Replace the endpoint URL in your request with the Universal Token Transaction API's detokenize endpoint.
     * Production: `https://paymentservices.tokenex.com/transaction/pci/$API_KEY/{transactionType}`
     * Test: `https://test-paymentservices.tokenex.com/transaction/pci/$API_KEY/{transactionType}`
  

PCI-enabled connectors
For PCI-enabled connectors the API endpoint for the TokenEx Universal Token Transaction API is `…/transaction/**pci**/…`. For connectors that aren't PCI-enabled, use the endpoint`…/transaction/…`
  2. **Include TokenEx Universal Token Transaction API headers:** Add the [required headers for the TokenEx Universal Token Transaction API](https://documenter.getpostman.com/view/11766591/2sA3e5dnbm#headers).
     * `tx-tokenex-id: $TOKENEX_ID`: Your TokenEx ID.
     * `tx-apikey: $TOKENEX_API_KEY`: Your TokenEx API key.
     * `tx-connector-shared-secret: $SHARED_SECRET`: Your connector shared secret.
     * `Authorization`: Keep your authorization header as-is.
     * `Date`: If your HTTP client library doesn't automatically add this header, make sure to include a [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231) compliant date.
     * `Content-Length`: If your HTTP client library doesn't automatically add this header, make sure to include the valid content length in bytes.
     * Optional:
       * `tx-cachecvv: true`: [Retain the CVV](https://docs.tokenex.com/docs/cvv-retention-retrieval) after the initial request.
       * `tx-passthrough: true`: Bypass detokenization and send verbatim request to the IXOPAY platform.
       * `tx-cvv-not-required: true`: Don't produce an error if a CVV couldn't be retrieved.
       * `X-Environment: Sandbox`: Make sure to include this if using an IXOPAY platform sandbox connector. See [Using the sandbox environment with PCI transactions](https://documentation.ixopay.com/docs/guides/getting-started/testing#using-the-sandbox-environment-with-pci-transactions) for more information.
  3. **Forward the request:** Forward the complete request, including the `cardData` section with the `$TOKENEX_TOKEN` as `cardData.pan`, to the TokenEx Universal Token Transaction API using your preferred method.
```

curl --request POST -sL \  

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```### Step 5 - [Test and deploy](https://documentation.ixopay.com/docs/guides/getting-started/testing)[​](https://documentation.ixopay.com/docs/recipes/how-to/use-tokenex-universal-tokens#step-5---test-and-deploy "Direct link to step-5---test-and-deploy")
Make sure to thoroughly test your updated payment flow before deploying it to your production environment. Once you're confident that everything is working as expected, deploy the changes to your live site.
```

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

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

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

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

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

``````

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

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

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

``````

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

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

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```
```

curl --request POST -sL \  

  --url "https://secure.ixopay.com/api/v3/transaction/${API_KEY}/debit" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  JSON  

  )"  

```
```

import requests  

import json  

import base64  

import os  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

    apiKey=os.environ["API_KEY"]  

)  

auth = base64.b64encode("%s:%s" % (os.environ["USERNAME"], os.environ["PASSWORD"]))  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031"  

        },  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://secure.ixopay.com/api/v3/transaction/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

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

String tokenExToken = req.getParameter("tokenex-token");  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://secure.ixopay.com/api/v3/transaction/%s/debit"  

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

  --url "https://paymentservices.tokenex.com/transaction/pci/${API_KEY}/debit" \  

  --header "tx-tokenex-id: $TOKENEX_ID" \  

  --header "tx-apikey: $TOKENEX_API_KEY" \  

  --header "tx-connector-shared-secret: $SHARED_SECRET" \  

  --header "Date: $(date -u +'%a, %d %b %Y %H:%M:%S GMT')" \  

  --header 'Content-Type: application/json' \  

  --header 'Accept: application/json' \  

  --header "Authorization: Basic $(echo -n "$USERNAME:$PASSWORD" | base64)" \  

  --data-raw "$(cat <<JSON  

  {  

    "merchantTransactionId": "your-unique-identifier",  

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$TOKENEX_TOKEN",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

from datetime import datetime  

  

url = "https://paymentservices.tokenex.com/transaction/pci/{apiKey}/debit".format(  

    apiKey=os.environ['API_KEY']  

)  

auth = base64.b64encode(f"{os.environ['USERNAME']}:{os.environ['PASSWORD']}")  

tokenex_token = os.environ["TOKENEX_TOKEN"]  

  

payload = json.dumps(  

    {  

        "merchantTransactionId": "your-unique-identifier",  

        "cardData": {  

            "cardHolder": "Alex Smith",  

            "pan": "%s" % (tokenex_token),  

            "cvv": "-",  

            "expirationMonth": "5",  

            "expirationYear": "2031",  

        },  

        "description": "Purchase description shown on credit card statement.",  

        "amount": "9.99",  

        "currency": "EUR",  

        "successUrl": "https://shop.example.org/checkout/success",  

        "cancelUrl": "https://shop.example.org/checkout/cancelled",  

        "errorUrl": "https://shop.example.org/checkout/error",  

    }  

)  

headers = {  

    "tx-tokenex-id": os.environ["TOKENEX_ID"],  

    "tx-apikey": os.environ["TOKENEX_API_KEY"],  

    "tx-connector-shared-secret": os.environ["SHARED_SECRET"],  

    "Date": datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT'),  

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

$tokenExToken = $_REQUEST['tokenex-token'];  

  

curl_setopt_array($curl, array(  

  CURLOPT_URL => "https://paymentservices.tokenex.com/transaction/pci/$API_KEY/debit",  

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

    "cardData": {  

      "cardHolder": "Alex Smith",  

      "pan": "$tokenExToken",  

      "cvv": "-",  

      "expirationMonth": "5",  

      "expirationYear": "2031"  

    },  

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error"  

  }  

  EOD,  

  CURLOPT_HTTPHEADER => array(  

    "tx-tokenex-id: $TOKENEX_ID",  

    "tx-apikey: $TOKENEX_API_KEY",  

    "tx-connector-shared-secret: $SHARED_SECRET",  

    "Date: " . gmdate('D, d M Y H:i:s') . ' GMT',  

    'Content-Type: application/json',  

    'Accept: application/json',  

    "Authorization: Basic $auth"  

  ),  

));  

  

$response = curl_exec($curl);  

  

curl_close($curl);  

```
```

String tokenExToken = req.getParameter("tokenex-token");  

  

DateTimeFormatter dateFormatter = DateTimeFormatter.RFC_1123_DATE_TIME  

  .withLocale(Locale.US)  

  .withZone(java.time.ZoneId.of("GMT"));  

  

OkHttpClient client = new OkHttpClient().newBuilder().build();  

RequestBody body = RequestBody.create(  

  MediaType.parse("application/json"),  

  "{" +  

    "\"merchantTransactionId\": \"your-unique-identifier\"," +  

    "\"cardData\": {" +  

      "\"cardHolder\": \"Alex Smith\"," +  

      "\"pan\": \"" + tokenExToken + "\"," +  

      "\"cvv\": \"-\"," +  

      "\"expirationMonth\": \"5\"," +  

      "\"expirationYear\": \"2031\"" +  

    "}," +  

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

  .url("https://paymentservices.tokenex.com/transaction/pci/%s/debit"  

    .format(System.getenv("API_KEY")))  

  .method("POST", body)  

  .addHeader("tx-tokenex-id", System.getenv("TOKENEX_ID"))  

  .addHeader("tx-apikey", System.getenv("TOKENEX_API_KEY"))  

  .addHeader("tx-connector-shared-secret", System.getenv("SHARED_SECRET"))  

  .addHeader("Date", dateFormatter.format(ZonedDateTime.now()))  

  .addHeader("Content-Type", "application/json")  

  .addHeader("Accept", "application/json")  

  .addHeader("Authorization", "Basic %s".format(auth))  

  .build();  

Response response = client.newCall(request).execute();  

```