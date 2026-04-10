  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * GetBINAndLastFour


# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

Last updated on **Apr 10, 2026**
# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * GetBINAndLastFour


# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

Last updated on **Apr 10, 2026**
[Previous AssociateEncryptedCvv](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-associateencryptedcvv)[Next DetokenizeWithCvv](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-detokenizewithcvv)
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [PCI Token Services](https://documentation.ixopay.com/modules/api/tokenex/pci-token-services)
  * GetBINAndLastFour


# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

Last updated on **Apr 10, 2026**
# GetBINAndLastFour

```
POST 
## https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour

```

**GetBINAndLastFour** is used to return the BIN range and/or last four of a tokenized credit card PAN."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`


  * application/json


### Body
**token** stringrequired
The token to perform the lookup against.
**Default value:**`411111245ShO1111`
**includeBin** boolean
Include the BIN in response.
**Default value:**`true`
**includeLastFour** boolean
Include the last 4 in response.
**Default value:**`true`
**useExtendedBIN** boolean
If set to 'true', return the first 8-digits of a PAN greater than 15-digits in length. If the PAN is 15 digits or less, only the first 6-digits will be returned.
**Default value:**`false`


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-getbinandlastfour#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Result


**Schema**
**success** boolean
**Default value:**`true`
**Example:**`true`
**error** string
**Example:**``
**referenceNumber** string
**Example:**`249142212110512863491`
**message** string
**Example:**``
**bin** string
**Example:**`483310`
**lastFour** string
**Example:**`8392`



```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```


```
{  
  "success": true,  
  "error": "",  
  "referenceNumber": "249142212110512863491",  
  "message": "",  
  "bin": "483310",  
  "lastFour": "8392"  
}  

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L 'https://test-api.tokenex.com/v2/Pci/GetBINAndLastFour' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "token": "411111245ShO1111",  
  "includeBin": true,  
  "includeLastFour": true,  
  "useExtendedBIN": false  
}'  

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
Body
  * Example (from schema)
  * Request Example



```
{
  "token": "411111245ShO1111",
  "includeBin": true,
  "includeLastFour": true,
  "useExtendedBIN": false
}

```

