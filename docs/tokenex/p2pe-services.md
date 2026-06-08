---
title: E2EE Services
summary: ' E2EE Solutions  E2EE Services'
tags:
- api
- pci
- tokenex
source_url: https://documentation.ixopay.com/modules/docs/tokenex/p2pe-services
portal: tokenex
updated: '2026-06-08'
related: []
---

* E2EE Solutions
  * E2EE Services

# E2EE Services
E2EE Services allows customers to provide encrypted data from a point-of-interaction (POI) device such as a payment terminal. TokenEx will decrypt the data and tokenize the PAN. Our platform is device agnostic and supports both the PIN and Data block variants of [DUKPT](https://en.wikipedia.org/wiki/Derived_unique_key_per_transaction). Prior to testing this functionality, TokenEx will need to create an encryption profile for your account. For production use, the production key will need to be loaded on the TokenEx HSM. Please contact your project team for specific information related to your chosen P2PE device.
**These API methods cannot be used as part of a PCI-Validated P2PE solution. These methods are intended to be used as part of a non-listed (aka E2EE) solution.**
**To test this API, inject the ANSI standard TDES Test key. TokenEx has a "test" encryption profile loaded with this key for testing purposes.**