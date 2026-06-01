---
title: 3DS Device Fingerprinting
summary: ' 3-D Secure Authentication  3DS Device Fingerprinting'
tags:
- tokenex-iframe-https-documentation-ixopay-com-modules-docs-tokenex-secure-device-fingerprinting-tokenex-iframe-direct-link-tokenex-iframe
- success-https-documentation-ixopay-com-modules-docs-tokenex-secure-device-fingerprinting-success-direct-link-success
- api
- json
- webhook
- 3ds
- pci
- pci-dss
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* 3-D Secure Authentication
  * 3DS Device Fingerprinting

# 3DS Device Fingerprinting
Associating Client Browser Attributes with a 3DS Transaction ID.
Device fingerprinting is the association of client browser attributes with a specific transaction. This fits into the 3DS flow prior to a 3DS Authentications call. Device fingerprinting can be used within the PCI or PCI w/ CVV mode of the [TokenEx iFrame](https://documentation.ixopay.com/modules/docs/tokenex/iframe-new) or built into your own checkout workflow.
When device fingerprinting is used, the authentication request will also include information about the cardholder’s browser. Although this may seem like duplicative work, the device fingerprint is obtained via a script provided by the ACS, while the browser data in the authentication request comes from the merchant. The ACS then looks for a match by comparing the device fingerprint with the browser data from the authentication request. Since the browser information is retrieved through remote JavaScript calls, it is recommended to gather the required browser data for the authentication request simultaneously with the device fingerprinting.
## TokenEx iFrame[​](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#tokenex-iframe "Direct link to TokenEx iFrame")
The iFrame [configuration object](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object) has three optional fields:  
| Property  | Type  | Description  |  
| --- | --- | --- |  
| use3DS  | boolean  | Triggers device fingerprinting process  |  
| threeDSMethodNotificationUrl  | string  | Fully-qualified endpoint to receive notification following Device Fingerprinting. Required if use3DS is true  |  
| enforceLuhnCompliance  | boolean  | True or False. If omitted, defaults to true. Set to False to bypass luhn checks in PCI or PCI w/ CVV modes. **Co-Branded 3DS test cards are not luhn compliant.**  |  
The API key used to generate the authenticationKey must have the 3DS permission enabled. Contact Support to enable this permission.
When the PAN is tokenized, a SupportedVersions call is processed in the background. That SupportedVersions response is included in the Tokenize response as `ThreeDSecureResponse`. If the `ThreeDSecureResponse` has a `threeDSMethodUrl`, device fingerprinting can be performed and the browser attributes are associated with the `ThreeDSecureResponse`'s `threeDSServerTransID`. If device fingerprinting can be performed, a hidden iframe is added to the same container housing the existing PAN iframe. The hidden iframe loads a script which associates the browser attributes with the `threeDSServerTransID` and then sends a base64 encoded notification to the `threeDSMethodNotificationUrl`.
The `threeDSServerTransID` should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field and the ACS will take the browser attributes into account when determining whether to issue a challenge.
### Success Example[​](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#success-example "Direct link to Success Example")
A successful device fingerprinting will generate an iFrame Notice event, the tokenize response will have a `threeDSecureResponse` containing a `threeDSMethodUrl`, and a notification will be sent to the `threeDSMethodNotificationUrl`. Upon receipt of the notification, include `MethodCompletionIndicator` as 1 (successful) in the Authentications request.  
If a notification is not received within 10 seconds of the TokenEx iFrame notice indicating device fingerprinting success, an unknown issue has occurred in the client's browser and the `MethodCompletionIndicator` should be included as 2 (not successful) in the Authentications request.
  * Device Fingerprinting Notice
  * Tokenize response with threeDSecureResponse
  * Notification sent to threeDSMethodNotificationUrl
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```### Failure Example[​](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#failure-example "Direct link to Failure Example")
When device fingerprinting is not supported for a PAN or when another error occurs, a notice will be generated and the tokenize response's `threeDSecureResponse` will contain the error response. If the Tokenize response's `threeDSecureResponse` contains a value for `threeDSMethodURL`, set the Authentication request's `MethodCompletionIndicator` as `2` (device fingerprinting did not successfully complete); if `threeDSecureResponse.threeDSMethodURL` is not present, then set `MethodCompletionIndicator` to `3` (device fingerprinting URL is unavailable).
  * Device Fingerprinting Notice
  * Tokenize response with threeDSecureResponse
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```## Outside the TokenEx iFrame[​](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#outside-the-tokenex-iframe "Direct link to Outside the TokenEx iFrame")
When a checkout flow does not include the TokenEx iFrame or more control is needed, follow the below steps to add device fingerprinting to the page.
  1. Execute an API call to [ThreeDSecure/SupportedVersions](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions). If device fingerprinting is supported by the card issuer, the `threeDSecureResponse` will contain a `threeDSMethodURL`. Retrieve the `threeDSMethodURL` and the `threeDSServerTransID` from the response. If a `threeDSMethodURL` is not present, include `MethodCompletionIndicator` as 3 (unavailable) in the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request.
  2. Post a form to the `threeDSMethodURL`. The form parameter is `threeDSMethodData`. The content of that parameter should be a base64-encoded json object containing the `threeDSServerTransID` and an endpoint to receive a notification (steps 2a and 2b below) when device fingerprinting is completed. A script will be returned.
     * Step 2a - JSON
     * Step 2b - base64 encoded JSON
     * Example Step 2 Response Script
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```  3. Load that script into a hidden iframe within the customer's browser. This script (example above) will retrieve miscellaneous browser attributes of the card issuer's choice. The response to the above script is another script (example below) which upon execution will post to the merchant-defined `threeDSMethodNotificationURL` from Step 2a's JSON above.
     * Example notification script
     * Example notification
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```  4. Upon receipt of the notification, include `MethodCompletionIndicator` as 1 (successful) in the Authentications request. If the notification is not received within 10 seconds of the script execution in Step 3, close the hidden iframe and include `MethodCompletionIndicator` as 2 (not successful) in the Authentications request.

The `threeDSServerTransID`should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field and the ACS will take the browser attributes into account when determining whether to issue a challenge.
PCI DSS 4.0 Requirements for Payment Page Scripts
While the PCI DSS 4.0 Requirement 6.4.3 to inventory and verify integrity of scripts executed on a payment page goes into effect on the 31st of March 2025, the scripts performing 3DS functionality are not subject to that requirement. More information can be found on the [PCI SSC website](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/how-does-pci-dss-requirement-6-4-3-apply-to-3ds-scripts-called-from-a-merchant-check-out-page-as-part-of-3ds-processing/).
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```The `threeDSServerTransID`should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field and the ACS will take the browser attributes into account when determining whether to issue a challenge.
PCI DSS 4.0 Requirements for Payment Page Scripts
While the PCI DSS 4.0 Requirement 6.4.3 to inventory and verify integrity of scripts executed on a payment page goes into effect on the 31st of March 2025, the scripts performing 3DS functionality are not subject to that requirement. More information can be found on the [PCI SSC website](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/how-does-pci-dss-requirement-6-4-3-apply-to-3ds-scripts-called-from-a-merchant-check-out-page-as-part-of-3ds-processing/).
  * 3-D Secure Authentication
  * 3DS Device Fingerprinting
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```The `threeDSServerTransID`should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field and the ACS will take the browser attributes into account when determining whether to issue a challenge.
PCI DSS 4.0 Requirements for Payment Page Scripts
While the PCI DSS 4.0 Requirement 6.4.3 to inventory and verify integrity of scripts executed on a payment page goes into effect on the 31st of March 2025, the scripts performing 3DS functionality are not subject to that requirement. More information can be found on the [PCI SSC website](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/how-does-pci-dss-requirement-6-4-3-apply-to-3ds-scripts-called-from-a-merchant-check-out-page-as-part-of-3ds-processing/).
  * [TokenEx iFrame](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#tokenex-iframe)
    * [Success Example](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#success-example)
    * [Failure Example](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#failure-example)
  * [Outside the TokenEx iFrame](https://documentation.ixopay.com/modules/docs/tokenex/3-d-secure-device-fingerprinting#outside-the-tokenex-iframe)
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```
```

{ "type": "3DS Device Fingerprinting", "success": true }  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "threeDSMethodURL": "https://example.com/browser_attributes",  

      "acsStartProtocolVersion": "2.1.0",  

      "acsEndProtocolVersion": "2.1.0",  

      "threeDSServerStartVersion": "v1",  

      "threeDSServerEndVersion": "v1",  

      "directoryServerID": "M000000004",  

      "dsStartProtocolVersion": "2.1.0",  

      "dsEndProtocolVersion": "2.2.0",  

      "dsIdentifier": "SANDBOX_DS",  

      "threeDSServerTransID": "de119ede-cbe8-4117-835a-c6ec33ea602b"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

POST /{threeDSMethodNotificationUrl} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9ub3RpZmljYXRpb24ucmVjZWlwdC1lbmRwb2ludC5vcmcvbm90aWZpY2F0aW9ucyIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiZGUxMTllZGUtY2JlOC00MTE3LTgzNWEtYzZlYzMzZWE2MDJiIn0=  

```
```

{"type":"3DS Device Fingerprinting","success":false}  

```
```

{  

  "firstSix": "123456",  

  "lastFour": "1234",  

  "forterInitResponse": null,  

  "kHash": "",  

  "threeDSecureResponse": [  

    {  

      "errorCode": "4006",  

      "errorDetail": "No EMV 3DS card ranges match submitted request",  

      "errorDescription": "No matching card range data",  

      "threeDSServerTransID": "b67906f0-2ad4-4d71-bd19-09d58fac82a0",  

      "errorComponent": "S"  

    }  

  ],  

  "token": "96d3b89g-16ab-41db-afb0-6c6f5e78c7o7",  

  "referenceNumber": "21101218302348116184",  

  "tokenHMAC": "SGkhIEknbSBhbiBleGFtcGxlIHRva2VuSE1BQw==",  

  "cvvIncluded": false,  

  "cardType": "masterCard"  

}  

```
```

{  

  "threeDSMethodNotificationURL": "https://merchant-defined-webhook.merchant.com",  

  "threeDSServerTransID": "52329f00-7951-4572-9432-356298fc300c"  

}  

```
```

threeDSMethodData:ew0KICAidGhyZWVEU01ldGhvZE5vdGlmaWNhdGlvblVSTCI6ICJodHRwczovL21lcmNoYW50LWRlZmluZWQtd2ViaG9vay5tZXJjaGFudC5jb20iLA0KICAidGhyZWVEU1NlcnZlclRyYW5zSUQiOiAiNTIzMjlmMDAtNzk1MS00NTcyLTk0MzItMzU2Mjk4ZmMzMDBjIg0KfQ==  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var userAgent = window.navigator.userAgent;  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://acs-public.tp.mastercard.com/api/v1/process_browser_attributes";  

    form.appendChild(createInput("threeDSServerTransID", "4f0b1621-d950-42c8-bde1-6d760ff74868"));  

    form.appendChild(createInput("deviceInfo", userAgent));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

<script>  

  document.addEventListener("DOMContentLoaded", function () {  

    var form = document.createElement("form");  

    form.method = "POST";  

    form.action = "https://merchant-defined-webhook.merchant.com";  

    form.enctype = "application/x-www-form-urlencoded";  

    form.appendChild(createInput("threeDSMethodData", "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ=="));  

    document.body.appendChild(form);  

    form.submit();  

    document.body.removeChild(form);  

  });  

  

  function createInput(name, value) {  

    var result = document.createElement("input");  

    result.name = name;  

    result.value = value;  

    return result;  

  }  

</script>  

```
```

POST /{notification} HTTP/1.1  

Content-Type: application/x-www-form-urlencoded  

  

threeDSMethodData=eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9tZXJjaGFudC1kZWZpbmVkLXdlYmhvb2subWVyY2hhbnQuY29tIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI0ZjBiMTYyMS1kOTUwLTQyYzgtYmRlMS02ZDc2MGZmNzQ4NjgifQ==  

```The `threeDSServerTransID`should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field and the ACS will take the browser attributes into account when determining whether to issue a challenge.
PCI DSS 4.0 Requirements for Payment Page Scripts
While the PCI DSS 4.0 Requirement 6.4.3 to inventory and verify integrity of scripts executed on a payment page goes into effect on the 31st of March 2025, the scripts performing 3DS functionality are not subject to that requirement. More information can be found on the [PCI SSC website](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/how-does-pci-dss-requirement-6-4-3-apply-to-3ds-scripts-called-from-a-merchant-check-out-page-as-part-of-3ds-processing/).