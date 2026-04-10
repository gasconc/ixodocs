Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * 3-D Secure connector configuration


On this page
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |  
Last updated on **Apr 10, 2026**
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |  
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |  
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * 3-D Secure connector configuration


On this page
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |  
Last updated on **Apr 10, 2026**
[Previous Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)[Next PCI data migration](https://documentation.ixopay.com/docs/reference/features/tokenization/pci-data-migration)
  * [3-D Secure 2.x configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration)
    * [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)
    * [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)
    * [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * 3-D Secure connector configuration


On this page
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |  
Last updated on **Apr 10, 2026**
# 3-D Secure connector configuration
The 3-D Secure connector configuration is an important aspect of integrating [IXOPAY platform](https://www.ixopay.com) with 3-D Secure enabled connectors. This configuration sets the operational parameters for handling and processing 3-D Secure transactions.
The configuration settings for 3-D Secure are accessible via the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint. The `vaultConfig.threeDV2Config` field in the response contains the available configuration fields.

```
{  
  "baseConfig": {  
    // other connector configurations  
  },  
  "vaultConfig": {  
    // vault connector configurations  
    "threeDV2Config": {  
      // ...  
    }  
  }  
}  

```

The fields described in this documentation should be set in the `config.vault` field of the request body when making a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) or [Connector – Update](https://documentation.ixopay.com/api/provisioning/update-connector) call.
Here's an illustrative example of a request body for a [Connector – Create](https://documentation.ixopay.com/api/provisioning/create-connector) call:

```
{  
  "name": "Example 3-D Secure Connector",  
  "adapter": "SimulatorPci",  
  "method": "Creditcard",  
  "apiKey": "example-3ds-connector",  
  "publicIntegrationKey": "XTcSyLgJ04b7cHkvKScG",  
  "sharedSecret": "V0WkgQPsHAUH4iXCsqWGYDeFKc4O6G",  
  "config": {  
    "vault": {  
      "threeDV2Config": {  
        "enabled": true,  
        "3dsOnDemand": true,  
        "acquirers": [  
          {  
            "scheme": "visa",  
            "bin": "412345",  
            "merchantId": "M123456789"  
          }  
        ],  
        "merchant": {  
          "mcc": "5944",  
          "country": "840",  
          "name": "Alex's Artisan Goods"  
        },  
        "preferredProtocolVersion": "latest",  
        "enforcePreferredProtocolVersion": false  
      }  
    }  
  }  
}  

```

The following sections provide a detailed explanation of each configuration parameter, its data type, and its function.
## 3-D Secure 2.x configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#3-d-secure-2x-configuration "Direct link to 3-D Secure 2.x configuration")
info
The list of parameters may be updated over time. To ensure you have the most recent set of parameters, make a call to the [Connector - Settings vault](https://documentation.ixopay.com/api/provisioning/get-connector-settings-vault) endpoint.
The `config.vault.threeDV2Config` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `enabled`  | required`boolean`  | Enable 3-D Secure v2.  |  
| `3dsOnDemand`  | optional`boolean?`  | Activates and retries on SCA soft-decline.  |  
| `acquirers`  | optional`array?`[[Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer)]  | An array of acquirer BINs, see [Acquirer](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer) for more details.  |  
| `merchant`  | optional`object?`[[Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant)]  | See [Merchant](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant) for more details.  |  
| `parameterConfig`  | optional`object?`[[Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration)]  | See [Parameter configuration](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration) for more details.  |  
| `mcIdentityCheck`  | optional`boolean?`  | Mastercard Identity Check Insights enabled.  |  
### Acquirer[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#acquirer "Direct link to Acquirer")
The `config.vault.threeDV2Config.acquirers[i]` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `scheme`  | required`string` _one of:_[`visa`, `mastercard`, `amex`, `jcb`, `discover`, `unionpay`, `diners`]  | Credit-card scheme.  |  
| `bin`  | required`string` Regex: `/^[0-9]{5,11}$/`  | Bank Identification Number (BIN).  |  
| `merchantId`  | required`string`  | Merchant ID (MID).  |  
### Merchant[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#merchant "Direct link to Merchant")
The `config.vault.threeDV2Config.merchant` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `mcc`  | optional`string?`  | Merchant Category Code (MCC).  |  
| `country`  | optional`string?` Regex: `/^[0-9]{3}$/`  | Merchant country code ([ISO 3166-1 **numeric**](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country code.).  |  
| `name`  | optional`string?` Regex: `/^.{0,22}$/`  | Merchant name.  |  
| `siret`  | optional`string?` Regex: `/^\d+$/`  | Systeme d'Identification du Repertoire des ETablissements (SIRET) number. Required for Carte Bancaire (CB) only.  |  
### Parameter configuration[​](https://documentation.ixopay.com/docs/reference/features/provisioning/3ds-connector-configuration#parameter-configuration "Direct link to Parameter configuration")
The `config.vault.threeDV2Config.parameterConfig` object contains the following parameters:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `challengeIndicator`  | optional`string?` _one of:_[`01`, `02`, `03`, `04`]  | Force challenge indicator. Must be one of the following: 
  * `01` - No preference
  * `02` - No challenge requested
  * `03` - Challenge requested: 3DS Requestor Preference
  * `04` - Challenge requested: Mandate

 |
