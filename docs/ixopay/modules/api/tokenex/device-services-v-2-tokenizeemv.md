---
title: TokenizeEMV
summary: ' TokenEx API v2  Device Services P2PEhttps://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe'
tags:
- https-test-api-tokenex-com-device-tokenizeemv
- request-https-documentation-ixopay-com-modules-api-tokenex-device-services-tokenizeemv-request-direct-link-request
- header-parameters
- body
- api
- json
- pci
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv
portal: ixopay-modules
updated: '2026-06-29'
related: []
---

* TokenEx
  * TokenEx API v2
  * [Device Services (P2PE)](https://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe)
  * TokenizeEMV

# TokenizeEMV
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
info
The MagTek tDynamo supports three modes: SWIPE, INSERT(DIP), and CONTACTLESS (TAP)*.
This function should only be used for INSERT(DIP) and CONTACTLESS (TAP).
Contactless (Tap) Response
Not all card brands include the cardholder's name in contactless mode.
## Request[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#request "Direct link to request")
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

  * application/json

  * Body
  * Request Example

### Body
**encryptionProfile** stringrequired
The name of the Encryption Profile that should be used to decrypt the `encryptedTrack`.
**Default value:**`EncryptionProfileName`
**ksn** stringrequired
The Key Serial Number used for DUKPT.
**Default value:**`KSNValue`
**requestFormat** stringrequired
Format used in the request. Valid values: Hex.
**Default value:**`Hex`
**encryptedTrack** stringrequired
The encrypted Track data from the device (DFDF59 Tag).
**Default value:**`EncryptedTrackFromDipOrTap`
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200

200
  * application/json

  * Schema
  * Example (auto)
  * Default

**Schema**
**name** string
**Example:**``
**expiration** string
**Example:**``
**firstSix** string
**Example:**``
**lastFour** string
**Example:**``
**token** string
**Example:**``
**referenceNumber** string
**Example:**``
**success** string
**Example:**``
**error** string
**Example:**``
**message** string
**Example:**`Tokenize Successful!`
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

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
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```RequestCollapse all
Base URL
Edit
Parameters
tx-tokenex-id — headerrequired
tx-apikey — headerrequired
tx-token-scheme — headerrequired
Body
  * Example (from schema)
  * Request Example
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```
```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```
```

{  

  "encryptionProfile": "<Your Encryption Profile Name>",  

  "ksn": "<KSN Value>",  

  "requestFormat": "HEX",  

  "encryptedTrack": "<Encrypted track from DIP/TAP>"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```

{  

  "name": "<Cardholders Name>",  

  "expiration": "<Card Expiration Date>",  

  "firstSix": "<First six digits for card number>",  

  "lastFour": "<Last four digits for card number>",  

  "token": "<TokenEx Token>",  

  "referenceNumber": "<TokenEx Reference Number>",  

  "success": "<Transaction Status>",  

  "error": "",  

  "message": "Tokenize Successful!"  

}  

```
```
curl -L 'https://test-api.tokenex.com/v2/Device/TokenizeEMV' \  
-H 'Content-Type: application/json' \  
-H 'Accept: application/json' \  
-d '{  
  "encryptionProfile": "EncryptionProfileName",  
  "ksn": "KSNValue",  
  "requestFormat": "Hex",  
  "encryptedTrack": "EncryptedTrackFromDipOrTap"  
}'  

```
```
{
  "encryptionProfile": "EncryptionProfileName",
  "ksn": "KSNValue",
  "requestFormat": "Hex",
  "encryptedTrack": "EncryptedTrackFromDipOrTap"
}

```