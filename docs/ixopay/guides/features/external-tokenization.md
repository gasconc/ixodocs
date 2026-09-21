---
title: External tokenization
summary: ' External tokenization'
tags:
- token-types-https-documentation-ixopay-com-docs-guides-features-external-tokenization-token-types-direct-link-token-types
- api-access-https-documentation-ixopay-com-docs-guides-features-external-tokenization-api-access-direct-link-api-access
- connector-prerequisites-https-documentation-ixopay-com-docs-guides-features-external-tokenization-connector-prerequisites-direct-link-connector-prerequisites
- submit-externally-provisioned-token-https-documentation-ixopay-com-docs-guides-features-external-tokenization-submit-externally-provisioned-token-direct-link-submit-externally-provisioned-token
- step-obtain-token-https-documentation-ixopay-com-docs-guides-features-external-tokenization-step-obtain-token-direct-link-step-obtain-token
- values-returned-external-token-provider-never-hard-code
- values-step
- step-continue-follow-transactions-https-documentation-ixopay-com-docs-guides-features-external-tokenization-step-continue-follow-transactions-direct-link-step-continue-follow-transactions
- api
- json
source_url: https://documentation.ixopay.com/docs/guides/features/external-tokenization
portal: ixopay-dev
updated: '2026-09-21'
related: []
---

* [Features](https://documentation.ixopay.com/docs/guides/features)
  * External tokenization

# External tokenization
External tokenization lets you submit payment tokens that were provisioned outside of the [IXOPAY platform](https://www.ixopay.com) — such as tokens from Apple Pay, Google Pay, or network token service providers like Mastercard MDES and Visa VTS — directly via the PCI API.
Instead of submitting raw card data, you pass the externally provisioned token in the `paymentToken` field of a [debit](https://documentation.ixopay.com/api/pci/debit), [preauthorize](https://documentation.ixopay.com/api/pci/preauthorize), or [register](https://documentation.ixopay.com/api/pci/register) request.
Reference
For more details on  external tokenization, check out the in-depth article on [external tokenization](https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization "External tokenization reference article") in the reference.
## Token types[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#token-types "Direct link to Token types")
The `paymentToken` field accepts tokens from three sources, selected by the `type` field:  
| Source  |  `type` value  |  
| --- | --- |  
| Apple Pay  | `EXTERNAL-APPLEPAY`  |  
| Google Pay (decrypted token)  | `EXTERNAL-GOOGLEPAY`  |  
| Network token service provider (Mastercard MDES, Visa VTS)  | `EXTERNAL-NETWORK`  |  
The `type` value is case-sensitive and must be submitted in uppercase exactly as shown.
## API access[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#api-access "Direct link to API access")
The `paymentToken` field is part of the [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api). Access requires your account to be PCI-onboarded. Contact your account manager if you are not yet onboarded.
Requests must be sent to the PCI host `secure.ixopay.com` — not the gateway host `gateway.ixopay.com`. See the [testing guide](https://documentation.ixopay.com/docs/guides/getting-started/testing) for the matching sandbox configuration.
## Connector prerequisites[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#connector-prerequisites "Direct link to Connector prerequisites")
Externally provisioned tokens are only processed when the target connector is set up to accept them. Confirm the following before integrating:
  * **`EXTERNAL-NETWORK`**— the connector must be ready to process network tokens. This requires the merchant to be enrolled with the relevant card scheme (TRID assignment) and network tokenization to be enabled for the connector. See the[Network Token Services](https://documentation.ixopay.com/manual/docs/tokenization/nt) section of the user manual for the enrollment workflow and per-connector configuration.
  * **`EXTERNAL-APPLEPAY`**— Apple Pay token processing must be**enabled** in the connector's **Vault Configuration** , with the Apple Pay Merchant Identifier and Payment Processing Certificate (private key) provisioned. See [Connector → Advanced Configuration → ApplePay & Google Pay](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/applepay-googlepay) in the user manual.
  * **`EXTERNAL-GOOGLEPAY`**— Google Pay token processing must be**enabled** on the connector. See the same [ApplePay & Google Pay](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/applepay-googlepay) section in the user manual for the connector settings.

If the connector is not configured for the submitted token type, the request will be rejected. Contact support if you are unsure whether a specific connector supports a given token type.
Connector support
Not all connectors support externally provisioned tokens. Confirm compatibility with your connector's documentation or contact support before integrating.
## Submit an externally provisioned token[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#submit-an-externally-provisioned-token "Direct link to Submit an externally provisioned token")
### Step 1: Obtain the token[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-1-obtain-the-token "Direct link to Step 1: Obtain the token")
Obtain the payment token from your token source before calling the API. The `cryptogram` and `eciIndicator` are per-transaction values generated by the token source — submit them exactly as returned, never hard-code them.
  * **Apple Pay** : Decrypt the `PKPaymentToken` on your server to extract the token value, `tokenExpirationMonth`, `tokenExpirationYear`, required `tokenExpirationDay`, required `cryptogram` (from `paymentData.onlinePaymentCryptogram`), `eciIndicator` (from `paymentData.eciIndicator`), and any optional `deviceManufacturerIdentifier`.
  * **Google Pay** : Decrypt the Google Pay payment data on your server to extract the token value, `tokenExpirationMonth`, `tokenExpirationYear`, and include `cryptogram` (from `paymentMethodDetails.cryptogram`, present when the wallet's authentication method is `CRYPTOGRAM_3DS`), `eciIndicator`, and `paymentAccountReference` when available.
  * **Network token service provider** : Request a network token from your TSP (e.g., Mastercard MDES or Visa VTS) and obtain the token value, `tokenExpirationMonth`, `tokenExpirationYear`, and any available `cryptogram` (TAVV for Visa, AAV/UCAF for Mastercard), `eciIndicator`, `paymentAccountReference`, or TSP metadata fields.

Make the externally returned values available in your backend before creating the transaction request. The example below uses a network token flow and stores the external values in runtime variables for Step 2:
  * curl
  * Python
  * PHP
  * Java
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

```### Step 2: Submit a transaction[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-2-submit-a-transaction "Direct link to Step 2: Submit a transaction")
Include the token in the `paymentToken` field of a debit, preauthorize, or register request. The example below submits a debit request with a network token (`EXTERNAL-NETWORK`). Use the [preauthorize endpoint](https://documentation.ixopay.com/api/pci/preauthorize) or [register endpoint](https://documentation.ixopay.com/api/pci/register) when using those transaction types.
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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

```For Apple Pay and Google Pay, use `EXTERNAL-APPLEPAY` or `EXTERNAL-GOOGLEPAY` as the `type` value. Apple Pay additionally requires `tokenExpirationDay` and `cryptogram`. A minimal Apple Pay `paymentToken` looks like:
```

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```See the [reference](https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization) for the full field list per token type.
### Step 3: Continue with follow-up transactions[​](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-3-continue-with-follow-up-transactions "Direct link to Step 3: Continue with follow-up transactions")
Store the `uuid` returned by the initial transaction response. For follow-up API calls, use that value as `referenceUuid`.
  * After a `preauthorize`, use the stored `uuid` for later [capture](https://documentation.ixopay.com/docs/guides/payments/holding-funds#transferring-funds) or [void](https://documentation.ixopay.com/docs/guides/payments/holding-funds#releasing-held-funds) requests.
  * After a successful charge, use the stored `uuid` for [refunds](https://documentation.ixopay.com/docs/guides/payments/refunds#refunding-payments).
  * If you want to use the token for later merchant-initiated payments, start with a transaction flow that stores the payment instrument, typically the [set up future payments](https://documentation.ixopay.com/docs/guides/payments/saving#set-up-future-payments) flow, and then use the resulting `uuid` as `referenceUuid` in the later payment request. For the stored-credential flow and transaction indicators, see [Saving payment information](https://documentation.ixopay.com/docs/guides/payments/saving) and [Merchant-initiated payments](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated).
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```  * [Token types](https://documentation.ixopay.com/docs/guides/features/external-tokenization#token-types)
  * [API access](https://documentation.ixopay.com/docs/guides/features/external-tokenization#api-access)
  * [Connector prerequisites](https://documentation.ixopay.com/docs/guides/features/external-tokenization#connector-prerequisites)
  * [Submit an externally provisioned token](https://documentation.ixopay.com/docs/guides/features/external-tokenization#submit-an-externally-provisioned-token)
    * [Step 1: Obtain the token](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-1-obtain-the-token)
    * [Step 2: Submit a transaction](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-2-submit-a-transaction)
    * [Step 3: Continue with follow-up transactions](https://documentation.ixopay.com/docs/guides/features/external-tokenization#step-3-continue-with-follow-up-transactions)
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```
```

## Values returned by your external token provider — never hard-code these  

export NETWORK_TOKEN="5204740000001002"  

export TOKEN_EXPIRATION_MONTH="09"  

export TOKEN_EXPIRATION_YEAR="2031"  

export TOKEN_CRYPTOGRAM="AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

export TOKEN_ECI_INDICATOR="05"  

```
```

## Values returned by your external token provider — never hard-code these  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

```
```

<?php  

  

// Values returned by your external token provider — never hard-code these  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

```
```

// Values returned by your external token provider — never hard-code these  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$NETWORK_TOKEN",  

      "tokenExpirationMonth": "$TOKEN_EXPIRATION_MONTH",  

      "tokenExpirationYear": "$TOKEN_EXPIRATION_YEAR",  

      "cryptogram": "$TOKEN_CRYPTOGRAM",  

      "eciIndicator": "$TOKEN_ECI_INDICATOR"  

    }  

  }  

JSON  

)"  

```
```

import requests  

import json  

import base64  

import os  

  

## Values from Step 1  

network_token = "5204740000001002"  

token_expiration_month = "09"  

token_expiration_year = "2031"  

token_cryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

token_eci_indicator = "05"  

  

url = "https://secure.ixopay.com/api/v3/transaction/{apiKey}/debit".format(  

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

        "paymentToken": {  

            "type": "EXTERNAL-NETWORK",  

            "token": network_token,  

            "tokenExpirationMonth": token_expiration_month,  

            "tokenExpirationYear": token_expiration_year,  

            "cryptogram": token_cryptogram,  

            "eciIndicator": token_eci_indicator,  

        },  

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

  

// Values from Step 1  

$networkToken = "5204740000001002";  

$tokenExpirationMonth = "09";  

$tokenExpirationYear = "2031";  

$tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

$tokenEciIndicator = "05";  

  

$curl = curl_init();  

  

$auth = base64_encode("$USERNAME:$PASSWORD");  

  

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

    "description": "Purchase description shown on credit card statement.",  

    "amount": "9.99",  

    "currency": "EUR",  

    "successUrl": "https://shop.example.org/checkout/success",  

    "cancelUrl": "https://shop.example.org/checkout/cancelled",  

    "errorUrl": "https://shop.example.org/checkout/error",  

    "callbackUrl": "https://api.example.org/callback",  

    "paymentToken": {  

      "type": "EXTERNAL-NETWORK",  

      "token": "$networkToken",  

      "tokenExpirationMonth": "$tokenExpirationMonth",  

      "tokenExpirationYear": "$tokenExpirationYear",  

      "cryptogram": "$tokenCryptogram",  

      "eciIndicator": "$tokenEciIndicator"  

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

// Values from Step 1  

String networkToken = "5204740000001002";  

String tokenExpirationMonth = "09";  

String tokenExpirationYear = "2031";  

String tokenCryptogram = "AgAAAAAAIR8CQrXcIhbQAAAAAAA=";  

String tokenEciIndicator = "05";  

  

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

    "\"callbackUrl\": \"https://api.example.org/callback\"," +  

    "\"paymentToken\": {" +  

      "\"type\": \"EXTERNAL-NETWORK\"," +  

      "\"token\": \"" + networkToken + "\"," +  

      "\"tokenExpirationMonth\": \"" + tokenExpirationMonth + "\"," +  

      "\"tokenExpirationYear\": \"" + tokenExpirationYear + "\"," +  

      "\"cryptogram\": \"" + tokenCryptogram + "\"," +  

      "\"eciIndicator\": \"" + tokenEciIndicator + "\"" +  

    "}" +  

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

"paymentToken": {  

  "type": "EXTERNAL-APPLEPAY",  

  "token": "5204740000001002",  

  "tokenExpirationMonth": "09",  

  "tokenExpirationYear": "2031",  

  "tokenExpirationDay": "01",  

  "cryptogram": "AgAAAAAAIR8CQrXcIhbQAAAAAAA="  

}  

```