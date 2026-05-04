---
title: Regex Handling
summary: ' Regex Handling'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-regex-handling-overview-direct-link-overview
- recommended-tools-https-documentation-ixopay-com-modules-docs-tokenex-regex-handling-recommended-tools-direct-link-recommended-tools
- examples-https-documentation-ixopay-com-modules-docs-tokenex-regex-handling-examples-direct-link-examples
- transparent-gateway-https-documentation-ixopay-com-modules-docs-tokenex-regex-handling-transparent-gateway-direct-link-transparent-gateway
- payment-services-https-documentation-ixopay-com-modules-docs-tokenex-regex-handling-payment-services-direct-link-payment-services
- json
- xml
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/regex-handling
portal: tokenex
updated: '2026-05-04'
related: []
---

* Appendix
  * Regex Handling

# Regex Handling
Writing regular expressions for the Transparent Gateway and Payment Services
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#overview "Direct link to Overview")
TokenEx's [Transparent Gateway](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics) and [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) products utilize regular expressions for extracting merchant-specified data for tokenization and CVV association or generation of response parameters. These products handle regexes the same way: processing data returned by the regex's **match** or **group[0]**. Use the recommended tool of your choice below to build regexes for your application's use case.
To increase the specificity of a regex, utilize positive lookaheads and lookbehind operators. If attempting to use a positive lookahead that targets a key that is not a fixed length, consider chaining regexes with variations of that key via the | (or) operator.
## Recommended Tools[​](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#recommended-tools "Direct link to Recommended Tools")
  * [.Net Regex Tester - Regex Storm](http://regexstorm.net/tester) is the closest representation to how our platform processes regular expressions.
  * [Regexr](https://regexr.com/): PCRE Engine is another favored tool, especially for sharing and troubleshooting.

## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#examples "Direct link to Examples")
### Transparent Gateway[​](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#transparent-gateway "Direct link to Transparent Gateway")
  * [Formatted JSON, capture a card number](https://regexr.com/7pdv3)
  * [Minified JSON, capture a CVV](https://regexr.com/7pdvf)

### Payment Services[​](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#payment-services "Direct link to Payment Services")
  * [Escaped JSON, capture a single letter.](https://regexr.com/7pds6)
  * [Escaped JSON, capture an object](https://regexr.com/7pdsi)
  * [URL-Encoded Query String, capture a value](https://regexr.com/7pdt1)
  * [XML, capture a word between tags](https://regexr.com/7pdt7)
  * [XML, capture elements within an element](https://regexr.com/7pdtm)

  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#overview)
  * [Recommended Tools](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#recommended-tools)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#examples)
    * [Transparent Gateway](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#transparent-gateway)
    * [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/regex-handling#payment-services)