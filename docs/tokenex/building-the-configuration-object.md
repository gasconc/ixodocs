---
title: Building the Configuration Object
summary: ' TokenEx iFrame  Creating the iFramehttps://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe  Building
  the Configuration Object'
tags:
- json
- pci
- tokenex
- ixopay
- iframe
- credit-card
source_url: https://documentation.ixopay.com/modules/docs/tokenex/building-the-configuration-object
portal: tokenex
updated: '2026-06-11'
related: []
---

* TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Building the Configuration Object

# Building the Configuration Object
The next step is creating the iFrame configuration object itself, which consists of the following parameters:  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| `tokenExID`  | string  | true  | Your TokenEx ID  |  
| `tokenScheme`  | string  | true  |  Either the name (case insensitive) or the JSON value of the Token Scheme to be used (see [Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes)) info This must be the same as the Token Scheme used to create your **Authentication Key**.  |  
| `authenticationKey`  | string  | true  | The generated Authentication Key (see [Generating the Authentication Key](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key)).  |  
| `timestamp`  | string  | true  |  The timestamp when the authentication key was generated, in `yyyyMMddHHmmss` format. info This value must match the one provided when generating your **Authentication Key**.  |  
| `origin`  | string  | true  | The fully qualified origin of your application. In the TokenEx Production environment, the origin must use HTTPS.  |  
| `styles`  | object  | false  | CSS to be applied to the PAN and CVV inputs (see [Styling the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/styling-the-iframe))  |  
| `placeholder`  | string  | false  | Optionally sets the placeholder attribute of the input  |  
| `pci`  | bool  | false  | Specifies if the PCI version of the iFrame should be rendered; defaults to false  |  
| `enablePrettyFormat`  | bool  | false  |  If pci is true, then enabling this property will auto format the credit card number as it appears on the physical card info This will only apply if input type is set to text. It will not work if input type is set to "num" or "tel".  |  
| `enableValidateOnBlur`  | bool  | false  | If true, then the Validate function will be called when the input loses focus; otherwise, Validate must be invoked manually  |  
| `inputType`  | string  | false  | Allowed values are "number", "tel", and "text". If nothing is supplied, this will default to "text"  |  
| `allowUnknownCardTypes`  | bool  | false  |  If true, then unknown, or types other than 'masterCard', 'americanExpress', 'discover', 'visa', 'diners', or 'jcb' will tokenize; defaults to false info If this field is true while using Custom Data Types in PCI w/ CVV or CVV Only modes, the CVV text field's allowable input will be 4. Use the cvvValidRegex field to validate the length of the CVV input.  |  
| `debug`  | bool  | false  | If enabled, data will be output to the console to assist with debugging  |  
| `customRegEx`  | string  | false  | If present, the RegEx expression provided will be used during validation events in addition to any internal validation. Please note that the backslash is an escape character - if used in your RegEx, it will need to be escaped  |  
| `cvv`  | bool  | false  | Specifies if a CVV iFrame should be rendered; defaults to false  |  
| `cvvOnly`  | bool  | false  | Specifies if only the CVV iFrame should be rendered; defaults to false (see [CVV Only Mode Configuration](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration))  |  
| `token`  | string  | false  | If cvvOnly is set to true, the token the CVV is associated with must be provided  |  
| `cardType`  | string  | false  | If cvvOnly is set to true, a card type must be provided to validate the CVV length  |  
| `cvvInputType`  | string  | false  | Allowed values are "number", "tel", and "text"; if nothing is supplied, this will default to "text"  |  
| `cvvContainerID`  | string  | false  | The container in which you want to render the CVV iFrame when cvvOnly is false  |  
| `cvvPlaceholder`  | string  | false  | Optionally sets the placeholder attribute of the CVV input when cvvOnly is false  |  
| `customDataTypes`  | object  | false  | Custom validations appended to our standard brand detection (see [Using Custom Data Types](https://documentation.ixopay.com/modules/docs/tokenex/using-custom-data-types))  |  
| `customDataLabel`  | string  | false  | Allows customization of the iframe data label. If none supplied, this defaults to "Data"  |  
| `customCvvDataLabel`  | string  | false  | Allows customization of the CVV iframe data label. If none supplied, this defaults to "CVV"  |  
| `maskInput`  | bool  | false  | Hides the input being typed by masking it with masking character  |  
| `font`  | string  | false  | A google font to use in the iframe  |  
| `title`  | string  | false  | Content of the title element used by the iframe document  |  
| `cvvTitle`  | string  | false  | Content of the title element used by the cvv iframe document  |  
| `enableAriaRequired`  | bool  | false  | If true, sets the aria-required and aria-invalid attributes to true. When Validate function is called aria-invalid will update according to the result of isValid  |  
| `returnKhash`  | bool  | false  | True: returns the kHash value for a given credit card.  
False: returns kHash property with empty value.  Prerequisites In order to use this functionality you must have established an account directly with Kount. Find more information here: [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations).  |  
| `forterSiteId`  | string  | false  | Obtained from Forter   
  
See: [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)  |  
| `forterUsername`  | string  | false  | Obtained from Forter   
  
See: [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)  |  
| `inputMode`  | string  | false  | See [MDN Input Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) for acceptable modes.  |  
| `expiresInSeconds`  | Int  | false  |  The expiration time when the authentication key is going to expire after initial load. Valid range: 1 to 1200 Seconds info Default expiration time is set to 1200 seconds (20 Minutes). The expiration time will be reset to default, in case if user provides value which
  * Is less than or equal to 0
  * Is greater than 1200

 |  
| `inputMaxLength`  | Int  | false  |  Sets the maxLength property of the input. info This parameter only works with input type "text".  |  
| `useExtendedBIN`  | bool  | false  |  If true, returns the first eight characters of the PAN in the Tokenize response. info Will not return firstEight in the Tokenize response if: 
  * PCI is false
  * or PAN is fewer than 16

characters.  |  
| `enableValidateOnKeyUp`  | bool  | false  |  If true, then the Validate function will be called after each keystroke; otherwise, Validate must be invoked manually info This functionality is only available for PCI and PCIwithCVV iFrame modes.  |  
| `enableValidateOnCvvKeyUp`  | bool  | false  |  If true, then the Validate function will be called after each keystroke in the CVV iframe; otherwise, Validate must be invoked manually info This functionality is only available for PCIwithCVV iFrame modes  |  
| `returnAutoCompleteValues`  | bool  | false  |  If true, then this will return nameOnCard and cardExp values whenever a user utilizes the browsers autocomplete functionality. info Autocomplete must be enabled.  |  
| `cardMaxLengths`  | object  | false  |  
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
This field is optional. Providing an object for this field requires all properties, i.e. card brands, to be specified on the object. Either all card brand properties on the object must have integer values, or they all must be set to `null`. If no object is provided for this field, the max length for any card brand will be set to the default max length, which is 19. If the object is not used but still provided, set all the card brand property values to null, and the values will default to 19. Required card brands (case-sensitive):   
`americanExpress`   
`diners`   
`discover`   
`jcb`   
`masterCard`   
`visa` info This functionality is only available for PCI and PCIwithCVV iFrame modes. Max Length for PCI and PCIwithCVV is 19 by default  |  
  
  
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
This field is optional. Providing an object for this field requires all properties, i.e. card brands, to be specified on the object. Either all card brand properties on the object must have integer values, or they all must be set to `null`. If no object is provided for this field, the max length for any card brand will be set to the default max length, which is 19. If the object is not used but still provided, set all the card brand property values to null, and the values will default to 19. Required card brands (case-sensitive):   
`americanExpress`   
`diners`   
`discover`   
`jcb`   
`masterCard`   
`visa` info This functionality is only available for PCI and PCIwithCVV iFrame modes. Max Length for PCI and PCIwithCVV is 19 by default  |  
  * TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Building the Configuration Object
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
```
cardMaxLengths: {   
 "visa" : 16,  
 "masterCard" : 19,  
 "americanExpress" : 19,  
 "discover" : 16,  
 "diners" : 16,  
 "jcb" : 19  
}
```
This field is optional. Providing an object for this field requires all properties, i.e. card brands, to be specified on the object. Either all card brand properties on the object must have integer values, or they all must be set to `null`. If no object is provided for this field, the max length for any card brand will be set to the default max length, which is 19. If the object is not used but still provided, set all the card brand property values to null, and the values will default to 19. Required card brands (case-sensitive):   
`americanExpress`   
`diners`   
`discover`   
`jcb`   
`masterCard`   
`visa` info This functionality is only available for PCI and PCIwithCVV iFrame modes. Max Length for PCI and PCIwithCVV is 19 by default  |