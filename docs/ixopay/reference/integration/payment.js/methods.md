---
title: Method reference
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Method
  reference'
tags:
- methods-https-documentation-ixopay-com-docs-reference-integration-payment-methods-methods-direct-link-methods
- init-https-documentation-ixopay-com-docs-reference-integration-payment-methods-init-direct-link-init
- initcvvrefresh-https-documentation-ixopay-com-docs-reference-integration-payment-methods-initcvvrefresh-direct-link-initcvvrefresh
- tokenize-https-documentation-ixopay-com-docs-reference-integration-payment-methods-tokenize-direct-link-tokenize
- refreshcvv-https-documentation-ixopay-com-docs-reference-integration-payment-methods-refreshcvv-direct-link-refreshcvv
- initriskscript-https-documentation-ixopay-com-docs-reference-integration-payment-methods-initriskscript-direct-link-initriskscript
- setnumberstyle-https-documentation-ixopay-com-docs-reference-integration-payment-methods-setnumberstyle-direct-link-setnumberstyle
- setcvvstyle-https-documentation-ixopay-com-docs-reference-integration-payment-methods-setcvvstyle-direct-link-setcvvstyle
- setcvvplaceholder-https-documentation-ixopay-com-docs-reference-integration-payment-methods-setcvvplaceholder-direct-link-setcvvplaceholder
- setnumberinputtype-https-documentation-ixopay-com-docs-reference-integration-payment-methods-setnumberinputtype-direct-link-setnumberinputtype
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/methods
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * Method reference

# Method reference
Methods for initializing and using `PaymentJs`.
## Methods[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#methods "Direct link to Methods")
### init[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#init "Direct link to init")
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```Initializes the `PaymentJs` object for PAN and CVV entry. Pass `null` for `cvvDivId` to collect only the card number (PAN-only mode, no CVV field).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters "Direct link to Parameters")
  * `publicIntegrationKey` — the connector's public integration key (provided to you with your credentials).
  * `numberDivId` — the `id` of the `` which will contain the primary account number (PAN).
  * `cvvDivId` — the `id` of the `` which will contain the CVV code, or `null` for PAN-only mode.
  * `completeCallback(PaymentJs)` — a callback function that will receive the initialized `PaymentJs` as first argument.

### initCvvRefresh[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initcvvrefresh "Direct link to initCvvRefresh")
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```Initializes the `PaymentJs` object for [CVV refreshing](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/cvv-refreshing).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-1 "Direct link to Parameters")
  * `publicIntegrationKey` (string): the connector's public integration key (provided to you with your credentials).
info
The selected connector, identified by the `publicIntegrationKey`,
    * must use the same [customer profile container](https://documentation.ixopay.com/docs/reference/features/customer-profiles#customer-profile-containers) as the used `paymentToken`, or
    * must belong to the same merchant as the connector identified by the `referenceTransactionId`.
  * Reference to a [register or debit with register transaction](https://documentation.ixopay.com/docs/reference/concepts/transactions/types) for which the CVV will be refreshed. The reference can be either:
    * `referenceTransactionId` (string): the referenced transaction ID.
    * `paymentToken` (string): the [customer profile](https://documentation.ixopay.com/docs/reference/features/customer-profiles#creating-a-customer-profile) payment token.
  * `cvvDivId` (string): the `id` of the `` which will contain the CVV code.
  * `completeCallback` (function: `(PaymentJs) => void`): a callback function that will receive the initialized `PaymentJs` as first argument.

### tokenize[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#tokenize "Direct link to tokenize")
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```Submit the sensitive card information to the vaulting server for [tokenization](https://documentation.ixopay.com/docs/guides/features/tokenization).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-2 "Direct link to Parameters")
  * `additionalData` (object): an object, may contain the following keys: `first_name`, `last_name`, `month`, `year`, `email`, `phone_number`, `company`, `address1`, `zip`, `city`, `state`, `country`.
  * `successCallback` (function: `(token, cardData) => void`): will be called upon completion, receiving the `token` (as string) as first argument, and additional `cardData` as second argument , for example:
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```Possible `cardType` values are: `amex`, `dinacard`, `diners`, `discover`, `elo`, `jcb`, `mada`, `maestro`, `mastercard`, `meeza`, `uatp`, `unionpay`, `visa_electron`, and `visa`.
Forward compatibility
Please note that the enumerated list provided above is subject to change or expansion over time. As such, be ready to accommodate and appropriately handle unfamiliar card brands.
  * `errorCallback` (function: `(errors) => void`): called if an error occurs, containing error information. For more details see [Error codes](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes).

### refreshCvv[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#refreshcvv "Direct link to refreshCvv")
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```Submit the CVC/CVV code to the vaulting server.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-3 "Direct link to Parameters")
  * `successCallback` (function: `() => void`): will be called upon successful completion.
  * `errorCallback` (function: `(errors) => void`): called if an error occurs, containing error information. For more details see [Error codes](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes).

### initRiskScript[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initriskscript "Direct link to initRiskScript")
```

PaymentJs.initRiskScript(options, completeCallback);  

```Initialize [Risk Scripts](https://documentation.ixopay.com/docs/reference/features/risk-checks/external). Required for certain types of risk checks, see [External risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks/external) for more details.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-4 "Direct link to Parameters")
  * `options` (object): An object including the type, e.g. `{ type: 'forter' }`. `type` can currently only be `forter`.
  * `completeCallback` (function `(...) => void`): will be called upon successful completion, parameters depend on `type` from `options`.

### setNumberStyle[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberstyle "Direct link to setNumberStyle")
```

PaymentJs.setNumberStyle(styleObject);  

```Sets the style of the number field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-5 "Direct link to Parameters")
  * `styleObject` (object): an [object with CSS properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style), for example:
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```Additionally, it is possible to style the placeholder of the number field by providing a nested object with CSS properties in the field `::placeholder`, e.g.
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```PCI compliance: no external resource loading
In order to comply with Payment Card Industry (PCI) security standards, we are unable to permit the loading of external resources such as typefaces or background images.

### setCvvStyle[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvstyle "Direct link to setCvvStyle")
```

PaymentJs.setCvvStyle(styleObject);  

```Sets the style of the CVV field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-6 "Direct link to Parameters")
  * `styleObject` (object): an [object with CSS properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style), for example:
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```Additionally, it is possible to style the placeholder of the CVV field by providing a nested object with CSS properties in the field `::placeholder`, e.g.
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```### setNumberPlaceholder[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberplaceholder "Direct link to setNumberPlaceholder")
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```Sets the placeholder text for the number input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-7 "Direct link to Parameters")
  * `placeholderText` (string): text for the placeholder of the number input field.

### setCvvPlaceholder[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvplaceholder "Direct link to setCvvPlaceholder")
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```Sets the placeholder text for the CVV input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-8 "Direct link to Parameters")
  * `placeholderText` (string): text for the placeholder of the CVV input field.

### setNumberInputType[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberinputtype "Direct link to setNumberInputType")
```

PaymentJs.setNumberInputType(inputType);  

```Sets the type attribute on the number input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-9 "Direct link to Parameters")
  * `inputType` (string): type value (i.e. 'text', 'password').

### setCvvInputType[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvinputtype "Direct link to setCvvInputType")
```

PaymentJs.setCvvInputType(inputType);  

```Sets the type attribute on the CVV input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-10 "Direct link to Parameters")
  * `inputType` (string): type value (i.e. 'text', 'password').

### setNumberAttribute[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberattribute "Direct link to setNumberAttribute")
```

PaymentJs.setNumberAttribute(attribute, value);  

```Sets an attribute on the number input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-11 "Direct link to Parameters")
  * `attribute` (string): attribute to set (allowed: 'aria-describedby', 'aria-description', 'aria-disabled', 'aria-errormessage', 'aria-invalid', 'aria-label', 'aria-labelledby', 'aria-placeholder', 'aria-required').
  * `value` (string): value of the attribute.

### setCvvAttribute[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvattribute "Direct link to setCvvAttribute")
```

PaymentJs.setCvvAttribute(attribute, value);  

```Sets an attribute on the CVV input field.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-12 "Direct link to Parameters")
  * `attribute` (string): attribute to set (allowed: 'aria-describedby', 'aria-description', 'aria-disabled', 'aria-errormessage', 'aria-invalid', 'aria-label', 'aria-labelledby', 'aria-placeholder', 'aria-required').
  * `value` (string): value of the attribute.

### numberOn[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#numberon "Direct link to numberOn")
```

PaymentJs.numberOn(event, callbackFunction);  

```Attach an event listener for the number input field.
For more details see [Event listening](https://documentation.ixopay.com/docs/reference/integration/payment.js/event-listening).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-13 "Direct link to Parameters")
  * `event` (string): the number input event to attach the `callbackFunction` to. One of `input`, `focus`, `blur`, `mouseover`, `mouseout`, `enter`, `esc`, `tab`, or `shift-tab`.
  * `callbackFunction` (function: `(event) => void`): a callback that receives data about the `event`, for example:
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```Possible `cardType` values are: `amex`, `dinacard`, `diners`, `discover`, `elo`, `jcb`, `mada`, `maestro`, `mastercard`, `meeza`, `uatp`, `unionpay`, `visa_electron`, and `visa`.
Forward compatibility
Please note that the enumerated list provided above is subject to change or expansion over time. As such, be ready to accommodate and appropriately handle unfamiliar card brands.

### cvvOn[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon "Direct link to cvvOn")
```

PaymentJs.cvvOn(event, callbackFunction);  

```Attach an event listener for the CVV input field.
For more details see [Event listening](https://documentation.ixopay.com/docs/reference/integration/payment.js/event-listening).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-14 "Direct link to Parameters")
  * `event` (string): the CVV input event to attach the `callbackFunction` to. One of `input`, `focus`, `blur`, `mouseover`, `mouseout`, `enter`, `esc`, `tab`, or `shift-tab`.
  * `callbackFunction` (function: `(event) => void`): a callback that receives data about the `event`, for example:
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```### setRequireCardHolder[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setrequirecardholder "Direct link to setRequireCardHolder")
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```Disable the requirement of passing a card-holder name in the `additionalData` object of the [tokenize](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#tokenize) method.
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-15 "Direct link to Parameters")
  * `requireCardHolder` (boolean): a boolean whether a card-holder name is required when calling [tokenize](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#tokenize).

### enableAutofill[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#enableautofill "Direct link to enableAutofill")
```

PaymentJs.enableAutofill();  

```Enables autofill handling.
For details see [Auto-fill card data](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data).
### onAutofill[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#onautofill "Direct link to onAutofill")
```

PaymentJs.onAutofill(autofillCallback);  

```Registers an event handler to receive auto filled data.
For details, see [Auto-fill card data](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data).
#### Parameters[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#parameters-16 "Direct link to Parameters")
  * `autofillCallback` (function: `(data) => void`): a callback that is called when card-data autofill is triggered and receives `data` about the event, for example:
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```## Deprecated methods[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#deprecated-methods "Direct link to Deprecated methods")
### onNumberInput[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#onnumberinput "Direct link to onNumberInput")
```

PaymentJs.onNumberInput(callbackFunction);  

```This function is deprecated in favor of [`numberOn('input', callbackFunction)`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#numberon).
### onCvvInput[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#oncvvinput "Direct link to onCvvInput")
```

PaymentJs.onCvvInput(callbackFunction);  

```This function is deprecated in favor of [`cvvOn('input', callbackFunction)`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon).
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```
```

PaymentJs.initRiskScript(options, completeCallback);  

```
```

PaymentJs.setNumberStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setCvvStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```
```

PaymentJs.setNumberInputType(inputType);  

```
```

PaymentJs.setCvvInputType(inputType);  

```
```

PaymentJs.setNumberAttribute(attribute, value);  

```
```

PaymentJs.setCvvAttribute(attribute, value);  

```
```

PaymentJs.numberOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.cvvOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```
```

PaymentJs.enableAutofill();  

```
```

PaymentJs.onAutofill(autofillCallback);  

```
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```
```

PaymentJs.onNumberInput(callbackFunction);  

```
```

PaymentJs.onCvvInput(callbackFunction);  

```
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```
```

PaymentJs.initRiskScript(options, completeCallback);  

```
```

PaymentJs.setNumberStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setCvvStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```
```

PaymentJs.setNumberInputType(inputType);  

```
```

PaymentJs.setCvvInputType(inputType);  

```
```

PaymentJs.setNumberAttribute(attribute, value);  

```
```

PaymentJs.setCvvAttribute(attribute, value);  

```
```

PaymentJs.numberOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.cvvOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```
```

PaymentJs.enableAutofill();  

```
```

PaymentJs.onAutofill(autofillCallback);  

```
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```
```

PaymentJs.onNumberInput(callbackFunction);  

```
```

PaymentJs.onCvvInput(callbackFunction);  

```This function is deprecated in favor of [`cvvOn('input', callbackFunction)`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon).
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * Method reference
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```
```

PaymentJs.initRiskScript(options, completeCallback);  

```
```

PaymentJs.setNumberStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setCvvStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```
```

PaymentJs.setNumberInputType(inputType);  

```
```

PaymentJs.setCvvInputType(inputType);  

```
```

PaymentJs.setNumberAttribute(attribute, value);  

```
```

PaymentJs.setCvvAttribute(attribute, value);  

```
```

PaymentJs.numberOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.cvvOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```
```

PaymentJs.enableAutofill();  

```
```

PaymentJs.onAutofill(autofillCallback);  

```
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```
```

PaymentJs.onNumberInput(callbackFunction);  

```
```

PaymentJs.onCvvInput(callbackFunction);  

```This function is deprecated in favor of [`cvvOn('input', callbackFunction)`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon).
  * [Methods](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#methods)
    * [init](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#init)
    * [initCvvRefresh](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initcvvrefresh)
    * [tokenize](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#tokenize)
    * [refreshCvv](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#refreshcvv)
    * [initRiskScript](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initriskscript)
    * [setNumberStyle](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberstyle)
    * [setCvvStyle](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvstyle)
    * [setNumberPlaceholder](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberplaceholder)
    * [setCvvPlaceholder](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvplaceholder)
    * [setNumberInputType](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberinputtype)
    * [setCvvInputType](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvinputtype)
    * [setNumberAttribute](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberattribute)
    * [setCvvAttribute](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvattribute)
    * [numberOn](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#numberon)
    * [cvvOn](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon)
    * [setRequireCardHolder](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setrequirecardholder)
    * [enableAutofill](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#enableautofill)
    * [onAutofill](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#onautofill)
  * [Deprecated methods](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#deprecated-methods)
    * [onNumberInput](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#onnumberinput)
    * [onCvvInput](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#oncvvinput)
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```
```

PaymentJs.initRiskScript(options, completeCallback);  

```
```

PaymentJs.setNumberStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setCvvStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```
```

PaymentJs.setNumberInputType(inputType);  

```
```

PaymentJs.setCvvInputType(inputType);  

```
```

PaymentJs.setNumberAttribute(attribute, value);  

```
```

PaymentJs.setCvvAttribute(attribute, value);  

```
```

PaymentJs.numberOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.cvvOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```
```

PaymentJs.enableAutofill();  

```
```

PaymentJs.onAutofill(autofillCallback);  

```
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```
```

PaymentJs.onNumberInput(callbackFunction);  

```
```

PaymentJs.onCvvInput(callbackFunction);  

```
```

PaymentJs.init(publicIntegrationKey, numberDivId, cvvDivId, completeCallback);  

```
```

PaymentJs.initCvvRefresh(publicIntegrationKey, referenceTransactionId, cvvDivId, completeCallback);  

PaymentJs.initCvvRefresh(publicIntegrationKey, paymentToken, cvvDivId, completeCallback);  

```
```

PaymentJs.tokenize(additionalData, successCallback, errorCallback);  

```
```

{  

  "card_type": "visa",  

  "full_name": "Alex Smith",  

  "bin_digits": "41111111",  

  "first_six_digits": "411111",  

  "last_four_digits": "1111",  

  "month": "6",  

  "year": "2031",  

  "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c"  

}  

```
```

PaymentJs.refreshCvv(successCallback, errorCallback);  

```
```

PaymentJs.initRiskScript(options, completeCallback);  

```
```

PaymentJs.setNumberStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setCvvStyle(styleObject);  

```
```

{  

  "border-color": "red",  

  "font-size": "10px"  

}  

```
```

{  

  "border-color": "red",  

  "font-size": "10px",  

  "::placeholder": {  

    "color": "#a00"  

  }  

}  

```
```

PaymentJs.setNumberPlaceholder(placeholderText);  

```
```

PaymentJs.setCvvPlaceholder(placeholderText);  

```
```

PaymentJs.setNumberInputType(inputType);  

```
```

PaymentJs.setCvvInputType(inputType);  

```
```

PaymentJs.setNumberAttribute(attribute, value);  

```
```

PaymentJs.setCvvAttribute(attribute, value);  

```
```

PaymentJs.numberOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.cvvOn(event, callbackFunction);  

```
```

{  

  "cardType": "visa",  

  "cvvLength": 3,  

  "numberLength": 12,  

  "validCvv": true,  

  "validNumber": true  

}  

```
```

PaymentJs.setRequireCardHolder(requireCardHolder);  

```
```

PaymentJs.enableAutofill();  

```
```

PaymentJs.onAutofill(autofillCallback);  

```
```

{  

  card_holder: "Alex Smith",  

  month: 06,  

  year:  2031,  

}  

```
```

PaymentJs.onNumberInput(callbackFunction);  

```
```

PaymentJs.onCvvInput(callbackFunction);  

```This function is deprecated in favor of [`cvvOn('input', callbackFunction)`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#cvvon).