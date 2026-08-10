---
title: Transaction Search
summary: ' Transaction Search'
tags:
- ixopay
- acquirer
- psp
- chargeback
- refund
- authorization
- capture
- settlement
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/observability/transaction-search
portal: ixopay-modules
updated: '2026-08-10'
related: []
---

* Observability
  * Transaction Search

# Transaction Search
The IXOPAY Payments Intelligence (formerly Congrify) platform enables you to deep-dive into your transaction events, chargebacks and fees, filter and include columns as per preferred data-fields, generate CSV for local storage, and share reports with your colleagues on the IXOPAY Payments Intelligence platform.
The transactions deep-dive and report generation can be accessed via the 'Transactions' tab on the IXOPAY Payments Intelligence web-app.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_1.b65d7ba.1600.png)
From here, you can investigate specific Transaction Events, Chargebacks and Fees by unique reference numbers/ IDs to investigate the event/ chargeback or fee history, status, amount and other data fields mapped to the unique reference ID/ number.
  1. **Transaction Events** can be searched by transaction ID referencers input in the 'Find a transaction by ID…' field
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_2.ced4e4a.1600.png)
The transaction events can be filtered by the following unique reference IDs (also refer meta-description of the search field for updated list of unique referencers, which are available as a pop-up if you hover your mouse-pointer over the search field) - Acquirer Reference number (ARN), IXOPAY Payments Intelligence event ID, IXOPAY Payments Intelligence payer PSP ID, IXOPAY Payments Intelligence Payment ID, Invoice ID, Merchant customer ID, Order ID, Original event ID, Original payment ID, and Payment Reference number.
note
Only applicable to IXOPAY Payments Intelligence users who have integrated Paypal reports - Paypal authorization ID, Paypal Billing agreement ID, Paypal Capture ID, Paypal payer ID, Paypal payment ID, Paypal retail transaction ID, Paypal Refund ID.
  2. **Chargeback events** can be searched by chargeback event referencers which can be input in the 'Find a transaction by ID…' field
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_3.99eff8a.1600.png)
The chargeback events can be filtered by the following unique reference IDs (also refer meta-description of the search field for updated list of unique referencers, which are available as a pop-up if you hover your mouse-pointer over the search field) - Acquirer Reference number (ARN), IXOPAY Payments Intelligence dispute ID, Merchant customer ID, Order ID, Original dispute ID, and Payment Reference number.
  3. **Fee events** can be searched by unique fee event referencers which can be input in the 'Find a transaction by ID…' field
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_4.baf2207.1600.png)
The chargeback events can be filtered by the following unique reference IDs (also refer meta-description of the search field for updated list of unique referencers, which are available as a pop-up if you hover your mouse-pointer over the search field) - Acquirer Reference number (ARN), Allocated Fee rule ID, Event reference number, Fee reference number, Merchant customer ID, Order ID, Settlement batch ID, Settlement batch sub ID.
note
Currently, the transaction search function only allows single ID searches. For listed unique reference ID, you can use the 'Data Explorer' tab on the IXOPAY Payments Intelligence platform to add 'Conditions' for a convenient no-code search of your transaction events, chargebacks or fee data by multiple unique referencers.
  4. **Applying filters to your event search**
You can further refine your search by configuring search and data time-windows at the top right of the events page.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_5.668b57f.1600.png)
On clicking the "Add filters" button, you will see the possible filter options as a pop-up window. Multiple filter fields and values can be selected which enable your data exploration on the most relevant data fields/ columns. Such filter fields (basis your payments data) can be scrolled through on the left of the pop-up window, or specifically found through the 'Find filter…' option. In the example below, Status is selected as the filter, showing the possible values — select 'Gateway declined' to view transactions declined by the Gateway.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_6.c052a70.1600.png)
After selecting the combination of filters to your transactions events, you can confirm by clicking the 'Save filters' button to return to the transactions events page which will now include a tab highlighting the filter applied (in the example the 'Status: Gateway declined'). When multiple filter fields are applied, each filter field can be disabled by clicking on the 'x' on each filter tab.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_7.570375b.1600.png)
Filters can also be configured directly from the column heads of your events table by clicking on 'Filter' button appearing next to the column header. In the example below, you can filter basis your Merchant Accounts in EU (DE and FR entities).
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_8.2736729.1600.png)
As a result, the filter tab would include this additional filter directly from the column header which can be conveniently disabled from the filter tab or by the column header.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_9.10a64b4.1600.png)
Similarly, your data can be sorted in ascending or descending order basis each data column (alphabetically or numerically) by clicking the 'Sort'button on each data column.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_10.831fa66.1600.png)
  5. **Selecting data columns in the searched table**
You can select the most relevant data fields and columns for your filtered data table by clicking the 'Edit' button at the top right of your data table.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_11.d9b2fb4.1600.png)
On the Table column tab, you can search, scroll through and select the relevant fields or columns available in your events data. In addition, you can also select all, unselect all or reset to default selection of data columns. The default selection of data columns in the events view can be configured to your selected data columns by clicking on the 'Save as default preference' text in the tab.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_12.1012028.1600.png)
Click on 'Apply' to see the updated events table, now with only the selected data columns.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_13.c92db69.1600.png)
  6. **Exporting and sharing your events data tables**
Your events table (filtered and with the relevant data columns) can be exported as a CSV file for local storage (default download folder in your browser) by clicking the 'Export' button. Your events data table can also be shared with other authorized Merchant Users on your company account by clicking the 'Share' button which will open the Events table (with pre-configured filters and data columns) for authorized users after they login on the IXOPAY Payments Intelligence platform.
![](https://documentation.ixopay.com/modules/assets/ideal-img/TransactionSearch_14.67e58b0.1600.png)