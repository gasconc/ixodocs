---
title: PCI-Validated P2PE Overview
summary: ' PCI validated P2PE  PCI-Validated P2PE Overview'
tags:
- introduction-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-introduction-direct-link-introduction
- building-p2pe-solution-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-building-p2pe-solution-direct-link-building-p2pe-solution
- pci-pts-devices-supported-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-pci-pts-devices-supported-direct-link-pci-pts-devices-supported
- payment-applications-supported-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-payment-applications-supported-direct-link-payment-applications-supported
- encryption-decryption-dukpt-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-encryption-decryption-dukpt-direct-link-encryption-decryption-dukpt
- plaintext-data-format-before-encryption-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-plaintext-data-format-before-encryption-direct-link-plaintext-data-format-before-encryption
- supported-encryption-algorithms-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-supported-encryption-algorithms-direct-link-supported-encryption-algorithms
- testing-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-testing-direct-link-testing
- production-key-conveyance-https-documentation-ixopay-com-modules-docs-tokenex-pci-validated-p2pe-overview-production-key-conveyance-direct-link-production-key-conveyance
- api
source_url: https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* PCI validated P2PE
  * PCI-Validated P2PE Overview

# PCI-Validated P2PE Overview
## Introduction[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#introduction "Direct link to Introduction")
A PCI-Validated Point-to-Point Encryption (P2PE) solution offers merchants greatly reduced PCI DSS scope for in-person POS, unattended POS, MOTO POS, and other use cases where payment data is captured by a point-of-interaction (POI) device. TokenEx's PCI-Validated P2PE Solution can work with any payment gateway or processor, any PCI PTS listed payment terminal, and any PCI listed payment terminal application. TokenEx's solution is the first 100% cloud-based P2PE solution and is built to be modular. The modularity of the solution makes it easy to add new terminals, new key injection facilities (KIFs), payment processors, etc.
TokenEx PCI-Validated P2PE is part of our Universal Tokenization product suite, enabling merchants and service providers to unify payment data across in-person and digital channels. Take advantage of a truly omni-channel, processor-agnostic, and flexible format payment token. The Universal Token (representing the PAN) is returned in the response of a P2PE transaction.
info
View the TokenEx Validated P2PE Solution Listing on the PCI SSC [P2PE registry](https://listings.pcisecuritystandards.org/assessors_and_solutions/point_to_point_encryption_solutions?agree=true) by searching for "TokenEx". You can view the Solution details [here](https://listings.pcisecuritystandards.org/popups/p2pe_sol_device.php?reference=2024-01517.001).
## Building the P2PE Solution[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#building-the-p2pe-solution "Direct link to Building the P2PE Solution")
![Screenshot from PCI P2PE Program Guide](https://documentation.ixopay.com/modules/assets/images/pci-p2pe-program-guide-6e6353b00aff7778532e08e6b9e5e8d8.png)
TokenEx is the P2PE solution provider. The solution is a modular combination of other P2PE components such as the payment application on a terminal, the hardware (PCI PTS devices), and KIFs. TokenEx is responsible for the compliance of the overall solution and management of the various components and component providers. TokenEx designed the solution to make it as easy as possible to add new hardware, KIFs, or other components to the solution listing. Adding additional components to the solution requires a delta assessment and subsequent review by the PCI SSC.
### PCI PTS Devices Supported[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#pci-pts-devices-supported "Direct link to PCI PTS Devices Supported")
  * Ingenico Lane 7000
  * Ingenico Lane 8000
  * Ingenico Self 7000
  * Ingenico Self 8000
  * Ingenico Moby 5500

info
PCI PTS approved devices can be added upon request. A delta assessment is required to update the solution listing.
### Payment Applications Supported[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#payment-applications-supported "Direct link to Payment Applications Supported")
  * Ingenico Unified Payments Platform (UPP)

info
PCI approved payment applications can be added upon request. A delta assessment is required to update the solution listing.
## Encryption, Decryption, and DUKPT[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#encryption-decryption-and-dukpt "Direct link to Encryption, Decryption, and DUKPT")
P2PE uses symmetric encryption. The same key that is used for encryption on the POI device is used for decryption in the secure decryption environment. TokenEx P2PE relies on DUKPT for key derivation. Each encryption event uses a unique derived key. To facilitate decryption, a key serial number (KSN) is provided in combination with the ciphertext to be decrypted.
warning
TDEA was deprecated by NIST in 2023 and signifies that TDEA is no longer an approved block cipher. The recommended block cipher is AES.
### Plaintext Data Format Before Encryption[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#plaintext-data-format-before-encryption "Direct link to Plaintext Data Format Before Encryption")
The POI terminals that encrypt the data can be configured to format the plaintext data prior to encryption. Our solution architecture team can work with you and the hardware manufacturer to ensure that the devices are configured properly. Currently, TokenEx's P2PE Decrypt function supports the following formats:
  1. The ISO standard track data format (e.g. ISO/IEC 7813:2006) which specifies the data structure and data content of magnetic tracks 1 and 2. This format can be used even for other card entry modes. In cases where the entry mode is not swipe, this format is typically referred to as "mock track format". TokenEx supports Track 1, Track 2, or a combination of both tracks.
info
Track 1 Format Example: %B4111111111111111^DOE/JOHN F^3005543768?
![](https://documentation.ixopay.com/modules/assets/images/track1-14a473eab03c62b7f85c86f01ba6cdb2.png)
info
Track 2 Format Example: ;4111111111111111=16121019761186800000?
![](https://documentation.ixopay.com/modules/assets/images/track2-f28196255aef31ddb37aac8c85934d3b.png)
  2. TokenEx also supports another format, which is typically used for manual entry scenarios. Although, POI devices may also use mock track data format for manual entry. The format is exp date (YYMM), PAN, and optionally a CVV. The fields are separated by a pipe.
info
Manual Entry Format Example: 3005|4111111111111111|123
info
Mock Track Data Format for Manual Entry Example: %M545454554545454^MANUALLY/ENTERED^12120000001234000000?
TokenEx's P2PE Decrypt function will look for standard track 1 or track 2 data first. If track data is not detected in the decrypted plaintext, the function will expect the manual entry format.

### Supported Encryption Algorithms[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#supported-encryption-algorithms "Direct link to Supported Encryption Algorithms")
  * AES_128
  * TDES_2KEY (Upon request)
  * TDES_3KEY (Upon request)

The ciphertext and key serial number (KSN) can be passed as input parameters to the [P2PE Decrypt function](https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function) within the Transparent Gateway API v2. TokenEx will decrypt the ciphertext in our secure decryption environment and then parse elements from the ciphertext as instructed by the P2PE decrypt function.
## Testing[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#testing "Direct link to Testing")
A P2PE solution can be tested by using a standard test key. Whoever provides the payment terminals or injects the keys on the terminals can inject a standard test key which is considered non-sensitive. TokenEx already has an ANSI test AES-128 key loaded in our non-production decryption environment. Other test keys can be shared with TokenEx to be loaded. Contact your TokenEx representative to setup P2PE testing.
To use the P2PE Decrypt function within the Transparent Gateway API v2, you will need to be granted the "P2PEDecrypt" permission.
## Production Key Conveyance[​](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview#production-key-conveyance "Direct link to Production Key Conveyance")
TokenEx will generate the base derivation keys (BDKs) that will be injected on the payment terminals by the KIF(s). To deliver the production BDKs from TokenEx's decryption environment to the KIF requires an electronic key conveyance process. This key conveyance process leverages cryptography to securely transmit the BDKs using either TR31, TR34, or RSA key wrap depending on the constraints of the key receiving device (KRD). The TokenEx key custodians and security team will work with you to facilitate the production key conveyance.