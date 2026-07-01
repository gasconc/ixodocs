---
title: Proxy Tokenization (Inbound)
summary: ' Transparent Gateway API v2  Proxy Tokenization Inbound'
tags:
- proxy-profiles-https-documentation-ixopay-com-modules-docs-tokenex-proxy-tokenization-proxy-profiles-direct-link-proxy-profiles
- api
- tokenization
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Transparent Gateway API v2
  * Proxy Tokenization (Inbound)

# Proxy Tokenization (Inbound)
Proxy tokenization will receive an inbound, third-party initiated HTTP request and locate the sensitive data (using a proxy profile configuration) to be tokenized. That data will be tokenized, and the request will be sent to the client’s receiving system identified by the URL field in the proxy configuration profile.
info
Any headers sent by the third party will be forwarded to the client endpoint.
Proxy Tokenization supports the following HTTP verbs: POST
## Proxy Profiles[​](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1#proxy-profiles "Direct link to Proxy Profiles")
A Proxy Profile defines how sensitive data in your partners request body should be located, tokenized, and sanitized before it reaches your application. It also contains Proxy Keys specific to each profile and IP whitelists specific to each Proxy Key for authentication with TokenEx.
Profiles are managed through your test-my.tokenex.com and contain the following properties:
  1. Profile ID
     * This ID is used in your partner's request URL to specify the configuration profile
  2. URL
     * This is the client system destination URL where TokenEx will POST the request after sensitive data is tokenized and sanitized
  3. Token Scheme
     * The [token scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) used to tokenize PAN data
  4. Regex for PAN
     * A regular expression used to locate PAN data in your partner's request body
     * **Note:** Maximum 10 matches
  5. CVV Regex (optional)
     * A regular expression used to locate a CVV in your partner's request body
     * **Note:** If the count of CVVs and PANs are the same, the CVVs will be associated with the PANs in the order they are placed in the body. CVVs matching the regex in the proxy profile will be replaced with the default [cvv] replacement value or the value defined in the profile. If there is a mismatch between CVV and PAN counts, no CVVs are associated with tokens.
  6. CVV Replacement
     * A value to replace any CVV matches in the request body
     * If not provided, defaults to `cvv`
  7. Encryption Enabled
     * Enabling this option activates 2 additional fields:
       * Encryption RegEx - This is used to locate the encrypted data cipher text to decrypt, unless the entire payload is the cipher text.
         * **NOTE:** Please ensure that your regex specifies only the data to decrypt. This [website](http://regexstorm.net/tester) has a good tool to test your regular expressions to ensure that it is correct
       * Encryption Operations - Specify the type of action that needs to be performed on the cipher text. See the [Proxy Tokenization Encryption](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-encryption) page for more information.
  8. Bypass API key
     * Bypasses API key authentication in favor of authenticating via the IP whitelists of any API key under the profile
     * **Note:** Profiles must have at least one API key to use this feature.

In addition to the above details, each profile has its own set of Proxy Keys to authenticate requests to TokenEx from your partner. Each Proxy Key has a whitelist of CIDR ranges that are allowed to use the Proxy Profile with that particular Proxy Key. The Proxy Key can be supplied in the inbound HTTP request as a custom header value ([tx-proxy-key](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1)) or via HTTP Basic Authentication, using tx-proxy-key as the user name and the Proxy Key as the password.