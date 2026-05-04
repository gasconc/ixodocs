---
title: Risk Statistics
summary: ' Risk Managementhttps://documentation.ixopay.com/manual/docs/risk-management  Risk
  Profiles & Risk Ruleshttps://documentation.ixopay.com/manual/docs/risk-management/risk-profiles  Risk
  Statistics'
tags:
- 3d-secure
- ixopay
- transaction
source_url: https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/risk-statistics
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Risk Management](https://documentation.ixopay.com/manual/docs/risk-management)
  * [Risk Profiles & Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles)
  * Risk Statistics

# Risk Statistics
Use of the risk statistics provided by the [IXOPAY platform](https://www.ixopay.com) to optimize your risk management strategy. We recommend that you regularly check the risk statistics of your individual risk profiles to better understand your traffic.
Risk statistics allow you to easily identify which [Risk Rules](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/create-risk-rules) are triggered most often and how many times the [Score Card Actions](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles/score-card-actions) assigned to a rule have been executed. Analyze these statistics to determine whether you need to optimize your risk profiles by adding, deleting or editing risk rules and score card actions to prevent legitimate transactions from being declined to often or to reduce the number of resulting chargebacks.
To view the risk statistics:
  1. Open the **Risk Management** section in the navigation menu and select **Risk Profiles**.
  2. Click on **Risk Rule Statistics** next to the profile whose statistics you want to view.
  3. An overview of all the rules in your risk profile is displayed along with the statistics for each rule.

![Risk Profile Overview](https://documentation.ixopay.com/manual/assets/ideal-img/risk-profile-overview.3a67f70.1280.png)Risk Profile Overview![Risk Statistics Example](https://documentation.ixopay.com/manual/assets/ideal-img/risk-statistics-example.f788c0e.1280.png)Risk Statistics Example
The following information is displayed in the risk statistics (see Risk Statistics Example screenshot). Each risk rule is displayed in a separate row with the following information in columns:
  * **ID** : The risk rule's ID
  * **Name** : Name of the risk rule
  * **Description** : The risk rule's description
  * **Disabled** : Whether the risk rule is currently disabled
  * **Immediate action** : The action performed by the risk rule if the transaction matches the risk rule criteria
  * **Action if not applicable** : The action performed by the risk rule if the transaction does not match the risk rule criteria
  * **Require 3D Secure** : Whether 3D Secure is required if the transaction matches the risk rule criteria
  * **Times Executed:** How often this risk rule was checked against transactions
  * **Total Hits:** How often transactions matched the risk rule criteria
  * **Volume Executed:** The total value of all transactions checked against this risk rule
  * **Volume Hits:** The total value of all transactions that matched the risk rule criteria
  * **Total Chargebacks** : The total number of chargebacks
  * **Volume Chargebacks** : The total value of all chargebacks