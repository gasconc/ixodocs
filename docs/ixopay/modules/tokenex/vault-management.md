---
title: Vault Management
summary: ' Reseller API  Vault Management'
tags:
- actions-https-documentation-ixopay-com-modules-docs-tokenex-vault-management-actions-direct-link-actions
- examples-https-documentation-ixopay-com-modules-docs-tokenex-vault-management-examples-direct-link-examples
- create-vault-https-documentation-ixopay-com-modules-docs-tokenex-vault-management-create-vault-direct-link-create-vault
- api
- json
- tokenex
- ixopay
- authorization
source_url: https://documentation.ixopay.com/modules/docs/tokenex/vault-management
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* Reseller API
  * Vault Management

# Vault Management
Vault management includes the ability to Create, Read, Update and Delete vaults. Once a vault is created, API keys and IP whitelists can be managed on each vault independently.
## Actions[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#actions "Direct link to Actions")  
| Action  | HTTP Method  | Route  | Description  |  
| --- | --- | --- | --- |  
| Create Vault  | POST  | /api/api/vault/  | Vault creation is limited based on the type of vaults created. Vault type configurations are managed by the TokenEx Support Team.   
  
- Vaulted Vaults can create up to 100 new vaults per rolling 30 day calendar  
- Vaultless Vaults can create up to 500 new vaults per rolling 30 day calendarUpon successful creation we will return your new TokenEx ID.  |  
| Get Vaults  | GET  | /api/api/vault/  | Request list of active TokenEx IDs. Response also includes number of vaults remaining in current rolling 30 day period.  |  
| Get Vault Details  | GET  | /api/api/vault/{TokenEx ID}  | Retrieve specific vault details including IP Whitelists, number of API keys and permissions  |  
| Update Vault  | PUT  | /api/api/vault/{TokenEx ID}  | Update the Vault Name  |  
| Delete Vault  | DELETE  | /api/api/vault/{TokenEx ID}  | Removes the TokenEx ID from your list of active TokenEx IDs. All new vault activity will error.  |  
## Examples[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#examples "Direct link to Examples")
### Create Vault[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#create-vault "Direct link to Create Vault")
  * Request
  * Response
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```Vaultless Token Schemes
For more information on `VaultlessTokenScheme` see [Universal Token Schemes — Vaultless](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless).
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```### Get Vaults[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#get-vaults "Direct link to Get Vaults")
  * Request
  * Response
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```### Get Vault Details[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#get-vault-details "Direct link to Get Vault Details")
  * Request
  * Response
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```### Update Vault[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#update-vault "Direct link to Update Vault")
  * Request
  * Response
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```### Delete Vault[​](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#delete-vault "Direct link to Delete Vault")
  * Request
  * Response
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```  * [Actions](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#actions)
  * [Examples](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#examples)
    * [Create Vault](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#create-vault)
    * [Get Vaults](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#get-vaults)
    * [Get Vault Details](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#get-vault-details)
    * [Update Vault](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#update-vault)
    * [Delete Vault](https://documentation.ixopay.com/modules/docs/tokenex/vault-management#delete-vault)
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```
```

POST /api/api/vault/ HTTP/1.1  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "Name": "string"  

  // Optional. Given a Vaultless Company, any Valid Vaultless Token Scheme.  

  "VaultlessTokenScheme": "string"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vaults": [  

    {  

      "TokenExId": "string",  

      "Name": "string",  

      "Add_Date": "string"  

    }  

  ],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

GET /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

Content-Type: application/json  

  

{  

  "Vault": {  

    "TokenExId": "string",  

    "Name": "string",  

    "Add_Date": "string"  

  },  

  "ApiKeys": ["string"],  

  "Summary": {  

    "TotalVaults": number,  

    "VaultsCreatedInLastThirtyDays": number  

  }  

}  

```
```

PUT /api/api/vault/12345  

Host: test-my.tokenex.com  

Content-Type: application/json  

Authorization: {Your Authorization Value}  

  

{  

  "name": "string"  

}  

```
```

HTTP/1.1 200 OK  

```
```

DELETE /api/api/vault/12345 HTTP/1.1  

Host: test-my.tokenex.com  

Authorization: {Your Authorization Value}  

```
```

HTTP/1.1 200 OK  

```