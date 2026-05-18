---
title: Hosted payment pages
summary: ' Processing optionshttps://documentation.ixopay.com/docs/reference/integration/processing-options  Hosted
  payment pages'
tags:
- cases-https-documentation-ixopay-com-docs-reference-integration-processing-options-hosted-payment-pages-cases-direct-link-cases
- processing-flow-https-documentation-ixopay-com-docs-reference-integration-processing-options-hosted-payment-pages-processing-flow-direct-link-processing-flow
- https-documentation-ixopay-com-docs-reference-integration-processing-options-hosted-payment-pages-direct-link
- api
- 3d-secure
- ixopay
- psp
- iframe
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages
portal: ixopay-dev
updated: '2026-05-18'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Processing options](https://documentation.ixopay.com/docs/reference/integration/processing-options)
  * Hosted payment pages

# Hosted payment pages
Hosted payment pages are a processing option that enables merchants to redirect their customers to a payment page hosted by [IXOPAY platform](https://www.ixopay.com) during the checkout process. The payment page is where customers securely enter their payment information.
Hosted payment pages are an attractive option for merchants who want to accept online payments without the complexity of building and securing their own payment page.
Guide
For a detailed, step-by-step guide on integrating hosted payment pages, refer to the [hosted payment pages guide](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages "Hosted payment pages guide") in our guides section.
## Use cases[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#use-cases "Direct link to Use cases")
  * Merchants with limited technical resources who want a simple payment integration.
  * Merchants who want to avoid the burden of building and maintaining their own payment page.
  * Merchants who want to offer [payment method selection](https://docs.ixopay.com/en/platform-user-administration-manual/connector/multi-method-connector/payment-selection-page) via the IXOPAY platform.

## Processing flow[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#processing-flow "Direct link to Processing flow")
  1. The customer initiates a purchase on the merchant's website.
  2. ⁮
Merchant
The merchant sends a [debit](https://documentation.ixopay.com/api/transaction/debit) or [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) request to the IXOPAY platform.
  3. ⁮
Merchant
The IXOPAY platform sends the result with a redirect URL to the merchant. Depending on the way you have setup your payment form, it may also contain a `"redirectType": "iframe"`.
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```info
Some PSPs might disallow rendering their payment's page in an `` and either attempt to break out of the `` or display an error.
  4. ⁮
Merchant
Depending on the `returnType` of your payment form:
     * The merchant redirects the customer's browser to the provided redirect URL, switching temporarily to the IXOPAY platform's payment page. This can be done on the backend by responding to the customer with an [HTTP redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) using a `Location` HTTP header or on the frontend by setting the browser's `window.location`.
     * The merchant directs the customer's browser to load the provided redirect URL in a an ``.
  5. The customer's browser loads the IXOPAY platform's payment page.
  6. The IXOPAY platform delivers the payment page.
  7. The customer completes the payment process on the IXOPAY platform's payment page.
info
If [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure) authentication is used, the customer might be redirected to their bank's authentication page as an intermediate step.
  8. The IXOPAY platform processes the request and sends a transaction request to the PSP.
  9. The PSP processes the transaction and sends the result back to IXOPAY platform.
  10. ⁮
Merchant
The IXOPAY platform processes the PSP's response and, using the `callbackUrl` field, notifies the merchant via a callback to the URL provided in the initial API call. This callback includes the payment status and any relevant details.
  11. ⁮
Merchant
The merchant handles the callback; additionally, it is recommended to store the transaction's `uuid` for future use.
  12. ⁮
Merchant
The merchant responds to the callback with:
Callback response
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```  13. The IXOPAY platform redirects the customer to the merchants `successUrl`, `cancelUrl` or `errorUrl`, depending on the status of the transaction.
info
If the payment is in status `PENDING` the user will still be redirected to the success page in `successUrl`.
  14. The customer's browser loads the merchants response URL.
  15. ⁮
Merchant
The merchant displays the appropriate thank-you or error page based on the payment status received in the callback. Depending on the `returnType` chosen, the page will render a full page in the browser or in an ``.
tip
On that page you usually want to notify your top browser frame via JavaScript about the transaction result. Another approach is to let the success page break out of the ``.

Here's a visual representation of the processing flow using a sequence diagram:
Sequence diagram for hosted payment pages processing A visual representation of the steps listed above.PSPIXOPAY platformMerchant Start transactionShow hosted payment pageSubmit formalt​par​Show final pageCustomerPurchase1Debit2Result with redirectUrl3Redirect4GET payment page5Payment page6Submit payment data7Transaction8Result9Callback to callback URL10Store result11OK12Redirects back to successUrl, errorUrl or cancelUrl13Get response URL14Thank-you or error page15
## See also[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#see-also "Direct link to See also")
  * [Guides: Hosted payment pages](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/hosted-payment-pages) – a detailed walkthrough on how to integrate hosted payment pages into your application, with code examples.
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```  * [Use cases](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#use-cases)
  * [Processing flow](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#processing-flow)
  * [See also](https://documentation.ixopay.com/docs/reference/integration/processing-options/hosted-payment-pages#see-also)
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage" // or iframe  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```