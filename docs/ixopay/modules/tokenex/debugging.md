---
title: Debugging
summary: ' Transparent Gateway API v1'
tags:
- api
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/debugging
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* Transparent Gateway API v1
  * Debugging

# Debugging
To aid in the development process, TokenEx has enabled an echo endpoint to allow you to test Detokenization before sending the request to the gateway test server. To enable echo mode for your request, simply append the querystring "?test=true" to the URL (i.e.  for Detokenize).
If this process is successful, the value "***SUCCESS***" will appear in place of the token(see [Error Handling](https://documentation.ixopay.com/modules/docs/tokenex/error-handling)). Once the request has been tested successfully, simply remove the querystring "?test=true" from the URL.
**Approved Hosts**
Before you begin using the Transparent Gateway API, you need to check to see if TokenEx has allowed communication with the desired host. This is accomplished by making a GET request to  to obtain a list of the approved hosts.
info
If the remote API's host name is not in the list, please open a support ticket in our [Client Portal](https://documentation.ixopay.com/modules/docs/tokenex/welcome#client-portal) to have it added.