---
title: Form styling
summary: ' Hosted fields — payment.jshttps://documentation.ixopay.com/docs/reference/integration/payment.js  Advanced
  guideshttps://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides  Form
  styling'
tags:
- known-limitations-https-documentation-ixopay-com-docs-reference-integration-payment-advanced-guides-form-styling-known-limitations-direct-link-known-limitations
- https-documentation-ixopay-com-docs-reference-integration-payment-advanced-guides-form-styling-direct-link
- rest
- pci
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * [Advanced guides](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides)
  * Form styling

# Form styling
Using [`setNumberStyle()`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberstyle) and [`setCvvStyle()`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvstyle) in combination with [Event listening](https://documentation.ixopay.com/docs/reference/integration/payment.js/event-listening) allows styling the input fields similar to the rest of your forms.
## Known limitations[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#known-limitations "Direct link to Known limitations")
While payment.js provides the most seamless integration for a website, it has one limitation due to PCI requirements: external resources cannot be loaded. Because of this constraint, it is not possible to load external fonts or background images.
## How to use[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#how-to-use "Direct link to How to use")
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```### Style placeholders[​](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#style-placeholders "Direct link to Style placeholders")
The [`setNumberStyle()`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setnumberstyle) and [`setCvvStyle()`](https://documentation.ixopay.com/docs/reference/integration/payment.js/methods#setcvvstyle) methods also support styling the placeholder of the number and CVV fields by providing the styles in the field `::placeholder`:
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```  * [Known limitations](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#known-limitations)
  * [How to use](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#how-to-use)
    * [Style placeholders](https://documentation.ixopay.com/docs/reference/integration/payment.js/advanced-guides/form-styling#style-placeholders)
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cc-number", "cc-csc", (payment) => {  

  var numberFocused = false;  

  var cvvFocused = false;  

  var style = {  

    border: "3px solid gray",  

  };  

  var hoverStyle = {  

    border: "3px solid blue",  

  };  

  var focusStyle = {  

    border: "3px solid green",  

  };  

  

  // Set the initial style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

  

  // Focus events  

  payment.numberOn("focus", () => {  

    numberFocused = true;  

    payment.setNumberStyle(focusStyle);  

  });  

  payment.cvvOn("focus", () => {  

    cvvFocused = true;  

    payment.setCvvStyle(focusStyle);  

  });  

  

  // Blur events  

  payment.numberOn("blur", () => {  

    numberFocused = false;  

    payment.setNumberStyle(style);  

  });  

  payment.cvvOn("blur", () => {  

    cvvFocused = false;  

    payment.setCvvStyle(style);  

  });  

  

  // Hover events  

  payment.numberOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(hoverStyle);  

    }  

  });  

  payment.numberOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!numberFocused) {  

      payment.setNumberStyle(style);  

    }  

  });  

  payment.cvvOn("mouseover", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(hoverStyle);  

    }  

  });  

  payment.cvvOn("mouseout", () => {  

    // Don't override style if element is already focused  

    if (!cvvFocused) {  

      payment.setCvvStyle(style);  

    }  

  });  

});  

```
```

const payment = new PaymentJs();  

payment.init("$INTEGRATION_KEY", "cardnumber", "cvc", (payment) => {  

  var style = {  

    // combine with other styles  

    color: "#000",  

    "::placeholder": {  

      color: "#a00",  

    },  

  };  

  

  // Set the placeholder style  

  payment.setNumberStyle(style);  

  payment.setCvvStyle(style);  

});  

```