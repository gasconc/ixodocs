---
title: Universal Token APM Support
summary: ' Universal Token Payment Orchestrationhttps://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration  Universal
  Token APM Support'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-overview-direct-link-overview
- https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-direct-link
- prerequisites-https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-prerequisites-direct-link-prerequisites
- works-https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-works-direct-link-works
- getting-started-https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-getting-started-direct-link-getting-started
- supported-payment-methods-https-documentation-ixopay-com-modules-docs-tokenex-payment-orchestration-alternative-payment-methods-supported-payment-methods-direct-link-supported-payment-methods
- api
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods
portal: tokenex
updated: '2026-05-11'
related: []
---

* [Universal Token Payment Orchestration](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration)
  * Universal Token APM Support

# Universal Token APM Support
Extend your TokenEx integration to accept Alternative Payment Methods (APMs) — without adding new infrastructure or managing additional payment relationships.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#overview "Direct link to Overview")
TokenEx APM Support enables merchants to accept non-card payment methods — such as PayPal, Venmo, Skrill, and Buy Now Pay Later (BNPL) methods — through the same Universal Token Transaction API (UTTAPI) used for card-based payment services today.
APM transactions are routed through the [IXOPAY](https://www.ixopay.com) Orchestration layer via a connector configured for your account. You do not need to integrate directly with each APM provider. Your integration point remains UTTAPI.
## Who This Is For[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#who-this-is-for "Direct link to Who This Is For")
TokenEx APM Support is designed for merchants who:
  * Have an existing TokenEx subscription with Payment Services enabled
  * Want to accept one or more non-card APMs without adding separate integrations
  * Have a direct relationship with the APM provider(s) they wish to support

## Prerequisites[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#prerequisites "Direct link to Prerequisites")
  * Active Universal Token subscription
    * Configured vault and API key
  * Active APM subscription
  * At least one APM provider relationship established directly with the provider

## How It Works[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#how-it-works "Direct link to How It Works")
When APM support is enabled for your account, TokenEx provisions a dedicated configuration within the IXOPAY Orchestration platform. Your APM transactions are submitted through UTTAPI and routed to the appropriate APM connector — the same API call, the same integration pattern.
You do not access the Orchestration portal directly. All connector configuration and management is handled by the TokenEx Global Support team.
## Getting Started[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#getting-started "Direct link to Getting Started")
  1. Contact your Customer Success Manager or submit a support ticket via the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) to request APM support.
  2. Confirm which APM methods you want to accept and provide confirmation of your provider relationship(s).
  3. TokenEx Support will provision your Orchestration configuration and notify you when setup is complete.
  4. Follow the [Universal Token Transaction API reference](https://documenter.getpostman.com/view/11766591/2sA3e5dnbm) to submit APM transactions through UTTAPI.

## Supported Payment Methods[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#supported-payment-methods "Direct link to Supported Payment Methods")
TokenEx APM Support currently includes the following US-focused payment methods:  
| Payment Method  | Type  |  
| --- | --- |  
| PayPal  | Digital Wallet  |  
| Venmo  | Digital Wallet  |  
| Skrill  | Digital Wallet  |  
| Buy Now Pay Later (BNPL)  | Deferred Payment  |  
Contact your Customer Success Manager or our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for details on provider-specific requirements and availability.
note
  * UTTAPI passthrough for APM transactions is non-billable at the API operation level. Billing is determined by the APM transaction volume processed through your configuration.
  * APM support does not replace or affect your existing card tokenization or Payment Services setup.

  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#overview)
  * [Who This Is For](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#who-this-is-for)
  * [Prerequisites](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#prerequisites)
  * [How It Works](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#how-it-works)
  * [Getting Started](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#getting-started)
  * [Supported Payment Methods](https://documentation.ixopay.com/modules/docs/tokenex/payment-orchestration/alternative-payment-methods#supported-payment-methods)