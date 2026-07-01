---
title: KPIs
summary: In this section, you can find the relevant KPIs glossary for the IXOPAY Payments
  Intelligence formerly Congrify Observability and Analytics sections.
tags:
- kpi-areas-descriptions-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-kpis-kpi-areas-descriptions-direct-link-kpi-areas-descriptions
- data-dictionary-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-kpis-data-dictionary-direct-link-data-dictionary
- data-kpis-https-documentation-ixopay-com-modules-docs-payments-intelligence-observability-kpis-data-kpis-direct-link-data-kpis
- 3ds
- 3d-secure
- ixopay
- acquirer
- psp
- chargeback
- refund
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/kpis
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* Observability
  * KPIs

# KPIs
In this section, you can find the relevant KPIs glossary for the IXOPAY Payments Intelligence (formerly Congrify) Observability and Analytics sections.
## 🔎 KPI Areas and Descriptions[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/kpis#-kpi-areas-and-descriptions "Direct link to 🔎 KPI Areas and Descriptions")
### 1. Data Dictionary[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/kpis#1-data-dictionary "Direct link to 1. Data Dictionary")
This table defines the granular dimensions available for filtering and grouping within each KPI area.  
| KPI Area  | Value Name  | Description  |  
| --- | --- | --- |  
| 3ds  | 3ds_challenge_status  | 3D Secure events by the status of the 3D Secure challenge  |  
| 3ds  | 3ds_version_success_rate  | 3D Secure events success rate by the version of 3D Secure  |  
| 3ds  | billing_country  | 3D Secure events by country of the shopper billing address  |  
| 3ds  | currency  | 3D Secure events by currency of the transaction  |  
| 3ds  | gateway  | 3D Secure events by the PSP  |  
| 3ds  | issuing_bank  | 3D Secure events by country of the shopper billing address  |  
| 3ds  | issuing_country  | 3D Secure events by country of the payment instrument used  |  
| 3ds  | merchant_account  | 3D Secure events by the corresponding sub account with PSP  |  
| 3ds  | response_code  | 3D Secure events with the detailed response code  |  
| 3ds  | sca_exemption_response_code  | 3D Secure events by the response code for the Strong Customer Authentication  |  
| 3ds  | sca_exemption_type  | 3D Secure events by the strong customer authentication exemption  |  
| 3ds  | scheme  | 3D Secure events by underlying payment system  |  
| authorizations  | 3d_secure_status  | All attempts to reserve money from the payment instrument by status of the 3D Secure check  |  
| authorizations  | billing_country  | All attempts to reserve money from the payment instrument by country of the shopper billing address  |  
| authorizations  | bin  | All attempts to reserve money from the payment instrument by Bank Identifier Number of the payment instrument used  |  
| authorizations  | card_type  | All attempts to reserve money from the payment instrument by the card type  |  
| authorizations  | currency  | All attempts to reserve money from the payment instrument by currency of the transaction  |  
| authorizations  | eci  | All attempts to reserve money from the payment instrument by Electronic Commerce Indicator flag  |  
| authorizations  | entry_mode  | All attempts to reserve money from the payment instrument by sales channel used  |  
| authorizations  | flag  | All attempts to reserve money from the payment instrument by flag  |  
| authorizations  | gateway  | All attempts to reserve money from the payment instrument by the payment provider  |  
| authorizations  | issuing_bank  | All attempts to reserve money from the payment instrument by the name of the bank behind the used payment instrument  |  
| authorizations  | issuing_country  | All attempts to reserve money from the payment instrument by country of the payment instrument used  |  
| authorizations  | merchant_account  | All attempts to reserve money from the payment instrument by the corresponding sub account with PSP  |  
| authorizations  | payment_method  | All attempts to reserve money from the payment instrument by the used payment method  |  
| authorizations  | reason_code  | All attempts to reserve money from the payment instrument with the detailed response from the PSP  |  
| authorizations  | region  | All attempts to reserve money from the payment instrument by the payment region  |  
| authorizations  | sca_exception  | All attempts to reserve money from the payment instrument by the strong customer authentication exemption  |  
| authorizations  | sca_flow  | All attempts to reserve money from the payment instrument by the strong customer authentication route  |  
| authorizations  | scheme  | All attempts to reserve money from the payment instrument by underlying payment system  |  
| authorizations  | status  | All attempts to reserve money from the payment instrument with the status response from the PSP  |  
| chargebacks  | billing_country  | Chargebacks by country of the shopper billing address  |  
| chargebacks  | currency  | Chargebacks by currency of the transaction  |  
| chargebacks  | gateway  | Chargebacks by the PSP  |  
| chargebacks  | issuing_bank  | Chargebacks by country of the shopper billing address  |  
| chargebacks  | issuing_country  | Chargebacks by country of the payment instrument used  |  
| chargebacks  | lifecycle  | Chargeback events by the type of the event in the chargeback lifecycle  |  
| chargebacks  | merchant_account  | Chargebacks by the corresponding sub account with PSP  |  
| chargebacks  | payment_method  | Chargebacks by the payment method used  |  
| chargebacks  | reason_code  | Chargebacks with the detailed reason code for the dispute  |  
| chargebacks  | reason_code_category  | Chargebacks with grouped reasons for the disputes  |  
| chargebacks  | region  | Chargebacks by the payment region  |  
| chargebacks  | sca_exemption  | Chargebacks by the strong customer authentication exemption  |  
| chargebacks  | scheme  | Chargebacks by underlying payment system  |  
| decline_analysis  | billing_country  | Declines by country of the shopper billing address  |  
| decline_analysis  | bin  | Declines by Bank Identifier Number of the payment instrument used  |  
| decline_analysis  | card_type  | Declines by the card type  |  
| decline_analysis  | gateway  | Declines broken down by the PSP  |  
| decline_analysis  | issuer_country  | Declines by country of the payment instrument used  |  
| decline_analysis  | issuing_bank  | Declines by the name of the bank behind the used payment instrument  |  
| decline_analysis  | merchant_account  | Declines by the corresponding sub account with PSP  |  
| decline_analysis  | payment_method  | Declines by the used payment method  |  
| decline_analysis  | processing_currency  | Declines by currency of the transaction  |  
| decline_analysis  | reason_code  | Declines with the detailed response from the PSP  |  
| decline_analysis  | region  | Declines by the payment region  |  
| decline_analysis  | scheme  | Declines by underlying payment system  |  
| decline_analysis  | status  | Declines with the status response from the PSP  |  
| fees  | billing_country  | Fees by country of the shopper billing address  |  
| fees  | card_type  | Fees by the fee type  |  
| fees  | gateway  | Fees by the payment method used  |  
| fees  | issuer_country  | Fees by country of the payment instrument used  |  
| fees  | merchant_account  | Fees by the corresponding sub account with PSP  |  
| fees  | payment_method  | Fees by the payment method used  |  
| fees  | processing_currency  | Fees by currency of the transaction  |  
| fees  | scheme  | Fees by underlying payment system  |  
| fees  | settlement_currency  | Fees by currency of the final payout  |  
| fees  | type  | Fees by the PSP  |  
| sales_and_refunds  | billing_country  | Sales and Refunds by country of the shopper billing address  |  
| sales_and_refunds  | bin  | Sales and Refunds by Bank Identifier Number of the payment instrument used  |  
| sales_and_refunds  | card_type  | Sales and Refunds by the card type  |  
| sales_and_refunds  | gateway  | Sales and Refunds by the PSP  |  
| sales_and_refunds  | issuer_country  | Sales and Refunds by the name of the bank behind the used payment instrument  |  
| sales_and_refunds  | issuing_bank  | Sales and Refunds by the name of the bank behind the used payment instrument  |  
| sales_and_refunds  | merchant_account  | Sales and Refunds by the corresponding sub account with PSP  |  
| sales_and_refunds  | payment_method  | Sales and Refunds by the payment method used  |  
| sales_and_refunds  | processing_currency  | Sales and Refunds by currency of the transaction  |  
| sales_and_refunds  | reason_code  | Sales and Refunds with the detailed response from the PSP  |  
| sales_and_refunds  | region  | Sales and Refunds by the payment region  |  
| sales_and_refunds  | scheme  | Sales and Refunds by underlying payment system  |  
| sales_and_refunds  | settlement_currency  | Sales and Refunds by currency of the final payout  |  
| transaction_insights  | billing_country  | All the events from the PSPs by country of the shopper billing address  |  
| transaction_insights  | bin  | All events from the PSPs by Bank Identifier Number of the payment instrument used  |  
| transaction_insights  | currency  | All events from the PSPs by currency of the transaction  |  
| transaction_insights  | event_type  | All events from the PSPs by the type of the underlying event  |  
| transaction_insights  | gateway  | All events by the PSPs where they were registered  |  
| transaction_insights  | gateway_event  | All events by the PSPs where they were registered  |  
| transaction_insights  | issuer_country  | All events from the PSPs by country of the payment instrument used  |  
| transaction_insights  | issuing_bank  | All events from the PSPs by Bank Identifier Number of the payment instrument used  |  
| transaction_insights  | merchant_account  | All events from the PSPs and the corresponding sub account with those  |  
| transaction_insights  | payment_method  | All events from the PSPs by the payment method used  |  
| transaction_insights  | scheme  | All events from the PSPs by underlying payment system  |  
### 2. Data KPIs[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/kpis#2-data-kpis "Direct link to 2. Data KPIs")
This table contains the specific metrics and their business definitions.  
| KPI ID  | KPI Area  | KPI Definition  | KPI Description  |  
| --- | --- | --- | --- |  
| SECURE_3D_AUTH_SUCCESS_COUNT  | 3ds  | Count of successful 3DS authentications  | Count of Successful Authentications  |  
| SECURE_3D_AUTH_SUCCESS_RATE  | 3ds  | Success rate of 3DS authentication  | Rate of Successful Authentications  |  
| SECURE_3D_AUTH_SUCCESS_VOLUME  | 3ds  | Volume of successful 3DS auth  | Volume of Successful Authentications  |  
| SECURE_3D_CHALLENGED_COUNT  | 3ds  | Count of challenged 3DS transactions  | Count of Challenged Transactions  |  
| SECURE_3D_CHALLENGED_RATE  | 3ds  | Rate of transactions challenged during 3D Secure authentication  | Percent of 3D Secure Authentication Requests that are Challenged  |  
| SECURE_3D_CHALLENGED_VOLUME  | 3ds  | Volume of challenged 3DS transactions  | Volume of Challenged Transactions  |  
| SECURE_3D_EVENTS_COUNT  | 3ds  | Count of 3DS events  | 3DS Count  |  
| SECURE_3D_EVENTS_PERCENT  | 3ds  | % of transactions using 3DS  | 3DS Rate  |  
| SECURE_3D_EVENTS_VOLUME  | 3ds  | Volume of 3DS events  | Volume of 3DS Events  |  
| SECURE_3D_EXEMPTIONS_COUNT  | 3ds  | Count of exempted 3DS transactions  | Count of Exempted Events  |  
| SECURE_3D_EXEMPTIONS_RATE  | 3ds  | % of exempted 3DS transactions  | Rate of Exemptions  |  
| SECURE_3D_EXEMPTIONS_VOLUME  | 3ds  | Volume of exempted 3DS transactions  | Volume of Exempted Events  |  
| AUTHORIZATION_COUNT  | authorizations  | Total authorization requests  | Count of Authorization Requests  |  
| AUTHORIZATION_RATE  | authorizations  | % of successful authorizations  | Rate of Successful Authorizations  |  
| AUTHORIZATION_SUCCESS_COUNT  | authorizations  | Count of approved authorizations  | Count of Successful Authorizations  |  
| AUTHORIZATION_SUCCESS_VOLUME  | authorizations  | Volume of successful authorizations  | Successful Authorizations Volume  |  
| AUTHORIZATION_TOTAL_PERC  | authorizations  | Share of authorizations  | Share Authorizations Count  |  
| AUTHORIZATION_VOLUME  | authorizations  | Volume of authorization requests  | Volume of Authorization Requests  |  
| CHARGEBACK_EVENTS_COUNT  | chargebacks  | Count of chargeback events  | Chargebacks Events Count  |  
| CHARGEBACK_EVENTS_VOLUME  | chargebacks  | Volume of chargeback events  | Chargebacks Events Volume  |  
| CHARGEBACK_FIRST_COUNT  | chargebacks  | Count of first chargebacks  | Count of 1st Chargebacks  |  
| CHARGEBACK_FIRST_RATE  | chargebacks  | % of first chargebacks  | Rate of 1st Chargebacks  |  
| CHARGEBACK_FIRST_VOLUME  | chargebacks  | Volume of first chargebacks  | Volume of 1st Chargebacks  |  
| CHARGEBACK_SECOND_COUNT  | chargebacks  | Count of second chargebacks  | Count of 2nd Chargebacks  |  
| CHARGEBACK_SECOND_RATE  | chargebacks  | % of second chargebacks  | Rate of 2nd Chargebacks  |  
| CHARGEBACK_SECOND_VOLUME  | chargebacks  | Volume of second chargebacks  | Volume of 2nd Chargebacks  |  
| CHARGEBACK_TOTAL_PERC  | chargebacks  | Share of all chargeback events  | Share Chargebacks Events  |  
| CHARGEBACK_WON_COUNT  | chargebacks  | Count of won chargebacks  | Won Chargebacks Count  |  
| CHARGEBACK_WON_RATE  | chargebacks  | % of won chargebacks  | Percentage of Won Chargebacks  |  
| CHARGEBACK_WON_VOLUME  | chargebacks  | Volume of won chargebacks  | Volume of Won Chargebacks  |  
| DECLINE_COUNT  | decline_analysis  | Count of declines  | Declines Count  |  
| DECLINE_RATE  | decline_analysis  | % of declined authorization requests  | Rate of Declines  |  
| DECLINE_TOTAL_PERC  | decline_analysis  | Share of declined authorization requests  | Share of Declines  |  
| DECLINE_VOLUME  | decline_analysis  | Volume of declines  | Declines Volume  |  
| GATEWAY_DECLINE_COUNT  | decline_analysis  | Count of gateway declines  | Count of Gateway Declines  |  
| GATEWAY_DECLINE_RATE  | decline_analysis  | % of gateway declines  | Gateway Declines Rate  |  
| GATEWAY_DECLINE_VOLUME  | decline_analysis  | Volume of gateway declines  | Volume of Gateway Declines  |  
| ISSUER_DECLINE_COUNT  | decline_analysis  | Count of issuer declines  | Count of Issuer Declines  |  
| ISSUER_DECLINE_RATE  | decline_analysis  | % of declines caused by issuing bank  | Percent of Requests Declined by Payment Issuer  |  
| ISSUER_DECLINE_VOLUME  | decline_analysis  | Volume of issuer declines  | Volume of Issuer Declines  |  
| ACQUIRER_FEES_GROSS_RATE  | fees  | Acquirer fees vs gross sales  | Rate (Gross) of Acquirer Fees  |  
| ACQUIRER_FEES_RATE  | fees  | Acquirer fees vs sales  | Rate of Acquirer Fees  |  
| ACQUIRER_FEES_VOLUME  | fees  | Volume of acquirer fees  | Acquirer Fees Volume  |  
| BLENDED_FEES_RATE  | fees  | Blended fees vs sales  | Rate of Blended Fees  |  
| BLENDED_FEES_VOLUME  | fees  | Total blended fees volume  | Volume of Blended Fees  |  
| CHARGEBACK_FEES_RATE  | fees  | Chargeback fees vs sales  | Rate of Chargeback Fees  |  
| CHARGEBACK_FEES_VOLUME  | fees  | Volume of chargeback fees  | Volume of Chargeback Fees  |  
| CONVERSION_FEES_RATE  | fees  | Conversion fees relative to sales volume  | Conversion Fees rate according to Sales  |  
| CONVERSION_FEES_VOLUME  | fees  | Fees charged for currency conversion transactions  | Total Volume (in Euros) of Conversion Fees  |  
| FEES_COUNT  | fees  | Count of fees  | Fees Count  |  
| FEES_GROSS_RATE  | fees  | Total fees vs gross sales  | Rate (Gross) of Fees  |  
| FEES_PROCESSED_AMOUNT  | fees  | Volume of fee-related events  | Volume of Events (Fees)  |  
| FEES_RATE  | fees  | Total fees relative to sales/net sales  | Total Fees rate according to Sales  |  
| FEES_SALES_VOLUME  | fees  | Sales volume from fees reports  | Sales Volume (Fees)  |  
| FEES_TOTAL_PERC  | fees  | Share of total fees  | Share Fees Count  |  
| FEES_VOLUME  | fees  | Total volume of payment fees  | Total Volume of Fees  |  
| GATEWAY_FEES_RATE  | fees  | Gateway fees vs sales  | Gateway Fees Rate  |  
| GATEWAY_FEES_VOLUME  | fees  | Volume of gateway fees  | Volume of Gateway Fees  |  
| INTERCHANGE_FEES_RATE  | fees  | Interchange fees vs sales  | Rate of Interchange Fees  |  
| INTERCHANGE_FEES_VOLUME  | fees  | Volume of interchange fees  | Volume of Interchange Fees  |  
| NON_TRX_FEES_RATE  | fees  | Rate of non-transactional fees  | Rate of Non-Transactional Fees  |  
| NON_TRX_FEES_VOLUME  | fees  | Volume of non-transactional fees  | Non-Transactional Fees Volume  |  
| PROCESSING_FEES_RATE  | fees  | Processing fees vs sales  | Rate of Processing Fees  |  
| PROCESSING_FEES_VOLUME  | fees  | Volume of processing fees  | Processing Fees Volume  |  
| SCHEME_FEES_RATE  | fees  | Scheme fees vs sales  | Scheme Fees Rate  |  
| SCHEME_FEES_VOLUME  | fees  | Volume of scheme fees  | Volume of Scheme Fees  |  
| FRAUD_TRANSACTIONS_COUNT  | fraud_vamp  | Count of fraud transactions  | Fraud Transactions Count  |  
| FRAUD_TRANSACTIONS_RATE  | fraud_vamp  | Fraud rate vs sales  | Fraud Transactions Rate  |  
| FRAUD_TRANSACTIONS_VOLUME  | fraud_vamp  | Volume of fraud transactions  | Fraud Transactions Volume  |  
| VAMP_COUNT  | fraud_vamp  | Fraud + chargeback count  | VAMP Count  |  
| VAMP_RATIO  | fraud_vamp  | Fraud+chargebacks vs sales  | VAMP Rate  |  
| VAMP_TOTAL_PERC  | fraud_vamp  | Share of fraud + chargebacks  | VAMP Total Percentage  |  
| VAMP_VOLUME  | fraud_vamp  | Volume of fraud + chargebacks  | VAMP Volume  |  
| VISA_CHARGEBACK_FIRST_COUNT  | fraud_vamp  | Count of Visa chargebacks  | 1st Chargebacks Count (Visa)  |  
| VISA_CHARGEBACK_FIRST_RATE  | fraud_vamp  | Rate of first chargebacks for Visa  | Percentage of Visa Sales that result in a First Chargeback  |  
| VISA_CHARGEBACK_FIRST_VOLUME  | fraud_vamp  | Volume of Visa chargebacks  | 1st Chargebacks Volume (Visa)  |  
| VISA_SALES_COUNT  | fraud_vamp  | Count of Visa sales  | Sales Count (Visa)  |  
| VISA_SALES_VOLUME  | fraud_vamp  | Volume of Visa sales  | Sales Volume (Visa)  |  
| AVERAGE_SALES  | sales_and_refunds  | Average sales value  | Average Sales  |  
| FAILED_SALES_COUNT  | sales_and_refunds  | Number of sales that fail after successful authorization  | Count of Failed Sales  |  
| FAILED_SALES_VOLUME  | sales_and_refunds  | Volume of failed sales  | Volume of Failed Sales  |  
| NET_SALES_VOLUME  | sales_and_refunds  | Sales minus refunds  | Net Sales Volume  |  
| REFUND_COUNT  | sales_and_refunds  | Number of refunded transactions  | Count of Refunds  |  
| REFUND_RATE  | sales_and_refunds  | Refund rate vs sales  | Refunds Rate  |  
| REFUND_VOLUME  | sales_and_refunds  | Volume of refunds  | Volume of Refunds  |  
| SALES_COUNT  | sales_and_refunds  | Count of sales  | Sales Count  |  
| SALES_TOTAL_PERC  | sales_and_refunds  | Share of sales  | Share Sales Count  |  
| SALES_VOLUME  | sales_and_refunds  | Volume of sales  | Sales Volume  |  
| EVENTS_COUNT  | transaction_insights  | Total number of events  | Total Count of Events  |  
| EVENTS_TOTAL_PERC  | transaction_insights  | Share of total events  | Share Events Count  |  
| EVENTS_VOLUME  | transaction_insights  | Volume of events  | Volume of Events  |