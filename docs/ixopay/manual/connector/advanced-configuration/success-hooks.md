---
title: Success Hooks
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Success
  Hooks'
tags:
- configuring-hooks-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-success-hooks-configuring-hooks-direct-link-configuring-hooks
- send-sendgrid-mail-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-success-hooks-send-sendgrid-mail-direct-link-send-sendgrid-mail
- send-success-mail-customer-paybylink-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-success-hooks-send-success-mail-customer-paybylink-direct-link-send-success-mail-customer-paybylink
- send-success-mail-merchant-paybylink-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-success-hooks-send-success-mail-merchant-paybylink-direct-link-send-success-mail-merchant-paybylink
- create-mandate-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-success-hooks-create-mandate-direct-link-create-mandate
- api
- ixopay
- recurring
- sepa
- credit-card
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks
portal: ixopay-manual
updated: '2026-05-04'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Success Hooks

# Success Hooks
Success hooks allows you to perform automatic custom Actions once a Transaction reaches the success state. The setting is configured per Connector, but can also be configured as a [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings).
The following hooks are currently available:
  * Send Sendgrid Mail
  * Send Success Mail to customer / merchant
  * Create Mandate

note
Not all options may be applicable to you.
## Configuring hooks[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks#configuring-hooks "Direct link to Configuring hooks")
To configure hooks follow this steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click **Edit** on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Hooks: Transaction Success** and click **Add** (see Connector Settings)
  4. Configure the mandatory parameters and click **Save** (see Hook Type: Send Sendgrid Mail)

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-success-hooks.7a85116.1280.png)Connector Detail Overview![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-success-hooks.59ce404.1134.png)Connector Settings![Hook Type: Send Sendgrid Mail](https://documentation.ixopay.com/manual/assets/ideal-img/hook-type-send-sendgrid-mail.1118077.1128.png)Hook Type: Send Sendgrid Mail
## Send Sendgrid Mail[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks#send-sendgrid-mail "Direct link to Send Sendgrid Mail")
This hook triggers a send-email request to a configured SendGrid Account.
Hook Type: **Send Sendgrid Mail**
Mandatory Parameters (see Hook Type: Send Sendgrid Mail):
  * **apiKey** - API Key of your SendGrid Account
  * **templateID** - template ID of the desired mail template (configured in SendGrid)
  * **from** - Sender email address

Optional Parameters:
  * **to** - Email of recipient. This parameter should only be used if **_all_** emails should be sent to the email specified here. Without a "to" parameter, emails will per default be sent to the customer email
  * **subject** - Subject of email. When specifying a subject, make sure to add the placeholder in the SendGrid template (see SendGrid Template Configuration)
  * **cc** - CC recipients of email
  * **bcc** - BCC recipients of email
  * **from_name** - Sender name (usually appears in mail clients alongside with the mail address, e.g. `Alex Smith `)

There are additional dynamic fields available to be used in these templates (see table below) (e.g. `{{transaction.amount}}`).
![SendGrid Template Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/sendgrid-template-configuration.c9fbfb5.385.png)SendGrid Template Configuration  
| Dynamic Field  | Description  |  
| --- | --- |  
| transaction.uuid  | Transaction UUID  |  
| transaction.createdAt  | in format YYYY-MM-DD hh:mm (in UTC)  |  
| transaction.createdAtMerchantTz  | in format YYYY-MM-DD hh:mm (for the configured merchant timezone)  |  
| transaction.amount  | Transaction amount  |  
| transaction.currency  | Transaction currency  |  
| transaction.description  | Transaction description  |  
| transaction.descriptor  | Payment descriptor (see API Documentation)  |  
| transaction.status  | Transaction status  |  
| transaction.MerchantTxId  | Merchant transaction ID  |  
| transaction.adapterTxId  | Adapter transaction ID  |  
| transaction.method  | Payment Method (see API Documentation)  |  
| transaction.type  | Transaction type  |  
| transaction.testMode  | Boolean value if transaction was processed in test mode  |  
| transaction.additionalId1  | Transaction Additional ID 1  |  
| transaction.additionalId2  | Transaction Additional ID 2  |  
| transaction.MerchantMetaData  | Transaction Merchant Meta Data  |  
| customer.identification  | Customer identification  |  
| customer.firstName  | Customer's first name  |  
| customer.lastName  | Customer's last name  |  
| customer.birthDate  | Customer's birth date  |  
| customer.billingAddress1  | Customer's billing address 1  |  
| customer.billingAddress2  | Customer's billing address 2  |  
| customer.billingCity  | Customer's billing city  |  
| customer.billingPostcode  | Customer's billing postcode  |  
| customer.billingState  | Customer's billing state  |  
| customer.billingCountry  | Customer's billing country  |  
| customer.billingPhone  | Customer's billing phone number  |  
| customer.shippingFirstname  | Customer's shipping first name  |  
| customer.shippingLastname  | Customer's shipping last name  |  
| customer.shippingCompany  | Customer's shipping company  |  
| customer.shippingAddress1  | Customer's shipping address 1  |  
| customer.shippingAddress2  | Customer's shipping address 2  |  
| customer.shippingCity  | Customer's shipping city  |  
| customer.shippingPostcode  | Customer's shipping postcode  |  
| customer.shippingState  | Customer's shipping state  |  
| customer.shippingCountry  | Customer's shipping country  |  
| customer.shippingPhone  | Customer's shipping phone number  |  
| customer.company  | Customer's company  |  
| customer.email  | Customer's email  |  
| customer.ipAddress  | Customer's IP address  |  
| customer.nationalId  | Customer's national Identification  |  
| customer.iban  | if used: customer IBAN number  |  
| customer.bic  | if used: customer BIC number  |  
| customer.gender  | Customer's Gender  |  
| customer.extraData  | Customer Extra Data  |  
| customer.mandateId  | if used: customer mandate ID  |  
| customer.mandateDate  | if used: customer mandate date  |  
| card.type  | if used: creditcard type  |  
| card.cardHolder  | if used: creditcard holder name  |  
| card.expiryMonth  | if used: creditcard expiry month  |  
| card.expiryYear  | if used: creditcard expiry year  |  
| card.firstSixDigits  | if used: creditcard's first six digits  |  
| card.lastFourDigits  | if used: creditcard's last four digits  |  
## Send Success Mail to customer (PayByLink)[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks#send-success-mail-to-customer-paybylink "Direct link to Send Success Mail to customer \(PayByLink\)")
This hook triggers an email to be sent to the customer email address.
Hook Type: **Send Success Mail to customer (PayByLink)**
There are no mandatory Parameters to be added.
Email templates to be used, need to be configured in the [Pay-By-Link Tab](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink) for this connector.
![Connector Setting Send Success Mail to customer \(PayByLink\)](https://documentation.ixopay.com/manual/assets/ideal-img/connector-setting-send-success-mail-to-customer-paybylink-.215561d.1280.png)Connector Setting Send Success Mail to customer (PayByLink)
note
Emails are only sent for transaction types debit, pre-auth, register and payout and only if additionally the [Connector Setting](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings) **Virtual Terminal: Send a confirmation email after a successful transaction** is enabled.
## Send Success Mail to merchant (PayByLink)[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks#send-success-mail-to-merchant-paybylink "Direct link to Send Success Mail to merchant \(PayByLink\)")
This hook triggers an email to be sent to the specified merchant email address.
Hook Type: **Send Success Mail to merchant (PayByLink)**
Mandatory Parameters (see Connector Setting Send Success Mail to merchant (PayByLink)):
  * **email** - Merchant email address the email should be sent to

Email templates to be used, need to be configured in the [Pay-By-Link Tab](https://documentation.ixopay.com/manual/docs/connector-specific-features/paybylink) for this connector.
![Connector Setting Send Success Mail to merchant \(PayByLink\)](https://documentation.ixopay.com/manual/assets/ideal-img/connector-setting-send-success-mail-to-merchant-paybylink-.5b92904.1280.png)Connector Setting Send Success Mail to merchant (PayByLink)
note
Emails are only sent for transaction types debit, pre-auth, register and payaut and only if additionally the [Connector Setting](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings) **Virtual Terminal: Send a confirmation email after a successful transaction** is enabled
## Create Mandate[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/success-hooks#create-mandate "Direct link to Create Mandate")
This hook triggers a Mandate ID to be created and added in the Payment Data section of the Transaction Details for Transaction Type Register.
Hook Type: **Create Mandate**
Mandatory Parameters (see Connector Setting Create Mandate):
  * **connector** - GUID of the [Sepa Connector](https://adapters.ixopay.com/en/payment-adapter/sepa-express) to be used for the Transaction Processing

![Connector Setting Create Mandate](https://documentation.ixopay.com/manual/assets/ideal-img/connector-setting-create-mandate.dab902b.1280.png)Connector Setting Create Mandate
tip
This Hock Type should only be used for the combination of Adapters [Fintec](https://adapters.ixopay.com/en/payment-adapter/fintecsystems) (for transactions of type register) and [SepaExpressV1](https://adapters.ixopay.com/en/payment-adapter/sepa-express) (for recurring transactions of type debit).
In any other case we recommend to use the mandate flow of Adapter [SepaExpressV2](https://adapters.ixopay.com/en/payment-adapter/sepa-express) as described in the Adapter-specific Guides Sepa.