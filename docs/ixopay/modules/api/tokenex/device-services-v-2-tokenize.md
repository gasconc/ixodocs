---
title: Tokenize
summary: ' TokenEx API v2  Device Services P2PEhttps://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe'
tags:
- https-test-api-tokenex-com-device-tokenize
- request-https-documentation-ixopay-com-modules-api-tokenex-device-services-tokenize-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenize
portal: ixopay-modules
updated: '2026-05-04'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Device Services (P2PE)](https://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe)
  * Tokenize

# Tokenize
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```**Tokenize** is used to tokenize a credit card primary account number (PAN) encrypted on a card payment terminal or pin-pad device."
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenize#request "Direct link to request")
### Header Parameters
**tx-tokenex-id** stringrequired
Your TokenEx token vault identifier or vaultless tokenization profile.
**Default value:**`8149339711073860`
**tx-apikey** stringrequired
Provides access to one or more functions in the TokenEx API.
**Default value:**`9nRH8CsmeV0hxjV4EFqlyzycGMuRjJsqksTY9BEv`
**tx-token-scheme** stringrequired
The name or the numerical value of the TokenEx [token scheme](https://documentation.ixopay.com/docs/tokenex/universal-token-schemes) to be used to tokenize the data.
**Default value:**`PCI`
**tx-dual-decryption** boolean
Set to _true_ if the data payload is dual encrypted on a device such as the MagTek tDynamo.
**Default value:**`false`
**tx-include-track-details** boolean
Set to _true_ to get the cardholder name and expiration date from the track data if is dual encrypted on a device such as the MagTek tDynamo.
**Default value:**`false`
**tx-use-pin-variant** boolean
Set to _true_ if MSR ENCRYPTION VARIANT is set to PIN Encryption and the data is dual encrypted on a device such as the MagTek tDynamo.
**Default value:**`false`

  * application/json

  * Body
  * Request Example

### Body
**encryptionProfile** stringrequired
The name of the Encryption Profile that should be used to decrypt the `encryptedTrack`.
**Default value:**`EncryptionProfileName`
**ksn** stringrequired
The Key Serial Number used for DUKPT.
**requestFormat** stringrequired
Format used in the request. Valid values: Base64, Hex.
**Default value:**`Base64`
**encryptedTrack** stringrequired
The encrypted Track 1 data from the device payload (location is device specific).
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenize#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Default
  * Response with tx-Include-track-details

**Schema**
oneOf
    * Default
    * Response with tx-Include-track-details
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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```  * curl
  * python
  * go
  * nodejs
  * php
  * java

  * CURL
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
tx-token-scheme — headerrequired
Show optional parameters
tx-dual-decryption — header--- true false
tx-include-track-details — header--- true false
tx-use-pin-variant — header--- true false
Body
  * Example (from schema)
  * Request Example
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/Tokenize

```
```

{  

  "encryptionProfile": "",  

  "ksn": "",  

  "requestFormat": "Base64X",  

  "encryptedTrack": "wYoIUp3UIfkeKskemE"  

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

{  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<card holders name here>",  

  "expiration": "<card expiration here>",  

  "token": "693008da-9a73-4918-a1f5-03b6fb867c1c",  

  "referenceNumber": "21042212110512863701",  

  "success": true,  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/Tokenize' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "string",  
  "requestFormat": "Base64",  
  "encryptedTrack": "string"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "string",
  "requestFormat": "Base64",
  "encryptedTrack": "string"
}

```