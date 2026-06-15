---
title: Straight2Bank
summary: 'Configure the following parameters for the Connector see Connector Config
  - Straight2Bank: 1. Fill in the mandatory Corp ID 2.'
tags:
- straight2bank-https-documentation-ixopay-com-manual-adapters-straight2bank-straight2bank-direct-link-straight2bank
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-straight2bank-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-straight2bank-provider-settlement-direct-link-provider-settlement
- api
- json
- ixopay
- psp
- refund
- settlement
- transaction
source_url: https://documentation.ixopay.com/manual/adapters/straight2bank
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* Straight2Bank

# Straight2Bank
## Straight2Bank[​](https://documentation.ixopay.com/manual/adapters/straight2bank#straight2bank-1 "Direct link to Straight2Bank")
Configure the following parameters for the Connector (see Connector Config - Straight2Bank):
  1. Fill in the mandatory **Corp ID**
  2. Fill in the mandatory **Secret Key**
  3. Fill in the optional **Extra Data: default_country**
  4. Fill in the mandatory **Extra Data: passphrase**
  5. Fill in the mandatory **Extra Data: private_key**
  6. Select the optional **Extra Data: sendMerchantMetaDataRef3:** true, false
  7. Fill in the **Extra Data: pspid** — in case you receive this parameter from the PSP

![Connector Config - Straight2Bank](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-straight2bank.a8285f7.1280.png)Connector Config - Straight2Bank
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/straight2bank#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider.
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/straight2bank#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (json format) via API (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the optional **Name**
  2. Fill in any **Interval** - days, hours
  3. Select the Adapter **Straight2Bank**
  4. Fill in the mandatory **Corp ID**
  5. Fill in the mandatory **Secret Key** — required for encryption
  6. Enable **Testmode** to request the reports from the sandbox environment: 
  7. Fill in the mandatory **Extra Data: private_key** - string, required for API request signing
  8. Fill in the mandatory **Extra Data: passphrase** - string, required for API request signing
  9. Fill in the mandatory **Extra Data: checkPaymentMethod** — true, false. If set to true for payment method Billpay SUCCESSFUL transactions are ignored.

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.74bf6ea.1102.png)Edit Provider Settlement Data Fetcher Provider Level
#### Settlement fields[​](https://documentation.ixopay.com/manual/adapters/straight2bank#settlement-fields "Direct link to Settlement fields")
##### Date and Batch Number[​](https://documentation.ixopay.com/manual/adapters/straight2bank#date-and-batch-number "Direct link to Date and Batch Number")
The Date and the batch number are taken from the report file name (e.g. `settlementreport_20230302`)
##### Mapped Fields[​](https://documentation.ixopay.com/manual/adapters/straight2bank#mapped-fields "Direct link to Mapped Fields")
We are mapping the following fields from the Straight2Bank settlement reports (Straight2Bank → [IXOPAY platform](https://www.ixopay.com))  
| Straight2Bank  | IXOPAY platform  | default (if not set)  |  
| --- | --- | --- |  
| Date is taken from Filename  | transaction settlement date  | none  |  
| `ccy`  | transaction settlement currency  | none  |  
| `amt`  | transaction settlement amount  | none  |  
| `netamt`  | transaction net amount  | none  |  
| `refundoptxnid`  | Reference id (Only Refunds)  | none  |  
| `refundoptxnid`  | transaction second adapter tx id (Only Refunds)  | none  |  
|  `ref2` OR `refundoptxnid` (Only for refund)  | Processor transaction id  | none  |  
|  `Ref1` (Only for non Refund)  |  IXOPAY platform UUID  | none  |  
| Date taken from Filename  | Batch number  | none  |