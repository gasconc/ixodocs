---
title: 'Risk Engine: Manual Review'
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Risk
  Engine: Manual Review'
tags:
- ixopay
- transaction
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/risk-engine-manual-review
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Risk Engine: Manual Review

# Risk Engine: Manual Review
With the Connector Setting **Risk Engine: Manual Review Requirements** and **Risk Engine: Manual Review Delay** you can implement a manual review step for different transaction flow scenarios. (e.g. [Secure Payouts](https://documentation.ixopay.com/manual/docs/risk-management/review-list/secure-payouts)). This setting is used in combination with the available [risk rules defined in risk profiles](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/overview) to configure the conditions for transactions to be marked for manual review. You can then add as many User Roles or Users as you want to approve the transaction in their [Review List](https://documentation.ixopay.com/manual/docs/risk-management/review-list) before the transaction flow can continue or set a delay time period after that the manual review is approved/declined automatically.
To configure the connector setting Risk Engine: Manual Review Requirements follow this steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Risk Engine: Manual Review Requirements** and click **Add** (see Connector Settings)
  4. Click **Add** to create a new parameter **Required Reviews by Role** or **Required Reviews by User** (see Required Reviews by parameter). You can add as many parameters as you want.
  5. **Select** Role or User from the dropdown menu and click **Save**. Only pre-defined Roles and Users are available.

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-manual-review.7a85116.1280.png)Connector Detail Overview![Connector Setting](https://documentation.ixopay.com/manual/assets/ideal-img/connector-setting-manual-review.b817625.770.png)Connector Setting![Required Reviews by parameters](https://documentation.ixopay.com/manual/assets/ideal-img/required-reviews-by-parameters.a67ad5c.910.png)Required Reviews by parameters
note
Only if all the selected Roles or Users confirm the transaction (in the Review list) the transaction flow continues.
To configure the connector setting Risk Engine: Manual Review Delay follow this steps:
  * Go to the **Connector Detail Overview** of the desired Connector
  * Click Edit on the **Settings** section (see Connector Detail Overview)
  * Select the Connector Setting **Risk Engine: Manual Review Delay** and click **Add** (see Connector Settings)
  * Define the **Delay in hours** before an automatic action should be performed as well as the Action (approve, decline) that should be performed and click **Save** (see Connector Settings Details)

![Connector Settings Details](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-details.4bc2aff.926.png)Connector Settings Details
note
The connector configuration applies immediately to transactions using this connector, so make sure the Risk Profile and Connector Settings are configured before performing transactions with this connector.