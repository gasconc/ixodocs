---
title: Anomaly Detection
summary: ' Anomaly Detection'
tags:
- detected-anomalies-reported-near-real-time-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-anomaly-detection-detected-anomalies-reported-near-real-time-direct-link-detected-anomalies-reported-near-real-time
- creating-exploring-anomalies-basis-dimensions-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-anomaly-detection-creating-exploring-anomalies-basis-dimensions-direct-link-creating-exploring-anomalies-basis-dimensions
- analyse-pilot-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-anomaly-detection-analyse-pilot-direct-link-analyse-pilot
- 3ds
- ixopay
- payment-gateway
- psp
- authorization
- credit-card
- merchant
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/anomaly-detection
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Observability
  * Anomaly Detection

# Anomaly Detection
The IXOPAY Payments Intelligence (formerly Congrify) Anomaly Detection module is an AI-driven "early warning system" designed for modern merchants operating in a multi-PSP environment. By unifying fragmented data from providers, it identifies hidden revenue leaks and operational failures that traditional static reporting tools miss.
**Core Capabilities**
  1. Automated Baseline Modeling: IXOPAY Payments Intelligence's machine learning models automatically learn your "normal" performance patterns - accounting for seasonality, regional trends, and specific payment methods - so you only get alerted when a deviation is statistically significant.
  2. Granular Attribute Monitoring: Anomalies rarely affect your whole business. IXOPAY Payments Intelligence pinpoints issues down to specific slices: a single issuer cluster, a specific BIN range, or a particular 3DS authentication flow behaving irregularly on one processor.
  3. Unified Decline Analysis: By standardizing "Reason Codes" across all your PSPs into a single internal language, the platform can detect sudden surges in specific failure types (e.g., "Do Not Honor" or "Technical Error") across different providers simultaneously.
  4. Economic Drift Detection: Beyond technical failures, the system monitors your Cost of Acceptance. It flags "economic anomalies," such as unexpected shifts in interchange categories or sudden "scheme fee" spikes that erode your margins.

**Key features of the anomaly detection capabilities in IXOPAY Payments Intelligence**  
| Feature  | Business Impact  |  
| --- | --- |  
| Instant Alerts  | Stop waiting for end-of-month reports. Get notified the moment a gateway times out or fraud spikes.  |  
| No-Code Analytics  | Deploy sophisticated ML monitoring without writing a single line of SQL or building an in-house data science team.  |  
| Root Cause Diagnostics  | Don't just see the "what," see the "why." Alerts are enriched with context across attributes giving you clarity on the anomalous behaviour.  |  
| Revenue Protection  | Identify "quiet drifts" i.e. gradual declines in performance that compound over time, before they escalate into major outages.  |  
## Detected Anomalies reported to you in near real-time[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/anomaly-detection#detected-anomalies-reported-to-you-in-near-real-time "Direct link to Detected Anomalies reported to you in near real-time")
Anomalies found in the payment behaviour and operations can be viewed by navigating to the Anomalies → Detected Anomalies tab on the IXOPAY Payments Intelligence platform.
Here you will find the detected anomalies in payment operations and behaviour data, which have been classified in Critical, Read/ Unread and Resolved state, along with a list of anomalies, with brief information of the grouping dimensions (to be read as AND conditions) and volume impact predicted in your default currency.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_1.5e16784.1600.png)
You can further refine the anomalies detected by the KPI and timeframe when it was detected/ processed.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_2.e2bc3d4.1600.png)
You can deep-dive into the detected anomaly directly from the listed view by clicking on the Arrow button on the left of the Anomaly tile, which creates a drop-down showing the:
  * Financial Impact i.e. the current impact in default currency, number of transactions affected, and extrapolation of the impact to annual projection; and
  * Visualization of the detected anomaly (actual value, such as the Successful Authorization Rate in the example below) vs. the baseline/ predicted performance (Expected value ± the confidence interval), as predicted by the IXOPAY Payments Intelligence anomaly detection model, relevant to the grouping dimensions (i.e. in the example shown below - anomaly detected on demo merchant account using demo payment gateway on Visa scheme, for credit-card payments in USD on the Merchants e-commerce platform, by private consumers in the USA).
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_3.c920ff6.1600.png)

To get a relevant human-readable synopsis of the anomaly detected, you can click on the ‘Analyze’ text, next to AI Analysis, which will summarize the predicted vs actual result gaps, highlight insightful increases/ decreases in a time-period, and provide recommendations on how to reduce the cost impact through further exploration and operational optimization.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_4.d236d2e.1600.png)
For further actions on the listed anomaly, click on the '…' button to :
  * Closely monitor your KPI against similar anomalies by creating an alert, which notifies you if the KPI deviates from the baseline, including setting sensitivity thresholds, slack integrations, etc. (see also [Alerts](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/alerts))
  * Mark the listed anomaly as read or resolved or schedule a 'snooze' for re-notification
  * Explore the actual data on the KPI in the anomaly by clicking on 'Explore in analytics' which routes you to the Analytics page on IXOPAY Payments Intelligence, with filters automatically added (as per grouping dimensions), to create the relevant view of the actual data.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_5.4c7bced.1600.png)

Example of ‘Explore in analytics’ routing to Analytics view with filters automatically added to show relevant actual successful authorization rate from the detected anomaly.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_6.ed0a4ce.1600.png)
## Creating and exploring Anomalies basis your dimensions[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/anomaly-detection#creating-and-exploring-anomalies-basis-your-dimensions "Direct link to Creating and exploring Anomalies basis your dimensions")
To identify and explore any anomalous payment behaviour on your Merchant data, you can navigate to the Anomalies → Anomalies Explorer tab on the IXOPAY Payments Intelligence platform.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_7.098a294.1600.png)
In the ‘Anomalies Explorer', you can define your target KPI (for e.g. 'Successful Authorization Rate’, etc.) and detect anomalies across multiple dimensions as applicable to your payments data.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_8.593177b.1600.png)
In the example below, the selected dimensions are Payment Method (card payment, PayPal, or Apple Pay) and Merchant Account (sub-entities in UK, FR, DE, and US). Post selection of the KPI and dimensions, you can click on 'Explore' to generate the visualization (including predicted baseline trend, relative critical and warning thresholds to baseline prediction, and the actual values), aggregated tables with model predictions and actual data for the selected dimensions (which can be exported for local storage in CSV format), and with a single click ask IXOPAY Payments Intelligence's AI Co-Pilot to analyse and summarise the anomaly detected and actual performance of the KPI for the selected time-frame.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_9.dce7227.1600.png)
  * Series selection for visualization - You can select the ‘Series’ i.e. the combination of modeled predictions and actual data, basis the dimensions selected, for visualization.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_10.13efaed.1600.png)

## Analyse with AI Co-Pilot[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/anomaly-detection#analyse-with-ai-co-pilot "Direct link to Analyse with AI Co-Pilot")
With a single click on ‘Analyze', IXOPAY Payments Intelligence's AI Co-Pilot will analyse and summarize the anomaly across all series, provide micro-trend movements, root cause analysis and recommended actions to explore the data further and reduce the risk of future impact.
![](https://documentation.ixopay.com/modules/assets/ideal-img/AnomalyDetection_11.99f6f4b.1600.png)