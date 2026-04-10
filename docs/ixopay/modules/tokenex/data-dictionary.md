---
title: Data Dictionary
summary: ' BIN Lookup  Data Dictionary'
tags:
- cost-fields-https-documentation-ixopay-com-modules-docs-tokenex-data-dictionary-cost-fields-direct-link-cost-fields
- json
- tokenization
- tokenex
- ixopay
- merchant
source_url: ''
portal: ixopay-modules
updated: '2026-04-10'
related: []
---

* BIN Lookup
  * Data Dictionary

# Data Dictionary  
| Field  | Type  | Description  | Example  |  
| --- | --- | --- | --- |  
| BinMin  | string  | The minimum account number for this BIN's assigned account number range.  | 4429310000000000  |  
| BinMax  | string  | The maximum account number for this BIN's assigned account number range.  | 4429319999999999  |  
| BinLength  | nullable int  | The length of the BIN (typically 4, 6, or 8).  | 6  |  
| CleanBankName  | string  | Normalized bank name that has been formatted to proper case, removes unnecessary punctuation and misspellings, and spells out uncommon banking acronyms.  | American Federal Credit Union  |  
| ProductName  | string  | The name of the [card product](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#card-products).  | Mastercard Prepaid Gold Payroll  |  
| CardBrand  | string  | The primary card network that can process this card.  | Visa  |  
| CountryAlpha2  | string  | Two letter country code representing the issuing country; Alpha 2 code meets the ISO3166 standards.  | US  |  
| CountryName  | string  | Country in which the issuing bank resides.  | United States  |  
| CountryNumeric  | string  | Numeric country code representing the issuing country; the numeric country code meets ISO 3166 standards.  | 840  |  
| Type  | string  | Type of Payment Card.  | Debit  |  
| BankName  | string  | Name of Issuing Bank.  | Bank of America National Association  |  
| BankUrl  | string  | URL of issuing bank website.  |   |  
| BankPhone  | string  | Phone number of issuing bank.  | 180004321000  |  
| ProductCode  | string  | The [card product ID](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#card-products) according to the card brand.  | MGP  |  
| Prepaid  | nullable boolean  | Prepaid card type indicator.  | True  |  
| Regulated  | nullable boolean  | Indicator of the presence of an interchange regulation on a BIN.  | False  |  
| RegulatedName  | string  | The name of the interchange regulation.  | GOVERNMENT NON-EXEMPT   
INTERCHANGE FEE (WITH FRAUD)  |  
| Reloadable  | nullable boolean  | (Visa-only field) Indicator of reloadable or   
non-reloadable prepaid  | True  |  
| PanOrToken  | string  | Indicates if an account number is a network token.  | False  |  
| AccountUpdater  | nullable boolean  | (Visa-only field) Visa Account Updater (VAU) enabled.  | True  |  
| Alm  | nullable boolean  | (Visa-only field) Indicator of a BIN or Account Range participating in Account Level Management.  | False  |  
| DomesticOnly  | nullable boolean  | (Visa-only field) Domestic-only BIN can only be used within the country in which the card was issued.  | False  |  
| GamblingBlocked  | nullable boolean  | (Visa-only field) Indicator that this BIN is not permitted to be used for online gambling.  | False  |  
| Level2  | nullable boolean  | (Visa-only field) Indicator of Level 2 interchange rate eligibility.  | False  |  
| Level3  | nullable boolean  | (Visa-only field) Indicator of Level 3 interchange rate eligibility.  | False  |  
| IssuerCurrency  | string  | The currency that was issued to this BIN to transact in.  | usd  |  
| CardSegmentType  | string  | Indicates if card is a consumer card or commercial card.  | Consumer  |  
| ComboCard  | string  | Indicator for a card that has combined card type capabilities.  | credit and prepaid  |  
| CardBrandIsAdditional  | nullable boolean  | Set to false if the BIN range is associated with a primary card network and set to true if associated with a secondary network. Primary networks are Visa, Mastercard, Discover, Amex, JCB, or UnionPay. The secondary is typically a pinless debit network or a regional brand (e.g. Star, NYCE, ETPOS, Dankort, Carte Bancaire, etc.) note that secondary network's typically provide less in their BIN data. If multiple networks share a BIN range and all have card_brand_is_additional set to false, the primary network will be Visa, Mastercard, Discover, Amex, JCB, or UnionPay.  | False  |  
| CorrelationId  | string  | ID that maps a BIN range to a specific network file; used for troubleshooting.  | eyJGaWxlSWQiOjE0NDUsIlZlcnNpb24iOjEwfQ==  |  
| SharedBin  | nullable boolean  | Set to true if BIN is shared by multiple issuers.  | False  |  
| IssuerSupportsTokenization  | boolean  | Set to true if the card brand data indicates the issuing bank supports network tokenization.  | True  |  
| BillpayEnabled  | boolean  | BIN has been enabled to make bill payments to service providers electronically, or over the internet.  | True  |  
| EcomEnabled  | boolean  | BIN has been enabled to make ecommerce purchases, or purchases over the internet.  | True  |  
| Cost  | JSON array  | Identifies associated costs by name and amount, embedded as JSON in the column  | [See cost fields below](https://documentation.ixopay.com/modules/docs/tokenex/data-dictionary#cost-fields)  |  
| AuthenticationName  | string  | Name of authentication that is required.  | EU PSD2 - SCA  |  
| AdditionalCardBrands  | List  | List of any secondary card networks which fall into the same range as the primary card network. Are indicated by "CardBrandIsAdditional" : "true"  |   |  
| FundingSources  | nullable string  | A new field indicating the funding source for a card which can be different from the type. Potential values: CREDIT, DEBIT, PREPAID, CHARGE CARD, DEFERRED DEBIT   
  
Note: This field only displays the funding source for Visa and Mastercard; all other brands will show null.  | CREDIT  |  
| CardNumberLength  | nullable string  | A New field indicating the length of the card. Not all networks provide this field. When not provided by the networks, the default is 16 for non-amex cards.  | 19  |  
| VirtualCards  | nullable boolean  | A new field indicating if a BIN range supports virtual card creation. Note that the BIN range could also support physical card issuance as well and should not be treated as this range is only virtual cards.  | True  |  
| CalculatedBinLength  | nullable string  | Indicates the length of a BIN, as calculated by our provider.   
Note: In the case that BinLength is null, this field can be used instead.  | 8  |  
| MultiAccountAccess  | nullable string  | Indicates if a Visa card allows for Flexible Credentials functionality. The possible values for this field are:   
`M` - The card is multi-account managed, meaning the issuer manages which account is used and when it is used.   
`S`- The card is multi-account self-serve, meaning the cardholder manages which account is used and when it is used.   
`N`- The card is not a participant in multi-account functionality   
Note: This field is only available for Visa cards. All other brands show null.  | M  |  
## Cost Fields[​](https://documentation.ixopay.com/modules/docs/tokenex/data-dictionary#cost-fields "Direct link to Cost Fields")  
| Field  | Type  | Description  | Example  |  
| --- | --- | --- | --- |  
| CapRegionShortName  | string  | An abbreviated region name where the interchange cap applies. Possible values are "Dom" and "Inter" for domestic and international, respectively.  | Dom  |  
| CapAdvaloremAmount  | nullable decimal  | The interchange percentage assessed, shown in decimals for the capped interchange.  | 0.002  |  
| CapTypeName  | string  | The name of the regulated interchange cap.  | US Durbin Regulation Debit Visa  |  
| CapFixedAmount  | nullable decimal  | If a fixed or regulated interchange amount applies, the amount will be shown here.  | 0.21  |  
| CapTypeQualifierCurrency  | string  | The currency of the qualified fixed_amount for the regulated or capped interchange.  | usd  |  
| CapTypeQualifierText  | string  | The description of the interchange cap or regulation.  | US Durbin Regulation Debit Visa  |  
| CapTypeQualifierLower  | string  | The minimum merchant processing volume amount limit for the interchange cap.  | 101mm  |  
| CapTypeQualifierUpper  | string  | The maximum merchant processing volume amount limit for the interchange cap.  | 500mm  |