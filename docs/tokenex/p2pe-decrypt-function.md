---
title: P2PE Decrypt Function
summary: ' Transparent Gateway API v2  Invoke Functionshttps://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1  P2PE
  Decrypt Function'
tags:
- supported-encryption-algorithms-https-documentation-ixopay-com-modules-docs-tokenex-p2pe-decrypt-function-supported-encryption-algorithms-direct-link-supported-encryption-algorithms
- groups-https-documentation-ixopay-com-modules-docs-tokenex-p2pe-decrypt-function-groups-direct-link-groups
- parseable-fields-https-documentation-ixopay-com-modules-docs-tokenex-p2pe-decrypt-function-parseable-fields-direct-link-parseable-fields
- api
- pci
- tokenex
- ixopay
- gateway
source_url: https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function
portal: tokenex
updated: '2026-06-22'
related: []
---

* Transparent Gateway API v2
  * [Invoke Functions](https://documentation.ixopay.com/modules/docs/tokenex/invoke-functions-1)
  * P2PE Decrypt Function

# P2PE Decrypt Function
This function can be used to decrypt data that was previously encrypted at a point-of-interaction (POI) device or payment terminal. This function can be used as part of a PCI-Validated P2PE Solution, or as part of a non-validated end-to-end encryption (E2EE) solution.
### Supported Encryption Algorithms[​](https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function#supported-encryption-algorithms "Direct link to Supported Encryption Algorithms")
This P2PE Decrypt function is intended to be used with symmetric encryption algorithms only. Supported encryption algorithms:
  * AES_128

This function also expects the provided ciphertext to be decrypted using DUKPT. Thus, along with the ciphertext, a Key Serial Number (KSN) must be provided as an input to use this function.
### Groups[​](https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function#groups "Direct link to Groups")
A group is defined as one or more invocations of the P2PE Decrypt function within a request that share the same value for the group parameter. The value itself is an arbitrary string. Groups can be used if multiple functions need to parse plaintext from the same shared ciphertext, or if more than one ciphertext needs to be decrypted and parsed within the same request.
If a function in a group contains the KSN and CIPHERTEXT parameters, it is said to be decryptable. Additional functions for the same group in the same request can extract additional fields from the same decrypted plaintext.
warning
At least one function must be decryptable within a group. Each group can have only one unique ciphertext and KSN pair.
### Parseable Fields[​](https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function#parseable-fields "Direct link to Parseable Fields")
This function can parse the decrypted plaintext, to pass individual fields within the request body to the destination API. The "FIELD" input parameter can have the following values:  
| Field Value  | Description  | Example  |  
| --- | --- | --- |  
| PAN  | The primary account number.  | 5454545454545454  |  
| NM  | Cardholder Name in track data format.  | LAST MIDDLE/FIRST  |  
| ED  | Expiration date of the payment card.  | 2401  |  
| SC  | Service Code.  | 201  |  
| DD  | Discretionary Data.  | 224840100000000725000000  |  
| T1  | Track 1 data including start and end sentinels and LRC.  | %B5454545454545454^Doe/John A^27012010000123000?  |  
| T1NS  | Track 1 data excluding start and end sentinels and LRC.  | B5454545454545454^Doe/John A^27012010000123000  |  
| T2  | Track 2 data including start and end sentinels and LRC.  | %5454545454545454^27010000123000?  |  
| T2NS  | Track 2 data excluding start and end sentinels and LRC.  | 5454545454545454^27010000123000  |  
| CVV  | The 3-4 digit security code.  | 533  |  
info
When the expiry date field is parsed (ED), you can specify the date format using the EXPDATEFORMAT parameter. Supported formats include: yyMM (default if omitted), MMyy, yyyyMM, MMyyyy, MM, yyyy, and yy.  
| Parameter Name  | Example Value  | Note  |  
| --- | --- | --- |  
| FUNCTION  | P2PEDecrypt  |  **Required**. Name of the function.  |  
| GROUP  | pan1Group  |  **Required**. Customer-defined string.  |  
| KSN  | 101720230000000200000006  |  **Required in at least one function in a group**. This alphanumeric field is output from the POI device along with the ciphertext.  |  
| CIPHERTEXT  | EA712B2752BCD5B87AA478A831481A7595AFDCDD9BC5A9A6488A   
39345D617120B2453CCF9AB0145344819320DB787FBC1C42FC1BB34   
A752D744510431B9178C8D861A75D1BC51697CBDB80C00EEFAD4C3   
767F6D463F276E3F6700C49D6E7C01269811A0258ABA1B15466CC17   
5ED58647A95A7CE237671EEF2AE393DF59A6FDF5  |  **Required in at least one function in a group**. Hexadecimal encoded ciphertext to be decrypted. Output from POI device.  |  
| FIELD  | ED  |  **Required**. The field to parse from the plaintext.  |  
| EXPDATEFORMAT  | yyMM  | **Only used when "Field" is set to "ED". ** Defaults to yyMM when omitted.  |  
| DEVICESERIALNUMBER  | 3031194953336321  |  **Required**. The serial number of the physical device that originated the ciphertext.  |  
| DEVICEFIRMWAREVERSION  | 2.1.14  |  **Optional**. Version of the firmware on your device at the time of encryption.  |  
| DUKPTKEYVARIANT  | BIDIRECTIONAL  |  **Optional**. Defaults to null if not provided.  
This parameter can have one of the three values in below, throws an error in case of any other value when not null. 
  * REQUEST
  * RESPONSE
  * BIDIRECTIONAL

 |  
  * Track Data Equivalent
  * Manual Entry
```

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

```### Response Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/p2pe-decrypt-function#response-headers "Direct link to Response Headers")
In the response that the Transparent Gateway returns from the 3rd party API, TokenEx will include a header with a TokenEx Universal Token representing the PAN (if PAN was available).
info
The returned token will use the token scheme specified in the [tx-token-scheme](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes) request header.  
| Response Header  | Example Value  |  
| --- | --- |  
| tx-token-1  | 545454UvcgHo5454  |  
| tx-token-2  | 444433SEKWRT1111  |  
```

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

```
```

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

``````

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

``````

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

```
```

{  

  "PaymentInstrument1": {  

    "name": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:NM}}}}",  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,KSN:101720230000000100000001,CIPHERTEXT:D093069FE96C60A3D3A9C19D3D8EC6EF76E66207B9D537D31A4C24D571A319D9D8EDFA5C7A605D9C3CC6320873312DE7E83A9C97F3B498722A2EC3F135899643,FIELD:PAN}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

      }  

    },  

    "serviceCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:SC}}}}",  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:DD}}}}",  

    "track1": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1}}}}",  

    "track1NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T1NS}}}}",  

    "track2": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2}}}}",  

    "track2NS": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group1,FIELD:T2NS}}}}"  

  },  

  "PaymentInstrument2": {  

    "card": {  

      "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,KSN:101720230000000100000002,CIPHERTEXT:E56821BF821DA1149CDD0A8A1D8E5C8A369D4D3A97329B73ADCF878EF9C3B661FBCFD177355A33694731592605840B08DFDE24A0504F71CA41DD603307D4719D,FIELD:PAN,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

      "expiry": {  

        "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MM,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:YY,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}",  

        "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:ED,EXPDATEFORMAT:MMyy,DUKPTKEYVARIANT:BIDIRECTIONAL}}}}"  

      }  

    },  

    "discretionaryData": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group2,FIELD:DD}}}}"  

  }  

}  

```
```

{  

  "card": {  

    "number": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,KSN:101720230000000100000003,CIPHERTEXT:65419C09071CAA1FB4F826541D825793BADE143BF1F968306832569DA4703EEB0C97CCD49CC4119D6E0D5053D1946A276B80AF9C27AA3F1188958863F948F400,FIELD:PAN}}}}",  

    "expiry": {  

      "month": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:MM}}}}",  

      "year": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED,EXPDATEFORMAT:YY}}}}",  

      "yyMM": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED}}}}",  

      "MMyy": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:ED, EXPDATEFORMAT:MMyy}}}}"  

    },  

    "securityCode": "{{{{FUNCTION:P2PEDECRYPT,GROUP:Group3,FIELD:CVV}}}}"  

  }  

}  

```