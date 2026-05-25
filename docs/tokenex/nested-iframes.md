---
title: Nested iFrames
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  Nested
  iFrames'
tags:
- https-documentation-ixopay-com-modules-docs-tokenex-nested-iframes-direct-link
- hmac
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/nested-iframes
portal: tokenex
updated: '2026-05-25'
related: []
---

* TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Nested iFrames

# Nested iFrames
In the event the TokenEx iFrame is being rendered from within multiple nested iFrames, all ancestors in the chain must be provided as a comma-separated list.
warning
The parent of the TokenEx iFrame must be first in the list. The origin string used when generating the HMAC must be the same string supplied to the `origin` parameter within the [iFrame Configuration Object](https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object).
## Example[​](https://documentation.ixopay.com/modules/docs/tokenex/nested-iframes#example "Direct link to Example")
Primary origin that will be interacting with the TokenEx iFrame: `foo.com`  
Subsequent origins that will render foo.com: `bar.com`  
The **origin** string used in the HMAC would then be: `https://foo.com,https://bar.com`
HTTP
```

Origin: "https://foo.com,https://bar.com"  

```To see a live example of a nested origin, check out this [JS fiddle page](https://jsfiddle.net/jakeburcham/rk6up75h/). You can see the origin being passed in this example is `"https://fiddle.jshell.net,https://jsfiddle.net"`. This is because the page rendering the iframe (fiddle.shell.net) is itself an iframe being rendered within jsfiddle.net.
```

Origin: "https://foo.com,https://bar.com"  

```
```

Origin: "https://foo.com,https://bar.com"  

```To see a live example of a nested origin, check out this [JS fiddle page](https://jsfiddle.net/jakeburcham/rk6up75h/). You can see the origin being passed in this example is `"https://fiddle.jshell.net,https://jsfiddle.net"`. This is because the page rendering the iframe (fiddle.shell.net) is itself an iframe being rendered within jsfiddle.net.
  * TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Nested iFrames
```

Origin: "https://foo.com,https://bar.com"  

```To see a live example of a nested origin, check out this [JS fiddle page](https://jsfiddle.net/jakeburcham/rk6up75h/). You can see the origin being passed in this example is `"https://fiddle.jshell.net,https://jsfiddle.net"`. This is because the page rendering the iframe (fiddle.shell.net) is itself an iframe being rendered within jsfiddle.net.
  * [Example](https://documentation.ixopay.com/modules/docs/tokenex/nested-iframes#example)
```

Origin: "https://foo.com,https://bar.com"  

```
```

Origin: "https://foo.com,https://bar.com"  

```To see a live example of a nested origin, check out this [JS fiddle page](https://jsfiddle.net/jakeburcham/rk6up75h/). You can see the origin being passed in this example is `"https://fiddle.jshell.net,https://jsfiddle.net"`. This is because the page rendering the iframe (fiddle.shell.net) is itself an iframe being rendered within jsfiddle.net.