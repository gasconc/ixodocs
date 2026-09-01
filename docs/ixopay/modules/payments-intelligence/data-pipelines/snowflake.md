---
title: Snowflake Integration
summary: ' Data Pipelines  Snowflake Integration'
tags:
- connecting-snowflake-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-snowflake-connecting-snowflake-direct-link-connecting-snowflake
- available-psps-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-snowflake-available-psps-reports-direct-link-available-psps-reports
- available-psp-report-tables-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-snowflake-available-psp-report-tables-direct-link-available-psp-report-tables
- ixopay
- psp
- congrify
- data-pipeline
- snowflake
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/snowflake
portal: ixopay-modules
updated: '2026-09-01'
related: []
---

* Data Pipelines
  * Snowflake Integration

# Snowflake Integration
IXOPAY Payments Intelligence (formerly Congrify) offers a no-code solution for integrating PSP reports directly into your Database setup. This is currently available with Snowflake.
Customers can access raw PSP data from multiple tables and data sources with no integration effort required. The connection between IXOPAY Payments Intelligence's and the customer’s Snowflake databases is fully automated, ensuring synchronization without manual intervention.
Built on Snowflake’s secure sharing functionality, the connection ensures both data safety and ease of access. This setup simplifies the process of leveraging PSP data for advanced analytics and reporting. Here is how Shares work in Snowflake ()
## Connecting with Snowflake[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/snowflake#connecting-with-snowflake "Direct link to Connecting with Snowflake")
There is a three-step process to activate data ingestion with Snowflake:
  1. **Configure your payment service provider** with IXOPAY Payments Intelligence.
  2. **IXOPAY Payments Intelligence configures the Snowflake connector for the dedicated customer:**
     * **Create a separate database** in Snowflake for the customer.
     * **Set up the schema** based on required Payment Service Providers (PSPs) and available reports.
     * **Create the data share** with selected reports and connectors, ensuring all data is aligned with the customer's needs.
Step 1: Go in the Snowflake front-end to the account information (on the bottom left side of the screen):
![](https://documentation.ixopay.com/modules/assets/ideal-img/snowflake_integration_1.522c97e.640.png)
Step 2: Click View Account Details and copy the id in the Data sharing account identifier field to be shared with Ixopay
![](https://documentation.ixopay.com/modules/assets/ideal-img/snowflake_integration_2.ea8bf96.1024.png)
  3. **Approve the data share** with Snowflake by both IXOPAY Payments Intelligence and the customer.

Once live, the data will synchronize **daily** , ensuring up-to-date reporting. The setup process from IXOPAY Payments Intelligence’s side typically takes **less than a day**.
Additionally, having a **Data Processing Agreement (DPA)** in place between IXOPAY Payments Intelligence and the customer is required for **compliance and data protection**.
## Available PSPs and Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/snowflake#available-psps-and-reports "Direct link to Available PSPs and Reports")
The following PSPs connections are currently available in Data Pipelines and sharing with Snowflake:
  * Adyen
  * Braintree
  * Chase Payment Tech
  * Checkout.com
  * iyzico (Pay)
  * PayPal
  * PaySafeCard
  * PayU
  * Satispay
  * Stripe
  * Worldline

### Available PSP Report tables[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/snowflake#available-psp-report-tables "Direct link to Available PSP Report tables")
Here’s a list of all tables categorized by supported PSPs. If you're looking to integrate a different PSP into your Data Pipeline connector, please reach out to IXOPAY Payments Intelligence’s team for assistance.  
| PSP  | Report  |  
| --- | --- |  
| ADYEN  | DISPUTE_REPORT  |  
| ADYEN  | EXCHANGE_RATE_REPORT  |  
| ADYEN  | INTERCHANGE_AND_SCHEME_FEE_EXTENDED_REPORT  |  
| ADYEN  | MERCHANT_INVOICE_MONTHLY_REPORT  |  
| ADYEN  | PAYMENT_ACCOUNTING_REPORT  |  
| ADYEN  | RECEIVED_PAYMENTS_REPORT  |  
| ADYEN  | SETTLEMENT_DETAILS_REPORT  |  
| ADYEN  | THREEDS_AUTHENTICATION_REPORT  |  
| BRAINTREE  | DISBURSEMENTS_AND_FEES_REPORT  |  
| BRAINTREE  | DISPUTE_REPORT  |  
| BRAINTREE  | SETTLEMENT_SUMMARY_REPORT  |  
| BRAINTREE  | TRANSACTION_LEVEL_FEES_REPORT  |  
| BRAINTREE  | TRANSACTION_REPORT  |  
| CHASE_PAYMENTECH  | AUTHORIZATION_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | CHARGEBACKS_RECEIVED_REPORT  |  
| CHASE_PAYMENTECH  | CHARGEBACK_ACTIVITY_EXCEPTION_REPORT  |  
| CHASE_PAYMENTECH  | DEBIT_AUTHORIZATION_AGING_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | DEPOSIT_ACTIVITY_ATTRIBUTE_REPORT  |  
| CHASE_PAYMENTECH  | DEPOSIT_ACTIVITY_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | DEPOSIT_ACTIVITY_TRANSFER_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | DEPOSIT_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | DISCOVER_CHARGEBACK_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | ECP_RETURNS_EXCEPTION_REPORT  |  
| CHASE_PAYMENTECH  | EXCEPTION_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | FINANCIAL_ACTIVITY_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | FUNDS_TRANSFER_ACTIVITY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | INTERCHANGE_DOWNGRADE_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | INTERCHANGE_QUALIFICATION_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | INTERCHANGE_QUALIFICATION_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | MASTERCARD_EXCESSIVE_CHARGEBACK_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | MERCHANT_FX_RATE_FILE_INFORMATIONAL_REPORT  |  
| CHASE_PAYMENTECH  | REJECT_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | RETRIEVAL_DETAIL_EXCEPTION_REPORT  |  
| CHASE_PAYMENTECH  | SERVICE_CHARGE_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | SUBMISSION_LISTING_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | TRANSACTION_SUMMARY_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | VISA_FRAUD_ADVICE_REPORT  |  
| CHASE_PAYMENTECH  | VISA_MISUSE_OF_AUTHORIZATION_FEE_DETAIL_FINANCIAL_REPORT  |  
| CHECKOUT  | AUTHENTICATION_REPORT  |  
| CHECKOUT  | BALANCE_BREAKDOWN_REPORT  |  
| CHECKOUT  | BALANCE_REPORT  |  
| CHECKOUT  | BANK_PAYOUT_REPORT  |  
| CHECKOUT  | CARD_PAYOUT_REPORT  |  
| CHECKOUT  | DISPUTE_REPORT  |  
| CHECKOUT  | FINANCIAL_ACTION_REPORT  |  
| CHECKOUT  | FRAUD_DETECTION_REPORT  |  
| CHECKOUT  | PAYMENT_REPORT  |  
| CHECKOUT  | PAYOUT_REPORT  |  
| CHECKOUT  | REPORTED_FRAUDULENT_TRANSACTION_REPORT  |  
| CHECKOUT  | RETRIEVAL_REPORT  |  
| CHECKOUT  | SETTLEMENT_BREAKDOWN_REPORT  |  
| IYZICO  | BALANCE_REPORT  |  
| IYZICO  | CUTOFF_REPORT  |  
| IYZICO  | DISPUTE_REPORT  |  
| IYZICO  | INVOICE_REPORT  |  
| IYZICO  | SETTLEMENT_REPORT  |  
| IYZICO  | TRANSACTION_REPORT  |  
| PAYPAL  | DISPUTE_DETAIL_REPORT  |  
| PAYPAL  | SETTLEMENT_REPORT  |  
| PAYPAL  | TRANSACTION_DETAILS_REPORT  |  
| PAYSAFECARD  | SETTLEMENT_REPORT  |  
| PAYU  | DISPUTE_REPORT  |  
| PAYU  | PAYOUT_REPORT  |  
| PAYU  | SETTLEMENT_REPORT  |  
| PAYU  | TRANSACTION_REPORT  |  
| SATISPAY  | TRANSACTION_REPORT  |  
| STRIPE  | BALANCE_RECONCILIATION_REPORT  |  
| STRIPE  | BALANCE_REPORT  |  
| STRIPE  | CHARGE_EVENTS_REPORT  |  
| STRIPE  | CUSTOMER_EVENTS_REPORT  |  
| STRIPE  | DISPUTE_EVENTS_REPORT  |  
| STRIPE  | EARLY_FRAUD_WARNING_EVENTS_REPORT  |  
| STRIPE  | INVOICE_EVENTS_REPORT  |  
| STRIPE  | INVOICE_LINE_EVENTS_REPORT  |  
| STRIPE  | MANUAL_PAYMENT_REPORT  |  
| STRIPE  | PAYMENT_INTENT_EVENTS_REPORT  |  
| STRIPE  | PAYOUT_EVENTS_REPORT  |  
| STRIPE  | PAYOUT_RECONCILIATION_REPORT  |  
| STRIPE  | PAYOUT_REPORT  |  
| STRIPE  | REFUND_EVENTS_REPORT  |  
| STRIPE  | TRANSACTION_INTERCHANGE_PLUS_REPORT  |  
| STRIPE  | TRANSACTION_INTERCHANGE_PLUS_SUMMARY_REPORT  |  
| WORLDLINE  | FR1_REPORT  |  
| WORLDLINE  | WX1_REPORT  |