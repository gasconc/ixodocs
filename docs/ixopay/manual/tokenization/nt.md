---
title: Network Token Services
summary: ' Network Token Services'
tags:
- ixopay-network-token-services-permissions-https-documentation-ixopay-com-manual-docs-tokenization-ixopay-network-token-services-permissions-direct-link-ixopay-network-token-services-permissions
- merchant-enrollment-https-documentation-ixopay-com-manual-docs-tokenization-merchant-enrollment-direct-link-merchant-enrollment
- connector-configuration-https-documentation-ixopay-com-manual-docs-tokenization-connector-configuration-direct-link-connector-configuration
- transaction-processing-network-tokens-https-documentation-ixopay-com-manual-docs-tokenization-transaction-processing-network-tokens-direct-link-transaction-processing-network-tokens
- network-token-lifecycle-https-documentation-ixopay-com-manual-docs-tokenization-network-token-lifecycle-direct-link-network-token-lifecycle
- api
- pci
- tokenization
- ixopay
- authorization
source_url: https://documentation.ixopay.com/manual/docs/tokenization/nt
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* [Tokenization](https://documentation.ixopay.com/manual/docs/tokenization)
  * Network Token Services

# Network Token Services
Full version: add-on
If you want to get access to this [IXOPAY platform](https://www.ixopay.com) feature you need an add-on to your plan. Please contact our sales team or your Customer Success Manager for more information.
Network tokenization uses random unique merchant-specific tokens for credit cards, the so-called network tokens, directly **issued by credit card schemes** (Visa, Mastercard). Changes to the underlying PAN data are automatically updated by the schemes and do not require a new token to be generated. Instead, the existing token continues to reference the same PAN with the updated information. Benefits for clients include:
  * PAN data being always up-to-date
  * Sensitive information being stored in vaulted environment
  * Reduced PCI scope & compliance costs
  * Potential for lower processing fees
  * Higher authorization rates

The IXOPAY platform provides network token services as a Token Requestor Aggregator service, approved by Visa and Mastercard, allowing clients to:
  * Request a Token Requester ID (TRID) from **both** schemes (VISA, Mastercard)
  * request network tokens from Visa and Mastercard on behalf of merchants (OBTR/TR-TSP) and handle network token lifecycle events, as well as store and delete network tokens for PAN data (in the IXOPAY platform PCI Vault)
  * Use network tokens to process transactions made by return customers (card on file), provided the adapter supports network tokens

Furthermore the Analytics and Reporting Capabilities of the IXOPAY platform will be adopted in regards to network tokens.
note
The Network Token Services is only available in the Production environment.
## IXOPAY Network Token Services Permissions[​](https://documentation.ixopay.com/manual/docs/tokenization/nt#ixopay-network-token-services-permissions "Direct link to IXOPAY Network Token Services Permissions")
To be able to setup the feature, the permissions **network-tokenization.enrollment.*** must be enabled for your tenant and activated for your [Admin User Role](https://documentation.ixopay.com/manual/docs/system-setup/roles) (see Network Token Services Permission). This will be done by our Customer Success Team for you.
![Network Token Services Permission](https://documentation.ixopay.com/manual/assets/ideal-img/network-token-services-permission.97c61f0.1280.png)Network Token Services Permission
note
Testing [IXOPAY](https://www.ixopay.com)'s Network Token Services you can use the SimulatorPCI adapter configured with **useSimulatorNetworkTokenization** set to **True**.
![Simulator useSimulatorNetworkTokenization](https://documentation.ixopay.com/manual/assets/ideal-img/simulator-use-simulator-network-tokenization.71a1559.1280.png)Simulator useSimulatorNetworkTokenization
## Merchant Enrollment[​](https://documentation.ixopay.com/manual/docs/tokenization/nt#merchant-enrollment "Direct link to Merchant Enrollment")
Once activated for the admin user role, a so called Token Requester ID (TRID) can be requested for both card schemes upon enrollment for the network token services.
Enroll a Merchant for the network token services, by:
  1. Navigate to the **Tokenization** section, sub-section **Network Tokenization** (see Merchant Enrollment).
  2. In the **Enrollment** Tab, select **+ Enroll**.
  3. Select either
    1. **+ New Enrollment Request,** in case you want to request a new TRID for the Merchant
      1. Fill in the **additional merchant information** requested by the card schemes for a new enrollment (see Additional Merchant Information).
      2. Select **+ Create** and create the new enrollment. Once started, the enrollment can be seen in the overview in state **pending** and can be **cancelled**.
      3. In case the enrollment is **rejected** , you will receive a notification including a comment as to why the enrollment got rejected (e.g. insufficient or wrong merchant information). A new enrollment request for this merchant can be started in case of a **rejected** or **cancelled** enrollment.
    2. **+ Assign TRID,** in case you want to assign an existing TRID to a Merchant.

Once enrollment is **successful** and the TRID has been generated and/or assigned to the merchant, tokenization is automatically enabled for all credit card connectors of this merchant, with default configuration to tokenize PAN data of any register or withRegister transaction before processing the transaction. Each tokenization is creating a **register-nt** transaction.
Network tokenization can be disabled for specific connectors on connector level via configuration as well as globally (see Connector Configuration).
![Merchant Enrollment](https://documentation.ixopay.com/manual/assets/ideal-img/merchant-enrollment.01d91db.1280.png)Merchant Enrollment![Additional Merchant Information](https://documentation.ixopay.com/manual/assets/ideal-img/additional-merchant-information.0fb7088.1280.png)Additional Merchant Information
note
Keep in mind that it might take up to 3 business days before you will be able to create tokens after successfully enroll your Merchants due to technical scheme restrictions. Merchants sharing a Customer Profile or Tokens stored in the IXOPAY platform PCI Vault need to have the same TRID assigned in order to use Transaction Processing using network tokens.
## Connector Configuration[​](https://documentation.ixopay.com/manual/docs/tokenization/nt#connector-configuration "Direct link to Connector Configuration")
Want to exclude Network Tokenization for several connectors or change the configuration? Use our Global connector settings feature as described [here](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings).
To change the network tokenization behavior for a connector or exclude the connector, follow this steps:
  1. Go to the Connectors Overview on the configured merchant and click **Edit**.
  2. In the section **Settings** click on **Edit** (see Connector Details View).
  3. Search for the **Tokenization - Network Tokenization** and click **+Add** (see Select Setting).
  4. Select the value to **Disabled** , **Before transaction processing** or **After transaction processing** (see Select Setting) and click **Save**.

![Select Setting](https://documentation.ixopay.com/manual/assets/ideal-img/select-setting.34bc6a3.479.png)Select Setting
note
Clients with already stored PAN data need to contact our Customer Success Management team to initialize the tokenization of the existing data.
## Transaction Processing using Network Tokens[​](https://documentation.ixopay.com/manual/docs/tokenization/nt#transaction-processing-using-network-tokens "Direct link to Transaction Processing using Network Tokens")
Network tokens will be used for transaction processing in case the adapter supports it. Depending on your connector configuration either starting from the initial register, debit+register and preauth+register transactions or the first transaction made by return customers (card on file) after that initial transaction (see Transaction Details - Additional Data).
![Transaction Details - Additional Data](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-additional-data.c145b43.704.png)Transaction Details - Additional Data
note
Depending on your business case it might make sense either to select the option to tokenize card data before (potential for lower processing fees) or after (shorter processing times) transaction processing. Keep in mind, that network tokens can only be used with adapters that support transaction processing using network tokens This is indicated in IXOPAY’s Adapter Catalog under the adapter’s capabilities ("Network Tokens (IXO-based)").
## Network Token Lifecycle[​](https://documentation.ixopay.com/manual/docs/tokenization/nt#network-token-lifecycle "Direct link to Network Token Lifecycle")
Network Tokens Lifecycle Events received from the card schemes, such as:
  * Token active
  * Token suspended
  * Token unsuspended
  * Token deleted
  * Product configuration change (e.g. card art)
  * Underlying PAN changed

will trigger a postback notification will be sent. For further details have a look in the
[API Documentation — Network token notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification)
(see Network Token Status)
By default the PAN data and the network token are stored in the IXOPAY PCI Vault. You have the option to either deregister only the network token (**deregister-nt**) or only the PAN data (**deregister-pan**) or deregister both (**deregister = deregister-pan** + **deregister-nt)** with one API call (see Transaction Details - Register Transaction). Keep in mind that deregistering both, PAN data and network token will automatically create a **deregister-pan** and **deregister-nt** transaction (see [API Documentation - Deregister TokenType](https://documentation.ixopay.com/api/transaction/deregister)).
![Network Token Status](https://documentation.ixopay.com/manual/assets/ideal-img/network-token-status.367cb30.1280.png)Network Token Status![Transaction Details - Register Transaction](https://documentation.ixopay.com/manual/assets/ideal-img/transaction-details-register-transaction.2e5c903.1280.png)Transaction Details - Register Transaction