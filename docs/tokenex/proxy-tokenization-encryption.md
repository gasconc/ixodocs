---
title: Proxy Tokenization Encryption
summary: ' Transparent Gateway API v2  Proxy Tokenization Inboundhttps://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1  Proxy
  Tokenization Encryption'
tags:
- order-operations-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-order-operations-direct-link-order-operations
- encryption-types-supported-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-encryption-types-supported-direct-link-encryption-types-supported
- base64-encoded-aes-cbc-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-base64-encoded-aes-cbc-direct-link-base64-encoded-aes-cbc
- barclay-hybrid-encryption-signature-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-barclays-hybrid-encryption-signature-direct-link-barclay-hybrid-encryption-signature
- jwe-encryption-rsa-oaep-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-jwe-encryption-rsa-oaep-direct-link-jwe-encryption-rsa-oaep
- rsa-encryption-sha1-oaep-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-rsa-encryption-sha1-oaep-direct-link-rsa-encryption-sha1-oaep
- pgp-encryption-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-encryption-pgp-encryption-direct-link-pgp-encryption
- api
- tokenization
- tokenex
source_url: https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption
portal: tokenex
updated: '2026-05-18'
related: []
---

* Transparent Gateway API v2
  * [Proxy Tokenization (Inbound)](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1)
  * Proxy Tokenization Encryption

# Proxy Tokenization Encryption
This functionality can be leveraged if a partner API will be sending encrypted data within a payload that TokenEx will need to decrypt before performing tokenization.
warning
The data will need to be encrypted using a **TokenEx** public RSA or PGP key, unless AES encryption is being used.
## Order of Operations[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#order-of-operations "Direct link to Order of Operations")
After a third-party API sends a payload containing encrypted data to the proxy endpoint, the following steps are taken:
  1. The encrypted data is located using the Encryption RegEx specified in the Proxy Profile
  2. The encrypted data is decrypted using the relevant private key
  3. Regular Expressions to locate sensitive data (e.g. PAN, CVV, etc) are evaluated and matches are tokenized
  4. The payload containing decrypted and tokenized data is sent to the API specified in the Proxy Profile
  5. The API specified in the Proxy Profile is replies back to the Proxy endpoint
  6. If any tokens are included the reply and wrapped in three curly braces (e.g. `{{{token}}}`), they will be detokenized
  7. The reply will be sent to the originating third-party API

## Encryption Types Supported[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#encryption-types-supported "Direct link to Encryption Types Supported")
### BASE64 encoded AES 256 CBC[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#base64-encoded-aes-256-cbc "Direct link to BASE64 encoded AES 256 CBC")
Before using this functionality, an encryption profile must be created by the TokenEx Support Team so that an AES key can be associated with your TokenEx account
  * Select **AES-256-CBC** in the Encryption Operations field
  * The AES Initialization Vector (IV) must be specified in the **tx-proxy-encryption-iv** header when sent from the partner API
  * An Encryption Regex should be specified for this decryption type, unless the entire payload is the cipher text.

### Barclay’s Hybrid Encryption with Signature[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#barclays-hybrid-encryption-with-signature "Direct link to Barclay’s Hybrid Encryption with Signature")
Before using this functionality, Barclay’s public key for signature validation must be associated with the relevant Proxy Profile IDs by the TokenEx Support Team
  * Select **Barclays Hybrid Decryption w/ Signature** in the Encryption Operations field
  * An Encryption Regex should not be specified for this decryption type.
  * RegEx for PAN: `(?\<=%22cardNumber%22%3a%22)([^%]+)`

> Note: When testing, the content type of the request needs to be application/x-www-form-urlencoded and the payload will need to be formatted as such
### JWE Encryption using RSA 256 OAEP[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#jwe-encryption-using-rsa-256-oaep "Direct link to JWE Encryption using RSA 256 OAEP")
  * Select **JWE Decryption - RSA-OAEP-256** in the Encryption Operations field
  * An Encryption Regex should be specified for this decryption type, unless the entire payload is the cipher text.

### RSA Encryption using SHA1 OAEP[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#rsa-encryption-using-sha1-oaep "Direct link to RSA Encryption using SHA1 OAEP")
  * Select **RSA-OaepSHA1** in the Encryption Operations field
  * An Encryption Regex should be specified for this decryption type, unless the entire payload is the cipher text.

### PGP Encryption[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#pgp-encryption "Direct link to PGP Encryption")
  * Select **PGP** in the Encryption Operations field
  * An Encryption Regex should be specified for this decryption type, unless the entire payload is the cipher text.

  * [Order of Operations](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#order-of-operations)
  * [Encryption Types Supported](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#encryption-types-supported)
    * [BASE64 encoded AES 256 CBC](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#base64-encoded-aes-256-cbc)
    * [Barclay’s Hybrid Encryption with Signature](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#barclays-hybrid-encryption-with-signature)
    * [JWE Encryption using RSA 256 OAEP](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#jwe-encryption-using-rsa-256-oaep)
    * [RSA Encryption using SHA1 OAEP](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#rsa-encryption-using-sha1-oaep)
    * [PGP Encryption](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption#pgp-encryption)