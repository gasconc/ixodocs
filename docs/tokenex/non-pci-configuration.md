---
title: Non-PCI iFrame Configuration
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  Non-PCI
  iFrame Configuration'
tags:
- json
- pci
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/non-pci-configuration
portal: tokenex
updated: '2026-05-11'
related: []
---

* TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Non-PCI iFrame Configuration

# Non-PCI iFrame Configuration
The following are the minimum required parameters for Non-PCI mode.  
| Parameter  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  |   |  
| tokenScheme  | string  | true  | Either the name (case insensitive) or the JSON value of the Token Scheme to be used (see [Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless))  |  
| authenticationKey  | string  | true  |   |  
| timestamp  | string  | true  |   |  
| origin  | string  | true  |   |  
| pci  | bool  | false  | Must be set to false to enable this mode.  |  
JavaScript
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "ASCII",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: false,  

};  

```