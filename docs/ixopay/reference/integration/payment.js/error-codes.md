---
title: Error codes
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Error
  codes'
tags:
- empty-https-documentation-ixopay-com-docs-reference-integration-payment-error-codes-empty-direct-link-empty
- expiration-month-empty-https-documentation-ixopay-com-docs-reference-integration-payment-error-codes-expiration-month-empty-direct-link-expiration-month-empty
- card-holder-empty-https-documentation-ixopay-com-docs-reference-integration-payment-error-codes-card-holder-empty-direct-link-card-holder-empty
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * Error codes

# Error codes
These error codes are provided as parameters to the `errorCallback`s of [`tokenize`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#tokenize) and [`refreshCvv`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#refreshcvv).
The callbacks will receive an array of error codes, one for each detected error, for example:
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```## Card number[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-number "Direct link to Card number")
### Empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#empty "Direct link to Empty")
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```### Invalid[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#invalid "Direct link to Invalid")
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```## CVV/CVC code[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#cvvcvc-code "Direct link to CVV/CVC code")
### Empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#empty-1 "Direct link to Empty")
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```### Invalid[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#invalid-1 "Direct link to Invalid")
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```## Expiration[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration "Direct link to Expiration")
### Expiration month empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-month-empty "Direct link to Expiration month empty")
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```### Expiration month invalid[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-month-invalid "Direct link to Expiration month invalid")
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```### Expiration year empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-year-empty "Direct link to Expiration year empty")
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```### Expiration year invalid[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-year-invalid "Direct link to Expiration year invalid")
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```### Card expired[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-expired "Direct link to Card expired")
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```## Card holder[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-holder "Direct link to Card holder")
### Card holder empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-holder-empty "Direct link to Card holder empty")
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```### First name empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#first-name-empty "Direct link to First name empty")
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```### Last name empty[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#last-name-empty "Direct link to Last name empty")
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```  * [Card number](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-number)
    * [Empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#empty)
    * [Invalid](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#invalid)
  * [CVV/CVC code](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#cvvcvc-code)
    * [Empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#empty-1)
    * [Invalid](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#invalid-1)
  * [Expiration](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration)
    * [Expiration month empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-month-empty)
    * [Expiration month invalid](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-month-invalid)
    * [Expiration year empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-year-empty)
    * [Expiration year invalid](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#expiration-year-invalid)
    * [Card expired](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-expired)
  * [Card holder](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-holder)
    * [Card holder empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#card-holder-empty)
    * [First name empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#first-name-empty)
    * [Last name empty](https://documentation.ixopay.com/docs/reference/integration/payment.js/error-codes#last-name-empty)
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```
```

[  

  { "attribute": "number", "key": "errors.blank", "message": "Card number must not be empty" },  

  { "attribute": "cvv", "key": "errors.blank", "message": "CVV code must not be empty" }  

]  

```
```

{  

  "attribute": "number",  

  "key": "errors.blank",  

  "message": "Card number must not be empty"  

}  

```
```

{  

  "attribute": "number",  

  "key": "errors.invalid",  

  "message": "Invalid card number"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.blank",  

  "message": "CVV code must not be empty"  

}  

```
```

{  

  "attribute": "cvv",  

  "key": "errors.invalid",  

  "message": "Invalid CVV code"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.blank",  

  "message": "Expiration month must not be empty"  

}  

```
```

{  

  "attribute": "month",  

  "key": "errors.invalid",  

  "message": "Invalid expiration month"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.blank",  

  "message": "Expiration year must not be empty"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.invalid",  

  "message": "Invalid expiration year"  

}  

```
```

{  

  "attribute": "year",  

  "key": "errors.expired",  

  "message": "Card expired"  

}  

```
```

{  

  "attribute": "card_holder",  

  "key": "errors.blank",  

  "message": "Card holder must not be empty"  

}  

```
```

{  

  "attribute": "first_name",  

  "key": "errors.blank",  

  "message": "First name must not be empty"  

}  

```
```

{  

  "attribute": "last_name",  

  "key": "errors.blank",  

  "message": "Last name must not be empty"  

}  

```