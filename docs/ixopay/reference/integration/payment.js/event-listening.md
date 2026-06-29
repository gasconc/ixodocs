---
title: Event listening
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Event
  listening'
tags:
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/event-listening
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * Event listening

# Event listening
Both, number and CVV support listening for the following events:
  * `input`
  * `focus` and `blur`
  * `mouseover` and `mouseout`
  * `enter` and `esc`
  * `tab` and `shift-tab`

Register the event handlers in the [`init`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#init) or [`initCvvRefresh`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initcvvrefresh) methods:
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

```For all events, the callback function will receive a `data` object:
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
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

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

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

```
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
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * Event listening
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

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

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

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

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.numberOn("input", (data) => {  

    // Handle input event  

    console.log(data);  

  });  

  

  payment.numberOn("focus", (data) => {  

    // Handle focus event  

    console.log(data);  

  });  

});  

```
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