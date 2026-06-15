---
title: Stripe
summary: 'Depending on the chosen method the a subset of the following parameters
  for the Connector need to be configured see Connector Config - Stripe: 1. Fill in
  the mandatory Username 2.'
tags:
- stripe-https-documentation-ixopay-com-manual-adapters-stripe-stripe-direct-link-stripe
- stripe-creditcard-https-documentation-ixopay-com-manual-adapters-stripe-stripe-creditcard-direct-link-stripe-creditcard
- statement-descriptor-https-documentation-ixopay-com-manual-adapters-stripe-statement-descriptor-direct-link-statement-descriptor
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-stripe-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-stripe-provider-settlement-direct-link-provider-settlement
- fee-report-mapped-fields-https-documentation-ixopay-com-manual-adapters-stripe-fee-report-mapped-fields-direct-link-fee-report-mapped-fields
- settlement-report-mapped-fields-https-documentation-ixopay-com-manual-adapters-stripe-settlement-report-mapped-fields-direct-link-settlement-report-mapped-fields
- api
- json
- webhook
source_url: https://documentation.ixopay.com/manual/adapters/stripe
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* Stripe

# Stripe
## Stripe[​](https://documentation.ixopay.com/manual/adapters/stripe#stripe-1 "Direct link to Stripe")
Depending on the chosen method the a subset of the following parameters for the Connector need to be configured (see Connector Config - Stripe):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the mandatory **API Secret**
  4. Fill in the mandatory **Public Key** (Bank Transfer)
  5. Fill in the mandatory **Webhook Secret** (ACH Credit Transfer)
  6. Fill in the mandatory **Private Key** (ACH Credit Transfer)

![Connector Config - Stripe](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-stripe.d76df71.1280.png)Connector Config - Stripe
Additional Extra Data is available to be configured:
  1. Fill in the optional **Extra Data: descriptor**
  2. Fill in the mandatory **Extra Data:** **publishableKey** (mandatory for Method Creditcard)
  3. Fill in the mandatory **Extra Data:** **connectAccountId** (for Stripe Connect Accounts)
  4. Fill in the optional **Extra Data: currencyForRegister** (Method Creditcard - Stripe Elements)
  5. Fill in the optional **Extra Data: registerWithAuthorize** : True, False (Method Creditcard - Stripe Elements)

## Stripe Creditcard[​](https://documentation.ixopay.com/manual/adapters/stripe#stripe-creditcard "Direct link to Stripe Creditcard")
Configure the following parameters for the Connector (see Connector Detail Overview - Stripe Connect Creditcard - Vault Configuration):
  1. Fill in the mandatory **Stripe Connect Account Key**
  2. Fill in the mandatory **API Key**
  3. Select and fill in the optional **Descriptor, Static Descriptor, Prefix Descriptor** (see [Descriptor](https://documentation.ixopay.com/manual/adapters/stripe#statement-descriptor))
  4. Enable optional **Send final capture field** to support partial / final capture

![Connector Detail Overview - Stripe Connect Creditcard - Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-stripe-connect-creditcard-vault-configuration.988eaa2.1280.png)Connector Detail Overview - Stripe Connect Creditcard - Vault Configuration
info
For Transaction types **partial capture** , make sure the feature is enabled on your Stripe account
## (Statement) Descriptor[​](https://documentation.ixopay.com/manual/adapters/stripe#statement-descriptor "Direct link to \(Statement\) Descriptor")
info
Keep in mind that statement descriptors need to comply to several requirements:
  * Contains only Latin characters.
  * Contains between 5 and 22 characters, inclusive.
  * Contains at least one letter (if using a prefix and a suffix, both require at least one letter).
  * Doesn’t contain any of the following special characters: `<`, `>`, `\`, `'`, `"`, `*`.
  * Reflects your Doing Business As (DBA) name.
  * Contains more than a single common term or common website URL. A website URL only is acceptable if it provides a clear and accurate description of a transaction on a customer’s statement.

A static statement descriptor or the shortened descriptor can be configured in Stripe Dashboard "" (see Dashboard descriptor and shortened descriptor).
![Dashboard descriptor and shortened descriptor](https://documentation.ixopay.com/manual/assets/ideal-img/dashboard-descriptor-and-shortened-descriptor.e82d5a1.934.png)Dashboard descriptor and shortened descriptor
Additionally in the Vault Setup for Stripe you can:
  1. Select the optional **Descriptor** - None, Use Transaction Description, Use static Descriptor value (next field), Concatenate Prefix Descriptor with transaction description
  2. Fill in the conditional **Static Descriptor** (when **Use static Descriptor value** is selected)
  3. Fill in the conditional **Prefix Descriptor**(when **Concatenate Prefix Descriptor** is selected)

![PCI Vault Configuration - Creditcard Stripe Connect PCI](https://documentation.ixopay.com/manual/assets/ideal-img/pci-vault-configuration-creditcard-stripe-connect-pci.62657d9.1280.png)PCI Vault Configuration - Creditcard Stripe Connect PCI
If **None** is selected the pre-configured Statement Descriptor from the Stripe Dashboard is used.
Set a dynamic statement descriptor by selecting **Use Transaction Description**. This will use the transaction description (if available) as a statement descriptor.
If you select **use static value (next field)** the shortened descriptor you have chosen in your Stripe dashboard will be overwritten by the **Static Descriptor**.
Set a dynamic statement descriptor with prefix by selecting **Concatenate Prefix Descriptor with transaction description**. This will then concatenate the Prefix Descriptor (provided in the Prefix Descriptor field below) with the transaction description as the statement descriptor.
note
Keep in mind that the concatenated descriptor must not exceed 22 characters, when composing the **Prefix Descriptor** otherwise exceeding characters will be cut off.
Furthermore only credit card charges are supported for dynamic suffixes.
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/stripe#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Enable and Set Up Reconciliation on the Provider Level](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider (see Edit Provider).
![Edit Provider](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider.1c19a87.1280.png)Edit Provider
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/stripe#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch Settlement (json format) via an API (see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in the expected **Interval** in which the Provider Settlement File should be fetched - days, hours
  2. Select the Adapter **Stripe** or **Stripe Direct**
  3. Enable **Testmode** to test fetching of Provider Settlements from the Stripe Sandbox (URL used …), disabled the Stripe Production (URL …) environment is used
  4. Fill in the mandatory **Extra Data: stripeApiKey** - used for authentication
  5. Select the optional **Extra Data: reportType** used to specify the desired settlement report, if nothing is selected the report type `payout_reconcilication.itemized.5` used by default
  6. Select the optional **Extra Data: retrievePayoutReference** - true, false

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.2d71a05.984.png)Edit Provider Settlement Data Fetcher Provider Level
#### Settlement fields[​](https://documentation.ixopay.com/manual/adapters/stripe#settlement-fields "Direct link to Settlement fields")
##### Batch number[​](https://documentation.ixopay.com/manual/adapters/stripe#batch-number "Direct link to Batch number")
In case of payout reconciliation the Stripe's automatic_payout_id as settlement batch number.
In case of fee report `fee_report_{date}` e.g. `fee_report_20240423` as settlement batch number.
##### Payment reference[​](https://documentation.ixopay.com/manual/adapters/stripe#payment-reference "Direct link to Payment reference")
With the data fetcher setting "retrievePayoutReference" the payout reference is retrieved and stored the returned value "reference" on the [IXOPAY platform](https://www.ixopay.com) side as payment reference.
## Fee Report Mapped fields[​](https://documentation.ixopay.com/manual/adapters/stripe#fee-report-mapped-fields "Direct link to Fee Report Mapped fields")  
| Stripe  | IXOPAY platform  | Default (if not set by Stripe)  |  
| --- | --- | --- |  
| `incurred_at`  | Settlement Date  | None  |  
| `charge_id`  | Reference ID  | None  |  
| `refund_id`  | Reference ID  | None  |  
| `dispute_id`  | Reference ID  | None  |  
| `card_scheme`  | scheme fee  | None  |  
| `non_transactional_card_scheme`  | markup fee  | None  |  
| `interchange`  | interchange fee  | None  |  
| `discount`  | normal fee  | None  |  
| `blended_fee`  | gateway fee  | None  |  
| `per_auth_fee`  | gateway fee  | None  |  
| `per_sale_fee`  | gateway fee  | None  |  
| `volume_fee`  | gateway fee  | None  |  
| `billing_currency`  | Transaction Fee Currency  | None  |  
| `total_amount`  | Transaction Fee Amount  | None  |  
## Settlement Report Mapped fields[​](https://documentation.ixopay.com/manual/adapters/stripe#settlement-report-mapped-fields "Direct link to Settlement Report Mapped fields")  
| Stripe  | IXOPAY platform  | Default (if not set by Stripe)  |  
| --- | --- | --- |  
| `payment_metadata[uuid]`  | Transaction ID  | Null  |  
| `automatic_payout_id`  | Settlement Batch Number  | Null  |  
| `gross`  | Settlement Amount  | None  |  
| `source_id`  | Reference ID  | None  |  
| `automatic_payout_effective_at_utc`  | Settlement Date  | None  |  
| `currency`  | Settlement Currency  | None  |  
| `fee`  | Settlement Fee Data  | No settlement fee data  |  
| `description`  | Line Item Title  | None  |