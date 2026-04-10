  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Device Services (P2PE)](https://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe)
  * TokenizeEMV


# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

Last updated on **Apr 10, 2026**
# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Device Services (P2PE)](https://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe)
  * TokenizeEMV


# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

Last updated on **Apr 10, 2026**
[Previous Tokenize](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenize)[Next Account Updater](https://documentation.ixopay.com/modules/api/tokenex/account-updater)
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx API v2
  * [Device Services (P2PE)](https://documentation.ixopay.com/modules/api/tokenex/device-services-p-2-pe)
  * TokenizeEMV


# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

Last updated on **Apr 10, 2026**
# TokenizeEMV

```
POST 
## https://test-api.tokenex.com/v2/Device/TokenizeEMV

```

**TokenizeEMV** is used to tokenize a credit card primary account number (PAN) encrypted on a MagTek tDynamo with a dip or a tap."
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


## Responses[​](https://documentation.ixopay.com/modules/api/tokenex/device-services-v-2-tokenizeemv#responses "Direct link to Responses")
  * 200


200
  * application/json


  * Schema
  * Example (auto)
  * Default


**Schema**
**name** string
**Example:**`<Cardholders Name>`
**expiration** string
**Example:**`<Card Expiration Date>`
**firstSix** string
**Example:**`<First six digits for card number>`
**lastFour** string
**Example:**`<Last four digits for card number>`
**token** string
**Example:**`<TokenEx Token>`
**referenceNumber** string
**Example:**`<TokenEx Reference Number>`
**success** string
**Example:**`<Transaction Status>`
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

```

  * curl
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

```

RequestCollapse all
Base URL
Edit
https://test-api.tokenex.com/v2
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

