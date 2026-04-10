---
title: Select a TGAPI Endpoint
summary: ' Transparent Gateway API v2  Select a TGAPI Endpoint'
tags:
- api
- hmac
- tokenex
- gateway
source_url: ''
portal: ixopay-modules
updated: '2026-04-10'
related: []
---

* Transparent Gateway API v2
  * Select a TGAPI Endpoint

# Select a TGAPI Endpoint  
| I need to…  | Endpoint  |  
| --- | --- |  
| Detokenize data in a client-initiated request.  |  **Test URI** :    
**Prod URI** :    
**Prod EU URI** :   |  
| Tokenize data in the response from a client-initiated request.  |  **Test URI** :    
**Prod URI** :    
**Prod EU URI** :   |  
| Detokenize data in a client-initiated request and tokenize data in the response to that request.  |  **Test URI** :    
**Prod URI** :    
**Prod EU URI** :   |  
| Tokenize data in an inbound, third-party initiated request.  |  **Test URI** : [https://test-tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://test-tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "Test Environment")   
**Prod URI** : [https://tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "U.S. Production Environment")   
**Prod EU URI** : [https://undefined/tokenize/proxy/[ProfileID]](https://undefined/tokenize/proxy/%5BProfileID%5D "EU Production Environment")  |  
| Detokenize data in an outbound response to a third-party initiated request.  |  **Test URI** : [https://test-tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://test-tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "Test Environment")   
**Prod URI** : [https://tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "U.S. Production Environment")   
**Prod EU URI** : [https://undefined/tokenize/proxy/[ProfileID]](https://undefined/tokenize/proxy/%5BProfileID%5D "EU Production Environment")  |  
| Tokenize data in an inbound, third-party initiated request and detokenize data in the response.  |  **Test URI** : [https://test-tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://test-tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "Test Environment")   
**Prod URI** : [https://tgapi.tokenex.com/tokenize/proxy/[ProfileID]](https://tgapi.tokenex.com/tokenize/proxy/%5BProfileID%5D "U.S. Production Environment")   
**Prod EU URI** : [https://undefined/tokenize/proxy/[ProfileID]](https://undefined/tokenize/proxy/%5BProfileID%5D "EU Production Environment")  |  
| Create a hash or HMAC of a detokenized payload  |  **Test URI** : [https://test-tgapi.tokenex.com/hash?type=[HashType]](https://test-tgapi.tokenex.com/hash?type=%5BHashType%5D "Test Environment")   
**Prod URI** : [https://tgapi.tokenex.com/hash?type=[HashType]](https://tgapi.tokenex.com/hash?type=%5BHashType%5D "U.S. Production Environment")   
**Prod EU URI** : [https://undefined/hash?type=[HashType]](https://undefined/hash?type=%5BHashType%5D "EU Production Environment")  |