---
title: Intermediate redirects
summary: ' Payment method selectionhttps://documentation.ixopay.com/docs/reference/features/payment-method-selection  Intermediate
  redirects'
tags:
- process-flow-https-documentation-ixopay-com-docs-reference-features-payment-method-selection-intermediate-redirects-process-flow-direct-link-process-flow
- technical-details-https-documentation-ixopay-com-docs-reference-features-payment-method-selection-intermediate-redirects-technical-details-direct-link-technical-details
- api
- ixopay
- psp
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Payment method selection](https://documentation.ixopay.com/docs/reference/features/payment-method-selection)
  * Intermediate redirects

# Intermediate redirects
When dealing with transactions processed through a _Payment Selection Page_ , the [IXOPAY platform](https://www.ixopay.com) provides a feature to redirect the customer back to your checkout flow before the final processing of the chosen payment method.
note
Please be aware that this feature needs to be manually enabled on your merchant account.
## Process flow[​](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects#process-flow "Direct link to Process flow")
  1. **Merchant** : Initiate a [Debit](https://documentation.ixopay.com/api/transaction/debit) transaction to the IXOPAY platform, with `intermediateUrl` included in `extraData` (refer to the [Technical details](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects#technical-details) section below).
  2. **Merchant** : Guide the customer's browser to the `redirectUrl` present in the response.
  3. **IXOPAY platform** : Show the payment selection page to the customer.
  4. **Customer** : Choose the desired payment method on the payment selection page.
  5. **IXOPAY platform** : Dispatch a [callback](https://documentation.ixopay.com/docs/reference/integration/callbacks) with the `PENDING` status and `extraData` containing `continueUrl` to the specified `callbackUrl`. Alternatively, the merchant can query the `continueUrl` by using the [Status API](https://documentation.ixopay.com/api/transaction/status).
  6. **IXOPAY platform** : Redirect the customer's browser back to the `intermediateUrl`. The IXOPAY platform adds the `continueUrl` as GET parameter to the page's URL.
  7. **Merchant** : Display the checkout finalization page to the customer.
  8. **Customer** : Clicks, for example, "Finalize purchase now".
  9. **Merchant** : Guide the customer's browser to the `continueUrl` – sourced from the GET parameter, from the callback, or the [Status API](https://documentation.ixopay.com/api/transaction/status).
  10. **IXOPAY platform** : Show the actual payment page to the customer.
  11. **Customer** : Concludes payment at the Payment Service Provider (PSP).
  12. **IXOPAY platform** : Dispatches the final callback to the merchant's `callbackUrl`.
  13. **IXOPAY platform** : Redirects the customer back to the merchant's `successUrl` — or `errorUrl` in case of payment failure.
  14. **Merchant** : Displays the "Thank you for your purchase" page.

Here's a visual representation of the process flow using a sequence diagram:
CustomerIXOPAY platformMerchant Sends transaction with intermediateUrl1Redirects customer to redirectUrl2Presents payment selection page3Chooses payment method4Sends callback with state PENDING & continueUrl5Redirects customer to intermediateUrl with continueUrl GET parameter6Presents checkout finalization7Clicks "Finalize purchase now"8Redirects customer to continueUrl9Presents actual payment page10Finalizes payment at the PSP11Sends final callback to merchant's callbackUrl12Redirects customer to successUrl (or errorUrl if payment failed)13Presents "Thank you for your purchase" page14
## Technical details[​](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects#technical-details "Direct link to Technical details")
Apart from the standard transaction details, you should also pay attention to the following:
  * Send the `extraData` value for the `intermediateUrl` key: This URL is where we'll redirect the customer after they have chosen a payment method.
For example:
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```  * Extract the `extraData` value with the `continueUrl` key from the callback: This is the URL where you should redirect the customer to complete the payment.
In the callback:
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```Alternatively, you can:
    * Retrieve the `continueUrl` through the [Status API](https://documentation.ixopay.com/api/transaction/status).
    * Extract the `continueUrl` parameter, which we append to your `intermediateUrl`.
Example: If you provided `https://shop.example.org/checkout/finalize`, we would redirected to `https://shop.example.org/checkout/finalize?continueUrl=https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890`.
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```  * [Process flow](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects#process-flow)
  * [Technical details](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects#technical-details)
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "intermediateUrl": "https://shop.example.org/checkout/finalize"  

  }  

  // ...  

}  

```
```

{  

  // ...  

  "extraData": {  

    "continueUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890"  

  }  

  // ...  

}  

```