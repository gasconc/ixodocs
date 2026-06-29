---
title: Simulator / OfflineInvoice / OfflinePayment / SepaDummy / RiskCheckOnly
summary: ' Simulator / OfflineInvoice / OfflinePayment / SepaDummy / RiskCheckOnly'
tags:
- creditcard-https-documentation-ixopay-com-manual-adapters-simulator-creditcard-direct-link-creditcard
- simulator-https-documentation-ixopay-com-manual-adapters-simulator-simulator-direct-link-simulator
- offlineinvoice-https-documentation-ixopay-com-manual-adapters-simulator-offlineinvoice-direct-link-offlineinvoice
- offlinepayment-https-documentation-ixopay-com-manual-adapters-simulator-offlinepayment-direct-link-offlinepayment
- sepadummy-https-documentation-ixopay-com-manual-adapters-simulator-sepadummy-direct-link-sepadummy
- riskcheckonly-https-documentation-ixopay-com-manual-adapters-simulator-riskcheckonly-direct-link-riskcheckonly
- api
- 3d-secure
- pci
- ixopay
source_url: https://documentation.ixopay.com/manual/adapters/simulator
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* Simulator / OfflineInvoice / OfflinePayment / SepaDummy / RiskCheckOnly

# Simulator / OfflineInvoice / OfflinePayment / SepaDummy / RiskCheckOnly
note
## Creditcard[​](https://documentation.ixopay.com/manual/adapters/simulator#creditcard "Direct link to Creditcard")
Configure the following parameters for the Connector (see Connector Config - Simulator PCI Creditcard):
  1. Fill in the **Dummy Parameter**
  2. Fill in the mandatory **Default Result (for unknown card numbers)**
  3. If needed, check the option **Enable Incremental Authorizations**
  4. Select **Save**

The Simulator also offers the option to simulate the [3D-Secure Authentication](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration).
![Connector Config - Simulator PCI Creditcard](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-simulator-pci-creditcard.0fc57e9.1280.png)Connector Config - Simulator PCI Creditcard
## Simulator[​](https://documentation.ixopay.com/manual/adapters/simulator#simulator "Direct link to Simulator")
Configure the following parameters for the Connector (see Connector Config - Simulator Others):
  1. Fill in the **Username** — Irrelevant for this adapter
  2. Fill in the **Password** - Irrelevant for this adapter
  3. Fill in the **API Secret** — Irrelevant for this adapter
  4. Fill in the **Extra Data: allowExpiredCards**
  5. Select **Create**

![Connector Config - Simulator Others](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-simulator-others.b15e8e1.1280.png)Connector Config - Simulator Others
note
## OfflineInvoice[​](https://documentation.ixopay.com/manual/adapters/simulator#offlineinvoice "Direct link to OfflineInvoice")
Configure the following parameters for the Connector (see Connector Config - OfflineInvoice)
  1. Fill in the **Extra Data: result** - Sucess, Pending
  2. Select **Create**

![Connector Config - OfflineInvoice](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-offlineinvoice.78a152b.1280.png)Connector Config - OfflineInvoice
## OfflinePayment[​](https://documentation.ixopay.com/manual/adapters/simulator#offlinepayment "Direct link to OfflinePayment")
Configure the following parameters for the Connector (see Connector Config - OfflinePayment)
  1. Fill in the **Extra Data: result** - Sucess, Pending, Request User Input, Pending Postback
  2. Select **Create**

![Connector Config - OfflinePayment](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-offlinepayment.6932cb5.1280.png)Connector Config - OfflinePayment
note
SepaDummy adapter was created to support collecting account data without real transaction processing (e.g. using [Hosted Payment Pages](https://documentation.ixopay.com/manual/docs/fast)). It **NOT** connected to any PSP. No real transaction processing is performed.
## SepaDummy[​](https://documentation.ixopay.com/manual/adapters/simulator#sepadummy "Direct link to SepaDummy")
Configure the following parameters for the Connector (see Connector Config - SepaDummy)
  1. Fill in the **Username** — Irrelevant for this adapter
  2. Fill in the **Password** - Irrelevant for this adapter
  3. Fill in the **API Secret** — Irrelevant for this adapter
  4. Select **Create**

![Connector Config - SepaDummy](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-sepadummy.db2b66b.1280.png)Connector Config - SepaDummy
note
The RiskCheckOnly adapter was created to return if a transaction would trigger a configured Risk Profile in the IXOPAY platform. It is **NOT** connected to any PSP. No real transaction processing is performed. Furthermore, no Risk Data ([Transaction Details - Risk Check Log Data](https://documentation.ixopay.com/manual/docs/transactions/details)) is returned and no real transaction processing is performed, therefore configuring Score Card Actions or Actions within the Risk Rule itself might not make sense for this adapter.
## RiskCheckOnly[​](https://documentation.ixopay.com/manual/adapters/simulator#riskcheckonly "Direct link to RiskCheckOnly")
Configure the following parameters for the Connector (see Connector Config - RiskCheckOnly)
  1. Fill in the **Username** — Irrelevant for this adapter
  2. Fill in the **Password** - Irrelevant for this adapter
  3. Fill in the **API Secret** — Irrelevant for this adapter
  4. Fill in the **Extra Data: overrideResult** -
    1. Possible input for register transactions: redirect / redirectSuccess - redirects to the success URL, redirectError - redirects to the error URL, redirectCancel - redirects to the cancel URL, error / failed - simulates error, success / random entry - simulates success
    2. Possible input for refund transactions: pending - simulates pending state, error - simulates error, random entry - simulates success
    3. Possible input for debit / preauth transactions: pendingSuccess / pendingError / pending - simulates pending state, redirectPendingSuccess / redirect/PendingError / redirectSuccess / redirect - redirects to success URL, redirectError - redirects to error URL, redirectCancel - redirects to cancel URL, error / failed - simulates error, successError - if transaction is a reference tx simulates error otherwise success, success / successChargeback (only debit) - simulates success
    4. Possible input for void / capture transactions: pendingError /redirectError / redirectCancel / error / failed - simulate error, pendingSuccess / pending / redirectSuccess / redirect / success / random entry - simulate success
  5. Fill in the **Extra Data: defaultResult** - any value defined in 4.a. - 4.d.; will be used if overrideResult is not set and amount is between 3.61 and 3.74 (see defaultResult table)
  6. Select **Create**

![Connector Config - RiskCheckOnly](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-riskcheckonly.22775b4.1280.png)Connector Config - RiskCheckOnly
###### defaultResult table[​](https://documentation.ixopay.com/manual/adapters/simulator#defaultresult-table "Direct link to defaultResult table")  
| Value  | Result  |  
| --- | --- |  
| 3.61  | error  |  
| 3.62  | redirect  |  
| 3.63  | redirectError  |  
| 3.64  | pending  |  
| 3.65  | pendingSuccess  |  
| 3.66  | pendingError  |  
| 3.67  | redirectPendingSuccess  |  
| 3.68  | redirectPendingError  |  
| 3.69  | redirectCancel  |  
| 3.73  | successChargeback  |  
| 3.74  | successError  |