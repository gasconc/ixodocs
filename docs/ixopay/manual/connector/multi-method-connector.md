---
title: Multi-Method Connector
summary: ' Multi-Method Connector'
tags:
- video-meta-connector-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-video-meta-connector-direct-link-video-meta-connector
- create-multi-method-meta-connector-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-create-multi-method-meta-connector-direct-link-create-multi-method-meta-connector
- connector-configuration-payment-methods-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-connector-configuration-payment-methods-direct-link-connector-configuration-payment-methods
- availability-rules-payment-methods-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-availability-rules-payment-methods-direct-link-availability-rules-payment-methods
- conditions-actions-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-conditions-actions-direct-link-conditions-actions
- availability-rules-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-availability-rules-direct-link-availability-rules
- routing-rules-payment-methods-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-routing-rules-payment-methods-direct-link-routing-rules-payment-methods
- routing-rules-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-routing-rules-direct-link-routing-rules
- advanced-configuration-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-advanced-configuration-direct-link-advanced-configuration
- retries-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-retries-direct-link-retries
source_url: https://documentation.ixopay.com/manual/docs/connector/multi-method-connector
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * Multi-Method Connector

# Multi-Method Connector
Beside [customizable payment pages](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates), it is possible to create a payment page which prompts the customer to choose his/ her desired payment method. In a nutshell a Multi-Method (Meta-)Connector can present any payment method available on the Merchant's website using configured Connectors. In the Meta-Connector configuration you can decide which payment methods should be available for customers (Availability Rules) and which Connector should be used (Routing Rules) based on different predefined criteria. This section will guide you through the configuration of a Multi-Method (Meta-)Connector and creation of an appropriate [payment selection page](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page).
## Video: Meta Connector[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#video-meta-connector "Direct link to Video: Meta Connector")
![](https://documentation.ixopay.com/manual/assets/ideal-img/preview-vimeo-meta-connector.e3c0a8c.1300.png)
Meta connector
tip
Before we get started with the Multi-Method (Meta-)Connector and related [payment selection page](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page), it is important to note that the setup requires already created Connectors. The very first step for you is therefore to [create connectors](https://documentation.ixopay.com/manual/docs/connector/create) **for each payment method** you want to offer. If you already have configured Connectors you may use those of course instead of creating new ones. However, it is advisable to create new Connectors if you wish to use different Connector configurations (especially for the payment selection page).
## Create Multi-Method (Meta-)Connector[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#create-multi-method-meta-connector "Direct link to Create Multi-Method \(Meta-\)Connector")
Before you can setup a payment selection page, you need to create a so-called Meta-Connector:
  1. From the Merchant Overview navigate to the Connectors Overview of the Merchant for which you want to create the Multi-Method (Meta-)Connector
  2. From the **New Connector** dropdown select the option **+ New Meta-Connector** (see Connector Overview)
  3. Fill in the **Connector Base Data** (see Connector Base Data)
  4. Enable the option **Multi Method (Payment Selection)** and all other applicable options:
    1. Enable/Disable option **Disable connector if no Action defined** (see section Availability Rules - Payment methods)
    2. Enable/Disable option **Retries (max. 9)** and fill in the desired value
    3. Enable/Disable option **Expiry (in hours)** and fill in the desired value —This parameter will set the [Hosted Payment Page](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page) as expired (no impact on transaction states).
  5. Click **Create**

The Meta-Connector is now considered a **Multi-method Meta-Connector** and you will get redirected to the Connector Details Overview.
After creation your Multi-Method (Meta-)Connector can be **edited** any time as described for [Connectors](https://documentation.ixopay.com/manual/docs/connector/create).
![Merchant Overview](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-overview.5856ff6.1280.png)Merchant Overview![Connector Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-overview.ca85a90.1280.png)Connector Overview![Connector Base Data](https://documentation.ixopay.com/manual/assets/ideal-img/connector-base-data.558cb7f.1280.png)Connector Base Data![Connector Config](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config.22e3f27.1280.png)Connector Config![Connector Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview.3a2b0fd.1280.png)Connector Details Overview
## Connector Configuration - Payment methods[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#connector-configuration---payment-methods "Direct link to Connector Configuration - Payment methods")
Let's start with the configuration of payment methods.
  1. Click **Edit** in the Connector Details Overview of your Multi-Method Connector
  2. Select a **Default Connector** per payment method from the drop-down. All configured Connectors for this payment method are shown in the drop-down (see Default Drop-down).
  3. **Enable/Disable** the payment method
  4. Optional select a **Global Routing Profile** from the drop-down (see [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings) for further information)
  5. Click **Save**

The list of available payment methods will vary, depending on the configured Connectors for this Merchant. If you do not want to include a payment method in your payment selection page independently of Availability Rules, do not enable the payment method, otherwise see the **Availability Rules** section for advanced configuration options to show payments method in the payment selection page. Apart from a Default Connector, you can also configure advanced **Routing Rules** per payment method (see section Routing Rules).
For each enabled payment method the **Config** section of the Connector Details Overview shows now to Buttons **Availability Rules** and **Routing Rules**.
![Connector Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview-payment-methods.d084426.1280.png)Connector Details Overview![Default Drop-down](https://documentation.ixopay.com/manual/assets/ideal-img/default-drop-down.cfa37cf.1280.png)Default Drop-down![Connector Details Overview - Availability Rules and Routing Rules](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview-availability-rules-and-routing-rules.a111abb.1280.png)Connector Details Overview - Availability Rules and Routing Rules
note
When adding new Connectors to Merchants, the configured payment method will automatically become available on the Multi-Method (Meta-)Connector in case it was not available before. The payment method will be disabled per default. Payment methods will be automatically disabled if no Default Connector is configured.
## Availability Rules — Payment methods[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#availability-rules--payment-methods "Direct link to Availability Rules — Payment methods")
For all enabled payment methods you have the option to configure rules to define if the payment method is available for selection in the payment selection page (e.g. the Direct Debit payment option should only be made available for customers where the Transaction uses EUR as currency). Follow these steps to configure Availability Rules:
  1. Click **Availability Rules** for the payment method you wish to configure (see Connector Details Overview - Availability Rules and Routing Rules)
  2. In the Rule Editor, select a **condition** from the sidebar on the right (see Rule Editor - Availability)
  3. Place the condition via **drag and drop** from the sidebar in the **existing rule structure** on the left. Alternatively, click on the node and **start typing** the condition you want to add. (see Rule Editor - Condition Configuration)
  4. Configure the **Condition Node** accordingly (see section Conditions & Actions)
  5. Each added condition will automatically generate an **then / else** branch were you can either
    1. **Add** further **conditions** , or
    2. **Add** an **action** to be performed (see Rule Editor - Rule Tree)
  6. Click **Save** to save your Availability Rule Configuration

In theory there is no limitation regarding the depth of branches, but we recommend to keep the structure as simple as possible in order to maintain the Availability Rules properly. You can **hide** the content of nodes or even **delete** nodes any time.
![Rule Editor - Availability](https://documentation.ixopay.com/manual/assets/ideal-img/rule-editor-availability.f448032.1280.png)Rule Editor - Availability![Rule Editor - Condition Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/rule-editor-condition-configuration.0d56a7d.1280.png)Rule Editor - Condition Configuration![Rule Editor - Rule Tree](https://documentation.ixopay.com/manual/assets/ideal-img/rule-editor-rule-tree.74a1196.1280.png)Rule Editor - Rule Tree
tip
Deleting a node with branches removes all following nodes of this branch.
### Conditions & Actions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#conditions--actions "Direct link to Conditions & Actions")
For each **Condition** the transactions' **customer, transaction or risk data** is evaluated against the configured rule. The outcome (either **true** or **false**) defines which path/branch **(then** or **else**) is taken. As described above, each branch can either be an **Action** , or another **Condition**. Actions do not branch further and thereby mark the final step for this branch. They determine if the payment method will be **Enable[d] or Disabled[d]** and therefore will be available to customers. Consequently, Conditions will split in further branches until ending in an Action as final step or, in case no Action is defined, will automatically **enable** this payment method **using the selected Default Connector**.
tip
Enable the setting **Disable Connector if no Action defined** (see section Create Multi-Method (Meta-)Connector), if you **do not want to enable** Payment Methods in case conditions lead to a node with no defined Action.
#### Customer conditions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#customer-conditions "Direct link to Customer conditions")  
| Customer conditions  |   |  
| --- | --- |  
| Customer Billing  | Checks the customer's billing country against the selected Countries  |  
| Customer IP Country  | Checks the customer's country based on their IP against the selected Country  |  
#### Transaction Conditions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#transaction-conditions "Direct link to Transaction Conditions")  
| Transaction Conditions  |   |  
| --- | --- |  
| Transaction Currency  | Checks the Transaction currency against the selected Currency  |  
| Transaction Amount & Currency  | Checks the Transaction amount Base Amount or selected currency against a configured amount. Comparator for check can be selected. (Transaction amount will be converted into the selected currency)  |  
| Transaction Extra Data  | Checks the Transaction Extra Data (to be sent by Merchant) against a configured value. Comparator for check can be selected.  |  
#### Risk Conditions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#risk-conditions "Direct link to Risk Conditions")  
| Risk Conditions  |   |  
| --- | --- |  
| Risk Score  | Checks the Risk Score against the configured score. Comparator for check can be selected.  |  
#### Actions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#actions "Direct link to Actions")  
| Actions  |   |  
| --- | --- |  
| Enable/ Disable Method  | Enables/Disables the method to be available for customer based on the conditions you have defined.  |  
#### Comparator[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#comparator "Direct link to Comparator")  
| Comparator  |   |  
| --- | --- |  
| in  | Checks the value against the list of specified values. Results true if value is included in list.  |  
| not in  | Checks the value against the list of specified values. Results true if value is NOT included in list.  |  
| =  | Checks the value against a specific value. Results true if values are equal  |  
| !=  | Checks the value against a specific value. Results true if values are NOT equal  |  
| >  | Checks the value against a specific value. Results true if the checked value is greater than the specific value.  |  
| >=  | Checks the value against a specific value. Results true if the checked value is greater or equal than the specific value.  |  
| <  | Checks the value against a specific value. Results true if the checked value is smaller than the specific value.  |  
| <=  | Checks the value against a specific value. Results true if the checked value is smaller or equal than the specific value.  |  
### Availability Rules — Example[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#availability-rules--example "Direct link to Availability Rules — Example")
Let's assume we want to offer Direct Debit payments only to customers with billing country Austria or Germany. This is done by adding a condition to check the billing country of the customer.
  1. Navigate to the Availability Rules for Payment Method Direct Debit of your Mulit-Method (Meta-)Connector (see Connector Details Overview - Multi-Method)
  2. Either **drag &drop** or **type** the Condition **Customer Billing Country**
  3. Configure the Condition by selecting the **Comparator in** and **adding** **Countries Austria** and **Germany** (see Availability Rule - Example)
  4. Either **drag &drop** or **type** the Action **Enable/Disable** to both, the **then / else** branch:
    1. For the **then** branch select the Action **Enable,** since this branch will be taken if the Condition evaluation results in **true.**
    2. For the **else** branch select the Action **Disable,** since this branch will be taken if the Condition evaluation results in **false.**

We have now created a working rule set which exclusively allows customers with their billing country being Austria or Germany to choose Direct Debit payments! Let's adjust our rule set by adding another step to this Condition to make sure only Transactions in EUR currency are allowed:
  1. **Drag &drop** the Condition **Transaction Currency** between the **then** label and the **Enable/ Disable Action** branch (see NestedCondition) to create a nested Condition
  2. Configure the Condition adjusting the **Transaction Currency** to **EUR - Euro**
  3. Move the **Enable** Action used in the original **then** branch of the condition **Customer Billing Country** to the **then** branch of the condition **Transaction Currency** (see Moving Nodes)
  4. Either **drag &drop** or **type** the Action **Enable/Disable** to the **else** branch of the condition **Transaction Currency** and select **Disable** (see Availability Rule - Example adjusted)
  5. Click **Save**

It might look confusing at first, but it is actually quite straightforward. What this rule set does is:
  * Check if the **Customer Billing Country** in the list of accepted countries (Austria, Germany)
    * If yes: Is the **Transaction Currency** EUR - Euro?
      * If yes: **Enable** the payment method
      * if no: **Disable** the payment method
    * If no: **Disable** the payment method

By nesting multiple conditions it is possible to make complex and dynamic decisions on whether a payment method should be made available to a customer or not.
![Connector Details Overview - Multi-Method](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview-multi-method.9b7be8d.1280.png)Connector Details Overview - Multi-Method![Availability Rule - Example](https://documentation.ixopay.com/manual/assets/ideal-img/availability-rule-example.a2c40ca.1280.png)Availability Rule - Example![Nested Condition](https://documentation.ixopay.com/manual/assets/ideal-img/nested-condition.d683894.1280.png)Nested Condition![Moving Nodes](https://documentation.ixopay.com/manual/assets/ideal-img/moving-nodes.c8b0a00.1280.png)Moving Nodes![Availability Rule - Example adjusted](https://documentation.ixopay.com/manual/assets/ideal-img/availability-rule-example-adjusted.c83d6d3.1280.png)Availability Rule - Example adjusted
tip
Conditions or Actions which are logically invalid are automatically discarded upon saving.
## Routing Rules — Payment Methods[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#routing-rules--payment-methods "Direct link to Routing Rules — Payment Methods")
For all enabled payment methods you have the option to configure rules to define which Connector should be used. Consequently this feature is only useful in case of multiple Connectors configured for the same payment method. Follow these steps to configure Routing Rules:
  1. Click **Routing Rules** for the payment method you wish to configure (see Connector Details Overview - Availability Rules and Routing Rules)
  2. In the **Rule Editor** , select **Conditions and Actions** from the sidebar on the right (see Rule Editor - Routing)
  3. Click **Save** to save your Routing Rule Configuration

You can check, if Routing Rules are configured for a Payment Method in the Connector Details Overview (see Routing Rules Check). If the Routing Rules Box is checked, Routing Rules are available.
In general setting up a rule set works the same way as for [**Availability Rules**](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#availability-rules--payment-methods) with different **Conditions** and **Actions** available. You may also refer to [Routing, Cascading, Balancing, Fallback](https://documentation.ixopay.com/manual/docs/connector/routing-cascading-balancing-fallback) (Connectors) for further information about how to set up a rule set. In this section we focus on Conditions and Actions specific to Routing Rules.
One difference between **Routing Rules** and **Availability Rules** is the **Action** element: **Route To Connector** specifies to which Connector a Transaction is routed. Additionally you may also add a second **Route To Connector** Action to define a backup Connector in case the first one experiences issues. This is done as follows:
  1. Either **drag &drop** or **type** the Action **Route to Connector** in the **then/else** branch, depending for which branch you want to define a backup Connector
  2. Either **drag &drop** or **type** the Action **Route to Connector** for the node below the first Action (see Define Backup Connector)

![Routing Rule Check](https://documentation.ixopay.com/manual/assets/ideal-img/routing-rule-check.03f9a38.1280.png)Routing Rule Check![Define Backup Connector](https://documentation.ixopay.com/manual/assets/ideal-img/define-backup-connector.61f680e.1280.png)Define Backup Connector![Rule Editor - Routing](https://documentation.ixopay.com/manual/assets/ideal-img/rule-editor-routing.8dbce26.1280.png)Rule Editor - Routing
### Routing Rules — Example[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#routing-rules--example "Direct link to Routing Rules — Example")
Let's assume we want to route Transactions based on the BIN country of the credit card. If the BIN Country is Austria, the Connector ACME IDN Braintree CC is used (see Routing Rule - Example). If this Connector experiences issues the Transaction would be routed to ACME IDN Stripe CC. Lastly, in case the BIN Country is not Austria, the Transaction will be routed to ACME IDN PayU CC.
![Routing Rule - Example](https://documentation.ixopay.com/manual/assets/ideal-img/routing-rule-example.29cb5bf.1280.png)Routing Rule - Example
### Conditions & Actions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#conditions--actions-1 "Direct link to Conditions & Actions")
Similar as for Availability Rules, for Routing Rules with each Condition the **card, IBAN, customer data, transaction or risk check data** is evaluated against the configured rule. The outcome (either true or false) defines which path/branch (then or else) is taken. As for Availability Rules also for Routing Rules, each branch can either be an Action, or another Condition with the exception that two Actions can be defined for the same branch in case of backup Connectors (see section Routing Rules - Payment Methods). Actions do not branch further and thereby mark the final step for this branch. They determine to which connector the transaction will be routed to. Consequently, Conditions will split in further branches until ending in an Action as final step or, in case no Action is defined, will automatically route to the selected Default Connector.
tip
For payment method credit card you might want to enable the settings **Re-Route Recurring Transactions** to ensure that recurring transactions do not use the connector of the initial register transaction, but get routed according to the configured routing rules. **Convert Debit to Preauthorize** should be enabled in case connectors do only support transaction types pre-auth.
![Re-Route recurring transactions](https://documentation.ixopay.com/manual/assets/ideal-img/reroute-recurring-transactions.8b16d93.1280.png)Re-Route recurring transactions
#### Card Data[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#card-data "Direct link to Card Data")  
| Card Data  |   |  
| --- | --- |  
| Credit Card Brand  | Checks the brand of the Credit Card  |  
| Credit Card BIN Country  | Checks the BIN country of the Credit Card  |  
| Credit Card BIN Level  | Checks the BIN level of the Credit Card  |  
| Credit Card BIN Type  | Checks the BIN type of the Credit Card  |  
| Credit Card Token Type  | Checks the Token Type (Creditcard, Passthrough, Apple Pay, Google Pay)  |  
| BIN Regular Expression Check  | Checks the BIN against a defined Regular Expression  |  
#### IBAN Data[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#iban-data "Direct link to IBAN Data")  
| IBAN Data  |   |  
| --- | --- |  
| IBAN Regular Expression Check  | Checks an IBAN against a defined Regular Expression  |  
| Check IBAN position vaule  | Checks an IBAN against a specific value on a specific position  |  
#### Customer Data[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#customer-data "Direct link to Customer Data")  
| Customer Data  |   |  
| --- | --- |  
| Customer Billing Country  | Checks the billing country of the customer  |  
| Customer IP Country  | Checks the customers IP Country  |  
#### Transaction Data[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#transaction-data "Direct link to Transaction Data")  
| Transaction Data  |   |  
| --- | --- |  
| Random Load Balancer  | The condition has a random chance to be true based on the given percentage  |  
| Transaction Extra Data  | The condition compares an extra data value with the given value  |  
| Is Recurring  | Checks if the Transaction is Recurring  |  
| Transaction Type  | Checks the type of Transaction  |  
| Connector of Initial Transaction  | Checks if the Connector of the initial Transaction is the specified Connector  |  
| Transaction Currency  | Checks the Transaction Currency  |  
| Transaction Amount & Currency  | Checks the Transaction (Base or Currency) Amount against a specific value.  |  
#### Risk Check Data[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#risk-check-data "Direct link to Risk Check Data")  
| Risk Check Data  |   |  
| --- | --- |  
| Risk Score  | Checks the Transactions risk score against a specific value  |  
| Chargeback count/volume  | Checks either the chargeback count or value of either the Merchant or specific Connector against a specifc value. Reference time can be specified.  |  
| Debit/Preauth count/volume  | Checks either the debit/preauth count or value of either the Merchant or specific Connector against a specifc value. Reference time can be specified.  |  
#### Actions[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#actions-1 "Direct link to Actions")  
| Actions  |   |  
| --- | --- |  
| Route to Connector  | Specify the connector to be routed to from the list of available Connectors configured for the payment method  |  
Comparator options are equal to the [Availability Rule Comparators](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#comparator). As for Availability Rules you can also **hide** or **delete** Routing Rules (see Rule Editor - Rule Tree)
## Advanced Configuration[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#advanced-configuration "Direct link to Advanced Configuration")
Advanced configurations can either be set up during the initial Connector Creation (see Connector Config) or edited in the Connector Details Overview (Default Drop-down).
### Retries[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#retries "Direct link to Retries")
Using **Retries** you can allow the customers to retry the payment with a different payment method in case the payment has failed. In this case, the customer is redirected back to the payment selection page. You can configure the max. number of retries (max. 9).
You may also want to adopt the payment selection page in this case to inform the customer about the failed attempt. Insert the following [placeholder](https://documentation.ixopay.com/manual/docs/fast) into your payment template:
```

{{ isRetry }}  

```or alternatively use:
```

{% if isRetry %}  

```In addition you might want to show the customer previous transaction errors (only available for retries) using the `{{ previousTransactionErrors }}` array of all previous transaction error objects:
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```You can loop through the array to show all previous errors to the customer:
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```Or even changing or translating the error message, based on the error code (refer to [/docs/reference/appendix/error-codes](https://documentation.ixopay.com/docs/reference/appendix/error-codes))
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```In case you just want to retrieve the last error, simply use
```

{% set lastErr = previousTransactionErrors|last %}  

```### Expiry time[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#expiry-time "Direct link to Expiry time")
Lastly, you can define an expiry time in hours. The payment selection page will be valid and can be accessed within the given time frame.
You may also want to adopt the payment selection page in this case to inform the customer about the remaining time. Insert the following placeholder into your payment template:
```

{{ expirationDate }}  

```tip
The expiration date will be a string containing the date and time of expiry in the given format: `YYYY-MM-DD hh:mm:ss Timezone`, e.g. 2020-01-01 00:00:00 UTC.
Once the the payment selection page is expired, it is recommended to add an expiry check inside the payment template to display an appropriate error screen to customers, e.g.
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```
```

{{ isRetry }}  

```
```

{% if isRetry %}  

```
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```
```

{% set lastErr = previousTransactionErrors|last %}  

```
```

{{ expirationDate }}  

```
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```
```

{{ isRetry }}  

```
```

{% if isRetry %}  

```
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```
```

{% set lastErr = previousTransactionErrors|last %}  

```
```

{{ expirationDate }}  

```
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```
```

{{ isRetry }}  

```
```

{% if isRetry %}  

```
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```
```

{% set lastErr = previousTransactionErrors|last %}  

```
```

{{ expirationDate }}  

```
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```  * [Video: Meta Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#video-meta-connector)
  * [Create Multi-Method (Meta-)Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#create-multi-method-meta-connector)
  * [Connector Configuration - Payment methods](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#connector-configuration---payment-methods)
  * [Availability Rules — Payment methods](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#availability-rules--payment-methods)
    * [Conditions & Actions](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#conditions--actions)
    * [Availability Rules — Example](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#availability-rules--example)
  * [Routing Rules — Payment Methods](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#routing-rules--payment-methods)
    * [Routing Rules — Example](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#routing-rules--example)
    * [Conditions & Actions](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#conditions--actions-1)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#advanced-configuration)
    * [Retries](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#retries)
    * [Expiry time](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector#expiry-time)
```

{{ isRetry }}  

```
```

{% if isRetry %}  

```
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```
```

{% set lastErr = previousTransactionErrors|last %}  

```
```

{{ expirationDate }}  

```
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```
```

{{ isRetry }}  

```
```

{% if isRetry %}  

```
```

 "previousTransactionErrors" => [  

    0 => [  

      "code" => "2006"  

      "message" => "The card has insufficient funds"  

      "adapter_code" => "insufficient_funds"  

      "adapter_message" => "Insufficient funds"  

    ]  

    1 => [  

      "code" => "2003"  

      "message" => "The transaction was declined"  

      "adapter_code" => "transaction_declined"  

      "adapter_message" => "Test decline"  

    ]  

    // ...  

  ]  

```
```

{% for err in previousTransactionErrors %}  

  <pre>  

    Code: {{ err.code }}  

    Message: {{ err.message }}  

    Adapter Code: {{ err.adapter_code }}  

    Adapter Message: {{ err.adapter_message }}  

  </pre>  

{% endfor %}  

```
```

{% if err.code == '2003' %}  

  Transaction declined  

{% endif %}  

```
```

{% set lastErr = previousTransactionErrors|last %}  

```
```

{{ expirationDate }}  

```
```

{% if isExpired %}  

  This page has expired.  

{% endif %}  

```