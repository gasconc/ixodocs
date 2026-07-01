---
title: Using Custom Data Types
summary: ' TokenEx iFrame  Using Custom Data Types'
tags:
- pci
- tokenex
- ixopay
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/using-custom-data-types
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* TokenEx iFrame
  * Using Custom Data Types

# Using Custom Data Types
At present, TokenEx maintains up-to-date validations for major card brands. Using the custom data type feature enables you to extend/alter the default validation logic when in PCI mode based on the card types you accept, including private-label and country-specific card brands.
You can supply an array of custom types in your configuration object's customDataTypes property.  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| type  | string  | true  | The name to be returned to you during validation events; using an existing type will override/replace TokenEx default validation  |  
| validRegex  | string  | true  | Regular expression used to validate the input. Related: [Card Type Validation Regexes](https://documentation.ixopay.com/modules/docs/tokenex/events#card-type-validation-regexes)  |  
| possibleRegEx  | string  | true  | Regular expression used to partially validate the input   
This is commonly used to toggle logos/images of the brand detected while the user is typing.   
Related: [Card Type Validation Regexes](https://documentation.ixopay.com/modules/docs/tokenex/events#card-type-validation-regexes)  |  
| maxLength  | string  | true  | Max length of the expected input  |  
| cvvValidRegex  | string  | false  | Required when in PCI w/CVV or CVV Only mode  |  
| cvvMaxLength  | string  | false  | Required when in PCI w/CVV or CVV Only mode  |  
| cvvRequired  | string  | false  | Allows a blank CVV input when false  |  
| luhnCheck  | bool  | false  | Indicates the system to verify Luhn compliance on custom card schemes   
  
Default value is set to **True**   
  
Note: - There will not be (Luhn compliance) format validation error if enforceLuhnCompliance parameter is set to false.   
  
This will suppress the JavaScript Luhn check error, allowing the user to send the request to the backend. However if the token scheme doesn't allow skipping the Luhn check, the token generation will still error.  |  
JavaScript
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```
```

var iframeConfig = {  

  origin: "https://mysite.com",  

  timestamp: "20180109161437",  

  tokenExID: "REMOVED",  

  authenticationKey: "REMOVED",  

  pci: true,  

  cvv: true,  

  customDataTypes: [  

    {  

      type: "privateCard",  

      validRegex: "^(5019)\\d{12}$",  

      possibleRegEx: "^(5019)\\d+$",  

      maxLength: 16,  

      cvvValidRegex: "^[0-9]{2}$",  

      cvvMaxLength: 2,  

      cvvRequired: false,  

      luhnCheck: true  

    }  

  ],  

  ...  

}  

```