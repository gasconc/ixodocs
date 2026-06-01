---
title: Surcharge - GST Fee
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Surcharge
  - GST Fee'
tags:
- surcharge-gst-fee-configuration-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-surcharge-surcharge-gst-fee-configuration-direct-link-surcharge-gst-fee-configuration
- hosted-payment-hpp-configuration-surcharge-gst-fee-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-surcharge-hosted-payment-hpp-configuration-surcharge-gst-fee-direct-link-hosted-payment-hpp-configuration-surcharge-gst-fee
- api
- ixopay
- hosted-payment-page
- hpp
- credit-card
- transaction
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge
portal: ixopay-manual
updated: '2026-06-01'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Surcharge - GST Fee

# Surcharge - GST Fee
## Surcharge / GST Fee Configuration[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#surcharge--gst-fee-configuration "Direct link to Surcharge / GST Fee Configuration")
  * Navigate to the Connector Details Overview - Settings
  * Type in **HPP: enable Surcharge Calculation** respective **HPP: enable GST Calculation** and click **+ Add**
  * Enter **1** to activate the setting

![Fee Entities](https://documentation.ixopay.com/manual/assets/ideal-img/fee-entities.b3cf6c5.1280.png)Fee Entities![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-surcharge.8726202.1280.png)Connector Settings
note
The Surcharge Fee and GST Fee are calculated before transaction processing in comparison to all other fees calculated in the [IXOPAY platform](https://www.ixopay.com). The transaction has no status yet, therefore it is recommended to use Result = "All" when setting up your Fee Set. In case a surchargeAmount parameter is sent in the [API request](https://documentation.ixopay.com/api/transaction/debit), the surcharge calculation will be skipped, and the surchargeAmount will simply be added to the total amount. For GST fees the [Fee Configuration](https://documentation.ixopay.com/manual/docs/connector/fee-management/set-up-fees) is slightly adopted since the GST Fee will be calculated as a percentage of the configured Surcharge Fee.
## Hosted Payment Page (HPP) Configuration for Surcharge / GST Fee[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#hosted-payment-page-hpp-configuration-for-surcharge--gst-fee "Direct link to Hosted Payment Page \(HPP\) Configuration for Surcharge / GST Fee")
note
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```using payment.js, you have to call the surcharge calculation non CC number change
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```Additionally for the GST Fee Calculation the gstAmount must be added to the `onSurchargeComplete` function:
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```## Virtual Terminal[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#virtual-terminal "Direct link to Virtual Terminal")
Additionally, if you want to use the Surcharge Fee calculation in the Virtual Terminal, enable the setting in the Connector Details Overview:
  * Navigate to the Connector Details Overview - Settings
  * Type in **Enable Surcharge Calculation** and click **+ Add**
  * Enter **1** to activate the setting

With this, the Surcharge Parameter (in Percentage or Absolute Amount) can be entered for transactions initiated by the Virtual Terminal (see Virtual Terminal).
![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.5f0ad5d.1280.png)Virtual Terminal
note
misc.virtual-terminal.surcharge respective frontend.virtual-terminal.surcharge permission must be enabled for users.
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```With this, the Surcharge Parameter (in Percentage or Absolute Amount) can be entered for transactions initiated by the Virtual Terminal (see Virtual Terminal).
![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.5f0ad5d.1280.png)Virtual Terminal
note
misc.virtual-terminal.surcharge respective frontend.virtual-terminal.surcharge permission must be enabled for users.
  * [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Surcharge - GST Fee
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```With this, the Surcharge Parameter (in Percentage or Absolute Amount) can be entered for transactions initiated by the Virtual Terminal (see Virtual Terminal).
![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.5f0ad5d.1280.png)Virtual Terminal
note
misc.virtual-terminal.surcharge respective frontend.virtual-terminal.surcharge permission must be enabled for users.
  * [Surcharge / GST Fee Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#surcharge--gst-fee-configuration)
  * [Hosted Payment Page (HPP) Configuration for Surcharge / GST Fee](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#hosted-payment-page-hpp-configuration-for-surcharge--gst-fee)
  * [Virtual Terminal](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge#virtual-terminal)
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

var paymentJs = new PaymentJs("1.2");  

  

function onSurchargeComplete(surchargeAmount, newTotalAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```
```

paymentJs.init("public integration key", "{{ creditcard div id }}", "cvv div id", function (payment) {  

  Ixopay.PaymentFormV2.initializeSurchargeWithPaymentJs(payment, onSurchargeComplete);  

});  

```
```

function onSurchargeComplete(surchargeAmount, newTotalAmount, gstAmount) {  

  if (newTotalAmount) {  

    // display amount to users  

  } else {  

    // hide surcharge amount as no surcharge is charged  

  }  

}  

```With this, the Surcharge Parameter (in Percentage or Absolute Amount) can be entered for transactions initiated by the Virtual Terminal (see Virtual Terminal).
![Virtual Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/virtual-terminal.5f0ad5d.1280.png)Virtual Terminal
note
misc.virtual-terminal.surcharge respective frontend.virtual-terminal.surcharge permission must be enabled for users.