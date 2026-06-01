---
title: Liability shift
summary: ' 3-D Securehttps://documentation.ixopay.com/docs/reference/features/3d-secure  Liability
  shift'
tags:
- electronic-commerce-indicator-https-documentation-ixopay-com-docs-reference-features-secure-liability-shift-electronic-commerce-indicator-direct-link-electronic-commerce-indicator
- mastercard-https-documentation-ixopay-com-docs-reference-features-secure-liability-shift-mastercard-direct-link-mastercard
- american-express-discover-diners-club-visa-https-documentation-ixopay-com-docs-reference-features-secure-liability-shift-american-express-discoverdiners-club-visa-direct-link-american-express-discover-diners-club-visa
- 3d-secure
- ixopay
- chargeback
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * Liability shift

# Liability shift
With 3-D Secure in place, payments that are successfully authenticated undergo a liability shift. This essentially means that, in the event of a cardholder disputing a transaction as fraudulent, the responsibility moves from the merchant to the card issuer, adding an additional layer of protection for your business.
However, it's important to be aware that if a customer disputes a payment for reasons other than fraud, for example, if they claim the product was not received, the standard dispute process still applies. The responsibility in these situations typically remains with the merchant. So, as always, it's crucial to make appropriate decisions about how you manage and hopefully prevent disputes from occurring.
In some scenarios, a liability shift may also take place when the card network mandates 3D Secure, but it isn’t available for the card or issuer. This can happen if the issuer’s 3-D Secure Access Control Server (ACS) is down or if the issuer doesn't support it, even though the card network requires its use. Even though the cardholder hasn't completed 3D Secure authentication, liability can still shift to the issuer, a so-called stand-in.
Nevertheless, it's worth noting that there are rare exceptions when payments authenticated using 3D Secure do not result in a liability shift. This might be the case if you have a high level of fraud on your account and are enrolled in a fraud monitoring program. Or, if you're in an industry that certain networks have exempted from liability shift.
Lastly, it's possible to receive a dispute inquiry on a successfully authenticated payment using 3D Secure. This type of dispute doesn't result in a chargeback or fee as it’s a request for information. However, not responding to these inquiries could lead to a financial chargeback known as a no-reply chargeback, potentially invalidating the liability shift. To prevent this, always respond to inquiries promptly, supplying thorough information about the charge, including details about the ordered items, delivery method, and recipient. This applies whether the delivery was of physical goods, digital goods, or services.
## Electronic commerce indicator[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift#electronic-commerce-indicator "Direct link to Electronic commerce indicator")
The Electronic Commerce Indicator (ECI) is the scheme specific result code of a 3-D Secure session. You can look up the ECI in the tables below to determine if your transaction warrants a liability shift.
### Mastercard[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift#mastercard "Direct link to Mastercard")  
| ECI  | Authentication  | Liability shift  |  
| --- | --- | --- |  
| `00`  | Not authenticated.  | No liability shift  |  
| `01`  | Attempted authentication.  | Liability shift to the card issuer.  |  
| `02`  | Fully authenticated.  | Liability shift to the card issuer.  |  
| `04`  | No authentication, data only.  | No liability shift.  |  
| `06`  | Exemption request,  
_not supported by the[IXOPAY platform](https://www.ixopay.com)_  | No liability shift.  |  
| `07`  | Authenticated via 3RI,  
_not supported by the IXOPAY platform_  | Liability shift to the card issuer.  |  
### American Express, Discover/Diners Club and Visa[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift#american-express-discoverdiners-club-and-visa "Direct link to American Express, Discover/Diners Club and Visa")  
| ECI  | Authentication  | Liability shift  |  
| --- | --- | --- |  
| `05`  | Fully authenticated  | Full liability shift to the card issuer.  |  
| `06`  | Attempted authentication  | Full liability shift to the card issuer.  |  
| `07`  | Authentication not performed.  | No liability shift.  |