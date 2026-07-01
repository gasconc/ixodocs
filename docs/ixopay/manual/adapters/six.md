---
title: Six / PAYONE
summary: ' Six / PAYONE'
tags:
- six-elink-creditcard-https-documentation-ixopay-com-manual-adapters-six-six-elink-creditcard-direct-link-six-elink-creditcard
- six-push-https-documentation-ixopay-com-manual-adapters-six-six-push-direct-link-six-push
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-six-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-six-provider-settlement-direct-link-provider-settlement
- payone-creditcard-https-documentation-ixopay-com-manual-adapters-six-payone-creditcard-direct-link-payone-creditcard
- api
- xml
- ixopay
- recurring
- chargeback
source_url: https://documentation.ixopay.com/manual/adapters/six
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* Six / PAYONE

# Six / PAYONE
## Six Elink Creditcard[​](https://documentation.ixopay.com/manual/adapters/six#six-elink-creditcard "Direct link to Six Elink Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - Six Elink Creditcard - Vault Configuration):
  1. Select the mandatory **Target Environment:** Staging, Production
  2. Fill in the mandatory **Acquiring Institution Code:** SIX Payment Services Europe, SIX Payment Services Switzerland, SIX Payment Services Austria
  3. Fill in the mandatory **Merchant ID**
  4. Fill in the mandatory **Terminal IDs**
  5. Enable the option **Allow dynamic descriptor**
  6. Enable the option **Process all DINERs recurring transactions as MOTO Transactions**
  7. Enable the option **Process all DINERs cof transactions as ECommerce Transactions**
  8. Enable the option **Ignore Exemptions on Diners Cards**
  9. Enable the option **Marketplace MID**
  10. Fill in the parameters for the **Card Acceptor Name and Location**
  11. Fill in the mandatory **Name** — 1-25 characters
  12. Fill in the mandatory **City** — 1-13 characters
  13. Fill in the mandatory **Country Code** — two-character, uppercase, alphabetic string (ISO 3166-1 alpha-2 code)
  14. Fill in the mandatory **Street** — 1-48 characters
  15. Fill in the mandatory **Postal Code** — 1-10 characters
  16. Add **CCTI-IDs (Override defaults)** to
  17. Fill in the **Default Capture Reference**

![Connector Detail Overview - Six Elink Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-six-elink-creditcard-vault-configuration.49aec5e.1196.png)Connector Detail Overview - Six Elink Creditcard - Vault Configuration
## Six Push[​](https://documentation.ixopay.com/manual/adapters/six#six-push "Direct link to Six Push")
Configure the following parameters for the Connector (see Connector Config - Six Creditcard):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the mandatory **API Secret**

![Connector Config - Six Creditcard](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-six-creditcard.2f3d443.1280.png)Connector Config - Six Creditcard
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/six#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider.
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/six#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (xml file with default filename regex is: `/\.EVP\.MRXD/`) via SFTP (ftservice.six-group.com) (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the optional **Name**
  2. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  3. Select the Adapter **Six**
  4. The Setting **Testmode** is irrelevant for this adapter
  5. Fill in the mandatory **Extra Data: sftpUsername** : used for authentication
  6. Fill in the mandatory **Extra Data: sftpHost** : specify the Host used for fetching documents
  7. Fill in the mandatory **Extra Data: rootDirectory** : specify the root directory for the files to be fetched
  8. Fill in the optional **Extra Data: fileNameRegex** : specify the naming convention of the files to be fetched
  9. Fill in the optional **Extra Data: sftpPrivateKey:** used for authentication
  10. Fill in the **Extra Data: privateKeyPassword:** used for authentication
  11. Select the optional **Extra Data: returnAddMercDataInTransactionId** — True, False
  12. Select the optional **Extra Data: sumTransactionsWithoutId** — True, False

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.2d1dc5a.626.png)Edit Provider Settlement Data Fetcher Provider Level
#### Settlement fields[​](https://documentation.ixopay.com/manual/adapters/six#settlement-fields "Direct link to Settlement fields")
The `extSettlingRefNo` and the `paymentNo` are set as settlement number depending on the availability of this field. Some countries like Austria provide only `paymentNo`. The priority is `extSettlingRefNo` -> `paymentNo` -> now as Ymd.
##### Batch Number[​](https://documentation.ixopay.com/manual/adapters/six#batch-number "Direct link to Batch Number")
The batch number is populated with the filename. It is expected to include a timestamp.
##### Payment Reference[​](https://documentation.ixopay.com/manual/adapters/six#payment-reference "Direct link to Payment Reference")
The payment reference is taken from the parameter paymentNo.
##### Mapped Fields[​](https://documentation.ixopay.com/manual/adapters/six#mapped-fields "Direct link to Mapped Fields")
We are mapping the following fields from the Provider settlement reports (Provider → [IXOPAY platform](https://www.ixopay.com)):  
| Provider  | IXOPAY platform  | default (if not set by Provider)  |  
| --- | --- | --- |  
| `arn`  | Settlement ARN  | None  |  
| `aTrxOC/@c`  | Settlement currency  | None  |  
| `aTrxNetSC`  | Net settlement amount  | None  |  
| `xRate`  | Settlement exchange rate  | None  |  
| `pan`  | Last 4 digits - Settlement return data  | None  |  
| `aComEffExclVatSC`  | Fee amount  | None  |  
| `aComEffExclVatSC/@c`  | Fee currency  | None  |  
|  `condCode` = `1`, `200`, `221`, `600`, `701`  | Fee type markup  | None  |  
|  `condCode` = `15`, `103`  | Fee type interchange  | None  |  
|  `condCode` = `35`, `38`  | Fee type scheme  | None  |  
|  `condCode` = `55`  | Fee type dispute  | None  |  
| `Payment Date`  | Settlement date  | Now  |  
|  `paymentNo` (see Settlement fields)  | Settlement number  | None  |  
|  `extSettlingRefNo` (see Settlement fields)  | Settlement number  | Now as Ymd  |  
| `addlMercData`  | Settlement transaction id  | None  |  
##### Transaction Types[​](https://documentation.ixopay.com/manual/adapters/six#transaction-types "Direct link to Transaction Types")  
| `trxIndicator`  | Provider  | IXOPAY platform  | default (if not set by Provider)  |  
| --- | --- | --- | --- |  
| `100`  |  `trxTypeId` = `1`, `3`  | Debit  | None  |  
| `100`  |  `trxTypeId` = `2`  | Preauthorize  | None  |  
| `100`  |  `trxTypeId` = `9`, `37`  | Refund  | None  |  
| `100`  |  `trxTypeId` = `10`, `21`, `4`  | Payout  | None  |  
| `100`  |  `trxTypeId` = `22`  | Capture  | None  |  
| `140`  | /  | Chargeback  | None  |  
| `141`  | /  | Cb-reversal  | None  |  
## PAYONE Creditcard[​](https://documentation.ixopay.com/manual/adapters/six#payone-creditcard "Direct link to PAYONE Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - PAYONE Creditcard - Vault Configuration):
  1. Select the mandatory **Target Environment:** Dev, Quality, Production
  2. Select the mandatory option **Route via ISONAC**
  3. Fill in the mandatory **Merchant ID** provided by PAYONE
  4. Fill in the mandatory **Terminal IDs** (see also [Terminal](https://documentation.ixopay.com/manual/docs/connector/terminals) Setup)
  5. Fill in the mandatory **Card Acceptor Name and Location**
    1. **Name**
    2. **City**
    3. **Country Code** (2-character)
  6. Fill in the optional **CCTI-IDs (Override defaults)**
  7. Fill in the optional **Default Capture Reference**

![Connector Detail Overview - PAYONE Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-payone-creditcard-vault-configuration.e8abf96.1280.png)Connector Detail Overview - PAYONE Creditcard - Vault Configuration