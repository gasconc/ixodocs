---
title: Shift4 / Finaro / Credorax
summary: ' Shift4 / Finaro / Credorax'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-shift4-creditcard-direct-link-creditcard
- footnotes-https-documentation-ixopay-com-manual-adapters-shift4-footnote-label-direct-link-footnotes
- 3d-secure
- pci
- ixopay
- mpi
- authorization
- capture
- credit-card
- merchant
source_url: https://documentation.ixopay.com/manual/adapters/shift4
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* Shift4 / Finaro / Credorax

# Shift4 / Finaro / Credorax
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/shift4#creditcard "Direct link to Creditcard")
The following parameters for the Connector need to be configured (see PCI Vault Configuration - Creditcard Finaro):
  1. Check option to **Use Test Endpoint**
  2. Fill in the mandatory **Merchant ID**
  3. Fill in the optional **Sub-Merchant ID**
  4. Fill in the mandatory **Authentication Cipher**
  5. Fill in the optional **Descriptor Merchant Name**
  6. Enable the option **Dynamic Descriptor Enabled**
  7. Check the option **Use Credorax MPI**
  8. Fill in the optional **MPI Merchant ID**
  9. Fill in the optional **MPI Merchant Name**
  10. Fill in the optional **MPI Password**
  11. Select the **MPI Host** — Test, Live, Live Fallback,
  12. Check the option **Use Credorax 3D-Secure 2.0**
  13. Fill in the optional **Default value for Multiple Capture tag**[1](https://documentation.ixopay.com/manual/adapters/shift4#user-content-fn-1)
  14. Select the **Authorization Type** - 1, 2; 1 (default) for final authorisation, 2 for pre-authorisation

![PCI Vault Configuration - Creditcard Finaro](https://documentation.ixopay.com/manual/assets/ideal-img/pci-vault-configuration-creditcard.32a9f48.1280.png)PCI Vault Configuration - Creditcard Finaro
## Footnotes[​](https://documentation.ixopay.com/manual/adapters/shift4#footnote-label "Direct link to Footnotes")
  1. **Multiple Capture tag**
Indicates the number of expected Captures
     * Only supported in Card-not-Present transactions
     * Default value is 1
     * Max value is 98
     * Min value is 2
[↩](https://documentation.ixopay.com/manual/adapters/shift4#user-content-fnref-1)

  * [Creditcard](https://documentation.ixopay.com/manual/adapters/shift4#creditcard)