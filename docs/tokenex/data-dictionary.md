---
title: Data Dictionary
summary: ' BIN Lookup  Data Dictionary'
tags:
- cost-fields-https-documentation-ixopay-com-modules-docs-tokenex-data-dictionary-cost-fields-direct-link-cost-fields
- api
- json
- tokenization
- tokenex
- ixopay
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/data-dictionary
portal: tokenex
updated: '2026-05-25'
related: []
---

* BIN Lookup
  * Data Dictionary

# Data Dictionary
note
This is mapped to how it appears in the API response. The actual BIN File fields are not in camelCase but rather appear with underscorings eg. `bin_min`  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `binMin`  | `string`  | The minimum account number for this BIN's assigned account number range.  
_Example:_ `"5584750000000000"`  |  
| `binMax`  | `string`  | The maximum account number for this BIN's assigned account number range.  
_Example:_ `"5584759999999999"`  |  
| `binLength`  | `number`  | The length of the BIN (typically 6 or 8).  
_Example:_ `6`  |  
| `cleanBankName`  | `string`  | Normalized bank name formatted to proper case.  
_Example:_ `"Nexi Payments Spa"`  |  
| `productName`  | `string`  | The name of the card product.  
_Example:_ `"MasterCard Preferred BusinessCard Card"`  |  
| `cardBrand`  | `string`  | The primary card network.  
_Example:_ `"MASTERCARD"`  |  
| `countryAlpha2`  | `string`  | Two letter country code (ISO 3166 Alpha 2).  
_Example:_ `"IT"`  |  
| `countryName`  | `string`  | Country in which the issuing bank resides.  
_Example:_ `"ITALY"`  |  
| `countryNumeric`  | `string`  | Numeric country code (ISO 3166 standards).  
_Example:_ `"380"`  |  
| `type`  | `string`  | Type of Payment Card (e.g., Debit, Credit).  
_Example:_ `"Credit"`  |  
| `bankName`  | `string`  | Name of Issuing Bank.  
_Example:_ `"NEXI PAYMENTS SPA"`  |  
| `bankUrl`  | `string`  | URL of issuing bank website.  
_Example:_ `"https://www.bankofamerica.com"`  |  
| `bankPhone`  | `string`  | Phone number of issuing bank.  
_Example:_ `"180004321000"`  |  
| `productCode`  | `string`  | The card product ID according to the card brand.  
_Example:_ `"MPB"`  |  
| `prepaid`  | optional`boolean?`  | Prepaid card type indicator.  
_Example:_ `false`  |  
| `regulated`  | `boolean`  | Indicator of interchange regulation presence.  
_Example:_ `false`  |  
| `regulatedName`  | `string`  | The name of the interchange regulation.  
_Example:_ `"GOVERNMENT NON-EXEMPT REGULATED INTERCHANGE FEE"`  |  
| `reloadable`  | optional`boolean?`  | (Visa-only field) Indicator of reloadable or non-reloadable status.  
_Example:_ `true`  |  
| `panOrToken`  | `string`  | Indicates if account number is a network token or PAN.  
_Example:_ `"pan"`  |  
| `accountUpdater`  | `boolean`  | Indicator for Account Updater enablement.  
_Example:_ `false`  |  
| `alm`  | `boolean`  | Indicator of Account Level Management participation.  
_Example:_ `false`  |  
| `domesticOnly`  | `boolean`  | If the BIN can only be used in the country of issue.  
_Example:_ `false`  |  
| `gamblingBlocked`  | `boolean`  | Indicator if BIN is restricted from online gambling.  
_Example:_ `false`  |  
| `level2`  | `boolean`  | Indicator of Level 2 interchange rate eligibility.  
_Example:_ `false`  |  
| `level3`  | `boolean`  | Indicator of Level 3 interchange rate eligibility.  
_Example:_ `false`  |  
| `issuerCurrency`  | `string`  | The currency assigned to this BIN.  
_Example:_ `"USD"`  |  
| `cardSegmentType`  | `string`  | Indicates if the card is consumer or commercial.  
_Example:_ `"Commercial"`  |  
| `comboCard`  | `string`  | Indicator for combined card type capabilities.  
_Example:_ `"Credit and Debit"`  |  
| `cardBrandIsAdditional`  | `boolean`  | False if primary network; True if secondary. Primary networks are Visa, Mastercard, Discover, Amex, JCB or Unionpay. Secondary networks typically provide less in their BIN data.  
_Example:_ `false`  |  
| `correlationId`  | `string`  | ID mapping a BIN range to a network file.  
_Example:_ `"eyJGaWxlS..."`  |  
| `sharedBin`  | `boolean`  | Set to true if BIN is shared by multiple issuers.  
_Example:_ `false`  |  
| `issuerSupportsTokenization`  | `boolean`  | If the bank supports network tokenization.  
_Example:_ `true`  |  
| `billpayEnabled`  | `boolean`  | BIN enabled for electronic bill payments.  
_Example:_ `true`  |  
| `ecomEnabled`  | `boolean`  | BIN enabled for ecommerce purchases.  
_Example:_ `true`  |  
| `cost`  | `array`  | Identifies associated costs by name and amount. See [cost fields below](https://documentation.ixopay.com/modules/docs/tokenex/data-dictionary#cost-fields).  
_Example:_ `{'[{"capFixedAmount": 0, ...}]'}`  |  
| `authentication`  | `array`  | JSON array identifying required authentication.  
_Example:_ `{'[{"scaName": "EU PSD2 - SCA"}]'}`  |  
| `additionalCardBrands`  | `array`[`BinData`]  | List of any secondary card networks which fall into the same range as the primary card network. Indicated by `cardBrandIsAdditional`.  
_Example:_ `[]`  |  
| `fundingSource`  | `string`  | Funding source (CREDIT, DEBIT, PREPAID). Only for Visa and Mastercard.  
_Example:_ `"CREDIT"`  |  
| `cardNumberLength`  | `string`  | The length of the full card number.  
_Example:_ `"16"`  |  
| `virtualCard`  | `boolean`  | Supports virtual card creation.  
_Example:_ `true`  |  
| `calculatedBinLength`  | `string`  | The length of a BIN as calculated by the provider.  
_Example:_ `"8"`  |  
| `multiAccountAccessIndicator`  | `string`  | Visa-only indicator for account management.  
_Example:_ `"M"`  |  
## Cost Fields[​](https://documentation.ixopay.com/modules/docs/tokenex/data-dictionary#cost-fields "Direct link to Cost Fields")  
| Field  | Type  | Description  |  
| --- | --- | --- |  
| `capRegionShortName`  | `string`  | An abbreviated region name where the interchange cap applies. Possible values are `"Dom"` and `"Inter"` for domestic and international, respectively.  
_Example:_ `"Dom"`  |  
| `capAdvaloremAmount`  | optional`number?`  | The interchange percentage assessed, shown in decimals for the capped interchange.  
_Example:_ `0.002`  |  
| `capTypeName`  | `string`  | The name of the regulated interchange cap.  
_Example:_ `"US Durbin Regulation Debit Visa"`  |  
| `capFixedAmount`  | optional`number?`  | If a fixed or regulated interchange amount applies, the amount will be shown here.  
_Example:_ `0.21`  |  
| `capTypeQualifierCurrency`  | `string`  | The currency of the qualified fixed amount for the regulated or capped interchange.  
_Example:_ `"usd"`  |  
| `capTypeQualifierText`  | `string`  | The description of the interchange cap or regulation.  
_Example:_ `"US Durbin Regulation Debit Visa"`  |  
| `capTypeQualifierLower`  | `string`  | The minimum merchant processing volume amount limit for the interchange cap.  
_Example:_ `"101mm"`  |  
| `capTypeQualifierUpper`  | `string`  | The maximum merchant processing volume amount limit for the interchange cap.  
_Example:_ `"500mm"`  |