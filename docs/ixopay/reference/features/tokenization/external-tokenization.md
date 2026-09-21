---
title: External tokenization
summary: ' Tokenization & PCI  External tokenization'
tags:
- supported-transaction-types-https-documentation-ixopay-com-docs-reference-features-tokenization-external-tokenization-supported-transaction-types-direct-link-supported-transaction-types
- token-types-https-documentation-ixopay-com-docs-reference-features-tokenization-external-tokenization-token-types-direct-link-token-types
- integration-notes-https-documentation-ixopay-com-docs-reference-features-tokenization-external-tokenization-integration-notes-direct-link-integration-notes
- api
- 3ds
- pci
- tokenization
- ixopay
- refund
- authorization
source_url: https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization
portal: ixopay-dev
updated: '2026-09-21'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * Tokenization & PCI
  * External tokenization

# External tokenization
External tokenization lets you submit payment credentials that were provisioned outside of the [IXOPAY platform](https://www.ixopay.com) instead of raw card data. This reference summarizes where the `paymentToken` field is supported, which token types are available, and which integration caveats apply.
Externally provisioned payment tokens are submitted via the `paymentToken` field on the [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api). The field accepts tokens from Apple Pay, Google Pay, and network token service providers.
Guide
For a detailed, step-by-step guide on integrating external tokenization, refer to the [external tokenization guide](https://documentation.ixopay.com/docs/guides/features/external-tokenization "External tokenization guide") in our guides section.
## Supported transaction types[​](https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization#supported-transaction-types "Direct link to Supported transaction types")
The `paymentToken` field is available on the following request types, sent to the PCI host `secure.ixopay.com`:  
| Transaction type  | API endpoint  |  
| --- | --- |  
| Debit  | [`POST /api/v3/transaction/{apiKey}/debit`](https://documentation.ixopay.com/api/pci/debit)  |  
| Preauthorize  | [`POST /api/v3/transaction/{apiKey}/preauthorize`](https://documentation.ixopay.com/api/pci/preauthorize)  |  
| Register  | [`POST /api/v3/transaction/{apiKey}/register`](https://documentation.ixopay.com/api/pci/register)  |  
The full `paymentToken` schema for each request type is documented in the respective API reference pages linked above.
Subsequent transaction types — [capture](https://documentation.ixopay.com/api/pci/capture), [refund](https://documentation.ixopay.com/api/pci/refund), [void](https://documentation.ixopay.com/api/pci/void), and [deregister](https://documentation.ixopay.com/api/pci/deregister) — do not require `paymentToken`. They reference the original transaction using the standard `referenceUuid` field, the same as with regular card transactions.
## Token types[​](https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization#token-types "Direct link to Token types")
The `paymentToken` field is a discriminated union on the `type` property. The three supported types are:  
|  `type` value  | Use for  |  
| --- | --- |  
| `EXTERNAL-APPLEPAY`  | Tokens from the Apple Pay payment sheet (`PKPaymentToken`)  |  
| `EXTERNAL-GOOGLEPAY`  | Decrypted tokens from the Google Pay payment sheet  |  
| `EXTERNAL-NETWORK`  | Network tokens from a token service provider (e.g., Mastercard MDES, Visa VTS)  |  
The `type` value is case-sensitive and must be uppercase.
All token types share the core fields `type`, `token`, `tokenExpirationMonth`, and `tokenExpirationYear`. Apple Pay additionally requires `tokenExpirationDay` and `cryptogram`. Google Pay and network tokens can also include authentication and token metadata such as `cryptogram`, `eciIndicator`, and `paymentAccountReference`, and network tokens support additional network-specific metadata. For the exact request schema and validation rules, see the `paymentToken` field on the [debit](https://documentation.ixopay.com/api/pci/debit), [preauthorize](https://documentation.ixopay.com/api/pci/preauthorize), and [register](https://documentation.ixopay.com/api/pci/register) API references.
## Integration notes[​](https://documentation.ixopay.com/docs/reference/features/tokenization/external-tokenization#integration-notes "Direct link to Integration notes")
**API endpoint** : Send requests to the PCI host `secure.ixopay.com`, not the gateway host `gateway.ixopay.com`. The base URL is shown on each [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api) reference page.
**Connector prerequisites** : The target connector must be configured to accept the submitted token type. Specifically:
  * `EXTERNAL-NETWORK` requires the merchant to be enrolled for network tokenization (TRID assigned) and network tokenization to be enabled on the connector.
  * `EXTERNAL-APPLEPAY` requires Apple Pay token processing to be enabled in the connector's Vault Configuration, with the Apple Pay Merchant Identifier and Payment Processing Certificate provisioned.
  * `EXTERNAL-GOOGLEPAY` requires Google Pay token processing to be enabled on the connector.

Requests submitting a token type that is not enabled on the resolved connector will be rejected. The user manual documents the enrollment workflow ([Network Token Services](https://documentation.ixopay.com/manual/docs/tokenization/nt)) and the connector-level settings ([ApplePay & Google Pay](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/applepay-googlepay)).
**Connector support** : Not all connectors support externally provisioned tokens, even when the relevant setting is enabled. Confirm compatibility with your connector's documentation or contact support before integrating.
**Server-side decryption required** : For Apple Pay and Google Pay, your server must decrypt the payment token before submitting it to the API.
**Cryptogram handling** : The cryptogram is a per-transaction authentication value generated by the token source — the Apple Pay or Google Pay 3DS cryptogram, or the TAVV/UCAF/AAV from a network token service provider. Submit it as the base64 string returned by your token source; do not decode it. For Apple Pay it is required. For Google Pay and network tokens, send the `cryptogram` field whenever your token source provides one — some connectors require it for authorization or token authentication, so omitting it can reduce compatibility or cause the request to be rejected.
**ECI indicator** : The `eciIndicator` conveys the authentication strength of the transaction (for example, Visa `05` for a fully authenticated 3DS transaction; Mastercard's equivalent is `02`). Always send the exact value returned by your token source — do not hard-code a value or copy values across schemes, since the correct code depends on both the network and the authentication outcome.
**Additional token metadata** : Where provided by the token source, include authentication metadata such as `paymentAccountReference` to maximize downstream connector compatibility.
**PCI compliance** : Because this API accepts raw token data, access requires your account to be PCI-onboarded. The [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api) explains the PCI requirements and access prerequisites. Contact your account manager if you are not yet onboarded.