---
title: BIN Lookup Guide
summary: ' BIN Lookup  BIN Lookup Guide'
tags:
- bin-lookup-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-bin-lookup-direct-link-bin-lookup
- bin-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-bin-direct-link-bin
- data-sources-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-data-sources-direct-link-data-sources
- card-products-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-card-products-direct-link-card-products
- visa-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-visa-direct-link-visa
- mastercard-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-mastercard-direct-link-mastercard
- full-bin-file-download-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-full-bin-file-download-direct-link-full-bin-file-download
- overlapping-bin-ranges-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-overlapping-bin-ranges-direct-link-overlapping-bin-ranges
- access-points-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-access-points-direct-link-access-points
- iframe-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-iframe-direct-link-iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview
portal: tokenex
updated: '2026-05-11'
related: []
---

* BIN Lookup
  * BIN Lookup Guide

# BIN Lookup Guide
Beta
This API is currently in its beta phase and is provided on an "as is" and "as available" basis. It may contain bugs, errors, or other issues and is subject to changes without prior notice. Thank you for your understanding.
info
BIN lookup is a subscription service. Contact your Customer Success Manager or sales@ixopay.com to gain access to our BIN lookup product.
## What is BIN Lookup?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-bin-lookup "Direct link to What is BIN Lookup?")
As a merchant operating in the digital payments ecosystem, there are many challenges to processing payments in an effective way. Digital payments fraud, chargeback fraud, low authentication rates, the consumer experience, compliance with regulations, and high transaction costs are all nuanced challenges that can affect the success of each transaction. A BIN Lookup is a process in which rich metadata about a payment card can be retrieved by querying the PAN against a BIN database.
### What is a BIN?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-a-bin "Direct link to What is a BIN?")
A bank identification number (BIN) is the first 4, 6, or 8 digits of a payment card account number (PAN). The BIN represents a range of account numbers that an issuer can use to issue cards within a given BIN. All cards issued in this BIN share the same attributes.
**Example**  
| BIN  | Account Minimum  | Account Maximum  |  
| --- | --- | --- |  
| 442931  | 4429310000000000  | 4429319999999999  |  
With TokenEx Universal Tokens, our customers do not need to know the BIN or the PAN to query the valuable BIN lookup data. TokenEx will use the full PAN that we collect for tokenization to query the BIN lookup database. Since TokenEx is using the entire account number to perform the BIN lookup, the service works seamlessly for cards with any length of BIN and we return all relevant data without requiring our customers to know the bin length or the PAN. This provides maximum effectiveness while keeping our customer's PCI DSS scope to a minimum.
## Data Sources[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#data-sources "Direct link to Data Sources")
TokenEx provides over 70 BIN data points (not all data is available for every BIN) that are sourced directly from the following payment card networks. TokenEx currently has about one million BINs in the database.
  * PayPal
  * Discover
  * Prop
  * JCB
  * Mastercard
  * Visa
  * Amex
  * Elo
  * Dankort
  * Diners Club
  * Unionpay
  * EFTPOS Australia
  * RuPay
  * Accel
  * NYCE
  * STAR
  * PULSE
  * Korean Local
  * MIR
  * Culiance
  * Bancontact
  * Carte Bancaire
  * Hipercard
  * ATM Card
  * UATP
  * Cirrus
  * Private Label
  * Maestro
  * EFTPOS

## Card Products[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#card-products "Direct link to Card Products")
When available for a BIN range, we provide the product ID and product name in the response. Each Network has a different product ID standard, please see below for details.
### Visa[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#visa "Direct link to Visa")  
| Card Product ID  | Card Product Name  |  
| --- | --- |  
| A  | Visa Traditional  |  
| B  | Visa Traditional Rewards  |  
| C  | Visa Signature  |  
| D  | Visa Signature Preferred  |  
| F  | Visa Classic  |  
| G  | Visa Business  |  
| G1  | Visa Signature Business  |  
| G3  | Visa Business Enhanced  |  
| G4  | Visa Infinite Business  |  
| G5  | Visa Business Rewards  |  
| I  | Visa Infinite  |  
| I1  | Visa Infinite Privilege  |  
| I2  | Visa UHNW  |  
| J3  | Visa Prepaid Healthcare  |  
| K  | Visa Corporate  |  
| K1  | Visa Government Corporate T&E  |  
| L  | Electron  |  
| N  | Visa Platinum  |  
| N1  | Visa Rewards  |  
| N2  | Visa Select  |  
| O  | Reserved  |  
| P  | Visa Gold  |  
| Q  | Private Label  |  
| Q2  | Private Label Basic  |  
| Q3  | Private Label Enhanced  |  
| Q4  | Private Label Standard  |  
| Q5  | Private Label Specialized  |  
| Q6  | Private Label Premium  |  
| R  | Proprietary  |  
| S  | Visa Purchasing  |  
| S1  | Visa Purchasing  |  
| S2  | Visa Government Purchasing  |  
| S3  | Visa Government Purchasing with Fleet  |  
| S4  | Visa Commercial Agriculture  |  
| S5  | Visa Commercial Transport  |  
| S6  | Visa Business Loan  |  
| Sl  | Visa Purchasing with Fleet  |  
| U  | Visa TravelMoney  |  
| V  | Visa V Pay  |  
| X  | Visa B2B  |  
### Mastercard[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#mastercard "Direct link to Mastercard")  
| Card Product ID  | Card Product Name  |  
| --- | --- |  
| ACS  | ACH for Consumer  |  
| BPC  | Bill Pay Commercial  |  
| BPD  | Mastercard World Business Debit  |  
| CIR  | Cirrus Card  |  
| DBK  | DIGITAL MASTERCARD BLACK  |  
| DCG  | DIGITAL GOLD  |  
| DCS  | DIGITAL STANDARD  |  
| DPL  | DIGITAL PLATINUM  |  
| MAB  | World Elite Mastercard for Business  |  
| MAC  | Mastercard Corporate World Elite Card  |  
| Maestro  | Branded Prepaid business programs issued in Europe  |  
| MAP  | Mastercard Commercial Payment Account  |  
| MAQ  | Mastercard Prepaid Commercial Payment Account  |  
| MBA  | MasterCard B2B Product 2  |  
| MBB  | Mastercard Prepaid Consumer  |  
| MBC  | MasterCard Prepaid Voucher  |  
| MBD  | Debit MasterCard Professional Card  |  
| MBE  | MasterCard Electronic BusinessCard Card  |  
| MBF  | MasterCard Alimentacao (Food)  |  
| MBG  | MasterCard B2B Product 3  |  
| MBH  | MasterCard B2B Product 4  |  
| MBI  | MasterCard B2B Product 5  |  
| MBJ  | MasterCard B2B Product 6  |  
| MBK  | MasterCard Black  |  
| MBM  | MasterCard Refeicao (Meal)  |  
| MBP  | MasterCard Corporate Prepaid  |  
| MBS  | MasterCard B2B Product 1  |  
| MBW  | World MasterCard Black Edition  |  
| MCB  | MasterCard BusinessCard Card  |  
| MCC  | Mixed Product  |  
| MCC  | MASTERCARD MIXED  |  
| MCE  | MasterCard Electronic  |  
| MCF  | MasterCard Corporate Fleet Card  |  
| MCG  | Gold MasterCard  |  
| MCM  | MasterCard Corporate Meeting Card  |  
| MCO  | MasterCard Corporate Card  |  
| MCP  | Mastercard Corporate Purchasing Card  |  
| MCS  | Mastercard Standard  |  
| MCT  | Titanium MasterCard  |  
| MCU  | MasterCard Unembossed Card  |  
| MCW  | World MasterCard Card  |  
| MDB  | Debit MasterCard BusinessCard Card  |  
| MDG  | Debit Gold MasterCard  |  
| MDH  | World Debit MasterCard Embossed  |  
| MDJ  | Debit MasterCard (enhanced)  |  
| MDO  | Debit MasterCard Other Programs  |  
| MDP  | Debit Platinum MasterCard  |  
| MDS  | Debit MasterCard  |  
| MDS  | Debit MasterCard  |  
| MDS  | DEBIT STANDARD  |  
| MDT  | Business Debit MasterCard  |  
| MDU  | Debit MasterCard Unembossed  |  
| MDW  | World Elite Debit MasterCard  |  
| MEB  | MasterCard Executive BusinessCard Card  |  
| MEO  | MasterCard Corporate Executive Card  |  
| MEP  | Premium Debit MasterCard  |  
| MES  | Mastercard Enterprise Solutions  |  
| MET  | Titanium Debit MasterCard  |  
| MFR  | MasterCard Commercial Reward Funding  |  
| MGF  | MasterCard Government Commercial Card  |  
| MGP  | Mastercard Prepaid Gold Payroll  |  
| MGS  | Platinum Mastercard Prepaid General Spend  |  
| MHA  | MasterCard Healthcare Prepaid Non  |  
| MHB  | MasterCard HSA Substantiated  |  
| MHH  | MasterCard HSA Non  |  
| MHP  | HELOC Platinum MasterCard  |  
| MHS  | HELOC Standard MasterCard  |  
| MIC  | ISIC MasterCard Student Card  |  
| MIP  | ISIC MasterCard Prepaid Student Card  |  
| MIS  | ISIC Debit MasterCard Student Card  |  
| MIU  | Debit MasterCard Unembossed  |  
| MLA  | MasterCard Central Travel Solutions Air  |  
| MLB  | MasterCard Brazil Prepaid Benefits  |  
| MLC  | MasterCard Micro  |  
| MLD  | MasterCard Distribution Card  |  
| MLE  | MasterCard Pedagio Prepaid Card  |  
| MLF  | MasterCard Agro  |  
| MLL  | MasterCard Central Travel Solutions Land  |  
| MNF  | MasterCard Public Sector Commercial Card  |  
| MNW  | World MasterCard Card  |  
| MOW  | World Maestro  |  
| MPA  | Prepaid MasterCard Payroll Card  |  
| MPB  | MasterCard Preferred BusinessCard Card  |  
| MPC  | MasterCard Professional Card  |  
| MPD  | Mastercard Flex Prepaid  |  
| MPF  | Prepaid MasterCard Gift Card  |  
| MPG  | Prepaid MasterCard General Spend Card  |  
| MPJ  | Prepaid MC Debit Voucher Meal/Food Card  |  
| MPL  | Platinum MasterCard  |  
| MPM  | Prepaid MasterCard Consumer Incentive Card  |  
| MPN  | Prepaid MasterCard Insurance Card  |  
| MPO  | Prepaid MasterCard Other Card  |  
| MPP  | MasterCard Prepaid Embossed  |  
| MPR  | Prepaid MasterCard Travel Card  |  
| MPV  | Prepaid MasterCard Government Card  |  
| MPW  | Prepaid MasterCard Workplace B2B Solutions  |  
| MPX  | Prepaid MasterCard Flex Benefit Card  |  
| MPY  | Prepaid MasterCard Employee Incentive Card  |  
| MRC  | Prepaid MasterCard Electronic Card  |  
| MRD  | Platinum Debit Mastercard Prepaid General Spend  |  
| MRF  | Standard Deferred  |  
| MRG  | Prepaid MasterCard Card  |  
| MRH  | MasterCard Prepaid Platinum Travel Card  |  
| MRJ  | Prepaid MasterCard Voucher Meal/Food Card  |  
| MRK  | Prepaid MC Public Sector Commercial Card  |  
| MRL  | Mastercard Prepaid Business Preferred  |  
| MRO  | MasterCard Rewards Only  |  
| MRW  | Prepaid MasterCard BusinessCard Card  |  
| MSB  | Maestro Small Business  |  
| MSI  | Maestro Card  |  
| MSI  | MAESTRO  |  
| MTP  | MasterCard Platinum Prepaid Travel  |  
| MUP  | Platinum Debit MasterCard Unembossed  |  
| MUS  | Prepaid MasterCard Unembossed  |  
| MVA  | Mastercard B2B VIP 1  |  
| MVB  | Mastercard B2B VIP 2  |  
| MVC  | Mastercard B2B VIP 3  |  
| MVD  | Mastercard B2B VIP 4  |  
| MVE  | Mastercard B2B VIP 5  |  
| MVF  | Mastercard B2B VIP 6  |  
| MVG  | Mastercard B2B VIP 7  |  
| MVC  | Mastercard B2B VIP 3  |  
| MVD  | Mastercard B2B VIP 4  |  
| MVE  | Mastercard B2B VIP 5  |  
| MVF  | Mastercard B2B VIP 6  |  
| MVG  | Mastercard B2B VIP 7  |  
| MVH  | Mastercard B2B VIP 8  |  
| MVJ  | Mastercard B2B VIP 10  |  
| MVK  | Mastercard B2B VIP 11  |  
| MVL  | Mastercard B2B VIP 12  |  
| MVM  | Mastercard B2B VIP 13  |  
| MVN  | Mastercard B2B VIP 14  |  
| MWB  | World MasterCard for Business  |  
| MWE  | World Elite MasterCard Card  |  
| MWF  | Mastercard Humanitarian Prepaid  |  
| MWO  | MasterCard Corporate World Card  |  
| MWP  | Mastercard World Prepaid  |  
| MXG  | Digital Enablement Program  |  
| OLB  | Maestro Small Business  |  
| OLC  | Prepaid MasterCard Commercial Card  |  
| OLR  | Prepaid MasterCard Consumer Card  |  
| OLS  | Maestro  |  
| PVL  | Private Label  |  
| PVT  | Private Label Trade Program  |  
| SAP  | MasterCard Salary Platinum  |  
| SAS  | MasterCard Salary Standard  |  
| SUR  | Prepaid MasterCard Unembossed  |  
| TCB  | Mastercard BusinessCard Card  |  
| TCC  | MasterCard Mixed Product  |  
| TCG  | Gold MasterCard  |  
| TCO  | Mastercard Corporate Card  |  
| TCS  | MasterCard Standard  |  
| TCW  | World Elite Mastercard  |  
| TIC  | ISIC MasterCard Student Card  |  
| TIU  | MasterCard Unembossed  |  
| TNW  | World MasterCard  |  
| TPC  | MasterCard Professional Card  |  
| TPL  | Platinum MasterCard  |  
| TWB  | World MasterCard Black Edition  |  
| WBE  | World MasterCard Black Edition  |  
| WDR  | World Debit MasterCard Rewards  |  
| WMR  | World MasterCard Rewards  |  
| WPD  | World Prepaid Debit  |  
warning
Some card brands issue card products referred to as "debit", but with a funding source that's actually credit. This is typical of corporate or professional cards where the credit line can be used despite the card product name indicating it's debit. Examples include Debit Mastercard BusinessCard and Debit Mastercard Professional Card.
## Full BIN File Download[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#full-bin-file-download "Direct link to Full BIN File Download")
BIN Lookup Enterprise tier subscribers have access to a full BIN file download endpoint. This enables customers to store a local copy of the BIN data to perform BIN lookups on-premise. This can be useful to minimize latency and to enable offline use cases for BIN lookup. The file is in csv format and has a .zip extension. The file is updated every Monday at 12:30 AM UTC.
Enterprise customers will need to design search logic to search for a BIN value within a given range. For example, if you want to review details for BIN "464565", you'd generate the 19-digit value for a card number, padded with trailing zeros; you would then search for all the rows where the card number "4645650000000000000" is between the bin_min and the bin_max.
### Overlapping BIN Ranges[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#overlapping-bin-ranges "Direct link to Overlapping BIN Ranges")
It's possible for a BIN to appear in two or more overlapping BIN ranges. This typically indicates one of the following:
  * The provided BIN does not contain enough digits. More digits are required to narrow the results (e.g. providing six digits results in two BIN range matches, but providing eight digits results in only one). For this reason, it is recommended to provide as many digits as possible. To do BIN lookups locally without incurring PCI DSS scope for handling card data, you can retain a certain number of digits from the PAN to comply with the PCI's [allowable truncation formats](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/What-are-acceptable-formats-for-truncation-of-primary-account-numbers/). For PANs greater than 15 digits in length, the PCI DSS will allow you to retain the first eight digits and any other four. In these cases, it is advised to provide the first 12 digits for best results. For PANs that have a length of 15 digits or less, PCI DSS only allows you to retain the first 6.
info
As a PCI level 1 service provider, TokenEx uses the full PAN when performing a BIN lookup. This guarantees best results. This enables organizations to get accurate BIN data without incurring any PCI DSS scope from handling card data internally.
  * The given BIN has multiple card brands associated with it. The primary card brand for the BIN will be one of the main card brands—Visa, Mastercard, Amex, Discover, JCB, or UnionPay; the secondary is typically a pinless debit network (Pulse, NYCE, Star, etc.) or a regional brand (e.g. EFTPOS, Dankort, Carte Bancaire). Below is an example of a card with multiple networks represented as logos on the back.
![](https://documentation.ixopay.com/modules/assets/images/cc-multiple-networks-0a2d17287aef9f1e967e1e6db6fad338.jpg)

## Access Points[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#access-points "Direct link to Access Points")
### Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#iframe "Direct link to Iframe")
The TokenEx iframe JS library has a BIN Lookup function and an event listener. The function is used to retrieve BIN lookup data for a PAN that has been collected in the iframe, and the event is used to trigger another action off of a BIN lookup.
It is best practice to perform the BIN lookup after input validation of the PAN and before tokenization. However, the trigger for BIN lookup is controlled by the customer's implementation of the function.
**Documentation**
[Iframe Function](https://documentation.ixopay.com/modules/docs/tokenex/functions)
[Iframe Event](https://documentation.ixopay.com/modules/docs/tokenex/events)
### Token Services API v2[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#token-services-api-v2 "Direct link to Token Services API v2")
There are two API endpoints within the PCI Token Services section of API v2. The BinFile endpoint can only be accessed by Enterprise tier BIN Lookup subscribers, while any BIN Lookup subscriber can use the BinLookup endpoint.
**Documentation**
[BIN Lookup API Endpoint](https://documentation.ixopay.com/modules/api/tokenex/bin-lookup-2)
[BIN File API Endpoint](https://documentation.ixopay.com/modules/api/tokenex/bin-file)
### Mobile API[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#mobile-api "Direct link to Mobile API")
The Mobile API has a BIN Lookup endpoint that can be accessed by client-side devices.
**Documentation**
[Mobile BIN Lookup](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup)
## BIN Lookup Guides[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#bin-lookup-guides "Direct link to BIN Lookup Guides")
The following guides go into detail about how to leverage some of the data provided by the TokenEx BIN Lookup service.
### Level 2 and Level 3 Indicators[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#level-2-and-level-3-indicators "Direct link to Level 2 and Level 3 Indicators")
A merchant provides a lot of data in a payment transaction. This transaction data typically includes information about the order, the customer, and the payment instrument. Merchants can obtain lower interchange rates by submitting more data in a payment transaction. The card networks perceive lower risk of fraud when more data is provided and certain conditions are met. In general, more data leads to less risk, and therefore, lower interchange fees. The level of data that a merchant provides is classified into a three level system (level 3 being the most data provided). A merchant may qualify for level 2 or level 3 interchange if a majority of it's transactions are business-to-business (B2B) or business-to-government (B2G).
#### Level 1 Data[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#level-1-data "Direct link to Level 1 Data")
Level 1 data includes total purchase amount, card number, expiration date, merchant category code, and merchant's name. This level of data is associated with typical business-to-consumer (B2C) transactions.
#### Level 2 Data[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#level-2-data "Direct link to Level 2 Data")
Level 2 includes all data from level 1 plus sales tax amount, customer accounting code, merchant's tax ID, any applicable minority or woman owned business status, and sales outlet zip code.
#### Level 3 Data[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#level-3-data "Direct link to Level 3 Data")
Level 3 includes all data from levels 1 and 2 plus quantities, product codes, product descriptions, ship to zip code, freight amount, duty amount, order number, unit of measure, discount indicator, discount amount, net/gross indicator, tax rate applied, tax type applied, debit or credit indicator and alternate tax identifier.
### Type vs. FundingSource[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#type-vs-fundingsource "Direct link to Type vs. FundingSource")
Generally, the "type" of a payment card and its funding source are synonymous. However, there are rare scenarios in which they are not. There are times when a debit business card is funded by a commercial line of credit or a credit card is set based on the backend of a business' bank account. This is why Visa and Mastercard have added funding type to their network files in addition to type. In some cases, a card product may be considered a debit card (i.e. Debit MasterCard BusinessCard Card) by the consumer, but the funding source may be a line of credit, as indicated by the funding source field, set by the card brands.