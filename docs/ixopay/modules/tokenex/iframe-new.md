---
title: TokenEx iFrame - The Basics
summary: ' TokenEx iFrame  TokenEx iFrame - The Basics'
tags:
- integrate-ixopay-iframe-https-documentation-ixopay-com-modules-docs-tokenex-iframe-integrate-ixopay-iframe-direct-link-integrate-ixopay-iframe
- api
- pci
- tokenization
- tokenex
- ixopay
- iframe
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/iframe-new
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* TokenEx iFrame
  * TokenEx iFrame - The Basics

# TokenEx iFrame - The Basics
The TokenEx iFrame provides maximum flexibility by generating iFrame input elements for only the sensitive data to be tokenized or detokenized within your web form. While the form utilizing the iFrame will reside on your server, the input for the sensitive data will be replaced with an iFrame that captures or displays data within the TokenEx secure environment.
The iFrame can be used to collect virtually any dataset. Customers who wish to use the iFrame for collecting PCI data should use the "PCI" configuration option.
Once the data is collected and a token is generated, the token can be utilized with another TokenEx solution such as the TokenEx Transparent Gateway to send the detokenized value to a third party API.
![](https://documentation.ixopay.com/modules/assets/images/hosted-tokenization-iframe-033d0f75d237c28d0a81de846034020d.png)
[Watch "TokenEx iFrame Demo 2021" on YouTube](https://www.youtube.com/watch?v=QGFhNCAgFDA) Watch   

Note
To obtain your API Key used to generate the [Authentication Key](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key), please contact our Support team.
For a live demo click [HERE](https://tokenexwebdemo.azurewebsites.net/).
The live demo provides a means to see all the iframe functionality in action. You can view the various modes and modify the CSS options to test the limits of the customizability.
## How do I integrate the IXOPAY iFrame?[​](https://documentation.ixopay.com/modules/docs/tokenex/iframe-new#how-do-i-integrate-the-ixopay-iframe "Direct link to How do I integrate the IXOPAY iFrame?")
IXOPAY iFrame integration requires generating an Authentication Key server-side using your API Key, then embedding the iFrame on your page using a JavaScript configuration object that specifies your token scheme, origin, and PCI mode. Once the iFrame captures the sensitive data and tokenizes it, the resulting token is returned to your page via JavaScript events and can be submitted with your form for server-side processing.