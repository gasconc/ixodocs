---
title: CVV refreshing
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Advanced
  guideshttps://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides  CVV
  refreshing'
tags:
- api
- pci
- ixopay
- credit-card
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/cvv-refreshing
portal: ixopay-dev
updated: '2026-06-29'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * [Advanced guides](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides)
  * CVV refreshing

# CVV refreshing
If you already have tokenized a card and stored it via a [Register](https://documentation.ixopay.com/api/transaction/register) or [Debit](https://documentation.ixopay.com/api/transaction/debit)/[Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) with register transaction, all subsequent transaction will not pass CVC/CVV code to the acquiring bank, because the verification code must not be stored due to PCI regulations.
If you still want to perform [card-on-file transactions](https://documentation.ixopay.com/docs/guides/payments/merchant-initiated) with CVC/CVV code, you have to present the CVC/CVV input field to the customer again.
Prerequisites:
  * A reference to the initial transaction must be stored, either
    * the `referenceId` of the initial transaction, or
    * a [customer profile](https://documentation.ixopay.com/docs/reference/features/customer-profiles#creating-a-customer-profile) payment token.
  * It's recommended to store the last 4 digits of the card to inform your customer about the card used for payment.

Note: Dummy Adapter
The CVV refresh call is not enabled for the dummy adapter.
Use the CVV Refresh call as follows:
  1. On top of your HTML page (either in `` or directly after ``), include the `payment.1.3.min.js` as shown here:
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```Note: data-main attribute
It is important to set the `data-main="payment-js"` attribute on the `` tag.
  2. Build the payment form providing a `` element with an `id` for the CVV/CVC code input field.
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```  3. Initialize the payment.js library by instantiating an `PaymentJs` object, and call [`initCvvRefresh()`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#initcvvrefresh) on it. The method expects the connector's public integration key, `uuid` of the initial transaction which was used to store the card, `id` of the CVV div and a callback function as parameters. The callback function will receive the PaymentJs object, and you should call any other setup methods — like [formatting](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling) or [event handlers](https://documentation.ixopay.com/docs/reference/integration/payment.js/event-listening) — directly there.
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```info
The selected connector, identified by the `publicIntegrationKey`,
     * must use the same [customer profile container](https://documentation.ixopay.com/docs/reference/features/customer-profiles#customer-profile-containers) as the used `paymentToken`, or
     * must belong to the same merchant as the connector identified by the `referenceTransactionId`.
  4. Once the user submits the form, you must intercept the submit event and call payment.js [`refreshCvv`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#refreshcvv) method, passing a success callback and an error callback function. The success callback will be called once the CVV was successfully updated for the card. The error callback function will receive an array with error objects, containing field name and error message.
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```  5. You can now call the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) to perform the [Debit](https://documentation.ixopay.com/api/transaction/debit)/[Preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) with CVV present.
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```
```

<script data-main="payment-js"  

        src="https://gateway.ixopay.com/js/integrated/payment.1.3.min.js">  

</script>  

```
```

<form id="payment_form" method="POST" action="/customer/update-card" onsubmit="interceptSubmit(); return false;">  

  <div>  

    <h1>Payment</h1>  

    <p>Your purchase will be made with your stored credit card <b>**** **** **** 1111</b></p>  

  </div>  

  <div>  

    <label for="cc-csc">CVV</label>  

    <div id="cc-csc" style="height: 35px; width: 200px;"></div>  

  </div>  

  <div>  

    <input type="submit" value="Submit" />  

  </div>  

</form>  

```
```

<script>  

  const payment = new PaymentJs();  

  payment.initCvvRefresh("$INTEGRATION_KEY", "$REFERENCE_TRANSACTION_UUID_OR_PAYMENT_TOKEN", "cc-csc", (payment) => {  

    payment.setCvvStyle({  

      border: "1px solid red",  

      width: "75px",  

    });  

    payment.cvvOn("input", (data) => {  

      alert("A number was entered");  

    });  

  });  

</script>  

```
```

function interceptSubmit() {  

  payment.refreshCvv(  

    () => {  

      // success callback  

      document.getElementById("payment_form").submit(); //submit the form  

    },  

    (errors) => {  

      // error callback  

      alert("Errors occurred");  

      // render error information here  

    },  

  );  

}  

```