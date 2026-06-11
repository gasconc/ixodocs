---
title: Display the challenge flow in an iframe
summary: ' 3-D Securehttps://documentation.ixopay.com/docs/reference/features/3d-secure  Advanced
  guideshttps://documentation.ixopay.com/docs/reference/features/3d-secure/advanced-guides  Display
  the challenge flow in an iframe'
tags:
- 3ds
- 3d-secure
- ixopay
- iframe
- transaction
source_url: https://documentation.ixopay.com/docs/reference/features/3d-secure/advanced-guides/challenge-flow-iframe
portal: ixopay-dev
updated: '2026-06-11'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * [Advanced guides](https://documentation.ixopay.com/docs/reference/features/3d-secure/advanced-guides)
  * Display the challenge flow in an iframe

# Display the challenge flow in an iframe
While it's not possible to customize the design elements (fonts and colors) of the 3-D Secure authentication UI —as these are managed by the issuing bank— you do have flexibility regarding its positioning on your web page. A common choice among merchants is to display it as a modal dialog on their payment page. If you have a custom modal component, you can easily embed the 3-D Secure frame within it. Alternatively, you can display the authentication content in line with your payment form.
Window size
If you're not using [Hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) or [Hosted fields — payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js), you need to manually send the `threeDSecureData.browserChallengeWindowSize`. The issuing bank will take the value of this field into consideration when rendering the 3-D Secure authentication page.
Issuers of cards supporting 3-D Secure 2.x are required to accommodate the 3-D Secure content in a variety of sizes: 250x400 (`01`), 390x400 (`02`), 500x600 (`03`), 600x400 (`04`), and full screen (width by height dimensions, `05`). For the optimal user interface, consider setting the iframe to one of these exact dimensions.
Create an iframe with `src` set to the `redirectUrl` as follows:
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```Once the customer completes 3-D Secure authentication, the iframe will redirect to the `successUrl`, `errorUrl` or `cancelUrl` that was provided during transaction creation. These pages should then send a `postMessage` to your top-level page to signal the completion of 3-D Secure authentication. Your top-level page can then determine if the payment was successful or requires further customer action.
Your `successUrl`, `errorUrl` or `cancelUrl` pages may execute the following:
```

window.top.postMessage("3DS-complete");  

```Your top payment page should listen for this `postMessage` to know when the authentication process has completed. At this point, you should have received a callback from the [IXOPAY platform](https://www.ixopay.com), and you can use this data to display the final result page.
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```This provides a seamless integration of the 3-D Secure UI into your webpage, enhancing user experience while maintaining high transaction security.
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```
```

window.top.postMessage("3DS-complete");  

```
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```
```

window.top.postMessage("3DS-complete");  

```
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```This provides a seamless integration of the 3-D Secure UI into your webpage, enhancing user experience while maintaining high transaction security.
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * [Advanced guides](https://documentation.ixopay.com/docs/reference/features/3d-secure/advanced-guides)
  * Display the challenge flow in an iframe
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```
```

window.top.postMessage("3DS-complete");  

```
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```
```

window.top.postMessage("3DS-complete");  

```
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```
```

const iframe = document.createElement("iframe");  

iframe.src = transactionResponse.redirectUrl;  

iframe.width = 600;  

iframe.height = 400;  

yourContainer.appendChild(iframe);  

```
```

window.top.postMessage("3DS-complete");  

```
```

function on3DSComplete() {  

  // Hide the 3DS UI  

  yourContainer.remove();  

  

  // call your backend to retrieve the status of transaction  

  // depending on the status show your customer a success page  

  // or prompt for another payment method  

}  

  

window.addEventListener(  

  "message",  

  (e) => {  

    if (e.data === "3DS-complete") {  

      on3DSComplete();  

    }  

  },  

  false,  

);  

```This provides a seamless integration of the 3-D Secure UI into your webpage, enhancing user experience while maintaining high transaction security.