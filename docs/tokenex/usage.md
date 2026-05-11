---
title: Usage
summary: ' Mobile Solutions'
tags:
- api
- json
- tokenex
- merchant
source_url: ''
portal: tokenex
updated: '2026-05-11'
related: []
---

* Mobile Solutions
  * Usage

# Usage
To use the TokenEx Mobile API, you will need to construct a JSON payload to be submitted via HTTP POST to the appropriate endpoint. As part of that payload, you will be required to construct an **Authentication Key** based on the information required for the service call (more on that below). All requests require a TokenEx ID, Timestamp, and Authentication Key, as defined below:  
| Parameter  | Data Type  | Description  |  
| --- | --- | --- |  
| TokenExID  | string  | Your TokenEx ID.  |  
| Timestamp  | string  | The timestamp (UTC) when the hash is generated, in `yyyyMMddHHmmss` format.  |  
| AuthenticationKey  | string  | The Authentication Key generated on the merchant's server.  |  
info
In addition to the parameters listed above, each endpoint has their own required parameters, which are detailed in their respective sections.