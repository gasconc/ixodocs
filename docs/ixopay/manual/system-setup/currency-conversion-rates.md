---
title: Currency Conversion Rates
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup  Currency
  Conversion Rates'
tags:
- conversion-rates-https-documentation-ixopay-com-manual-docs-system-setup-currency-conversion-rates-conversion-rates-direct-link-conversion-rates
- deviation-tolerance-https-documentation-ixopay-com-manual-docs-system-setup-currency-conversion-rates-deviation-tolerance-direct-link-deviation-tolerance
- ixopay
- transaction
source_url: https://documentation.ixopay.com/manual/docs/system-setup/currency-conversion-rates
portal: ixopay-manual
updated: '2026-05-18'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * Currency Conversion Rates

# Currency Conversion Rates
Full version: not available for Starter and Growth clients
If you want to get access to all [IXOPAY platform](https://www.ixopay.com) features you need to upgrade your plan. Please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) for more information.
The IXOPAY platform supports businesses to handle multiple currencies and thus facilitates accounting functions, such as reporting but also Risk Management teams, when it comes to setting up Rules based on certain Transaction amounts.
As currency prices constantly vary, the IXOPAY platform daily updates a large number of common used currencies automatically based on the conversion rates provided by the European Central Bank (ECB). As an administrator you also have the possibility to add and edit additional currencies as well as to define deviations tolerances for each currency conversion to be considered during transaction Post Processing.
## New Conversion Rates[​](https://documentation.ixopay.com/manual/docs/system-setup/currency-conversion-rates#new-conversion-rates "Direct link to New Conversion Rates")
To add new Conversion Rates to the IXOPAY platform, follow these steps:
  1. Navigate to **System Setup** - **Conversion Rates** (See Conversion Rates Overview)
  2. Select **+ New - + New Conversions Rates** if you are missing currencies
  3. Fill in the
    1. **From Currency** : Choose which currency you would like to add or edit
    2. **To Currency** : Choose to which currency you would like to convert
    3. **Conversion rate:** Conversion rate for the currency conversion
    4. **Reference Date:** Date to be shown in the Conversion Rates Overview
  4. Select **+ Create** to save your conversion rate

The new customized currency will appear in the Conversion Rates Overview with **Set by - Custom**.
![Conversion Rates Overview](https://documentation.ixopay.com/manual/assets/ideal-img/conversion-rates-overview.20a2787.1280.png)Conversion Rates Overview![Create Conversion Rate](https://documentation.ixopay.com/manual/assets/ideal-img/create-conversion-rate.143af48.980.png)Create Conversion Rate
note
Customized Currencies should be regularly updated to be accurate.
## Deviation Tolerance[​](https://documentation.ixopay.com/manual/docs/system-setup/currency-conversion-rates#deviation-tolerance "Direct link to Deviation Tolerance")
To add or edit Deviation Tolerances, follow these steps:
  1. Navigate to **System Setup** - **Conversion Rates** (See Conversion Rates Overview)
  2. Select **+ New - + New Deviation Tolerance**
  3. Fill in the
    1. **From Currency** : Choose which currency you would like to add or edit
    2. **To Currency** : Choose to which currency you would like to convert
    3. **Deviation Tolerance:** Tolerance to be considered during transaction Post Processing for the currency conversion
  4. Select **+ Create** to save your deviation tolerance

The new deviation tolerances will appear in the Deviation Tolerance Overview with **Set by - Custom**. In this view you can also edit the **Global Deviation Tolerance** set for the tenant.
![Deviation Tolerance Overview](https://documentation.ixopay.com/manual/assets/ideal-img/deviation-tolerance-overview.215c861.1280.png)Deviation Tolerance Overview![Create Tolerance Overview](https://documentation.ixopay.com/manual/assets/ideal-img/create-tolerance-overview.b1ca355.980.png)Create Tolerance Overview