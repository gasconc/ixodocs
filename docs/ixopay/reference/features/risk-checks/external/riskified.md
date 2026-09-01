---
title: Riskified
summary: ' Risk checkshttps://documentation.ixopay.com/docs/reference/features/risk-checks  External
  risk checkshttps://documentation.ixopay.com/docs/reference/features/risk-checks/external'
tags:
- transaction-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-transaction-fields-direct-link-transaction-fields
- standard-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-standard-fields-direct-link-standard-fields
- customer-object-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-customer-object-fields-direct-link-customer-object-fields
- items-array-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-items-array-fields-direct-link-items-array-fields
- l2l3data-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-l2l3data-fields-direct-link-l2l3data-fields
- extradata-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-extradata-fields-direct-link-extradata-fields
- customer-extradata-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-customerextradata-fields-direct-link-customerextradata-fields
- automatically-populated-fields-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-automatically-populated-fields-direct-link-automatically-populated-fields
- payment-details-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-payment-details-direct-link-payment-details
- decision-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-riskified-decision-direct-link-decision
source_url: https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified
portal: ixopay-dev
updated: '2026-09-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks)
  * [External risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks/external)
  * Riskified

# Riskified
When processing transactions through the [IXOPAY platform](https://www.ixopay.com), Riskified external risk checks can be utilized to enhance your transaction security. This guide covers the fields Riskified expects and the steps required to initiate these checks.
## Transaction fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#transaction-fields "Direct link to Transaction fields")
Riskified fraud screening relies primarily on standard fields already used by the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api), enriched with a small set of `extraData` keys that have no standard field equivalent.
### Standard fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#standard-fields "Direct link to Standard fields")  
| IXOPAY API field  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `amount`  | `order.total_price`  | **Yes**  | Decimal string, e.g. `49.99`  |  
| `currency`  | `order.currency`  | **Yes**  | ISO 4217, e.g. `EUR`  |  
| `language`  | `order.client_details.accept_language`  | Recommended  | ISO 639-1, e.g. `en`  |  
###  `customer` object fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#customer-object-fields "Direct link to customer-object-fields")  
| IXOPAY API field  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `customer.email`  | `order.customer.email`  | **Yes**  | Max 255 characters  |  
| `customer.emailVerified`  | `order.customer.verified_email`  | Recommended  | Boolean  |  
| `customer.firstName`  | `order.customer.first_name`  | Recommended  | Used for both billing and shipping; max 50 characters  |  
| `customer.lastName`  | `order.customer.last_name`  | Recommended  | Used for both billing and shipping; max 50 characters  |  
| `customer.ipAddress`  | `order.browser_ip`  | **Yes**  | IPv4 or IPv6; max 50 characters  |  
|  `customer.billingAddress1`, `customer.billingAddress2`, `customer.company`, `customer.billingCity`, `customer.billingState`, `customer.billingPostcode`, `customer.billingCountry`, `customer.billingPhone`  |  `order.billing_address.address1`, `.address2`, `.company`, `.city`, `.province`/`.province_code`, `.zip`, `.country`/`.country_code`, `.phone`  | Recommended  | Billing address, `billingCountry` as ISO 3166-1 alpha-2  |  
|  `customer.shippingAddress1`, `customer.shippingAddress2`, `customer.shippingCompany`, `customer.shippingCity`, `customer.shippingState`, `customer.shippingPostcode`, `customer.shippingCountry`, `customer.shippingPhone`  |  `order.shipping_address.address1`, `.address2`, `.company`, `.city`, `.province`/`.province_code`, `.zip`, `.country`/`.country_code`, `.phone`  | Recommended  | Shipping address, `shippingCountry` as ISO 3166-1 alpha-2  |  
note
Riskified's customer ID (`order.customer.id`) is **not** taken from `customer.identification`. It's populated from the customer profile linked to the transaction (if you use the customer profile/vault feature) and is left empty otherwise.
###  `items[]` array fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#items-array-fields "Direct link to items-array-fields")
Include one entry per product in the order.  
| IXOPAY API field  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `items[n].price`  | `line_items[].price`  | Recommended  | Decimal string or number  |  
| `items[n].quantity`  | `line_items[].quantity`  | Recommended  | Integer ≥ 1  |  
| `items[n].name`  | `line_items[].title`  | Recommended  | Product display name  |  
| `items[n].identification`  |  `line_items[].sku`; also the fallback for `line_items[].product_id`  | Recommended  | Your SKU/product ID; always sent as `sku`, and used as `product_id` unless `items[n].extraData.product_id` is set  |  
| `items[n].description`  | `line_items[].category`  | Optional  | Used as a fallback product category unless `items[n].l2l3Data.category` is set  |  
| `items[n].extraData.product_id`  | `line_items[].product_id`  | Optional  | Distinct product ID, if different from the SKU  |  
| `items[n].extraData.sub_category`  | `line_items[].sub_category`  | Optional  | Product sub-category  |  
| `items[n].extraData.requires_shipping`  | `line_items[].requires_shipping`  | Optional  |  `true`/`false` or `1`/`0`  |  
| `items[n].extraData.delivered_to`  | `line_items[].delivered_to`  | Conditional  | Required for mixed shipment orders. Either `shipping_address` or `store_pickup`  |  
###  `l2l3Data` fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#l2l3data-fields "Direct link to l2l3data-fields")  
| IXOPAY API field  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `l2l3Data.freightAmount`  | `shipping_lines.price`  | Recommended  | Transaction-level total shipping cost  |  
| `items[n].l2l3Data.type`  | `line_items[].product_type`  | Recommended  | Product type  |  
| `items[n].l2l3Data.category`  | `line_items[].category`  | Recommended  | Product category  |  
| `items[n].l2l3Data.brand`  | `line_items[].brand`  | Recommended  | Brand name  |  
###  `extraData` fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#extradata-fields "Direct link to extradata-fields")
Custom key-value pairs passed inside the transaction-level `extraData` object.  
|  `extraData` key  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `extraData["riskified_session_id"]`  | `order.cart_token`  | Automatic — usually set for you  | Session ID from the Riskified beacon script. Attached to the payment token by payment.js at tokenization, or seeded with the transaction UUID by the HPP beacon script — see [Initializing the risk script](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#initializing-the-risk-script). Only set this manually if your integration uses neither path. Falls back to the transaction UUID if not set  |  
| `extraData["referring_site"]`  | `order.referring_site`  | **Yes**  | Full URL of the page that referred the customer to checkout  |  
| `extraData["source"]`  | `order.source`  | **Yes**  | Channel the order originated from, e.g. `web`, `mobile_app`, `moto`  |  
| `extraData["user_agent"]`  | `order.client_details.user_agent`  | Recommended  | Browser `User-Agent` string  |  
| `extraData["total_discounts"]`  | `order.total_discounts`  | **Yes**  | Total discount amount; send `0` if no discounts apply  |  
| `extraData["shipping_title"]`  | `shipping_lines.title`  | Recommended  | Display name of the selected shipping method  |  
| `extraData["note"]`  | `order.note`  | Optional  | Free-text note about the order  |  
| `extraData["order_id"]`  | `order.id`  | Optional  | Your own order ID. If set, it's used instead of the transaction UUID and reused for every subsequent event (`checkoutDenied`, `decision`) linked to this transaction  |  
###  `customer.extraData` fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#customerextradata-fields "Direct link to customerextradata-fields")
Custom key-value pairs passed inside the `extraData` object of the `customer` object.  
|  `customer.extraData` key  | Riskified API field  | Required  | Notes  |  
| --- | --- | --- | --- |  
| `customer.extraData["account_type"]`  | `order.customer.account_type`  | Recommended  |  `guest` or `registered`  |  
| `customer.extraData["account_creation_date"]`  | `order.customer.created_at`  | Recommended  | ISO 8601 timestamp; falls back to the transaction date if omitted  |  
### Automatically populated fields[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#automatically-populated-fields "Direct link to Automatically populated fields")
These `order`-level fields are derived entirely from existing transaction and merchant data — there's nothing to configure.  
| Riskified field  | Source  |  
| --- | --- |  
| `order.email`  | Customer email (duplicated at the top level of `order`, in addition to `order.customer.email`)  |  
| `order.created_at`  | Transaction creation timestamp  |  
| `order.vendor_name`  | Merchant name configured on the project  |  
| `order.gateway`  | Adapter/gateway name; `_3ds` is appended when the transaction carries a 3D Secure liability shift  |  
### Payment details[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#payment-details "Direct link to Payment details")
IXOPAY platform also builds `payment_details` automatically from the transaction's card and BIN data. The shape sent depends on the payment method, and both shapes are sent with the `decide` and `decision` calls.
**Card payments** :  
| Riskified field  | Source  |  
| --- | --- |  
| `type`  | `card`  |  
| `avs_result_code`  | AVS result code recorded on the transaction  |  
| `cvv_result_code`  | CVV2 match code from the transaction result data  |  
| `credit_card_bin`  | Card BIN digits  |  
| `credit_card_company`  | Card brand from the BIN lookup  |  
| `credit_card_country`  | Issuing country (ISO 3166-1 alpha-2) from the BIN lookup  |  
| `credit_card_number`  | Masked PAN, e.g. `XXXX-XXXX-XXXX-1234`  |  
| `authorization_id`  | Scheme transaction identifier from the payment network response  |  
| `authentication_result.liability_shift`  | Derived from the card's ECI value; `true` for an authenticated or attempted 3D Secure liability shift  |  
| `authentication_result.eci`  | ECI value recorded on the card  |  
**PayPal payments**  
| Riskified field  | Source  |  
| --- | --- |  
| `payment_type`  | `paypal`  |  
| `payer_email`  | Wallet owner email recorded on the transaction, if available  |  
| `mid`  | Merchant ID from the connector's configuration  |  
### Decision[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#decision "Direct link to Decision")
`decision` is sent automatically once the transaction succeeds, to confirm the approval to Riskified. It carries the same `payment_details` shape as `decide`, plus:  
| Riskified field  | Source  |  
| --- | --- |  
| `decision.external_status`  | Always `approved` — IXOPAY platform only reports successful transactions this way  |  
| `decision.decided_at`  | Transaction creation timestamp  |  
| `decision.amount`  | Transaction amount  |  
| `decision.currency`  | Transaction currency  |  
### Checkout denied[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#checkout-denied "Direct link to Checkout denied")
If a payment or validation error occurs after the initial `decide` call, IXOPAY platform automatically sends a minimal `checkoutDenied` call:  
| Riskified field  | Source  |  
| --- | --- |  
| `checkout.id`  | Same order ID resolved for the `decide` call  |  
| `checkout.payment_details[0].authorization_error.created_at`  | Transaction timestamp  |  
| `checkout.payment_details[0].authorization_error.error_code`  | Error code from the transaction error  |  
| `checkout.payment_details[0].authorization_error.message`  | Error message from the transaction error  |  
## Initializing the risk script[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#initializing-the-risk-script "Direct link to Initializing the risk script")
Riskified correlates its device fingerprinting beacon with an order via a session ID (`cart_token`). How that session ID reaches the transaction depends on whether you use payment.js or an IXOPAY platform hosted payment page.
  * Using payment.js
  * Without payment.js

With payment.js, the Riskified beacon is handled automatically once an active Riskified risk rule is configured: the beacon loads on the merchant's page, and its session ID is attached to the payment token as `additionalData.riskified_session_id` during tokenization. When the transaction is created with that `transactionToken`, the session ID is carried over as `extraData["riskified_session_id"]` before the risk check runs.
important
Tokenize first, then create the transaction. The beacon session ID travels with the token — a transaction created before tokenization cannot carry it and falls back to the transaction UUID as `cart_token`.
If _Init Scripts Automatically_ is disabled on the connector, initialize the beacon manually:
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```If your payment form is an IXOPAY platform hosted payment page instead of payment.js or your own checkout page, the Riskified `decide` call is made when the transaction is **created** — before the customer opens the payment page — so a session ID generated on the page can never reach that call. Instead, seed the beacon with the **transaction UUID** : IXOPAY platform automatically sends the UUID as `cart_token` when no `riskified_session_id` extra data is present.
Add to the payment template:
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Riskified. If you encounter issues, review your connector configuration or the extra data you're providing.
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Riskified. If you encounter issues, review your connector configuration or the extra data you're providing.
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks)
  * [External risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks/external)
  * Riskified
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Riskified. If you encounter issues, review your connector configuration or the extra data you're providing.
  * [Transaction fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#transaction-fields)
    * [Standard fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#standard-fields)
    * [`customer` object fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#customer-object-fields)
    * [`items[]` array fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#items-array-fields)
    * [`l2l3Data` fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#l2l3data-fields)
    * [`extraData` fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#extradata-fields)
    * [`customer.extraData` fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#customerextradata-fields)
    * [Automatically populated fields](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#automatically-populated-fields)
    * [Payment details](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#payment-details)
    * [Decision](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#decision)
    * [Checkout denied](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#checkout-denied)
  * [Initializing the risk script](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/riskified#initializing-the-risk-script)
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "riskified" }, function (sessionId) {  

        // beacon loaded; sessionId will be attached automatically at tokenize  

      });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/riskified-dc.min.js"></script>  

<script>  

  // retrieve your shop domain from your Riskified dashboard  

  const riskifiedShopDomain = "your-shop-domain";  

  const riskifiedDc = new RiskifiedDcHandler(riskifiedShopDomain, document.getElementById("uuid").value);  

  

  riskifiedDc.initRiskifiedDc();  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Riskified. If you encounter issues, review your connector configuration or the extra data you're providing.