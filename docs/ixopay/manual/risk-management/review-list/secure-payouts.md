---
title: Secure Payouts / Manual Review
summary: ' Risk Managementhttps://documentation.ixopay.com/manual/docs/risk-management  Review
  Listhttps://documentation.ixopay.com/manual/docs/risk-management/review-list  Secure
  Payouts / Manual Review'
tags:
- secure-payouts-https-documentation-ixopay-com-manual-docs-risk-management-review-list-secure-payouts-secure-payouts-direct-link-secure-payouts
- manual-review-permission-https-documentation-ixopay-com-manual-docs-risk-management-review-list-secure-payouts-manual-review-permission-direct-link-manual-review-permission
- connector-configuration-https-documentation-ixopay-com-manual-docs-risk-management-review-list-secure-payouts-connector-configuration-direct-link-connector-configuration
- risk-profile-configuration-https-documentation-ixopay-com-manual-docs-risk-management-review-list-secure-payouts-risk-profile-configuration-direct-link-risk-profile-configuration
- testing-secure-payouts-https-documentation-ixopay-com-manual-docs-risk-management-review-list-secure-payouts-testing-secure-payouts-direct-link-testing-secure-payouts
- api
- ixopay
- chargeback
- transaction
source_url: https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts
portal: ixopay-manual
updated: '2026-06-01'
related: []
---

* [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * [Review List](https://documentation.ixopay.com/manual/docs/risk-management/review-list)
  * Secure Payouts / Manual Review

# Secure Payouts / Manual Review
Manual Review of transactions can be used for different use cases:
  * **Secure Payouts**
  * **Fraud Prevention**
  * **Chargeback Prevention**
  * **Compliance**

The general configuration for all scenarios remains the same and is described following Secure Payouts.
## Secure Payouts[​](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts#secure-payouts "Direct link to Secure Payouts")
Secure payouts give you complete control over each financial disbursement. You can apply the four-eyes-principle and configure review rules that follow your risk profiles. If the amount being paid out exceeds a predefined limit, the [IXOPAY platform](https://www.ixopay.com)'s secure payouts can trigger customizable notifications sent to key personnel and payment is delayed until the transaction is verified.
note
**Secure Payouts** are only available in case the adapter supports the transaction type payout (see also [adapters.ixopay.com](https://adapters.ixopay.com)).
In this example, we are using a [Simulator](https://documentation.ixopay.com/manual/adapters/simulator).
## Manual Review Permission[​](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts#manual-review-permission "Direct link to Manual Review Permission")
To be able to setup the feature, the permissions **transaction.review.*** must be enabled for your tenant and activated for your Admin User Role (see Permissions Admin User).
![Permissions Admin User](https://documentation.ixopay.com/manual/assets/ideal-img/permissions-admin-user.2e48201.1280.png)Permissions Admin User
## Connector Configuration[​](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts#connector-configuration "Direct link to Connector Configuration")
Once activated for the admin user role, Manual Review can be configured per Connector. The following parameters have to be configured:
  * In the Connector Details Overview add the connector setting **Risk Engine: Manual Review Requirements** (see Connector Setting). This setting allows you to choose which role or user needs to verify the payout.
  * Add as many **roles** or **users** as you like

The payout is only released if the selected roles or users confirm it.
Want to configure the setting for several connectors? Use our Global connector settings feature as described [here](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings).
![Connector Setting](https://documentation.ixopay.com/manual/assets/ideal-img/connector-setting.826f3cc.794.png)Connector Setting
info
The Manual Review can be configured to be automatically approved/declined after a configured period of time with the Connector Setting **Risk Engine: Manual Review Delay.**
## Risk Profile Configuration[​](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts#risk-profile-configuration "Direct link to Risk Profile Configuration")
After the connector is configured, a risk profile needs to be configured and assign to the connector (refer to [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management))
In this example, we will use the risk rule **Transaction amount evaluation** to manually review every payout transaction with a value higher than EUR 30 (see Risk Rule & Risk Profile).
![Risk Rule](https://documentation.ixopay.com/manual/assets/ideal-img/risk-rule.990a5ea.1226.png)Risk Rule![Risk Profile](https://documentation.ixopay.com/manual/assets/ideal-img/risk-profile.77b6bff.1280.png)Risk Profile
## Testing Secure Payouts[​](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts#testing-secure-payouts "Direct link to Testing Secure Payouts")
Using the [API Testing Tool](https://documentation.ixopay.com/manual/docs/api-testing/transaction-api) you can test your configuration, following these steps:
  * Navigate to the **API Testing - Transaction API**
  * Select the configured Connector for Manual Review and load the (API User) Authentication
  * Select the transaction type **payout** , choose an amount over EUR 30 and fill in all necessary parameters
  * Select **Submit**

The transaction will show up in the review list (see Review List & Transaction Details) where the configured **roles** or **users** can confirm the payout (see Approval).
![Review List](https://documentation.ixopay.com/manual/assets/ideal-img/review-list-with-transaction.c11d26d.1280.png)Review List![Transaction Details](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details.88bf1fe.1280.png)Transaction Details![Approval](https://documentation.ixopay.com/manual/assets/ideal-img/approval.630debe.818.png)Approval