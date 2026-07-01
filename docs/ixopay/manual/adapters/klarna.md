---
title: Klarna
summary: 'Configure the following parameters for the Connector see Connector Config
  - KlarnaHpp: 1. Fill in the mandatory Username 2.'
tags:
- klarna-hpp-https-documentation-ixopay-com-manual-adapters-klarna-klarna-hpp-direct-link-klarna-hpp
- klarna-widget-https-documentation-ixopay-com-manual-adapters-klarna-klarna-widget-direct-link-klarna-widget
- klarna-invoice-https-documentation-ixopay-com-manual-adapters-klarna-klarna-invoice-direct-link-klarna-invoice
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-klarna-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-klarna-provider-settlement-direct-link-provider-settlement
- api
- webhook
- ixopay
- refund
- capture
source_url: https://documentation.ixopay.com/manual/adapters/klarna
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* Klarna

# Klarna
## Klarna Hpp[​](https://documentation.ixopay.com/manual/adapters/klarna#klarna-hpp "Direct link to Klarna Hpp")
Configure the following parameters for the Connector (see Connector Config - KlarnaHpp):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the optional **API Secret**
  4. Select the mandatory **Extra Data: region** — EU, NA, OC
  5. Fill in the **Extra Data: logo_url**
  6. Fill in the **Extra Data: page_title**
  7. Fill in the **Extra Data: background_image_url**
  8. Select the **Extra Data: fallback** — true, false
  9. Select the **Extra Data: confirmationModal** — true, false
  10. Select the **Extra Data: fallbackShippingToBilling** — true, false
     * Use shipping details as fallback in case billing details were not provided
  11. Select the **Extra Data: treatBackAsCancel** — true, false
     * Treat Klarna Webhook status `BACK` as `CANCELLED`
  12. Select the **Extra Data: sendReferenceInCaptures** — true, false
     * Send UUID of capture transaction to Klarna. The UUID will be then available in the settlements to reconcile capture transactions
  13. Select the **Extra Data: disableHppSessionOnTxExpiration** — true, false
     * Upon expiration of the transaction (see [Expire transaction with a given status after given minutes](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#transaction-processing-settings)) the Klarna Hosted Payment Session will also be expired

![Connector Config - KlarnaHpp](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-klarnahpp.086002a.1320.png)Connector Config - KlarnaHpp
## Klarna Widget[​](https://documentation.ixopay.com/manual/adapters/klarna#klarna-widget "Direct link to Klarna Widget")
Configure the following parameters for the Connector (see Connector Config - KlarnaWidget):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the mandatory **API Secret**
  4. Select the mandatory **Extra Data: region** — EU, NA, OC

![Connector Config - KlarnaWidget](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-klarnawidget.a6abb78.1280.png)Connector Config - KlarnaWidget
## Klarna Invoice[​](https://documentation.ixopay.com/manual/adapters/klarna#klarna-invoice "Direct link to Klarna Invoice")
Configure the following parameters for the Connector (see Connector Config - KlarnaInvoice):
  1. Fill in the **Username**
  2. Fill in the **Password**
  3. Fill in the **API Secret**

![Connector Config - KlarnaInvoice](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-klarnainvoice.8d096b5.937.png)Connector Config - KlarnaInvoice
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/klarna#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider.
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/klarna#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (see ) via an API (Europe: ; North America: ; Oceania: ) (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  2. Select the Adapter **KlarnaWidget, KlarnaHPP**
  3. Enable **Testmode** to test fetching of Provider Settlements from the Sandbox (Europe: ; North America: ; Oceania: ), disabled the Production environments are used
  4. Fill in the mandatory **Extra Data: region** - EU, NA, OC; region sets the base-url for the Klarna API

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.3c83d26.984.png)Edit Provider Settlement Data Fetcher Provider Level
#### Settlement fields[​](https://documentation.ixopay.com/manual/adapters/klarna#settlement-fields "Direct link to Settlement fields")
##### Batch Number[​](https://documentation.ixopay.com/manual/adapters/klarna#batch-number "Direct link to Batch Number")
The batch number is set to payment_reference.
##### Payment Reference[​](https://documentation.ixopay.com/manual/adapters/klarna#payment-reference "Direct link to Payment Reference")
The payment reference is set to payment_reference.
##### Mapped Fields[​](https://documentation.ixopay.com/manual/adapters/klarna#mapped-fields "Direct link to Mapped Fields")
We are mapping the following fields from the Klarna settlement reports (Klarna → [IXOPAY platform](https://www.ixopay.com)):  
| Provider  | IXOPAY platform  | default (if not set by Provider)  |  
| --- | --- | --- |  
| merchant_reference1  | transaction Id  | none  |  
| merchant_capture_reference  | capture transaction Id  | none  |  
| merchant_refund_reference  | refund transaction Id  | none  |  
| order_id  | reference Id  | none  |  
| payment_reference  | payment reference  | none  |  
| type  | transaction type  | none  |  
| payout_date  | settlement date  | none  |  
| amount  | settlement amount  | none  |  
| currency_code  | settlement currency  | none  |  
| detailed_type  | fee type (see Fee Mapping Table below)  | none  |  
###### Fee Mapping Table[​](https://documentation.ixopay.com/manual/adapters/klarna#fee-mapping-table "Direct link to Fee Mapping Table")  
| Fee Type  | IXOPAY platform  | default  |  
| --- | --- | --- |  
| SERVICING_FEE  | Gateway fee  | Markup fee  |  
| DISPUTE_FEE_REFUND  | Dispute fee  | Markup fee  |  
| DISPUTE_FEE  | Dispute fee  | Markup fee  |