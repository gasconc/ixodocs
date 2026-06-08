---
title: Using the iFrame
summary: ' TokenEx iFrame  Using the iFrame'
tags:
- json
- tokenex
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/using-the-iframe
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* TokenEx iFrame
  * Using the iFrame

# Using the iFrame
After you have completed the steps above and rendered the iFrame, all communication between your site and the iFrame occurs using postMessage. The iFrame will send a JSON object to the parent window with **events** containing information regarding the state of the iFrame, and the parent window interacts with the iFrame via **functions**.