---
title: Universal Token Schemes
summary: ' Universal Token Schemes'
tags:
- vaulted-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-vaulted-direct-link-vaulted
- pci-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-pci-direct-link-pci
- sixantokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-sixantokenfour-direct-link-sixantokenfour
- sixtokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-sixtokenfour-direct-link-sixtokenfour
- sixtokenfournonluhn-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-sixtokenfournonluhn-direct-link-sixtokenfournonluhn
- sixntokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-sixntokenfour-direct-link-sixntokenfour
- sixasciitokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-sixasciitokenfour-direct-link-sixasciitokenfour
- fourantokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-fourantokenfour-direct-link-fourantokenfour
- fourtokenfour-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-fourtokenfour-direct-link-fourtokenfour
- fourtokenfournonluhn-https-documentation-ixopay-com-modules-docs-tokenex-universal-token-schemes-fourtokenfournonluhn-direct-link-fourtokenfournonluhn
source_url: https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes
portal: tokenex
updated: '2026-06-01'
related: []
---

* Appendix
  * Universal Token Schemes

# Universal Token Schemes
The specifics on the types of Universal Tokens and how to use them.
Token schemes are the output formats that sensitive data can be transformed into. They can follow a 1:1 mapping, where the same token is returned for the same input data each time, or a 1:many mapping, where different tokens are generated for the same input data upon each tokenization. The schemes to be utilized are based on your organization's specific needs.
## Vaulted[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaulted "Direct link to Vaulted")
Vaulted tokenization involves storing sensitive data and its corresponding tokens in a secure, centralized database managed by TokenEx. Tokens are generated using a cryptographically secure pseudorandom number generator (CSPRNG), ensuring that they are non-sensitive and mathematically unrelated to the original data. Vaulted tokenization offers the most flexibility, as a single vault/TokenEx ID can be used with multiple token schemes and can accommodate scenarios where a unique token needs to be generated each time a given value is tokenized, rather than generating the same token. Vaulted tokenization is ideal for businesses seeking robust data management where TokenEx handles the secure storage of the sensitive information.
### PCI[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#pci "Direct link to PCI")
**Description:** This format returns an alphanumeric, length-preserving token. For inputs greater than or equal to 15 digits, the token will retain first 6 and last 4. For inputs less than 15 digits, the token will retain first 4 and last 4.  
**Input Validation:** Luhn compliant numeric values (0-9)   
**Input Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 26  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424242APT0Oa4242  |  
| 4111111111119  | 411157SGH1119  |  
### sixANTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#sixantokenfour "Direct link to sixANTOKENfour")
**Description:** This format returns an alphanumeric, upper case, length preserving token retaining the original first 6 and last 4 digits of the input data.  
**Input Validation:** Alphanumeric(a-Z,0-9)   
**Input Length:** 14-38   
**Token Mapping:** 1:1   
**JSON value:** 9  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424242HU0OIW4242  |  
### sixTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#sixtokenfour "Direct link to sixTOKENfour")
**Description:** This format will return a LUHN-compliant token retaining the original first 6 and last 4 digits of the card number.  
**Input Validation:** Numeric(0-9), Luhn compliant   
**Input Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 1  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424242925164242  |  
| 4111111111119  | 4111117641119  |  
### sixTOKENfourNonLuhn[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#sixtokenfournonluhn "Direct link to sixTOKENfourNonLuhn")
**Description:** This format will return a Non-LUHN-compliant token retaining the original first 6 and last 4 digits of the card number.  
**Input Validation:** Numeric(0-9), Luhn compliant   
**Input Length:** 13-19;   
**Token Mapping:** 1:1   
**JSON value:** 23  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424242925864242  |  
| 4111111111119  | 4111qlziM1119  |  
### sixNTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#sixntokenfour "Direct link to sixNTOKENfour")
**Description:** This format will return a numeric length preserving token retaining the original first 6 and last 4 digits of the input data.  
**Input Validation:** Numeric(0-9)   
**Input Length:** 14-38   
**Token Mapping:** 1:1   
**JSON value:** 19  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 999999999999999  | 999999685129999  |  
| 41111111111119  | 41111179461119  |  
### sixASCIITOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#sixasciitokenfour "Direct link to sixASCIITOKENfour")
**Description:** This format returns an ASCII, length preserving token retaining the original first 6 and last 4 digits of the input data.  
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 14-38   
**Token Mapping:** 1:1   
**JSON value:** 16  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 1324-123-4845796  | 1324-1TFTFO5796  |  
### fourANTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#fourantokenfour "Direct link to fourANTOKENfour")
**Description:** This format returns an alpha numeric, length preserving token retaining the original first 4 and last 4 digits of the input data. **Input Validation:** Alpha-Numeric(a-Z,0-9)  
**Input Length:** 12-38  
**Token Mapping:** 1:1  
**JSON value:** 10  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 4242ZYAV5124242  |  
### fourTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#fourtokenfour "Direct link to fourTOKENfour")
**Description:** This format will return a LUHN-compliant token retaining the original first 4 and last 4 digits of the card number.  
**Input Validation:** Numeric(0-9), Luhn compliant   
**Input Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 2  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424276225864242  |  
### fourTOKENfourNonLuhn[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#fourtokenfournonluhn "Direct link to fourTOKENfourNonLuhn")
**Description:** This format will return a Non-LUHN-compliant token retaining the original first 4 and last 4 digits of the card number.  
**Input Validation:** Numeric(0-9), Luhn compliant   
**Input Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 24  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424276925864242  |  
### fourNTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#fourntokenfour "Direct link to fourNTOKENfour")
**Description:** This format will return a numeric length preserving token retaining the original first 4 and last 4 digits of the card number.  
**Input Validation:** Numeric(0-9)   
**Input Length:** 12-38   
**Token Mapping:** 1:1   
**JSON value:** 20  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 9999999999999  | 9999017819999  |  
### fourASCIITOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#fourasciitokenfour "Direct link to fourASCIITOKENfour")
**Description:** This format returns an ASCII, length preserving token retaining the original first 4 and last 4 digits of the input data.  
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 12-38   
**Token Mapping:** 1:1   
**JSON value:** 17  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 1324-123-484  | 1324DI2-484  |  
### ANTOKEN[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#antoken "Direct link to ANTOKEN")
**Description:** This format returns an alpha numeric, length preserving token.   
**Input Validation:** Alpha-Numeric(a-Z,0-9)   
**Input Length:** 4-38   
**Token Mapping:** 1:1   
**JSON value:** 12  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 9876543210  | 5FR962FGT0  |  
### ANTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#antokenfour "Direct link to ANTOKENfour")
**Description:** This format returns an alpha numeric, length preserving token retaining the original last 4 digits of the input data.  
**Input Validation:** Alpha-Numeric(a-Z,0-9)   
**Length:** 8-38   
**Token Mapping:** 1:1   
**JSON value:** 11  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 9TY2ZYAV5124242  |  
### ANTOKENAUTO[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#antokenauto "Direct link to ANTOKENAUTO")
**Description:** This format automatically selects an ANTOKEN type token scheme that will retain the maximum number of original characters.  
**Input Validation:** Alpha-Numeric(a-Z,0-9)   
**Input Length:** 4-38   
**Token Mapping:** 1:1   
**JSON value:** 13
Character retention:   
0 to 7 characters - none are retained   
8 to 11 characters - last 4 are retained   
12 to 13 characters - first 4 and last 4 are retained   
14 or more characters - first 6 and last 4 are retained  
| Example Input Data  | Example Token  |  
| --- | --- |  
| F447424  | ARBSBI3  |  
### ASCIITOKEN[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#asciitoken "Direct link to ASCIITOKEN")
**Description:** This format returns an ASCII, length preserving token   
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 4-38   
**Token Mapping:** 1:1   
**JSON value:** 15  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 1324-123-484  | D258G4F7R4FG  |  
### ASCIITOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#asciitokenfour "Direct link to ASCIITOKENfour")
**Description:** This format returns an ASCII, length preserving token retaining the original last 4 digits of the input data.  
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 8-38   
**Token Mapping:** 1:1   
**JSON value:** 14  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 2-5-9241  | G4F79241  |  
### ASCIITOKENAUTO[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#asciitokenauto "Direct link to ASCIITOKENAUTO")
**Description:** This format automatically selects an ASCIITOKEN type token scheme that will retain the maximum number of original characters.  
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 4-38   
**Token Mapping:** 1:1   
**JSON value:** 18  
| Example Input Data  | Example Token  |  
| --- | --- |  
| jdoe@gmail.com  | jdoe@gL53A.com  |  
### GUID[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#guid "Direct link to GUID")
**Description:** This format requires no validation and will return a GUID as the token.   
**Validation:** none   
**Length:** 1-1000   
**Token Mapping:** 1:Many   
**JSON value:** 4  
| Example Input Data  | Example Token  |  
| --- | --- |  
| ThisIsATest  | 25892e17-80f6-415f-9c65-7395632f0223  |  
### nGUID[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#nguid "Direct link to nGUID")
**Description:** This format is used to tokenize any number combination.   
**Validation:** Numeric(0-9)   
**Length:** 1-1000   
**Token Mapping:** 1:1   
**JSON value:** 6  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 25947582  | 25892e17-80f6-415f-9c65-7395632f0223  |  
### nTOKEN[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ntoken "Direct link to nTOKEN")
**Description:** This format returns a numeric, length preserving token.   
**Validation:** Numeric(0-9)   
**Length:** 4-38   
**Token Mapping:** 1:Many   
**JSON value:** 8  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 9876543210  | 8631457809  |  
### nTOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ntokenfour "Direct link to nTOKENfour")
**Description:** This format returns a numeric token while retaining length and last 4 digits of the input data.  
**Validation:** Numeric(0-9)   
**Length:** 8-38   
**Token Mapping:** 1:Many   
**JSON value:** 7  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 9876543210  | 1234563210  |  
### nTOKENfour1to1[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ntokenfour1to1 "Direct link to nTOKENfour1to1")
**Description:** This format returns a numeric token while retaining the length and last 4 digits of the input data.  
**Validation:** Numeric(0-9)   
**Length:** 8-38   
**Token Mapping:** 1:1   
**JSON value:** 28  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 9876543210  | 1234563210  |  
### nTOKENAUTO[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ntokenauto "Direct link to nTOKENAUTO")
**Description:** This format automatically selects the NTOKEN type token scheme that will retain the maximum number of original characters.  
**Validation:** Numeric(0-9)   
**Length:** 8-38   
**Token Mapping:** 1:1   
**JSON value:** 21  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 12345678987654321  | 12345657142954321  |  
### SSN[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ssn "Direct link to SSN")
**Description:** This format is used to tokenize a social security number.   
**Validation:** Numeric(0-9)   
**Length:** 9   
**Token Mapping:** 1:1   
**JSON value:** 5  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 123456789  | 958475126  |  
### TOKEN[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#token "Direct link to TOKEN")
**Description:** This format requires no validation and will return a random 38 character alpha-numeric token.  
**Validation:** None   
**Length:** 4-1000   
**Token Mapping:** 1:1   
**JSON value:** 22  
| Example Input Data  | Example Token  |  
| --- | --- |  
| ThisIsATest  | DUH3JSLDTAYHUCO51MXY7IINZ8HLNDU90FMTTM  |  
### TOKENfour[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#tokenfour "Direct link to TOKENfour")
**Description:** This format will return a LUHN-compliant token retaining the original last 4 digits of the card number.  
**Validation:** Numeric(0-9), Luhn compliant   
**Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 3  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 635276725864242  |  
### TOKENfourNonLuhn[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#tokenfournonluhn "Direct link to TOKENfourNonLuhn")
**Description:** This format will return a Non-LUHN-compliant token retaining the original last 4 digits of the card number.  
**Validation:** Numeric(0-9), Luhn compliant   
**Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 25  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 635276925864242  |  
### ThreeTwo[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#threetwo "Direct link to ThreeTwo")
**Description:** This format will return a 9 digit numeric token retaining the last 4 digits of input value.  
**Validation:** Numeric(0-9)   
**Length:** 9   
**Token Mapping:** 1:1   
**JSON value:** 32  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 123456789  | 048176789  |  
## Vaultless[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#vaultless "Direct link to Vaultless")
Vaultless tokenization does not require storing sensitive data in a vault. Instead, tokens are algorithmically generated using the sensitive data combined with data points that are unique to the client's configuration. The resulting non-sensitive token is returned to the merchant and can be stored for future use. When this non-sensitive token is sent through the detokenization algorithm, TokenEx is able to use the token along with the unique data from the client's configuration to return the original sensitive data. Because neither the token nor the sensitive data is stored in a database, vaultless tokenization generally allows for quicker processing times, particularly in large scale batch processing. This also means that the client is responsible for storing their tokens, as once they are deleted from the client's systems, there is no record of this token on the TokenEx side. In contrast with vaulted tokenization, vaultless tokenization limits 1 scheme per TokenEx ID and will always generate the same token each time a given value is tokenized.
### PCI[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#pci-1 "Direct link to PCI")
**Description:** This format returns an alphanumeric, length-preserving token. For inputs greater than or equal to 15 digits, the token will retain first 6 and last 4. For inputs less than 15 digits, the token will retain first 4 and last 4.  
**Input Validation:** Luhn compliant numeric values (0-9)   
**Input Length:** 13-19   
**Token Mapping:** 1:1   
**JSON value:** 26  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 424242APT0Oa4242  |  
| 4111111111119  | 411157SGH1119  |  
### ANTOKEN4[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#antoken4 "Direct link to ANTOKEN4")
**Description:** Returns an alphanumeric, length preserving token retaining the last 4 digits of the input.  
**Input Validation:** Accepts numeric values (0-9)   
**Input Length:** 9-512   
**Token Mapping:** 1:1   
**JSON value:** 29  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 9TY2ZYAV5124242  |  
| 1234567890123  | 6ZOZ109MS0123  |  
### ANTOKEN512[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#antoken512 "Direct link to ANTOKEN512")
**Description:** This format returns an alpha numeric, length preserving token.   
**Input Validation:** Accepts numeric values (0-9)   
**Input Length:** 5-512   
**Token Mapping:** 1:1   
**JSON value:** 30  
| Example Input Data  | Example Token  |  
| --- | --- |  
| 4242424242424242  | 8KR56689POLN11NV  |  
| 5552713000  | L9632NB9P5  |  
### ASCII[​](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes#ascii "Direct link to ASCII")
**Description:** Returns an alphanumeric token that is double the length of input value.  
**Input Validation:** Accepts any ASCII characters   
**Input Length:** 5-128   
**Token Mapping:** 1:1   
**JSON value:** 27  
| Example Input Data  | Example Token  |  
| --- | --- |  
| John.Doe85  | KOC8ExkNin7J6q91JwDT  |