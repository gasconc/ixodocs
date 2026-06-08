---
title: Available Risk Rules
summary: ' Risk Managementhttps://documentation.ixopay.com/manual/docs/risk-management  Risk
  Profiles & Risk Ruleshttps://documentation.ixopay.com/manual/docs/risk-management/risk-profiles  Available
  Risk Rules'
tags:
- general-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-general-checks-direct-link-general-checks
- customer-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-customer-checks-direct-link-customer-checks
- address-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-address-checks-direct-link-address-checks
- credit-card-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-credit-card-checks-direct-link-credit-card-checks
- iban-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-iban-checks-direct-link-iban-checks
- external-risk-checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-external-risk-checks-direct-link-external-risk-checks
- checks-https-documentation-ixopay-com-manual-docs-risk-management-risk-profiles-risk-rules-checks-direct-link-checks
- ixopay
- chargeback
- credit-card
source_url: https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules
portal: ixopay-manual
updated: '2026-06-08'
related: []
---

* [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * [Risk Profiles & Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles)
  * Available Risk Rules

# Available Risk Rules
The following section lists all the risk rules available in the [IXOPAY platform](https://www.ixopay.com).
## General Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#general-checks "Direct link to General Checks")
__**Total Transaction count**
Total count of Transactions of [Connector, Merchant] in [last x hours, last x days] [< >] [x]
Threshold check for the total count of Transactions
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Total amount**
Total amount for [Connector, Merchant] in [last x hours, last x days] [< >] [x]
Threshold check for the total volume of Transactions
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * volume is defined by preauthorize & debit Transactions amounts

__**Total amount of customer**
Total Transaction amount of this customer for [Connector, Merchant] in [last x hours] [< >] [x]
Threshold check for the total volume of Transactions of the same customer
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * customer is defined by Identification and email address
  * volume is defined by preauthorize & debit Transactions amounts

__**Total Transaction count of customer**
Total count of Transaction of this customer for [Connector, Merchant] in [last x hours] [< >] [x]
Threshold check for the total count of Transactions of the same customer
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * customer is defined by Identification and email address

__**Count of Transactions of same device**
Count of Transactions of same device (browser fingerprint) of [Connector, Merchant] in last [x] hours [< >] [x].
Threshold check for the count of Transactions performed on the same device
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * device is defined by the fingerprint generated through the payment page or payment.js

__**Total amount of same device**
Total amount of same device (browser fingerprint) of [Connector, Merchant] in last [x] hours [< >] [x]
Threshold check for the total Transaction volume performed on the same device
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * device is defined by the fingerprint generated through the payment page or payment.js
  * volume is defined by preauthorize & debit Transactions amounts

__**Transaction Indicator Check**
Checks for a specific transaction indicator
__**Registration Flag Check**
Checks whether the transaction has been flagged _withRegister_
Optionally Register transactions can be considered as well
__**Count of different countries**
Count of different countries based on [billing address, shipping address, ip address] of [Connector, Merchant] in [last x hours] [< >] [x]
Compares the count of different country values used within all Transactions
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Difference of this Transaction amount vs. average Transaction amount**
Difference of this Transaction amount vs. average Transaction amount of [Connector, Merchant] in [last x hours] [< >] [x %]
Evaluates the difference of the average Transaction amount of the sliding window versus the current Transaction amount
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Average amount comparison**
Difference of average Transaction amount of [Connector, Merchant] in [last x hours] vs. average Transaction amount of [Connector, Merchant] in [last y hours] [< >] [x %]
Evaluates the difference of the average Transaction amount of the two sliding windows
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Difference of Transaction count**
Difference of Transaction count of [Connector, Merchant] in [last x hours] vs. Transaction count of [Connector, Merchant] in [last y hours] [< >] [x %]
Evaluates the difference of the count of Transactions of the two sliding windows (up to now)
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Count of different payment instruments**
Count of different payment methods (over all customers) at [Connector, Merchant] in [last x hours] [< >] [x]
Threshold check for the total count of all payment instruments on the given reference source (Connector, Merchant)
  * payment instrument is a particular card, IBAN or wallet

__**Blocklist**
Is anything on Blocklist.
Evaluates all available (and chosen) Transaction/ customer values against the Blocklist
__**Allowlist**
Is anything on Allowlist.
Evaluates all available (and chosen) Transaction/ customer values against the Allowlist
__**Transaction amount evaluation**
This Transaction amount is [<>=] [x]
Evaluates the current Transaction amount (limit check)
__**Total amount of customer country**
Total amount of customer country based on [ip country, billing country, shipping country] of [Connector, Merchant] in last [x] [hours, days] [<>] [x] [currency]
Threshold check for the total Transaction volume of all Transactions made from customers in the chosen country
  * for a defined period (hours/ days)

__**Payment instrument usage count**
Count of Transactions using same payment instrument
Threshold check for the total count of Transactions with the same payment instrument
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * payment instrument is a particular card, IBAN or wallet

## Customer Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#customer-checks "Direct link to Customer Checks")
__**Total amount of customer**
Total transaction amount of this customer for [connector, merchant] in [last x hours] [< >] [x]
__**Total transaction count of customer**
Total count of transaction of this customer for [connector, merchant] in [last x hours] [< >] [x]
__**Advanced Country Check**
Country of [type x] is [in/ not in] [list of countries] of [only successful, all] Transactions of [Connector, Merchant] in [last x hours] - but pass the first [x] Transactions
Velocity check to allow only a certain count of Transaction from a particular country within the chosen time period
__**Count of Customers with same Credit card**
Count of customers (email or customerIdentification) with same Credit Card (Credit Card fingerprint) of [Connector, Merchant] in last [x] hours [< >] [x]
Threshold check for the count of customers using the same card
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * customer is defined by Identification and email address

__**Count of Customers of same device**
Count of Customers (email or customerIdentification) of same device (browser fingerprint) of [Connector, Merchant] in last [x] hours [< >] [x] of [all, only successful] Transactions
Threshold check for the count of different customers performed Transaction on the same device
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * device is defined by the fingerprint generated through the payment page or payment.js
  * customer is defined by Identification and email address

__**Count of customers with same IBAN**
Count of customers (email or customerIdentification) with same IBAN of [Connector, Merchant] in last [x] hours [< >] [x]
Threshold check for the count of customers using the same IBAN
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * customer is defined by Identification and email address

__**Customer's data comparison**
Customer Data Analysis Check
Compares the chosen customer data values against the defined values
Comparison with equals, not equals, contains, not contains
__**Customer's IP address**
Customer's IP address is [in, not in] [ip address range in CIDR notation]
Checks if the customer's IP address is within the defined range
__**Customer's IP address country**
Customer's IP address country is [in, not in] [list of countries]
Checks if the customer's IP address belongs to the chosen countries
__**Count of different payment instruments of customer**
Count of different payment methods of customer at [Connector, Merchant] in [last x hours] [< >] [x]
Threshold check for the different payment instruments used by a customer
  * customer is defined by Identification and email address
  * payment instrument is a particular card, IBAN or wallet

__**Country compare to address**
Customer's [ip address, shipping address, billing address] country [= !=] [ip address, shipping address, billing address] country
Checks if two defined country values match or not
__**Total amount of customer country**
Total amount of customer country based on [ip country, billing country, shipping country] of [connector, merchant] in last [x] [hours, days] [<>] [x] [currency]
__**Transaction Indicator and Reference Scheme ID Check**
Checks for a specific transaction indicator and additionally checks whether a reference scheme transaction ID is given
## IP Address Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#ip-address-checks "Direct link to IP Address Checks")
info
See [Customer Checks](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#customer-checks).
## Credit Card Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#credit-card-checks "Direct link to Credit Card Checks")
note
The Credit card checks do not take into account tokens (ApplePay, GooglePay, Network Tokens) created for credit cards. This can lead to over- or undercounting of specific payment instrument counts.
__**_Deprecated:_ Level of Credit Card (BIN)**
BIN level of Credit Card is [in, not in] [list of levels]
Checks the level of the used card (Standard, Gold, Business etc.)
__**Segment of Credit Card (BIN)**
BIN segment of Credit Card is [in, not in] [list of segments]
Checks the segment of the used card (Consumer, Business, Commercial, Government or Unknown)
__**Credit Card PAN Check**
Check first 6 digits and last 4 digits of Credit Card number
Checks the currently used card against the defined card number (first 6 and last 4 digits)
__**Transaction Count of same Credit Card (first 6 and last 4 digits)**
Count of Transactions of [Connector, Merchant] where same first 6 digits (and opt. last 4 digits) are used in last x hours
Velocity check to evaluate the number of Transaction performed with the same Credit Card
__**Count of different Credit Cards of same device**
Count of different Credit Cards (Credit Card fingerprint) of same device (browser fingerprint) of [Connector, Merchant] in last [x] hours [< >] [x].
Threshold check for the count of different cards used by the same device
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)
  * device is defined by the fingerprint generated through the payment page or payment.js

__**Total count of Transactions with certain bin range**
Credit Card matches defined BIN range and total count of Transaction of the defined BIN range for [Connector, Merchant] in [last x hours] [< >] [x].
Velocity check to evaluate the number of Transactions performed with cards originating in the chosen BIN Range
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Prepaid Credit Card (BIN)**
Credit Card [is, is not] prepaid
Checks if the current credit card is a prepaid card or not.
__**Reloadable Credit Card (BIN)**
Credit Card [is, is not] reloadable
Checks if the current credit card is a reloadable card or not.
__**Brand of Credit Card (BIN)**
BIN brand of Credit Card is [in, not in] [list of brands]
Checks the brand of the used card (Visa, Mastercard, Amex, etc.)
__**BIN Country**
BIN country of Credit Card is [in, not in] [list of countries]
Checks if the issuing country of the used card is within the chosen list of countries
__**Type of Credit Card (BIN)**
BIN type of Credit Card is [in, not in] [list of types]
Checks the type of the used card (Debit, Credit)
## IBAN Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#iban-checks "Direct link to IBAN Checks")
info
See [Customer Checks](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#customer-checks).
## External Risk Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#external-risk-checks "Direct link to External Risk Checks")
__**Kount - External Risk Check**
Use Kount Risk Check Analysis. (External Risk Check)
Integrates Kount as external Risk Check service
__**Notolytix - External Risk Check**
Use Notolytix Risk Check Analysis. (External Risk Check)
Integrates Notolytix as external Risk Check service
__**Maxmind - External Risk Check**
Use Maxmind Risk Check Analysis. (External Risk Check)
Integrates Maxmind as external Risk Check service
__**Forter - External Risk Check**
Use Forter Risk Check Analysis. (External Risk Check)
Integrates Forter as external Risk Check service
__**FraudNet - External Risk Check**
Use FraudNet Risk Check Analysis. (External Risk Check)
Integrates FraudNet as external Risk Check service
## Other Checks[​](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-rules#other-checks "Direct link to Other Checks")
__**Randomly hit check**
Triggers randomly by the configured chance (e.g. to generate random samples)
__**Extra Data Check**
Checks the passed extra data against the configured values
__**Count of A with same B**
Count of [A] with same [B] of [Connector, Merchant] in last [x] hours [< >] [x] of [all, only successful] Transactions
Threshold check for the number of Transactions performed with different Credit Cards from different IP addresses.
  * for a defined period (hours/ days)
  * for a defined reference source (Connector or Merchant of the current Transaction)

__**Count or Volume of Chargebacks**
Total Chargeback [count, volume] for [Connector, Merchant] in [last x hours, last x days] [< >] [x]
Threshold check for the volume of Chargebacks used by a customer
  * customer is defined by Identification and email address
  * payment instrument is a particular card, IBAN or wallet

__**Last Transaction is longer ago then**
Last Transaction (debit & preauth) of [Connector, Merchant] [is, is not] longer ago then [x days]
Triggers if the last Transaction of the chosen reference source is longer ago then the defined days
__**First Transaction check**
Transaction [is, is not] first Transaction on [Connector, Merchant]
Triggers if the current Transaction is the first one on the chosen reference source (Connector, Merchant)
__**Includes another Risk Profile**
Includes another defined Risk Profile