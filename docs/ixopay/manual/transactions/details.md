---
title: Transaction Details
summary: ' Transaction Details'
tags:
- action-buttons-https-documentation-ixopay-com-manual-docs-transactions-details-action-buttons-direct-link-action-buttons
- transaction-data-https-documentation-ixopay-com-manual-docs-transactions-details-transaction-data-direct-link-transaction-data
- payment-data-https-documentation-ixopay-com-manual-docs-transactions-details-payment-data-direct-link-payment-data
- customer-data-https-documentation-ixopay-com-manual-docs-transactions-details-customer-data-direct-link-customer-data
- status-history-https-documentation-ixopay-com-manual-docs-transactions-details-status-history-direct-link-status-history
- transaction-tree-followup-transactions-https-documentation-ixopay-com-manual-docs-transactions-details-transaction-tree-followup-transactions-direct-link-transaction-tree-followup-transactions
- risk-based-data-https-documentation-ixopay-com-manual-docs-transactions-details-risk-based-data-direct-link-risk-based-data
- attached-schedules-https-documentation-ixopay-com-manual-docs-transactions-details-attached-schedules-direct-link-attached-schedules
- post-processing-data-https-documentation-ixopay-com-manual-docs-transactions-details-post-processing-data-direct-link-post-processing-data
- comments-https-documentation-ixopay-com-manual-docs-transactions-details-comments-direct-link-comments
source_url: https://documentation.ixopay.com/manual/docs/transactions/details
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * Transaction Details

# Transaction Details
![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details.f83c2c0.1280.png)Transaction Details
For each Transaction shown in the Transaction list you have the option to show more Details such as Transaction, Payment, Customer, History, Risk, Postprocessing or Log Data by selecting the **Details** Button for the individual Transaction.
Let's have a look at the individual sections:
## Action Buttons[​](https://documentation.ixopay.com/manual/docs/transactions/details#action-buttons "Direct link to Action Buttons")
Depending on your Permissions, you will see different Action Buttons in the top right corner:
  * [Send Postback, Recalculate Fees](https://documentation.ixopay.com/manual/docs/transactions/details/send-postback-recalculate-fees),
  * [Capture / Void Transaction,](https://documentation.ixopay.com/manual/docs/transactions/details/capture-void)
  * [Refund Transaction,](https://documentation.ixopay.com/manual/docs/transactions/details/refund)
  * [Approve / Decline](https://documentation.ixopay.com/manual/docs/transactions/details/approve-decline),
  * [Cancel, Resolve,](https://documentation.ixopay.com/manual/docs/transactions/details/cancel-resolve)
  * [Simulate Chargeback / Chargeback Reversal](https://documentation.ixopay.com/manual/docs/transactions/details/chargeback)

## Transaction Data[​](https://documentation.ixopay.com/manual/docs/transactions/details#transaction-data "Direct link to Transaction Data")
In this section you will find data relating to the transaction itself (see Transaction Data Table)
![Transaction Data](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-transaction-data.070d9cf.977.png)Transaction Data
info
To ensure investigations and troubleshooting are as quickly as possible, please include as much of the information (e.g. sample Transaction UUID, description of issue) as you can when contacting our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) when encountering issues. For easy use click the **Copy Tx URL** Button in the Transaction Data.
![Copy TX URL](https://documentation.ixopay.com/manual/assets/ideal-img/copy-tx-url.35adf42.1280.png)Copy TX URL  
| Field  | Description  |  
| --- | --- |  
| Transaction Status  |  **Green:** Successful Transaction   
**Red:** Error, transaction failed (e.g. declined, connection error, due to Risk check declined, etc.)   
**Orange:** manual review, pending_postback, redirected   
**Black:** Voided Transaction  |  
| UUID  | Universal Unique Identifier of the Transaction  |  
| Tenant(s)  | Name of the Tenant and/or Sub-Tenant for which the Merchant was created  |  
| Merchant  | Merchant name for which the Transaction was initiated  |  
| Connector  | Connector name that processed the Transaction  |  
| Adapter/ Method  | Adapter name and chosen payment method for the processed Transaction  |  
| Type  | Transaction Type  |  
| Tags  | [see also Transaction Tag](https://documentation.ixopay.com/manual/docs/transactions/details/transaction-tags)  |  
| Created At  | Date and time (UTC) when the Transaction was created  |  
| Amount and Currency  | Transaction Amount and currency  |  
| Fees  | Fees that were calculated for this Transaction. Incl. entity, description, amount and if deducted from payout. [See also Set up Fees/Fee Calculation.](https://documentation.ixopay.com/manual/docs/connector/fee-management/set-up-fees)  |  
| Provider Payout  | Provider Payout (depending on the Transaction Type, Fees - deducted from Payout and Rolling Reserve)  |  
| Adapter TxID  | Adapter Transaction ID, received by the [IXOPAY platform](https://www.ixopay.com) in the PSP's / Acquirers response  |  
| Adapter Token  | Tokenized payment instrument  |  
| Adapter Redirect URL  | Adapter Redirect URL including the UUID  |  
| Purchase ID  | Purchase ID, a unique Identifier the Merchant received within the API Transaction Response referring to a Transaction  |  
| Registration ID  | Registration ID for Register Transactions  |  
| Merchant TxID  | Merchants Transaction ID received by the IXOPAY platform in the API Transaction Request  |  
| Description  | Transaction Description  |  
| Success/Error/Cancel/Postback URL  | Different URLs where the customer will be redirected, depending on the status of the Transaction  |  
| Extra Data  | Transaction Extra Data  |  
| With registration  | Yes or No  |  
| Transaction Indicator  |  **Single:** One-off Transaction   
**Initial:** First Transaction of a recurring series   
**Recurring:** Subsequent Transaction of a recurring series   
**Cardonfile:** Transaction using a stored tokenized Credit Card   
**MOTO:** Mobile order / Telephone order - Transaction initiated by Virtual Terminal  |  
## Payment Data[​](https://documentation.ixopay.com/manual/docs/transactions/details#payment-data "Direct link to Payment Data")
In this section you will find data relating to the customers payment instrument used for the Transaction (see Payment Data Table)
![Payment Data](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-payment-data.9368ddf.968.png)Payment Data  
| Field  | Description  |  
| --- | --- |  
| Card Holder  | Card Holder name  |  
| Card Type  | Card Type such as Visa or Mastercard  |  
| First six digits  | [First six digits of the customer credit card. See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| Last four digits  | Last four digits of the customer credit card  |  
| Expiry date (MM/YYYY)  | Expiry date of credit card  |  
| CC Fingerprint (Merchant)  | [](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| CC Fingerprint (Global)  | [](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| BinDb: Brand  | Card brand  |  
| BinDb: Bank  | Issuing Bank  |  
| BinDb: Type  | Type of card (card funding type)  |  
| BinDb: Level  | Credit Card type such as business, standard, gold, etc...  |  
| BinDb: Country  | Country of issuing bank. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| Card region  | Relation between issuing and acquiring country. (domestic, intra-EEA, interregional)  |  
| 3D-Secure: required  | Enabling in the Merchant’s Webshop if 3D-Secure is optional or mandatory - With Optional the 3D-Secure process will be performed, if the customer's card is enrolled, otherwise the Transaction will be processed without 3D-Secure liability. [The flag can be overruled by the Risk Engine](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create-risk-rules)  |  
| 3D-Secure: ECI  | 3D-Secure: Electronic Commerce Indicator is a code returned by the processing network and bank, to notify a Merchant about the authentication and status of the card holder under 3D-Secure  |  
## Customer Data[​](https://documentation.ixopay.com/manual/docs/transactions/details#customer-data "Direct link to Customer Data")
In this section you will find data relating to the customer itself (see Customer Data Table). This data is provided by the Transaction Request.
In case the customer data is linked to a [Customer Profile](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles), you can navigate to the Customer Profile directly by using the **Show** Button.
![Customer Data](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-customer-data.4da772e.1280.png)Customer Data  
| Field  | Description  |  
| --- | --- |  
| Last Name  | Customer last name. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| First Name  | Customer first name. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| Email  | Customer email address. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| IP Address  | Customer's IP Address. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| IP Country  | Customer's IP Country.  |  
| Browser Fingerprint  | Browser Fingerprint. [See also Blocklist Customer Data from Transaction list](https://documentation.ixopay.com/manual/docs/transactions/details/blocklist-customer-data-from-transaction-list)  |  
| Company  | Customer Company Name  |  
## Status History[​](https://documentation.ixopay.com/manual/docs/transactions/details#status-history "Direct link to Status History")
In this section you will find the different Processing Status Changes (e.g. await_redirect to redirected, redirected to success) as well as Settlement Status Changes (e.g. Notice Received, Funds Received, Pending, In Progress, Cleared) incl. timestamp.
![Processing Status](https://documentation.ixopay.com/manual/assets/ideal-img/processing-status.8973413.1280.png)Processing Status![Settlement Status](https://documentation.ixopay.com/manual/assets/ideal-img/settlement-status.775989d.1280.png)Settlement Status
## Transaction Tree & Followup Transactions[​](https://documentation.ixopay.com/manual/docs/transactions/details#transaction-tree--followup-transactions "Direct link to Transaction Tree & Followup Transactions")
In this section, similar to the **Transaction Status** , you will find data and links to related transactions (e.g. pre-authorize and capture transactions, splits, refunds, chargebacks) and followup transactions (e.g. [scheduled transactions](https://documentation.ixopay.com/manual/docs/transactions/schedules/overview)) to the current transaction
![Transaction Tree](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-transaction-tree.57fc5fc.1280.png)Transaction Tree
## Risk-based Data[​](https://documentation.ixopay.com/manual/docs/transactions/details#risk-based-data "Direct link to Risk-based Data")
In this section you will find data related to performed Risk Checks (see Risk-based Data Table). This section will only appear in case a [Risk Profile](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create) is [assigned on Merchant and/or Connector level](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/assign). Transactions processed by the Connector will be checked against the [Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create-risk-rules) configured in the assigned Risk Profile and based on the Risk Score and associated [Score Card Actions](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/score-card-actions), Transactions will be approved, declined or require a manual review, etc.
![Risk Check Log](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-risk-check-log.a45e5d6.1280.png)Risk Check Log  
| Field  | Description  |  
| --- | --- |  
| Risk Profile and Risk Rule  | Applied Risk Profiles and Rules  |  
| Details  | Risk Rule parameter details (Mouse over at the info icon)  |  
| Hit  | Provides information whether a Risk Rule was classified as false (green: no Hit) or true (red: Hit)  |  
| Msg  | Message/ additional information  |  
| Action  | Consecutive action as defined in the Risk Rule: If any immediate action is performed  |  
| Manual review*  | Consecutive action as defined in the Risk Rule: If a manual review is required/active  |  
| 3D-Secure  | Consecutive action as defined in the Risk Rule: Whether 3D-Secure as mandatory, optional or disabled  |  
| Alert  | Consecutive action as defined in the Risk Rule: Shows whether an alert notification has been sent or not  |  
| Notify Merchant  | Consecutive action as defined in the Risk Rule: Shows whether the Merchant has been notified or not  |  
| Cum. Score  | Cumulated Card score results within a Risk profile check run  |  
| Final result  | Summarize all used Risk Rules together and thus gives more detailed information about the overall Transaction Risk Score and configured / performed Score Card Actions  |  
tip
For more information about Risk Profile, Risk Rules and Strategies see the [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles) section.
## Attached Schedules[​](https://documentation.ixopay.com/manual/docs/transactions/details#attached-schedules "Direct link to Attached Schedules")
This section will be shown in case a Transaction is scheduled. For more information see also [Transaction Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules)
![Attached Schedules](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-attached-schedules.1ee9b9e.990.png)Attached Schedules
## Post-Processing Data[​](https://documentation.ixopay.com/manual/docs/transactions/details#post-processing-data "Direct link to Post-Processing Data")
Depending on your [System Setup](https://documentation.ixopay.com/manual/docs/system-setup/fee-entities) and [Postprocessing Configuration](https://documentation.ixopay.com/manual/docs/post-processing) you may be able to see further information about Post-Processing data.
This includes:
  * [Reconciliation](https://documentation.ixopay.com/manual/docs/post-processing/reconciliation): Is the Transaction reconciled with the Provider's data
  * [Provider Settlement](https://documentation.ixopay.com/manual/docs/post-processing/provider-settlements): Is the Transaction settled by the Provider
  * [Jobs](https://documentation.ixopay.com/manual/docs/post-processing/jobs): Are there any Post-Processing Jobs where this Transaction was considered for or Outgoing Settlements. Additionally you can set/remove the **invoice-able** flag, which may be relevant for particular job steps.

![Post-Processing](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-overview.5e0d23a.1280.png)Post-Processing
File retention
Files are retained for 12 months and permanently deleted thereafter.
## Comments[​](https://documentation.ixopay.com/manual/docs/transactions/details#comments "Direct link to Comments")
In this section you have the possibility to add internal comments to the individual Transactions. Follow these steps to leave a comment:
  1. Select **Add comment**
  2. Enter the **comment** and select **Save**

![Comments](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-comments.daa305e.1280.png)Comments![Set Note & Confirm](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-set-note-confirm.54d683f.533.png)Set Note & Confirm
## Logs[​](https://documentation.ixopay.com/manual/docs/transactions/details#logs "Direct link to Logs")
In this section you will find all data relating to the transaction processing starting from the moment the API Request is received by the IXOPAY platform, including all intermediate (Payment Form Rendering, Redirecting, Postback Notifications) and executed actions with different PSPs in the background (Adapter Calls) with exact timestamp (UTC).
![Logs](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-logs.85649f1.1280.png)Logs![Logs Entry](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-log-entry.4b2fa57.1280.png)Logs Entry