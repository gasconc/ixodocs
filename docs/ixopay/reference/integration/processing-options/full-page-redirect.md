---
title: Full-page redirect
summary: ' Processing optionshttps://documentation.ixopay.com/docs/reference/integration/processing-options  Full-page
  redirect'
tags:
- cases-https-documentation-ixopay-com-docs-reference-integration-processing-options-full-redirect-cases-direct-link-cases
- processing-flow-https-documentation-ixopay-com-docs-reference-integration-processing-options-full-redirect-processing-flow-direct-link-processing-flow
- api
- ixopay
- psp
- transaction
- merchant
- gateway
source_url: https://documentation.ixopay.com/docs/reference/integration/processing-options/full-page-redirect
portal: ixopay-dev
updated: '2026-08-01'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Processing options](https://documentation.ixopay.com/docs/reference/integration/processing-options)
  * Full-page redirect

# Full-page redirect
Full-page redirects are a processing option, offered by the [IXOPAY platform](https://www.ixopay.com), that redirects the customer away from the merchant's site to the payment service provider's (PSP) payment page. This option is often required by alternative payment methods and is a popular choice for merchants who do not want to handle the payment process themselves.
## Use cases[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/full-page-redirect#use-cases "Direct link to Use cases")
  * Alternative payment methods often require full-page redirects.
  * Merchants who do not want to handle the payment process themselves may opt for full-page redirects.
  * If the checkout page of the merchant is a static site, all processing can be handled by IXOPAY platform and the PSP.

## Processing flow[​](https://documentation.ixopay.com/docs/reference/integration/processing-options/full-page-redirect#processing-flow "Direct link to Processing flow")
  1. The customer initiates a purchase on the merchant's website.
  2. ⁮
Merchant
The merchant sends a [debit](https://documentation.ixopay.com/api/transaction/debit) or [preauthorize](https://documentation.ixopay.com/api/transaction/preauthorize) request to IXOPAY platform.
  3. The IXOPAY platform processes the request and sends a transaction request to the PSP.
  4. The PSP processes the transaction and sends the result back to IXOPAY platform.
  5. ⁮
Merchant
The IXOPAY platform sends the result with a return type "redirect" and a redirect URL to the merchant.
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```  6. ⁮
Merchant
The merchant redirects the customer's browser to the provided redirect URL, switching temporarily to the PSP's payment page. This can be done on the backend by responding to the customer with an [HTTP redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) using a `Location` HTTP header or on the frontend by setting the browser's `window.location`.
  7. The customer's browser loads the PSP's payment page.
  8. The PSP delivers the payment page.
  9. The customer completes the payment process on the PSP's payment page.
  10. Once the payment is completed, the PSP sends a callback to the IXOPAY platform.
  11. ⁮
Merchant
The IXOPAY platform processes the PSP's response and, using the `callbackUrl` field, notifies the merchant via a callback to the URL provided in the initial API call. This callback includes the payment status and any relevant details.
  12. ⁮
Merchant
The merchant handles the callback; additionally, it is recommended to store the transaction's `uuid` for future use.
  13. ⁮
Merchant
The merchant responds to the callback with:
Callback response
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```  14. The IXOPAY platform responds to the PSP's callback.
  15. The PSP redirects the customer to the merchants `successUrl`, `cancelUrl` or `errorUrl`, depending on the status of the transaction.
info
If the payment is in status `PENDING` the user will still be redirected to the success page in `successUrl`.
  16. The customer's browser loads the merchants response URL.
  17. ⁮
Merchant
The merchant displays the appropriate thank-you or error page based on the payment status received in the callback.

Here's a visual representation of the processing flow using a sequence diagram:
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```  * [Use cases](https://documentation.ixopay.com/docs/reference/integration/processing-options/full-page-redirect#use-cases)
  * [Processing flow](https://documentation.ixopay.com/docs/reference/integration/processing-options/full-page-redirect#processing-flow)
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```
```

{  

  "success": true,  

  // ...  

  "returnType": "REDIRECT",  

  "redirectUrl": "https://gateway.ixopay.com/redirect/d94c0d72f3a36e21f16e/ABCDEF01234567890ABCDEF01234567890",  

  "redirectType": "fullpage"  

}  

```
```

HTTP/1.1 200 OK  

Content-Type: text/plain  

  

OK  

```
```
%%{ init: { "sequence": {"mirrorActors": false} } }%%
sequenceDiagram
  accTitle: Sequence diagram for full-page redirect processing
  accDescr: A visual representation of the steps listed above.
  autonumber
  actor C as Customer
  participant M as Merchant
  participant G as IXOPAY platform
  participant PSP

  Note over C,PSP: Start transaction
  C-->>+M: Purchase
  M->>+G: Debit
  G-->>+PSP: Transaction
  PSP-->>-G: Result
  G->>-M: Result with redirectUrl
  M->>-C: Redirect

  Note over C,PSP: Show payment page
  C-->>+PSP: GET payment page
  PSP-->>-C: Payment page

  Note over C,PSP: Submit form
  C-->>+PSP: Submit payment data
  par
    PSP-->>+G: Transaction
    G-)+M: Callback to callback URL
    M->>M: Store result
    M->>-G: OK
    G-->>-PSP: Result
  end
  PSP-->>-C: Redirects back to successUrl, errorUrl or cancelUrl

  Note over C,PSP: Show final page
  C-->>+M: Get response URL
  M->>-C: Thank-you or error page
```