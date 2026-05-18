---
title: Vault API Key & Permission Management
summary: ' Reseller API  Vault API Key & Permission Management'
tags:
- actions-https-documentation-ixopay-com-modules-docs-tokenex-vault-api-key-permissions-actions-direct-link-actions
- permissions-https-documentation-ixopay-com-modules-docs-tokenex-vault-api-key-permissions-permissions-direct-link-permissions
- examples-https-documentation-ixopay-com-modules-docs-tokenex-vault-api-key-permissions-examples-direct-link-examples
- create-api-key-https-documentation-ixopay-com-modules-docs-tokenex-vault-api-key-permissions-create-api-key-direct-link-create-api-key
- api
- rest
- json
- 3ds
- pci
- pci-dss
source_url: https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions
portal: tokenex
updated: '2026-05-18'
related: []
---

* Reseller API
  * Vault API Key & Permission Management

# Vault API Key & Permission Management
API keys are created at the vault level and includes ability to Create, Read, Update and Delete API keys & associated permissions. Once API keys have been created, permissions can be managed for each individual key.
## Actions[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#actions "Direct link to Actions")  
| Action  | HTTP Method  | Route  | Description  |  
| --- | --- | --- | --- |  
| Create API Key  | POST  | /api/api/Vault/{TokenEx ID}/Key  | Create new vault key. Maximum 6 API keys per vault  |  
| Get Vault API Keys  | GET  | /api/api/Vault/{TokenEx ID}/Key  | Retrieve list of active vault API keys and their respective permissions.  |  
| Update API Key  | PUT  | /api/api/vault/{TokenEx ID}/key{Key ID}  | Replace existing API key permissions  |  
| Delete API Key  | DELETE  | /api/api/vault/{TokenEx ID}/key{Key ID}  | Remove API key from list of vault's active keys  |  
## Permissions[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#permissions "Direct link to Permissions")  
| Permission  | Access Points  | Description  |  
| --- | --- | --- |  
| VaultedGeneralAccess  | `APIv2`  |  General permissions required to execute core capabilities of vaulted operations. Permission Set:
  * Tokenize
  * ValidateToken
  * DeleteToken
  * AssociateCvv
  * TokenizeWithCvv
  * TokenizeFromEncryptedValues
  * AssociateEncryptedCvvWithToken
  * GetKountHashValueAndTokenize
  * GetKountHashValue

 |  
| VaultlessGeneralAccess  | `APIv2`  |  General permissions required to execute core capabilities of vaultless operations. Permission Set:
  * Tokenize
  * ValidateToken
  * DeleteToken
  * AssociateCvv
  * TokenizeWithCvv
  * TokenizeFromEncryptedValues
  * AssociateEncryptedCvvWithToken
  * GetKountHashValueAndTokenize
  * GetKountHashValue

 |  
| AccountUpdater  | `APIv2`  |  General permissions required to execute core capabilities of [Account Updater service](https://documentation.ixopay.com/modules/api/tokenex/account-updater). The Account Updater API is batch API used for getting updated card metadata such as the expiration date or account number (PAN) for a card.  |  
| BinLookup  |  `APIv2`, `iFrame`, `MobileApi`  |  General permissions required to execute core capabilities of [Bin Lookup service](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview). TokenEx will use the full PAN that we collect for tokenization to query the BIN lookup database. Support any BIN length and we return all relevant data. This provides maximum effectiveness while keeping our customer's PCI DSS scope to a minimum info When BinLookUp permission is added, it is auto applied to all eligible access points.  |  
| NetworkTokenization  | `APIv2`  |  General permissions required to execute core capabilities of [Network Tokenization](https://documentation.ixopay.com/modules/docs/tokenex/network-token-services). The Network Tokenizaton API enables TokenEx to act as an On-Behalf-Of Token Requestor (OBOTR), which enables merchants, acquirers, and payment service providers to integrate with global Token Service Providers (Visa VTS, Mastercard MDES, and American Express AETS)  |  
| FraudServices  |  `APIv2`, `iFrame`  |  General permissions required to execute core capabilities of [Kount Fraud Prevention API](https://documentation.ixopay.com/modules/api/tokenex/kount-fraud-prevention). The Kount **Fraud Prevention** API is used to generate a Kount KHASH for a credit card PAN using a TokenEx token or the PAN itself. The KHASH can then be submitted to Kount's fraud prevention platform.  |  
| ThreeDSecureGeneralAccess  |  `APIv2`, `iFrame`  |  General permissions required to execute core capabilities of [3-D Secure Authentication.](https://documentation.ixopay.com/modules/docs/tokenex/supported-versions). Prior to sending Authentication requests in Production, a merchant must reach out to their acquirer and/or Payment Service Provider and request enrollment with the card brands they plan to process through 3DS. Request the following information, as these elements will be needed to be provided in 3DS authentication calls:
  * Acquirer BINs for Visa, MasterCard, and/or American Express
  * Merchant Category Code (MCC)
  * Merchant Name assigned by the Acquiring Bank
  * Merchant ID TokenEx is able to enroll merchants with MasterCard.

 |  
| V3  | `iFrame`  |  General permissions required to execute core capabilities of [iFrame.](https://documentation.ixopay.com/modules/docs/tokenex/iframe-new). The TokenEx iFrame provides maximum flexibility by generating iFrame input elements for only the sensitive data to be tokenized or detokenized within your web form. While the form utilizing the iFrame will reside on your server, the input for the sensitive data will be replaced with an iFrame that captures or displays data within the TokenEx secure environment.  |  
| GeneralAccess  | `TGAPIv2`  |  General permissions required to execute core capabilities of [TGAPI](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics). Permission Set:
  * Tokenize
  * Detokenize
  * GetHosts

 |  
| P2PEDecrypt  | `TGAPIv2`  |  General permissions required to execute core capabilities of [P2PE](https://documentation.ixopay.com/modules/docs/tokenex/pci-validated-p2pe-overview). TokenEx PCI-Validated P2PE is part of our Universal Tokenization product suite, enabling merchants and service providers to unify payment data across in-person and digital channels.  |  
| PushTokenize  | `TGAPIv2`  |  General permissions required to execute core capabilities of [Proxy Tokenization](https://documentation.ixopay.com/modules/docs/tokenex/proxy-tokenization-1). Proxy tokenization will receive an inbound, third-party initiated HTTP request and locate the sensitive data (using a proxy profile configuration) to be tokenized. That data will be tokenized, and the request will be sent to the client’s receiving system identified by the URL field in the proxy configuration profile  |  
| AllAccess  | `PaymentServices`  |  General permissions required to execute core capabilities of [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics). Payment Services supports the use of TokenEx tokens with many [3rd-Party Payment Gateways](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters) through a single, standardized REST API format using JSON. This format reduces the time-to-market when integrating multiple gateways into your payments flow while keeping the customers' payment method PANs out of PCI scope.  |  
| MobileGeneralAccess  | `MobileApi`  |  MobileGeneralAccess enables ability for customers to access Token Services via Mobile API. This includes ability to:
  * Tokenize
  * Tokenize with CVV
  * Tokenize CVV

info This permission is required to allow access to BinLookUp along with BinLookUp permission.  |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#examples "Direct link to Examples")
### Create API Key[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#create-api-key "Direct link to Create API Key")
  * Request
  * Response
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```### Get Vault API Keys[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#get-vault-api-keys "Direct link to Get Vault API Keys")
  * Request
  * Response
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```### Update API Key Permission[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#update-api-key-permission "Direct link to Update API Key Permission")
  * Request
  * Response
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```### Delete API Key[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#delete-api-key "Direct link to Delete API Key")
  * Request
  * Response
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```  * [Actions](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#actions)
  * [Permissions](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#permissions)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#examples)
    * [Create API Key](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#create-api-key)
    * [Get Vault API Keys](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#get-vault-api-keys)
    * [Update API Key Permission](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#update-api-key-permission)
    * [Delete API Key](https://documentation.ixopay.com/modules/docs/tokenex/vault-api-key-permissions#delete-api-key)
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "New API Key",  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"]  

    // etc.  

  }  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "key": "string",  

  "description": "New API Key"  

}  

```
```

GET /api/api/vault/{tokenexid}/key HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

[  

  {  

    apiKey: "string",  

    description: "New API Key",  

    addUser: "",  

    addDate: "07/02/24 16:02",  

    permissions: {  

      APIv2: ["VaultedGeneralAccess"],  

      TGAPIv2: ["GeneralAccess"],  

    },  

  },  

  // etc.  

]  

```
```

PUT /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

Content-Type: application/json  

  

{  

  "Description": "Updated API Key", //optional  

  "Permissions": {  

    "APIv2": ["VaultedGeneralAccess"],  

    "TGAPIv2": ["GeneralAccess"],  

    "iFrame": ["V3"]  

  }  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/{tokenexid}/key/{keyid} HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```