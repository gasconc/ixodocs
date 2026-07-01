---
title: Auto-fill card data
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Advanced
  guideshttps://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides  Auto-fill
  card data'
tags:
- known-limitations-https-documentation-ixopay-com-docs-reference-integration-payment-advanced-guides-auto-fill-card-data-known-limitations-direct-link-known-limitations
- https-documentation-ixopay-com-docs-reference-integration-payment-advanced-guides-auto-fill-card-data-direct-link
- ixopay
- capture
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * [Advanced guides](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides)
  * Auto-fill card data

# Auto-fill card data
Most browsers and password managers support autofill of card data in payment forms. Since payment.js renders two iframes for the sensitive card data inputs (card number and CVV/CVC code) it requires special preparation to support the autofill feature.
## Known limitations[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data#known-limitations "Direct link to Known limitations")
Because the browser are autofilling all data only in the scope of one domain, the card number fields should be first in order on your payment form. This is the only way that payment.js can capture all data and pass them to you through the mechanism described below.
## How to use[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data#how-to-use "Direct link to How to use")
Once the complete handler of the [`init`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#init) method is invoked, call the [`enableAutofill`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#enableautofill) method to turn it on. Additionally, register a [`onAutofill`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#onautofill) handler to receive updates on the autofill event.
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```  * [Known limitations](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data#known-limitations)
  * [How to use](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/auto-fill-card-data#how-to-use)
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  payment.enableAutofill();  

  payment.onAutofill((data) => {  

    /*  

     * "data" contains an object like this:  

     *  

     * const data = {  

     *   card_holder: "Alex Smith",  

     *   month: 6,  

     *   year: 2031  

     * }  

     *  

     * You should apply them to the input fields on your payment form,for example:  

     */  

    document.getElementById("field_id_of_cardholder").value = data.card_holder;  

    document.getElementById("field_id_of_month").value = data.month;  

    document.getElementById("field_id_of_year").value = data.year;  

  });  

});  

```