---
title: AssociateEncryptedCvv
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-associateencryptedcvv
- request-https-documentation-ixopay-com-modules-api-tokenex-pci-token-servicesv-associateencryptedcvv-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associateencryptedcvv
portal: ixopay-modules
updated: '2026-05-04'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * AssociateEncryptedCvv

# AssociateEncryptedCvv
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```**AssociateCVV** is used to associate an encrypted CVV with a tokenized credit card primary account number (PAN).
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associateencryptedcvv#request "Direct link to request")
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
The token to associate the CVV with.
**Default value:**`411111245ShO1111`
**encryptedCvv** stringrequired
The encrypted value of the CVV you wish to associate with the token.
**Default value:**`QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==`
**padding** string
Possible Values: PKCS1 and OAEP. PKCS1 is default.
**Default value:**`PKCS1`
**HashType** string
This field is ignored if Padding is set to PKCS1. If Padding is set to OAEP, the default value for digest is SHA1. Possible digest values: SHA1, SHA256, SHA384, SHA512.
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associateencryptedcvv#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**``
**firstSix** string
**Example:**``
**lastFour** string
**Example:**``
**referenceNumber** string
**Example:**`22012917082180846882`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Associated successfully`
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
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
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv

```
```

{  

  "token": "411111245ShO1111",  

  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w=="  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```

{  

  "token": "",  

  "firstSix": "",  

  "lastFour": "",  

  "referenceNumber": "22012917082180846882",  

  "success": true,  

  "error": "",  

  "message": "Associated successfully"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/AssociateEncryptedCvv' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "padding": "PKCS1",  
  "HashType": "string"  
}'  

```
```
{
  "token": "411111245ShO1111",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "padding": "PKCS1",
  "HashType": "string"
}

```