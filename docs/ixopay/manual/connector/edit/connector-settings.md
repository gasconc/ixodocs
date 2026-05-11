---
title: Connector Settings
summary: ' Edit Connectorshttps://documentation.ixopay.com/manual/docs/connector/edit  Connector
  Settings'
tags:
- api-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-api-settings-direct-link-api-settings
- user-interface-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-user-interface-settings-direct-link-user-interface-settings
- payment-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-payment-settings-direct-link-payment-settings
- transaction-processing-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-transaction-processing-settings-direct-link-transaction-processing-settings
- risk-engine-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-risk-engine-settings-direct-link-risk-engine-settings
- notifications-postback-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-notifications-postback-settings-direct-link-notifications-postback-settings
- account-updater-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-account-updater-settings-direct-link-account-updater-settings
- post-processing-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-post-processing-settings-direct-link-post-processing-settings
- external-risk-checks-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-external-risk-checks-settings-direct-link-external-risk-checks-settings
- expert-settings-migration-settings-https-documentation-ixopay-com-manual-docs-connector-edit-connector-settings-expert-settings-migration-settings-direct-link-expert-settings-migration-settings
source_url: https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings
portal: ixopay-manual
updated: '2026-05-11'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Edit Connectors](https://documentation.ixopay.com/manual/docs/connector/edit)
  * Connector Settings

# Connector Settings
For each Connector you have the option to add and change additional Connector Settings. Find the list of Settings sorted by topic below.
info
Some Settings only need to be activated (no further input needed). In this case the value to activate the feature is stated in the table as well.
## API Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#api-settings "Direct link to API Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| API: Enable Request Signing  | Force signing of requests as described in the API Documentation  | 1  |  
| Status API: Report incoming settlement state  | Include "incomingSettlementState" info on the Status API response  | 1  |  
| API: Mask IBANs in Responses  | Mask IBAN data in any response on API  | 1  |  
## User Interface Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#user-interface-settings "Direct link to User Interface Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Enable Refunds in UI  | Enable the "Refund" button in the TX Detail View for Merchant Users  | 1  |  
## Payment Page Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#payment-page-settings "Direct link to Payment Page Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Use legacy view rendering  | Deprecated - do not use anymore  |   |  
| View: Use merchant defined template  | Deprecated - do not use anymore  |   |  
| View: Allow merchant template upload  | Deprecated - do not use anymore  |   |  
| Preemptive Payment Form: Enabled  | Deprecated - do not use anymore  |   |  
| Payment View: Don't use Country Dropdown  | Deprecated - do not use anymore  |   |  
| Payment View: Don't use Expiration Dropdown  | Deprecated - do not use anymore  |   |  
| View: Allow amount change  | Enables the amount to be changed on the hosted payment page (additional code snippets needed in HPP)  | 1  |  
| Redirect type for HTML result (iframe or fullpage)  | The API responds with a "redirectType" in case of a necessary redirection to HPP. With this setting, you can control the type. This should be in accordance with your HPP layout.  | iframe, fullpage  |  
| Backdirect: Show loading screen while loading  | Enables a loading screen once the customer submits the payment form or 3DS form. This can greatly reduce double-submissions.  | 1  |  
| Backdirect: Show loading screen until final state  | Enables a loading screen for transactions, that do not immediately succeed, but take some seconds/minutes to do so.  | 1  |  
| Backdirect: Show Mastercard Sonic while loading  | Enables a loading screen, showing the Mastercard Sonic animation for Mastercard payments.  | 1  |  
| Backdirect: Mastercard Sonic Background  | Defines the background for the Mastercard Sonic screen  | clear, dark  |  
| Multimethod Connector: Route customer profile transactions to originating connector  | Ignores routing rules for stored payment methods, and routes them to the initial connector instead  | 1  |  
| ApplePay: Hosted Payment Page Config  | Option to include the ApplePay Button for the [IXOPAY](https://www.ixopay.com) Hosted Payment Page (additional code snippets needed in HPP)  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/applepay-googlepay)  |  
| HPP: Allow Overwrite Customer Data  | Allows the customer to overwrite its own data on the HPP  | 1  |  
| googlepay:hpp-config  | Option to include the GooglePay Button for the IXOPAY Hosted Payment Page (additional code snippets needed in HPP)  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/applepay-googlepay)  |  
| HPP: enable Surcharge Calculation  | [Enables Surcharge calculation to be added to the IXOPAY Hosted Payment Page (additional code snippets needed in HPP)](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge)  | 1  |  
| HPP: enable GST Calculation  | [Enables GST calculation to be added to the IXOPAY Hosted Payment Page (additional code snippets needed in HPP)](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge)  | 1  |  
| Enable Card Subbrand Selection  | [Allows selection of sub-brand of card (e.g. Carte Bancairs) (additional code snippets needed in HPP)](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection)  | [1](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection)  |  
| Allow merchant metadata overriding  | [Allows the customer by entering data in the HPP to overwrite the merchant metadata (additional hidden placeholder in HPP needed)](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/overwritemerchantmeta)  | [1](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/overwritemerchantmeta)  |  
## Transaction Processing Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#transaction-processing-settings "Direct link to Transaction Processing Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Send chargeback on refund  | If a refund is reported, a chargeback notification will be triggered instead. This is for shop systems, that cannot deal with Refunds  | 1  |  
| Manipulation: Prepend UUID in description  | The "description" sent to the PSP will be prepended with the transaction's UUID  | 1  |  
| Manipulation: Field Operation  | Add as many Field Operation (e.g. Field truncation) Manipulations as you need  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/field-operation)  |  
| Manipulation: Always set withRegister  | Always sets the "withRegister" flag on any debit/preauthorize TX  | 1  |  
| Transactions: Expire automatically after (x) minutes (min. 5 minutes)  |  **Deprecated** - use _Expire transaction with a given status after given minutes_  
| Expires pending transactions after given minutes  |  **Deprecated** - use _Expire transaction with a given status after given minutes_  
| Expire transaction with a given status after given minutes  | Configure a list of transaction states which will change the transaction status to error ("Transaction Expired" with error code 2005) after the configured expiry time. The value is in minutes and must be `> 5`. The setting is used to change a transaction into a final state in situations where an expected update from the upstream PSP is missing, e.g. via webhook.  
  
Available states:  

  * pending
  * pending_postback
  * pending_dcc
  * redirected
  * await_redirect
  * await_completion

 |   |  
| Batch Capture: Time (HH:MM)  |  **Deprecated** - do not use anymore  |   |  
| Batch Capture: Pessimistic (stays pending)  | Transactions needing a capture batch (as of now Amex), will stay in PENDING until finally settled  | 1  |  
| Chargeback: Start representment flow on chargeback  | Triggers a Chargeback Representment flow on Merchant Interface once a Chargeback is raised  | 1  |  
| Chargeback Reversal: Ignore  | Ignore Chargeback Reversals completely  | 1  |  
| Chargeback Reversal: Inform Email  | If a Chargeback Reversal comes in, notify the given email address  | email address  |  
| Meta-Connector: Re-Route Refunds  | Enabled re-routing of Refunds considering the Routing Rules  | 1  |  
| Customer Data: Copy from referenced transaction  | Copies all customer data from the referenced transactions (for CoF and Recurring transactions)  | 1  |  
| Hooks: Transaction Success  | Enables various actions once a transaction succeeds (e.g. trigger email sending through Sendgrid)  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks)  |  
| 3DSecure: Check  | Sets a fixed 3D-Secure Requirement flag on any transaction  | optional (not for recurring), mandatory (not for recurring), optional (for all), mandatory (for all)  |  
| Convert Register to Debit Transaction  | For Payment Methods that do not support Register transactions, this will convert a Register transaction to a Debit with the configured amount  | various  |  
| Set Customer Identification if empty  | Sets the customer identification field if it's empty to the given value  | uuid, merchant transaction id, Pseudo Random (base-62 encoded UUID with 14 characters)  |  
| Overwrite customer billing country with:  | Overwrites the customer billing country to a fixed value. This can be used e.g. for methods, which enforce a certain billing country, e.g. P24  | country code  |  
| Virtual Terminal: No CVV required  | Disables the CVV requirement on the Virtual Terminal  | 1  |  
| Set available transaction types for virtual terminal  | Select the transaction types that should be available in the Virtual Terminal  
**Note:** Connector needs to be activated to be **Available on Terminal**  | transaction types  |  
| Intermediate Redirect: Enabled  | This enabled the intermediate redirect flow for Payment Selection Pages, refer to API Docs: [Intermediate Redirects](https://documentation.ixopay.com/docs/reference/features/payment-method-selection/intermediate-redirects).s  | 1  |  
| Allow over-capture by x %  | Enables higher capture amount than preauthorized amount  | number  |  
| Use description as dynamic descriptor  | This sets the given "description" field as dynamic descriptor on supported PSPs  | 1  |  
| Copy TX Data: Field to Field  | Copies data from one field to another, depending on the setup  | various  |  
| Connector IP ACL  | Enforces an IP address check. Only the configured IPs will be allowed to send transactions to this connector  | 1 entry per row; provide either a single IP or a range via CIDR notation.  |  
| Marketplace: Enforce Transaction Splits  | Enforces that transaction splits were given on API Request; used for marketplace connectors  | 1  |  
| Payout: Check constraints  | This enables the constraint check (from the connector config) to also be applied on Payouts (enabled currencies, mandatory fields)  | 1  |  
| Enable Surcharge Calculation  | [Enables surcharge calculation on Virtual Terminal (misc.virtual-terminal.surcharge respective frontend.virtual-terminal.surcharge permission must be enabled for users)](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/surcharge)  | 1  |  
| RegExp Check for Description  | Checks the description field of a transaction  | Regex  |  
| Generate redirect QR Code  | QR Code with redirectUrl base64 encoded will be included in the response  | Disable, enable and Margin in numbers  |  
| Copy Description to Chargeback  | Copies the Description of the original transaction to the Chargeback transaction  | Disable, enable  |  
| Meta-Connector: Re-Route Refunds  | Enabled re-routing of Refunds considering the Routing Rules  | 1  |  
| Meta-Connector: Re-Route Payouts  | Enabled re-routing of Payouts considering the Routing Rules  | 1  |  
| Meta-Connector: ApplePay Decryption Before Routing  | Decrypt Apple Pay token before routing to support card data routing rules  | 1  |  
| Meta-Connector: GooglePay Decryption Before Routing  | Decrypt Google Pay token before routing to support card data routing rules  | 1  |  
| Set static description if not already provided  | Sets a static description in case no description is provided in the transaction request  | String  |  
| Network Tokenization Setting  | Enables configuration of network tokenization processing behaviour  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting)  |  
## Risk-Engine Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#risk-engine-settings "Direct link to Risk-Engine Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Risk Engine: Enable manual review for recurring transactions  | Enables the manual review also be applied on recurring transactions (if triggered through Risk Check)  | 1  |  
| Risk Engine: Manual Review Requirements  | This configures, how many users with which roles have to approve a manual review transaction  | various  |  
| Risk Engine: Store Test Transaction too  | For any velocity/threshold risk checks, Test transactions are usually ignored. This also includes them. (e.g. Count of payment instruments per customer etc.)  | 1  |  
| Risk Engine: Manual Review Delay  | This defines after which period a manual review transaction is automatically approved/declined  | various  |  
| Risk Engine: Push Transaction Check  | Enables risk checks to be executed on push transactions too. They will not change their state, but alerts will be triggered  | 1  |  
## Notifications & Postback Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#notifications--postback-settings "Direct link to Notifications & Postback Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Postback/Status: Include adapter reference id in postback and status response  | Includes the adapter reference ID in postback notifications and Status IP  | 1  |  
| Postback/Status: Include Auth-Code in postback/response and status response  | Includes the authCode in postback notifications and Status IP  | 1  |  
| Postback/Status: Include connector info in postback and status response  | Includes the connector data (GUID) in postback notifications and Status IP  | 1  |  
| Postback/Status: Include captureId for debit transactions in postback request and status response if available  | Includes the captureId in postback notifications and Status IP  | 1  |  
| Postback/Status: Include is AFT in postback/status response  | Returns the isAFT indicator in API response if AFT (Account Funding Transaction) was performed for this specific transaction. Currently only supported by NuveiPCI adapter  | 1  |  
| Postback: Send on capture and void (to preauth postback url)  | Also send postback notifications for capture and void transactions  | 1  |  
| Postback: Send on deregister (to register postback url)  | Also send postback notifications for deregister transactions  | 1  |  
| Postback: Send on PENDING status  | Also send postback notifications for transactions reaching a PENDING status  | 1  |  
| Postback: Suppress all outgoing postbacks  | Disables all outgoing postback notifications  | 1  |  
| Postback: Use RFC compliant Time zone  | By default postbacks are using UTC as timezone in Date header, with this setting it is changed to GMT  | 1  |  
| Postback: Send Accept: text/plain header  | This sets the Accept header for outgoing postbacks (some systems might need that)  | 1  |  
| Postback: Send User-Agent header  | This sets the User-Agent header for outgoing postbacks (some systems might need that)  | 1  |  
| Postback Queue: Set maximum number of retries  | Sets the number of retries IXOPAY will perform for failed postback notifications  | number  |  
| Postback: Always use URL from Reconciliation Settings  | Always sends postback notifications to the URL from the Reconciliation settings, instead of using the callbackUrl from API  | 1  |  
| Risk Engine: Show Risk Check Data in API Result  | Includes Risk Score and Final action API Response  | 1  |  
| Email Sender Name  | Sets the email sender name for any outgoing email (Pay- By-Link, only to be used if tenant is connected to your own mail system)  | string  |  
| Email Sender Address  | Sets the email sender address for any outgoing email (Pay-By-Link, only to be used if tenant is connected to your own mail system)  | string  |  
| Postback/Status: Override Payment Method Name  | Overrides the "paymentMethod" field for any outgoing postback notification to this value  | string  |  
| Postback: Send After Each Notification  | Usually postbacks are only sent if a status changes, this forces it to be sent with every incoming notification we receive from the PSP  | 1  |  
| Virtual Terminal Notification URL  | Set a Notification URL for Virtual Terminal Transactions  | string  |  
| Virtual Terminal: Send a confirmation email after a successful transaction  | Triggers sending of confirmation email for every Virtual Terminal transactions (otherwise only for Pay-By-Link transactions)  | 1  |  
| Hide Customer Data in API Response/Notification  | Excludes customer Data in API Responses and Notifications  | 1  |  
| Hide Cardholder in API Response/Notification  | Excludes Cardholder in API Responses and Notifications  | 1  |  
| Postback: Include 3DS Data  | Includes 3DS Data ( 3DS Version, 3DS Attempted, 3DS Challenge performed, 3DS TransactionStatus codes, Exemption Flag (according to 3DS standard), AuthenticationTimestamp, DateTime, TransStatusReason, ECI, XID/DSTransId, ACSTransId) in postback  | 1  |  
| Handle unknown transactions postbacks  | Option to determine how to IXOPAY unknown transaction postbacks should be handled  | [various](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/handle-unknown-tx-pb)  |  
| Postback/Notification: Trigger Postback Failed notification after (x) amount of tries  | Sets the failure threshold for [Failed Postback alerts](https://documentation.ixopay.com/manual/docs/administrative-tools/manage-and-visualize-alerts): an alert is sent when postback sending fails more than the configured number of times. Without this threshold, no Failed Postback alert is emitted.  | number  |  
| Postback: Send Basic-Auth header  | Use a Basic-Authentication header for postbacks.  | Basic-Auth Username (string), Basic-Auth Password (string)  |  
| Postback/Status: Include schemeTransactionIdentifier in postback/status response  | In case an adapter supports providing the Scheme Reference ID, the parameter can be included in the outgoing postback notification / status response  | 1  |  
| Postback/Status: Include original adapter reference id in postback request and status response  |   | 1  |  
| Postback/Status: include reference uuid for all subsequent transactions in postback request and status response  |   | 1  |  
| Postback: Defer sending until after the API response has been returned  | By default, postbacks are synchronous. Enable this setting to send the postback asynchronously after the API response is returned.  | 1  |  
## Account Updater Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#account-updater-settings "Direct link to Account Updater Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Account Updater: Enable  | [Enables the account updater feature on that connector](https://documentation.ixopay.com/manual/docs/tokenization/account-updater)  | 1  |  
## Post-Processing Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#post-processing-settings "Direct link to Post-Processing Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Fees: Calculate Register for Combined Transaction Types (e.g. Debit with Register)  | If a Preauthorize or Debit is "withRegister", also the Register fees will be calculated for it  | 1  |  
| Merchant Settlement: No Rolling Reserve  | Ignore Rolling Reserve calculation for this connector in a merchant settlement job  | 1  |  
| Reconciliation: Returns processor id  | If the reconciliation data processed by the Data Fetcher does not include the PSP's transaction ID, but the ID from the payment processor, this should be enabled  | 1  |  
| Provider Settlement: Create unknown transactions  | Create any unknown transaction that IXOPAY receives through provider settlement data (e.g. Chargebacks)  | 1  |  
| Set Meta-Data for unknown created Transactions  | For unknown transactions, that were created through Reconciliation or Settlement, set the merchantMetaData field to this value  | string  |  
| Provider Settlement: Accept from other provider GUIDs (comma-separated)  | If settlement data is received through a different configured provider, you can add the Provider GUID here  | GUIDs  |  
| Reconciliation: Ignore different adapter TxId for chargebacks  | If in the Reconciliation file the adapter TxId for a chargeback is different than in IXOPAY the system ignores the conflict  | 1  |  
| Reconciliation: Use reference merchant tx id for unknown transactions  | If the reconciliation data contains unknown transactions the reference merchant tx id of the reference transaction should be used as merchant tx id  | 1  |  
## External Risk Checks Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#external-risk-checks-settings "Direct link to External Risk Checks Settings")  
| Setting name  | Description  |  
| --- | --- |  
| Kount: Merchant ID  | Configuration for Kount External Risk Check  |  
| Kount: Use Kount Sandbox  | Configuration for Kount External Risk Check  |  
| Kount: Init Scripts Automatically (0\1)  | Configuration for Kount External Risk Check - perform init scripts automatically in payment.js  |  
| Kount: API Key  | Configuration for Kount External Risk Check  |  
| Kount: Fields (in JSON format)  | Configuration for Kount External Risk Check  |  
| Kount: Enable Update Calls  | Configuration for Kount External Risk Check  |  
| Forter: Site Id  | Configuration for Forter External Risk Check: Can be found in the [Forter Developer API reference](https://portal.forter.com/app/developer/api/api/general/introduction) for your account  |  
| Forter Site Key  | Configuration for Forter External Risk Check: Can be found in the [Forter Developer API reference](https://portal.forter.com/app/developer/api/api/general/introduction) for your account  |  
| Forter: Init Scripts automatically  | Configuration for Forter External Risk Check: Insert 1 to enable the collection of additional data using payment.js.  |  
| Forter: Status API enabled  | Configuration for Forter External Risk Check: Insert 1 in case the Status API is enabled  |  
| Forter: Claim API enabled  | Configuration for Forter External Risk Check: Insert 1 in case the Claim API is enabled  |  
| Forter: Merchant Id (ExtraData: FORTER_MERCHANT_ID)  | Optional configuration for Forter External Risk Check: For more information have a look in the [Forter Developer API reference MerchantIdentifiers](https://portal.forter.com/app/developer/api/api/data-objects/MerchantIdentifiers)  |  
| Forter: Merchant Name (ExtraData: FORTER_MERCHANT_NAME)  | Optional configuration for Forter External Risk Check: For more information have a look in the [Forter Developer API reference MerchantIdentifiers](https://portal.forter.com/app/developer/api/api/data-objects/MerchantIdentifiers)  |  
| Forter: Merchant Domain (ExtraData: FORTER_MERCHANT_DOMAIN)  | Optional configuration for Forter External Risk Check: For more information have a look in the [Forter Developer API reference MerchantIdentifiers](https://portal.forter.com/app/developer/api/api/data-objects/MerchantIdentifiers)  |  
| Forter: Default Order Type (ExtraData: FORTER_ORDER_TYPE)  | Optional configuration for Forter External Risk Check  |  
| Forter: Default Delivery Type (ExtraData: FORTER_DELIVERY_DETAILS_DELIVERY_TYPE)  | Optional configuration for Forter External Risk Check  |  
| Forter: Default Delivery Method (ExtraData: FORTER_DELIVERY_DETAILS_DELIVERY_METHOD)  | Optional configuration for Forter External Risk Check  |  
| Forter: Default Item Type (ExtraData: FORTER_ITEM_TYPE)  | Optional configuration for Forter External Risk Check  |  
## Expert Settings & Migration Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#expert-settings--migration-settings "Direct link to Expert Settings & Migration Settings")  
| Setting name  | Description  | Values  |  
| --- | --- | --- |  
| Registration Sharing: Connector GUIDs (comma-separated)  | Allows Register transactions of this connector to be shared with other connectors (list GUIDs here). Note: this setting only works for non-PCI adapters  | GUIDs  |  
| Accept postbacks from other connectors (list GUIDs comma-separated)  | Sometimes the PSP only allows configuring 1 callback notification URL. This setting allows using 1 callback notification URL to be shared with multiple connectors.  
  
The setting must be added on the connector which is designated to receive the callbacks. To configure the setting, input multiple connector GUIDs separated by a comma which will share the same callback URL as the connector where the setting is configured at.  
  
**Note**  
Currently the sharing only works between connectors of the exact same adapter. In certain cases sharing may still be possible between different adapter versions of the same provider, such as:  

  * AdyenCheckout, AdyenCheckoutPci and AdyenPci
  * PaymentsOs and PaymentsOsPci
  * Paygate and PaygatePci
  * EbanxHPP and EbanxPci
  * MultiSafepay and MultiSafepayPci
  * IngenicoDirect and IngenicoDirectPci

 | GUIDs  |  
| Postback: Override API Key for outgoing Postbacks  | Deprecated - do not use anymore Override the API Key value for outgoing postbacks (XML Interface only)  | string  |  
| Postback Notification: Use old service name ("IxoPay") instead of new ("Gateway")  | Deprecated - do not use anymore  | -  |  
| Vault: External Vault Connector GUID  | Special setting for 3rd party vaulting, please clarify with your IXOPAY consultant  | -  |  
| Migrated Connector GUIDs (comma-separated)  | Special setting for migrating connectors, please clarify with your IXOPAY consultant  | -  |  
| Anti Fraud Stack  | Deprecated - do not use anymore  | -  |  
| Use Merchant TX-ID as Customer identification in Adapter  | Sets the given merchant transaction ID as customer.identification when calling the PSP. Any saved customer identification for the customer will not be overwritten using this setting.  | 1  |  
| Use Merchant TX-ID as Transaction ID in Adapter  |   |   |  
## Sendgrid Email Settings[​](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings#sendgrid-email-settings "Direct link to Sendgrid Email Settings")
The [IXOPAY platform](https://www.ixopay.com) enables you to make emails more recognizable and consistent with your brands by enabling you to set up a custom domain so notifications emails are sent from your domain instead of ixopay.com. Further details can be found in the [Mail Settings](https://documentation.ixopay.com/manual/docs/system-setup/tenants/mail-settings). To use the [Pay-By-Link](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink) feature, you can also connect to your Sendgrid account on connector level by using Sendgrid Email Settings:  
| Setting Name  | Description  | Values  |  
| --- | --- | --- |  
| Sendgrid: API Key  | Input field to insert the Sendgrid API Key  | string  |  
| Sendgrid: Template ID for confirmation email  | Input field for the Template ID to be used for the confirmation email sent by the Pay-By-Link Feature  | string  |  
| Sendgrid: Template ID for payment link email  | Input field for the Template ID to be used for the payment link email sent by the Pay-By-Link Feature  | string  |  
| Sendgrid: Sender email address  | Input field for the sender email address to be used by the connector to send outbound emails  | string  |  
| Sendgrid: Sender name  | Input field for the sender name to be used by the connector to send outbound emails  | string  |