---
title: BIN Lookup Guide
summary: ' BIN Lookup  BIN Lookup Guide'
tags:
- bin-lookup-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-bin-lookup-direct-link-bin-lookup
- bin-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-bin-direct-link-bin
- data-sources-ixopay-bin-lookup-reliable-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-data-sources-reliability-direct-link-data-sources-ixopay-bin-lookup-reliable
- leverage-bin-lookup-data-improve-payment-processing-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-leveraging-bin-lookup-data-direct-link-leverage-bin-lookup-data-improve-payment-processing
- understanding-card-type-funding-source-combo-card-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-understanding-card-type-funding-source-combo-card-direct-link-understanding-card-type-funding-source-combo-card
- understanding-additional-card-brands-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-understanding-additional-card-brands-direct-link-understanding-additional-card-brands
- understanding-pan-token-apple-google-pay-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-understanding-pan-token-applegoogle-pay-direct-link-understanding-pan-token-apple-google-pay
- understanding-issuer-supports-token-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-understanding-issuer-supports-token-direct-link-understanding-issuer-supports-token
- access-bin-lookup-service-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-accessing-bin-lookup-direct-link-access-bin-lookup-service
- full-bin-file-download-https-documentation-ixopay-com-modules-docs-tokenex-bin-lookup-overview-full-bin-file-download-direct-link-full-bin-file-download
source_url: https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview
portal: tokenex
updated: '2026-07-01'
related: []
---

* BIN Lookup
  * BIN Lookup Guide

# BIN Lookup Guide
info
BIN lookup is a subscription service. Contact your Customer Success Manager or sales@ixopay.com to gain access to our BIN lookup product.
## What is BIN Lookup?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-bin-lookup "Direct link to What is BIN Lookup?")
Processing digital payments involves complex challenges, including fraud prevention, chargebacks, low authentication rates, and high transaction costs. A BIN Lookup is the process of querying the first 6 to 8 digits of a payment card against a database to retrieve rich metadata—the card's "DNA".
### What is a BIN?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-a-bin "Direct link to What is a BIN?")
A **Bank Identification Number (BIN)** consists of the first 4, 6, or 8 digits of a Primary Account Number (PAN). This number represents a specific range of accounts managed by an issuer, meaning all cards within a given BIN share the same attributes.
**Example**  
| BIN  | Account Minimum  | Account Maximum  |  
| --- | --- | --- |  
| 442931  | 4429310000000000  | 4429319999999999  |  
**The TokenEx Advantage**
With TokenEx Universal Tokens, you can access enriched card data without needing to manage the raw PAN or BIN yourself. Because TokenEx is a PCI Level 1 service provider, the system **automatically queries the database using the full PAN collected during the tokenization process**. This ensures the highest level of data accuracy while allowing you to access complete card data without expanding your PCI DSS compliance scope.
This approach also eliminates the common issue of **overlapping BINs**. Traditional lookups often rely on only the first 6 or 8 digits, which can lead to inaccurate results as card ranges become more complex. Since TokenEx processes the full card number, these overlaps become a non-issue, providing precise and unambiguous metadata every time.
## What data sources does IXOPAY use for BIN Lookup and how reliable are they?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#data-sources-and-reliability "Direct link to What data sources does IXOPAY use for BIN Lookup and how reliable are they?")
TokenEx provides over 70 distinct BIN data points and acts as a **direct pass-through service** for the card brands to ensure maximum data accuracy. To provide enterprise-grade reliability, the data is refreshed weekly. Additionally, **continuity logic** is built in: if a card brand drops a specific range from their active file, we return the last known response for that range. In scenarios where issuers have removed ranges such as moments of reclassification, this prevents unknown responses, ensuring the card remains functional and your data remains consistent.
## How can I leverage BIN Lookup data to improve payment processing?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#leveraging-bin-lookup-data "Direct link to How can I leverage BIN Lookup data to improve payment processing?")
Using BIN Lookup provides direct strategic value for your business by:
  * **Improving Authorization Rates:** Allows you to route transactions to the acquiring processor most likely to approve that specific issuer's card, reducing false declines.
  * **Preventing Fraud:** Helps you cross-reference the card issuer's region with the customer's location to flag risky transactions, or block non-reloadable prepaid cards from initiating recurring subscriptions.
  * **Optimizing Costs:** Enables you to identify card types (e.g., high-fee commercial cards vs. lower-fee consumer debit cards) so you can adjust your pricing or routing strategies accordingly.

### Understanding Card "Type" vs. "Funding Source" vs. "Combo Card"[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-card-type-vs-funding-source-vs-combo-card "Direct link to Understanding Card "Type" vs. "Funding Source" vs. "Combo Card"")
**Type** and **Funding Source** represent two distinct layers of a card's identity. **Type** refers to the specific product tier or "brand level" assigned by the issuer (e.g., Classic, Platinum, or World Elite), which often dictates the perks and rewards associated with the card. **Funding Source** , conversely, identifies the actual origin of the funds—typically Credit, Debit, or Prepaid. These fields differ when a high-tier "Type" (like a Business Signature card) is linked to a "Debit" account, or when regional regulations override standard branding. The **Combo Card** field adds a layer of complexity by identifying cards that house multiple applications on a single chip; for these, the Funding Source isn't fixed and depends entirely on which "path" (Debit or Credit) was selected at the moment of the transaction, even though the underlying BIN Type remains the same.
### Understanding Additional Card Brands[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-additional-card-brands "Direct link to Understanding Additional Card Brands")
As mentioned before, overlapping BINs can be an indication of multiple card brands. When the **Card Brand is Additional** field is true, it usually means the card is "co-badged," carrying both a global brand like Visa and a local network like **Cartes Bancaires** or **Elo**. This could indicate that a **cheaper routing path** exists; by recognizing the secondary brand, you can bypass expensive global networks and route through the local one to slash interchange fees.
Beyond cost, this flag acts as a geographic marker. Since these local brands often have higher trust levels with domestic banks, seeing this "True" flag is your cue to apply localized security protocols. This ensures a higher **authorization success rate** by switching from a generic global processing lane to a faster, more reliable local one.
### Understanding "Pan or Token" and Apple/Google Pay[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-pan-or-token-and-applegoogle-pay "Direct link to Understanding "Pan or Token" and Apple/Google Pay")
The **pan_or_token** column identifies whether a transaction uses a traditional 16-digit card number (**PAN**) or a secure digital **Token**. While a PAN represents a physical plastic card, a Token is a randomized alias used by digital wallets like **Apple Pay** and **Google Pay**.
When a customer pays via mobile wallet, they use a device-specific **DPAN** (Device Primary Account Number). Our platform is fully equipped to handle these secure identifiers. By analyzing the token's BIN, we identify the real bank and card type associated with that payment. This ensures you maintain full transaction visibility and optimization—such as identifying the **Issuing Bank** and **Funding Source** —without ever needing to see the sensitive physical card data.
### Understanding "Issuer Supports Token"[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-issuer-supports-token "Direct link to Understanding "Issuer Supports Token"")
The **issuer_supports_tokenization** field indicates whether a bank's infrastructure is technically equipped to handle network tokenization services. This value is set to true when network data confirms the issuing bank supports these services; otherwise, the field remains null. Currently, this capability is exclusive to **Visa** and **Mastercard** networks. For Visa, this information is integrated into their standard network files, while for Mastercard, the data is sourced from quarterly digital enablement files that map specific BIN ranges to tokenization support.
## How do I access the BIN Lookup service?[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#accessing-bin-lookup "Direct link to How do I access the BIN Lookup service?")
### Full BIN File Download[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#full-bin-file-download "Direct link to Full BIN File Download")
BIN Lookup Enterprise subscribers can download a local copy of the full BIN database (provided as a CSV file in a .zip archive). This file is updated every Tuesday at 9:00 AM UTC and is ideal for minimizing latency and enabling offline lookups.
**Search Logic:** Enterprise customers must build logic to search for a BIN within the provided ranges. For example, to look up BIN "464565", you generate a 19-digit value padded with zeros (4645650000000000000) and search for the rows where this value falls between the bin_min and bin_max fields.
### Single BIN Lookup[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#single-bin-lookup "Direct link to Single BIN Lookup")
#### Access Points[​](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#access-points "Direct link to Access Points")
You can access the BIN Lookup service through three primary methods:
  * **Iframe:** The TokenEx iframe JS library includes a BIN Lookup function and an event listener. Best practice is to validate the PAN, trigger the BIN lookup, and then proceed to tokenization.
    * [BIN Lookup function](https://documentation.ixopay.com/modules/docs/tokenex/functions)
    * [BIN Lookup event listener](https://documentation.ixopay.com/modules/docs/tokenex/events)
  * **Token Services API v2:** Contains two endpoints: BinLookup (available to all subscribers) and BinFile (exclusive to Enterprise subscribers).
    * [BinLookup endpoint](https://documentation.ixopay.com/modules/api/tokenex/bin-lookup-2)
    * [BinFile endpoint](https://documentation.ixopay.com/modules/api/tokenex/bin-file)
  * **Mobile API:** Provides a dedicated BIN Lookup endpoint for client-side devices.
    * [Mobile BIN Lookup](https://documentation.ixopay.com/modules/docs/tokenex/mobile-bin-lookup)

  * [What is BIN Lookup?](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-bin-lookup)
    * [What is a BIN?](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#what-is-a-bin)
  * [What data sources does IXOPAY use for BIN Lookup and how reliable are they?](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#data-sources-and-reliability)
  * [How can I leverage BIN Lookup data to improve payment processing?](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#leveraging-bin-lookup-data)
    * [Understanding Card "Type" vs. "Funding Source" vs. "Combo Card"](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-card-type-vs-funding-source-vs-combo-card)
    * [Understanding Additional Card Brands](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-additional-card-brands)
    * [Understanding "Pan or Token" and Apple/Google Pay](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-pan-or-token-and-applegoogle-pay)
    * [Understanding "Issuer Supports Token"](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#understanding-issuer-supports-token)
  * [How do I access the BIN Lookup service?](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#accessing-bin-lookup)
    * [Full BIN File Download](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#full-bin-file-download)
    * [Single BIN Lookup](https://documentation.ixopay.com/modules/docs/tokenex/bin-lookup-overview#single-bin-lookup)