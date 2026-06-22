---
title: CVV Only Mode Configuration
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  CVV
  Only Mode Configuration'
tags:
- generating-authentication-key-cvv-only-mode-https-documentation-ixopay-com-modules-docs-tokenex-cvv-only-mode-configuration-generating-authentication-key-cvv-only-mode-direct-link-generating-authentication-key-cvv-only-mode
- json
- pci
- hmac
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration
portal: tokenex
updated: '2026-06-22'
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
| cardType  | string  | true  | In CVV Only mode, a card type must be provided to validate the CVV length.  |  
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

```  * [Generating the Authentication Key for CVV Only Mode](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#generating-the-authentication-key-for-cvv-only-mode)
  * [CVV Only Mode Configuration Object](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration#cvv-only-mode-configuration-object)
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