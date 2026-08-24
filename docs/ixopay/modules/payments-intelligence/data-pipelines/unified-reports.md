---
title: Unified Reports
summary: ' Data Pipelines  Unified Reports'
tags:
- enabling-unified-reports-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-enabling-unified-reports-direct-link-enabling-unified-reports
- available-psps-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-available-psps-direct-link-available-psps
- data-schemas-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-data-schema-direct-link-data-schemas
- fees-table-schema-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-fees-table-schema-direct-link-fees-table-schema
- transactions-table-schema-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-transactions-table-schema-direct-link-transactions-table-schema
- chargebacks-table-schema-https-documentation-ixopay-com-modules-docs-payments-intelligence-data-pipelines-unified-reports-chargebacks-table-schema-direct-link-chargebacks-table-schema
- 3ds
- 3d-secure
- ixopay
- payment-gateway
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports
portal: ixopay-modules
updated: '2026-08-24'
related: []
---

* Data Pipelines
  * Unified Reports

# Unified Reports
With IXOPAY Payments Intelligence (formerly Congrify), you can seamlessly access unified reports that consolidate data from multiple Payment Service Providers (PSPs) and various PSP report formats. This enables a comprehensive and standardized view of your payment performance across different providers.
The data is automatically generated on a daily basis, ensuring that you always have the latest insights at your fingertips. IXOPAY Payments Intelligence enhances this data by applying advanced data mappings, transforming raw PSP reports into a structured and easily interpretable format. Additionally, the platform performs custom calculations tailored to your business needs, such as aggregating transaction volumes, calculating processing fees, or normalizing refund rates.
To further improve accuracy and consistency, IXOPAY Payments Intelligence also integrates exchange rate conversions, allowing you to analyze revenue and costs in a unified currency, regardless of the original transaction currencies. This ensures that your financial analysis is precise, streamlined, and optimized for decision-making.
## Enabling Unified Reports[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#enabling-unified-reports "Direct link to Enabling Unified Reports")
To enable Unified Reports, please contact the IXOPAY Payments Intelligence team. Before activation, ensure you have:
  * Enabled your PSP connections
  * Selected your preferred download method
  * Enabled Snowflake data synchronization if you plan to receive data in Snowflake

## Available PSPs[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#available-psps "Direct link to Available PSPs")
The following PSPs connections are currently available in Unified Reports:
  * Adyen
  * Chase Payment Tech
  * Checkout.com
  * PayPal
  * Stripe
  * Worldline

## Data Schemas[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#data-schema "Direct link to Data Schemas")
### Fees Table Schema[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#fees-table-schema "Direct link to Fees Table Schema")  
| **Column name**  | **Data Type**  | **Description**  |  
| --- | --- | --- |  
| `company_name`  | `VARCHAR(16777216)`  | The name of the organization associated with the financial transaction.  |  
| `merchant_account`  | `VARCHAR(16777216)`  | The unique primary identifier for the merchant's business account(s).  |  
| `merchant_sub_account`  | `VARCHAR(16777216)`  | The sub-account identifier grouped under the main merchant account(s).  |  
| `psp`  | `VARCHAR(16777216)`  | The name of the Payment Service Provider handling the transaction.  |  
| `psp_merchant_account`  | `VARCHAR(16777216)`  | The account identifier assigned to the merchant's business account(s) directly by the PSP.  |  
| `total_fee`  | `NUMBER(38,8)`  | The absolute total fee calculated and applied to the transaction record.  |  
| `interchange_fee`  | `NUMBER(20,8)`  | The fee collected by the cardholder's issuing bank for the transaction as reported by the PSP on transaction level.  |  
| `allocated_interchange_fee`  | `NUMBER(20,8)`  | The specific portion of the interchange fee allocated from fees reported in bulk.  |  
| `total_interchange_fee`  | `NUMBER(38,8)`  | The cumulative sum of interchange fees calculated for this transaction.  |  
| `scheme_fee`  | `NUMBER(20,8)`  | The processing cost charged by the card network scheme (e.g., Visa, Mastercard) as reported by the PSP on transaction level.  |  
| `allocated_scheme_fee`  | `NUMBER(20,8)`  | The specific portion of the network scheme fee allocated from fees reported in bulk.  |  
| `total_scheme_fee`  | `NUMBER(38,8)`  | The cumulative sum of network scheme fees calculated for this transaction.  |  
| `acquirer_fee`  | `NUMBER(20,8)`  | The processing fee charged by the acquiring bank as reported by the PSP on transaction level.  |  
| `allocated_acquirer_fee`  | `NUMBER(20,8)`  | The specific portion of the acquirer fee allocated from fees reported in bulk.  |  
| `total_acquirer_fee`  | `NUMBER(38,8)`  | The cumulative sum of acquiring bank fees calculated for this transaction.  |  
| `chargeback_fee`  | `NUMBER(20,8)`  | Fee connected to customer disputes or chargebacks as reported by the PSP on transaction level.  |  
| `allocated_chargeback_fee`  | `NUMBER(20,8)`  | The specific portion of the chargeback fee allocated from fees reported in bulk.  |  
| `total_chargeback_fee`  | `NUMBER(38,8)`  | The cumulative total of chargeback-related fees calculated for this transaction.  |  
| `gateway_fee`  | `NUMBER(20,8)`  | The handling fee charged by the payment gateway platform for technical routing and added services as reported by the PSP on transaction level.  |  
| `allocated_gateway_fee`  | `NUMBER(20,8)`  | The specific portion of the payment gateway fee allocated from fees reported in bulk.  |  
| `total_gateway_fee`  | `NUMBER(38,8)`  | The cumulative total of payment gateway fees calculated for this transaction.  |  
| `processing_fee`  | `NUMBER(20,8)`  | The standard transactional operational fee charged by the processing entity often in connection to alternative payment methods as reported by the PSP on transaction level.  |  
| `allocated_processing_fee`  | `NUMBER(20,8)`  | The specific portion of the operational processing fee allocated from fees reported in bulk.  |  
| `total_processing_fee`  | `NUMBER(38,8)`  | The cumulative total of basic processing fees calculated for this transaction.  |  
| `blended_fee`  | `NUMBER(20,8)`  | A single combined rate processing fee for a transaction as reported by the PSP on transaction level.  |  
| `allocated_blended_fee`  | `NUMBER(20,8)`  | The specific portion of the combined blended fee allocated from fees reported in bulk.  |  
| `total_blended_fee`  | `NUMBER(38,8)`  | The cumulative total of blended processing fees calculated for this transaction.  |  
| `conversion_fee`  | `NUMBER(20,8)`  | The fee handling multi-currency exchange operations as reported by the PSP on transaction level.  |  
| `allocated_conversion_fee`  | `NUMBER(20,8)`  | The specific portion of the currency exchange fee allocated from fees reported in bulk.  |  
| `total_conversion_fee`  | `NUMBER(38,8)`  | The cumulative fee for currency conversion operations for this transaction.  |  
| `other_fees`  | `NUMBER(20,8)`  | Any miscellaneous or minor fees categorized outside of standard definitions as reported by the PSP on transaction level.  |  
| `allocated_other_fees`  | `NUMBER(20,8)`  | The specific portion of miscellaneous fees allocated from fees reported in bulk.  |  
| `total_other_fees`  | `NUMBER(38,8)`  | The cumulative sum of all miscellaneous fees calculated for this transaction.  |  
| `non_trx_fees`  | `NUMBER(20,8)`  | Non-transactional fees, such as monthly system subscriptions or maintenance costs as reported by the PSP.  |  
| `allocated_non_trx_fees`  | `NUMBER(20,8)`  | The specific portion of non-transactional fees allocated from fees reported in bulk.  |  
| `total_non_trx_fees`  | `NUMBER(38,8)`  | The cumulative sum of non-transactional fees calculated for this record.  |  
| `provider_expected_fx_fee`  | `NUMBER(20,8)`  | The foreign exchange fee that is expected to be collected by the service provider.  |  
| `surplus_provider_expected_fx_fee`  | `NUMBER(20,8)`  | The difference or excess margin on foreign exchange fees t the expected fee from the provider.  |  
| `fees_breakdown_unit_amount`  | `ARRAY`  | A list of distinct flat unit fee amounts comprising the transaction cost.  |  
| `fees_breakdown_variable_amount`  | `ARRAY`  | A list of variable or volume-based financial fee amounts from the breakdown.  |  
| `fees_breakdown_variable_amount_rate`  | `ARRAY`  | A list of percentage-based commission rates applied to compute the variable fees.  |  
| `fees_breakdown_currency`  | `ARRAY`  | A list of respective currency codes applicable to each fee breakdown line item.  |  
| `fees_breakdown_description`  | `ARRAY`  | A list of text explanations corresponding to each itemized fee element.  |  
| `fees_breakdown_type`  | `ARRAY`  | A list of fee types for each of the single fee breakdown items.  |  
| `fee_currency`  | `VARCHAR(16777216)`  | The primary fee currnecy code in which charges are assessed.  |  
| `allocated_fees_rule_id`  | `ARRAY`  | A list of rule identifiers used to allocate bulk fees.  |  
| `allocated_fees_rule_description`  | `ARRAY`  | A list of text descriptions for the business rules used for bulk fee allocation.  |  
| `allocated_fees_fee_amount`  | `ARRAY`  | A list containing the absolute amounts under specific rules.  |  
| `allocated_fees_fee_currency`  | `ARRAY`  | Currencies for each of the amounts from the allocations done by the rules.  |  
| `allocated_fees_report_date`  | `ARRAY`  | Dates on which each fee allocation was calculated.  |  
| `allocated_fees_field_to_allocate`  | `ARRAY`  | A list of fee types for each allocated rule.  |  
| `requested_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp converted to the UTC timezone the transaction request occurred.  |  
| `requested_on_date_utc`  | `DATE`  | The calendar date on which the transaction request was initialized, standardized to UTC from a timestamp.  |  
| `processed_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp recording when the processing work was finalized converted to the UTC timezone.  |  
| `processed_on_date_utc`  | `DATE`  | The calendar date on which transaction processing was finished, standardized to UTC from a timestamp.  |  
| `settlement_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp indicating when money transfer settlement took place converted to the UTC timezone.  |  
| `fee_reference`  | `VARCHAR(16777216)`  | A distinct reference linked explicitly to this fee item.  |  
| `event_reference`  | `VARCHAR(16777216)`  | The master reference string linking this fee back to its source parent event.  |  
| `order_id`  | `VARCHAR(16777216)`  | The commercial identifier generated by the merchant system for the customer order.  |  
| `event_type`  | `VARCHAR(16777216)`  | The normalized categorization of the transaction event (e.g., Refund, Authorization).  |  
| `original_event_type`  | `VARCHAR(16777216)`  | The raw, unmodified event status string passed directly by the provider.  |  
| `payment_amount`  | `NUMBER(20,8)`  | The gross transaction value submitted by the purchasing customer.  |  
| `net_transaction_amount`  | `NUMBER(20,8)`  | The remaining transaction funds after subtracting basic fees.  |  
| `net_transaction_amount_converted`  | `NUMBER(20,8)`  | The net transaction funds translated into the settlement currency.  |  
| `settlement_amount`  | `NUMBER(20,8)`  | The final exact in the payout cleared to the merchant account.  |  
| `processing_currency`  | `VARCHAR(16777216)`  | The currency code used during the client interaction.  |  
| `settlement_currency`  | `VARCHAR(16777216)`  | The currency code in the settlement of the balances to the merchant.  |  
| `settled_in_same_currency`  | `BOOLEAN`  | Indicates true if the processing and settlement currencies match.  |  
| `fx_rate_applied`  | `NUMBER(20,8)`  | The effective foreign exchange conversion multiplier used during the operation.  |  
| `fx_rate_merchant`  | `NUMBER(20,8)`  | The currency exchange rate provided by the merchant.  |  
| `fx_rates_difference`  | `NUMBER(38,8)`  | The mathematical discrepancy or margin between the effective rate and merchant rate.  |  
| `exchange_rate_source`  | `VARCHAR(16777216)`  | The reference for the data source providing the base for FX calculations.  |  
| `exchange_rate_date`  | `DATE`  | Calendar date for the exchange rate.  |  
| `dcc_amount`  | `NUMBER(20,4)`  | The transaction amount processed specifically using Dynamic Currency Conversion.  |  
| `payment_method`  | `VARCHAR(16777216)`  | The standardized payment method classification used (e.g., Credit Card, PayPal).  |  
| `original_payment_method`  | `VARCHAR(16777216)`  | The raw, unmapped payment method name delivered by the PSP.  |  
| `merchant_category_code`  | `NUMBER(38,0)`  | The standard four-digit industry classification code (MCC) of the business entity.  |  
| `card_type`  | `VARCHAR(16777216)`  | The normalized card type value such as Debit / Credit.  |  
| `original_card_type`  | `VARCHAR(16777216)`  | The raw card type text received from the PSP.  |  
| `card_category`  | `VARCHAR(16777216)`  | The standardized consumer tier rating of the card (Consumer, Commercial).  |  
| `original_card_category`  | `VARCHAR(16777216)`  | The unmapped, raw card classification string returned by the provider.  |  
| `scheme`  | `VARCHAR(16777216)`  | The standardized payment system network handler managing card routing rules.  |  
| `original_scheme`  | `VARCHAR(16777216)`  | The unparsed network string received directly from the gateway infrastructure.  |  
| `card_product`  | `VARCHAR(16777216)`  | A finer classification defining specific product variations within the card type.  |  
| `original_card_product`  | `VARCHAR(16777216)`  | The original card product definition text sent from the card issuer.  |  
| `card_sub_product_type`  | `VARCHAR(16777216)`  | The standardized product group of the card tier (Standard, Premium)  |  
| `original_card_sub_product_type`  | `VARCHAR(16777216)`  | The raw sub-product tier string provided directly by the issuer stream.  |  
| `issuing_bank`  | `VARCHAR(16777216)`  | The name of the specific banking corporation that issued the card.  |  
| `issuer_country`  | `VARCHAR(16777216)`  | The origin country code where the issuing institution is legally registered.  |  
| `billing_country`  | `VARCHAR(16777216)`  | The declared geographical country linked to the client's billing address.  |  
| `region`  | `VARCHAR(16777216)`  | A high-level regional classification encompassing transaction activity.  |  
| `transaction_region`  | `VARCHAR(16777216)`  | The geographical area classification where the transaction request was registered.  |  
| `merchant_region`  | `VARCHAR(16777216)`  | The geographical region where the business region of the merchant is anchored.  |  
| `bin`  | `VARCHAR(16777216)`  | The Bank Identification Number representing the introductory sequence of the card number.  |  
| `network_token_used`  | `BOOLEAN`  | Indicates whether a secure network token was used for the transaction.  |  
| `avs_postal_code_response_code`  | `VARCHAR(16777216)`  | The feedback code returned by the address verification provider mapping the user's zip/postal code.  |  
| `avs_street_address_response_code`  | `VARCHAR(16777216)`  | The feedback code for the address verification service confirming the matching accuracy for the numerical part of the customer's street.  |  
| `cvc_response_code`  | `VARCHAR(16777216)`  | The verification match result code returned for the card security digits (CVC/CVV).  |  
| `entry_mode`  | `VARCHAR(16777216)`  | The method indicating how card detail entries were captured (e.g., E-commerce, Point of Sale device).  |  
| `dispute_type`  | `VARCHAR(16777216)`  | The standardized classification of the nature of a transaction dispute.  |  
| `original_dispute_type`  | `VARCHAR(16777216)`  | The raw dispute type returned directly by the acquirer.  |  
| `dispute_reason`  | `VARCHAR(16777216)`  | The normalized reason description tracking why a chargeback was generated.  |  
| `original_dispute_reason`  | `VARCHAR(16777216)`  | The unmodified, raw statement text provided for the dispute reason.  |  
| `acquirer_name`  | `VARCHAR(16777216)`  | The commercial entity name of the acquiring bank.  |  
| `acquirer_account`  | `VARCHAR(16777216)`  | The operational merchant ledger account ID / MID with the acquiring bank.  |  
| `acquirer_reference`  | `VARCHAR(16777216)`  | A unique tracking string (ARN) tracing transactions across the acquiring ledger.  |  
| `recurring_type`  | `VARCHAR(16777216)`  | Indicator tracking single or repeat payment events  |  
| `payment_initiator`  | `VARCHAR(16777216)`  | The identity triggering the transaction process (Customer vs. Merchant).  |  
| `card_on_file`  | `BOOLEAN`  | Indicates true if the customer's card credentials are securely saved for subsequent purchases.  |  
| `settlement_batch_id`  | `VARCHAR(16777216)`  | The tracking number for the settlement batch grouping transactions for payout.  |  
| `settlement_batch_sub_id`  | `VARCHAR(16777216)`  | A nested subset identification key tracking specific batches within the parent payout bundle.  |  
| `status`  | `VARCHAR(16777216)`  | The system-wide normalized status denoting transaction lifecycle outcome.  |  
| `original_status`  | `VARCHAR(16777216)`  | The unmapped status code directly delivered by the PSP  |  
| `reason_code`  | `VARCHAR(16777216)`  | The standardized error or performance rationale explanation tied to the final status.  |  
| `original_reason_code`  | `VARCHAR(16777216)`  | The raw failure or success response code output directly by the processor.  |  
| `ixopay_reason_code`  | `VARCHAR(16777216)`  | The specialized diagnostic outcome mapping classification passed by Ixopay systems.  |  
| `merchant_customer_id`  | `VARCHAR(16777216)`  | The bespoke end-client account identifier chosen by the merchant.  |  
| `descriptor`  | `VARCHAR(16777216)`  | The custom text phrase string printed onto the end consumer's card statement.  |  
| `account_updater`  | `VARCHAR(16777216)`  | Details indicating if automated account updating runs updated the saved card data.  |  
| `eci`  | `VARCHAR(16777216)`  | The Electronic Commerce Indicator string clarifying the security condition of the 3D Secure verification.  |  
| `pre_chargeback_indicator`  | `VARCHAR(16777216)`  | Early dispute warning system indicator triggered prior to formal chargeback issuance.  |  
| `durbin_regulated`  | `VARCHAR(16777216)`  | A string indicating if the debit card handling falls under Durbin amendment fee caps.  |  
| `interchange_qualification_code`  | `VARCHAR(16777216)`  | The network classification used to calculate the transaction's interchange fee rate.  |  
| `payment_brand_response_code_category`  | `VARCHAR(16777216)`  | Categorized response types across card network brands to standardize decline handling.  |  
| `gateway`  | `VARCHAR(16777216)`  | The technological payment gateway engine that carried out system routing.  |  
| `pii_reference`  | `VARCHAR(16777216)`  | A secure reference link pointing towards isolated Personally Identifiable Information databases.  |  
| `row_hash`  | `VARCHAR(16777216)`  | A cryptographic row validation hash string ensuring dataset integrity.  |  
| `filenames`  | `ARRAY`  | A list recording the specific source files from which this record was parsed.  |  
| `ingested_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp capturing when this information row hit the database.  |  
| `updated_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp tracking the most recent data adjustment to this row.  |  
| `congrify_issuing_bank`  | `VARCHAR(16777216)`  | The standardized bank issuer name from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_category`  | `VARCHAR(16777216)`  | The standardized card category from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_type`  | `VARCHAR(16777216)`  | The standardized card type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_product`  | `VARCHAR(16777216)`  | The standardized card product from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_sub_product_type`  | `VARCHAR(16777216)`  | The unified card product type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_scheme`  | `VARCHAR(16777216)`  | The normalized scheme network from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_issuer_country`  | `VARCHAR(16777216)`  | The standardized financial issuance country universal BIN data source of Ixopay Payments  |  
### Transactions Table Schema[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#transactions-table-schema "Direct link to Transactions Table Schema")  
| **Column name**  | **Data Type**  | **Description**  |  
| --- | --- | --- |  
| `company_name`  | `VARCHAR(16777216)`  | The name of the organization associated with the financial transactions.  |  
| `merchant_account`  | `VARCHAR(16777216)`  | The unique primary identifier for the merchant's business account(s).  |  
| `merchant_sub_account`  | `VARCHAR(16777216)`  | The sub-account identifier grouped under the main merchant account(s).  |  
| `psp`  | `VARCHAR(16777216)`  | The name of the Payment Service Provider handling the transaction.  |  
| `psp_merchant_account`  | `VARCHAR(16777216)`  | The account identifier assigned to the merchant's business account(s) directly by the PSP.  |  
| `congrify_payment_id`  | `VARCHAR(16777216)`  | The centralized unique identifier generated for this transaction within the Congrify system.  |  
| `original_payment_id`  | `VARCHAR(16777216)`  | The raw native payment identifier generated by the PSP for this transactions.  |  
| `congrify_event_id`  | `VARCHAR(16777216)`  | Internal tracking id assigned by Congrify for parent transactions.  |  
| `original_event_id`  | `VARCHAR(16777216)`  | The raw, unmodified event identifier code generated by the PSP for the transaction flow.  |  
| `requested_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp converted to the UTC timezone the transaction request occurred.  |  
| `requested_on_date_utc`  | `DATE`  | The calendar date on which the transaction request was initialized, standardized to UTC from a timestamp.  |  
| `processed_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp recording when the processing work was finalized converted to the UTC timezone.  |  
| `processed_on_date_utc`  | `DATE`  | The calendar date on which transaction processing was finished, standardized to UTC from a timestamp.  |  
| `payment_reference`  | `VARCHAR(16777216)`  | The raw, unmodified event identifier code generated by the PSP for related transactions.  |  
| `payment_amount`  | `NUMBER(20,8)`  | The gross transaction value submitted by the purchasing customer.  |  
| `event_type`  | `VARCHAR(16777216)`  | The normalized categorization of the transaction event (e.g., Refund, Authorization).  |  
| `original_event_type`  | `VARCHAR(16777216)`  | The raw, unparsed event phase taxonomy passed directly by the provider endpoint.  |  
| `event_amount`  | `NUMBER(20,8)`  | The gross transaction value submitted by the purchasing customer initially for the parent event.  |  
| `initial_type`  | `VARCHAR(16777216)`  | The event type for the parent event.  |  
| `processing_currency`  | `VARCHAR(16777216)`  | The currency code used during the client interaction.  |  
| `settlement_currency`  | `VARCHAR(16777216)`  | The currency code in the settlement of the balances to the merchant.  |  
| `fx_rate_applied`  | `NUMBER(20,8)`  | The effective foreign exchange conversion multiplier used during the operation.  |  
| `payment_method`  | `VARCHAR(16777216)`  | The standardized payment method classification used (e.g., Credit Card, PayPal).  |  
| `original_payment_method`  | `VARCHAR(16777216)`  | The raw, unmapped payment method name delivered by the PSP.  |  
| `merchant_category_code`  | `NUMBER(38,0)`  | The standard four-digit industry classification code (MCC) of the business entity.  |  
| `status`  | `VARCHAR(16777216)`  | The system-wide normalized status denoting transaction lifecycle outcome.  |  
| `original_status`  | `VARCHAR(16777216)`  | The unmapped status code directly delivered by the PSP.  |  
| `reason_code`  | `VARCHAR(16777216)`  | The standardized error or performance rationale explanation tied to the final status.  |  
| `original_reason_code`  | `VARCHAR(16777216)`  | The raw failure or success response code output directly by the processor.  |  
| `ixopay_reason_code`  | `VARCHAR(16777216)`  | The specialized diagnostic outcome mapping classification passed by Ixopay systems.  |  
| `card_type`  | `VARCHAR(16777216)`  | The normalized card type value such as Debit / Credit.  |  
| `original_card_type`  | `VARCHAR(16777216)`  | The raw card type text received from the PSP.  |  
| `card_category`  | `VARCHAR(16777216)`  | The standardized consumer tier rating of the card (Consumer, Commercial).  |  
| `original_card_category`  | `VARCHAR(16777216)`  | The unmapped, raw card classification string returned by the provider.  |  
| `card_product`  | `VARCHAR(16777216)`  | A finer classification defining specific product variations within the card type.  |  
| `original_card_product`  | `VARCHAR(16777216)`  | The original card product definition text sent from the card issuer.  |  
| `card_sub_product_type`  | `VARCHAR(16777216)`  | The standardized product group of the card tier (Standard, Premium)  |  
| `original_card_sub_product_type`  | `VARCHAR(16777216)`  | The raw sub-product tier string provided directly by the issuer stream.  |  
| `scheme`  | `VARCHAR(16777216)`  | The standardized payment system network handler managing card routing rules.  |  
| `original_scheme`  | `VARCHAR(16777216)`  | The unparsed network string received directly from the gateway infrastructure.  |  
| `issuing_bank`  | `VARCHAR(16777216)`  | The name of the specific banking corporation that issued the card.  |  
| `issuer_country`  | `VARCHAR(16777216)`  | The origin country code where the issuing institution is legally registered.  |  
| `billing_country`  | `VARCHAR(16777216)`  | The declared geographical country linked to the client's billing address.  |  
| `region`  | `VARCHAR(16777216)`  | A high-level regional classification encompassing transaction activity.  |  
| `transaction_region`  | `VARCHAR(16777216)`  | The geographical area classification where the transaction request was registered.  |  
| `merchant_region`  | `VARCHAR(16777216)`  | The geographical region where the business region of the merchant is anchored.  |  
| `bin`  | `VARCHAR(16777216)`  | The Bank Identification Number representing the introductory sequence of the card number.  |  
| `shopper_pan`  | `VARCHAR(16777216)`  | Masked end-client's Primary Account Number (Card Number).  |  
| `network_token_used`  | `BOOLEAN`  | Indicates whether a secure network token was used for the transaction.  |  
| `avs_postal_code_response_code`  | `VARCHAR(16777216)`  | The feedback code returned by the address verification provider mapping the user's zip/postal code.  |  
| `avs_street_address_response_code`  | `VARCHAR(16777216)`  | The feedback code for the address verification service confirming the matching accuracy for the numerical part of the customer's street.  |  
| `cvc_response_code`  | `VARCHAR(16777216)`  | The verification match result code returned for the card security digits (CVC/CVV).  |  
| `in_scope_3ds`  | `VARCHAR(16777216)`  | Indicator if the transaction was sent as in scope of 3DS checks.  |  
| `original_in_scope_3ds`  | `VARCHAR(16777216)`  | Raw indicator if 3DS was initiated, as reported from the stream.  |  
| `response_code_3ds`  | `VARCHAR(16777216)`  | Authentication result from the 3DS process.  |  
| `original_response_code_3ds`  | `VARCHAR(16777216)`  | Raw unparsed authentication response code returned after the 3D Secure checks.  |  
| `challenged_3ds`  | `VARCHAR(16777216)`  | Indicator documenting if an interactive user authentication challenge flow occurred.  |  
| `original_challenged_3ds`  | `VARCHAR(16777216)`  | Raw system challenge flow indicator in scope of a 3DS check.  |  
| `exemptions_applied_3ds`  | `VARCHAR(16777216)`  | Normalized exemptions that were applied during the 3DS check.  |  
| `original_exemptions_applied_3ds`  | `VARCHAR(16777216)`  | The raw exemptions that were applied during the 3DS check as reported by the PSP.  |  
| `version_3ds`  | `VARCHAR(16777216)`  | Normalized 3DS protocol version.  |  
| `original_version_3ds`  | `VARCHAR(16777216)`  | Raw native version of the 3D Secure protocol.  |  
| `entry_mode`  | `VARCHAR(16777216)`  | The method indicating how card detail entries were captured (e.g., E-commerce, Point of Sale device).  |  
| `acquirer_name`  | `VARCHAR(16777216)`  | The commercial entity name of the acquiring bank.  |  
| `acquirer_account`  | `VARCHAR(16777216)`  | The operational merchant ledger account ID / MID with the acquiring bank.  |  
| `acquirer_auth_code`  | `VARCHAR(16777216)`  | The specific approval authorization id sent back from the acquirer engine.  |  
| `acquirer_reference`  | `VARCHAR(16777216)`  | A unique tracking string (ARN) tracing transactions across the acquiring ledger.  |  
| `recurring_type`  | `VARCHAR(16777216)`  | Indicator tracking single or repeat payment events  |  
| `payment_initiator`  | `VARCHAR(16777216)`  | The identity triggering the transaction process (Customer vs. Merchant).  |  
| `card_on_file`  | `BOOLEAN`  | Indicates true if the customer's card credentials are securely saved for subsequent purchases.  |  
| `source_funding`  | `VARCHAR(16777216)`  | Underlying payment method if the payment was processed via another instrument (e.g., credit card via a wallet).  |  
| `gateway`  | `VARCHAR(16777216)`  | The technological payment gateway engine that carried out system routing.  |  
| `invoice_id`  | `VARCHAR(16777216)`  | Reference mapping the payment back to a specific invoice.  |  
| `order_id`  | `VARCHAR(16777216)`  | The commercial identifier generated by the merchant system for the customer order.  |  
| `merchant_customer_id`  | `VARCHAR(16777216)`  | The bespoke end-client account identifier chosen by the merchant.  |  
| `descriptor`  | `VARCHAR(16777216)`  | The custom text phrase string printed onto the end consumer's card statement.  |  
| `account_updater`  | `VARCHAR(16777216)`  | Details indicating if automated account updating runs updated the saved card data.  |  
| `eci`  | `VARCHAR(16777216)`  | The Electronic Commerce Indicator string clarifying the security condition of the 3D Secure verification.  |  
| `pre_chargeback_indicator`  | `VARCHAR(16777216)`  | Early dispute warning system indicator triggered prior to formal chargeback issuance.  |  
| `durbin_regulated`  | `VARCHAR(16777216)`  | A string indicating if the debit card handling falls under Durbin amendment fee caps.  |  
| `interchange_qualification_code`  | `VARCHAR(16777216)`  | The network classification used to calculate the transaction's interchange fee rate.  |  
| `payment_brand_response_code_category`  | `VARCHAR(16777216)`  | Categorized response types across card network brands to standardize decline handling.  |  
| `paypal_token`  | `VARCHAR(16777216)`  | Unique token key generated by PayPal's infrastructure.  |  
| `paypal_payer_email`  | `VARCHAR(16777216)`  | Customer profile registration email linked directly with PayPal accounts.  |  
| `paypal_payment_id`  | `VARCHAR(16777216)`  | Parent transaction id provided by PayPal.  |  
| `paypal_authorization_id`  | `VARCHAR(16777216)`  | Transaction id for the authorization transaction provided by PayPal.  |  
| `paypal_payer_id`  | `VARCHAR(16777216)`  | Unique buyer identification code within PayPal.  |  
| `paypal_payer_status`  | `VARCHAR(16777216)`  | Account status of the PayPal buyer profile.  |  
| `paypal_seller_protection_status`  | `VARCHAR(16777216)`  | Eligibility classification under standard seller protection frameworks.  |  
| `paypal_capture_id`  | `VARCHAR(16777216)`  | Transaction id for the capture transaction provided by PayPal.  |  
| `paypal_refund_id`  | `VARCHAR(16777216)`  | Transaction id for the refund transaction provided by PayPal  |  
| `paypal_billing_agreement_id`  | `VARCHAR(16777216)`  | Contract authorization id supporting automatic repeat checkout through PayPal.  |  
| `paypal_paypal_retail_transaction_id`  | `VARCHAR(16777216)`  | Point of Sale retail location tracking identifier utilized within PayPal.  |  
| `paypal_paypal_retail_transaction_status`  | `VARCHAR(16777216)`  | Current execution workflow status of the physical PayPal retail transaction.  |  
| `paypal_refund_reason`  | `VARCHAR(16777216)`  | Text explanation for the PayPal reversal.  |  
| `row_hash`  | `VARCHAR(16777216)`  | A cryptographic row validation hash string ensuring dataset integrity.  |  
| `filenames`  | `ARRAY`  | A list recording the specific source files from which this record was parsed.  |  
| `ingested_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp capturing when this information row hit the database.  |  
| `updated_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp tracking the most recent data adjustment to this row.  |  
| `congrify_issuing_bank`  | `VARCHAR(16777216)`  | The standardized bank issuer name from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_category`  | `VARCHAR(16777216)`  | The standardized card category from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_type`  | `VARCHAR(16777216)`  | The standardized card type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_product`  | `VARCHAR(16777216)`  | The standardized card product from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_sub_product_type`  | `VARCHAR(16777216)`  | The unified card product type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_scheme`  | `VARCHAR(16777216)`  | The normalized scheme network from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_issuer_country`  | `VARCHAR(16777216)`  | The standardized financial issuance country universal BIN data source of Ixopay Payments Intelligence.  |  
### Chargebacks Table Schema[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/data-pipelines/unified-reports#chargebacks-table-schema "Direct link to Chargebacks Table Schema")  
| **Column name**  | **Data Type**  | **Description**  |  
| --- | --- | --- |  
| `company_name`  | `VARCHAR(16777216)`  | The name of the organization associated with the dispute or chargeback case.  |  
| `merchant_account`  | `VARCHAR(16777216)`  | The unique primary identifier for the merchant account receiving the dispute.  |  
| `merchant_sub_account`  | `VARCHAR(16777216)`  | The sub-account identifier grouped under the main merchant account(s).  |  
| `psp`  | `VARCHAR(16777216)`  | The Payment Service Provider that processed the transaction under dispute.  |  
| `psp_merchant_account`  | `VARCHAR(16777216)`  | The account identifier assigned to the merchant's business account(s) directly by the PSP.  |  
| `dispute_type`  | `VARCHAR(16777216)`  | The normalized classification of the dispute event (e.g., 1st Chargeback, Chargeback Retrieval).  |  
| `original_dispute_type`  | `VARCHAR(16777216)`  | The raw, unparsed dispute classification received directly from the provider.  |  
| `dispute_reason`  | `VARCHAR(16777216)`  | The normalized description detailing why the transaction is being contested.  |  
| `original_dispute_reason`  | `VARCHAR(16777216)`  | The raw reason explanation provided directly by the issuing bank or payment network.  |  
| `scheme`  | `VARCHAR(16777216)`  | The standardized payment system network handler managing card routing rules.  |  
| `original_scheme`  | `VARCHAR(16777216)`  | The unparsed network string received directly from the gateway infrastructure.  |  
| `reason_code`  | `VARCHAR(16777216)`  | The specific operational reason code issued by the network to explain the dispute.  |  
| `reason_code_category`  | `VARCHAR(16777216)`  | The normalized category grouping similar dispute reason codes (e.g., Fraud, Technical).  |  
| `original_reason_code_category`  | `VARCHAR(16777216)`  | The raw classification category for the reason code provided by the external system.  |  
| `ixopay_reason_code`  | `VARCHAR(16777216)`  | The proprietary dispute tracking code mapped via the Ixopay platform.  |  
| `congrify_dispute_id`  | `VARCHAR(16777216)`  | The unique global identifier generated internally by Congrify to track the dispute record.  |  
| `original_dispute_id`  | `VARCHAR(16777216)`  | The raw identification id assigned to this dispute by the provider.  |  
| `event_date_utc`  | `TIMESTAMP_NTZ(9)`  | The high-precision timestamp marking when this specific dispute lifecycle event occurred, converted to the UTC timezone.  |  
| `payment_date_utc`  | `TIMESTAMP_NTZ(9)`  | The exact timestamp indicating when the original disputed payment was initially authorized, converted to the UTC timezone.  |  
| `dispute_date_utc`  | `TIMESTAMP_NTZ(9)`  | The timestamp indicating when the formal dispute process was officially opened, converted to the UTC timezone.  |  
| `dispute_end_date_utc`  | `TIMESTAMP_NTZ(9)`  | The final deadline timestamp by which the merchant must submit evidence, converted to the UTC timezone.  |  
| `payment_reference`  | `VARCHAR(16777216)`  | The system id linked to the original payment record.  |  
| `order_id`  | `VARCHAR(16777216)`  | Operational reference key identifying the order entry within the merchant store software.  |  
| `dispute_amount`  | `NUMBER(20,8)`  | The financial value being claimed back or contested by the cardholder.  |  
| `dispute_currency`  | `VARCHAR(16777216)`  | The currency code used to denominate the disputed amount.  |  
| `payment_amount`  | `NUMBER(20,8)`  | The total gross monetary value of the original undisputed transaction.  |  
| `processing_currency`  | `VARCHAR(16777216)`  | The code representing the currency used to clear the original transaction.  |  
| `payment_method`  | `VARCHAR(16777216)`  | The standardized payment method classification used (e.g., Credit Card, PayPal).  |  
| `original_payment_method`  | `VARCHAR(16777216)`  | The raw, unmapped payment method name delivered by the PSP.  |  
| `merchant_category_code`  | `NUMBER(38,0)`  | The standard four-digit industry classification code (MCC) of the business entity.  |  
| `dispute_status`  | `VARCHAR(16777216)`  | The normalized lifecycle stage of the dispute (e.g., Open, Won, Lost).  |  
| `original_dispute_status`  | `VARCHAR(16777216)`  | The raw, unmodified status delivered by the PSP.  |  
| `card_type`  | `VARCHAR(16777216)`  | The normalized card type value such as Debit / Credit.  |  
| `original_card_type`  | `VARCHAR(16777216)`  | The raw card type text received from the PSP.  |  
| `card_category`  | `VARCHAR(16777216)`  | The standardized consumer tier rating of the card (Consumer, Commercial).  |  
| `original_card_category`  | `VARCHAR(16777216)`  | The unmapped, raw card classification string returned by the provider.  |  
| `card_product`  | `VARCHAR(16777216)`  | A finer classification defining specific product variations within the card type.  |  
| `original_card_product`  | `VARCHAR(16777216)`  | The original card product definition text sent from the card issuer.  |  
| `card_sub_product_type`  | `VARCHAR(16777216)`  | The standardized product group of the card tier (Standard, Premium)  |  
| `original_card_sub_product_type`  | `VARCHAR(16777216)`  | The raw sub-product tier string provided directly by the issuer stream.  |  
| `issuing_bank`  | `VARCHAR(16777216)`  | The name of the specific banking corporation that issued the card.  |  
| `issuer_country`  | `VARCHAR(16777216)`  | The origin country code where the issuing institution is legally registered.  |  
| `billing_country`  | `VARCHAR(16777216)`  | The declared geographical country linked to the client's billing address.  |  
| `region`  | `VARCHAR(16777216)`  | A high-level regional classification encompassing transaction activity.  |  
| `transaction_region`  | `VARCHAR(16777216)`  | The geographical area classification where the transaction request was registered.  |  
| `merchant_region`  | `VARCHAR(16777216)`  | The geographical region where the business region of the merchant is anchored.  |  
| `bin`  | `VARCHAR(16777216)`  | The Bank Identification Number representing the introductory sequence of the card number.  |  
| `shopper_pan`  | `VARCHAR(16777216)`  | Masked end-client's Primary Account Number (Card Number).  |  
| `network_token_used`  | `BOOLEAN`  | Indicates whether a secure network token was used for the transaction.  |  
| `avs_postal_code_response_code`  | `VARCHAR(16777216)`  | The feedback code returned by the address verification provider mapping the user's zip/postal code.  |  
| `avs_street_address_response_code`  | `VARCHAR(16777216)`  | The feedback code for the address verification service confirming the matching accuracy for the numerical part of the customer's street.  |  
| `cvc_response_code`  | `VARCHAR(16777216)`  | The verification match result code returned for the card security digits (CVC/CVV).  |  
| `in_scope_3ds`  | `VARCHAR(16777216)`  | Indicator if the transaction was sent as in scope of 3DS checks.  |  
| `original_in_scope_3ds`  | `VARCHAR(16777216)`  | Raw indicator if 3DS was initiated, as reported from the stream.  |  
| `response_code_3ds`  | `VARCHAR(16777216)`  | Authentication result from the 3DS process.  |  
| `original_response_code_3ds`  | `VARCHAR(16777216)`  | Raw unparsed authentication response code returned after the 3D Secure checks.  |  
| `challenged_3ds`  | `VARCHAR(16777216)`  | Indicator documenting if an interactive user authentication challenge flow occurred.  |  
| `original_challenged_3ds`  | `VARCHAR(16777216)`  | Raw system challenge flow indicator in scope of a 3DS check.  |  
| `exemptions_applied_3ds`  | `VARCHAR(16777216)`  | Normalized exemptions that were applied during the 3DS check.  |  
| `original_exemptions_applied_3ds`  | `VARCHAR(16777216)`  | The raw exemptions that were applied during the 3DS check as reported by the PSP.  |  
| `version_3ds`  | `VARCHAR(16777216)`  | Normalized 3DS protocol version.  |  
| `original_version_3ds`  | `VARCHAR(16777216)`  | Raw native version of the 3D Secure protocol.  |  
| `entry_mode`  | `VARCHAR(16777216)`  | The method indicating how card detail entries were captured (e.g., E-commerce, Point of Sale device).  |  
| `acquirer_name`  | `VARCHAR(16777216)`  | The commercial entity name of the acquiring bank.  |  
| `acquirer_account`  | `VARCHAR(16777216)`  | The operational merchant ledger account ID / MID with the acquiring bank.  |  
| `acquirer_auth_code`  | `VARCHAR(16777216)`  | The specific approval authorization id sent back from the acquirer engine.  |  
| `acquirer_reference`  | `VARCHAR(16777216)`  | A unique tracking string (ARN) tracing transactions across the acquiring ledger.  |  
| `dispute_arn`  | `VARCHAR(16777216)`  | The unique Acquirer Reference Number specifically tracking this chargeback item through banking networks.  |  
| `merchant_customer_id`  | `VARCHAR(16777216)`  | The bespoke end-client account identifier chosen by the merchant.  |  
| `descriptor`  | `VARCHAR(16777216)`  | The custom text phrase string printed onto the end consumer's card statement.  |  
| `recurring_type`  | `VARCHAR(16777216)`  | Indicator tracking single or repeat payment events.  |  
| `card_on_file`  | `BOOLEAN`  | Indicates true if the customer's card credentials are securely saved for subsequent purchases.  |  
| `account_updater`  | `VARCHAR(16777216)`  | Details indicating if automated account updating runs updated the saved card data.  |  
| `eci`  | `VARCHAR(16777216)`  | The Electronic Commerce Indicator string clarifying the security condition of the 3D Secure verification.  |  
| `pre_chargeback_indicator`  | `VARCHAR(16777216)`  | Early dispute warning system indicator triggered prior to formal chargeback issuance.  |  
| `durbin_regulated`  | `BOOLEAN`  | A string indicating if the debit card handling falls under Durbin amendment fee caps.  |  
| `interchange_qualification_code`  | `VARCHAR(16777216)`  | The network classification used to calculate the transaction's interchange fee rate.  |  
| `payment_brand_response_code_category`  | `VARCHAR(16777216)`  | Categorized response types across card network brands to standardize decline handling.  |  
| `current_action_amount`  | `NUMBER(20,8)`  | The specific financial value involved in the most recent dispute action step.  |  
| `current_action_currency`  | `VARCHAR(16777216)`  | The currency code associated with the current dispute resolution action step.  |  
| `current_action_date`  | `TIMESTAMP_NTZ(9)`  | The exact high-precision timestamp recording when the latest action step was updated.  |  
| `gateway`  | `VARCHAR(16777216)`  | The technological payment gateway engine that carried out system routing.  |  
| `row_hash`  | `VARCHAR(16777216)`  | A cryptographic row validation hash string ensuring dataset integrity.  |  
| `filenames`  | `ARRAY`  | A list recording the specific source files from which this record was parsed.  |  
| `ingested_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp capturing when this information row hit the database.  |  
| `updated_on_utc`  | `TIMESTAMP_NTZ(9)`  | The exact system timestamp tracking the most recent data adjustment to this row.  |  
| `congrify_issuing_bank`  | `VARCHAR(16777216)`  | The standardized bank issuer name from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_category`  | `VARCHAR(16777216)`  | The standardized card category from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_type`  | `VARCHAR(16777216)`  | The standardized card type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_product`  | `VARCHAR(16777216)`  | The standardized card product from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_sub_product_type`  | `VARCHAR(16777216)`  | The unified card product type from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_card_scheme`  | `VARCHAR(16777216)`  | The normalized scheme network from universal BIN data source of Ixopay Payments Intelligence.  |  
| `congrify_issuer_country`  | `VARCHAR(16777216)`  | The standardized financial issuance country universal BIN data source of Ixopay Payments Intelligence.  |