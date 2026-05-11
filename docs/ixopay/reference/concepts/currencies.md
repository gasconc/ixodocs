---
title: Currencies
summary: The API of the IXOPAY platformhttps://www.ixopay.com supports a wide range
  of currencies for transactions. However, it’s important to adhere to specific precision
  requirements for each currency to ensure compatibility with our payment partners.
tags:
- precision-breakdown-https-documentation-ixopay-com-docs-reference-concepts-currencies-precision-breakdown-direct-link-precision-breakdown
- currency-definition-https-documentation-ixopay-com-docs-reference-concepts-currencies-currency-definition-direct-link-currency-definition
- additional-considerations-https-documentation-ixopay-com-docs-reference-concepts-currencies-additional-considerations-direct-link-additional-considerations
- api
- ixopay
source_url: https://documentation.ixopay.com/docs/reference/concepts/currencies
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* [Concepts](https://documentation.ixopay.com/docs/reference/concepts)
  * Currencies

# Currencies
The API of the [IXOPAY platform](https://www.ixopay.com) supports a wide range of currencies for transactions. However, it’s important to adhere to specific precision requirements for each currency to ensure compatibility with our payment partners.
## Precision breakdown[​](https://documentation.ixopay.com/docs/reference/concepts/currencies#precision-breakdown "Direct link to Precision breakdown")
  * **Zero decimals** : These currencies represent whole units and don't use decimals. You can submit the amount as a whole number (e.g., 100 JPY) or with up to three trailing zeros (e.g., 100.000 JPY)
  * **Two decimals** : Most currencies require the amount to be provided with two decimal places. Alternatively, you can submit the amount with three decimal places, but the last digit must be zero. (e.g., 15.75 USD or 15.750 USD)
  * **Three decimals** : A limited number of currencies allow for three decimal places. However, **the last (least significant) digit must always be zero**. Transactions with a non-zero value in the third decimal place will be declined with error code `1002`. (e.g., 5.120 KWD or 5.130 KWD, but not 5.123 KWD).

## Currency definition[​](https://documentation.ixopay.com/docs/reference/concepts/currencies#currency-definition "Direct link to Currency definition")  
| Currency Code  | Decimals  | Example  |  
| --- | --- | --- |  
|  `BIF`, `XPF`, `XOF`, `XAF`, `CLP`, `KMF`, `DJF`, `GSI`, `JPY`, `PYG`, `RWF`, `KRW`, `UGX`, `VUV`, `VND`, `KPW`  | 0  | 100  |  
|  `AFN`, `ALL`, `DZD`, `ARS`, `AMD`, `AOA`, `AWG`, `AUD`, `AZN`, `BSD`, `BDT`, `BBD`, `BYN`, `BZD`, `BMD`, `BTN`, `BOB`, `BAM`, `BWP`, `BND`, `BRL`, `BGN`, `KHR`, `CAD`, `CVE`, `KYD`, `CNY`, `COP`, `CDF`, `CRC`, `HRK`, `CZK`, `DKK`, `DOP`, `XCD`, `EGP`, `SVC`, `ETB`, `EUR`, `FKP`, `FJD`, `GMD`, `GEL`, `GHS`, `GIP`, `GTQ`, `GYD`, `HTG`, `HNL`, `HKD`, `HUF`, `ISK`, `INR`, `IDR`, `JMD`, `KZT`, `KES`, `KGS`, `LAK`, `LBP`, `LSL`, `LRD`, `MOP`, `MKD`, `MGA`, `MWK`, `MYR`, `MVR`, `MRO`, `MUR`, `MXN`, `MDL`, `MNT`, `MAD`, `MZN`, `NAD`, `NPR`, `ANG`, `ILS`, `TWD`, `NZD`, `NIO`, `NGN`, `NOK`, `PKR`, `PAB`, `PGK`, `PEN`, `PHP`, `PLN`, `QAR`, `RON`, `RUB`, `WST`, `STD`, `SAR`, `RSD`, `SCR`, `SLL`, `SGD`, `SBD`, `SOS`, `ZAR`, `LKR`, `SHP`, `SRD`, `SZL`, `SEK`, `CHF`, `TJS`, `TZS`, `THB`, `TOP`, `TTD`, `TRY`, `TMT`, `AED`, `USD`, `UAH`, `GBP`, `UYU`, `UZS`, `VEF`, `VES`, `YER`, `ZMW`, `ZWL`, `MMK`, `CUP`, `ERN`, `IRR`, `SSP`, `SYP`, `SDG`, `XCG`  | 2  | 15.75  |  
|  `BHD`, `IQD`, `JOD`, `KWD`, `LYD`, `OMR`, `TND`  | 3  | (Last digit must be 0) 5.120 or 5.130  |  
Subject to change
This list is subject to change. Please refer to this documentation for the latest list of supported currencies and their precision requirements.
## Additional considerations[​](https://documentation.ixopay.com/docs/reference/concepts/currencies#additional-considerations "Direct link to Additional considerations")
If your system is not able to provide amounts rounded to two decimal places, there is the option to configure your tenant account to round commercially to two decimal places. For assistance with configuring commercial rounding, please get in contact with our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
Subject to change
Please note, that future API versions might support a non-zero 3rd digit for three decimal currencies.