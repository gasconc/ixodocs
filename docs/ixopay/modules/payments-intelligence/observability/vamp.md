---
title: VAMP
summary: VAMP or Visa Acquirer Monitoring Program is a new fraud and chargeback monitoring
  program that will be replacing the currently existing ones such as VDMP Visa Dispute
  Monitoring Program or VFMP Visa Fraud Monitoring Program, on total it consolidates
  five existing chargeback and fraud monitoring prog
tags:
- vamp-measured-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-vamp-measured-direct-link-vamp-measured
- vamp-ratio-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-vamp-ratio-direct-link-vamp-ratio
- vamp-exclusions-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-vamp-exclusions-direct-link-vamp-exclusions
- vamp-thresholds-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-vamp-thresholds-direct-link-vamp-thresholds
- start-monitoring-vamp-ixopay-payments-intelligence-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-start-monitoring-vamp-ixopay-payments-intelligence-direct-link-start-monitoring-vamp-ixopay-payments-intelligence
- supported-psps-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-supported-psps-direct-link-supported-psps
- data-update-frequency-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-data-update-frequency-direct-link-data-update-frequency
- metrics-fraud-chargebacks-sales-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-metrics-fraud-chargebacks-sales-direct-link-metrics-fraud-chargebacks-sales
- getting-notified-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-vamp-getting-notified-direct-link-getting-notified
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp
portal: ixopay-modules
updated: '2026-06-11'
related: []
---

* Observability
  * VAMP

# VAMP
VAMP or Visa Acquirer Monitoring Program is a new fraud and chargeback monitoring program that will be replacing the currently existing ones such as VDMP (Visa Dispute Monitoring Program) or VFMP (Visa Fraud Monitoring Program), on total it consolidates five existing chargeback and fraud monitoring programs and combines 38 distinct remediation processes into a single acquirer program.
The subjects for monitoring of the new program are both acquirers and merchants. Officially the newest version of the program went into effect on April the 1st 2025.
## 🔎 How is VAMP measured[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#-how-is-vamp-measured "Direct link to 🔎 How is VAMP measured")
### VAMP Ratio[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#vamp-ratio "Direct link to VAMP Ratio")
The core metric in the program is the VAMP ratio which is calculated by the following formula:
Fraud+DisputesSales\frac{\text{Fraud} + \text{Disputes}}{\text{Sales}}SalesFraud+Disputes​
where:
  * Fraud\text{Fraud}Fraud = Events that are considered to be TC40 cases
  * Disputes\text{Disputes}Disputes = Events that are considered to be TC15 cases
  * Sales\text{Sales}Sales = Events that are considered to be TC05 cases

### VAMP Exclusions[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#vamp-exclusions "Direct link to VAMP Exclusions")
The ratio should exclude pre-dispute solutions (e.g. RDR) and cases for Compelling evidence 3.0. IXOPAY Payments Intelligence (formerly Congrify) currently supports deducting the cases for pre-dispute solutions if sourced via IXOPAY Payments Intelligence automatically. Integration of third party data sources can be discussed and added.
### VAMP thresholds[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#vamp-thresholds "Direct link to VAMP thresholds")
The thresholds are being reviewed and adjusted by Visa on regular basis, the latest ones effective from the 1st of April 2026 for EU and US for merchants are **150bps** for the VAMP ratio additionally to a minimal threshold for the count of fraud cases of 1500 **per month**
The cases for fraud and chargebacks in case there is a tc40 reported case and a chargeback that has been raised are **double counted**.
### How to Start monitoring VAMP with IXOPAY Payments Intelligence[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#how-to-start-monitoring-vamp-with-ixopay-payments-intelligence "Direct link to How to Start monitoring VAMP with IXOPAY Payments Intelligence")
Getting started is simple. Head to the **“Risk”** section in IXOPAY Payments Intelligence UI and click on the **“VAMP”** tab. If your plan allows you to access it you will see the current numbers displayed in this tab.
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_1_Starting_monitoring.b1dc096.1600.png)
In case the feature is not yet available to you, you can upgrade your plan. For any questions, please get in contact with our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
### Supported PSPs[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#supported-psps "Direct link to Supported PSPs")
Currently the VAMP metics are supported for the following PSPs:
  * Chase Payment tech
  * Adyen
  * Checkout.com
  * Stripe

New PSPs are getting added soon, contact us if you have a PSP that you need for monitoring of VAMP
### Data update frequency[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#data-update-frequency "Direct link to Data update frequency")
The data is updated on the IXOPAY Payments Intelligence Platform as soon as it is made available from the PSP, usually on a daily basis.
### Metrics for fraud, chargebacks and sales[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#metrics-for-fraud-chargebacks-and-sales "Direct link to Metrics for fraud, chargebacks and sales")
You can find the counts for Fraud (Fraud Count) and Chargebacks (1st Chargebacks Count) in the top counter on the page:
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_2_Metrics_for_fraud_chrgback.88ae44e.1357.png)
They are also visible in each of the tables behind histograms (below the series chart), for non-sales KPIs summed in one number for fraud and chargebacks as VAMP Count:
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_3_series_chart.a3cb752.1600.png)
The metrics are reported on the merchant level and on the merchant account level as well as on all the other dimensions and combinations of those to provide you with the most flexible way to analyze your data.
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_4_dimensions_view.a394ed9.1600.png)
### Getting notified[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/vamp#getting-notified "Direct link to Getting notified")
There is a color coding in place for the top counters on the page turning red and bold for each of the KPIs going above:
  * VAMP ratio over 1.5%.
  * VAMP count over 1500+
  * VAMP volume over 75k USD
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_5_ratio_widget.9957632.890.png)

A separate custom alert can be defined with a few click via the Alerts section.
![](https://documentation.ixopay.com/modules/assets/ideal-img/VAMP_6_Alert_setting.4503568.1600.png)