---
title: iFrame Modes
summary: ' TokenEx iFrame  iFrame Modes'
tags:
- pci
- tokenization
- tokenex
- ixopay
- iframe
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/iframe-modes
portal: tokenex
updated: '2026-06-29'
related: []
---

* TokenEx iFrame
  * iFrame Modes

# iFrame Modes
There are five modes available when utilizing the Tokenization iFrame:  
| Mode  | Description  |  
| --- | --- |  
| PCI  | Utilized for collecting PCI data. (See [PCI Configuration](https://documentation.ixopay.com/modules/docs/tokenex/pci-configuration))  |  
| CVV Only Mode  | Utilized for collecting the CVV for a new authorize, purchase, or verify call made to the gateway for an existing token. (See [CVV Only Mode Configuration](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration))  |  
| PCI w/ CVV  | Utilized for collecting PCI data along with the CVV. The CVV is used during the first authorize, purchase, or verify call made to the gateway. (See [PCI w/ CVV Configuration](https://documentation.ixopay.com/modules/docs/tokenex/pci-w-cvv-configuration))  |  
| Non-PCI  | Utilized for collecting Non-PCI data such as Social Security Numbers, Names, Birthdays. (See [Non-PCI Configuration](https://documentation.ixopay.com/modules/docs/tokenex/non-pci-configuration))  |  
| Detokenization Mode  | Utilized to display a detokenized data element. (See [Detokenization Configuration](https://documentation.ixopay.com/modules/docs/tokenex/detokenize))  |