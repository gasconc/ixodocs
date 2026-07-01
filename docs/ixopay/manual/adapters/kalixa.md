---
title: Kalixa/PXP
summary: 'Configure the following parameters for the Connector see Connector Detail
  Overview - Kalixa Creditcard - Vault Configuration: 1. Fill in the mandatory API
  Username 2.'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-kalixa-creditcard-direct-link-creditcard
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-kalixa-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-kalixa-provider-settlement-direct-link-provider-settlement
- api
- ixopay
- psp
- capture
- settlement
- credit-card
- transaction
source_url: https://documentation.ixopay.com/manual/adapters/kalixa
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* Kalixa/PXP

# Kalixa/PXP
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/kalixa#creditcard "Direct link to Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - Kalixa Creditcard - Vault Configuration):
  1. Fill in the mandatory **API Username**
  2. Fill in the mandatory **API Password**
  3. Fill in the mandatory **MerchantID**
  4. Fill in the mandatory **ShopID**
  5. **Enable Partial Capture** to enable partial capture transaction types
  6. **Use Test Endpoint**

![Connector Detail Overview - Kalixa Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-kalixa-creditcard-vault-configuration.9835b33.1280.png)Connector Detail Overview - Kalixa Creditcard - Vault Configuration
Configure the following parameters for the Connector (see Connector Config - Kalixa):
  1. Fill in the mandatory **Username** Merchant’s account name.
  2. Fill in the mandatory **Password** Merchant’s account password.
  3. Fill in the mandatory **Extra Data: merchantID** Unique ID to identify the Merchants. Generated and provided by PSP.
  4. Fill in the mandatory **Extra Data: shopID** The ID of the shop.

![Connector Config - Kalixa](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-kalixa.b1484d0.1280.png)Connector Config - Kalixa
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/kalixa#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider (see Edit Provider).
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/kalixa#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (csv format) via an SFTP (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the optional **Name**
  2. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  3. Select the Adapter **Kalixa**
  4. Enable **Testmode** - irrelevant for this adapter
  5. Fill in the mandatory **Extra Data: merchantID**
  6. Select the **Extra Data: fileType** — Settlement Report, Clearing Payout Report
  7. Select the **Extra Data: skipParsingTransaction** — true, false; Default value is false
  8. Fill in the **Extra Data: sftpHost** - Hostname/IP-Address where to connect to (default to _sft1.servebase.net)_
  9. Fill in the **Extra Data: sftpUsername** — Username for authentication on SFTP host
  10. Fill in the **Extra Data: sftpPassword** — Password for authentication on SFTP host
  11. Fill in the **Extra Data: sftpPath** - Path where the files are stored

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.15e59a8.988.png)Edit Provider Settlement Data Fetcher Provider Level![Reconciliation Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/reconciliation-data-fetcher-provider-level.f719472.946.png)Reconciliation Data Fetcher Provider Level
#### Settlement fields[​](https://documentation.ixopay.com/manual/adapters/kalixa#settlement-fields "Direct link to Settlement fields")
##### Batch Number[​](https://documentation.ixopay.com/manual/adapters/kalixa#batch-number "Direct link to Batch Number")
If there is a column _BatchID_ present that value is used as batch number.
If there is no _BatchID_ and there is a column _ClearingPayoutID_ this value is used instead.
##### Payment Reference[​](https://documentation.ixopay.com/manual/adapters/kalixa#payment-reference "Direct link to Payment Reference")
There is no payment reference saved
##### Mapped Fields[​](https://documentation.ixopay.com/manual/adapters/kalixa#mapped-fields "Direct link to Mapped Fields")
We are mapping the following fields from the provider settlement reports:  
| Provider  | [IXOPAY platform](https://www.ixopay.com)  | default (if not set by Provider)  |  
| --- | --- | --- |  
|  `SettlementDate` / `CreatedOn`  | Settlement Date  | None  |  
| `UniqueID`  | Settlement Reference ID  | None  |  
| `PaymentID`  | Settlement Transaction ID  | None  |  
| `PaymentSettlementAmount`  | Settlement Amount  | None  |  
| `PaymentSettlementCurrency`  | Settlement Currency  | None  |  
|  `BatchID` / `ClearingPayoutID`  | Settlement Batch Number  | None  |  
| `PaymentStateDefID`  | Transaction Type  | None  |  
| `SettlementDate`  | Settlement Date - When there is a column SettlementDate with a value in format m/d/Y H:i:s or m/d/Y the value of the field is used  |   |  
| `CreatedOn`  | Settlement Date - When there is no column SettlementDate but a CreatedOn with a value in format m/d/Y H:i:s or m/d/Y H:i than the value of that is used instead  |   |  
###### Fee mapping[​](https://documentation.ixopay.com/manual/adapters/kalixa#fee-mapping "Direct link to Fee mapping")  
| Provider  | IXOPAY platform  | default (if not set by Provider)  |  
| --- | --- | --- |  
| `PaymentSettlementCurrency`  | Markup / Interchange / Scheme / Fee Currency  | None  |  
| `MarkupFeeInSettlementCurrency`  | Markup Fee Amount  | None  |  
| `InterchangeFeeInSettlementCurrency`  | Interchange Fee Amount  | None  |  
| `SchemeFeeInSettlementCurrency`  | Scheme Fee Amount  | None  |  
| `FeeAmount`  | Normal Fee Amount  | None  |  
| `FeeCurrency`  | Normal Fee Currency  | None  |