---
title: Rolling Reserve
summary: ' Rolling Reserve'
tags:
- ixopay
- settlement
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/post-processing/rolling-reserve
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* [Post-Processing](https://documentation.ixopay.com/manual/docs/post-processing)
  * Rolling Reserve

# Rolling Reserve
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
The term **Rolling Reserve** stands for process of **securing** a **certain percentage** of the processed Transaction volume **for a defined period of time** to cover potential Risks, due to Chargebacks. In the IXOPAY platform the Rolling Reserve can be configured for each payment method individually, per [Merchant](https://documentation.ixopay.com/manual/docs/merchant/profiles) to be used in the Post Processing. Additionally the Rolling Reserve can be added per [Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider) this parameter though is not used for further calculations.
To configure the Rolling Reserve
  * Select the Payment **Method** from the drop-down. Leave empty to enable the Rolling Reserve for all payment methods.
  * Fill in a **Percentage** number of Transaction Volume to be secured
  * Fill in the number of **Days** Rolling Reserve should be secured.

![Rolling Reserve](https://documentation.ixopay.com/manual/assets/ideal-img/rolling-reserve.f9b54fd.1280.png)Rolling Reserve
The configured Rolling Reserve per Merchant can then be used for Merchant Settlement calculation within [Post-Processing Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs) (e.g. on daily/weekly/monthly etc. base).
Alternatively Rolling Reserve per Merchant can be used within the [Fee Management](https://documentation.ixopay.com/manual/docs/connector/fee-management) to calculate line items per Transaction (Calculation Strategy **Rolling-Reserve from Merchant Configuration)**
![Connector fees: rolling reserve](https://documentation.ixopay.com/manual/assets/ideal-img/rolling-reserve.29efdba.1280.png)Connector fees: rolling reserve