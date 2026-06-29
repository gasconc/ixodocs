---
title: DetokenizeWithCvv
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-detokenizewithcvv
- request-https-documentation-ixopay-com-modules-api-tokenex-pci-token-servicesv-detokenizewithcvv-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-detokenizewithcvv
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * DetokenizeWithCvv

# DetokenizeWithCvv
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```**Detokenize** is used to obtain a credit card PAN represented by the corresponding token and the CVV if one has been previously associated with the token.
info
If the CacheCvv parameter is set to true, the CVV will be retained for use with a subsequent API call subject to the relevant PCI rules for CVV retention. See [CVV Retention and Retrieval](https://documentation.ixopay.com/modules/docs/tokenex/cvv-retention-retrieval)
warning
Systems that store, process, or transmit cardholder data (CHD) are "in scope" for PCI compliance. Detokenizing a credit card PAN and/or associated CVV may increase the scope of your PCI compliance.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-detokenizewithcvv#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`

  * application/json

  * Body
  * Request Example

### Body
**token** stringrequired
The token that corresponds to the data element to be returned.
**Default value:**`411111245ShO1111`
**cacheCvv** boolean
Specify `true` to retain the CVV for use with a future API call.
**Default value:**`false`
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-detokenizewithcvv#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**cvv** string
**Example:**`123`
**value** string
**Example:**`4111111111111111`
**referenceNumber** string
**Example:**`22012917371088657360`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Detokenize Successful!`
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv

```
```

{  

  "token": "411111245ShO1111",  

  "cacheCvv": "true"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```

{  

  "cvv": "123",  

  "value": "4111111111111111",  

  "referenceNumber": "22012917371088657360",  

  "success": true,  

  "error": "",  

  "message": "Detokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/DetokenizeWithCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "cacheCvv": false  
}'  

```
```
{
  "token": "411111245ShO1111",
  "cacheCvv": false
}

```