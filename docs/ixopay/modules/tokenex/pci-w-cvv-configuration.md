---
title: PCI w/ CVV Configuration
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  PCI
  w/ CVV Configuration'
tags:
- json
- pci
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/pci-w-cvv-configuration
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * PCI w/ CVV Configuration

# PCI w/ CVV Configuration
The following are the minimal required parameters for PCI w/ CVV mode.  
| Parameter  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  |   |  
| tokenScheme  | string  | true  | Either the name (case insensitive) or the JSON value of the Token Scheme to be used (see [Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless))  |  
| authenticationKey  | string  | true  |   |  
| timestamp  | string  | true  | Must be UTC  |  
| origin  | string  | true  |   |  
| pci  | bool  | true  |   |  
| cvv  | bool  | true  |   |  
| cvvContainerID  | string  | true  |   |  
JavaScript
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "123456789",  

  tokenScheme: "PCI",  

  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  

  pci: true,  

  cvv: true,  

  cvvContainerID: "CvvTextbox",  

};  

```