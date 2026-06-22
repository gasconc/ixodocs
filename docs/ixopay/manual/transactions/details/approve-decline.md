---
title: Approve/Decline
summary: ' Transaction Detailshttps://documentation.ixopay.com/manual/docs/transactions/details'
tags:
- approve-decline-transaction-https-documentation-ixopay-com-manual-docs-transactions-details-approve-decline-approve-decline-transaction-direct-link-approve-decline-transaction
- ixopay
- capture
- void
- transaction
source_url: https://documentation.ixopay.com/manual/docs/transactions/details/approve-decline
portal: ixopay-manual
updated: '2026-06-22'
related: []
---

* [Transactions](https://documentation.ixopay.com/manual/docs/transactions)
  * [Transaction Details](https://documentation.ixopay.com/manual/docs/transactions/details)
  * Approve/Decline

# Approve/Decline
## Approve / Decline Transaction[​](https://documentation.ixopay.com/manual/docs/transactions/details/approve-decline#approve--decline-transaction "Direct link to Approve / Decline Transaction")
Depending on the given Permissions and prerequisites, Users can approve respective decline transactions manually (e.g. if transactions are marked by the Risk Engine for manual review). This can be done by using the **Approve** respective **Decline** Action Buttons in the Transaction Details.
  * To approve respective decline a Transaction, the Transaction has to be marked for manual review (see [Risk Management - Create Risk Rules for Your Risk Profile](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create-risk-rules)) and therefore meet the requirements for manual review

Once confirmed the Transaction will be either declined or approved (actions depend on the Transaction Type).
![Approve/Decline](https://documentation.ixopay.com/manual/assets/ideal-img/approve-decline.6d719fd.1280.png)Approve/Decline![Decline confirmation](https://documentation.ixopay.com/manual/assets/ideal-img/decline-confirmation.c06bf0b.994.png)Decline confirmation![Declined](https://documentation.ixopay.com/manual/assets/ideal-img/declined.d0facf9.1280.png)Declined![Approved](https://documentation.ixopay.com/manual/assets/ideal-img/approved.e12cffd.1280.png)Approved
note
The same actions can be performed in the [Risk Management - Review List](https://documentation.ixopay.com/manual/docs/risk-management/review-list). Keep in mind that Debit Transactions set to manual review will be split into a pre-auth and a capture/void transactions (depending on the manual review user action) and therefore counted as two separate Transactions. This behavior does not apply to pre-auth transactions.