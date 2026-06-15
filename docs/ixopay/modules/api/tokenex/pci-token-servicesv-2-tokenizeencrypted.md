---
title: TokenizeEncrypted
summary: ' TokenEx API v2  PCI Token Serviceshttps://documentation.ixopay.com/modules/api/tokenex/pci-token-services'
tags:
- https-test-api-tokenex-com-pci-tokenizeencrypted
- request-https-documentation-ixopay-com-modules-api-tokenex-pci-token-servicesv-tokenizeencrypted-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted
portal: ixopay-modules
updated: '2026-06-15'
related: []
---

* TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * TokenizeEncrypted

# TokenizeEncrypted
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```**TokenizeEncrypted** is used to tokenize a credit card primary account number (PAN) that has been encrypted with the [TokenEx public RSA key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys). An encrypted CVV may optionally be associated with the token.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted#request "Direct link to request")
### Header Parameters
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`PCI`
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
**encryptedData** stringrequired
The encrypted value of the credit card number you wish to tokenize.
**Default value:**`LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==`
**encryptedCvv** string
The encrypted value of the CVV you wish to associate with the token.
**Default value:**`QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==`
**Padding** string
Possible Values: PKCS1 and OAEP. PKCS1 is default.
**Default value:**`PKCS1`
**Digest** string
This field is ignored if Padding is set to PKCS1. If Padding is set to OAEP, the default value for digest is SHA1. Possible digest values: SHA1, SHA256, SHA384, SHA512.
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Result

**Schema**
**token** string
**Example:**`693008da-9a73-4918-a1f5-03b6fb867c1c`
**referenceNumber** string
**Example:**`21042212110512863701`
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**message** string
**Example:**`Tokenize Successful!`
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-token-scheme — headerrequired
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted

```
```

{  

  "encryptedData": "juhkq9WH1Q5d80MphrQWAhZd8cR/JsYx6XaEBeSb9rkMh2Sm7m/HAcbRMfoqyW8KAILDmaC11EgaGzf74Mwe0nIzKEAf3aV1ibrdG2ILbtc41Kr4RhTyuGlJHy8EJ7wgGnoq3kZjOIaFEgkPEpEo5s7HqD/LuuEMtprpcHHmeyMzw+oJiil7SJEqWx2yZPdQnMmGN9dLx0U+PFFmsY5d0x82ohOQeMF/u0rIlR3tOue/TKZmGFqllpuR+aVzlooCSKAV/b6fVpP5bd0t5lELiBH4LrR9rHa4DlGPkbsP3YyEUNaktCu9wh8/MRVPqLpHMR4jd0y+VDuzJ5ocQC0kTg==",  

  "encryptedCvv": "nu+TWv3pI9AXgrbwlxmeo++J0QPS4AKgw0XDS1xY2McSUm0LhCoi6cXDGDWaePbU6F5Wwai1vtjMuby1tkMNnk8r8Te5dGx5Npsb4rf1wq53g11lBgaGEgVnXCdV/ka46Ihc+OeDgWncd8+kimKTnNeBLOLFMFfEw8MOYXpmf4xyo2u2FXT5U/OcMm8/PZjcVZMyv8thYQxq07frQrpSxYWH7Mr/mK3j2LteQoiOwQsP+ZDL+Mk0AajwGLm2e0f1YamABNaNW6htFfPvNtvnYTuUJmXKMC85fW1z+G/TdMKpX58VqQ4Xi/RCPyRD7y94zgpdIB9YQD69tiY1M5O2TQ=="  

}  

```
```

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

```
```
curl -L 'https://test-api.tokenex.com/v2/Pci/TokenizeEncrypted' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",  
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",  
  "Padding": "PKCS1",  
  "Digest": "string"  
}'  

```
```
{
  "encryptedData": "LV76mIP0zQ2vf//T7bUKVDVNzThtmdpdt2vufurABIwrleNDK9BV55cL9FNSrHmvC+57JDl/K1P9ivIsDOpU1vk815vKhrqP1jTX1MxgpZ7LFOFHF1a8RFEpkL94bxcySCcAZXi+p7WT3j+FzCvqu2Lm6P7KuKk8aJEoYA7oZ6ZWbDSggAeqHRyGnDLE5bUk6ofTDgl8BUkUkR+OvxrsBVL/HPGZzV6DXG7ICWkt66Rf+HB8IXUu1/jw46wnGnvthOaZjGCdrcHovojxJhh/2fDI6oA9/KUd6kF+sqgTldwE60ux/oBxSggXMLX8JnJXrPI8DC3MTw0iAIzOu3/0eA==",
  "encryptedCvv": "QvVi2g9KQqJS427Upm8I6cDzF0ea6Fc1/zG6p9Y4WX4DZqVe1VjFvWRamibd1h0uhBozra2+OhsHiPfKAz+rXKTsExDME5WaDO9AL3CYhrqYseNZZACUnf42BfhuzVMOO3fRbvW5lLNYfAa561PpGDL8qru6DeDnpI0YVXNSo4p9G90j8dmNnUFSZimERNShb5dhnPefkp12NxClqUBeym8yMotDRGyAX5nWATpFN17WFxL8Snm9mTglNknnUvPnlrqOvY8fZCA5dTvE2HFBqsdPPIdhiWa3P6lWWP5EmMvopmFkGAK2YuIRlhGRibooOOmXyDxOZYiXD2sV27+R0w==",
  "Padding": "PKCS1",
  "Digest": "string"
}

```