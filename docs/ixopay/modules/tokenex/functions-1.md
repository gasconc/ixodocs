---
title: Functions
summary: ' Transparent Gateway API v1'
tags:
- api
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/functions-1
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* Transparent Gateway API v1
  * Functions

# Functions
Functions are used when an endpoint requires some additional steps be taken on detokenized data prior to their receipt. To define a Function region, encapsulate the region using four (4) braces (i.e. `{{{{ ... }}}}`).
All functions require the following base parameters:  
| Parameter  | Description  |  
| --- | --- |  
| Function  | The name of the function to invoke  |  
| Token  | The token on which the function will be invoked after detokenization  |  
info
Additional parameters are defined for each specific function below.