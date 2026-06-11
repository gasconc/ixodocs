---
title: Creating the iFrame
summary: ' TokenEx iFrame  Creating the iFrame'
tags:
- implementation-steps-https-documentation-ixopay-com-modules-docs-tokenex-creating-iframe-implementation-steps-direct-link-implementation-steps
- browser-support-https-documentation-ixopay-com-modules-docs-tokenex-creating-iframe-browser-support-direct-link-browser-support
- cors-sri-https-documentation-ixopay-com-modules-docs-tokenex-creating-iframe-cors-sri-direct-link-cors-sri
- environments-https-documentation-ixopay-com-modules-docs-tokenex-creating-iframe-environments-direct-link-environments
- iframe-min-https-documentation-ixopay-com-modules-docs-tokenex-creating-iframe-iframe-v382minjs-direct-link-iframe-min
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* TokenEx iFrame
  * Creating the iFrame

# Creating the iFrame
## Implementation Steps[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#implementation-steps "Direct link to Implementation Steps")
Setting up the iFrame consists of three steps:
  1. Generating an **[Authentication Key](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key)**
  2. Creating an **[iFrame Configuration Object](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object)**
  3. Loading the iFrame into the DOM using the **TokenEx Iframe JS Library**. To test out the iFrame, the following script must be included into your page from this URL: 

Heads up!
You must include the link to this file from TokenEx servers and not self-host this file.
## Browser support[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#browser-support "Direct link to Browser support")
The TokenEx iFrame is supported on any web browser that supports HTML 5
## CORS and SRI[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#cors-and-sri "Direct link to CORS and SRI")
TokenEx supports **Cross-Origin Resource Sharing** ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS "CORS")) and **Subresource Integrity** ([SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity "SRI")).
If using an SRI, it is highly recommended that it is used with a version specific iFrame JavaScript file. Otherwise any development updates made to the Iframe will cause the SRI to no longer be valid.
## Environments[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#environments "Direct link to Environments")
  * Test
  * US Production
  * EU Production
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```## Latest Versions[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#latest-versions "Direct link to Latest Versions")
### Iframe-v3.82.min.js[​](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#iframe-v382minjs "Direct link to Iframe-v3.82.min.js")
  * Test
  * US Production
  * EU Production
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```For previous versions and releases, visit our [release notes page](https://documentation.ixopay.com/releases).
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```For previous versions and releases, visit our [release notes page](https://documentation.ixopay.com/releases).
  * TokenEx iFrame
  * Creating the iFrame
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```For previous versions and releases, visit our [release notes page](https://documentation.ixopay.com/releases).
  * [Implementation Steps](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#implementation-steps)
  * [Browser support](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#browser-support)
  * [CORS and SRI](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#cors-and-sri)
  * [Environments](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#environments)
  * [Latest Versions](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#latest-versions)
    * [Iframe-v3.82.min.js](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe#iframe-v382minjs)
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```
```

<script src="https://test-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script src="https://eu1-htp.tokenex.com/iframe/iframe-v3.min.js"></script>  

```
```

<script  

  src="https://test-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-QT6QYUDcTVjaMAEo/gBop5LPSEiaBSaPtRBFVb86N/M63adc0F6Z2AV5DPYFnR8I"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-BEJClKBa7+9KFNQJ9lnia5+taTAttB2aSEcQe95XPg+/J/z6RFNvtxdnAw4Uj/nT"  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://eu1-htp.tokenex.com/Iframe/iframe-v3.82.min.js"  

  integrity="sha384-kT9OttfeFZs3lC9gb1TLgilbAAAyFNqNFn9cc5/NL8OlbgEA1YLcNvJLwqmg/4d4"  

  crossorigin="anonymous"  

></script>  

```For previous versions and releases, visit our [release notes page](https://documentation.ixopay.com/releases).