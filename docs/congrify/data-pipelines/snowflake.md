---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- snowflake-integrationhttps-docs-congrify-com-data-pipelines-snowflake-snowflake-integration
- data-pipelineshttps-docs-congrify-com-data-pipelines-snowflake-data-pipelines
- connecting-snowflakehttps-docs-congrify-com-data-pipelines-snowflake-connecting-snowflake
- available-psps-reportshttps-docs-congrify-com-data-pipelines-snowflake-available-psps-reports
- available-psp-report-tableshttps-docs-congrify-com-data-pipelines-snowflake-available-psp-report-tables
- ixopay
- psp
- chargeback
- merchant
- congrify
source_url: ''
portal: congrify
updated: '2026-06-15'
related: []
---

# [![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)
  * **Platform**
    * [Payments Observability & Intelligence](https://docs.congrify.com/#/README "Payments Observability & Intelligence")
    * [Registration & Login](https://docs.congrify.com/#/Fintech/RegistrationLogin "Registration & Login")
    * [User Management and Notifications](https://docs.congrify.com/#/Fintech/UserManagementNotifications "User Management and Notifications")
    * [Merchant Settings](https://docs.congrify.com/#/Fintech/MerchantSettings "Merchant Settings")
    * [Security](https://docs.congrify.com/#/Fintech/Security "Security")
  * **Observability**
    * [Dashboards](https://docs.congrify.com/#/Observability/Dashboards "Dashboards")
    * [KPIs](https://docs.congrify.com/#/Observability/KPIs "KPIs")
    * [VAMP](https://docs.congrify.com/#/Observability/VAMP "VAMP")
    * [AI Co-Pilot](https://docs.congrify.com/#/Observability/AICopilot "AI Co-Pilot")
  * **Data Pipelines**
    * [Snowflake Integration](https://docs.congrify.com/#/Data%20Pipelines/Snowflake "Snowflake Integration")
      * [Connecting with Snowflake](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=connecting-with-snowflake "Connecting with Snowflake")
      * [Available PSPs and Reports](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=available-psps-and-reports "Available PSPs and Reports")
        * [Available PSP Report tables](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=available-psp-report-tables "Available PSP Report tables")
    * [Unified Reports](https://docs.congrify.com/#/Data%20Pipelines/UnifiedReports "Unified Reports")
  * **Marketplace Integrations**
    * [Stripe App Marketplace](https://docs.congrify.com/#/Marketplaces/StripeMarketplace "Stripe App Marketplace")
  * **Integrations**
    * [Getting Started](https://docs.congrify.com/#/Integrations/GettingStarted "Getting Started")
    * [Adyen](https://docs.congrify.com/#/Integrations/adyen "Adyen")
    * [Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard "Barclaycard")
    * [Braintree](https://docs.congrify.com/#/Integrations/braintree "Braintree")
    * [Chargebee](https://docs.congrify.com/#/Integrations/chargebee "Chargebee")
    * [Chase Payment tech](https://docs.congrify.com/#/Integrations/chase "Chase Payment tech")
    * [Checkout.com](https://docs.congrify.com/#/Integrations/checkout "Checkout.com")
    * [ixopay](https://docs.congrify.com/#/Integrations/ixopay "ixopay")
    * [izyco(PayU)](https://docs.congrify.com/#/Integrations/iyzico "izyco\(PayU\)")
    * [PayPal](https://docs.congrify.com/#/Integrations/paypal "PayPal")
    * [Paysafecard](https://docs.congrify.com/#/Integrations/paysafecard "Paysafecard")
    * [Payu](https://docs.congrify.com/#/Integrations/payu "Payu")
    * [Satispay](https://docs.congrify.com/#/Integrations/satispay "Satispay")
    * [Solidgate](https://docs.congrify.com/#/Integrations/solidgate "Solidgate")
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [Snowflake Integration](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=snowflake-integration)
## [About Data Pipelines](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=about-data-pipelines)
Congrify offers a no-code solution for integrating PSP reports directly into your Database setup. This is currently available with Snowflake. 
Customers can access raw PSP data from multiple tables and data sources with no integration effort required. The connection between Congrify's and the customer’s Snowflake databases is fully automated, ensuring synchronization without manual intervention. 
Built on Snowflake’s secure sharing functionality, the connection ensures both data safety and ease of access. This setup simplifies the process of leveraging PSP data for advanced analytics and reporting. Here is how Shares work in Snowflake ()
## [Connecting with Snowflake](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=connecting-with-snowflake)
There is a three-step process to activate data ingestion with Snowflake:
  1. **Configure your payment service provider** with Congrify.
  2. **Congrify configures the Snowflake connector for the dedicated customer:**
     * **Create a separate database** in Snowflake for the customer.
     * **Set up the schema** based on required Payment Service Providers (PSPs) and available reports.
     * **Create the data share** with selected reports and connectors, ensuring all data is aligned with the customer's needs.
  3. **Approve the data share** with Snowflake by both Congrify and the customer.

Once live, the data will synchronize **daily** , ensuring up-to-date reporting. The setup process from Congrify’s side typically takes **less than a day**.
Additionally, having a **Data Processing Agreement (DPA)** in place between Congrify and the customer is required for **compliance and data protection**.
## [Available PSPs and Reports](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=available-psps-and-reports)
The following PSPs connections are currently available in Data Pipelines and sharing with Snowflake:
  * Adyen
  * Braintree
  * Chase Payment Tech
  * Izyco (Pay)
  * PayPal
  * PaySafeCard
  * PayU 
  * Satispay
  * Worldline

## [Available PSP Report tables](https://docs.congrify.com/#/Data%20Pipelines/Snowflake?id=available-psp-report-tables)
Here’s a list of all tables categorized by supported PSPs. If you're looking to integrate a different PSP into your Data Pipeline connector, please reach out to Congrify’s team for assistance.  
| PSP  | Report  |  
| --- | --- |  
| ADYEN  | DISPUTE_REPORT  |  
| ADYEN  | EXCHANGE_RATE  |  
| ADYEN  | MERCHANT_INVOICE_MONTHLY  |  
| ADYEN  | PAYMENT_ACCOUNTING_REPORT  |  
| ADYEN  | RECEIVED_PAYMENTS_REPORT  |  
| ADYEN  | SETTLEMENT_DETAILS_REPORT  |  
| ADYEN  | THREEDS_AUTHENTICATION_REPORT  |  
| BRAINTREE  | DISPUTE_REPORT  |  
| BRAINTREE  | SETTLEMENT_SUMMARY_REPORT  |  
| BRAINTREE  | TRANSACTION_REPORT  |  
| CHASE_PAYMENTECH  | AUTHORIZATION_DETAIL_FINANCIAL_REPORT  |  
| CHASE_PAYMENTECH  | CHARGEBACKS_RECEIVED_REPORT  |  
| CHASE_PAYMENTECH  | CHARGEBACK_ACTIVITY_EXCEPTION_REPORT  |  
| CHASE_PAYMENTECH  | DEBIT_AUTHORIZATION_AGING_FINANCIAL_REPORT  |  
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
| IYZICO  | BALANCE_REPORT  |  
| IYZICO  | CUTOFF_REPORT  |  
| IYZICO  | DISPUTE_REPORT  |  
| IYZICO  | INVOICE_REPORT  |  
| IYZICO  | SETTLEMENT_REPORT  |  
| IYZICO  | TRANSACTION_REPORT  |  
| PAYPAL  | DISPUTE_DETAIL_REPORT  |  
| PAYPAL  | SETTLEMENT_REPORT  |  
| PAYPAL  | TRANSACTION_DETAILS  |  
| PAYSAFECARD  | SETTLEMENT_REPORT  |  
| PAYU  | SETTLEMENT_REPORT  |  
| PAYU  | TRANSACTION_REPORT  |  
| SATISPAY  | TRANSACTION_REPORT  |