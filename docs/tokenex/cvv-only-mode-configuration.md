---
title: CVV Only Mode Configuration
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  CVV
  Only Mode Configuration'
tags:
- generating-authentication-key-cvv-only-mode-https-documentation-ixopay-com-modules-docs-tokenex-cvv-only-mode-configuration-generating-authentication-key-cvv-only-mode-direct-link-generating-authentication-key-cvv-only-mode
- works-https-documentation-ixopay-com-modules-docs-tokenex-cvv-only-mode-configuration-works-direct-link-works
- error-handling-https-documentation-ixopay-com-modules-docs-tokenex-cvv-only-mode-configuration-error-handling-direct-link-error-handling
- api
- json
- 3ds
- pci
- hmac
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration
portal: tokenex
updated: '2026-09-28'
related: []
---

* TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * CVV Only Mode Configuration

# CVV Only Mode Configuration
CVV Only Mode allows for the CVV tied to an existing token to be updated by loading a single CVV input.
## Generating the Authentication Key for CVV Only Mode[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#generating-the-authentication-key-for-cvv-only-mode "Direct link to Generating the Authentication Key for CVV Only Mode")
For generating the Authentication Key for CVV Only Mode you will need to provide an existing token value, in place of the tokenScheme required in the normal Authentication Key.  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| tokenExID  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in `yyyyMMddHHmmss` format  |  
| token  | string  | The existing token to be associated with the provided CVV  |  
```

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```## CVV Only Mode Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#cvv-only-mode-configuration-object "Direct link to CVV Only Mode Configuration Object")
CVV Only Mode requires a slightly different configuration object than the standard iframe implementation. Specifically, the parameters "inputType" and "placeholder" are used in place of "cvvInputType" and "cvvPlaceholder" and the parameter "cvvContainerID" is no longer needed.  
| Parameter  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  |   |  
| tokenScheme  | string  | true  | Either the name (case insensitive) or the JSON value of the Token Scheme used (see [Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless))  |  
| authenticationKey  | string  | true  |   |  
| timestamp  | string  | true  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss format  |  
| origin  | string  | true  |   |  
| cvv  | bool  | true  | Must be set to true to enable this mode.  |  
| cvvOnly  | bool  | true  | Must be set to true to enable this mode.  |  
| token  | string  | true  | In CVV Only mode, the token the CVV is associated with must be provided.  |  
| cardType  | string  | true  | In CVV Only mode, a card type must be provided to validate the CVV length. Not required for the [Detokenize iFrame](https://documentation.ixopay.com/modules/docs/tokenex/detokenize).  |  
| use3DS  | bool  | false  | Triggers 3-D Secure device fingerprinting. In CVV Only Mode, the SupportedVersions lookup runs automatically when the iFrame loads, using the provided token. See [3-D Secure Device Fingerprinting in CVV Only Mode](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#3-d-secure-device-fingerprinting-in-cvv-only-mode) below.  |  
| threeDSMethodNotificationUrl  | string  | false  | Fully-qualified endpoint to receive notification following Device Fingerprinting. Required if `use3DS` is true.  |  
| enforceLuhnCompliance  | bool  | false  | Accepted in CVV Only Mode for configuration consistency across modes. It has no runtime effect in CVV Only Mode, because no PAN is entered in this mode.  |  
JavaScript
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```## 3-D Secure Device Fingerprinting in CVV Only Mode[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#3-d-secure-device-fingerprinting-in-cvv-only-mode "Direct link to 3-D Secure Device Fingerprinting in CVV Only Mode")
Merchants processing a returning customer with a stored token can trigger the full 3DS device fingerprinting flow directly from the CVV Only iFrame — no separate out-of-band integration is required.
The API key used to generate the authenticationKey must have the 3DS permission enabled. Contact Support to enable this permission.
### How it works[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#how-it-works "Direct link to How it works")
  1. Configure `use3DS: true` and a `threeDSMethodNotificationUrl` alongside the standard CVV Only Mode properties.
  2. When the iFrame loads, a SupportedVersions lookup runs automatically in the background using the token from your configuration. This is non-blocking: the CVV input renders immediately and remains usable regardless of the 3DS outcome.
  3. When the lookup completes, the iFrame raises a `3DS` event to your page containing the SupportedVersions results, including the `threeDSServerTransID` you will need for the subsequent authentication.
  4. If the response contains a `threeDSMethodURL`, device fingerprinting proceeds automatically in a hidden iframe. The cardholder's browser attributes are associated with the `threeDSServerTransID`, and a base64 encoded notification is sent to the `threeDSMethodNotificationUrl`.
  5. A `notice` event reports the outcome of device fingerprinting.

JavaScript
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```### Subscribing to the events[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#subscribing-to-the-events "Direct link to Subscribing to the events")
Register your event handlers with `on()` before calling `load()`. Handlers are not replayed, and the `error` event for an invalid configuration is raised during `load()` itself, so a handler attached after that call will not receive it.
JavaScript
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```### 3DS event payload[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#3ds-event-payload "Direct link to 3DS event payload")  
| Property  | Type  | Description  |  
| --- | --- | --- |  
| threeDSecureResponse  | array  | The SupportedVersions results, one entry per Directory Server. Each entry contains the supported protocol versions, the `threeDSMethodURL` (when device fingerprinting is supported), and the `threeDSServerTransID`.  |  
| recommended3dsVersion  | object  | The highest supported 3DS version of the three servers.  |  
| referenceNumber  | string  | The TokenEx reference number for the SupportedVersions request.  |  
JSON
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

```### Completing the authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#completing-the-authentication "Direct link to Completing the authentication")
The `threeDSServerTransID` should then be used within the [ThreeDSecure/Authentications](https://documentation.ixopay.com/modules/docs/tokenex/authentications) request in the `ServerTransactionId` field, with `MethodCompletionIndicator` set according to the fingerprinting outcome:  
| Scenario  | MethodCompletionIndicator  |  
| --- | --- |  
| Notification received at your `threeDSMethodNotificationUrl` within 10 seconds  | 1 (successful)  |  
| No notification received within 10 seconds  | 2 (not successful)  |  
| Response contained no `threeDSMethodURL` (fingerprinting not supported for this PAN)  | 3 (unavailable)  |  
### Error handling[​](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#error-handling "Direct link to Error handling")
3DS in CVV Only Mode is non-blocking: any 3DS failure leaves the CVV input fully usable.  
| Scenario  | Behavior  |  
| --- | --- |  
|  `use3DS: true` without `threeDSMethodNotificationUrl`  | The iFrame raises an `error` event (`"Invalid Config Object"` with detail `"Missing threeDSMethodNotificationUrl property"`) and does not load; no SupportedVersions call is made.  |  
| SupportedVersions lookup fails  |  `notice` event with `{ "type": "3DS Device Fingerprinting", "success": false }`.  |  
| No `threeDSMethodURL` in the response  | Device fingerprinting is skipped and a failure `notice` is raised. Set `MethodCompletionIndicator` to 3 (unavailable) in the Authentications request.  |  
| Device fingerprinting completes  |  `notice` event with `{ "type": "3DS Device Fingerprinting", "success": true }`.  |  
```

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

```
```

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

``````

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

``````

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

```
```

TokenEx ID: 123456789  

Origin: https://mysite.com  

Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  

Token: 5454545454545454  

Template: tokenExID|origin|timestamp|token  

Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  cvv: true,  

  cvvOnly: true,  

  token: "545454RZQr9d5454",  

  cardType: "mastercard",  

  use3DS: true,  

  threeDSMethodNotificationUrl: "https://mysite.com/3ds-method-notification",  

};  

```
```

iframe.on("3DS", function (data) {  

  // Raised when the on-load SupportedVersions lookup completes,  

  // before device fingerprinting begins.  

  // The threeDSServerTransID for the ThreeDSecure/Authentications  

  // request is in data.threeDSecureResponse[0].threeDSServerTransID  

  console.log(data);  

});  

  

iframe.on("notice", function (data) {  

  // Raised when device fingerprinting completes.  

  // { "type": "3DS Device Fingerprinting", "success": true | false }  

  console.log(data);  

});  

```
```

{  

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

  "recommended3dsVersion": {  

    "SANDBOX_DS": "2.2.0"  

  },  

  "referenceNumber": "21101218302348116184"  

}  

```