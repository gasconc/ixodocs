---
title: Stripe
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-stripe-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-stripe-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-stripe-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-stripe-responses-direct-link-responses
- api
- 3ds
- 3d-secure
- pci
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe
portal: tokenex
updated: '2026-06-29'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Stripe

# Stripe
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#overview "Direct link to Overview")
**Gateway Website:**  **Developer Documentation:**  **Default Currency:** USD
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `OrderInfo`, `SoftDescriptors`
**Gateway Endpoints** This implementation of Stripe forwards requests to the below endpoints. See [Stripe's Test mode versus Live mode](https://stripe.com/docs/test-mode#test-versus-live-mode). **Production** :  **Sandbox** : 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field  
| Field Name  | Type  | Stripe Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | Stripe  |  
|  `privateKey`*  | string  | `api_key`  | Your Stripe secret key provisions in the Stripe dashboard. Prefixed with either _sk_test** or _sk_live**. See the [Stripe API Authentication page](https://stripe.com/docs/api/authentication) for more information.  |  
| `merchantId`  | string  | `stripe_account`  | Allows you to make requests as a connected account by including a Stripe account ID in this field. See the [Stripe API Connected Accounts page](https://stripe.com/docs/api/connected_accounts) for more information.  |  
| `idempotencyKey`  | string  | `idempotency_key`  | A unique key for safely retrying requests without accidentally performing the same operation twice. This is useful when an API call is disrupted in transit and you do not receive a response. See the [Stripe API Idempotency page](https://stripe.com/docs/api/idempotent_requests) for more information  |  
| `amount`  | numeric  | `amount`  | Transaction amount in smallest currency units. Example: $10.00 USD should be sent as 1000  |  
| `currencyCode`  | string  | `currency`  | Currency of the transaction.  
Use the [ISO 4217 three-letter alphabetic code](https://www.iso.org/iso-4217-currency-codes.html) for the currency.  |  
| `paymentMethodId`  | string  | `payment_method`  | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to the [PaymentIntent](https://stripe.com/docs/api/payment_intents).  |  
| `paymentMethodData.Type`  | string  | `payment_method_data.type`  | The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.  |  
| `paymentMethodData.Metadata`  | object  | `payment_method_data.metadata`  | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to this field.  |  
| `creditCard.Number`  | string  | `card.number`  | Card number or TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| `creditCard.ExpMonth`  | string  | `card.exp_month`  | The two-digit expiration month of the card. Example: 01  |  
| `creditCard.ExpYear`  | string  | `card.exp_year`  | The four-digit expiration year of the card. Example: 2022  |  
| `creditCard.CVV`  | string  | `card.cvc`  | The three- or four-digit number on the back of a credit card (on the front for American Express).  
  
This field is required if the merchant would like to use the Card Code Verification (CCV) security feature.  
  
Cardholder information must be stored securely and in accordance with the Payment Card Industry (PCI) Data Security Standard.  |  
| `creditCard.Metadata`  | object  | `card.metadata`  | A set of key-value pairs that you can attach to a card object. This can be useful for storing additional information about the card in a structured format.  |  
| `billingAddress.Address1`  | string  | `payment_method_data.billing_details.address.line1`  | Customer’s billing address.  |  
| `billingAddress.Address2`  | string  | `payment_method_data.billing_details.address.line2`  | Customer’s billing address, line 2.  |  
| `billingAddress.Country`  | string  | `payment_method_data.billing_details.address.country`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `billingAddress.City`  | string  | `payment_method_data.billing_details.address.city`  | City of customer’s billing address.  |  
| `billingAddress.State`  | string  | `payment_method_data.billing_details.address.state`  | State of customer’s billing address.  |  
| `billingAddress.Zip`  | string  | `payment_method_data.billing_details.address.postal_code`  | Postal code of customer’s billing address.  |  
| `billingAddress.Email`  | string  | `payment_method_data.billing_details.email`  | Email address associated with customer’s billing address.  |  
| `billingAddress.Phone`  | string  | `payment_method_data.billing_details.phone`  | Phone number associated with customer’s billing address.  |  
| `billingAddress.FirstName`  | string  | `payment_method_data.billing_details.name`  | First name associated with customer’s shipping address. Concatenated with the last name into the `name` field  |  
| `billingAddress.LastName`  | string  | `payment_method_data.billing_details.name`  | Last name associated with customer’s shipping address. Concatenated with the last name into the `name` field  |  
| `applicationFeeAmount`  | numeric  | `application_fee_amount`  | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account. The amount of the application fee collected will be capped at the total payment amount.  |  
| `confirmationMethod`  | string  | `confirmation_method`  | Possible values: `automatic`, `manual`. For `automatic`, payments can be confirmed with a publishable key. For `manual`, all payment attempts must be made using a secret key.  |  
| `description`  | string  | `description`  | An arbitrary string attached to the object. Often useful for displaying to users.  |  
| `expand`  | array  | `expand`  | A list of response parameters to expand to return additional information that isn't normally in the response. See the [Stripe API Expanding Responses](https://stripe.com/docs/api/expanding_objects) page for more information  |  
| `metadata`  | object  | `metadata`  | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. For more information, see the [Stripe API Metadata page](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).  |  
| `offSession`  | boolean  | `off_session`  | Set to `true` to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and charge them later.  |  
| `paymentMethodTypes`  | array  | `payment_method_types`  | The list of payment method types that this PaymentIntent is allowed to use. If this is not provided, defaults to [“card”].  |  
| `receiptEmail`  | string  | `receipt_email`  | Email address that the receipt for the resulting payment will be sent to.  |  
| `setupFutureUsage`  | string  | `setup_future_usage`  | Indicates that you intend to make future payments with this PaymentIntent’s payment method. Possible values: `on_session`, `off_session`  |  
| `softDescriptors.Descriptor`  | string(22)  | `statement_descriptor`  | For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.  |  
| `softDescriptors.DescriptorSuffix`  | string  | `statement_descriptor_suffix`  | Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.  |  
| `statementDescriptor`  | string(22)  | `statement_descriptor`  | Same description as softDescriptors.Descriptor. If user provides softDescriptors.Descriptor then this field is ignored.  |  
| `statementDescriptorSuffix`  | string  | `statement_descriptor_suffix`  | Same description as softDescriptors.DescriptorSuffix. If user provides softDescriptors.DescriptorSuffix then this field is ignored.  |  
| `onBehalfOf`  | string  | `on_behalf_of`  | The Stripe account ID for which these funds are intended.  |  
| `returnUrl`  | string  | `return_url`  | The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site. If you’d prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.  |  
| `orderInfo.CustomerId`  | string  | `customer`  | ID of the Customer this PaymentIntent belongs to, if one exists.  |  
| `orderInfo.Customer.Address.Address1`  | string  | `customer.address.line1`  | Customer’s address.  |  
| `orderInfo.Customer.Address.Address2`  | string  | `customer.address.line2`  | Customer’s address, line 2.  |  
| `orderInfo.Customer.Address.Country`  | string  | `customer.address.country`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `orderInfo.Customer.Address.City`  | string  | `customer.address.city`  | City of customer’s address.  |  
| `orderInfo.Customer.Address.State`  | string  | `customer.address.state`  | State of customer’s address.  |  
| `orderInfo.Customer.Address.Zip`  | string  | `customer.address.postal_code`  | Postal code of customer’s address.  |  
| `orderInfo.Customer.Address.Phone`  | string  | `customer.phone`  | The customer's phone number.  |  
| `orderInfo.Customer.Name`  | string  | `customer.name`  | The customer’s full name or business name.  |  
| `orderInfo.Customer.Description`  | string  | `customer.description`  | An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.  |  
| `orderInfo.Customer.Email`  | string(512)  | `customer.email`  | Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters.  |  
| `orderInfo.Customer.Balance`  | numeric  | `customer.balance`  | An amount in smallest currency units that represents the customer’s current balance, which affects the customer’s future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.  |  
| `orderInfo.Customer.Coupon`  | string  | `customer.coupon`  | If you provide a coupon code, the customer will have a discount applied on all _recurring_ charges. Charges you create through this gateway's Authorize or Purchase methods will not have the discount.  |  
| `orderInfo.Customer.InvoicePrefix`  | string(3-12)  | `customer.invoice_prefix`  | The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.  |  
| `orderInfo.Customer.InvoiceSettings.DefaultPaymentMethod`  | string  | `customer.invoice_settings.default_payment_method`  | ID of a payment method that’s attached to the customer, to be used as the customer’s default payment method for subscriptions and invoices.  |  
| `orderInfo.Customer.InvoiceSettings.Footer`  | string  | `customer.invoice_settings.footer`  | Default footer to be displayed on invoices for this customer.  |  
| `orderInfo.Customer.InvoiceSettings.CustomFields`  | object  | `customer.invoice_settings.custom_fields`  | Default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.   
  
Each property of this object is mapped to the `name` and `value` fields as passed. For example, an object `{ "myKey": "myValue" }` will map to an array containing a single Stripe Custom Field with the `name` "myKey" and `value` "myValue"  |  
| `orderInfo.Customer.NextInvoiceSequence`  | numeric  | `customer.next_invoice_sequence`  | The sequence to be used on the customer’s next invoice. Defaults to 1.  |  
| `orderInfo.Customer.PromotionCode`  | string  | `customer.promotion_code`  | The API ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through this gateway's Authorize or Purchase methods will not have the discount.  |  
| `orderInfo.Customer.SourceId`  | string  | `customer.source`  | When using payment sources created via the Stripe Token or Stripe Sources APIs, passing this parameter will create a new source object, make it the new customer default source, and delete the old customer default if one exists.Whenever you attach a card to a customer, Stripe will automatically validate the card.  |  
| `orderInfo.Customer.PreferredLocales`  | array  | `customer.preferred_locales`  | Customer’s preferred languages, ordered by preference.  |  
| `orderInfo.Customer.Expand`  | array  | `customer.expand`  | A list of response parameters to expand to return additional information that isn't normally in the response. See the [Stripe API Expanding Responses](https://stripe.com/docs/api/expanding_objects) page for more information  |  
| `orderInfo.Customer.Metadata`  | object  | `customer.metadata`  | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.  |  
| `orderInfo.Customer.Shipping.Address.Phone`  | string  | `customer.shipping.phone`  | Customer phone (including extension).  |  
| `orderInfo.Customer.Shipping.Address.Address1`  | string  | `customer.shipping.address.line1`  | Customer’s shipping address.  |  
| `orderInfo.Customer.Shipping.Address.Address2`  | string  | `customer.shipping.address.line2`  | Customer’s shipping address, line 2.  |  
| `orderInfo.Customer.Shipping.Address.Country`  | string  | `customer.shipping.address.country`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `orderInfo.Customer.Shipping.Address.City`  | string  | `customer.shipping.address.city`  | City of customer’s shipping address.  |  
| `orderInfo.Customer.Shipping.Address.State`  | string  | `customer.shipping.address.state`  | State of customer’s shipping address.  |  
| `orderInfo.Customer.Shipping.Address.Zip`  | string  | `customer.shipping.address.postal_code`  | Postal code of customer’s shipping address.  |  
| `transferGroup`  | string  | `transfer_group`  | A string that identifies the resulting payment as part of a group.  |  
| `transferData.Destination`  | string  | `transfer_data.destination`  | If specified, successful charges will be attributed to the destination account for tax reporting, and the funds from charges will be transferred to the destination account. The ID of the resulting transfer will be returned on the successful charge’s `transfer` field.  |  
| `transferData.Amount`  | numeric  | `transfer_data.amount`  | The amount that will be transferred automatically when a charge succeeds in the smallest currency units. The amount is capped at the total transaction amount and if no amount is set, the full amount is transferred.  |  
| `paymentMethodOptions.Card.CvcToken`  | string  | `payment_method_options.card.cvc_token`  | A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt.  |  
| `paymentMethodOptions.Card.Moto`  | boolean  | `payment_method_options.card.moto`  | When specified, this parameter indicates that a transaction will be marked as MOTO (Mail Order Telephone Order) and thus out of scope for SCA.  |  
| `paymentMethodOptions.Card.Network`  | string  | `payment_method_options.card.network`  | Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent.  |  
| `paymentMethodOptions.Card.RequestThreeDSecure`  | string  | `payment_method_options.card.request_three_d_secure`  | If you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: automatic or any. If not provided, defaults to automatic. See the [Stripe API Manual 3DS page](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information.  |  
| `paymentMethodOptions.Card.Installments.Enabled`  | boolean  | `payment_method_options.card.installments.enabled`  | Setting to true enables installments for this PaymentIntent. This will cause the response to contain a list of available installment plans. Setting to false will prevent any selected plan from applying to a charge.  |  
| `paymentMethodOptions.Card.Installments.Plan.Count`  | numeric  | `payment_method_options.card.installments.plan.count`  | For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.  |  
| `paymentMethodOptions.Card.Installments.Plan.Interval`  | string  | `payment_method_options.card.installments.plan.interval`  | For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card. One of `month`.  |  
| `paymentMethodOptions.Card.Installments.Plan.Type`  | string  | `payment_method_options.card.installments.plan.type`  | Type of installment plan, one of `fixed_count`.  |  
| `shippingAddress.Address1`  | string  | `shipping.address.line1`  | Customer’s shipping address.  |  
| `shippingAddress.Address2`  | string  | `shipping.address.line2`  | Customer’s shipping address, line 2.  |  
| `shippingAddress.Country`  | string  | `shipping.address.country`  |  [Alpha-3 ISO](https://www.iso.org/iso-3166-country-codes.html) country code  |  
| `shippingAddress.City`  | string  | `shipping.address.city`  | City of customer’s shipping address.  |  
| `shippingAddress.State`  | string  | `shipping.address.state`  | State of customer’s shipping address.  |  
| `shippingAddress.Zip`  | string  | `shipping.address.postal_code`  | Postal code of customer’s shipping address.  |  
| `shippingAddress.Phone`  | string  | `shipping.phone`  | Phone number associated with customer’s shipping address.  |  
| `shippingAddress.FirstName`  | string  | `shipping.name`  | First name associated with customer’s shipping address. Concatenated with the last name into the `name` field  |  
| `shippingAddress.LastName`  | string  | `shipping.name`  | Last name associated with customer’s shipping address. Concatenated with the first name into the `name` field  |  
| `shippingAddress.Carrier`  | string  | `shipping.carrier`  | The carrier handling the shipment  |  
| `shippingAddress.TrackingNumber`  | string  | `shipping.tracking_number`  | The tracking number provided by the carrier.  |  
| `mandate`  | string  | `mandate`  | ID of the mandate to be used for this payment.  |  
| `mandateCustomerAcceptanceData.Type`  | string  | `mandate_data.customer_acceptance.type`  | The type of customer acceptance information included with the Mandate. One of `online` or `offline`.  |  
| `mandateCustomerAcceptanceData.OnlineUserAgent`  | string  | `mandate_data.customer_acceptance.online.user_agent`  | The user agent of the browser from which the Mandate was accepted by the customer.  |  
| `mandateCustomerAcceptanceData.OnlineIpAddress`  | string  | `mandate_data.customer_acceptance.online.ip_address`  | The IP address from which the Mandate was accepted by the customer.  |  
| `mandateCustomerAcceptanceData.AcceptedAt`  | string  | `mandate_data.customer_acceptance.accepted_at`  | The time at which the customer accepted the mandate. Must be sumbitted in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.  |  
| `cancellationReason`  | string  | `cancellation_reason`  | Only used in Card Void requests. Reason for canceling this PaymentIntent. Possible values are `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`  |  
| `reason`  | string  | `reason`  | Only used for Card Refund requests. String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your block lists, and will also help us improve our fraud detection algorithms.  |  
| `refundApplicationFee`  | boolean  | `refund_application_fee`  | Only used for Card Refund requests. Indicates whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded.  |  
| `reverseTransfer`  | boolean  | `reverse_transfer`  | Only used for Card Refund requests. Indicates whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Refund
  * Card Void
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Stripe Result Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approved`  | boolean  | `status`  | True if _Status_ indicates a successful transaction or operation.  |  
| `providerTransactionCode`  | string  | `id`  | Unique identifier for the operation that was just performed.  |  
| `verificationResult.providerParsed.cvv`  | string  | `charges.data[0].payment_method_details.card.checks.cvc_check`  | If a cvv was provided, results of the check: pass, fail, unavailable, or unchecked.  |  
| `verificationResult.providerParsed.streetMatch`  | string  | `charges.data[0].payment_method_details.card.checks.address_line1_check`  | Results of the billing address line 1 check: fail, unavailable, or unchecked.  |  
| `verificationResult.providerParsed.postalCodeMatch`  | string  | `charges.data[0].payment_method_details.card.checks.address_postal_code_check`  | If an address postal code was provided, results of the check: pass, fail, unavailable, or unchecked.  |  
| `merchantReferenceId`  | string  | `charges.data[0].metadata.order_id`  | Reflects the value sent in the request's OrderInfo.OrderId  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Gateway Error
  * Processor Error
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/stripe#example-responses)
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "currencyCode": "USD",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "creditCard": {  

    "brand": "MasterCard",  

    "number": "2223003122003222",  

    "expMonth": 11,  

    "expYear": 2024,  

    "firstName": "Samantha",  

    "lastName": "Gottlieb",  

    "cvv": "123"  

  },  

  "billingAddress": {  

    "carrier": "FedEx",  

    "trackingNumber": "1234567890",  

    "phone": "6514219597",  

    "fax": null,  

    "email": null,  

    "firstName": "Fredrick",  

    "lastName": "Konopelski",  

    "name": null,  

    "company": null,  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Theronbury",  

    "state": "Idaho",  

    "zip": "89105-3085",  

    "country": "USA"  

  },  

  "tax": {  

    "exempt": false  

  },  

  "orderInfo": {  

    "customer": {  

      "address": {  

        "carrier": "FedEx",  

        "trackingNumber": "1234567890",  

        "phone": "2749063220",  

        "firstName": "Bryan",  

        "lastName": "Smith",  

        "address1": "123 Someplace Lane",  

        "address2": "Some Place",  

        "city": "Mohammadfurt",  

        "state": "Illinois",  

        "zip": "27994",  

        "country": "USA"  

      },  

      "email": "Noel34@yahoo.com",  

      "name": "Noel Mraz"  

    }  

  }  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>",  

  "amount": 1000,  

  "currencyCode": "USD"  

}  

```
```

{  

  "amount": 1000,  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "refundApplicationFee": true,  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Capture or Purchase>",  

  "currencyCode": "USD"  

}  

```
```

{  

  "gateway": "Stripe",  

  "privateKey": "<Your Stripe secret key>",  

  "idempotencyKey": "<Your per-request idempotency key>",  

  "cancellationReason": "requested_by_customer",  

  "tokenExTransactionCode": "<TokenExTransactionCode from a successful Authorize call>"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 1000,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KIagyasGMgavzi9F9B86LBYHlfIuujeOh5JO1meAOAcX-HbHFLlmzCg-rUFB9vbWELSAO_19-nONKhVv\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"requires_capture\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717064457542819",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"automatic\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqetFlLscTmW3z1GIaeCst\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990427,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 57,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqetFlLscTmW3z16X1Hzqs\",\n        \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KJygyasGMga4agf6ZY06LBb9_2hCU6zUUsHLt1rwQ6QXYAVUxAZQKoHIpzGJnuqUjZ2LTo1uSirJ4u05\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqetFlLscTmW3z1nJ6KHFO/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqetFlLscTmW3z16X1Hzqs\"\n  },\n  \"client_secret\": \"pi_3OKqetFlLscTmW3z16X1Hzqs_secret_I6fKn1p8VN0qc4D6aVrqrsGcg\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990427,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqetFlLscTmW3z1nJ6KHFO\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqesFlLscTmW3zwIRb3BG0\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWV0RmxMc2NUbVczejE2WDFIenFzO2NoXzNPS3FldEZsTHNjVG1XM3oxbko2S0hGTzs=",  

    "providerTransactionCode": "pi_3OKqetFlLscTmW3z16X1Hzqs",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717070641603674",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 1000,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": null,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 1000,\n        \"amount_refunded\": 0,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z10JIwGkG\",\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": true,\n        \"created\": 1701990405,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 51,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n        \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595205,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KNygyasGMgZ6GbPV_286LBZnE01Z43Xyz_DGO41QFuZNql1BwNp5Wmb7t_wxp2foGuzz0bC3uc6LbZwq\",\n        \"refunded\": false,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/charges/ch_3OKqeXFlLscTmW3z1LfYRsj1/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqeXFlLscTmW3z1VCZQXdj\"\n  },\n  \"client_secret\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj_secret_gnKvigWKUKTPsL8nUVPWt6DPS\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990405,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqeXFlLscTmW3zd1r3t60r\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"succeeded\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTs=",  

    "providerTransactionCode": "pi_3OKqeXFlLscTmW3z1VCZQXdj",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717081077986174",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"re_3OKqeXFlLscTmW3z1al2CRFE\",\n  \"object\": \"refund\",\n  \"amount\": 100,\n  \"balance_transaction\": \"txn_3OKqeXFlLscTmW3z1VBfbAmW\",\n  \"charge\": \"ch_3OKqeXFlLscTmW3z1LfYRsj1\",\n  \"created\": 1701990522,\n  \"currency\": \"usd\",\n  \"destination_details\": {\n    \"card\": {\n      \"reference_status\": \"pending\",\n      \"reference_type\": \"acquirer_reference_number\",\n      \"type\": \"refund\"\n    },\n    \"type\": \"card\"\n  },\n  \"metadata\": {},\n  \"payment_intent\": \"pi_3OKqeXFlLscTmW3z1VCZQXdj\",\n  \"reason\": null,\n  \"receipt_number\": null,\n  \"source_transfer_reversal\": null,\n  \"status\": \"succeeded\",\n  \"transfer_reversal\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWVYRmxMc2NUbVczejFWQ1pRWGRqO2NoXzNPS3FlWEZsTHNjVG1XM3oxTGZZUnNqMTtyZV8zT0txZVhGbExzY1RtVzN6MWFsMkNSRkU=",  

    "providerTransactionCode": "re_3OKqeXFlLscTmW3z1al2CRFE",  

    "approved": true  

  },  

  "referenceNumber": "23120717084240403529",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"id\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n  \"object\": \"payment_intent\",\n  \"amount\": 1000,\n  \"amount_capturable\": 0,\n  \"amount_details\": {\n    \"tip\": {}\n  },\n  \"amount_received\": 0,\n  \"application\": null,\n  \"application_fee_amount\": null,\n  \"automatic_payment_methods\": null,\n  \"canceled_at\": 1701990582,\n  \"cancellation_reason\": null,\n  \"capture_method\": \"manual\",\n  \"charges\": {\n    \"object\": \"list\",\n    \"data\": [\n      {\n        \"id\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n        \"object\": \"charge\",\n        \"amount\": 1000,\n        \"amount_captured\": 0,\n        \"amount_refunded\": 1000,\n        \"application\": null,\n        \"application_fee\": null,\n        \"application_fee_amount\": null,\n        \"balance_transaction\": null,\n        \"billing_details\": {\n          \"address\": {\n            \"city\": \"Tulsa\",\n            \"country\": \"US\",\n            \"line1\": \"123 Someplace Lane\",\n            \"line2\": \"Some Place\",\n            \"postal_code\": \"74111\",\n            \"state\": \"OK\"\n          },\n          \"email\": \"john@doe.dev\",\n          \"name\": \"John Doe\",\n          \"phone\": null\n        },\n        \"calculated_statement_descriptor\": \"TOKENEX\",\n        \"captured\": false,\n        \"created\": 1701990551,\n        \"currency\": \"usd\",\n        \"customer\": null,\n        \"description\": null,\n        \"destination\": null,\n        \"dispute\": null,\n        \"disputed\": false,\n        \"failure_balance_transaction\": null,\n        \"failure_code\": null,\n        \"failure_message\": null,\n        \"fraud_details\": {},\n        \"invoice\": null,\n        \"livemode\": false,\n        \"metadata\": {},\n        \"on_behalf_of\": null,\n        \"order\": null,\n        \"outcome\": {\n          \"network_status\": \"approved_by_network\",\n          \"reason\": null,\n          \"risk_level\": \"normal\",\n          \"risk_score\": 10,\n          \"seller_message\": \"Payment complete.\",\n          \"type\": \"authorized\"\n        },\n        \"paid\": true,\n        \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n        \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n        \"payment_method_details\": {\n          \"card\": {\n            \"amount_authorized\": 1000,\n            \"brand\": \"visa\",\n            \"capture_before\": 1702595351,\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"extended_authorization\": {\n              \"status\": \"disabled\"\n            },\n            \"fingerprint\": \"76aWJWQ8jkWogfAg\",\n            \"funding\": \"credit\",\n            \"incremental_authorization\": {\n              \"status\": \"unavailable\"\n            },\n            \"installments\": null,\n            \"last4\": \"4242\",\n            \"mandate\": null,\n            \"multicapture\": {\n              \"status\": \"unavailable\"\n            },\n            \"network\": \"visa\",\n            \"network_token\": {\n              \"used\": false\n            },\n            \"overcapture\": {\n              \"maximum_amount_capturable\": 1000,\n              \"status\": \"unavailable\"\n            },\n            \"three_d_secure\": null,\n            \"wallet\": null\n          },\n          \"type\": \"card\"\n        },\n        \"receipt_email\": null,\n        \"receipt_number\": null,\n        \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHoxTk5GbExzY1RtVzN6KLahyasGMgZg5mwXCTw6LBa1mwyOIDsblQCDz-AGmaJWdh_6ZVC8luElfipSCQ7jhtcuLW8cdKgOa1QX\",\n        \"refunded\": true,\n        \"refunds\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"re_3OKqgtFlLscTmW3z0PVU1Kzk\",\n              \"object\": \"refund\",\n              \"amount\": 1000,\n              \"balance_transaction\": null,\n              \"charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n              \"created\": 1701990582,\n              \"currency\": \"usd\",\n              \"destination_details\": {\n                \"card\": {\n                  \"reference\": \"669397\",\n                  \"reference_status\": \"available\",\n                  \"reference_type\": \"system_trace_audit_number\",\n                  \"type\": \"reversal\"\n                },\n                \"type\": \"card\"\n              },\n              \"metadata\": {},\n              \"payment_intent\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr\",\n              \"reason\": null,\n              \"receipt_number\": null,\n              \"source_transfer_reversal\": null,\n              \"status\": \"succeeded\",\n              \"transfer_reversal\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/charges/ch_3OKqgtFlLscTmW3z0Ap0xwWQ/refunds\"\n        },\n        \"review\": null,\n        \"shipping\": null,\n        \"source\": null,\n        \"source_transfer\": null,\n        \"statement_descriptor\": null,\n        \"statement_descriptor_suffix\": null,\n        \"status\": \"succeeded\",\n        \"transfer_data\": null,\n        \"transfer_group\": null\n      }\n    ],\n    \"has_more\": false,\n    \"total_count\": 1,\n    \"url\": \"/v1/charges?payment_intent=pi_3OKqgtFlLscTmW3z0bBkBuyr\"\n  },\n  \"client_secret\": \"pi_3OKqgtFlLscTmW3z0bBkBuyr_secret_O43IjplwugctagOrFRQFgZIgD\",\n  \"confirmation_method\": \"automatic\",\n  \"created\": 1701990551,\n  \"currency\": \"usd\",\n  \"customer\": null,\n  \"description\": null,\n  \"invoice\": null,\n  \"last_payment_error\": null,\n  \"latest_charge\": \"ch_3OKqgtFlLscTmW3z0Ap0xwWQ\",\n  \"livemode\": false,\n  \"metadata\": {},\n  \"next_action\": null,\n  \"on_behalf_of\": null,\n  \"payment_method\": \"pm_1OKqgtFlLscTmW3zd1dVm355\",\n  \"payment_method_configuration_details\": null,\n  \"payment_method_options\": {\n    \"card\": {\n      \"installments\": null,\n      \"mandate_options\": null,\n      \"network\": null,\n      \"request_three_d_secure\": \"automatic\"\n    }\n  },\n  \"payment_method_types\": [\n    \"card\"\n  ],\n  \"processing\": null,\n  \"receipt_email\": null,\n  \"review\": null,\n  \"setup_future_usage\": null,\n  \"shipping\": null,\n  \"source\": null,\n  \"statement_descriptor\": null,\n  \"statement_descriptor_suffix\": null,\n  \"status\": \"canceled\",\n  \"transfer_data\": null,\n  \"transfer_group\": null\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "cGlfM09LcWd0RmxMc2NUbVczejBiQmtCdXlyO2NoXzNPS3FndEZsTHNjVG1XM3owQXAweHdXUTs=",  

    "providerTransactionCode": "pi_3OKqgtFlLscTmW3z0bBkBuyr",  

    "approved": true,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "23120717094292467386",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"code\": \"invalid_expiry_month\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/invalid-expiry-month\",\n    \"message\": \"Your card's expiration month is invalid.\",\n    \"param\": \"exp_month\",\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_xOV9bDtQa9Vnqn?t=1703716629\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "invalid_expiry_month",  

        "message": "Your card's expiration month is invalid.",  

        "source": "Gateway"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "approved": false  

  },  

  "referenceNumber": "023122716370928343763",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{\n  \"error\": {\n    \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n    \"code\": \"card_declined\",\n    \"decline_code\": \"stolen_card\",\n    \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n    \"message\": \"Your card was declined.\",\n    \"payment_intent\": {\n      \"id\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n      \"object\": \"payment_intent\",\n      \"amount\": 1000,\n      \"amount_capturable\": 0,\n      \"amount_details\": {\n        \"tip\": {\n        }\n      },\n      \"amount_received\": 0,\n      \"application\": null,\n      \"application_fee_amount\": null,\n      \"automatic_payment_methods\": null,\n      \"canceled_at\": null,\n      \"cancellation_reason\": null,\n      \"capture_method\": \"manual\",\n      \"charges\": {\n        \"object\": \"list\",\n        \"data\": [\n          {\n            \"id\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n            \"object\": \"charge\",\n            \"amount\": 1000,\n            \"amount_captured\": 0,\n            \"amount_refunded\": 0,\n            \"application\": null,\n            \"application_fee\": null,\n            \"application_fee_amount\": null,\n            \"balance_transaction\": null,\n            \"billing_details\": {\n              \"address\": {\n                \"city\": \"Tulsa\",\n                \"country\": \"US\",\n                \"line1\": \"123 Someplace Lane\",\n                \"line2\": \"Some Place\",\n                \"postal_code\": \"74111\",\n                \"state\": \"OK\"\n              },\n              \"email\": \"john@doe.dev\",\n              \"name\": \"John Doe\",\n              \"phone\": null\n            },\n            \"calculated_statement_descriptor\": \"TOKENEX\",\n            \"captured\": false,\n            \"created\": 1703716659,\n            \"currency\": \"usd\",\n            \"customer\": null,\n            \"description\": null,\n            \"destination\": null,\n            \"dispute\": null,\n            \"disputed\": false,\n            \"failure_balance_transaction\": null,\n            \"failure_code\": \"card_declined\",\n            \"failure_message\": \"Your card was declined.\",\n            \"fraud_details\": {\n            },\n            \"invoice\": null,\n            \"livemode\": false,\n            \"metadata\": {\n            },\n            \"on_behalf_of\": null,\n            \"order\": null,\n            \"outcome\": {\n              \"network_status\": \"declined_by_network\",\n              \"reason\": \"stolen_card\",\n              \"risk_level\": \"normal\",\n              \"risk_score\": 47,\n              \"seller_message\": \"The bank returned the decline code `stolen_card`.\",\n              \"type\": \"issuer_declined\"\n            },\n            \"paid\": false,\n            \"payment_intent\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r\",\n            \"payment_method\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n            \"payment_method_details\": {\n              \"card\": {\n                \"amount_authorized\": null,\n                \"brand\": \"visa\",\n                \"checks\": {\n                  \"address_line1_check\": \"pass\",\n                  \"address_postal_code_check\": \"pass\",\n                  \"cvc_check\": \"pass\"\n                },\n                \"country\": \"US\",\n                \"exp_month\": 3,\n                \"exp_year\": 2025,\n                \"extended_authorization\": {\n                  \"status\": \"disabled\"\n                },\n                \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n                \"funding\": \"credit\",\n                \"incremental_authorization\": {\n                  \"status\": \"unavailable\"\n                },\n                \"installments\": null,\n                \"last4\": \"9979\",\n                \"mandate\": null,\n                \"multicapture\": {\n                  \"status\": \"unavailable\"\n                },\n                \"network\": \"visa\",\n                \"network_token\": {\n                  \"used\": false\n                },\n                \"overcapture\": {\n                  \"maximum_amount_capturable\": 1000,\n                  \"status\": \"unavailable\"\n                },\n                \"three_d_secure\": null,\n                \"wallet\": null\n              },\n              \"type\": \"card\"\n            },\n            \"radar_options\": {\n            },\n            \"receipt_email\": null,\n            \"receipt_number\": null,\n            \"receipt_url\": null,\n            \"refunded\": false,\n            \"refunds\": {\n              \"object\": \"list\",\n              \"data\": [\n\n              ],\n              \"has_more\": false,\n              \"total_count\": 0,\n              \"url\": \"/v1/charges/ch_3OS5jLFlLscTmW3z05iiT5Pz/refunds\"\n            },\n            \"review\": null,\n            \"shipping\": null,\n            \"source\": null,\n            \"source_transfer\": null,\n            \"statement_descriptor\": null,\n            \"statement_descriptor_suffix\": null,\n            \"status\": \"failed\",\n            \"transfer_data\": null,\n            \"transfer_group\": null\n          }\n        ],\n        \"has_more\": false,\n        \"total_count\": 1,\n        \"url\": \"/v1/charges?payment_intent=pi_3OS5jLFlLscTmW3z0CKUnI0r\"\n      },\n      \"client_secret\": \"pi_3OS5jLFlLscTmW3z0CKUnI0r_secret_2yE08BFrW7mYwCPhHWLtYPLZr\",\n      \"confirmation_method\": \"automatic\",\n      \"created\": 1703716659,\n      \"currency\": \"usd\",\n      \"customer\": null,\n      \"description\": null,\n      \"invoice\": null,\n      \"last_payment_error\": {\n        \"charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n        \"code\": \"card_declined\",\n        \"decline_code\": \"stolen_card\",\n        \"doc_url\": \"https://stripe.com/docs/error-codes/card-declined\",\n        \"message\": \"Your card was declined.\",\n        \"payment_method\": {\n          \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n          \"object\": \"payment_method\",\n          \"billing_details\": {\n            \"address\": {\n              \"city\": \"Tulsa\",\n              \"country\": \"US\",\n              \"line1\": \"123 Someplace Lane\",\n              \"line2\": \"Some Place\",\n              \"postal_code\": \"74111\",\n              \"state\": \"OK\"\n            },\n            \"email\": \"john@doe.dev\",\n            \"name\": \"John Doe\",\n            \"phone\": null\n          },\n          \"card\": {\n            \"brand\": \"visa\",\n            \"checks\": {\n              \"address_line1_check\": \"pass\",\n              \"address_postal_code_check\": \"pass\",\n              \"cvc_check\": \"pass\"\n            },\n            \"country\": \"US\",\n            \"exp_month\": 3,\n            \"exp_year\": 2025,\n            \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n            \"funding\": \"credit\",\n            \"generated_from\": null,\n            \"last4\": \"9979\",\n            \"networks\": {\n              \"available\": [\n                \"visa\"\n              ],\n              \"preferred\": null\n            },\n            \"three_d_secure_usage\": {\n              \"supported\": true\n            },\n            \"wallet\": null\n          },\n          \"created\": 1703716659,\n          \"customer\": null,\n          \"livemode\": false,\n          \"metadata\": {\n          },\n          \"type\": \"card\"\n        },\n        \"type\": \"card_error\"\n      },\n      \"latest_charge\": \"ch_3OS5jLFlLscTmW3z05iiT5Pz\",\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"next_action\": null,\n      \"on_behalf_of\": null,\n      \"payment_method\": null,\n      \"payment_method_configuration_details\": null,\n      \"payment_method_options\": {\n        \"card\": {\n          \"installments\": null,\n          \"mandate_options\": null,\n          \"network\": null,\n          \"request_three_d_secure\": \"automatic\"\n        }\n      },\n      \"payment_method_types\": [\n        \"card\"\n      ],\n      \"processing\": null,\n      \"receipt_email\": null,\n      \"review\": null,\n      \"setup_future_usage\": null,\n      \"shipping\": null,\n      \"source\": null,\n      \"statement_descriptor\": null,\n      \"statement_descriptor_suffix\": null,\n      \"status\": \"requires_payment_method\",\n      \"transfer_data\": null,\n      \"transfer_group\": null\n    },\n    \"payment_method\": {\n      \"id\": \"pm_1OS5jLFlLscTmW3z9Ftrg7rC\",\n      \"object\": \"payment_method\",\n      \"billing_details\": {\n        \"address\": {\n          \"city\": \"Tulsa\",\n          \"country\": \"US\",\n          \"line1\": \"123 Someplace Lane\",\n          \"line2\": \"Some Place\",\n          \"postal_code\": \"74111\",\n          \"state\": \"OK\"\n        },\n        \"email\": \"john@doe.dev\",\n        \"name\": \"John Doe\",\n        \"phone\": null\n      },\n      \"card\": {\n        \"brand\": \"visa\",\n        \"checks\": {\n          \"address_line1_check\": \"pass\",\n          \"address_postal_code_check\": \"pass\",\n          \"cvc_check\": \"pass\"\n        },\n        \"country\": \"US\",\n        \"exp_month\": 3,\n        \"exp_year\": 2025,\n        \"fingerprint\": \"cq6VLEnp3CY4mOju\",\n        \"funding\": \"credit\",\n        \"generated_from\": null,\n        \"last4\": \"9979\",\n        \"networks\": {\n          \"available\": [\n            \"visa\"\n          ],\n          \"preferred\": null\n        },\n        \"three_d_secure_usage\": {\n          \"supported\": true\n        },\n        \"wallet\": null\n      },\n      \"created\": 1703716659,\n      \"customer\": null,\n      \"livemode\": false,\n      \"metadata\": {\n      },\n      \"type\": \"card\"\n    },\n    \"request_log_url\": \"https://dashboard.stripe.com/test/logs/req_fitBuDUWT0kElv?t=1703716659\",\n    \"type\": \"card_error\"\n  }\n}\n",  

    "gatewayErrors": [  

      {  

        "code": "stolen_card",  

        "message": "Your card was declined.",  

        "source": "Processor"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "pi_3OS5jLFlLscTmW3z0CKUnI0r",  

    "approved": false,  

    "verificationResult": {  

      "providerParsed": {  

        "cvvMatch": "pass",  

        "streetMatch": "pass",  

        "postalCodeMatch": "pass"  

      }  

    }  

  },  

  "referenceNumber": "023122716373915411788",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "402"  

}  

```